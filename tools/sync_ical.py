"""Sync booked dates from Booking.com / Airbnb into the two villa websites.

Booking.com and Airbnb each give every property a private iCal link
(Booking extranet: Rates & availability > Sync calendars > Export calendar;
Airbnb: Calendar > Availability > Connect calendars > Export calendar).
This script downloads those calendars and writes only the booked DATES into
<site>/js/booked.js, which the booking calendar on the website reads.
No guest names or other personal data are kept.

The iCal links are private, so they are NOT stored in this repository.
They come from environment variables (GitHub Actions secrets):

    ICAL_HORIZON   one or more links for Horizont Villa, separated by spaces or commas
    ICAL_SEASIDE   the same for Seaside Villa

A villa whose variable is empty is left untouched.

Run by hand:  ICAL_SEASIDE="https://..." python tools/sync_ical.py
"""
import datetime as dt
import json
import os
import re
import sys
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITES = {
    "ICAL_HORIZON": os.path.join(ROOT, "Horizon-Villa-website", "Tenerife website", "site", "js", "booked.js"),
    "ICAL_SEASIDE": os.path.join(ROOT, "Seaside-Villa-website", "site", "js", "booked.js"),
}

HEADER = """/* =========================================================================
   GENERATED FILE — DO NOT EDIT BY HAND.

   Written by tools/sync_ical.py from the Booking.com / Airbnb iCal feeds
   (links kept as GitHub secrets, see .github/workflows/sync-calendars.yml).
   Anything you type here is lost on the next sync.

   To block a date yourself (maintenance, your own stay, a booking taken by
   phone), add it to the `booked` list in js/config.js instead. The website
   uses both lists together.
   ========================================================================= */

"""


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "villa-calendar-sync/1.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8", errors="replace")


def parse_date(value):
    """DTSTART/DTEND value -> date. Handles 20270202, 20270202T150000 and ...Z."""
    m = re.match(r"(\d{4})(\d{2})(\d{2})", value.strip())
    return dt.date(int(m.group(1)), int(m.group(2)), int(m.group(3))) if m else None


def booked_ranges(ics):
    """Return [(check-in, check-out)] for every event. iCal DTEND is exclusive, i.e. the check-out day."""
    text = re.sub(r"\r?\n[ \t]", "", ics)          # unfold folded lines
    out = []
    for block in re.findall(r"BEGIN:VEVENT(.*?)END:VEVENT", text, re.S):
        fields = {}
        for line in block.splitlines():
            if ":" in line:
                k, v = line.split(":", 1)
                fields[k.split(";")[0].upper()] = v
        start = parse_date(fields.get("DTSTART", ""))
        end = parse_date(fields.get("DTEND", "")) or (start + dt.timedelta(days=1) if start else None)
        if start and end and end > start:
            out.append((start, end))
    return out


def merge(ranges):
    ranges = sorted(set(ranges))
    merged = []
    for a, b in ranges:
        if merged and a < merged[-1][1]:            # overlapping (touching ranges stay separate: turnover day)
            merged[-1] = (merged[-1][0], max(merged[-1][1], b))
        else:
            merged.append((a, b))
    return merged


def write_js(path, sources, ranges):
    today = dt.date.today()
    keep = [(a, b) for a, b in ranges if b >= today]   # past stays are not needed on the website
    data = {
        "updated": dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat(),
        "sources": sources,
        "ranges": [{"from": a.isoformat(), "to": b.isoformat()} for a, b in keep],
    }
    body = "window.VILLA_BOOKED = " + json.dumps(data, indent=2, ensure_ascii=False) + ";\n"
    new = HEADER + body
    old = open(path, encoding="utf-8").read() if os.path.exists(path) else ""
    # only rewrite when the dates changed, so the repository is not touched every few hours for nothing
    strip = lambda s: re.sub(r'"updated": "[^"]*",', "", s)
    if strip(old) == strip(new):
        print(f"  no change: {os.path.relpath(path, ROOT)}")
        return False
    open(path, "w", encoding="utf-8", newline="\n").write(new)
    print(f"  updated:   {os.path.relpath(path, ROOT)} ({len(keep)} booked periods)")
    return True


def main():
    failed = False
    for var, path in SITES.items():
        links = [u for u in re.split(r"[\s,]+", os.environ.get(var, "")) if u]
        if not links:
            print(f"{var}: not set, skipped")
            continue
        print(f"{var}: {len(links)} calendar(s)")
        ranges, sources = [], []
        try:
            for url in links:
                found = booked_ranges(fetch(url))
                host = re.sub(r"^https?://(www\.)?([^/]+).*$", r"\2", url)
                sources.append(host)
                ranges += found
                print(f"  {host}: {len(found)} events")
        except Exception as e:                      # keep the last good dates if a feed is down
            print(f"  ERROR fetching calendar, keeping previous dates: {e}")
            failed = True
            continue
        write_js(path, sorted(set(sources)), merge(ranges))
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
