#!/usr/bin/bash
pkg update && pkg upgrade
pkg install nodejs
pkg install ffmpeg
pkg install wget
npm install
echo "[*] All dependencies have been installed, please run the command \"npm start\" to immediately start the script"
