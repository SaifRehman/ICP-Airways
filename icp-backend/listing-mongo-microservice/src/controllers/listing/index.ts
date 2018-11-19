import { Router } from 'express';
import 'reflect-metadata';
class ListingMongoController {
  public router: Router;


  constructor() {
    this.router = Router();
    this.routes();

  }

  private routes() {

  }
}

export default new ListingMongoController().router;
