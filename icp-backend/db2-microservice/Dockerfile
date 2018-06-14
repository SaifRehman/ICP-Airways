FROM ibmcom/db2express-c:latest

ENV DB2INST1_PASSWORD=password
ENV LICENSE=accept
USER root
RUN /bin/bash -c 'su - db2inst1 -c "db2start && \
 db2 create database SAMPLE && db2 connect to SAMPLE && \ 
 wget https://raw.githubusercontent.com/SaifRehman/ICP-Airways/master/dataset/flights.csv && \
 chown db2inst1:db2inst1 flights.csv" && \
 db2 CREATE TABLE "SAMPLE.FlightsData (ID int NOT NULL , Year varchar(255) NULL , Month varchar(255) NULL, DayofMonth varchar(255) NULL, DepTime varchar(255) NULL,  CRSDepTime varchar(255) NULL, ArrTime varchar(255) NULL, CRSArrTime varchar(255) NULL, FlightNum varchar(255) NULL, TailNum varchar(255) NULL, ActualElapsedTime varchar(255) NULL, CRSElapsedTime varchar(255) NULL, Airtime varchar(255) NULL, ArrDelay varchar(255) NULL, DepDelay varchar(255) NULL,   Origin varchar(255) NULL, Dest varchar(255) NULL, Distance varchar(255) NULL, PRIMARY KEY (ID))"'