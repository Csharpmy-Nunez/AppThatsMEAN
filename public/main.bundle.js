webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top py-4\">\n\n    <a class=\"navbar-brand\" href=\"#\">AuthZeroApp</a>\n    \n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n\n        <li class=\"nav-item\">\n          <a \n           class=\"nav-link\" \n           routerLink=\"/\">\n           Home\n           </a>\n        </li>\n        <li class=\"nav-item \">\n            <a class=\"nav-link\" routerLink=\"/account\"\n            *ngIf=\"auth.isAuthenticated()\" >Account</a>\n          </li>\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" routerLink=\"/profile\"\n          *ngIf=\"auth.isAuthenticated()\" >Profile</a>\n        </li>\n \n      </ul>\n\n      <ul class=\"navbar-nav\">\n          <li>\n              <a class=\"nav-link\" href=\"#\"\n              *ngIf=\"auth.isAuthenticated()\" \n              routerLink=\"/profile\" >{{profile?.name}}</a>\n            </li>\n          <li>\n              <a class=\"nav-link\" href=\"#\"\n              *ngIf=\"!auth.isAuthenticated()\" \n              (click)=\"auth.login()\" >Login</a>\n            </li>\n            <li>\n                <a class=\"nav-link\" href=\"#\"\n                *ngIf=\"auth.isAuthenticated()\"\n                (click)=\"auth.logout()\" >Logout</a>\n            </li>\n            <li>\n                <a class=\"nav-link btn btn-info\" href=\"#\"\n                *ngIf=\"auth.isAuthenticated()\"\n                routerLink=\"/signup\" >UPDATE PROFILE</a>\n            </li>\n\n      </ul>\n\n    </div> \n  </nav> <br><br><br><br><br><br><br><br>\n\n  <div class=\"container\">\n      <router-outlet></router-outlet>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        auth.handleAuthentication();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        }
        else {
            this.auth.getProfile(function (err, profile) {
                _this.profile = profile;
            });
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}()); //End of constructor



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_user_service__ = __webpack_require__("./src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_callback_callback_component__ = __webpack_require__("./src/app/components/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_signup_signup_component__ = __webpack_require__("./src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_account_account_component__ = __webpack_require__("./src/app/components/account/account.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_callback_callback_component__["a" /* CallbackComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_account_account_component__["a" /* AccountComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* ROUTES */])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__services_user_user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_callback_callback_component__ = __webpack_require__("./src/app/components/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_signup_signup_component__ = __webpack_require__("./src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_account_account_component__ = __webpack_require__("./src/app/components/account/account.component.ts");





var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'callback', component: __WEBPACK_IMPORTED_MODULE_1__components_callback_callback_component__["a" /* CallbackComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_2__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__components_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_4__components_account_account_component__["a" /* AccountComponent */] },
    { path: '**', redirectTo: '' }
];


/***/ }),

/***/ "./src/app/components/account/account.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container\">\n\n      <div class=\"row\">   \n        <div class=\"col-md-12\">\n            <div class=\"card border-dark mb-3\">\n                <div class=\"card-header bg-warning\"><i class=\"fas fa-envelope-open fa-lg\"></i> {{profile?.name}}</div>\n                <div class=\"card-body text-dark\">\n                  <h5 class=\"card-title\">{{profile?.updated_at}}</h5><br>\n  \n                  <div class=\"panel panel-default profile-area\">\n                      <div class=\"panel-heading\">\n                        <h3></h3>\n                      </div>\n                      <div class=\"panel-body\">\n                        <img src=\"{{profile?.picture}}\" class=\"avatar\" alt=\"avatar\"><br>\n                        <div>\n                          <label><i class=\"far fa-user\"></i> {{profile?.nickname}}</label><br><br>\n  \n                          <h3 class=\"nickname\">{{ profile?.nickname }}</h3>\n                        </div>\n                        <pre class=\"full-profile\">{{ profile | json }}</pre>\n                      </div>\n                    </div>\n  \n                </div>\n  \n                <div *ngFor=\"let user of users?.user\">\n                  <!-- <h3>{{user.name}}</h3>\n                  <h4>{{user.email}}</h4>\n                  <h4>{{user.age}}</h4>\n                  <h4>{{user.gender}}</h4>\n                  <h4>{{user.phone}}</h4>\n                  <h4>{{user.address}}</h4>\n                  <h4>{{user.country}}</h4>\n                </div> -->\n  \n              </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/components/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountComponent = /** @class */ (function () {
    function AccountComponent(auth) {
        this.auth = auth;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        }
        else {
            this.auth.getProfile(function (err, profile) {
                _this.profile = profile;
            });
        }
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account',
            template: __webpack_require__("./src/app/components/account/account.component.html"),
            styles: [__webpack_require__("./src/app/components/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]])
    ], AccountComponent);
    return AccountComponent;
}()); //End of class



