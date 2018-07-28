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

Method: GET

Example input:

```JSON
{
  lastName: String,
  firstName: String,
  location: String,
  email: String,
  password: String,
  age: String,
  tier: String,
}
```