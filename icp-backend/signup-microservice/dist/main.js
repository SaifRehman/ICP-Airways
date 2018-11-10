/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar logger = __webpack_require__(/*! morgan */ \"morgan\");\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nvar passwordhash = __webpack_require__(/*! password-hash */ \"password-hash\");\nvar ibmdb = __webpack_require__(/*! ibm_db */ \"ibm_db\");\nvar epimetheus = __webpack_require__(/*! epimetheus */ \"epimetheus\");\nvar App = /** @class */ (function () {\n    function App() {\n        this.connectionString = 'DATABASE=' + (process.env.DATABASE) + ';' +\n            'HOSTNAME=' + process.env.HOSTNAME + ';' + 'UID=' + process.env.UID + ';' +\n            'PWD=' + process.env.PASSWORD + ';' + 'PORT=' + process.env.PORT + ';' +\n            'PROTOCOL=' + process.env.PROTOCOL + ';';\n        console.log(this.connectionString);\n        console.trace('hi');\n        this.express = express();\n        epimetheus.instrument(this.express);\n        this.middleware();\n        this.routes();\n    }\n    App.prototype.middleware = function () {\n        this.express.use(function (req, res, next) {\n            res.header(\"Access-Control-Allow-Origin\", \"*\");\n            res.header(\"Access-Control-Allow-Headers\", \"*\");\n            next();\n        });\n        this.express.use(logger('dev'));\n        this.express.use(bodyParser.json());\n        this.express.use(bodyParser.urlencoded({ extended: false }));\n    };\n    App.prototype.routes = function () {\n        var _this = this;\n        var router = express.Router();\n        router.post('/createUser', function (req, res, next) {\n            ibmdb.open(_this.connectionString, function (err, conn) {\n                conn.prepare(\"insert into SAMPLE.UserData (LastName, FirstName, Location, Email, Password, Age, Tier) VALUES (?, ?, ?, ?, ?, ?, ?)\", function (err, stmt) {\n                    if (err) {\n                        console.log(err);\n                        return conn.closeSync();\n                    }\n                    stmt.execute([req.body.lastName, req.body.firstName, req.body.location, req.body.email, passwordhash.generate(req.body.password), req.body.age, req.body.tier], function (err, result) {\n                        if (err)\n                            console.log(err);\n                        else {\n                            res.json({\n                                message: \"sucessful\"\n                            });\n                            result.closeSync();\n                        }\n                        conn.close(function (err) { });\n                    });\n                });\n            });\n        });\n        this.express.use('/', router);\n    };\n    return App;\n}());\nexports.default = new App().express;\n\n\n//# sourceURL=webpack:///./src/App.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar http = __webpack_require__(/*! http */ \"http\");\nvar debug = __webpack_require__(/*! debug */ \"debug\");\nvar App_1 = __webpack_require__(/*! ./App */ \"./src/App.ts\");\ndebug('ts-express:server');\nvar InitServer = /** @class */ (function () {\n    function InitServer() {\n        var _this = this;\n        this.normalizePort = function (val) {\n            var port = typeof val === 'string' ? parseInt(val, 10) : val;\n            if (isNaN(port))\n                return val;\n            else if (port >= 0)\n                return port;\n            else\n                return false;\n        };\n        this.onError = function (error) {\n            if (error.syscall !== 'listen')\n                throw error;\n            var bind = typeof _this.port === 'string' ? 'Pipe ' + _this.port : 'Port ' + _this.port;\n            switch (error.code) {\n                case 'EACCES':\n                    console.error(bind + \" requires elevated privileges\");\n                    process.exit(1);\n                    break;\n                case 'EADDRINUSE':\n                    console.error(bind + \" is already in use\");\n                    process.exit(1);\n                    break;\n                default:\n                    throw error;\n            }\n        };\n        this.onListening = function () {\n            var addr = _this.server.address();\n            var bind = typeof addr === 'string' ? \"pipe \" + addr : \"port \" + addr.port;\n            debug(\"Listening on \" + bind);\n        };\n        this.port = this.normalizePort(process.env.port || 3004);\n        App_1.default.set('port', this.port);\n        this.server = http.createServer(App_1.default);\n        this.server.listen(this.port);\n        this.server.on('error', this.onError);\n        this.server.on('listening', this.onListening);\n    }\n    return InitServer;\n}());\nnew InitServer();\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");\n\n//# sourceURL=webpack:///external_%22debug%22?");

/***/ }),

/***/ "epimetheus":
/*!*****************************!*\
  !*** external "epimetheus" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"epimetheus\");\n\n//# sourceURL=webpack:///external_%22epimetheus%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "ibm_db":
/*!*************************!*\
  !*** external "ibm_db" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ibm_db\");\n\n//# sourceURL=webpack:///external_%22ibm_db%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "password-hash":
/*!********************************!*\
  !*** external "password-hash" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"password-hash\");\n\n//# sourceURL=webpack:///external_%22password-hash%22?");

/***/ })

/******/ });