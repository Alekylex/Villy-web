# Stahne nejnovejsi verzi webu z GitHubu (vetev main) do teto slozky.
# Kdyz neni internet nebo se neco pokazi, nic se nemeni a otevre se posledni stazena verze.
$root = $PSScriptRoot
try {
  if ((Test-Path (Join-Path $root '.git')) -and (Get-Command git -ErrorAction SilentlyContinue)) {
    git -C $root pull --ff-only origin main
    if ($LASTEXITCODE -eq 0) { exit 0 }
  }
  [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
  $tmp = Join-Path $env:TEMP ("villy-web-" + [guid]::NewGuid())
  New-Item -ItemType Directory $tmp -ErrorAction Stop | Out-Null
  $zip = Join-Path $tmp 'main.zip'
  Invoke-WebRequest -UseBasicParsing 'https://github.com/Alekylex/Villy-web/archive/refs/heads/main.zip' -OutFile $zip -ErrorAction Stop
  Expand-Archive $zip $tmp -ErrorAction Stop
  # Spoustec se prave provadi, proto ho neprepisujeme.
  robocopy (Join-Path $tmp 'Villy-web-main') $root /E /XF "OTEVRIT WEBY.bat" /NFL /NDL /NJH /NJS /NP | Out-Null
  if ($LASTEXITCODE -ge 8) { throw "robocopy skoncil s kodem $LASTEXITCODE" }
  Remove-Item $tmp -Recurse -Force -ErrorAction SilentlyContinue
  Write-Host "Weby aktualizovany z GitHubu."
} catch {
  Write-Host "Aktualizace z GitHubu se nepovedla, otviram posledni stazenou verzi. ($_)"
  Start-Sleep -Seconds 3
}
