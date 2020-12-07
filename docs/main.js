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

/***/ "./src/app/SearchFilterPipe.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/SearchFilterPipe.pipe.ts ***!
  \******************************************/
/*! exports provided: SearchFilterPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterPipePipe", function() { return SearchFilterPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchFilterPipePipe = /** @class */ (function () {
    function SearchFilterPipePipe() {
    }
    SearchFilterPipePipe.prototype.transform = function (items, formatSearch, nameSearch, classSearch, typeSearch, setSearch, raritySearch, manaCostSearch) {
        console.log(formatSearch);
        if (items && items.length) {
            return items.filter(function (item) {
                if (setSearch && item.set.toLowerCase().indexOf(setSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (manaCostSearch) {
                    if (Number(manaCostSearch) === 7) {
                        if (item.cost < 7) {
                            return false;
                        }
                    }
                    else {
                        if (item.cost !== Number(manaCostSearch)) {
                            return false;
                        }
                    }
                }
                if (nameSearch && item.name.toLowerCase().indexOf(nameSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (typeSearch && item.type.toLowerCase().indexOf(typeSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (classSearch && item.cardClass.toLowerCase().indexOf(classSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (raritySearch && item.rarity.toLowerCase().indexOf(raritySearch.toLowerCase()) === -1) {
                    return false;
                }
                if (formatSearch === false) {
                    var formatSets = ['CORE', 'EXPERT1', 'UNGORO', 'ICECROWN', 'LOOTAPALOOZA', 'GILNEAS', 'BOOMSDAY', 'TROLL'];
                    // console.log(formatSets.indexOf(item.set));
                    if (formatSets.indexOf(item.set) === -1) {
                        return false;
                    }
                }
                return true;
            });
        }
        else {
            return items;
        }
    };
    SearchFilterPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'SearchFilterPipe'
        })
    ], SearchFilterPipePipe);
    return SearchFilterPipePipe;
}());



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
/* harmony import */ var _app_home_view_home_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/home-view/home-view.component */ "./src/app/home-view/home-view.component.ts");
/* harmony import */ var _SearchFilterPipe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchFilterPipe.pipe */ "./src/app/SearchFilterPipe.pipe.ts");
/* harmony import */ var _orderByPipe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orderByPipe.pipe */ "./src/app/orderByPipe.pipe.ts");






var routes = [
    { path: '', component: _app_home_view_home_view_component__WEBPACK_IMPORTED_MODULE_3__["HomeViewComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _SearchFilterPipe_pipe__WEBPACK_IMPORTED_MODULE_4__["SearchFilterPipePipe"],
                _orderByPipe_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderByPipePipe"]
            ]
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

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_view_home_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-view/home-view.component */ "./src/app/home-view/home-view.component.ts");
/* harmony import */ var _card_view_card_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card-view/card-view.component */ "./src/app/card-view/card-view.component.ts");
/* harmony import */ var _filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filter-menu/filter-menu.component */ "./src/app/filter-menu/filter-menu.component.ts");
/* harmony import */ var _detail_menu_detail_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./detail-menu/detail-menu.component */ "./src/app/detail-menu/detail-menu.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _home_view_home_view_component__WEBPACK_IMPORTED_MODULE_9__["HomeViewComponent"],
                _card_view_card_view_component__WEBPACK_IMPORTED_MODULE_10__["CardViewComponent"],
                _filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_11__["FilterMenuComponent"],
                _detail_menu_detail_menu_component__WEBPACK_IMPORTED_MODULE_12__["DetailMenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card-view/card-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/card-view/card-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-icons {\n  font-size: 1.8rem;\n  color: black;\n  padding: 0 8px 0;\n}\n.switch-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 7px;\n  padding-bottom: 7px;\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n  margin: 0;\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgb(102, 102, 102);\n  transition: 0.4s;\n}\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n.slider.round {\n  border-radius: 34px;\n}\n.slider.round:before {\n  border-radius: 50%;\n}\ninput:checked + .slider {\n  background-color: black;\n}\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px);\n}\n/*cards container*/\n.container {\n  margin-top: 50px;\n  padding-top: 3%;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.filter-row {\n  padding: 0;\n  margin-bottom: 1%;\n}\n.open {\n  align-items: flex-end;\n}\n.card {\n  padding: 6px;\n  border: none;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 2;\n  transition: all 200ms ease-in-out;\n}\n.card::after {\n  position: absolute;\n  top: 14%;\n  width: 75%;\n  height: 72%;\n  background-color: transparent;\n  content: \" \";\n  border-radius: 10%;\n  z-index: 1;\n  transition: all 200ms ease-in-out;\n}\n.card-hero {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n  transition: all 200ms ease-in-out;\n}\n.card-hero::after {\n  position: absolute;\n  top: 14%;\n  left: 16%;\n  width: 63%;\n  height: 50%;\n  background-color: transparent;\n  content: \" \";\n  border-radius: 50% 50% 0 0;\n  z-index: 1;\n}\n.card:hover,\n.card-hero:hover {\n  -webkit-transform: translateY(-10px) scale(1.03);\n          transform: translateY(-10px) scale(1.03);\n}\n.card:hover:after,\n.card-hero:hover:after {\n  box-shadow: 0px 0px 25px 10px rgb(225, 240, 181),\n    0px 0px 25px 15px rgb(114, 247, 36);\n}\n.card-image {\n  width: 100%;\n  z-index: 2;\n}\n.card-row:hover {\n  cursor: pointer;\n}\n/*Card Tooltip in table*/\n.hasTooltip {\n  text-decoration: none;\n  color: black;\n  position: relative;\n}\n.hasTooltip #image,\n.hasTooltip #anchor {\n  display: none;\n  background: transparent;\n  padding: 0;\n}\n.hasTooltip span img {\n  height: auto;\n  width: 160px;\n  margin: 0;\n  padding: 0;\n}\n.hasTooltip:hover #image {\n  display: block;\n  position: absolute;\n  bottom: -50%;\n  -webkit-transform: translateY(50%) translateX(100%);\n          transform: translateY(50%) translateX(100%);\n  border: none;\n  z-index: 500;\n}\n/*pagination*/\n.pagination-container {\n  margin: 2% 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.pagination-container > div {\n  padding: 15px 15px 0;\n}\n.page-link {\n  color: black;\n}\nngb-pagination .pagination .page-item.active a {\n  background-color: black;\n  border-color: black;\n}\n/* Larger desktop */\n@media (min-width: 1200px) {\n  .container {\n    max-width: 90%;\n  }\n}\n/* Large desktop */\n@media (min-width: 980px) and (max-width: 1199px) {\n  .container {\n    max-width: 90%;\n  }\n}\n/* Portrait tablet to landscape and desktop */\n@media (min-width: 768px) and (max-width: 979px) {\n}\n/* Landscape phone to portrait tablet */\n@media (max-width: 767px) {\n  .row {\n    margin: 0;\n  }\n  .hasTooltip:hover #image {\n    display: none;\n  }\n}\n/* Landscape phones and down */\n@media (max-width: 480px) {\n  .row {\n    margin: 0;\n  }\n  .hasTooltip:hover #image {\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC12aWV3L2NhcmQtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0NBQ1g7QUFDRDtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtDQUNYO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixxQ0FBcUM7RUFFckMsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWix3QkFBd0I7RUFFeEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0Usd0JBQXdCO0NBQ3pCO0FBRUQ7RUFDRSw0QkFBNEI7Q0FDN0I7QUFFRDtFQUNFLG9DQUFvQztFQUVwQyw0QkFBNEI7Q0FDN0I7QUFDRCxtQkFBbUI7QUFDbkI7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0NBQWtDO0NBQ25DO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtDQUFrQztDQUNuQztBQUNEO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGtDQUFrQztDQUNuQztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixXQUFXO0NBQ1o7QUFDRDs7RUFFRSxpREFBeUM7VUFBekMseUNBQXlDO0NBQzFDO0FBQ0Q7O0VBRUU7d0NBQ3NDO0NBQ3ZDO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osV0FBVztDQUNaO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7QUFDRCx5QkFBeUI7QUFDekI7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjtBQUNEOztFQUVFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsV0FBVztDQUNaO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFVBQVU7RUFDVixXQUFXO0NBQ1o7QUFFRDtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG9EQUE0QztVQUE1Qyw0Q0FBNEM7RUFDNUMsYUFBYTtFQUNiLGFBQWE7Q0FDZDtBQUNELGNBQWM7QUFDZDtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxhQUFhO0NBQ2Q7QUFDRDtFQUNFLHdCQUF3QjtFQUN4QixvQkFBb0I7Q0FDckI7QUFDRCxvQkFBb0I7QUFDcEI7RUFDRTtJQUNFLGVBQWU7R0FDaEI7Q0FDRjtBQUNELG1CQUFtQjtBQUNuQjtFQUNFO0lBQ0UsZUFBZTtHQUNoQjtDQUNGO0FBQ0QsOENBQThDO0FBQzlDO0NBQ0M7QUFDRCx3Q0FBd0M7QUFDeEM7RUFDRTtJQUNFLFVBQVU7R0FDWDtFQUNEO0lBQ0UsY0FBYztHQUNmO0NBQ0Y7QUFDRCwrQkFBK0I7QUFDL0I7RUFDRTtJQUNFLFVBQVU7R0FDWDtFQUNEO0lBQ0UsY0FBYztHQUNmO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXJkLXZpZXcvY2FyZC12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtaWNvbnMge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAwIDhweCAwO1xufVxuLnN3aXRjaC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDdweDtcbiAgcGFkZGluZy1ib3R0b206IDdweDtcbn1cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMzRweDtcbiAgbWFyZ2luOiAwO1xufVxuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAyNnB4O1xuICB3aWR0aDogMjZweDtcbiAgbGVmdDogNHB4O1xuICBib3R0b206IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cbi5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZmMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cbi8qY2FyZHMgY29udGFpbmVyKi9cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwYWRkaW5nLXRvcDogMyU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZpbHRlci1yb3cge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbn1cbi5vcGVuIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmNhcmQge1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbn1cbi5jYXJkOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNCU7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogNzIlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29udGVudDogXCIgXCI7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xufVxuLmNhcmQtaGVybyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAyO1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG59XG4uY2FyZC1oZXJvOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNCU7XG4gIGxlZnQ6IDE2JTtcbiAgd2lkdGg6IDYzJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb250ZW50OiBcIiBcIjtcbiAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSAwIDA7XG4gIHotaW5kZXg6IDE7XG59XG4uY2FyZDpob3Zlcixcbi5jYXJkLWhlcm86aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIHNjYWxlKDEuMDMpO1xufVxuLmNhcmQ6aG92ZXI6YWZ0ZXIsXG4uY2FyZC1oZXJvOmhvdmVyOmFmdGVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IDEwcHggcmdiKDIyNSwgMjQwLCAxODEpLFxuICAgIDBweCAwcHggMjVweCAxNXB4IHJnYigxMTQsIDI0NywgMzYpO1xufVxuLmNhcmQtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbn1cbi5jYXJkLXJvdzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qQ2FyZCBUb29sdGlwIGluIHRhYmxlKi9cbi5oYXNUb29sdGlwIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oYXNUb29sdGlwICNpbWFnZSxcbi5oYXNUb29sdGlwICNhbmNob3Ige1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMDtcbn1cbi5oYXNUb29sdGlwIHNwYW4gaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTYwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmhhc1Rvb2x0aXA6aG92ZXIgI2ltYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKSB0cmFuc2xhdGVYKDEwMCUpO1xuICBib3JkZXI6IG5vbmU7XG4gIHotaW5kZXg6IDUwMDtcbn1cbi8qcGFnaW5hdGlvbiovXG4ucGFnaW5hdGlvbi1jb250YWluZXIge1xuICBtYXJnaW46IDIlIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBhZ2luYXRpb24tY29udGFpbmVyID4gZGl2IHtcbiAgcGFkZGluZzogMTVweCAxNXB4IDA7XG59XG4ucGFnZS1saW5rIHtcbiAgY29sb3I6IGJsYWNrO1xufVxubmdiLXBhZ2luYXRpb24gLnBhZ2luYXRpb24gLnBhZ2UtaXRlbS5hY3RpdmUgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuLyogTGFyZ2VyIGRlc2t0b3AgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gIH1cbn1cbi8qIExhcmdlIGRlc2t0b3AgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA5ODBweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgfVxufVxuLyogUG9ydHJhaXQgdGFibGV0IHRvIGxhbmRzY2FwZSBhbmQgZGVza3RvcCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTc5cHgpIHtcbn1cbi8qIExhbmRzY2FwZSBwaG9uZSB0byBwb3J0cmFpdCB0YWJsZXQgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAucm93IHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmhhc1Rvb2x0aXA6aG92ZXIgI2ltYWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4vKiBMYW5kc2NhcGUgcGhvbmVzIGFuZCBkb3duICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnJvdyB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5oYXNUb29sdGlwOmhvdmVyICNpbWFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/card-view/card-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/card-view/card-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"card-container\" class=\"container\">\n  <div class=\"row filter-row\" [ngClass]=\"(menuState === 'open') || (detailState === 'open') ? 'row justify-content-center' : 'justify-content-start'\">\n    <div class=\"switch-container\" [ngClass]=\"(menuState === 'open') || (detailState === 'open') ? 'col-12 col-sm-6 col-md-6 col-xl-auto' : 'col-12 col-sm-6 col-md-auto'\">\n      <button\n        id=\"openFilters\"\n        type=\"button\"\n        class=\"btn btn-dark\"\n        (click)=\"onOpenFilters()\">Filter Cards</button>\n    </div>\n    <div class=\"switch-container\" [ngClass]=\"(menuState === 'open') || (detailState === 'open') ? 'col-12 col-sm-6 col-md-6 col-xl-auto' : 'col-12 col-sm-6 col-md-auto'\">\n      <!--Tooltip-->\n      <ng-template #tipView>Change View</ng-template>\n      <!--Switch View-->\n      <i class=\"fa fa-table fa-icons\" aria-hidden=\"true\"></i>\n      <label id=\"viewSwitch\" class=\"switch\" [ngbTooltip]=\"tipView\">\n        <input id=\"viewSwitchInput\" type=\"checkbox\" [checked]=\"viewSwitch\" (change)=\"onViewChange()\">\n        <span id=\"viewSwitchSlider\" class=\"slider round\"></span>\n      </label>\n      <i class=\"fa fa-image fa-icons\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"switch-container\" [ngClass]=\"(menuState === 'open') || (detailState === 'open') ? 'col-12 col-sm-6 col-md-6 col-xl-auto' : 'col-12 col-sm-6 col-md-auto'\">\n      <!--Tooltip-->\n      <ng-template #tipFormat>Standard / Wild</ng-template>\n      <!--Switch Format-->\n      <img src=\"../../assets/Mode_Standard.png\" alt=\"Standard\" width=\"40px\" height=\"40px\" style=\"margin: 0 8px;\">\n      <label id=\"formatSwitch\" class=\"switch\" [ngbTooltip]=\"tipFormat\">\n        <input id=\"formatSwitchInput\" type=\"checkbox\" [checked]=\"formatSwitch\" (change)=\"onFormatChange()\">\n        <span id=\"formatSwitchSlider\" class=\"slider round\"></span>\n      </label>\n      <img src=\"../../assets/Mode_Wild.png\" alt=\"Wild\" width=\"40px\" height=\"40px\" style=\"margin: 0 8px;\">\n    </div>\n    <div class=\"switch-container\" [ngClass]=\"(menuState === 'open') || (detailState === 'open') ? 'col-6 col-xl-auto' : 'col-6 col-sm-6 col-md-auto'\">\n      <!--Tooltip-->\n      <ng-template #tipSorting>Sort Items</ng-template>\n      <!--Sorting-->\n      <i class=\"fa fa-sort fa-icons\" aria-hidden=\"true\"></i>\n      <select id=\"orderFilter\" class=\"form-control\" (change)=\"onOrderChange()\" [(ngModel)]=\"orderByProperty\" [ngbTooltip]=\"tipSorting\">\n        <option id=\"orderFilterDefault\" value=\"\">Random</option>\n        <option *ngFor=\"let order of orderOptions\" [value]=\"order.value\">{{order.label}}</option>\n      </select>\n    </div>\n    <div class=\"switch-container\" *ngIf=\"orderByProperty !== ''\" [ngClass]=\"(menuState === 'open') || (detailState === 'open') ? 'col-6 col-xl-auto' : 'col-6 col-sm-6 col-md-auto'\">\n      <!--Tooltip-->\n      <ng-template #tipAscDesc>Ascending / Descending</ng-template>\n      <!--Ascending / Descending Switch-->\n      <i class=\"fas fa-sort-numeric-down fa-icons\" aria-hidden=\"true\" *ngIf=\"orderByProperty === 'cost'\"></i>\n      <i class=\"fas fa-sort-alpha-down fa-icons\" aria-hidden=\"true\" *ngIf=\"orderByProperty !== 'cost'\"></i>\n      <label id=\"sortingSwitch\" class=\"switch\" [ngbTooltip]=\"tipAscDesc\">\n        <input id=\"sortingSwitchInput\" type=\"checkbox\" [checked]=\"sortingSwitch\" (change)=\"onSortingChange()\" [disabled]=\"orderByProperty === ''\">\n        <span id=\"sortingSwitchSlider\" class=\"slider round\"></span>\n      </label>\n      <i class=\"fas fa-sort-numeric-up fa-icons\" aria-hidden=\"true\" *ngIf=\"orderByProperty === 'cost'\"></i>\n      <i class=\"fas fa-sort-alpha-up fa-icons\" aria-hidden=\"true\" *ngIf=\"orderByProperty !== 'cost'\"></i>\n    </div>\n    <!--Tooltip-->\n    <ng-template #tipItemsPerPAge>Items per Page</ng-template>\n    <!--Card Quantity Switch-->\n    <div class=\"switch-container\" *ngIf=\"filteredCardsLength > 18\" [ngClass]=\"(menuState === 'open') || (detailState === 'open') ? 'col-6 col-xl-auto' : 'col-6 col-sm-6 col-md-auto'\">\n      <i class=\"fas fa-hashtag fa-icons\" aria-hidden=\"true\"></i>\n      <select\n        id=\"itemsPerPAgeFilter\"\n        class=\"form-control\"\n        (change)=\"onItemsPerPageChange()\"\n        [(ngModel)]=\"itemsPerPage\"\n        [ngbTooltip]=\"tipItemsPerPAge\">\n        <option value=\"18\" selected=\"this.itemsPerPage == 18\" *ngIf=\"filteredCardsLength > 18\">18</option>\n        <option value=\"30\" selected=\"this.itemsPerPage == 30\" *ngIf=\"filteredCardsLength > 30\">30</option>\n        <option value=\"45\" selected=\"this.itemsPerPage == 45\" *ngIf=\"filteredCardsLength > 45\">45</option>\n      </select>\n    </div>\n  </div>\n  <div id=\"card-list\" *ngIf=\"viewSwitch\" class=\"row justify-content-center\">\n    <div class=\"col-12\">\n      <div class=\"row justify-content-center\">\n        <div\n          *ngFor=\"let card of slicedCards\"\n          (click)=\"onShowCardDetails(card)\"\n          [ngClass]=\"[(menuState === 'open') || (detailState === 'open') ? 'col-sm-6 col-md-6 col-lg-4 col-xl-3' : 'col-sm-6 col-md-3 col-lg-2 col-xl-2',\n          (card.cost === undefined) && (card.type === 'HERO') ? 'card-hero' : 'card']\">\n          <img id=\"card-image\" class=\"card-image\" src=\"{{ card.image() }}\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id=\"card-table\" *ngIf=\"!viewSwitch\" class=\"row justify-content-center\">\n    <div class=\"col-12\">\n    <div class=\"table-responsive\">\n      <table class=\"table table-striped table-bordered table-hover\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Cost</th>\n            <th scope=\"col\">Card Name</th>\n            <th scope=\"col\">Class</th>\n            <th scope=\"col\">Type</th>\n            <th scope=\"col\">Set</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let card of slicedCards\" class=\"card-row\" (click)=\"onShowCardDetails(card)\">\n            <th scope=\"row\">{{ card.cost }}</th>\n            <td>\n              <a class=\"hasTooltip\">\n                {{ card.name }}\n                <span id=\"image\"><img class=\"tooltip-card-image\" src=\"{{ card.image() }}\"></span>\n              </a>\n            </td>\n            <td>{{ card.formattedClass() }}</td>\n            <td>{{ card.formattedType() }}</td>\n            <td>{{ card.getFormattedSet() }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    </div>\n  </div>\n  <div class=\"row justify-content-center pagination-container\">\n    <div class=\"col-auto\">\n      <ngb-pagination\n        [maxSize]=\"4\"\n        [collectionSize]=\"filteredCardsLength\"\n        [(page)]=\"page\"\n        [(pageSize)]=\"itemsPerPage\"\n        (pageChange)=\"onPageChange($event)\"\n        *ngIf=\"totalPages > 1\"\n        [rotate]=\"true\"\n        [ellipses]=\"false\"\n        [boundaryLinks]=\"true\"></ngb-pagination>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/card-view/card-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/card-view/card-view.component.ts ***!
  \**************************************************/
/*! exports provided: CardViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardViewComponent", function() { return CardViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _orderByPipe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orderByPipe.pipe */ "./src/app/orderByPipe.pipe.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");




