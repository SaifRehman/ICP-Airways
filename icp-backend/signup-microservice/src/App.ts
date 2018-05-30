import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as passwordhash from 'password-hash'
// import * as passport from 'passport'
// import * as jwt from 'jsonwebtoken'
// import * as passportJWT from 'passport-jwt'
var dotenv = require('dotenv').config({ path: path.join('.env') })
var ibmdb = require('ibm_db');

class App {
  public firstName: String = "";
  public lastName: String = "";
  public age: Number = 0;
  public email: String = "";
  public password: String = "";
  public location: String = "";
  // public jwtOptions :any;
  // public ExtractJwt = passportJWT.ExtractJwt;
  // public JwtStrategy = passportJWT.ExtractJwt;
  public express: express.Application;
  public connectionString: String;
  constructor() {
    // this.jwtOptions.jwtFromRequest = this.ExtractJwt.fromAuthHeaderAsBearerToken();
    // this.jwtOptions.secretOrKey = process.env.SECRET;
    this.connectionString = 'DATABASE=' + (process.env.DATABASE) + ';' +
      'HOSTNAME=' + process.env.HOSTNAME + ';' + 'UID=' + process.env.UID + ';' +
      'PWD=' + process.env.PASSWORD + ';' + 'PORT=' + process.env.PORT + ';' +
      'PROTOCOL=' + process.env.PROTOCOL + ';'
    console.log(this.connectionString);
    this.express = express();
    this.middleware();
    this.routes();
  }
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    // this.express.use(passport.initialize());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }
  private routes(): void {
    let router = express.Router();
    router.post('/createUser', (req, res, next) => {
      this.firstName = req.body.firstName;
      this.lastName = req.body.lastName;
      this.age = req.body.age;
      this.email = req.body.email;
      this.password = req.body.password;
      this.location = req.body.location;
      this.password = passwordhash.generate(this.password);
      ibmdb.open(this.connectionString, function (err, conn) {
        conn.prepare("insert into UsersTable (LastName, FirstName, Location, Email, Password, Age) VALUES (?, ?, ?, ?, ?, ?)", function (err, stmt) {
          if (err) {
            //could not prepare for some reason
            console.log(err);
            return conn.closeSync();
          }
          //Bind and Execute the statment asynchronously
          stmt.execute([this.lastName, this.firstName, this.location, this.email, this.password, this.age], function (err, result) {
            if (err) console.log(err);
            else{
              res.json({
                message: "sucessful"
              });
               result.closeSync();
            }
            //Close the connection
            conn.close(function (err) { });
          });
        });
      });
    });
    this.express.use('/', router);
  }
}
export default new App().express;