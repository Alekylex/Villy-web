@echo off
cd /d "%~dp0"
start "" powershell -NoProfile -ExecutionPolicy Bypass -WindowStyle Minimized -File "%~dp0server.ps1" -Port 8090 -Root "%~dp0."
timeout /t 2 >nul
start "" "http://localhost:8090/Seaside-Villa-website/site/index.html"
start "" "http://localhost:8090/Horizon-Villa-website/Tenerife%%20website/site/index.html"