var CardViewComponent = /** @class */ (function () {
    function CardViewComponent(orderFilter, config) {
        this.orderFilter = orderFilter;
        // output event emitter when card clicked
        this.cardSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeDetailState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeView = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeFormat = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openFilterMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // default pagination strings
        this.page = 1;
        this.itemsPerPage = 18;
        // sorting options
        this.orderOptions = [
            { value: 'cost', label: 'Cost' },
            { value: 'name', label: 'Name' },
            { value: 'cardClass', label: 'Class' },
            { value: 'type', label: 'Type' },
        ];
        this.orderByProperty = '';
        // switches
        this.viewSwitch = true; // gallery = true / table = false
        this.formatSwitch = true; // wild = true / strandard = false
        this.sortingSwitch = false; // Ascending = false / Descending = true
        // customize default values of popovers used by this component tree
        config.placement = 'right';
        // config.triggers = 'hover';
    }
    CardViewComponent.prototype.ngOnInit = function () { };
    CardViewComponent.prototype.ngOnChanges = function (changes) {
        // detect filter changes
        if (changes['filteredCards'] && changes['filteredCards'].previousValue !== changes['filteredCards'].currentValue) {
            // if changes @Input() filteredCards
            // change order
            this.filteredCards = this.orderFilter.transform(this.filteredCards, this.orderByProperty, this.sortingSwitch);
            this.totalPages = Math.ceil(this.filteredCards / this.itemsPerPage);
            this.filteredCardsLength = this.filteredCards.length;
            // slice cards with defaults
            this.onPageChange(1);
        }
    };
    // page change & slice array for pagination
    CardViewComponent.prototype.onPageChange = function (page) {
        // set page
        this.page = page;
        // start and end
        var start = this.itemsPerPage > -1 ? (page - 1) * Number(this.itemsPerPage) : 0;
        var end = this.itemsPerPage > -1 ? (start + Number(this.itemsPerPage)) : this.filteredCards.length;
        // slice cards
        this.slicedCards = this.filteredCards.slice(start, end);
        // set total pages
        this.totalPages = Math.ceil(this.filteredCards.length / this.itemsPerPage);
    };
    // view switch change
    CardViewComponent.prototype.onViewChange = function () {
        this.viewSwitch = !this.viewSwitch;
        this.changeView.emit(this.viewSwitch);
    };
    CardViewComponent.prototype.onOpenFilters = function () {
        // open filter menu
        this.openFilterMenu.emit();
    };
    // format switch chnage
    CardViewComponent.prototype.onFormatChange = function () {
        this.formatSwitch = !this.formatSwitch;
        this.changeFormat.emit(this.formatSwitch);
    };
    // items per page changed
    CardViewComponent.prototype.onItemsPerPageChange = function () {
        // this.itemsPerPage = numberPerPage.target.value;
        this.onPageChange(1);
    };
    CardViewComponent.prototype.onOrderChange = function () {
        // sort using Pipe
        this.filteredCards = this.orderFilter.transform(this.filteredCards, this.orderByProperty, this.sortingSwitch);
        // slice cards and go to page 1
        this.onPageChange(1);
    };
    CardViewComponent.prototype.onSortingChange = function () {
        // ascending / descending switch changed
        this.sortingSwitch = !this.sortingSwitch;
        this.onOrderChange();
    };
    // on card clicked
    CardViewComponent.prototype.onShowCardDetails = function (selectedCard) {
        if (this.previousCard === selectedCard) {
            this.changeDetailState.emit('closed');
            this.previousCard = '';
        }
        else {
            this.previousCard = selectedCard;
            this.cardSelected.emit(selectedCard);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardViewComponent.prototype, "filteredCards", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardViewComponent.prototype, "menuState", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardViewComponent.prototype, "detailState", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardViewComponent.prototype, "cardSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardViewComponent.prototype, "changeDetailState", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardViewComponent.prototype, "changeView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardViewComponent.prototype, "changeFormat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardViewComponent.prototype, "openFilterMenu", void 0);
    CardViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-view',
            template: __webpack_require__(/*! ./card-view.component.html */ "./src/app/card-view/card-view.component.html"),
            providers: [_orderByPipe_pipe__WEBPACK_IMPORTED_MODULE_2__["OrderByPipePipe"]],
            styles: [__webpack_require__(/*! ./card-view.component.css */ "./src/app/card-view/card-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_orderByPipe_pipe__WEBPACK_IMPORTED_MODULE_2__["OrderByPipePipe"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopoverConfig"]])
    ], CardViewComponent);
    return CardViewComponent;
}());



