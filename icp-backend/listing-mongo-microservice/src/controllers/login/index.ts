import { Router } from 'express';
import 'reflect-metadata';
class LoginController {
  public router: Router;


  constructor() {
    this.router = Router();
    this.routes();

  }

  private routes() {

  }
}

export default new LoginController().router;
