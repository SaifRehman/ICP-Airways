import { error } from 'util';
import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as passwordhash from 'password-hash'
import * as passport from 'passport'
import * as jwt from 'jsonwebtoken'
import * as passportJWT from 'passport-jwt'
var Web3 = require('web3')

class App {
  public jwtOptions: any = {};
  public ExtractJwt = passportJWT.ExtractJwt;
  public JwtStrategy = passportJWT.ExtractJwt;
  public express: express.Application;
  public connectionString: String;
  public abi: any = null;
  public provider: any;
  public web3: any;
  public contract: any
  constructor() {
    this.jwtOptions.jwtFromRequest = this.ExtractJwt.fromAuthHeaderAsBearerToken();
    this.jwtOptions.secretOrKey = process.env.SECRET;
    this.abi = [
      {
        "constant": true,
        "inputs": [],
        "name": "value",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_value",
            "type": "string"
          }
        ],
        "name": "set",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "get",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ]
    this.provider = new Web3.providers.HttpProvider("http://169.61.62.89:30001");
    this.web3 = new Web3(this.provider);
    this.contract = new this.web3.eth.Contract(this.abi, "0x03a8cad9c7a5969b7382459c6f5fb2808fe3f178");
    this.express = express();
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
      res.header("Access-Control-Allow-Headers", "*");
      next();
    });
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(passport.initialize());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }
  private routes(): void {
    let router = express.Router();
    router.post('/setBlockchain', (req, res, next) => {
      this.contract.methods.set(req.body.data).send({
        from: '0xd5335aee753f741c35a4ea5eb59dd4937827d8a9',
        gas: '1000000'
      }).then(function(){
        res.json({
          message: "sucessful"
        })
    }).catch((err) => {
      console.log (err)
    });
     
    });
    router.get('/getBlockchain', (req, res, next) => {
      this.contract.methods.get().call().then(function (response) {
        console.log(response)
        res.json(JSON.parse(response));

      }).catch(function (err) {
        console.log(err);
      });
    });
    this.express.use('/', router);
  }
}
export default new App().express;