# Docs

## Microservices

### Frontend [80:30080]

Loads the UI and takes care of user sessions. Communicates with all other microservices.

#### Endpoints:

##### :30093/login [3003:30093]

Description: *Login Microservice* Logs in to the app

Method: GET

##### :30093/signup [3004:30094]

Description: *Sign Microservice* Signsup in to the api

Method: POST

Example input:

```JSON
{
  lastName: String,
  firstName: String,
  location: String,
  email: String,
  password: String,
  age: String,
  tier: String
}
```

##### :30090/book [3000:30090]

Description: *Booking Microservice* Book for a flight

Method: POST

Example input:

```JSON
{
  UserID: Integer,
  FlightID: Integer,
  OfferNamePricing: String,
  OfferTypePricing: String,
  CostPricing: String,
  OfferNameUpgrade: String,
  OfferTypeUpgrade: String,
  CostUpgrade: String,
}
```

##### :30090/listBookingByUser/:id [3000:30090]

Description: *Booking Microservice* Search all flights by its ID

Method: GET

##### :30091/checkin/:bookid/:userid [3001:30091]

Description: *Checkin Microservice* Checkin to a flight

Method: GET

```