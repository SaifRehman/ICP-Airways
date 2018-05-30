import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv/config'
var ibmdb = require('ibm_db');

class App {
  public express: express.Application;
  public connectionString ;
  constructor() {
    this.connectionString = 'DATABASE='+process.env.DATABASE+';'+
    'HOSTNAME='+ process.env.HOSTNAME+';'+'UID='+process.env.UID+';'+
    'PWD='+process.env.PASSWORD+';'+'PORT='+process.env.PORT+';'+
    'PROTOCOL='+process.env.PROTOCOL+';'
    this.express = express();
    this.middleware();
    this.routes();
  }
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }
  private routes(): void {
    let router = express.Router();
    router.get('/test', (req, res, next) => {
      ibmdb.open(this.connectionString, function (err, conn) {
        if (err) return console.log(err);
        conn.query('select * from DB2INST1.VSTAFAC2', function (err, data) {
          if (err) console.log(err);
          else console.log(data);
          res.json({
            data
          });
          conn.close(function () {
            console.log('done');
          });
        });
      });
    });
    this.express.use('/', router);
  }
}
export default new App().express;