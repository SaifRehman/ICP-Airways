#  ICP-Airways
<h1 align="center">
  <br>
  <a href="https://github.com/SaifRehman/ICP-Airways"><img src="https://cdn.trycompose.co/c5aaf54dcc338e4843822288d662ad98.jpg" alt="Lotion" width="IBM"></a>
  <br>
      Air-Line ticketing and booking application on IBM Cloud Private 
  <br>
  <br>
</h1>

<h4 align="center">Powered by Nodejs, Kubernetes, Angular, and IBM Cloud Private</h4>

<p align="center">
  <a>
    <img src="https://img.shields.io/travis/keppel/lotion/master.svg"
         alt="Travis Build">
  </a>
</p>
<br>

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
* [x] Angular frontend microservice

### Point to local docker registery to minikube
```s
$ eval $(minikube docker-env)
```
### Install all dependencies and create images 
1. Booking Microservice
```s
$ cd booking-microservice
$ npm i
$ gulp scripts
$ docker build -t booking-microservice .
```
2. Checkin Microservice
```s
$ cd checkin-microservice
$ npm i
$ gulp scripts
$ docker build -t checkin-microservice .
```
3. Listing Microservice
```s
$ cd listing-microservice
$ npm i
$ gulp scripts
$ docker build -t listing-microservice .
```
4. Login Microservice
```s
$ cd login-microservice
$ npm i
$ gulp scripts
$ docker build -t login-microservice .
```
5. Signup Microservice
```s
$ cd signup-microservice
$ npm i
$ gulp scripts
$ docker build -t signup-microservice .
```
6. Db2 Microservice
```s
$ cd db2-microservice
$ docker build -t db2 .
```
7. Jenkins Microservice
```s
$ docker build -t jenkins .
```

### Start minikube
```s
$ minikube start
```

### Some minikube commands
1. Get minikube master ip
``` s
$ minikube get ip
```
2. Get minikube dashboard
```s
$ minikube dashboard
```
![3](3.png)
3. Get minikube nodes
```s
$ minikube get nodes
```
4. Minikube enable adons
```s
$ minikube addons enable ingress
```
5. Get all minikube addons enabled and disabled
```s
$ minikube addons enable ingress
```
> remeber to use same terminal session

### Running config maps and secrets
1. Running config maps to load env variable for our microservices
```s
$ cd configMaps-secrets/configMaps
$ kubectl create -f configMaps.yml
$ kubectl get configmap
```
2. Running secrets to load env variable for our microservices to load username and pass safely instead of hardcoding
```s
$ cd configMaps-secrets/secrets
$ kubectl create -f secrets.yml
$ kubectl get secrets
```
### Run jenkins in kubernetes 
1. Deploy 
```s
$ cd jenkins
$ kubectl create -f deployment.yml
```
2. get external svc port is it deployed to
```
$ kubectl get scv
```
2. access jenkins ```http://minikubeip:scvport```


![1](1.png) 

![2](2.png)


### Deploying DB2
1. Navigate to db2-microservice folder
```s
$ cd db2-microservice
```
2. Deploy to minikube
```s
$ kubectl create -f service-deployment.yml
```
3. Get pods name of db2
```s
$ kubectl get pods
```
4. ssh to pods container of db2
```s
$ kubectl exec -it podname bash
```
5. switch user to db2inst1
```s
$ su - db2inst1
```
6. Create Database and connect to it
```s
$ db2 create database SAMPLE
$ db2 connect to SAMPLE
```
7. Download existing flight data from github and set permissions
```s
$ wget https://raw.githubusercontent.com/SaifRehman/ICP-Airways/master/dataset/flights.csv
$ chown db2inst1:db2inst1 /home/db2inst1/flights.csv
```
8. Create Database and importing existing data to Flights table
* Flights Table
```SQL
db2 CREATE TABLE "SAMPLE.FlightsData (ID int NOT NULL , Year varchar(255) NULL , Month varchar(255) NULL, DayofMonth varchar(255) NULL, DepTime varchar(255) NULL,  CRSDepTime varchar(255) NULL, ArrTime varchar(255) NULL, CRSArrTime varchar(255) NULL, FlightNum varchar(255) NULL, TailNum varchar(255) NULL, ActualElapsedTime varchar(255) NULL, CRSElapsedTime varchar(255) NULL, Airtime varchar(255) NULL, ArrDelay varchar(255) NULL, DepDelay varchar(255) NULL,   Origin varchar(255) NULL, Dest varchar(255) NULL, Distance varchar(255) NULL, PRIMARY KEY (ID))"
``` 
* User Table
```SQL
db2 CREATE TABLE "SAMPLE.UserData (UserID int NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) , LastName varchar(255) NULL , FirstName varchar(255) NULL, Location varchar(255) NULL, Email varchar(255) NULL,  Password varchar(255) NULL, Age int NULL, PRIMARY KEY (UserID))"
```
* Booking Table
```SQL
db2 CREATE TABLE "SAMPLE.Booking (BookingID int NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) ,TS TIMESTAMP NOT NULL , Checkin varchar(255) NOT NULL, UserID INT NOT NULL, FlightID INT NOT NULL, FOREIGN KEY (UserID) REFERENCES SAMPLE.UserData(UserID), FOREIGN KEY (FlightID) REFERENCES SAMPLE.FlightsData(ID), PRIMARY KEY (BookingID))"
```
* Importing existing data to flights table
```s
$ db2  IMPORT FROM "/home/db2inst1/flights.csv" OF DEL INSERT INTO SAMPLE.FlightsData
```
### Deploying all backend microservices 
1. booking-microservice
```s
$ cd booking-microservice 
$ kubectl create -f service-deployment.yml
```
2. checkin-microservice
```s
$ cd checkin-microservice 
$ kubectl create -f service-deployment.yml
```
3. listing-microservice
```s
$ cd listing-microservice 
$ kubectl create -f service-deployment.yml
```
4. login-microservice
```s
$ cd login-microservice 
$ kubectl create -f service-deployment.yml
```
5. signup-microservice
```s
$ cd signup-microservice 
$ kubectl create -f service-deployment.yml
```
### Running Angular Microservice Frontend
1. Navigate to ```icp-frontend```
```s
$ cd icp-frontend
```
2. Build Docker image
```s
$ docker build -t angular .
```
3. Deploy
```s
$ kubectl create -f service-deployment.yml
```
### High level Architecture Diagram
![high](high_level_arch.png)

### Low level Architecture Diagram
![low](arch_diagram.png)