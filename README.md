# ICP-Airways


# creating flights table
```SQL
CREATE TABLE Flights (ID int NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) , Year int , Month smallint , DayofMonth smallint , DepTime int,  CRSDepTime int , ArrTime int, CRSArrTime int, FlightNum int, TailNum varchar(255), ActualElapsedTime smallint, CRSElapsedTime smallint, Airtime smallint, ArrDelay smallint, DepDelay smallint,   Origin varchar(255), Dest varchar(255), Distance smallint , PRIMARY KEY (ID) );
```
