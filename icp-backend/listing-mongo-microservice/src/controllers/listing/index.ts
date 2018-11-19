import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import { FlightController } from '../listing/lib/controllers/crmController';

import "reflect-metadata";
import { runInNewContext } from "vm";
class ListingMongoController {
  public flightController: FlightController = new FlightController() 
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes() {

    this.router.get("/healthz", (_, res) => {
      res.status(200).send("healthz");
    });

    this.router.get("/listFlights", (req: Request, res: Response, next: NextFunction) => {
        next()
    }, this.flightController.getFlights);

    this.router.post("/listFlights", (req: Request, res: Response, next: NextFunction) => {
      
    },this.flightController.addNewFlight);

    this.router.get("/listFlights/:id", (_, res: Response, next: NextFunction) => {
      
    },this.flightController.getFlightById);

    this.router.put("/listFlights", (_, res: Response, next: NextFunction) => {
      
    },this.flightController.updateFlight);

    this.router.delete("/listFlights", (_, res: Response, next: NextFunction) => {
      // res.send("listFlights delete");
    },this.flightController.deleteFlight);

  } 

}

export default new ListingMongoController().router;