/***/ }),

/***/ "./src/app/cardCollection.service.ts":
/*!*******************************************!*\
  !*** ./src/app/cardCollection.service.ts ***!
  \*******************************************/
/*! exports provided: CardCollectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardCollectionService", function() { return CardCollectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _cards_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cards.model */ "./src/app/cards.model.ts");





var CardCollectionService = /** @class */ (function () {
    function CardCollectionService(http) {
        this.http = http;
        this.apiUrl = 'https://api.hearthstonejson.com/v1/latest/enUS/cards.collectible.json';
        this.cardCollectionUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    CardCollectionService.prototype.getData = function () {
        var _this = this;
        this.http.get(this.apiUrl)
            .subscribe(function (cardsData) {
            // convert object into array
            var cardsArray = Object.keys(cardsData).map(function (i) { return cardsData[i]; });
            var finalCards = [];
            cardsArray.forEach(function (entry) {
                var card = new _cards_model__WEBPACK_IMPORTED_MODULE_4__["Card"]();
                card.id = entry.id;
                card.dbfId = entry.dbfId;
                card.name = entry.name;
                card.text = entry.text;
                card.flavor = entry.flavor;
                card.artist = entry.artist;
                card.attack = entry.attack;
                card.cardClass = entry.cardClass;
                card.collectible = entry.collectible;
                card.cost = entry.cost;
                card.elite = entry.elite;
                card.faction = entry.faction;
                card.health = entry.health;
                card.rarity = entry.rarity;
                card.set = entry.set;
                card.type = entry.type;
                card.mechanics = entry.mechanics;
                finalCards.push(card);
            });
            // console.log(finalCards);
            _this.cardCollectionUpdated.next(finalCards);
        });
    };
    CardCollectionService.prototype.getCardUpdateListener = function () {
        return this.cardCollectionUpdated.asObservable();
        // listen to the subject
    };
    CardCollectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CardCollectionService);
    return CardCollectionService;
}());



/***/ }),

/***/ "./src/app/cards.model.ts":
/*!********************************!*\
  !*** ./src/app/cards.model.ts ***!
  \********************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
var Card = /** @class */ (function () {
    function Card() {
    }
    Card.prototype.formattedClass = function () {
        var cardClass = this.cardClass.toLowerCase();
        return cardClass.charAt(0).toUpperCase() + cardClass.slice(1);
        /*
        let cardName = this.cardClass;
        cardName = cardName.replace(/\b[a-z]/g, function(letter) { return letter.toUpperCase(); });
        cardName = cardName.replace(/'(S)/g, function(letter) { return letter.toLowerCase(); });
        return cardName;
        */
    };
    Card.prototype.formattedRarity = function () {
        var cardRarity = this.rarity.toLowerCase();
        return cardRarity.charAt(0).toUpperCase() + cardRarity.slice(1);
    };
    Card.prototype.formattedType = function () {
        var cardType = this.type.toLowerCase();
        return cardType.charAt(0).toUpperCase() + cardType.slice(1);
    };
    Card.prototype.getClassIcon = function () {
        var path = "../../assets/class_icons/" + this.cardClass.toLowerCase() + ".png";
        return path;
    };
    Card.prototype.getFormattedSet = function () {
        if (this.set === "CORE") {
            return "Basic";
        }
        else if (this.set === "EXPERT1") {
            return "Classic";
        }
        else if (this.set === "HOF") {
            return "Hall of Fame";
        }
        else if (this.set === "NAXX") {
            return "Naxxramas";
        }
        else if (this.set === "GVG") {
            return "Goblins vs Gnomes";
        }
        else if (this.set === "BRM") {
            return "Blackrock Mountain";
        }
        else if (this.set === "TGT") {
            return "The Grand Tournament";
        }
        else if (this.set === "LOE") {
            return "The League of Explorers";
        }
        else if (this.set === "OG") {
            return "Whispers of the Old Gods";
        }
        else if (this.set === "KARA") {
            return "One Night in Karazhan";
        }
        else if (this.set === "GANGS") {
            return "Mean Streets of Gadgetzan";
        }
        else if (this.set === "UNGORO") {
            return "Journey to Un'Goro";
        }
        else if (this.set === "ICECROWN") {
            return "Knights of the Frozen Throne";
        }
        else if (this.set === "LOOTAPALOOZA") {
            return "Kobolds & Catacombs";
        }
        else if (this.set === "GILNEAS") {
            return "The Witchwood";
        }
        else if (this.set === "BOOMSDAY") {
            return "The Boomsday Project";
        }
        else if (this.set === "TROLL") {
            return "Rastakhan's Rumble";
        }
        else if (this.set === "HERO_SKINS") {
            return "Hero Skins";
        }
    };
    Card.prototype.image = function () {
        return "https://art.hearthstonejson.com/v1/render/latest/enUS/512x/" + this.id + ".png";
    };
    return Card;
}());



/***/ }),

