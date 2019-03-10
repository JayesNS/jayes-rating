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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  margin: 16px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\npre {\n  margin: 0;\n  display: block;\n  width: 100%;\n  font-size: 13px;\n}\n\ndiv:not(:last-child) {\n  border-bottom: 1px solid gray;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gIG1hcmdpbjogMTZweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wcmUge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5kaXY6bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre>\n  <![CDATA[// Global styles\n  .ngj-rating-box { ... }\n  .ngj-rating-container { ... }\n  .ngj-rating-star {\n    color: goldenrod;\n    font-size: 32px;\n  }\n  .ngj-rating-rate { color: darkslategray; }\n  \n  // Custom class in styles.css\n  .custom-class .ngj-rating-box { border: 1px dashed yellowgreen; }\n  .custom-class .ngj-rating-container { background: salmon; }\n  .custom-class .ngj-rating-star { color: black }\n  .custom-class .ngj-rating-rate { color: green; }]]>\n</pre>\n<div>\n  <ngj-rating></ngj-rating>\n  <pre>\n    <![CDATA[<ngj-rating></ngj-rating>]]>\n  </pre>\n</div>\n<div>\n  <ngj-rating [values]=\"[3, 4, 1, 2, 2]\" [maxValue]=\"5\"></ngj-rating>\n  <pre>\n    <![CDATA[<ngj-rating [values]=\"[3,4,1,2,2]\" [maxValue]=\"5\"></ngj-rating>]]>\n  </pre>\n</div>\n<div>\n  <ngj-rating [values]=\"values\" [disabled]=\"true\"></ngj-rating>\n  <pre>\n    <![CDATA[<ngj-rating [values]=\"values\" [disabled]=\"true\"></ngj-rating>]]>\n  </pre>\n</div>\n<div>\n  <ngj-rating [values]=\"values\" (rateSubmit)=\"rated = true\"></ngj-rating>\n  {{ rated }}\n  <pre>\n    <![CDATA[<ngj-rating [values]=\"values\" (rateSubmit)=\"rated = true\"></ngj-rating>\n    {{'\\{\\{rated\\}\\}'}}]]>\n  </pre>\n</div>\n<div>\n  <ngj-rating [values]=\"values\" [showMaxValue]=\"true\"></ngj-rating>\n  <pre>\n    <![CDATA[<ngj-rating [values]=\"values\" [showMaxValue]=\"true\"></ngj-rating>]]>\n  </pre>\n</div>\n<div>\n  <ngj-rating [values]=\"values\" [showAverage]=\"false\"></ngj-rating>\n  <pre>\n    <![CDATA[<ngj-rating [values]=\"values\" [showAverage]=\"false\"></ngj-rating>]]>\n  </pre>\n</div>\n<div>\n  <ngj-rating [values]=\"values\" [disableAfterRateSubmit]=\"'false'\"></ngj-rating>\n  <pre>\n    <![CDATA[<ngj-rating [values]=\"values\" [disableAfterRateSubmit]=\"'false'\"></ngj-rating>]]>\n  </pre>\n</div>\n<div>\n  <ngj-rating [values]=\"values\" class=\"custom-class\"></ngj-rating>\n  <pre>\n    <![CDATA[<ngj-rating [values]=\"values\" class=\"custom-class\"></ngj-rating>]]>\n  </pre>\n</div>\n"

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
/* harmony import */ var _ngj_rating_ngj_rating_options_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngj-rating/ngj-rating-options.service */ "./src/app/ngj-rating/ngj-rating-options.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(options) {
        this.options = options;
        this.values = [4, 3, 5];
        this.rated = false;
        options.maxValue = 10;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngj_rating_ngj_rating_options_service__WEBPACK_IMPORTED_MODULE_2__["NgjRatingOptions"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngj_rating_ngj_rating_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngj-rating/ngj-rating.module */ "./src/app/ngj-rating/ngj-rating.module.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ngj_rating_ngj_rating_module__WEBPACK_IMPORTED_MODULE_4__["NgjRatingModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ngj-rating/ngj-rating-options.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/ngj-rating/ngj-rating-options.service.ts ***!
  \**********************************************************/
/*! exports provided: NgjRatingOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgjRatingOptions", function() { return NgjRatingOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NgjRatingOptions = /** @class */ (function () {
    function NgjRatingOptions() {
        this.disabled = false;
        this.maxValue = 10;
        this.showAverage = true;
        this.showMaxValue = false;
        this.disableAfterRateSubmit = true;
    }
    NgjRatingOptions = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgjRatingOptions);
    return NgjRatingOptions;
}());



/***/ }),

/***/ "./src/app/ngj-rating/ngj-rating.component.css":
/*!*****************************************************!*\
  !*** ./src/app/ngj-rating/ngj-rating.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'font-awesome';\n  src: url('font-awesome.eot?12791287');\n  src: url('font-awesome.eot?12791287#iefix') format('embedded-opentype'),\n       url('font-awesome.woff2?12791287') format('woff2'),\n       url('font-awesome.woff?12791287') format('woff'),\n       url('font-awesome.ttf?12791287') format('truetype'),\n       url('font-awesome.svg?12791287#font-awesome') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */\n/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */\n/*\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n  @font-face {\n    font-family: 'font-awesome';\n    src: url('../font/font-awesome.svg?12791287#font-awesome') format('svg');\n  }\n}\n*/\n[class^=\"fa-\"]:before, [class*=\" fa-\"]:before {\n  font-family: \"font-awesome\";\n  font-style: normal;\n  font-weight: normal;\n  speak: none;\n \n  display: inline-block;\n  text-decoration: inherit;\n  width: 1em;\n  margin-right: .2em;\n  text-align: center;\n  /* opacity: .8; */\n \n  /* For safety - reset parent styles, that can break glyph codes*/\n  font-variant: normal;\n  text-transform: none;\n \n  /* fix buttons height, for twitter bootstrap */\n  line-height: 1em;\n \n  /* Animation center compensation - margins should be symmetric */\n  /* remove if not needed */\n  margin-left: .2em;\n \n  /* you can be more comfortable with increased icons size */\n  /* font-size: 120%; */\n \n  /* Font smoothing. That was taken from TWBS */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n \n  /* Uncomment for 3D effect */\n  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */\n}\n.fa-star:before { content: '\\e800'; }\n/* '' */\n.fa-star-empty:before { content: '\\e801'; }\n/* '' */\n.fa-star-half:before { content: '\\f123'; }\n/* '' */\n[class^=\"fa-\"], [class*=\" fa-\"] {\n  font-family: 'font-awesome';\n  font-style: normal;\n  font-weight: normal;\n \n  /* fix buttons height */\n  line-height: 1em;\n \n  /* you can be more comfortable with increased icons size */\n  /* font-size: 120%; */\n}\n.fa-star { *zoom: expression( this.runtimeStyle['zoom'] = '1', this.innerHTML = '&#xe800;&nbsp;'); }\n.fa-star-empty { *zoom: expression( this.runtimeStyle['zoom'] = '1', this.innerHTML = '&#xe801;&nbsp;'); }\n.fa-star-half { *zoom: expression( this.runtimeStyle['zoom'] = '1', this.innerHTML = '&#xf123;&nbsp;'); }\ndiv {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: inherit;\n  font-size: 18px;\n}\n.ngj-rating-box {\n  margin: 4px;\n}\n.ngj-rating-star {\n  cursor: pointer;\n  width: 1em;\n}\n.ngj-rating-rate {\n  margin: 0 8px;\n}\n.disabled {\n  -webkit-filter: opacity(0.5);\n          filter: opacity(0.5);\n}\n.disabled .ngj-rating-star {\n  cursor: initial;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmdqLXJhdGluZy9pY29uLWZvbnQvY3NzL2ZvbnQtYXdlc29tZS5jc3MiLCJzcmMvYXBwL25nai1yYXRpbmcvaWNvbi1mb250L2Nzcy9mb250LWF3ZXNvbWUtaWU3LmNzcyIsInNyYy9hcHAvbmdqLXJhdGluZy9uZ2otcmF0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IscUNBQTZDO0VBQzdDOzs7O2tFQUl3RTtFQUN4RSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0EsZ0dBQWdHO0FBQ2hHLDJGQUEyRjtBQUMzRjs7Ozs7OztDQU9DO0FBRUE7RUFDQywyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXOztFQUVYLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCOztFQUVqQixnRUFBZ0U7RUFDaEUsb0JBQW9CO0VBQ3BCLG9CQUFvQjs7RUFFcEIsOENBQThDO0VBQzlDLGdCQUFnQjs7RUFFaEIsZ0VBQWdFO0VBQ2hFLHlCQUF5QjtFQUN6QixpQkFBaUI7O0VBRWpCLDBEQUEwRDtFQUMxRCxxQkFBcUI7O0VBRXJCLDZDQUE2QztFQUM3QyxtQ0FBbUM7RUFDbkMsa0NBQWtDOztFQUVsQyw0QkFBNEI7RUFDNUIsdURBQXVEO0FBQ3pEO0FBRUEsa0JBQWtCLGdCQUFnQixFQUFFO0FBQUUsUUFBUTtBQUM5Qyx3QkFBd0IsZ0JBQWdCLEVBQUU7QUFBRSxRQUFRO0FBQ3BELHVCQUF1QixnQkFBZ0IsRUFBRTtBQUFFLFFBQVE7QUMzRG5EO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixtQkFBbUI7O0VBRW5CLHVCQUF1QjtFQUN2QixnQkFBZ0I7O0VBRWhCLDBEQUEwRDtFQUMxRCxxQkFBcUI7QUFDdkI7QUFFQSxZQUFXLHFGQUFzRixFQUFFO0FBQ25HLGtCQUFpQixxRkFBc0YsRUFBRTtBQUN6RyxpQkFBZ0IscUZBQXNGLEVBQUU7QUNYeEc7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLDRCQUFvQjtVQUFwQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9uZ2otcmF0aW5nL25nai1yYXRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ2ZvbnQtYXdlc29tZSc7XG4gIHNyYzogdXJsKCcuLi9mb250L2ZvbnQtYXdlc29tZS5lb3Q/MTI3OTEyODcnKTtcbiAgc3JjOiB1cmwoJy4uL2ZvbnQvZm9udC1hd2Vzb21lLmVvdD8xMjc5MTI4NyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgICAgICB1cmwoJy4uL2ZvbnQvZm9udC1hd2Vzb21lLndvZmYyPzEyNzkxMjg3JykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgIHVybCgnLi4vZm9udC9mb250LWF3ZXNvbWUud29mZj8xMjc5MTI4NycpIGZvcm1hdCgnd29mZicpLFxuICAgICAgIHVybCgnLi4vZm9udC9mb250LWF3ZXNvbWUudHRmPzEyNzkxMjg3JykgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgIHVybCgnLi4vZm9udC9mb250LWF3ZXNvbWUuc3ZnPzEyNzkxMjg3I2ZvbnQtYXdlc29tZScpIGZvcm1hdCgnc3ZnJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi8qIENocm9tZSBoYWNrOiBTVkcgaXMgcmVuZGVyZWQgbW9yZSBzbW9vdGggaW4gV2luZG96emUuIDEwMCUgbWFnaWMsIHVuY29tbWVudCBpZiB5b3UgbmVlZCBpdC4gKi9cbi8qIE5vdGUsIHRoYXQgd2lsbCBicmVhayBoaW50aW5nISBJbiBvdGhlciBPUy1lcyBmb250IHdpbGwgYmUgbm90IGFzIHNoYXJwIGFzIGl0IGNvdWxkIGJlICovXG4vKlxuQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzowKSB7XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnZm9udC1hd2Vzb21lJztcbiAgICBzcmM6IHVybCgnLi4vZm9udC9mb250LWF3ZXNvbWUuc3ZnPzEyNzkxMjg3I2ZvbnQtYXdlc29tZScpIGZvcm1hdCgnc3ZnJyk7XG4gIH1cbn1cbiovXG4gXG4gW2NsYXNzXj1cImZhLVwiXTpiZWZvcmUsIFtjbGFzcyo9XCIgZmEtXCJdOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQtYXdlc29tZVwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNwZWFrOiBub25lO1xuIFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgd2lkdGg6IDFlbTtcbiAgbWFyZ2luLXJpZ2h0OiAuMmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qIG9wYWNpdHk6IC44OyAqL1xuIFxuICAvKiBGb3Igc2FmZXR5IC0gcmVzZXQgcGFyZW50IHN0eWxlcywgdGhhdCBjYW4gYnJlYWsgZ2x5cGggY29kZXMqL1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gXG4gIC8qIGZpeCBidXR0b25zIGhlaWdodCwgZm9yIHR3aXR0ZXIgYm9vdHN0cmFwICovXG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gXG4gIC8qIEFuaW1hdGlvbiBjZW50ZXIgY29tcGVuc2F0aW9uIC0gbWFyZ2lucyBzaG91bGQgYmUgc3ltbWV0cmljICovXG4gIC8qIHJlbW92ZSBpZiBub3QgbmVlZGVkICovXG4gIG1hcmdpbi1sZWZ0OiAuMmVtO1xuIFxuICAvKiB5b3UgY2FuIGJlIG1vcmUgY29tZm9ydGFibGUgd2l0aCBpbmNyZWFzZWQgaWNvbnMgc2l6ZSAqL1xuICAvKiBmb250LXNpemU6IDEyMCU7ICovXG4gXG4gIC8qIEZvbnQgc21vb3RoaW5nLiBUaGF0IHdhcyB0YWtlbiBmcm9tIFRXQlMgKi9cbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gXG4gIC8qIFVuY29tbWVudCBmb3IgM0QgZWZmZWN0ICovXG4gIC8qIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDEyNywgMTI3LCAxMjcsIDAuMyk7ICovXG59XG4gXG4uZmEtc3RhcjpiZWZvcmUgeyBjb250ZW50OiAnXFxlODAwJzsgfSAvKiAn7qCAJyAqL1xuLmZhLXN0YXItZW1wdHk6YmVmb3JlIHsgY29udGVudDogJ1xcZTgwMSc7IH0gLyogJ+6ggScgKi9cbi5mYS1zdGFyLWhhbGY6YmVmb3JlIHsgY29udGVudDogJ1xcZjEyMyc7IH0gLyogJ++EoycgKi8iLCJbY2xhc3NePVwiZmEtXCJdLCBbY2xhc3MqPVwiIGZhLVwiXSB7XG4gIGZvbnQtZmFtaWx5OiAnZm9udC1hd2Vzb21lJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuIFxuICAvKiBmaXggYnV0dG9ucyBoZWlnaHQgKi9cbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiBcbiAgLyogeW91IGNhbiBiZSBtb3JlIGNvbWZvcnRhYmxlIHdpdGggaW5jcmVhc2VkIGljb25zIHNpemUgKi9cbiAgLyogZm9udC1zaXplOiAxMjAlOyAqL1xufVxuIFxuLmZhLXN0YXIgeyAqem9vbTogZXhwcmVzc2lvbiggdGhpcy5ydW50aW1lU3R5bGVbJ3pvb20nXSA9ICcxJywgdGhpcy5pbm5lckhUTUwgPSAnJiN4ZTgwMDsmbmJzcDsnKTsgfVxuLmZhLXN0YXItZW1wdHkgeyAqem9vbTogZXhwcmVzc2lvbiggdGhpcy5ydW50aW1lU3R5bGVbJ3pvb20nXSA9ICcxJywgdGhpcy5pbm5lckhUTUwgPSAnJiN4ZTgwMTsmbmJzcDsnKTsgfVxuLmZhLXN0YXItaGFsZiB7ICp6b29tOiBleHByZXNzaW9uKCB0aGlzLnJ1bnRpbWVTdHlsZVsnem9vbSddID0gJzEnLCB0aGlzLmlubmVySFRNTCA9ICcmI3hmMTIzOyZuYnNwOycpOyB9IiwiQGltcG9ydCB1cmwoJ2ljb24tZm9udC9jc3MvZm9udC1hd2Vzb21lLmNzcycpO1xuQGltcG9ydCB1cmwoJ2ljb24tZm9udC9jc3MvZm9udC1hd2Vzb21lLWllNy5jc3MnKTtcblxuZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubmdqLXJhdGluZy1ib3gge1xuICBtYXJnaW46IDRweDtcbn1cblxuLm5nai1yYXRpbmctc3RhciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDFlbTtcbn1cblxuLm5nai1yYXRpbmctcmF0ZSB7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi5kaXNhYmxlZCB7XG4gIGZpbHRlcjogb3BhY2l0eSgwLjUpO1xufVxuXG4uZGlzYWJsZWQgLm5nai1yYXRpbmctc3RhciB7XG4gIGN1cnNvcjogaW5pdGlhbDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/ngj-rating/ngj-rating.component.html":
/*!******************************************************!*\
  !*** ./src/app/ngj-rating/ngj-rating.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ngj-rating-box\" (mouseleave)=\"setStarTypes()\">\n  <div class=\"ngj-rating-container\" [class.disabled]=\"disabled\">\n    <div\n      class=\"ngj-rating-star\"\n      *ngFor=\"let star of stars; let starIndex = index\"\n      (mouseenter)=\"highlight(starIndex)\"\n      (click)=\"rate(starIndex + 1)\"\n    >\n      <i [ngClass]=\"[star]\"></i>\n    </div>\n  </div>\n  <div class=\"ngj-rating-rate\" *ngIf=\"showAverage || showMaxValue\">\n    {{ average | ngjRound: 2 }}\n    <ng-container *ngIf=\"showMaxValue\">\n      <span>/</span>\n      {{ maxValue }}\n    </ng-container>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ngj-rating/ngj-rating.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ngj-rating/ngj-rating.component.ts ***!
  \****************************************************/
/*! exports provided: NgjRatingComponent, StarType, roundPrecisely */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgjRatingComponent", function() { return NgjRatingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarType", function() { return StarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundPrecisely", function() { return roundPrecisely; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngj_rating_options_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngj-rating-options.service */ "./src/app/ngj-rating/ngj-rating-options.service.ts");



var NgjRatingComponent = /** @class */ (function () {
    function NgjRatingComponent(options) {
        this.values = [];
        this.valuesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.disabled = options.disabled;
        this.maxValue = options.maxValue;
        this.showMaxValue = options.showMaxValue;
        this.showAverage = options.showAverage;
        this.disableAfterRateSubmit = options.disableAfterRateSubmit;
        this.rateSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.averageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgjRatingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stars = new Array(this.maxValue).fill(StarType.EMPTY_STAR);
        this.values = this.limitValues(this.values);
        this.average = this.calculateAverage() || 0;
        setTimeout(function () {
            _this.averageChange.emit(_this.average);
        }, 0);
        this.setStarTypes();
    };
    NgjRatingComponent.prototype.setStarTypes = function () {
        var average = this.average;
        var starType = StarType.EMPTY_STAR;
        this.stars = this.stars.map(function () {
            if (average >= 0.75) {
                starType = StarType.FULL_STAR;
            }
            else if (average >= 0.25) {
                starType = StarType.HALF_STAR;
            }
            else {
                starType = StarType.EMPTY_STAR;
            }
            --average;
            return starType;
        });
    };
    NgjRatingComponent.prototype.calculateAverage = function () {
        if (this.values.length === 0 || !this.values) {
            return 0;
        }
        var sum = this.values.reduce(function (acc, val) { return acc + val; });
        var average = sum / this.values.length;
        return roundPrecisely(average, 2);
    };
    NgjRatingComponent.prototype.highlight = function (starQuantity) {
        if (!this.disabled) {
            this.stars = this.stars.map(function (star, index) {
                if (index <= starQuantity) {
                    return StarType.FULL_STAR;
                }
                else {
                    return StarType.EMPTY_STAR;
                }
            });
        }
    };
    NgjRatingComponent.prototype.rate = function (starQuantity) {
        if (!this.disabled) {
            this.values.push(starQuantity);
            this.average = this.calculateAverage();
            this.setStarTypes();
            if (this.disableAfterRateSubmit === true) {
                this.disabled = true;
            }
            this.averageChange.emit(this.average);
            this.valuesChange.emit(this.values);
            this.rateSubmit.emit({
                average: this.average,
                values: this.values,
                amount: this.values.length
            });
        }
    };
    NgjRatingComponent.prototype.limitValues = function (values) {
        var MinValue = 1;
        var MaxValue = this.maxValue;
        return values.map(function (value) { return (value < 0 ? MinValue : value > MaxValue ? MaxValue : value); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NgjRatingComponent.prototype, "values", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgjRatingComponent.prototype, "valuesChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NgjRatingComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NgjRatingComponent.prototype, "maxValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NgjRatingComponent.prototype, "showMaxValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NgjRatingComponent.prototype, "showAverage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NgjRatingComponent.prototype, "disableAfterRateSubmit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgjRatingComponent.prototype, "rateSubmit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgjRatingComponent.prototype, "averageChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NgjRatingComponent.prototype, "average", void 0);
    NgjRatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngj-rating',
            template: __webpack_require__(/*! ./ngj-rating.component.html */ "./src/app/ngj-rating/ngj-rating.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./ngj-rating.component.css */ "./src/app/ngj-rating/ngj-rating.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngj_rating_options_service__WEBPACK_IMPORTED_MODULE_2__["NgjRatingOptions"]])
    ], NgjRatingComponent);
    return NgjRatingComponent;
}());

var StarType = {
    EMPTY_STAR: 'fa-star-empty',
    HALF_STAR: 'fa-star-half',
    FULL_STAR: 'fa-star'
};
function roundPrecisely(value, precision) {
    precision = precision < 0 ? 0 : precision;
    var factor = Math.pow(10, precision || 0);
    return Math.round(value * factor) / factor;
}


/***/ }),

/***/ "./src/app/ngj-rating/ngj-rating.module.ts":
/*!*************************************************!*\
  !*** ./src/app/ngj-rating/ngj-rating.module.ts ***!
  \*************************************************/
/*! exports provided: NgjRatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgjRatingModule", function() { return NgjRatingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngj_rating_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngj-rating.component */ "./src/app/ngj-rating/ngj-rating.component.ts");
/* harmony import */ var _ngj_round_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngj-round.pipe */ "./src/app/ngj-rating/ngj-round.pipe.ts");
/* harmony import */ var _ngj_rating_options_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngj-rating-options.service */ "./src/app/ngj-rating/ngj-rating-options.service.ts");






