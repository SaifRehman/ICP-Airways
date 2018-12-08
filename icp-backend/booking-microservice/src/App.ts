import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import * as passport from "passport";
import * as passportJWT from "passport-jwt";
import * as epimetheus from "epimetheus";
let mariadb = require("mariadb");

class App {
  public jwtOptions: any = {};
  public ExtractJwt = passportJWT.ExtractJwt;
  public JwtStrategy = passportJWT.ExtractJwt;
  public express: express.Application;
  public connectionString: any;
  constructor() {
    this.jwtOptions.jwtFromRequest = this.ExtractJwt.fromAuthHeaderAsBearerToken();
    this.jwtOptions.secretOrKey = process.env.SECRET;
    this.connectionString = {
      host: process.env.HOSTNAMEMARIADB,
      user: process.env.UIDMARIADB,
      password: process.env.PASSWORDMARIADB,
      database: process.env.DATABASEMARIADB,
      connectionLimit: 5,
      port: process.env.PORTMARIADB
    };
    console.log(this.connectionString);
    this.express = express();
    epimetheus.instrument(this.express);
    this.middleware();
    this.routes();
  }
  private ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      res.sendStatus(403);
    }
  }
  private middleware(): void {
    this.express.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "*");
      next();
    });
    this.express.use(logger("dev"));
    this.express.use(bodyParser.json());
    this.express.use(passport.initialize());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }
  private routes(): void {
    let router = express.Router();
    router.post("/book", this.ensureToken, (req, res, next) => {
      let pool = mariadb.mariadb.createPool(this.connectionString);
      pool
        .getConnection()
        .then(conn => {
          conn
            .query(
              "INSERT INTO SAMPLE.Booking  (TS, Checkin, UserID, FlightID, OfferNamePricing, OfferTypePricing,\
                CostPricing, OfferNameUpgrade, OfferTypeUpgrade,CostNameUpgrade) \
                VALUES (CURRENT TIMESTAMP, '0', ?, ?, ?, ?, ?, ?, ?, ?)",
              [
                req.body.UserID,
                req.body.FlightID,
                req.body.OfferNamePricing,
                req.body.OfferTypePricing,
                req.body.CostPricing,
                req.body.OfferNameUpgrade,
                req.body.OfferTypeUpgrade,
                req.body.CostUpgrade
              ]
            )
            .then(res => {
              conn.end();
              console.log(res);
              res.json({
                message: "sucesfully inserted"
              });
            })
            .catch(err => {
              conn.end();
              if (err) {
                res.status(404).json({ err });
                console.log(err);
              }
            });
        })
        .catch(err => {
          if (err) {
            res.status(404).json({ err });
            console.log(err);
          }
        });
    });

    router.get("/listBookingByUser/:id", this.ensureToken, (req, res, next) => {
      res.send("success");
      // ibmdb.open(this.connectionString, function(err, conn) {
      //   conn.prepare(
      //     "select * from  SAMPLE.FlightsData f inner join SAMPLE.Booking b on f.ID = b.FlightID where b.UserID=?",
      //     function(err, stmt) {
      //       if (err) {
      //         console.log("errorr", err);
      //       }
      //       stmt.execute([req.params.id], function(err, result) {
      //         result.fetchAll(function(err, data) {
      //           if (err) {
      //             console.error(err);
      //             res.status(401).json({ message: "Server error" });
      //             result.closeSync();
      //           } else {
      //             if (data) {
      //               res.json({
      //                 data,
      //                 message: true
      //               });
      //               result.closeSync();
      //             } else {
      // res.json({
      //   message: false
      // });
      //             }
      //           }
      //           result.closeSync();
      //         });
      //       });
      //     }
      //   );
      // });
    });
    router.get(
      "/checkin/:bookid/:userid",
      this.ensureToken,
      (req, res, next) => {
        let pool = mariadb.mariadb.createPool(this.connectionString);
        pool
          .getConnection()
          .then(conn => {
            conn
              .query(
                "UPDATE SAMPLE.Booking SET Checkin = '1' WHERE BookingID = ? AND UserID=? ",
                [req.params.bookid, req.params.userid]
              )
              .then(res => {
                conn.end();
                console.log(res);
                res.json({
                  message: "sucesfully inserted"
                });
              })
              .catch(err => {
                conn.end();
                if (err) {
                  res.status(404).json({ err });
                  console.log(err);
                }
              });
          })
          .catch(err => {
            if (err) {
              res.status(404).json({ err });
              console.log(err);
            }
          });
      }
    );
    router.get("/healthz", (req, res, next) => {
      res.send("success");
    });
    this.express.use("/", router);
  }
}
export default new App().express;
