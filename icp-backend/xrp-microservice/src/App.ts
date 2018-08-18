import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as Request from 'request'
import * as nodemailer from 'nodemailer'
import * as nodecmd from 'node-cmd'

class App {

  public express: express.Application;
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "*");
      next();
    });
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }
  private routes(): void {
    let router = express.Router();
    router.post('/xrp', (req, res, next) => {
      nodecmd.get(
        "DEBUG=ilp* ilp-spsp send --amount " + req.body.price+ "  --receiver '$spsp.ilp-test.com'",
        function(err, data, stderr){
          if(err){
            res.json({
              message: err
            });
          }
          res.json({
            message: "sucessful"
          });
        }
    );

    });
    this.express.use('/', router);
  }
}
export default new App().express;