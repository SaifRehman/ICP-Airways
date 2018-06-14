#! /bin/bash
echo "hello"
su - db2inst1 -c 'db2start'
su - db2inst1 -c 'db2 create database SAMPLE'
su - db2inst1 -c 'db2 connect to SAMPLE'