/***/ "./src/app/detail-menu/detail-menu.component.css":
/*!*******************************************************!*\
  !*** ./src/app/detail-menu/detail-menu.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  margin-top: 30px;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.close-button {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 4px 8px;\n  margin-top: 61px;\n  margin-right: 0.5px;\n  background-color: black;\n  color: white;\n}\n.close-button:hover {\n  cursor: pointer;\n  background-color: white;\n  color: black;\n\n}\n.close-button p,\n.card-title h2,\n.card-title p,\n.card-title {\n  margin: 0;\n}\n.card-class {\n  padding: 5px 8px;\n  border-radius: 5px;\n  border: 1px solid white;\n  margin-bottom: 10px;\n  display: inline-block;\n}\n.card-class img {\n  width: 30px;\n  height: 30px;\n  margin: 0;\n  padding: 0;\n}\n.card-class h5,\n.card-rarity h5 {\n  margin: 0 10px;\n  vertical-align: middle;\n  display: inline-block;\n}\n.card-rarity {\n  padding: 7.5px 8px;\n  border-radius: 5px;\n  border: 1px solid white;\n  margin-bottom: 10px;\n  display: inline-block;\n  background-color: black;\n}\n.card-art-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  margin-bottom: 5px;\n}\n.card-art {\n  width: 48%;\n  height: 35%;\n  margin: 0;\n  padding: 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.common-art {\n  padding: 5% 0.6%;\n}\n.gold_hero {\n  -webkit-transform: translateY(-25px);\n          transform: translateY(-25px);\n}\n.card-text-container {\n  text-align: center;\n  color: black;\n  background-color: white;\n  padding: 5px 8px;\n  border-radius: 5px;\n  margin: 10px 0 15px;\n  max-width: 95%;\n}\n.card-text-container > * {\n  margin: 0;\n}\n.card-text {\n  width: 100%;\n}\n.card-details-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  padding-top: 15px;\n}\n.card-details-container img {\n  margin: 0 7px 3px 0;\n  padding: 0;\n  height: 25px;\n  width: 25px;\n}\n.card-details-container h6 {\n  display: inline-block;\n  vertical-align: middle;\n}\n.card-details-container p {\n  min-width: 100%;\n}\n/* Larger desktop */\n@media (min-width: 1400px) {\n  .card-art-container {\n    margin-bottom: 20px;\n  }\n  .card-art {\n    width: 43%;\n  }\n  .common-art {\n    padding: 3.5% 0 0;\n  }\n}\n/* Large desktop */\n@media (min-width: 980px) and (max-width: 1199px) {\n\n}\n/* Portrait tablet to landscape and desktop */\n@media (min-width: 768px) and (max-width: 979px) {\n\n}\n/* Landscape phone to portrait tablet */\n@media (max-width: 767px) {\n}\n/* Landscape phones and down */\n@media (max-width: 480px) {\n  h1 {\n    font-size: 1.3rem;\n  }\n  h5 {\n    font-size: 1rem;\n  }\n  h6 {\n    font-size : 0.9rem;\n  }\n  p {\n    font-size: 0.8rem;\n  }\n  .container {\n    padding: 20px;\n  }\n  .card-details-container p {\n    min-width: 100%;\n    margin-bottom: 4px;\n  }\n  .col-auto {\n    padding-left: 0;\n    padding-right: 0;\n    margin: 0 2px;\n  }\n  .card-text-container {\n    padding: 5px;\n  }\n}\n@media (max-width: 361px) {\n  h1 {\n    font-size: 1.1rem;\n  }\n  h5 {\n    font-size: 0.8rem;\n  }\n  h6 {\n    font-size : 0.7rem;\n  }\n  p {\n    font-size: 0.6rem;\n  }\n  .container {\n    padding: 10px;\n  }\n  .card-details-container p {\n    min-width: 100%;\n    margin-bottom: 2px;\n  }\n  .col-auto {\n    padding-left: 0;\n    padding-right: 0;\n    margin: 0 2px;\n  }\n  .card-text-container {\n    padding: 2px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsLW1lbnUvZGV0YWlsLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHFDQUFxQztDQUN0QztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixhQUFhOztDQUVkO0FBQ0Q7Ozs7RUFJRSxVQUFVO0NBQ1g7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLFdBQVc7Q0FDWjtBQUNEOztFQUVFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtDQUN6QjtBQUNEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUFvQjtLQUFwQixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UscUNBQTZCO1VBQTdCLDZCQUE2QjtDQUM5QjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsVUFBVTtDQUNYO0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7QUFDRDtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0NBQ2I7QUFDRDtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUNELG9CQUFvQjtBQUNwQjtFQUNFO0lBQ0Usb0JBQW9CO0dBQ3JCO0VBQ0Q7SUFDRSxXQUFXO0dBQ1o7RUFDRDtJQUNFLGtCQUFrQjtHQUNuQjtDQUNGO0FBQ0QsbUJBQW1CO0FBQ25COztDQUVDO0FBQ0QsOENBQThDO0FBQzlDOztDQUVDO0FBQ0Qsd0NBQXdDO0FBQ3hDO0NBQ0M7QUFDRCwrQkFBK0I7QUFDL0I7RUFDRTtJQUNFLGtCQUFrQjtHQUNuQjtFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxtQkFBbUI7R0FDcEI7RUFDRDtJQUNFLGtCQUFrQjtHQUNuQjtFQUNEO0lBQ0UsY0FBYztHQUNmO0VBQ0Q7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0dBQ3BCO0VBQ0Q7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7R0FDZjtFQUNEO0lBQ0UsYUFBYTtHQUNkO0NBQ0Y7QUFDRDtFQUNFO0lBQ0Usa0JBQWtCO0dBQ25CO0VBQ0Q7SUFDRSxrQkFBa0I7R0FDbkI7RUFDRDtJQUNFLG1CQUFtQjtHQUNwQjtFQUNEO0lBQ0Usa0JBQWtCO0dBQ25CO0VBQ0Q7SUFDRSxjQUFjO0dBQ2Y7RUFDRDtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7R0FDcEI7RUFDRDtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztHQUNmO0VBQ0Q7SUFDRSxhQUFhO0dBQ2Q7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC1tZW51L2RldGFpbC1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uY2xvc2UtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA2MXB4O1xuICBtYXJnaW4tcmlnaHQ6IDAuNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcblxufVxuLmNsb3NlLWJ1dHRvbiBwLFxuLmNhcmQtdGl0bGUgaDIsXG4uY2FyZC10aXRsZSBwLFxuLmNhcmQtdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG4uY2FyZC1jbGFzcyB7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jYXJkLWNsYXNzIGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5jYXJkLWNsYXNzIGg1LFxuLmNhcmQtcmFyaXR5IGg1IHtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jYXJkLXJhcml0eSB7XG4gIHBhZGRpbmc6IDcuNXB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi5jYXJkLWFydC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jYXJkLWFydCB7XG4gIHdpZHRoOiA0OCU7XG4gIGhlaWdodDogMzUlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4uY29tbW9uLWFydCB7XG4gIHBhZGRpbmc6IDUlIDAuNiU7XG59XG4uZ29sZF9oZXJvIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcbn1cbi5jYXJkLXRleHQtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMTBweCAwIDE1cHg7XG4gIG1heC13aWR0aDogOTUlO1xufVxuLmNhcmQtdGV4dC1jb250YWluZXIgPiAqIHtcbiAgbWFyZ2luOiAwO1xufVxuLmNhcmQtdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmQtZGV0YWlscy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4uY2FyZC1kZXRhaWxzLWNvbnRhaW5lciBpbWcge1xuICBtYXJnaW46IDAgN3B4IDNweCAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xufVxuLmNhcmQtZGV0YWlscy1jb250YWluZXIgaDYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uY2FyZC1kZXRhaWxzLWNvbnRhaW5lciBwIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuLyogTGFyZ2VyIGRlc2t0b3AgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgLmNhcmQtYXJ0LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAuY2FyZC1hcnQge1xuICAgIHdpZHRoOiA0MyU7XG4gIH1cbiAgLmNvbW1vbi1hcnQge1xuICAgIHBhZGRpbmc6IDMuNSUgMCAwO1xuICB9XG59XG4vKiBMYXJnZSBkZXNrdG9wICovXG5AbWVkaWEgKG1pbi13aWR0aDogOTgwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcblxufVxuLyogUG9ydHJhaXQgdGFibGV0IHRvIGxhbmRzY2FwZSBhbmQgZGVza3RvcCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTc5cHgpIHtcblxufVxuLyogTGFuZHNjYXBlIHBob25lIHRvIHBvcnRyYWl0IHRhYmxldCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG59XG4vKiBMYW5kc2NhcGUgcGhvbmVzIGFuZCBkb3duICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG4gIGg1IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgaDYge1xuICAgIGZvbnQtc2l6ZSA6IDAuOXJlbTtcbiAgfVxuICBwIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIC5jYXJkLWRldGFpbHMtY29udGFpbmVyIHAge1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIH1cbiAgLmNvbC1hdXRvIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBtYXJnaW46IDAgMnB4O1xuICB9XG4gIC5jYXJkLXRleHQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNjFweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cbiAgaDUge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG4gIGg2IHtcbiAgICBmb250LXNpemUgOiAwLjdyZW07XG4gIH1cbiAgcCB7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAuY2FyZC1kZXRhaWxzLWNvbnRhaW5lciBwIHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB9XG4gIC5jb2wtYXV0byB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiAwIDJweDtcbiAgfVxuICAuY2FyZC10ZXh0LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMnB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/detail-menu/detail-menu.component.html":
/*!********************************************************!*\
  !*** ./src/app/detail-menu/detail-menu.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Close Button-->\n<div class=\"close-button\" (click)=\"onCloseDetails()\">\n  <p>Close Details</p>\n</div>\n<div class=\"container\" *ngIf=\"cardDisplay\">\n  <div class=\"row justify-content-start\" style=\"min-width: 100%\">\n    <div class=\"col-12 card-title\">\n      <div class=\"row justify-content-start\">\n        <div class=\"col-auto\">\n          <div\n            class=\"card-class\"\n            [ngStyle]=\"setClassStyles(cardDisplay.cardClass)\"\n          >\n            <img\n              src=\"{{ cardDisplay.getClassIcon() }}\"\n              alt=\"{{ cardDisplay.formattedClass() }}\"\n            />\n            <h5>\n              <b>{{ cardDisplay.formattedClass() }}</b>\n            </h5>\n          </div>\n        </div>\n        <div class=\"col-auto\">\n          <div class=\"card-rarity\" *ngIf=\"cardDisplay.rarity\">\n            <h5>\n              <b\n                >{{ cardDisplay.formattedRarity() }}\n                {{ cardDisplay.formattedType() }}</b\n              >\n            </h5>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <h1>\n            <b>{{ cardDisplay.name }}</b>\n          </h1>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <p [innerHTML]=\"cardDisplay.flavor\" *ngIf=\"cardDisplay.flavor\"></p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row justify-content-center\" style=\"min-width: 100%\">\n    <div class=\"col-12\">\n      <div class=\"card-art-container\">\n        <img\n          class=\"card-art common-art\"\n          src=\"{{ cardDisplay.image() }}\"\n          alt=\"Card Art\"\n        />\n      </div>\n    </div>\n  </div>\n  <div class=\"row justify-content-start\" style=\"min-width: 100%\">\n    <div class=\"col-12\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-auto card-text-container\" *ngIf=\"cardDisplay.text\">\n          <h6 [innerHTML]=\"cardDisplay.text\"></h6>\n        </div>\n      </div>\n      <div class=\"row justify-content-start\">\n        <div class=\"col-6 card-details-container\">\n          <h5 *ngIf=\"cardDisplay.artist\">\n            <b>Artist:</b><br />{{ cardDisplay.artist }}\n          </h5>\n          <h5 *ngIf=\"cardDisplay.set\">\n            <b>Set:</b><br />{{ cardDisplay.getFormattedSet() }}\n          </h5>\n        </div>\n        <div class=\"col-6 card-details-container\">\n          <div\n            *ngIf=\"!(cardDisplay.cost === undefined)\"\n            style=\"min-width: 100%\"\n          >\n            <img\n              src=\"../../assets/legendary_mana_crystal.png\"\n              alt=\"Mana Cost\"\n            />\n            <h6><b>Mana Cost: </b>{{ cardDisplay.cost }}</h6>\n            <p>\n              <ngb-progressbar\n                type=\"info\"\n                [value]=\"cardDisplay.cost\"\n                [max]=\"12\"\n                [height]=\"'5px'\"\n              ></ngb-progressbar>\n            </p>\n          </div>\n          <div\n            *ngIf=\"!(cardDisplay.attack === undefined)\"\n            style=\"min-width: 100%\"\n          >\n            <img src=\"../../assets/card_attack.png\" alt=\"Attack\" />\n            <h6><b>Attack: </b>{{ cardDisplay.attack }}</h6>\n            <p>\n              <ngb-progressbar\n                type=\"warning\"\n                [value]=\"cardDisplay.attack\"\n                [max]=\"12\"\n                [height]=\"'5px'\"\n              ></ngb-progressbar>\n            </p>\n          </div>\n          <div\n            *ngIf=\"!(cardDisplay.health === undefined)\"\n            style=\"min-width: 100%\"\n          >\n            <img src=\"../../assets/card_health.png\" alt=\"Health\" />\n            <h6><b>Health: </b>{{ cardDisplay.health }}</h6>\n            <p>\n              <ngb-progressbar\n                type=\"danger\"\n                [value]=\"cardDisplay.health\"\n                [max]=\"14\"\n                [height]=\"'5px'\"\n              ></ngb-progressbar>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/detail-menu/detail-menu.component.ts":
/*!******************************************************!*\
  !*** ./src/app/detail-menu/detail-menu.component.ts ***!
  \******************************************************/
/*! exports provided: DetailMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailMenuComponent", function() { return DetailMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailMenuComponent = /** @class */ (function () {
    function DetailMenuComponent() {
        // display closed
        this.detailsClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // on init
    DetailMenuComponent.prototype.ngOnInit = function () { };
    // on changes to @Input
    DetailMenuComponent.prototype.ngOnChanges = function (changes) {
        // detect filter changes
        if (changes['cardSelected'] && changes['cardSelected'].previousValue !== changes['cardSelected'].currentValue) {
            // if changes @Input() cardSelected
            this.cardDisplay = '';
            this.cardDisplay = changes['cardSelected'].currentValue;
        }
    };
    DetailMenuComponent.prototype.onCloseDetails = function () {
        this.detailsClosed.emit('closed');
    };
    DetailMenuComponent.prototype.setClassStyles = function (eventclass) {
        var classHex = function () {
            if (eventclass === 'PALADIN') {
                return '#D2A047';
            }
            else if (eventclass === 'DRUID') {
                return '#8F7058';
            }
            else if (eventclass === 'HUNTER') {
                return '#246021';
            }
            else if (eventclass === 'MAGE') {
                return '#7387B5';
            }
            else if (eventclass === 'PRIEST') {
                return '#DBDDDC';
            }
            else if (eventclass === 'ROGUE') {
                return '#494A4D';
            }
            else if (eventclass === 'SHAMAN') {
                return '#353E6B';
            }
            else if (eventclass === 'WARLOCK') {
                return '#4F3455';
            }
            else if (eventclass === 'WARRIOR') {
                return '#3D3D41';
            }
            else if (eventclass === 'NEUTRAL') {
                return '#74675D';
            }
        };
        var styles = {
            'background-color': classHex(),
            'color': (eventclass === 'PRIEST') || (eventclass === 'PALADIN') ? 'black' : 'white'
        };
        return styles;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailMenuComponent.prototype, "cardSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailMenuComponent.prototype, "detailsClosed", void 0);
    DetailMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-menu',
            template: __webpack_require__(/*! ./detail-menu.component.html */ "./src/app/detail-menu/detail-menu.component.html"),
            styles: [__webpack_require__(/*! ./detail-menu.component.css */ "./src/app/detail-menu/detail-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailMenuComponent);
    return DetailMenuComponent;
}());



/***/ }),

/***/ "./src/app/filter-menu/filter-menu.component.css":
/*!*******************************************************!*\
  !*** ./src/app/filter-menu/filter-menu.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 30px 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n.filter-menu {\n  padding: 10px 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVyLW1lbnUvZmlsdGVyLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiwrQkFBK0I7Q0FDaEM7QUFDRDtFQUNFLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2ZpbHRlci1tZW51L2ZpbHRlci1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzBweCAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4uZmlsdGVyLW1lbnUge1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/filter-menu/filter-menu.component.html":
/*!********************************************************!*\
  !*** ./src/app/filter-menu/filter-menu.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-10 col-xl-8 text-left filter-menu\">\n        <h3><b>Filter Cards</b></h3>\n      </div>\n    </div>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-10 col-xl-8 text-center filter-menu\">\n        <!--Name -->\n        <input id=\"nameFilter\" class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"nameSearch\" (keyup)=\"onFilterChange($event)\"\n          autocomplete=\"off\" placeholder=\"Filter by Name\">\n      </div>\n    </div>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-10 col-xl-8 text-center filter-menu\">\n        <!--Type -->\n        <select id=\"typeFilter\" class=\"form-control\" (change)=\"onFilterChange($event)\" [(ngModel)]=\"selectedType\">\n          <option value=\"\">Choose a Type</option>\n          <option *ngFor=\"let type of typeOptions\" [value]=\"type.value\">{{type.label}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-10 col-xl-8 text-center filter-menu\">\n        <!--Class -->\n        <select id=\"classFilter\" class=\"form-control\" (change)=\"onFilterChange($event)\" [(ngModel)]=\"selectedClass\">\n          <option value=\"\" title=\"https://hsreplay.net/static/images/class-icons/mage.png\"> Choose a Class</option>\n          <option *ngFor=\"let class of classOptions\" [value]=\"class.value\">{{class.label}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-10 col-xl-8 text-center filter-menu\">\n        <!--Mana Cost -->\n        <select id=\"manaCostFilter\" class=\"form-control\" (change)=\"onFilterChange($event)\" [(ngModel)]=\"selectedManaCost\">\n          <option value=\"\">Choose Mana Cost</option>\n          <option *ngFor=\"let manaCost of manaCostOptions\" [value]=\"manaCost.value\">{{manaCost.label}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-10 col-xl-8 text-center filter-menu\">\n        <!--Set -->\n        <select id=\"setFilter\" class=\"form-control\" (change)=\"onFilterChange($event)\" [(ngModel)]=\"selectedSet\">\n          <option value=\"\">Choose a Set</option>\n          <option *ngFor=\"let set of setOptions\" [value]=\"set.value\">{{set.label}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-10 col-xl-8 text-center filter-menu\">\n        <!--Rarity -->\n        <select id=\"rarityFilter\" class=\"form-control\" (change)=\"onFilterChange($event)\" [(ngModel)]=\"selectedRarity\">\n          <option value=\"\">Choose Rarity</option>\n          <option *ngFor=\"let rarity of rarityOptions\" [value]=\"rarity.value\">{{rarity.label}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-10 col-xl-8 filter-menu\">\n        <button\n          type=\"button\"\n          class=\"btn btn-light\"\n          (click)=\"onClearFilters()\">Clear Filters</button>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/filter-menu/filter-menu.component.ts":
/*!******************************************************!*\
  !*** ./src/app/filter-menu/filter-menu.component.ts ***!
  \******************************************************/
/*! exports provided: FilterMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterMenuComponent", function() { return FilterMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _SearchFilterPipe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SearchFilterPipe.pipe */ "./src/app/SearchFilterPipe.pipe.ts");



var FilterMenuComponent = /** @class */ (function () {
    function FilterMenuComponent(searchFilter) {
        this.searchFilter = searchFilter;
        // send out filtered cards
        this.filteredCards = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // filter options
        // {value: '', label: ''},
        // type filters
        this.typeOptions = [
            { value: 'hero', label: 'Hero' },
            { value: 'minion', label: 'Minion' },
            { value: 'spell', label: 'Spell' },
            { value: 'weapon', label: 'Weapon' }
        ];
        // class filters
        this.classOptions = [
            { value: 'druid', label: 'Druid' },
            { value: 'paladin', label: 'Paladin' },
            { value: 'rogue', label: 'Rogue' },
            { value: 'shaman', label: 'Shaman' },
            { value: 'warlock', label: 'Warlock' },
            { value: 'warrior', label: 'Warrior' },
            { value: 'neutral', label: 'Neutral' },
            { value: 'priest', label: 'Priest' },
            { value: 'mage', label: 'Mage' },
            { value: 'hunter', label: 'Hunter' }
        ];
        // mana cost filters
        this.manaCostOptions = [
            { value: '0', label: '0' },
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '7', label: '7+' }
        ];
        // set filters
        this.setOptions = [
            { value: 'CORE', label: 'Basic' },
            { value: 'EXPERT1', label: 'Classic' },
            { value: 'HOF', label: 'Hall of Fame' },
            { value: 'NAXX', label: 'Naxxramas' },
            { value: 'GVG', label: 'Goblins vs Gnomes' },
            { value: 'BRM', label: 'Blackrock Mountain' },
            { value: 'TGT', label: 'The Grand Tournament' },
            { value: 'LOE', label: 'The League of Explorers' },
            { value: 'OG', label: 'Whispers of the Old Gods' },
            { value: 'KARA', label: 'One Night in Karazhan' },
            { value: 'GANGS', label: 'Mean Streets of Gadgetzan' },
            { value: 'UNGORO', label: 'Journey to Un\'goro' },
            { value: 'ICECROWN', label: 'Knigths of the Frozen Throne' },
            { value: 'LOOTAPALOOZA', label: 'Kobolds & Catacombs' },
            { value: 'GILNEAS', label: 'The Witchwood' },
            { value: 'BOOMSDAY', label: 'The Boomsday Project' },
            { value: 'TROLL', label: 'Rastakhan\'s Rumble' },
            { value: 'HERO_SKINS', label: 'Hero Skins' }
        ];
        // rarity filters
        this.rarityOptions = [
            { value: 'free', label: 'Free' },
            { value: 'common', label: 'Common' },
            { value: 'rare', label: 'Rare' },
            { value: 'epic', label: 'Epic' },
            { value: 'legendary', label: 'Legendary' }
        ];
        // filter strings
        this.nameSearch = '';
        this.selectedType = '';
        this.selectedClass = '';
        this.selectedManaCost = '';
        this.selectedSet = '';
        this.selectedRarity = '';
        this.selectedFormat = true;
    }
    FilterMenuComponent.prototype.ngOnInit = function () {
    };
    FilterMenuComponent.prototype.ngOnChanges = function (changes) {
        // detect filter changes
        if (changes['collectibleCards'] && changes['collectibleCards'].previousValue !== changes['collectibleCards'].currentValue) {
            // if changes @Input() collectibleCards
            this.initialCards = changes['collectibleCards'].currentValue;
            // run initial load with empty filters
            this.filteredCards.emit(this.initialCards);
            // this.onFilterChange('');
        }
        if (changes['formatState'] && changes['formatState'].previousValue !== changes['formatState'].currentValue) {
            // if changes @Input() formatState
            this.selectedFormat = changes['formatState'].currentValue;
            // filter format using pipe
            var emitFilteredCards = this.searchFilter
                .transform(this.initialCards, this.selectedFormat, this.nameSearch, this.selectedClass, this.selectedType, this.selectedSet, this.selectedRarity, this.selectedManaCost);
            // card array to be emitted
            this.filteredCards.emit(emitFilteredCards);
        }
    };
    // filter changes
    FilterMenuComponent.prototype.onFilterChange = function (changeSelected) {
        // check changes
        if (changeSelected.srcElement.id === 'className') {
            this.nameSearch = changeSelected.target.value;
        }
        else if (changeSelected.srcElement.id === 'typeFilter') {
            this.selectedType = changeSelected.target.value;
        }
        else if (changeSelected.srcElement.id === 'classFilter') {
            this.selectedClass = changeSelected.target.value;
        }
        else if (changeSelected.srcElement.id === 'setFilter') {
            this.selectedSet = changeSelected.target.value;
        }
        else if (changeSelected.srcElement.id === 'rarityFilter') {
            this.selectedRarity = changeSelected.target.value;
        }
        else if (changeSelected.srcElement.id === 'manaCostFilter') {
            this.selectedManaCost = changeSelected.target.value;
        }
        // filter using pipe
        var emitFilteredCards = this.searchFilter
            .transform(this.initialCards, this.selectedFormat, this.nameSearch, this.selectedClass, this.selectedType, this.selectedSet, this.selectedRarity, this.selectedManaCost);
        // card array to be emitted
        this.filteredCards.emit(emitFilteredCards);
    };
    FilterMenuComponent.prototype.onClearFilters = function () {
        // tslint:disable-next-line:max-line-length
        if (this.nameSearch !== '' || this.selectedType !== '' || this.selectedClass !== '' || this.selectedManaCost !== '' || this.selectedSet !== '' || this.selectedRarity !== '') {
            this.nameSearch = '';
            this.selectedType = '';
            this.selectedClass = '';
            this.selectedManaCost = '';
            this.selectedSet = '';
            this.selectedRarity = '';
            // run empty filter
            // filter using pipe
            var emitFilteredCards = this.searchFilter
                .transform(this.initialCards, this.selectedFormat, this.nameSearch, this.selectedClass, this.selectedType, this.selectedSet, this.selectedRarity, this.selectedManaCost);
            // card array to be emitted
            this.filteredCards.emit(emitFilteredCards);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilterMenuComponent.prototype, "collectibleCards", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FilterMenuComponent.prototype, "formatState", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilterMenuComponent.prototype, "filteredCards", void 0);
    FilterMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter-menu',
            template: __webpack_require__(/*! ./filter-menu.component.html */ "./src/app/filter-menu/filter-menu.component.html"),
            providers: [_SearchFilterPipe_pipe__WEBPACK_IMPORTED_MODULE_2__["SearchFilterPipePipe"]],
            styles: [__webpack_require__(/*! ./filter-menu.component.css */ "./src/app/filter-menu/filter-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_SearchFilterPipe_pipe__WEBPACK_IMPORTED_MODULE_2__["SearchFilterPipePipe"]])
    ], FilterMenuComponent);
    return FilterMenuComponent;
}());



/***/ }),

/***/ "./src/app/home-view/home-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-view/home-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Loading*/\n.loading {\n  z-index: 201;\n  background: url('parchment-background.jpg');\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n.background-fade {\n  -webkit-animation: fade 300ms 0.3s ease-out 1 normal forwards;\n          animation: fade 300ms 0.3s ease-out 1 normal forwards;\n}\n.logo-fade {\n  -webkit-animation: zoomout 200ms 0.2s cubic-bezier(0.6, -0.55, 0.735, 0.045) 1 normal forwards;\n          animation: zoomout 200ms 0.2s cubic-bezier(0.6, -0.55, 0.735, 0.045) 1 normal forwards;\n}\n.loading .hs-logo {\n  -webkit-animation: spin 1.5s 200ms ease-out infinite;\n          animation: spin 1.5s 200ms ease-out infinite;\n}\n/*Card List Child element with footer*/\n.card-container {\n  margin: 0;\n  width: 100vw;\n  min-height: 100vh;\n  background: url('parchment-background.jpg');\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\napp-card-view {\n  width: 100%;\n  flex-grow: 1;\n  transition: width 400ms ease-in-out;\n}\n/*Top Menu*/\n.main-header {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: url('wood_middle_repeat.png');\n  background-position: bottom;\n  background-repeat: repeat-x;\n  padding: 0.2rem 1rem;\n  z-index: 200;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  color: #EBD6AB;\n}\n.button-logo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.menu-logo h3 {\n  margin: 0;\n}\n.github-details {\n  margin-right: 15px;\n}\n.github-details:hover {\n  color: white;\n  cursor: pointer;\n}\n.github-details a {\n  color: inherit;\n}\n.github-details i {\n  font-size: 1.5rem;\n}\n.github-details p {\n  margin: 0 10px;\n  display: inline-block;\n}\n/*Slide Menus*/\n.side-menu-filter {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: black;\n  color: #fff;\n  position: fixed;\n  left: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100vw;\n  z-index: 101;\n}\n.side-menu-detail {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 60px;\n  background: black;\n  color: #fff;\n  position: fixed;\n  left: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100vw;\n  z-index: 102;\n}\n/*Burger Styles*/\n.bt-menu {\n  position: relative;\n  display: block;\n  width: 55px;\n  height: 55px;\n}\n.bt-menu:hover {\n  cursor: pointer;\n}\n.bt-menu:after, .bt-menu:before {\n  content: \"\";\n}\n.bt-menu span, .bt-menu::after, .bt-menu::before {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  left: 13px;\n  right: 13px;\n  border-top: 4px solid #EBD6AB;\n  transition: .2s;\n  border-radius: 7px;\n}\n.bt-menu::before {\n  top: 18px;\n}\n.bt-menu span {\n  top: 26px;\n}\n.bt-menu::after {\n  top: 34px;\n}\n.bt-menu.active::before, .bt-menu.active::after {\n  top: 25px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: .3s;\n}\n.bt-menu.active::before {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.bt-menu.active span {\n  opacity: 0;\n}\n.bt-menu.active::after {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.disabled {\n  cursor: not-allowed;\n}\n/*footer styles*/\n.footer {\n  background: url('wood_middle_repeat.png');\n  background-position: center;\n  background-repeat: repeat-x;\n  width: 100%;\n  justify-self: flex-end;\n  color: #EBD6AB;\n  display: flex;\n  justify-content: flex-start;\n}\n.footer p {\n  margin: 0;\n  padding: 10px 25px;\n  width: 100%;\n  transition: width 400ms ease-in-out;\n  font-weight: normal;\n}\n.footer a {\n  color: inherit;\n  text-decoration: none;\n  padding: 0;\n}\n.footer a:hover {\n  color: white;\n}\n/deep/ .page-link {\n  color: black !important;\n}\n/deep/ .page-item.active .page-link {\n  background-color: black !important;\n  border-color: black !important;\n  color: white !important;\n}\n/* Larger desktop */\n@media (min-width: 1200px) {\n  .side-menu-filter,\n  .side-menu-detail {\n    width: 35vw;\n    background: url('hs_background.jpg') no-repeat center center fixed;\n    background-size: cover;\n  }\n  .card-container-open {\n    align-items: flex-end;\n  }\n  .card-container-open > app-card-view {\n    width: 65vw;\n    padding: 0 2%;\n  }\n  .footer.footer-open {\n    justify-content: flex-end;\n  }\n  .footer > p.footer-open {\n    width: 65%;\n  }\n}\n/* Large desktop */\n@media (min-width: 980px) and (max-width: 1199px) {\n  .side-menu-filter,\n  .side-menu-detail {\n    width: 50vw;\n    background: url('hs_background.jpg') no-repeat center center;\n    background-size: cover;\n  }\n  .card-container-open {\n    align-items: flex-end;\n  }\n  .card-container-open > app-card-view {\n    width: 50vw;\n    padding: 0 2%;\n  }\n  .footer.footer-open {\n    justify-content: flex-end;\n  }\n  .footer > p.footer-open {\n    width: 50%;\n  }\n}\n/* Portrait tablet to landscape and desktop */\n@media (min-width: 768px) and (max-width: 979px) {\n  .side-menu-filter,\n  .side-menu-detail {\n    width: 50vw;\n    background: url('hs_background.jpg') no-repeat center center fixed;\n    background-size: cover;\n  }\n  .card-container-open {\n    align-items: flex-end;\n  }\n  .card-container-open > app-card-view {\n    width: 50vw;\n    padding: 0 2%;\n  }\n  .footer.footer-open {\n    justify-content: flex-end;\n  }\n  .footer > p.footer-open {\n    width: 50%;\n  }\n}\n/* Landscape phone to portrait tablet */\n@media (max-width: 767px) {\n  .main-header {\n    padding: 0;\n  }\n}\n/* Landscape phones and down */\n@media (max-width: 480px) {\n  .main-header {\n    padding: 0;\n  }\n  .github-details p {\n    display: none;\n  }\n}\n/*spin animation*/\n@-webkit-keyframes spin {\n  5% {\n    -webkit-transform:rotate(0);\n    transform:rotate(0);\n  }\n  20% {\n    -webkit-transform:rotate(-65deg);\n    transform:rotate(-65deg);\n  }\n  100% {\n    -webkit-transform: rotate(1080deg);\n    transform:rotate(1080deg);\n\n  }\n}\n@keyframes spin {\n  5% {\n    -webkit-transform:rotate(0);\n    transform:rotate(0);\n  }\n  20% {\n    -webkit-transform:rotate(-65deg);\n    transform:rotate(-65deg);\n  }\n  100% {\n    -webkit-transform: rotate(1080deg);\n    transform:rotate(1080deg);\n\n  }\n}\n/*zoom out animation*/\n@-webkit-keyframes zoomout {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    display: none;\n    visibility: hidden;\n    opacity: 0;\n  }\n}\n@keyframes zoomout {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    display: none;\n    visibility: hidden;\n    opacity: 0;\n  }\n}\n/*fade animation*/\n@-webkit-keyframes fade {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    display: none;\n    visibility: hidden;\n    opacity: 0;\n  }\n}\n@keyframes fade {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    display: none;\n    visibility: hidden;\n    opacity: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS12aWV3L2hvbWUtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYiw0Q0FBeUQ7RUFDekQsYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxRQUFRO0NBQ1Q7QUFDRDtFQUNFLDhEQUFzRDtVQUF0RCxzREFBc0Q7Q0FDdkQ7QUFDRDtFQUNFLCtGQUF1RjtVQUF2Rix1RkFBdUY7Q0FDeEY7QUFDRDtFQUNFLHFEQUE2QztVQUE3Qyw2Q0FBNkM7Q0FDOUM7QUFDRCx1Q0FBdUM7QUFDdkM7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw0Q0FBeUQ7RUFDekQsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsNEJBQTRCO0NBQzdCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQztDQUNyQztBQUNELFlBQVk7QUFDWjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLFFBQVE7RUFDUiwwQ0FBdUQ7RUFDdkQsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsYUFBYTtFQUliLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLCtCQUErQjtFQUMvQixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsVUFBVTtDQUNYO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtDQUN2QjtBQUNELGVBQWU7QUFDZjtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsT0FBTztFQUNQLFFBQVE7RUFDUixVQUFVO0VBQ1YsYUFBYTtFQUNiLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsT0FBTztFQUNQLFFBQVE7RUFDUixVQUFVO0VBQ1YsYUFBYTtFQUNiLGFBQWE7Q0FDZDtBQUNELGlCQUFpQjtBQUNqQjtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7QUFDRDtFQUNFLG9DQUFvQztVQUM1Qiw0QkFBNEI7RUFDcEMsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLFVBQVU7Q0FDWDtBQUNEO0VBQ0UsVUFBVTtDQUNYO0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7QUFDRDtFQUNFLFVBQVU7RUFDVixvQ0FBb0M7VUFDNUIsNEJBQTRCO0VBQ3BDLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsaUNBQWlDO1VBQ3pCLHlCQUF5QjtDQUNsQztBQUNEO0VBQ0UsV0FBVztDQUNaO0FBQ0Q7RUFDRSxrQ0FBa0M7VUFDMUIsMEJBQTBCO0NBQ25DO0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7QUFDRCxpQkFBaUI7QUFDakI7RUFDRSwwQ0FBdUQ7RUFDdkQsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixjQUFjO0VBQ2QsNEJBQTRCO0NBQzdCO0FBQ0Q7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSx3QkFBd0I7Q0FDekI7QUFDRDtFQUNFLG1DQUFtQztFQUNuQywrQkFBK0I7RUFDL0Isd0JBQXdCO0NBQ3pCO0FBQ0Qsb0JBQW9CO0FBQ3BCO0VBQ0U7O0lBRUUsWUFBWTtJQUNaLG1FQUFnRjtJQUloRix1QkFBdUI7R0FDeEI7RUFDRDtJQUNFLHNCQUFzQjtHQUN2QjtFQUNEO0lBQ0UsWUFBWTtJQUNaLGNBQWM7R0FDZjtFQUNEO0lBQ0UsMEJBQTBCO0dBQzNCO0VBQ0Q7SUFDRSxXQUFXO0dBQ1o7Q0FDRjtBQUNELG1CQUFtQjtBQUNuQjtFQUNFOztJQUVFLFlBQVk7SUFDWiw2REFBMEU7SUFJMUUsdUJBQXVCO0dBQ3hCO0VBQ0Q7SUFDRSxzQkFBc0I7R0FDdkI7RUFDRDtJQUNFLFlBQVk7SUFDWixjQUFjO0dBQ2Y7RUFDRDtJQUNFLDBCQUEwQjtHQUMzQjtFQUNEO0lBQ0UsV0FBVztHQUNaO0NBQ0Y7QUFDRCw4Q0FBOEM7QUFDOUM7RUFDRTs7SUFFRSxZQUFZO0lBQ1osbUVBQWdGO0lBSWhGLHVCQUF1QjtHQUN4QjtFQUNEO0lBQ0Usc0JBQXNCO0dBQ3ZCO0VBQ0Q7SUFDRSxZQUFZO0lBQ1osY0FBYztHQUNmO0VBQ0Q7SUFDRSwwQkFBMEI7R0FDM0I7RUFDRDtJQUNFLFdBQVc7R0FDWjtDQUNGO0FBQ0Qsd0NBQXdDO0FBQ3hDO0VBQ0U7SUFDRSxXQUFXO0dBQ1o7Q0FDRjtBQUNELCtCQUErQjtBQUMvQjtFQUNFO0lBQ0UsV0FBVztHQUNaO0VBQ0Q7SUFDRSxjQUFjO0dBQ2Y7Q0FDRjtBQUNELGtCQUFrQjtBQUNsQjtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLG9CQUFvQjtHQUNyQjtFQUNEO0lBQ0UsaUNBQWlDO0lBQ2pDLHlCQUF5QjtHQUMxQjtFQUNEO0lBQ0UsbUNBQW1DO0lBQ25DLDBCQUEwQjs7R0FFM0I7Q0FDRjtBQWREO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsb0JBQW9CO0dBQ3JCO0VBQ0Q7SUFDRSxpQ0FBaUM7SUFDakMseUJBQXlCO0dBQzFCO0VBQ0Q7SUFDRSxtQ0FBbUM7SUFDbkMsMEJBQTBCOztHQUUzQjtDQUNGO0FBQ0Qsc0JBQXNCO0FBQ3RCO0VBQ0U7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLFdBQVc7R0FDWjtFQUNEO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFdBQVc7R0FDWjtDQUNGO0FBWEQ7RUFDRTtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsV0FBVztHQUNaO0VBQ0Q7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsV0FBVztHQUNaO0NBQ0Y7QUFDRCxrQkFBa0I7QUFDbEI7RUFDRTtJQUNFLFdBQVc7R0FDWjtFQUNEO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixXQUFXO0dBQ1o7Q0FDRjtBQVREO0VBQ0U7SUFDRSxXQUFXO0dBQ1o7RUFDRDtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsV0FBVztHQUNaO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lLXZpZXcvaG9tZS12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkxvYWRpbmcqL1xuLmxvYWRpbmcge1xuICB6LWluZGV4OiAyMDE7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL3BhcmNobWVudC1iYWNrZ3JvdW5kLmpwZycpO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbi5iYWNrZ3JvdW5kLWZhZGUge1xuICBhbmltYXRpb246IGZhZGUgMzAwbXMgMC4zcyBlYXNlLW91dCAxIG5vcm1hbCBmb3J3YXJkcztcbn1cbi5sb2dvLWZhZGUge1xuICBhbmltYXRpb246IHpvb21vdXQgMjAwbXMgMC4ycyBjdWJpYy1iZXppZXIoMC42LCAtMC41NSwgMC43MzUsIDAuMDQ1KSAxIG5vcm1hbCBmb3J3YXJkcztcbn1cbi5sb2FkaW5nIC5ocy1sb2dvIHtcbiAgYW5pbWF0aW9uOiBzcGluIDEuNXMgMjAwbXMgZWFzZS1vdXQgaW5maW5pdGU7XG59XG4vKkNhcmQgTGlzdCBDaGlsZCBlbGVtZW50IHdpdGggZm9vdGVyKi9cbi5jYXJkLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvcGFyY2htZW50LWJhY2tncm91bmQuanBnJyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbmFwcC1jYXJkLXZpZXcge1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1ncm93OiAxO1xuICB0cmFuc2l0aW9uOiB3aWR0aCA0MDBtcyBlYXNlLWluLW91dDtcbn1cbi8qVG9wIE1lbnUqL1xuLm1haW4taGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy93b29kX21pZGRsZV9yZXBlYXQucG5nJyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBwYWRkaW5nOiAwLjJyZW0gMXJlbTtcbiAgei1pbmRleDogMjAwO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2xvcjogI0VCRDZBQjtcbn1cbi5idXR0b24tbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1lbnUtbG9nbyBoMyB7XG4gIG1hcmdpbjogMDtcbn1cbi5naXRodWItZGV0YWlscyB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5naXRodWItZGV0YWlsczpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmdpdGh1Yi1kZXRhaWxzIGEge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5naXRodWItZGV0YWlscyBpIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4uZ2l0aHViLWRldGFpbHMgcCB7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4vKlNsaWRlIE1lbnVzKi9cbi5zaWRlLW1lbnUtZmlsdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiBhdXRvO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICB6LWluZGV4OiAxMDE7XG59XG4uc2lkZS1tZW51LWRldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IGF1dG87XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIHotaW5kZXg6IDEwMjtcbn1cbi8qQnVyZ2VyIFN0eWxlcyovXG4uYnQtbWVudSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDU1cHg7XG59XG4uYnQtbWVudTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idC1tZW51OmFmdGVyLCAuYnQtbWVudTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xufVxuLmJ0LW1lbnUgc3BhbiwgLmJ0LW1lbnU6OmFmdGVyLCAuYnQtbWVudTo6YmVmb3JlIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEzcHg7XG4gIHJpZ2h0OiAxM3B4O1xuICBib3JkZXItdG9wOiA0cHggc29saWQgI0VCRDZBQjtcbiAgdHJhbnNpdGlvbjogLjJzO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG4uYnQtbWVudTo6YmVmb3JlIHtcbiAgdG9wOiAxOHB4O1xufVxuLmJ0LW1lbnUgc3BhbiB7XG4gIHRvcDogMjZweDtcbn1cbi5idC1tZW51OjphZnRlciB7XG4gIHRvcDogMzRweDtcbn1cbi5idC1tZW51LmFjdGl2ZTo6YmVmb3JlLCAuYnQtbWVudS5hY3RpdmU6OmFmdGVyIHtcbiAgdG9wOiAyNXB4O1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IC4zcztcbn1cbi5idC1tZW51LmFjdGl2ZTo6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLmJ0LW1lbnUuYWN0aXZlIHNwYW4ge1xuICBvcGFjaXR5OiAwO1xufVxuLmJ0LW1lbnUuYWN0aXZlOjphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuLmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi8qZm9vdGVyIHN0eWxlcyovXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvd29vZF9taWRkbGVfcmVwZWF0LnBuZycpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gIGNvbG9yOiAjRUJENkFCO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uZm9vdGVyIHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IHdpZHRoIDQwMG1zIGVhc2UtaW4tb3V0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmZvb3RlciBhIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbi5mb290ZXIgYTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi9kZWVwLyAucGFnZS1saW5rIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG4vZGVlcC8gLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4vKiBMYXJnZXIgZGVza3RvcCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuc2lkZS1tZW51LWZpbHRlcixcbiAgLnNpZGUtbWVudS1kZXRhaWwge1xuICAgIHdpZHRoOiAzNXZ3O1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2hzX2JhY2tncm91bmQuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgLmNhcmQtY29udGFpbmVyLW9wZW4ge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgfVxuICAuY2FyZC1jb250YWluZXItb3BlbiA+IGFwcC1jYXJkLXZpZXcge1xuICAgIHdpZHRoOiA2NXZ3O1xuICAgIHBhZGRpbmc6IDAgMiU7XG4gIH1cbiAgLmZvb3Rlci5mb290ZXItb3BlbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAuZm9vdGVyID4gcC5mb290ZXItb3BlbiB7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxufVxuLyogTGFyZ2UgZGVza3RvcCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDk4MHB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gIC5zaWRlLW1lbnUtZmlsdGVyLFxuICAuc2lkZS1tZW51LWRldGFpbCB7XG4gICAgd2lkdGg6IDUwdnc7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaHNfYmFja2dyb3VuZC5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICAuY2FyZC1jb250YWluZXItb3BlbiB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICB9XG4gIC5jYXJkLWNvbnRhaW5lci1vcGVuID4gYXBwLWNhcmQtdmlldyB7XG4gICAgd2lkdGg6IDUwdnc7XG4gICAgcGFkZGluZzogMCAyJTtcbiAgfVxuICAuZm9vdGVyLmZvb3Rlci1vcGVuIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIC5mb290ZXIgPiBwLmZvb3Rlci1vcGVuIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG4vKiBQb3J0cmFpdCB0YWJsZXQgdG8gbGFuZHNjYXBlIGFuZCBkZXNrdG9wICovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5NzlweCkge1xuICAuc2lkZS1tZW51LWZpbHRlcixcbiAgLnNpZGUtbWVudS1kZXRhaWwge1xuICAgIHdpZHRoOiA1MHZ3O1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2hzX2JhY2tncm91bmQuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgLmNhcmQtY29udGFpbmVyLW9wZW4ge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgfVxuICAuY2FyZC1jb250YWluZXItb3BlbiA+IGFwcC1jYXJkLXZpZXcge1xuICAgIHdpZHRoOiA1MHZ3O1xuICAgIHBhZGRpbmc6IDAgMiU7XG4gIH1cbiAgLmZvb3Rlci5mb290ZXItb3BlbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAuZm9vdGVyID4gcC5mb290ZXItb3BlbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuLyogTGFuZHNjYXBlIHBob25lIHRvIHBvcnRyYWl0IHRhYmxldCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5tYWluLWhlYWRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuLyogTGFuZHNjYXBlIHBob25lcyBhbmQgZG93biAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5tYWluLWhlYWRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAuZ2l0aHViLWRldGFpbHMgcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLypzcGluIGFuaW1hdGlvbiovXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICA1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO1xuICAgIHRyYW5zZm9ybTpyb3RhdGUoMCk7XG4gIH1cbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTY1ZGVnKTtcbiAgICB0cmFuc2Zvcm06cm90YXRlKC02NWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMDgwZGVnKTtcbiAgICB0cmFuc2Zvcm06cm90YXRlKDEwODBkZWcpO1xuXG4gIH1cbn1cbi8qem9vbSBvdXQgYW5pbWF0aW9uKi9cbkBrZXlmcmFtZXMgem9vbW91dCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi8qZmFkZSBhbmltYXRpb24qL1xuQGtleWZyYW1lcyBmYWRlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/home-view/home-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-view/home-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Loading-->\n<div class=\"loading\" [ngClass]=\"isLoaded ? 'background-fade' : ''\">\n  <img\n    [ngClass]=\"[isLoading ? 'hs-logo' : '', isLoaded ? 'logo-fade' : '']\"\n    src=\"../../assets/hearthstone_icon.png\" alt=\"HearthDB\" width=\"220\" height=\"220\">\n  <h1><b>Loading...</b></h1>\n</div>\n<!--Side Menu with Slide-->\n<app-filter-menu\n  [@slideInOut]=\"menuState\"\n  class=\"side-menu-filter\"\n  [collectibleCards]=\"cardCollection\"\n  [formatState]=\"formatState\"\n  (filteredCards)=\"onFilteredCards($event)\"></app-filter-menu>\n<!--Card Detail Menu with Slide-->\n<app-detail-menu\n  [@slideInOut]=\"detailState\"\n  class=\"side-menu-detail\"\n  [cardSelected]=\"cardSelected\"\n  (detailsClosed)=\"onDetailsClosed($event)\"></app-detail-menu>\n<!--Header Bar-->\n<header class=\"main-header\">\n  <!--Menu Button-->\n  <div class=\"button-logo\">\n    <div\n      (click)=\"toggleMenu()\"\n      [ngClass]=\"{ 'active': (menuState === 'open'), 'disabled': (detailState === 'open') && (menuState === 'open')}\"\n      class=\"bt-menu\">\n      <span></span>\n    </div>\n    <div class=\"menu-logo\">\n      <h3><b>HearthDB</b></h3>\n    </div>\n  </div>\n  <div class=\"github-details\">\n    <a href=\"https://github.com/andreferreiradlw/HearthDB\" target=\"_blank\">\n      <p>View on GitHub</p><i class=\"fab fa-github fa-lg\"></i>\n    </a>\n  </div>\n</header>\n<!--Card List Component-->\n<div class=\"card-container\" id=\"card-container\" [ngClass]=\"(menuState === 'open') || (detailState === 'open') ? 'card-container-open' : ''\" (click)=\"closeMenu($event)\">\n  <app-card-view\n    [filteredCards]=\"filteredCards\"\n    [menuState]=\"menuState\"\n    [detailState]=\"detailState\"\n    (cardSelected)=\"onCardSelected($event)\"\n    (changeDetailState)=\"onChangeDetailState($event)\"\n    (changeView)=\"onViewChange($event)\"\n    (changeFormat)=\"onFormatChange($event)\"\n    (openFilterMenu)=\"toggleMenu()\"></app-card-view>\n  <div class=\"footer\" [ngClass]=\"(menuState === 'open') || (detailState === 'open') ? 'footer-open' : ''\">\n    <p [ngClass]=\"(menuState === 'open') || (detailState === 'open') ? 'footer-open' : ''\">\n      Built by <a href=\"https://itsjustandre.com/\">Andre</a>. Powered by <a href=\"https://hearthstonejson.com/\">HearthSim</a>.\n    </p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home-view/home-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-view/home-view.component.ts ***!
  \**************************************************/
/*! exports provided: HomeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewComponent", function() { return HomeViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cardCollection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cardCollection.service */ "./src/app/cardCollection.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var HomeViewComponent = /** @class */ (function () {
    function HomeViewComponent(cardService) {
        this.cardService = cardService;
        this.isLoading = false;
        this.isLoaded = false;
        // card collection
        this.cardCollection = [];
        // menu states
        this.menuState = 'closed';
        this.detailState = 'closed';
        // view state
        this.viewState = true; // gallery = true / table = false
        this.formatState = true; // wild = true / strandard = false
    }
    HomeViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cardService.getData();
        // set loading
        this.isLoading = true;
        // will get initial array of posts from server
        this.cardsSub = this.cardService.getCardUpdateListener()
            .subscribe(function (cardData) {
            _this.cardCollection = cardData;
            // trigger fade out
            _this.isLoading = false;
            _this.isLoaded = true;
        });
    };
    // menu states
    HomeViewComponent.prototype.toggleMenu = function () {
        if (this.menuState === 'closed' && this.detailState === 'open') {
            this.menuState = 'open';
            this.detailState = 'closed';
        }
        else if (this.detailState === 'closed') {
            this.menuState = this.menuState === 'open' ? 'closed' : 'open';
        }
        else {
            this.detailState = 'closed';
        }
    };
    HomeViewComponent.prototype.closeMenu = function (event) {
        // console.log(event.target.id);
        if (event.target.id === 'card-container' || event.target.id === '' && this.viewState === true) {
            // close the details menu first
            if (this.detailState === 'open') {
                this.detailState = 'closed';
            }
            else {
                this.menuState = 'closed';
            }
        }
    };
    HomeViewComponent.prototype.onDetailsClosed = function (event) {
        this.detailState = 'closed';
    };
    // events
    HomeViewComponent.prototype.onFilteredCards = function (filteredCards) {
        // trigger input for Card View Component
        this.filteredCards = filteredCards;
    };
    HomeViewComponent.prototype.onCardSelected = function (cardDetails) {
        this.cardSelected = cardDetails;
        // enable card details side menu component
        this.detailState = 'open';
    };
    HomeViewComponent.prototype.onChangeDetailState = function (newDetailState) {
        this.detailState = newDetailState;
    };
    HomeViewComponent.prototype.onViewChange = function (cardView) {
        this.viewState = cardView;
    };
    HomeViewComponent.prototype.onFormatChange = function (cardFormat) {
        this.formatState = cardFormat;
    };
    HomeViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-view',
            template: __webpack_require__(/*! ./home-view.component.html */ "./src/app/home-view/home-view.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        transform: 'translateX(-100%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        transform: 'translateX(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('closed <=> open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-in-out'))
                ])
            ],
            styles: [__webpack_require__(/*! ./home-view.component.css */ "./src/app/home-view/home-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cardCollection_service__WEBPACK_IMPORTED_MODULE_2__["CardCollectionService"]])
    ], HomeViewComponent);
    return HomeViewComponent;
}());



