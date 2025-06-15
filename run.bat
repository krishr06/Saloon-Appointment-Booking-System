@echo off
cd saloon && start npm run dev
cd ../backend && start npm start
timeout /t 5 /nobreak >nul
start http://localhost:5173/
