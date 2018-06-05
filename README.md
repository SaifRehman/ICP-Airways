# ICP-Airways

# creating flights table
```SQL
CREATE TABLE SAMPLE.FlightsDATA (ID int NOT NULL , Year varchar(255) NULL , Month varchar(255) NULL, DayofMonth varchar(255) NULL, DepTime varchar(255) NULL,  CRSDepTime varchar(255) NULL, ArrTime varchar(255) NULL, CRSArrTime varchar(255) NULL, FlightNum varchar(255) NULL, TailNum varchar(255) NULL, ActualElapsedTime varchar(255) NULL, CRSElapsedTime varchar(255) NULL, Airtime varchar(255) NULL, ArrDelay varchar(255) NULL, DepDelay varchar(255) NULL,   Origin varchar(255) NULL, Dest varchar(255) NULL, Distance varchar(255) NULL, PRIMARY KEY (ID));
```

# inserting flights data in 
1. ``` chown db2inst1:db2inst1 flights.csv```
2. ```db2 connect to SAMPLE```
3. ```db2  IMPORT FROM "/flights.csv" OF DEL INSERT INTO SAMPLE.FlightsData```