/***/ }),

/***/ "./src/app/components/callback/callback.component.css":
/***/ (function(module, exports) {

module.exports = ".loading {\r\n  position: absolute;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/components/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"loading\">\n  <img src=\"../../../assets/loading.svg\" alt=\"loading\">\n</div>"

/***/ }),

/***/ "./src/app/components/callback/callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CallbackComponent = /** @class */ (function () {
    function CallbackComponent() {
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    CallbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-callback',
            template: __webpack_require__("./src/app/components/callback/callback.component.html"),
            styles: [__webpack_require__("./src/app/components/callback/callback.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome</h1><br><br>\r\n\r\n<div class=\"container\">\r\n        <div class=\"alert alert-success\" *ngIf=\"auth.isAuthenticated()\">You are logged in</div>\r\n        <div class=\"alert alert-danger\" *ngIf=\"!auth.isAuthenticated()\">\r\n            You are not logged in! Please <a href=\"#\" (click)=\"auth.login()\">Log In</a> to continue.\r\n        </div>\r\n</div><br><br>\r\n\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Franklin Nunez</h5>\r\n          <p class=\"card-text\">This is an authentication service application that uses the auth0 API system.</p>\r\n          <a href=\"#\" class=\"btn btn-outline-info\" type=\"button\" data-toggle=\"modal\" data-target=\"#exampleModal\" data-whatever=\"@getbootstrap\">Send Me Messege</a>\r\n          <br><br>\r\n          <p class=\"card-text\"><small class=\"text-muted\">Date: {{date}}</small></p>\r\n        </div>\r\n        <img class=\"card-img-bottom\" src=\"../../../assets/pexels-photo-459654.jpeg\" alt=\"Card image cap\">\r\n      </div>\r\n\r\n      <br><br>\r\n      <div class=\"row\">\r\n          <div class=\"col-md-8 col-sm-8\">\r\n\r\n                    <div class=\"list-group\">\r\n                            <a href=\"#\" class=\"list-group-item list-group-item-action active\">\r\n                                    Technologies (MEAN)\r\n                            </a>\r\n                            <a href=\"https://www.mongodb.com/?_ga=2.223464594.802205854.1520303731-786867725.1520303731&_gac=1.190407129.1520303731.CjwKCAiA8vPUBRAyEiwA8F1oDO7ulBy64b_f7HHzx0hWq7YNKxZlof7aYbhtfL0jRA4lpq1VR-MERRoCfGoQAvD_BwE\" class=\"list-group-item list-group-item-action\" target=\"_blank\">Mongo</a>\r\n                            <a href=\"https://expressjs.com/\" class=\"list-group-item list-group-item-action\" target=\"_blank\">Expressjs</a>\r\n                            <a href=\"https://angularjs.org\" class=\"list-group-item list-group-item-action\" target=\"_blank\">Angularjs</a>\r\n                            <a href=\"https://nodejs.org/en/\" class=\"list-group-item list-group-item-action disabled\" target=\"_blank\">Nodejs</a>\r\n                          </div>\r\n          </div>\r\n          <div class=\"col-md-4 col-sm-4\">\r\n                <div class=\"card text-white bg-info mb-3\" style=\"max-width: 18rem;\">\r\n                        <div class=\"card-header\">Other Resources</div>\r\n                        <div class=\"card-body\">\r\n                          <h5 class=\"card-title\">Open Source</h5>\r\n                          <p class=\"card-text\">I also used Nodemailer, CORS, bootstrap and its dependencies for this porject.</p>\r\n                        </div>\r\n                      </div>\r\n          </div>\r\n      </div>\r\n      <br><br><br>\r\n\r\n\r\n      <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog\" role=\"document\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\" id=\"exampleModalLabel\">New message</h5>\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <form #emailForm=\"ngForm\">\r\n                      <div class=\"alert alert-success\" *ngIf=\"isSent()\">\r\n                          {{msg?.msg}}\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                          <label for=\"recipient-name\" class=\"col-form-label\">Your Name:</label>\r\n                          <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)] = \"name\" name=\"name\" >\r\n                        </div>\r\n                      <div class=\"form-group\">\r\n                          <label for=\"recipient-name\" class=\"col-form-label\">Your Email:</label>\r\n                          <input type=\"text\" class=\"form-control\" id=\"email\" [(ngModel)] = \"email\" name=\"email\" >\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"recipient-name\" class=\"col-form-label\">Subject:</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"subject\" [(ngModel)] = \"subject\" name=\"subject\" >\r\n                          </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"message-text\" class=\"col-form-label\">Message:</label>\r\n                      <textarea class=\"form-control\" id=\"message\" [(ngModel)] = \"message\" name=\"message\" ></textarea>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"sendEmail(); emailForm.reset()\">Send message</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__ = __webpack_require__("./src/app/services/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.date = Date();
    };
    HomeComponent.prototype.sendEmail = function () {
        var _this = this;
        var email = {
            "name": this.name,
            "email": this.email,
            "subject": this.subject,
            "message": this.message
        };
        console.log(email);
        this.userService.sendEmail(email).subscribe(function (msg) {
            console.log(msg);
            _this.msg = msg;
        });
    };
    HomeComponent.prototype.isSent = function () {
        if (this.msg) {
            return true;
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */]])
    ], HomeComponent);
    return HomeComponent;
}()); //End of component class



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "body{\r\n  background: #EFF7FE;\r\n  padding-top: 15px;\r\n}\r\n.main-section{\r\n  border:1px solid #138496;\r\n  background-color: #fff;\r\n}\r\n.profile-header{\r\n  background-color: #17a2b8;\r\n  height:150px;\r\n}\r\n.user-detail{\r\n  margin:-50px 0px 30px 0px;\r\n}\r\n.user-detail img{\r\n  height:100px;\r\n  width:100px;\r\n}\r\n.user-detail h5{\r\n  margin:15px 0px 5px 0px;\r\n}\r\n.user-social-detail{\r\n  padding:15px 0px;\r\n  background-color: #17a2b8;\r\n}\r\n.user-social-detail a i{\r\n  color:#fff;\r\n  font-size:23px;\r\n  padding: 0px 5px;\r\n}"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"offset-lg-12 col-lg-12 col-sm-12 col-12 main-section text-center\">\r\n          <div class=\"row\">\r\n              <div class=\"col-lg-12 col-sm-12 col-12 profile-header\"></div>\r\n          </div>\r\n          <div class=\"row user-detail\">\r\n              <div class=\"col-lg-12 col-sm-12 col-12\">\r\n                  <img src=\"{{profile?.picture}}\" class=\"rounded-circle img-thumbnail\">\r\n                  <h5>{{user?.user.name}}</h5>\r\n                  <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> {{user?.user.address}}</p>\r\n\r\n                  <hr>\r\n                  <a href=\"#\" class=\"btn btn-success btn-sm\">Follow</a>\r\n                  <a href=\"#\" class=\"btn btn-info btn-sm\" type=\"button\" data-toggle=\"modal\" data-target=\"#exampleModal\" data-whatever=\"@getbootstrap\">Send Messege</a>\r\n\r\n                  <hr>\r\n                  <span><i class=\"fas fa-globe\"></i> {{user?.user.country}}</span>\r\n                  <br>\r\n                  <span>Age: {{user?.user.age}}</span><br>\r\n                  <span>Gender: {{user?.user.gender}}</span><br>\r\n                  <span>Phone: {{user?.user.phone}}</span>\r\n\r\n              </div>\r\n          </div>\r\n          <div class=\"row user-social-detail\">\r\n              <div class=\"col-lg-12 col-sm-12 col-12\">\r\n                  <a href=\"#\"><i class=\"fab fa-facebook-square fa-lg\"></i></a>\r\n                  <a href=\"#\"><i class=\"fab fa-google fa-lg\"></i></a>\r\n                  <a href=\"#\"><i class=\"fab fa-twitter fa-lg\"></i></a>\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__ = __webpack_require__("./src/app/services/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        }
        else {
            this.auth.getProfile(function (err, profile) {
                _this.profile = profile;
            });
        }
        this.getAllUsers();
    }; //End of ngOnInit
    ProfileComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) {
            //console.log(users);
            _this.users = users;
            if (_this.profile) {
                for (_this.i = 0; _this.i < users.users.length; _this.i++) {
                    //console.log('This is the quering email: ' + users);
                    if (users.users[_this.i].email == _this.profile.name) {
                        _this.queryEmail = users.users[_this.i].email;
                        _this.id = users.users[_this.i]._id;
                        _this.getSingleUser(_this.id);
                        //console.log('This is the quering email: ' + this.id);
                        //console.log('Profile object: ' + this.profile);
                    }
                    else {
                        console.log('Not captured yet...');
                    }
                }
            }
            else {
                console.log('Object is not initiated...');
            }
        });
    };
    ProfileComponent.prototype.getSingleUser = function (id) {
        var _this = this;
        //console.log(`From the GetSingleUser method: ${id}`);
        this.userService.getUser(id).subscribe(function (user) {
            //console.log(`Single user ${JSON.stringify(user)}`);
            _this.user = user;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */]])
    ], ProfileComponent);
    return ProfileComponent;
}()); //End of class



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8 col-sm-8\">\n        <div class=\"jumbotron \">\n            <h3 class=\"display-4 text-center\">Personalize Profile</h3>\n            <p class=\"lead text-center\">Include your personal details. </p>\n            <hr class=\"my-4\">\n  \n            <form id=\"signup\" #signupForm=\"ngForm\" >\n                <fieldset>\n                  <legend>Complete Form</legend>\n                  <p>\n                    <input class=\"form-control\" type=\"text\" [(ngModel)] = \"name\" name=\"name\" id=\"name\" placeholder=\"Full name\" required/>\n                  </p>\n                  <!-- <p>\n                    <input class=\"form-control\" type=\"email\"  [(ngModel)] = \"email\" name=\"email\" id=\"email\" placeholder=\"Email\" value=\"{{profile?.name}}\" readonly required/>\n                  </p> -->\n                  <p>\n                      <input class=\"form-control\" type=\"text\" [(ngModel)] = \"age\" name=\"age\" id=\"age\" placeholder=\"Age\" required/>\n                    </p>\n                  <p>\n                      <input class=\"form-control\" type=\"text\" [(ngModel)] = \"gender\" name=\"gender\" id=\"gender\" placeholder=\"Gender\" required/>\n                    </p>\n                  <p>\n                    <input class=\"form-control\" type=\"text\"\n                    [(ngModel)] = \"phone\" name=\"phone\" id=\"phone\" placeholder=\"Phone\"/>\n                  </p>\n                  <p>\n                      <input class=\"form-control\" type=\"text\" [(ngModel)] = \"address\" name=\"address\" id=\"address\" placeholder=\"Address\" required/>\n                    </p>\n                    <p>\n                        <input class=\"form-control\" type=\"text\" [(ngModel)] = \"country\" name=\"country\"\n                        id=\"country\" placeholder=\"Country\" required/>\n                      </p><br><br>\n                  <input class=\"form-control btn btn-info btn-lg\" type=\"submit\"  value=\"Update Profile\" (click)=\"addUser(); signupForm.reset()\"/>\n                </fieldset>\n              </form>\n          </div>\n    </div> \n    <div class=\"col-md-4 col-sm-4\">\n        <div class=\"card border-info mb-3\" style=\"max-width: 30rem;\">\n            <div class=\"card-header\"><h4>{{name}}</h4></div>\n            <div class=\"card-body text-info\">\n              <h4 class=\"card-title text-center\">Contact Card</h4>\n              <ul class=\"list-group\">\n                  <li class=\"list-group-item\">Email: {{profile?.name}}</li>\n                  <li class=\"list-group-item\">Age: {{age}}</li>\n                  <li class=\"list-group-item\">Gender: {{gender}}</li>\n                  <li class=\"list-group-item\">Phone: {{phone}}</li>\n                  <li class=\"list-group-item\">Address: {{address}}</li>\n                  <li class=\"list-group-item\">Country: {{country}}</li>\n                </ul>\n            </div>\n            <p class=\"text-center\" style=\"font-size:8px;\">This information will be saved to a persistent mongo database.</p>\n          </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__ = __webpack_require__("./src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService, auth) {
        this.userService = userService;
        this.auth = auth;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        }
        else {
            this.auth.getProfile(function (err, profile) {
                _this.profile = profile;
                _this.email = profile.name;
                //console.log('From signup ts: ' + this.email);
            });
        }
    }; //End of ngOnInit
    SignupComponent.prototype.addUser = function () {
        var user = {
            "name": this.name,
            "email": this.email,
            "age": this.age,
            "gender": this.gender,
            "phone": this.phone,
            "address": this.address,
            "country": this.country
        };
        this.userService.saveUser(user).subscribe(function (user) { return console.log(user); });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */]])
    ], SignupComponent);
    return SignupComponent;
}()); //End of class



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth0_variables__ = __webpack_require__("./src/app/services/auth/auth0-variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth0_js__ = __webpack_require__("./node_modules/auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_auth0_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// src/app/auth/auth.service.ts





var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        //Initialize the auth0 object
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_4_auth0_js__["WebAuth"]({
            clientID: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].clientID,
            domain: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].domain,
            responseType: 'token id_token',
            audience: "https://" + __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].domain + "/userinfo",
            redirectUri: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].callbackURL,
            scope: 'openid profile'
        });
    }
    //-----------------------------------------------------------------------------------
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    }; //End of login
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                //window.location.hash = '';
                _this.setSession(authResult);
                _this.router.navigate(['/home']);
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
            }
        });
    }; //End of handleAuthentication
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the Access Token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }; //End of setSession
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    }; //End of logout
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // Access Token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }; //End of isAuthenticated
    //...
    AuthService.prototype.getProfile = function (cb) {
        //Get accessToken from local storage
        var accessToken = localStorage.getItem('access_token');
        //Throw error if there is not an accessToken
        if (!accessToken) {
            throw new Error('Access Token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
            }
            cb(err, profile);
        });
        //====================================================================================
    }; //End of getProfile
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AuthService);
    return AuthService;
}()); //End of class



/***/ }),

/***/ "./src/app/services/auth/auth0-variables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_CONFIG; });
var AUTH_CONFIG = {
    clientID: 'CNo4XUROFDkYmv8KxmnuSduK66Zeo5I7',
    domain: '798.auth0.com',
    callbackURL: 'https://morning-beach-18392.herokuapp.com'
};


/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //map
 //It needs to be inyected because it is a service
//Bring in map from reactive extension
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        console.log('User data service connected...');
    }
    UserService.prototype.getUsers = function () {
        return this.http.get('/api/users').map(function (res) { return res.json(); });
    };
    //Get a single user
    UserService.prototype.getUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("/api/user/" + id).map(function (res) { return res.json(); });
    };
    UserService.prototype.saveUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/', JSON.stringify(user), { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.sendEmail = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/send', JSON.stringify(email), { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}()); //End of class



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map