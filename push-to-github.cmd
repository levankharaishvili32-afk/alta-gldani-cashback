@echo off
cd /d "%~dp0"
git add -A
git commit -m "Catalog update %date% %time%"
git push --force -u origin main
echo.
echo ===== DONE (if no errors above) =====
pause