var NgjRatingModule = /** @class */ (function () {
    function NgjRatingModule() {
    }
    NgjRatingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [_ngj_rating_component__WEBPACK_IMPORTED_MODULE_3__["NgjRatingComponent"], _ngj_round_pipe__WEBPACK_IMPORTED_MODULE_4__["NgjRoundPipe"]],
            exports: [_ngj_rating_component__WEBPACK_IMPORTED_MODULE_3__["NgjRatingComponent"]],
            providers: [_ngj_rating_options_service__WEBPACK_IMPORTED_MODULE_5__["NgjRatingOptions"]]
        })
    ], NgjRatingModule);
    return NgjRatingModule;
}());



/***/ }),

/***/ "./src/app/ngj-rating/ngj-round.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/ngj-rating/ngj-round.pipe.ts ***!
  \**********************************************/
/*! exports provided: NgjRoundPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgjRoundPipe", function() { return NgjRoundPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngj_rating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngj-rating.component */ "./src/app/ngj-rating/ngj-rating.component.ts");



var NgjRoundPipe = /** @class */ (function () {
    function NgjRoundPipe() {
    }
    NgjRoundPipe.prototype.transform = function (value, precision) {
        return Object(_ngj_rating_component__WEBPACK_IMPORTED_MODULE_2__["roundPrecisely"])(value, precision);
    };
    NgjRoundPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'ngjRound'
        })
    ], NgjRoundPipe);
    return NgjRoundPipe;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jszkarlat/Development/ngj-rating/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map