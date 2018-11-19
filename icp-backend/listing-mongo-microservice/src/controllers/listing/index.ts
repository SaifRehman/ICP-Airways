import { Router } from "express";
import { Request, Response } from "express";
import { FlightController } from '../listing/lib/controllers/crmController';

import "reflect-metadata";
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

    this.router.get("/listFlights", (req: Request, res: Response) => {
      res.send("listFlights get");
    },this.flightController.getFlights);

    this.router.post("/listFlights", (req: Request, res: Response) => {
      res.send("listFlights post");
    });

    this.router.get("/listFlights/:id", (_, res: Response) => {
      res.send("listFlights id");
    });

    this.router.put("/listFlights", (_, res: Response) => {
      res.send("listFlights put");
    });

    this.router.delete("/listFlights", (_, res: Response) => {
      res.send("listFlights delete");
    });
  } 
}

export default new ListingMongoController().router;