/***/ }),

/***/ "./src/app/orderByPipe.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/orderByPipe.pipe.ts ***!
  \*************************************/
/*! exports provided: OrderByPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipePipe", function() { return OrderByPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderByPipePipe = /** @class */ (function () {
    function OrderByPipePipe() {
    }
    OrderByPipePipe.prototype.transform = function (values, key, reverse) {
        // logs
        // console.log(values);
        // console.log(key + '' + reverse);
        // array
        var sortedArray;
        var sortedNumbersArray;
        // if array null
        if (!Array.isArray(values) || values.length <= 0) {
            // return the empty array without sorting
            return values;
        }
        // if no sort key, shuffle cards
        if (Array.isArray(values) && key === '') {
            // no key selected - sort random
            return this.sortRandom(values);
        }
        if (Array.isArray(values) && key === 'cost') {
            // spread from original array
            var valuesFilter = values.slice();
            // filter cards with cost value
            var filteredArray = valuesFilter.filter(function (card) {
                var cost = card.cost;
                if (cost !== null && cost !== undefined) {
                    return card;
                }
            });
            // get cards with no cost
            var filteredOutArray = valuesFilter.filter(function (card) {
                var cost = card.cost;
                if (cost == null || cost === undefined) {
                    return card;
                }
            });
            sortedNumbersArray = this.sortNumbers(filteredArray, key);
            if (reverse) {
                // reverse sorted array
                var reverseArray = this.reverseArray(sortedNumbersArray);
                // merge reverse array with filtered out cards with no cost
                return reverseArray.concat(filteredOutArray);
            }
            else {
                // merge sorted array with filtered out cards with no cost
                return sortedNumbersArray.concat(filteredOutArray);
            }
        }
        else {
            // sort by selected key
            sortedArray = this.sort(values, key);
            if (reverse) {
                return this.reverseArray(sortedArray);
            }
            else {
                return sortedArray;
            }
        }
    };
    OrderByPipePipe.prototype.sort = function (value, key) {
        var _this = this;
        var isInside = key && key.indexOf('.') !== -1;
        if (isInside) {
            key = key.split('.');
        }
        var array = value.sort(function (a, b) {
            if (!key) {
                return a > b ? 1 : -1;
            }
            if (!isInside) {
                return a[key] > b[key] ? 1 : -1;
            }
            return _this.getValue(a, key) > _this.getValue(b, key) ? 1 : -1;
        });
        return array;
    };
    OrderByPipePipe.prototype.sortNumbers = function (value, key) {
        var array = value.sort(function (a, b) {
            if (a.cost < b.cost) {
                return -1;
            }
            if (a.cost > b.cost) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    OrderByPipePipe.prototype.sortRandom = function (array) {
        var currentIndex = array.length;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            var randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            var temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    OrderByPipePipe.prototype.reverseArray = function (array) {
        // return array.reverse();
        for (var i = 0; i <= Math.floor((array.length - 1) / 2); i++) {
            var el = array[i];
            array[i] = array[array.length - 1 - i];
            array[array.length - 1 - i] = el;
        }
        return array;
    };
    OrderByPipePipe.prototype.getValue = function (object, key) {
        for (var i = 0, n = key.length; i < n; ++i) {
            var k = key[i];
            if (!(k in object)) {
                return;
            }
            object = object[k];
        }
        return object;
    };
    OrderByPipePipe.prototype.getValueNumber = function (object, key) {
        for (var i = 0, n = key.length; i < n; ++i) {
            var k = key[i];
            if (!(k in object)) {
                return;
            }
            object = parseInt(object[k].toString(), 10);
        }
        return object;
    };
    OrderByPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'orderByPipe'
        })
    ], OrderByPipePipe);
    return OrderByPipePipe;
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

module.exports = __webpack_require__(/*! /Users/andre/Repos/HearthDB/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map