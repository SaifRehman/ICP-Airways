import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
var ibmdb = require('ibm_db');

class App {
  public express: express.Application;
  public connectionString:String="DATABASE=SAMPLE;HOSTNAME=localhost;UID=db2inst1;PWD=db2inst1-pwd;PORT=50000;PROTOCOL=TCPIP";
  constructor() {
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