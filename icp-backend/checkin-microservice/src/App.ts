import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as passwordhash from 'password-hash'
import * as passport from 'passport'
import * as jwt from 'jsonwebtoken'
import * as passportJWT from 'passport-jwt'
var dotenv = require('dotenv').config({ path: path.join('.env') })
var ibmdb = require('ibm_db');

class App {
  public jwtOptions: any = {};
  public ExtractJwt = passportJWT.ExtractJwt;
  public JwtStrategy = passportJWT.ExtractJwt;
  public express: express.Application;
  public connectionString: String;
  constructor() {
    this.jwtOptions.jwtFromRequest = this.ExtractJwt.fromAuthHeaderAsBearerToken();
    this.jwtOptions.secretOrKey = process.env.SECRET;
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
    this.express.use(passport.initialize());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }
  private routes(): void {
    let router = express.Router();

    router.get('/checkin/:bookid/:userid', (req, res, next) => {
      ibmdb.open(this.connectionString, function (err, conn) {
        conn.prepare("UPDATE SAMPLE.Booking SET Checkin = '1' WHERE FlightID = ? AND UserID=? "
          , function (err, stmt) {
            if (err) {
              console.log('errorr', err);
              res.json({
                message: true
              });
            }
            stmt.execute([req.params.bookid,req.params.userid], function (err, result) {
              console.log(req.params.bookid,req.params.userid)
              if (err) {
                console.log('error', err)
                res.json({
                  message: true
                });
              }
              else {
                result.fetch(function (err, data) {
                  if (err) {
                    console.error('errorrrr', err);
                    res.json({
                      message: true
                    });
                    res.status(401).json({ message: "Server error" });
                    result.closeSync();
                  }
                  else {
                    res.json({
                      message: true
                    });
                    result.closeSync();
                  }

                });
              }
            });
          });
      });
    });


    this.express.use('/', router);
  }
}
export default new App().express;