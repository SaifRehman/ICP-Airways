import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as epimetheus from 'epimetheus'
import axios from 'axios'
class App {

  public express: express.Application;
  constructor() {
    this.express = express();
    epimetheus.instrument(this.express)
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "*");
      res.header("Connection", "keep-alive");
      next();
    });
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }
  private routes(): void {
    let router = express.Router();
    router.post('/getMap', (req, res, next) => {
      axios.get('https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?app_id='+process.env.APPID+'&app_code='+process.env.APPCODE+'&mode=retrieveLandmarks&prox='+req.body.lat+','+req.body.long)
      .then(function(response) {
          console.log(response.data)
        res.send(response.data);
      }).catch(error => {
        console.log(error.response)
        res.status(404).send(error.response);
    });
    });
    router.get('/healthz', (req, res, next) => {
      res.send('success');
    });
    this.express.use('/', router);
  }
}
export default new App().express;