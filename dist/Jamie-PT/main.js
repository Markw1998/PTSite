(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main></app-main>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Jamie-PT';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comp_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comp/main/main.component */ "./src/app/comp/main/main.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _comp_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comp/main/main.component.css":
/*!**********************************************!*\
  !*** ./src/app/comp/main/main.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  background-image: url('BgBanner.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  border: none;\r\n}\r\n\r\na {\r\n  color: inherit;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFpRTtFQUNqRSw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9zcmMvYXNzZXRzL2ltYWdlcy9CZ0Jhbm5lci5qcGcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/comp/main/main.component.html":
/*!***********************************************!*\
  !*** ./src/app/comp/main/main.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <!-- Standard Meta -->\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0\"\n    />\n\n    <style type=\"text/css\">\n      .hidden.menu {\n        display: none;\n      }\n\n      .masthead.segment {\n        min-height: 700px;\n        padding: 1em 0em;\n      }\n      .masthead .logo.item img {\n        margin-right: 1em;\n      }\n      .masthead .ui.menu .ui.button {\n        margin-left: 0.5em;\n      }\n      .masthead h1.ui.header {\n        margin-top: 3em;\n        margin-bottom: 0em;\n        font-size: 4em;\n        font-weight: normal;\n      }\n      .masthead h2 {\n        font-size: 1.7em;\n        font-weight: normal;\n      }\n\n      .ui.vertical.stripe {\n        padding: 8em 0em;\n      }\n      .ui.vertical.stripe h3 {\n        font-size: 2em;\n      }\n      .ui.vertical.stripe .button + h3,\n      .ui.vertical.stripe p + h3 {\n        margin-top: 3em;\n      }\n      .ui.vertical.stripe .floated.image {\n        clear: both;\n      }\n      .ui.vertical.stripe p {\n        font-size: 1.33em;\n      }\n      .ui.vertical.stripe .horizontal.divider {\n        margin: 3em 0em;\n      }\n\n      .quote.stripe.segment {\n        padding: 0em;\n      }\n      .quote.stripe.segment .grid .column {\n        padding-top: 5em;\n        padding-bottom: 5em;\n      }\n\n      .footer.segment {\n        padding: 5em 0em;\n      }\n\n      .secondary.pointing.menu .toc.item {\n        display: none;\n      }\n\n      @media only screen and (max-width: 700px) {\n        .ui.fixed.menu {\n          display: none !important;\n        }\n        .secondary.pointing.menu .item,\n        .secondary.pointing.menu .menu {\n          display: none;\n        }\n        .secondary.pointing.menu .toc.item {\n          display: block;\n        }\n        .masthead.segment {\n          min-height: 350px;\n        }\n        .masthead h1.ui.header {\n          font-size: 2em;\n          margin-top: 1.5em;\n        }\n        .masthead h2 {\n          margin-top: 0.5em;\n          font-size: 1.5em;\n        }\n      }\n    </style>\n\n    <script src=\"assets/library/jquery.min.js\"></script>\n    <script>\n      $(document).ready(function() {\n        // fix menu when passed\n        $('.masthead').visibility({\n          once: false\n        });\n      });\n    </script>\n  </head>\n  <body>\n    <!-- Page Contents -->\n    <div class=\"pusher\">\n      <div class=\"ui masthead segment aligned main\">\n        <div class=\"ui container\">\n          <div class=\"ui large secondary inverted pointing menu\">\n            <a class=\"toc item\">\n              <i class=\"sidebar icon\"></i>\n            </a>\n            <a class=\"active item\">Home</a>\n            <a class=\"item\">Shop</a>\n          </div>\n        </div>\n        <div class=\"ui text container\">\n          <h1 class=\"ui inverted header\" style=\"font-family: fantasy\">\n            JT's Personal Training\n          </h1>\n          <h2 style=\"color: white\">\n            One step closer to your goals.\n          </h2>\n        </div>\n      </div>\n\n      <div class=\"ui vertical stripe segment\">\n        <div class=\"ui middle aligned stackable grid container\">\n          <div class=\"row\">\n            <div class=\"eight wide column\">\n              <h3 class=\"ui header\">About Me</h3>\n              <p>\n                (Filler Text I put in) Lorem ipsum dolor sit amet, consectetur\n                adipiscing elit. Fusce nec diam condimentum, tempus urna ut,\n                vehicula arcu. Sed vulputate eros eros, vitae interdum est\n                consequat at. Quisque libero urna, rutrum ac molestie et,\n                pellentesque sed urna. Cras ac magna at enim blandit blandit.\n                Etiam tristique vel magna in efficitur. Proin sodales gravida\n                turpis. Vestibulum ante ipsum primis in faucibus orci luctus et\n                ultrices posuere cubilia Curae; Nullam at ultricies nisi. Nulla\n                rhoncus, mauris in fermentum imperdiet, ipsum nunc vehicula sem,\n                eget congue nunc est sit amet nulla. Fusce fringilla iaculis\n                lacus vitae euismod. Sed euismod, sapien et consequat\n                consectetur, enim odio cursus quam, at eleifend quam ipsum eu\n                justo. Mauris euismod risus lacinia erat laoreet, non posuere\n                elit sodales\n              </p>\n            </div>\n            <div class=\"six wide right floated column\">\n              <img\n                src=\"assets/images/AboutMe.jpg\"\n                class=\"ui large bordered rounded image\"\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"ui vertical stripe quote segment\">\n        <div class=\"ui equal width stackable internally celled grid\">\n          <div class=\"center aligned row\"></div>\n        </div>\n      </div>\n\n      <div class=\"ui vertical stripe segment\">\n        <div class=\"ui text container\">\n          <h3 class=\"ui header\">Why Have I Started Online Coaching?</h3>\n          <p>\n            (Fill in Text) Lorem ipsum dolor sit amet, consectetur adipiscing\n            elit. Fusce nec diam condimentum, tempus urna ut, vehicula arcu. Sed\n            vulputate eros eros, vitae interdum est consequat at. Quisque libero\n            urna, rutrum ac molestie et, pellentesque sed urna. Cras ac magna at\n            enim blandit blandit. Etiam tristique vel magna in efficitur. Proin\n            sodales gravida turpis. Vestibulum ante ipsum primis in faucibus\n            orci luctus et ultrices posuere cubilia Curae; Nullam at ultricies\n            nisi. Nulla rhoncus, mauris in fermentum imperdiet, ipsum nunc\n            vehicula sem, eget congue nunc est sit amet nulla. Fusce fringilla\n            iaculis lacus vitae euismod. Sed euismod, sapien et consequat\n            consectetur, enim odio cursus quam, at eleifend quam ipsum eu justo.\n            Mauris euismod risus lacinia erat laoreet, non posuere elit sodales\n          </p>\n        </div>\n      </div>\n\n      <div class=\"ui inverted vertical footer segment\">\n        <div class=\"ui container\">\n          <div\n            class=\"ui stackable inverted divided equal height stackable grid\"\n          >\n            <div class=\"two wide column\">\n              <h4 class=\"ui centre inverted header\">Socials</h4>\n              <a href=\"https://www.instagram.com/jtreanor_fitness/\"\n                ><i class=\"instagram icon\"></i>Instagram</a\n              >\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/comp/main/main.component.ts":
/*!*********************************************!*\
  !*** ./src/app/comp/main/main.component.ts ***!
  \*********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/comp/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/comp/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mark Walsh\Desktop\JamiePT\Jamie-PT\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map