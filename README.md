# ICP-Airways
### Pre-req installation 
1. Install [Nodejs](https://nodejs.org/en/download/)
2. Install [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
3. Intall [Docker](https://docs.docker.com/install/)
4. Install [Angular4Cli](https://cli.angular.io)
5. Install [DBVisualiser](https://www.dbvis.com/download/)
6. Install [minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/)
7. Install [Hypervisor-virtualbox](https://www.virtualbox.org/wiki/Downloads)
8. Install gulpcli 
``` s
$ npm i gulp-cli -g
```

### Microservices available 
* [x] Booking-microservice
* [x] Checkin-microservice
* [x] Listing-microservice
* [x] Login-microservice
* [x] Signup-microservice
* [x] Db2-microservice
* [x] Jenkins-microservice

### Point to local docker registery to minikube
```s
$ eval $(minikube docker-env)
```
### Install all dependencies and create images 
1. Booking Microservice
```
$ cd booking-microservice
$ npm i
$ gulp scripts
$ docker build -t booking-microservice .
```
2. Checkin Microservice
```
$ cd checkin-microservice
$ npm i
$ gulp scripts
$ docker build -t checkin-microservice .
```
3. Listing Microservice
```
$ cd listing-microservice
$ npm i
$ gulp scripts
$ docker build -t listing-microservice .
```
4. Login Microservice
```
$ cd login-microservice
$ npm i
$ gulp scripts
$ docker build -t login-microservice .
```
5. Signup Microservice
```
$ cd signup-microservice
$ npm i
$ gulp scripts
$ docker build -t signup-microservice .
```
6. Db2 Microservice
```
$ cd db2-microservice
$ npm i
$ gulp scripts
$ docker build -t db2-microservice .
```
7. Jenkins Microservice
```
$ docker build -t jenkins .
```
### Running DB2 Locally
1. Pull Image and start container
```s
$ docker run -it -p 50000:50000 -e DB2INST1_PASSWORD=db2inst1-pwd -e LICENSE=accept ibmcom/db2express-c:latest bash
```
2. Start DB2 and create sample DB
```s
$ su - db2inst1
$ db2start
$ db2sampl
```
3. Download dataset to the container
```s
$ wget https://raw.githubusercontent.com/SaifRehman/ICP-Airways/master/dataset/flights.csv 
```
4. Set permissions
```s
$ chown db2inst1:db2inst1 flights.csv
```
5. Connect to db
```s
$ db2 connect to SAMPLE
```
6. Import csv data to db2 database
```s
$ db2  IMPORT FROM "path/to/file/flights.csv" OF DEL INSERT INTO SAMPLE.FlightsData
```
> Before loading csv data to db2, create flights table below, use dbvisualizer

### creating flights table
```SQL
CREATE TABLE "SAMPLE.FlightsData (ID int NOT NULL , Year varchar(255) NULL , Month varchar(255) NULL, DayofMonth varchar(255) NULL, DepTime varchar(255) NULL,  CRSDepTime varchar(255) NULL, ArrTime varchar(255) NULL, CRSArrTime varchar(255) NULL, FlightNum varchar(255) NULL, TailNum varchar(255) NULL, ActualElapsedTime varchar(255) NULL, CRSElapsedTime varchar(255) NULL, Airtime varchar(255) NULL, ArrDelay varchar(255) NULL, DepDelay varchar(255) NULL,   Origin varchar(255) NULL, Dest varchar(255) NULL, Distance varchar(255) NULL, PRIMARY KEY (ID))"
```
### creating usertable
```SQL
CREATE TABLE "SAMPLE.UserData (UserID int NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) , LastName varchar(255) NULL , FirstName varchar(255) NULL, Location varchar(255) NULL, Email varchar(255) NULL,  Password varchar(255) NULL, Age int NULL, PRIMARY KEY (UserID))"
```
### creating booking table
```SQL
CREATE TABLE SAMPLE.Booking "(BookingID int NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) ,TS TIMESTAMP NOT NULL , Checkin varchar(255) NOT NULL, UserID INT NOT NULL, FlightID INT NOT NULL, FOREIGN KEY (UserID) REFERENCES SAMPLE.UserData(UserID), FOREIGN KEY (FlightID) REFERENCES SAMPLE.FlightsData(ID), PRIMARY KEY (BookingID))"
```

### Running nodejs app
1. Install [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
2. Run ``` gulp scripts``` to convert ts to js
3. Run ```npm start```

### Architecture Diagram
![1](arch_diagram.png)