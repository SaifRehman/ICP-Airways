"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const passwordhash = require("password-hash");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const passportJWT = require("passport-jwt");
const cors = require("cors");
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
        router.post('/login', cors(), (req, res, next) => {
            ibmdb.open(this.connectionString, function (err, conn) {
                conn.prepare('SELECT * FROM SAMPLE.UserData WHERE Email=?', function (err, stmt) {
                    if (err) {
                        console.log(err);
                    }
                    stmt.execute([req.body.email], function (err, result) {
                        result.fetch(function (err, data) {
                            if (err) {
                                console.error(err);
                                res.status(401).json({ message: "Server error" });
                                result.closeSync();
                            }
                            else {
                                console.log(JSON.stringify(data));
                                if (!data) {
                                    res.status(401).json({ message: "Please signup, no email exists" });
                                }
                                else if (passwordhash.verify(req.body.password, data.PASSWORD)) {
                                    console.log(process.env.SECRET);
                                    delete data['PASSWORD'];
                                    data = { data: data };
                                    res.json({
                                        sucessful: true,
                                        token: jwt.sign(data, process.env.SECRET)
                                    });
                                }
                                else {
                                    res.status(401).json({ message: "Password/Email did not match" });
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
