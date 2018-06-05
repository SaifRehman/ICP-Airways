"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
var dotenv = require('dotenv').config({ path: path.join('.env') });
var ibmdb = require('ibm_db');
class App {
    constructor() {
        this.connectionString = 'DATABASE=' + (process.env.DATABASE) + ';' +
            'HOSTNAME=' + process.env.HOSTNAME + ';' + 'UID=' + process.env.UID + ';' +
            'PWD=' + process.env.PASSWORD + ';' + 'PORT=' + process.env.PORT + ';' +
            'PROTOCOL=' + process.env.PROTOCOL + ';';
        console.log(this.connectionString);
        this.express = express();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        let router = express.Router();
        router.post('/listFlights', (req, res, next) => {
            ibmdb.open(this.connectionString, function (err, conn) {
                conn.prepare('SELECT * FROM SAMPLE.FlightsData WHERE Year=? and Month=? and DayofMonth=? and Origin=? and Dest=?', function (err, stmt) {
                    if (err) {
                        console.log('errorr', err);
                    }
                    stmt.execute([req.body.Year, req.body.Month, req.body.DayofMonth, req.body.Origin, req.body.Dest], function (err, result) {
                        result.fetch(function (err, data) {
                            if (err) {
                                console.error(err);
                                res.status(401).json({ message: "Server error" });
                                result.closeSync();
                            }
                            else {
                                if (data) {
                                    res.json({
                                        data,
                                        message: true
                                    });
                                    result.closeSync();
                                }
                                else {
                                    res.json({
                                        message: false
                                    });
                                }
                            }
                            result.closeSync();
                        });
                    });
                });
            });
        });
        router.get('/listFlightsByID/:id', (req, res, next) => {
            ibmdb.open(this.connectionString, function (err, conn) {
                conn.prepare('SELECT * FROM SAMPLE.FlightsData WHERE ID=?', function (err, stmt) {
                    if (err) {
                        console.log('errorr', err);
                    }
                    stmt.execute([req.params.id], function (err, result) {
                        result.fetch(function (err, data) {
                            if (err) {
                                console.error(err);
                                res.status(401).json({ message: "Server error" });
                                result.closeSync();
                            }
                            else {
                                if (data) {
                                    res.json({
                                        data,
                                        message: true
                                    });
                                    result.closeSync();
                                }
                                else {
                                    res.json({
                                        message: false
                                    });
                                }
                            }
                            result.closeSync();
                        });
                    });
                });
            });
        });
        this.express.use('/', router);
    }
}
exports.default = new App().express;
