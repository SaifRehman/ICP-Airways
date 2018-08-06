#!/bin/bash
nohup moneyd xrp:start --testnet --admin-api-port 7769 &
sleep 5
nohup npm start  &
sleep 5
moneyd-gui
