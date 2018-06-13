#!/bin/bash

#
#  Configure operation system for DB2 in a Docker container
#
# # Authors:
#   * Leo (Zhong Yu) Wu       <leow@ca.ibm.com>
#
# Copyright 2015, IBM Corporation
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.



###############################################################
#
#               Download and install DB2 Express-C
#
###############################################################

# Download DB2 Express-C from public bucket on AWS S3
# Note: you can update this script to copy/download image in your manners
cd /tmp && wget https://s3.amazonaws.com/db2-expc105-64bit-centos/v10.5fp5_linuxx64_expc.tar.gz
cd /tmp && tar xvf /tmp/v10.5fp5_linuxx64_expc.tar.gz && chmod +rw /tmp/expc

groupadd db2iadm1
useradd -G db2iadm1 db2inst1

su - db2inst1 -c "cd /tmp/expc/ && ./db2_install -b /home/db2inst1/sqllib && cat /home/db2inst1/sqllib/db2profile >> /home/db2inst1/.bash_profile"

# Enable remote connection
su - db2inst1 -c "sed -ri 's/ENABLE_OS_AUTHENTICATION=NO/ENABLE_OS_AUTHENTICATION=YES/g' /home/db2inst1/sqllib/instance/db2rfe.cfg"
su - db2inst1 -c "sed -ri 's/RESERVE_REMOTE_CONNECTION=NO/RESERVE_REMOTE_CONNECTION=YES/g' /home/db2inst1/sqllib/instance/db2rfe.cfg"
su - db2inst1 -c "sed -ri 's/\*SVCENAME=db2c_db2inst1/SVCENAME=db2c_db2inst1/g' /home/db2inst1/sqllib/instance/db2rfe.cfg"
su - db2inst1 -c "sed -ri 's/\*SVCEPORT=48000/SVCEPORT=50000/g' /home/db2inst1/sqllib/instance/db2rfe.cfg"
su - db2inst1 -c "db2set DB2COMM=TCPIP && db2stop force"

cd /home/db2inst1/sqllib/instance/ && ./db2rfe -f ./db2rfe.cfg

rm -rf /tmp/*