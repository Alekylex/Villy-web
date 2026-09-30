@echo off
cd /d "%~dp0"
start "" powershell -NoProfile -ExecutionPolicy Bypass -WindowStyle Minimized -File "%~dp0server.ps1" -Port 8090 -Root "%~dp0."
timeout /t 2 >nul
set "WEB1=http://localhost:8090/Seaside-Villa-website/site/index.html"
set "WEB2=http://localhost:8090/Horizon-Villa-website/Tenerife%%20website/site/index.html"
set "CHROME=C:\Program Files\Google\Chrome\Application\chrome.exe"
if not exist "%CHROME%" set "CHROME=%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe"
if exist "%CHROME%" (
  start "" "%CHROME%" "%WEB1%" "%WEB2%"
) else (
  start "" "%WEB1%"
  start "" "%WEB2%"
)