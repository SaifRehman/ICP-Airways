import * as mongoose from "mongoose";
import { FlightSchema } from "../models/crmModel";
import { Request, Response } from "express";

const Flight = mongoose.model("Flight", FlightSchema);
export class FlightController {
  public addNewFlight(req: Request, res: Response) {
    let newFlight = new Flight(req.body);
    newFlight.save((err, flight) => {
      if (err) {
        res.status(400).send(err);
      }
      res.json(flight);
    });
  }
  public getFlights(req: Request, res: Response) {
    Flight.find({}, (err, flight) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(flight);
      }
    });
  }
  public getFlightById(req: Request, res: Response) {
    Flight.findById(req.params.ID, (err, flight) => {
        console.log(req.params.ID)
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(flight);
      }
    });
  }
  public updateFlight(req: Request, res: Response) {
    Flight.findOneAndUpdate(
      { _id: req.params.ID }, req.body, { new: true },(err, flight) => {
        if (err) {
          res.status(400).send(err);
        }
        res.json(flight);
      }
    );
  }

  public deleteFlight (req: Request, res: Response) {           
    Flight.deleteOne({ _id: req.params.ID }, (err) => {
        if(err){
            res.status(400).send(err);
        }
        res.json({ message: "success"});
    });
}
}
