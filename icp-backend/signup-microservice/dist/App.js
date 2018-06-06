"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var passwordhash = require("password-hash");
var dotenv = require('dotenv').config({ path: path.join('.env') });
var ibmdb = require('ibm_db');
var App = /** @class */ (function () {
    function App() {
        this.connectionString = 'DATABASE=' + (process.env.DATABASE) + ';' +
            'HOSTNAME=' + process.env.HOSTNAME + ';' + 'UID=' + process.env.UID + ';' +
            'PWD=' + process.env.PASSWORD + ';' + 'PORT=' + process.env.PORT + ';' +
            'PROTOCOL=' + process.env.PROTOCOL + ';';
        console.log(this.connectionString);
        this.express = express();
        this.middleware();
        this.routes();
    }
    App.prototype.middleware = function () {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.post('/createUser', function (req, res, next) {
            ibmdb.open(_this.connectionString, function (err, conn) {
                conn.prepare("insert into SAMPLE.UserData (LastName, FirstName, Location, Email, Password, Age) VALUES (?, ?, ?, ?, ?, ?)", function (err, stmt) {
                    if (err) {
                        console.log(err);
                        return conn.closeSync();
                    }
                    console.log(req.body.lastName);
                    stmt.execute([req.body.lastName, req.body.firstName, req.body.location, req.body.email, passwordhash.generate(req.body.password), req.body.age], function (err, result) {
                        if (err)
                            console.log(err);
                        else {
                            res.json({
                                message: "sucessful"
                            });
                            result.closeSync();
                        }
                        conn.close(function (err) { });
                    });
                });
            });
        });
        this.express.use('/', router);
    };
    return App;
}());
exports.default = new App().express;
