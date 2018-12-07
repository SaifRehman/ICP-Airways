#!/bin/bash
echo "building database ...."
nohup python app.py &
celery worker -A -B app.celery --loglevel=debug