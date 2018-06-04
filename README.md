# ICP-Airways

# creating flights table
```SQL
CREATE TABLE Flights (ID int NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) , Year int NULL , Month smallint NULL, DayofMonth smallint NULL, DepTime int NULL,  CRSDepTime int NULL, ArrTime int NULL, CRSArrTime int NULL, FlightNum int NULL, TailNum varchar(255) NULL, ActualElapsedTime smallint NULL, CRSElapsedTime smallint NULL, Airtime smallint NULL, ArrDelay smallint NULL, DepDelay smallint NULL,   Origin varchar(255) NULL, Dest varchar(255) NULL, Distance smallint NULL, PRIMARY KEY (ID) );
```