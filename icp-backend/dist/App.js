"use strict";
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
var ibmdb = require('ibm_db');
class App {
    constructor() {
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
        router.get('/test', (req, res, next) => {
            ibmdb.open("DATABASE=SAMPLE;HOSTNAME=localhost;UID=db2inst1;PWD=db2inst1-pwd;PORT=50000;PROTOCOL=TCPIP", function (err, conn) {
                if (err)
                    return console.log(err);
                conn.query('select * from DB2INST1.VSTAFAC2', function (err, data) {
                    if (err)
                        console.log(err);
                    else
                        console.log(data);
                    res.json({
                        message: data
                    });
                    conn.close(function () {
                        console.log('done');
                    });
                });
            });
        });
        this.express.use('/', router);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new App().express;
