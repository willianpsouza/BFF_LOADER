#!/bin/sh

pm2 start frontend.js -i 2
pm2 start backend.js -i 4
pm2 monit