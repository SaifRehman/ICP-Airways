import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as passwordhash from 'password-hash'
import * as passport from 'passport'
import * as jwt from 'jsonwebtoken'
import * as passportJWT from 'passport-jwt'
import * as Request from 'request'
import * as epimetheus from 'epimetheus'
import * as watson from 'watson-developer-cloud'
class App {
  public jwtOptions: any = {};
  public ExtractJwt = passportJWT.ExtractJwt;
  public JwtStrategy = passportJWT.ExtractJwt;
  public express: express.Application;
  public assistant:any
  constructor() {
    this.jwtOptions.jwtFromRequest = this.ExtractJwt.fromAuthHeaderAsBearerToken();
    this.jwtOptions.secretOrKey = process.env.SECRET;
    this.express = express();
    epimetheus.instrument(this.express)
     this.assistant = new watson.AssistantV1({
      version: '2018-09-20',
      iam_apikey: 'z7sGR_nRkuBWvYHMLKpdTGHy5F3hXWvw60UsZRlYPts5',
      url: 'https://gateway-lon.watsonplatform.net/assistant/api'
    });
    this.middleware();
    this.routes();
  }
  private ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      res.sendStatus(403);
    }
  }
  private middleware(): void {
    this.express.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type,Content-Type, Access-Control-Allow-Headers, Authorization"); 
      res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE"); 
      next();
    });
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(passport.initialize());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }
  private routes(): void {
    let router = express.Router();
    router.post('/odm', (req, res, next) => {
      Request.post({
        headers: { "content-type": "application/json" },
        url: process.env.ODM,
        body: JSON.stringify({
          flightBooking:{
          srcAirport: req.body.srcAirport,
          dstAirport: req.body.dstAirport,
          customerTier: req.body.customerTier,
          milesBalance: req.body.milesBalance,
          offers: [],
          messages: []
        }
        })
      }, (err, response, body) => {
        if (err) {
          res.status(404).json({ err });
          console.log(err);
        }
        res.json(JSON.parse(body));
      });
    });
    router.get('/healthz', (req, res, next) => {
      res.send('success');
    });
    this.express.use('/', router);
  }
}
export default new App().express;