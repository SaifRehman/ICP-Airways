import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import LoginController from './controllers/login';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }
  private middleware(): void {
    this.express.use(function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    });
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(session({secret: 'test123', saveUninitialized: false, resave: true}))
  }

  private routes(): void {
    this.express.get('/', function(_, res) {
      res.send('hi');
    });
    this.express.use('/api', LoginController);
  }
}
export default new App().express;
