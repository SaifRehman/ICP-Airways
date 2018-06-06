"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const passport = require("passport");
const passportJWT = require("passport-jwt");
var dotenv = require('dotenv').config({ path: path.join('.env') });
var ibmdb = require('ibm_db');
class App {
    constructor() {
        this.jwtOptions = {};
        this.ExtractJwt = passportJWT.ExtractJwt;
        this.JwtStrategy = passportJWT.ExtractJwt;
        this.jwtOptions.jwtFromRequest = this.ExtractJwt.fromAuthHeaderAsBearerToken();
        this.jwtOptions.secretOrKey = process.env.SECRET;
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
        this.express.use(passport.initialize());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        let router = express.Router();
        router.get('/checkin/:id', (req, res, next) => {
            ibmdb.open(this.connectionString, function (err, conn) {
                conn.prepare("UPDATE SAMPLE.Booking SET Checkin = '1' WHERE BookingID = ? ", function (err, stmt) {
                    if (err) {
                        console.log('errorr', err);
                        res.json({
                            message: true
                        });
                    }
                    stmt.execute([req.params.id,], function (err, result) {
                        if (err) {
                            console.log('error', err);
                            res.json({
                                message: true
                            });
                        }
                        else {
                            result.fetch(function (err, data) {
                                if (err) {
                                    console.error('errorrrr', err);
                                    res.json({
                                        message: true
                                    });
                                    res.status(401).json({ message: "Server error" });
                                    result.closeSync();
                                }
                                else {
                                    res.json({
                                        message: true
                                    });
                                    result.closeSync();
                                }
                            });
                        }
                    });
                });
            });
        });
        this.express.use('/', router);
    }
}
exports.default = new App().express;
