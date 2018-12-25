webpackJsonp([5],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Provider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Provider = /** @class */ (function () {
    function Provider() {
        this.userData = null;
        this.token = null;
        this.rawData = null;
        this.url = "10.150.20.151:31380";
        this.apiUrl = {
            login: "http://" + this.url + "/loginsvc/login",
            signup: "http://" + this.url + "/loginsvc/createUser",
            book: "http://" + this.url + "/bookingsvc/book",
            listBookingByUser: "http://" + this.url + "/bookingsvc/listBookingByUser",
            checkin: "http://" + this.url + "/bookingsvc/checkin",
            listFlightsByID: "http://" + this.url + "/listingsvc/listFlights",
            listFlights: "http://" + this.url + "/listingsvc/searchFlights",
            setODM: "http://" + this.url + ":30095/odm",
            postEmail: "http://" + this.url + ":30989/postEmail",
        };
    }
    Provider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Provider);
    return Provider;
}());

//# sourceMappingURL=provider.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BookingPage = /** @class */ (function () {
    function BookingPage(navCtrl, navParams, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
    }
    BookingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
        var tabs = document.querySelectorAll('.show-tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.display = 'none';
            });
        }
    };
    BookingPage.prototype.ionViewWillLeave = function () {
        var tabs = document.querySelectorAll('.show-tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.display = 'flex';
            });
        }
    };
    BookingPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    BookingPage.prototype.confirm = function () {
        var alert = this.alertCtrl.create({
            title: 'Confirm Booking',
            message: 'Are you sure, you want to book this flight?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Book',
                    handler: function () {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    BookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-booking',template:/*ion-inline-start:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/booking/booking.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-buttons start>\n        <button ion-button icon-only>\n          <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n        </button>\n      </ion-buttons>\n      <ion-title color="primary">Booking</ion-title>\n      <ion-buttons end>\n          <button ion-button icon-only color="danger" (click)="cancel()">\n            CANCEL\n          </button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n      <ion-card class="card-5">\n  \n          <ion-item>\n            <ion-icon name="logo-buffer" item-start large color="tab"></ion-icon>\n            <h2>Flight Number</h2>\n            <p>#123</p>\n          </ion-item>\n      \n          <ion-item>\n            <ion-icon name="plane" item-start large color="tab"></ion-icon>\n            <h2>From</h2>\n            <p>Dubai International Airport</p>\n          </ion-item>\n      \n          <ion-item>\n            <ion-icon name="plane" item-start large color="tab"></ion-icon>\n            <h2>To</h2>\n            <p>Islamabad International Airport</p>\n          </ion-item>\n      \n          <ion-item>\n            <ion-icon name="time" item-start large color="tab"></ion-icon>\n            <h2>Arrival Time</h2>\n            <p>2:30</p>\n          </ion-item>\n      \n          <ion-item>\n            <ion-icon name="time" item-start large color="tab"></ion-icon>\n            <h2>Departure Time</h2>\n            <p>10:54</p>\n          </ion-item>\n      \n          <ion-item>\n            <button ion-button icon-start clear item-end (click)="confirm()">\n              <ion-icon name="navigate"></ion-icon>\n              Book\n            </button>\n          </ion-item>\n      \n        </ion-card>\n  \n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/booking/booking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], BookingPage);
    return BookingPage;
}());

//# sourceMappingURL=booking.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_service__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, dashboardService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dashboardService = dashboardService;
        this.show = null;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad DashboardPage');
        this.dashboardService.list().subscribe(function (data) {
            console.log(data['Response']['View'][0]['Result']);
            _this.show = (data['Response']['View'][0]['Result']);
        }, function (error) {
            console.log(error);
        });
    };
    DashboardPage.prototype.go = function (lat, long) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */], {
            item: {
                lat: lat,
                long: long
            }
        });
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/dashboard/dashboard.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-buttons start>\n        <button ion-button icon-only>\n          <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n        </button>\n      </ion-buttons>\n      <ion-title color="primary">Travel</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n      <ng-container *ngIf="show">\n      <ion-item *ngFor="let listshow of show">\n        <h2>{{listshow.Location.Name}}</h2>\n        <p>{{listshow.Location.Address.County}} • {{listshow.Location.LocationType}}</p>\n        <button ion-button clear item-end (click)="go(listshow.Location.DisplayPosition.Latitude,listshow.Location.DisplayPosition.Longitude)">View</button>\n      </ion-item>\n      </ng-container>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_service__["a" /* DashboardService */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.values = navParams.get("item");
        console.log(this.values);
    }
    MapPage.prototype.ionViewDidEnter = function () {
    };
    MapPage.prototype.loadmap = function () {
        var _this = this;
        this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map("map").fitWorld();
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a
            .tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        })
            .addTo(this.map);
        this.map
            .locate({
            setView: true,
            maxZoom: 13
        })
            .on("locationfound", function (e) {
            var latlngs = [[e.latitude, e.longitude], [_this.values.lat, _this.values.long]];
            var polyline = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.polyline(latlngs, { color: "blue" }).addTo(_this.map);
            // zoom the map to the polyline
            _this.map.fitBounds(polyline.getBounds());
            __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.Routing.control({
                waypoints: [
                    __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.latLng(e.latitude, e.longitude),
                    __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.latLng(_this.values.lat, _this.values.long)
                ],
                routeWhileDragging: true
            }).addTo(_this.map);
        })
            .on("locationerror", function (err) {
            alert(err.message);
        });
    };
    MapPage.prototype.ionViewDidLoad = function () {
        this.loadmap();
        console.log("ionViewDidLoad MapPage");
        var tabs = document.querySelectorAll(".show-tabbar");
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.display = "none";
            });
        }
    };
    MapPage.prototype.ionViewWillLeave = function () {
        var tabs = document.querySelectorAll(".show-tabbar");
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.display = "flex";
            });
        }
    };
    MapPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("map"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapContainer", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-map",template:/*ion-inline-start:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/map/map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hide-tabs>\n    <ion-toolbar>\n      <ion-buttons start>\n        <button ion-button icon-only>\n          <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n        </button>\n      </ion-buttons>\n      <ion-title color="primary">Booking</ion-title>\n      <ion-buttons end>\n          <button ion-button icon-only color="danger" (click)="cancel()">\n            CANCEL\n          </button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n      <div id="map" style="width:100%; height:100%;"></div>\n    </ion-content>'/*ion-inline-end:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_signup_service_signup_component_service__ = __webpack_require__(684);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, signupService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.signupService = signupService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalData = ["GOLD", "SILVER", "BRONZE"];
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SignupPage");
    };
    SignupPage.prototype.signin = function () {
        this.navCtrl.pop();
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.signupService
            .signup(this.firstName, this.lastName, this.age, this.email, this.password, this.location, this.tier)
            .subscribe(function (data) {
            console.log(data);
            var alert = _this.alertCtrl.create({
                title: "Alert!",
                subTitle: "Hi There! You have Sucessfully Signed Up!",
                buttons: ["Dismiss"]
            });
            loading.dismiss();
            alert.present();
            _this.navCtrl.pop();
        }, function (error) {
            var alert = _this.alertCtrl.create({
                title: "Alert!",
                subTitle: "OOOOPS... Something Went Wrong",
                buttons: ["Dismiss"]
            });
            loading.dismiss();
            alert.present();
            _this.navCtrl.pop();
            console.log(error);
        });
        console.log(this.firstName, this.lastName, this.location, this.age, this.email, this.password, this.tier);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-signup",template:/*ion-inline-start:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/signup/signup.html"*/'<ion-content class="background">\n  <ion-card>\n    <ion-card-content>\n      <ion-list no-line>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="person" color="tab"></ion-icon>\n          </ion-label>\n          <ion-input type="text" placeholder="First Name" [(ngModel)]="firstName"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="person" color="tab"></ion-icon>\n          </ion-label>\n          <ion-input type="text" placeholder="Last Name" [(ngModel)]="lastName"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="body" color="tab"></ion-icon>\n          </ion-label>\n          <ion-input type="number" placeholder="Age" [(ngModel)]="age"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="locate" color="tab"></ion-icon>\n          </ion-label>\n          <ion-input type="text" placeholder="Location" [(ngModel)]="location"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="at" color="tab"></ion-icon>\n          </ion-label>\n          <ion-input type="email" placeholder="Email" [(ngModel)]="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-icon name="medical" color="tab"></ion-icon>\n          </ion-label>\n          <ion-input type="password" placeholder="Password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n        <ion-grid >\n        <ion-row>\n          <ng-container *ngIf="modalData">\n            <ion-col width-10 *ngFor="let data of modalData; let i = index">\n              <ion-item>\n                <div class="cc-selector-2">\n                  <input name={{i}} [value]=\'data\' type="radio" [(ngModel)]="tier" id={{i}} />\n                  <label class="drinkcard-cc {{data}}" for={{i}}></label>\n                </div>\n              </ion-item>\n            </ion-col>\n          </ng-container>\n        </ion-row>\n        </ion-grid>\n        <button ion-button block outline color="light" (click)="signup()">Signup</button>\n      </ion-list>\n\n    </ion-card-content>\n  </ion-card>\n  <button class="bottom" ion-button clear full color="light" (click)="signin()">Already have an account? Sign in</button>\n</ion-content>'/*ion-inline-end:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_signup_service_signup_component_service__["a" /* SignupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_signup_service_signup_component_service__["a" /* SignupService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object])
    ], SignupPage);
    return SignupPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/booking/booking.module": [
		686,
		4
	],
	"../pages/dashboard/dashboard.module": [
		687,
		3
	],
	"../pages/login/login.module": [
		688,
		2
	],
	"../pages/map/map.module": [
		689,
		1
	],
	"../pages/signup/signup.module": [
		690,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 210;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.list = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
            })
        });
        var link = "http://localhost:3000/";
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], DashboardService);
    return DashboardService;
}());

//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/tabs/tabs.html"*/'<ion-tabs color="tab">\n  <ion-tab [root]="tab1Root" tabTitle="Book" tabIcon="book"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Checkin" tabIcon="checkbox"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Me" tabIcon="person"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Travel" tabIcon="globe"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/about/about.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-buttons start>\n        <button ion-button icon-only>\n          <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n        </button>\n      </ion-buttons>\n      <ion-title color="primary">Checkin</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class="masters">\n  \n    <ion-card class="card-5">\n        <ion-fab right top>\n            <button ion-fab>\n              <ion-icon name="ios-checkmark-circle" ></ion-icon>\n            </button>\n          </ion-fab>\n      <ion-item>\n        <ion-icon name="logo-buffer" item-start large color="tab"></ion-icon>\n        <h2>Flight Number</h2>\n        <p>#123</p>\n      </ion-item>\n  \n      <ion-item>\n        <ion-icon name="plane" item-start large color="tab"></ion-icon>\n        <h2>From</h2>\n        <p>Dubai International Airport</p>\n      </ion-item>\n  \n      <ion-item>\n        <ion-icon name="plane" item-start large color="tab"></ion-icon>\n        <h2>To</h2>\n        <p>Islamabad International Airport</p>\n      </ion-item>\n  \n      <ion-item>\n        <ion-icon name="time" item-start large color="tab"></ion-icon>\n        <h2>Arrival Time</h2>\n        <p>2:30</p>\n      </ion-item>\n  \n      <ion-item>\n        <ion-icon name="time" item-start large color="tab"></ion-icon>\n        <h2>Departure Time</h2>\n        <p>10:54</p>\n      </ion-item>\n  \n    </ion-card>\n    <ion-card class="card-5">\n      <ion-item>\n        <ion-icon name="logo-buffer" item-start large color="tab"></ion-icon>\n        <h2>Flight Number</h2>\n        <p>#123</p>\n      </ion-item>\n  \n      <ion-item>\n        <ion-icon name="plane" item-start large color="tab"></ion-icon>\n        <h2>From</h2>\n        <p>Dubai International Airport</p>\n      </ion-item>\n  \n      <ion-item>\n        <ion-icon name="plane" item-start large color="tab"></ion-icon>\n        <h2>To</h2>\n        <p>Islamabad International Airport</p>\n      </ion-item>\n  \n      <ion-item>\n        <ion-icon name="time" item-start large color="tab"></ion-icon>\n        <h2>Arrival Time</h2>\n        <p>2:30</p>\n      </ion-item>\n  \n      <ion-item>\n        <ion-icon name="time" item-start large color="tab"></ion-icon>\n        <h2>Departure Time</h2>\n        <p>10:54</p>\n      </ion-item>\n  \n      <ion-item>\n        <button ion-button icon-start clear item-end>\n          <ion-icon name="navigate" ></ion-icon>\n          Book\n        </button>\n      </ion-item>\n  \n    </ion-card>\n  </ion-content>\n  '/*ion-inline-end:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage.prototype.logout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n      </button>\n    </ion-buttons>\n    <ion-title color="primary">About</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- Profile picture -->\n  <div text-center>\n    <img src="../assets/avatar.png" class="edit-avatar" alt="">\n  </div>\n\n  <!-- Form -->\n\n  <ion-list>\n    <ion-item>\n      <ion-icon name="person" item-start color="tab"></ion-icon>\n      Saif Rehman\n    </ion-item>\n    <ion-item>\n      <ion-icon name="body" item-start color="tab"></ion-icon>\n      23 years\n    </ion-item>\n    <ion-item>\n      <ion-icon name="at" item-start color="tab"></ion-icon>\n      s4saif.121@gmail.com\n    </ion-item>\n    <ion-item>\n      <ion-icon name="medal" item-start color="tab"></ion-icon>\n      Gold class\n    </ion-item>\n  </ion-list>\n\n\n  <!-- Private information form -->\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_booking__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.like_btn = {
            color: 'black',
            icon_name: 'heart-outline'
        };
        this.tap = 0;
    }
    HomePage.prototype.tapPhotoLike = function (times) {
        this.tap++;
        if (this.tap % 2 === 0) {
            this.likeButton();
        }
    };
    HomePage.prototype.likeButton = function () {
        if (this.like_btn.icon_name === 'heart-outline') {
            this.like_btn.icon_name = 'heart';
            this.like_btn.color = 'danger';
            // Do some API job in here for real!
        }
        else {
            this.like_btn.icon_name = 'heart-outline';
            this.like_btn.color = 'black';
        }
    };
    HomePage.prototype.search = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__booking_booking__["a" /* BookingPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/home/home.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-buttons start>\n        <button ion-button icon-only>\n          <img src="../assets/ibm.png" alt="ibm" height="20" width="40">\n        </button>\n      </ion-buttons>\n      <ion-title color="primary">Booking</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class="masters">\n    <ion-list no-line>\n      <ion-item>\n        <ion-label>Select Source</ion-label>\n        <ion-select>\n          <ion-option value="f">IND</ion-option>\n          <ion-option value="m">PK</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Select Destination </ion-label>\n        <ion-select>\n          <ion-option value="f">INDIA</ion-option>\n          <ion-option value="m">PK</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Travel Date</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY"></ion-datetime>\n      </ion-item>\n    </ion-list>\n    <button ion-button block outline color="tab" (click)="search()">Search</button>\n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_booking_booking__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_map_map__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_login_service_login_component_service__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_signup_service_signup_component_service__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_dashboard_dashboard__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_dashboard_dashboard_service__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__provider_provider__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_leaflet_routing_machine__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_leaflet_routing_machine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_leaflet_routing_machine__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_booking_booking__["a" /* BookingPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_map_map__["a" /* MapPage */]
                // FlashCardComponent
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/booking/booking.module#BookingPageModule', name: 'BookingPage', segment: 'booking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_booking_booking__["a" /* BookingPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_map_map__["a" /* MapPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__pages_dashboard_dashboard_service__["a" /* DashboardService */],
                __WEBPACK_IMPORTED_MODULE_13__services_login_service_login_component_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_14__services_signup_service_signup_component_service__["a" /* SignupService */],
                __WEBPACK_IMPORTED_MODULE_19__provider_provider__["a" /* Provider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = /** @class */ (function () {
    function LoginService(http, provider) {
        this.http = http;
        this.provider = provider;
        this.parameters = {};
        this.params = {};
    }
    LoginService.prototype.login = function (email, password) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json'
            })
        });
        var link = this.provider.apiUrl.login;
        var bodyObject = {
            email: email,
            password: password
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login.component.service.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_provider__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupService = /** @class */ (function () {
    function SignupService(http, provider) {
        this.http = http;
        this.provider = provider;
        this.parameters = {};
        this.params = {};
    }
    SignupService.prototype.signup = function (firstName, lastName, age, email, password, location, tier) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json'
            })
        });
        var link = this.provider.apiUrl.signup;
        var bodyObject = {
            'firstName': firstName,
            'lastName': lastName,
            'age': Number(age),
            'email': email,
            'password': password,
            'location': location,
            'tier': tier
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    SignupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__provider_provider__["a" /* Provider */]])
    ], SignupService);
    return SignupService;
}());

//# sourceMappingURL=signup.component.service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service_login_component_service__ = __webpack_require__(683);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, loginService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginService = loginService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.loginService.login(this.username, this.password).subscribe(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
            loading.dismiss();
        }, function (error) {
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: "Alert!",
                subTitle: "OOOOPS... Something Went Wrong",
                buttons: ["Dismiss"]
            });
            loading.dismiss();
            alert.present();
        });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad LoginPage");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/login/login.html"*/'<ion-content class="background">\n	<ion-card>\n		<ion-card-content>\n			<ion-list no-line>\n				<ion-item>\n					<ion-input type="text" placeholder="Username" [(ngModel)]="username"></ion-input>\n				</ion-item>\n				<ion-item>\n					<ion-input type="password" placeholder="Password" [(ngModel)]="password"></ion-input>\n				</ion-item>\n				<button ion-button block outline color="light" (click)="login()">Log in</button>\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n	<button class="bottom" ion-button clear full color="light" (click)="signup()">Don\'t have an account? Sign up</button>\n</ion-content>'/*ion-inline-end:"/Users/saifurrehman/Desktop/ICP-Airways/icp-mobile/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_login_service_login_component_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_login_service_login_component_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[352]);
//# sourceMappingURL=main.js.map