(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/testing-angular-material-with-ng-mocks/testing-angular-material-with-ng-mocks/src/main.ts */"zUnb");


/***/ }),

/***/ "9EcU":
/*!***************************************************!*\
  !*** ./src/app/content/content.routing.module.ts ***!
  \***************************************************/
/*! exports provided: RouteNames, CONTENT_LIST, ContentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteNames", function() { return RouteNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_LIST", function() { return CONTENT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRoutingModule", function() { return ContentRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



var RouteNames;
(function (RouteNames) {
    RouteNames["Home"] = "home";
    RouteNames["Autocomplete"] = "autocomplete";
    RouteNames["AutocompleteSimple"] = "simple";
    RouteNames["AutocompleteAdvanced"] = "advanced";
    RouteNames["BottomSheet"] = "bottomSheet";
    RouteNames["BottomSheetBase"] = "base";
    RouteNames["BottomSheetData"] = "data";
    RouteNames["List"] = "list";
    RouteNames["ListAction"] = "action";
    RouteNames["ListBase"] = "base";
    RouteNames["ListMultiSelect"] = "multiSelect";
    RouteNames["ListNav"] = "nav";
    RouteNames["ListSelect"] = "select";
})(RouteNames || (RouteNames = {}));
const CONTENT_LIST = [
    {
        title: 'Home',
        route: RouteNames.Home,
    }, {
        title: 'Autocomplete',
        route: RouteNames.Autocomplete,
        children: [
            {
                title: 'Simple',
                route: RouteNames.AutocompleteSimple,
            }, {
                title: 'Advanced',
                route: RouteNames.AutocompleteAdvanced,
            },
        ]
    }, {
        title: 'Bottom Sheet',
        route: RouteNames.BottomSheet,
        children: [
            {
                title: 'Base Bottom Sheet',
                route: RouteNames.BottomSheetBase,
            }, {
                title: 'With data',
                route: RouteNames.BottomSheetData,
            },
        ]
    }, {
        title: 'List',
        route: RouteNames.List,
        children: [
            {
                title: 'Base List',
                route: RouteNames.ListBase,
            }, {
                title: 'Action List',
                route: RouteNames.ListAction,
            }, {
                title: 'Nav List',
                route: RouteNames.ListNav,
            }, {
                title: 'Selection List',
                route: RouteNames.ListSelect,
            }, {
                title: 'Multiple Selection List',
                route: RouteNames.ListMultiSelect,
            }
        ],
    },
];
const ROUTES = [
    {
        path: RouteNames.Home,
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "9cyd")).then(m => m.HomeModule),
    }, {
        path: RouteNames.BottomSheet,
        loadChildren: () => __webpack_require__.e(/*! import() | bottom-sheet-bottom-sheet-module */ "bottom-sheet-bottom-sheet-module").then(__webpack_require__.bind(null, /*! ./bottom-sheet/bottom-sheet.module */ "hgSV")).then(m => m.BottomSheetModule),
    }, {
        path: RouteNames.List,
        loadChildren: () => Promise.all(/*! import() | list-list-module */[__webpack_require__.e("default~advanced-advanced-autocomplete-module~base-base-bottom-sheet-module~data-data-bottom-sheet-m~13050dc4"), __webpack_require__.e("list-list-module")]).then(__webpack_require__.bind(null, /*! ./list/list.module */ "7P8+")).then(m => m.ListModule)
    }, {
        path: RouteNames.Autocomplete,
        loadChildren: () => __webpack_require__.e(/*! import() | autocomplete-autocomplete-module */ "autocomplete-autocomplete-module").then(__webpack_require__.bind(null, /*! ./autocomplete/autocomplete.module */ "gmVL")).then(m => m.AutocompleteModule)
    },
];
class ContentRoutingModule {
}
ContentRoutingModule.ɵfac = function ContentRoutingModule_Factory(t) { return new (t || ContentRoutingModule)(); };
ContentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ContentRoutingModule });
ContentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(ROUTES),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Rqvj":
/*!*************************************************************!*\
  !*** ./src/app/shared/file-reader/file-reader.component.ts ***!
  \*************************************************************/
/*! exports provided: FileReaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileReaderComponent", function() { return FileReaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-markdown */ "lR5k");


class FileReaderComponent {
    constructor() {
        this.fileName = '';
    }
}
FileReaderComponent.ɵfac = function FileReaderComponent_Factory(t) { return new (t || FileReaderComponent)(); };
FileReaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileReaderComponent, selectors: [["app-file-reader"]], inputs: { fileName: "fileName" }, decls: 1, vars: 1, consts: [["lineNumbers", "", 3, "src"]], template: function FileReaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "markdown", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/" + ctx.fileName);
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_1__["MarkdownComponent"]], styles: ["markdown[_ngcontent-%COMP%]  > pre {\n  max-height: 500px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZpbGUtcmVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoiZmlsZS1yZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXJrZG93bjo6bmctZGVlcCA+IHByZSB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _content_content_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content/content.routing.module */ "9EcU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _shared_is_route_active_is_route_active_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/is-route-active/is-route-active.directive */ "osyr");











const _c0 = function (a0, a1) { return [a0, a1]; };
function AppComponent_ng_container_8_mat_expansion_panel_1_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sublink_r7 = ctx.$implicit;
    const link_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, link_r2.route, sublink_r7.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u2022 ", sublink_r7.title, " ");
} }
function AppComponent_ng_container_8_mat_expansion_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-expansion-panel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-expansion-panel-header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_ng_container_8_mat_expansion_panel_1_a_3_Template, 2, 5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("route", link_r2.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", link_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", link_r2.children);
} }
function AppComponent_ng_container_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", link_r2.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](link_r2.title);
} }
function AppComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_ng_container_8_mat_expansion_panel_1_Template, 4, 3, "mat-expansion-panel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_ng_container_8_ng_template_2_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const link_r2 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", link_r2.children && link_r2.children.length)("ngIfElse", _r4);
} }
function AppComponent_ng_template_11_ng_container_0_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sublink_r14 = ctx.$implicit;
    const link_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, link_r12.route, sublink_r14.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u2022 ", sublink_r14.title, " ");
} }
function AppComponent_ng_template_11_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_ng_template_11_ng_container_0_a_3_Template, 2, 5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const link_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", link_r12.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](link_r12.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", link_r12.children);
} }
function AppComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_ng_template_11_ng_container_0_Template, 4, 3, "ng-container", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.links);
} }
class AppComponent {
    constructor() {
        this.title = 'Testing Angular Material with NgMocks';
        this.opened = true;
        this.links = _content_content_routing_module__WEBPACK_IMPORTED_MODULE_0__["CONTENT_LIST"];
    }
    headerBtnClicked() {
        this.opened = !this.opened;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 2, consts: [["color", "primary"], ["mat-icon-button", "", 3, "click"], ["mode", "side", 3, "opened"], [4, "ngFor", "ngForOf"], ["class", "mat-elevation-z", 4, "ngIf", "ngIfElse"], ["simpleLink", ""], [1, "mat-elevation-z"], ["isRouteActive", "current-category", 3, "route"], ["mat-list-item", "", "class", "sub-item", "routerLinkActive", "current-item", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-list-item", "", "routerLinkActive", "current-item", 1, "sub-item", 3, "routerLink"], ["mat-list-item", "", "routerLinkActive", "current-category", 3, "routerLink"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() { return ctx.headerBtnClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Angular Material \u2764\uFE0F NgMocks\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-drawer-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-drawer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppComponent_ng_container_8_Template, 4, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AppComponent_ng_template_11_Template, 1, 1, "ng-template");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("opened", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawer"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelHeader"], _shared_is_route_active_is_route_active_directive__WEBPACK_IMPORTED_MODULE_10__["IsRouteActiveDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"]], styles: ["mat-drawer-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px);\n}\n\nmat-drawer-content[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n\nmat-nav-list[_ngcontent-%COMP%] {\n  min-width: 240px;\n}\n\n.current-item[_ngcontent-%COMP%] {\n  background: rgba(105, 240, 174, 0.15);\n  color: #69f0ae;\n}\n\n.current-category[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  color: #69f0ae;\n}\n\n.current-category[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]  {\n  color: #69f0ae;\n}\n\n.sub-item[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UscUNBQUE7RUFDQSxjQUFBO0FBR0Y7O0FBQUE7RUFDRSxxQ0FBQTtFQUlBLGNBQUE7QUFBRjs7QUFIRTtFQUNFLGNBQUE7QUFLSjs7QUFBQTtFQUNFLGVBQUE7QUFHRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xufVxuXG5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBwYWRkaW5nOiA4cHg7XG59XG5tYXQtbmF2LWxpc3Qge1xuICBtaW4td2lkdGg6IDI0MHB4O1xufVxuLmN1cnJlbnQtaXRlbSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTA1LDI0MCwxNzQsLjE1KTtcbiAgY29sb3I6ICM2OWYwYWU7XG59XG5cbi5jdXJyZW50LWNhdGVnb3J5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMDQpO1xuICAmID4gc3Bhbjo6bmctZGVlcCB7XG4gICAgY29sb3I6ICM2OWYwYWU7XG4gIH1cbiAgY29sb3I6ICM2OWYwYWU7XG59XG5cbi5zdWItaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "TTC+":
/*!******************************************************************!*\
  !*** ./src/app/shared/is-route-active/is-route-active.module.ts ***!
  \******************************************************************/
/*! exports provided: IsRouteActiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsRouteActiveModule", function() { return IsRouteActiveModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _is_route_active_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-route-active.directive */ "osyr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class IsRouteActiveModule {
}
IsRouteActiveModule.ɵfac = function IsRouteActiveModule_Factory(t) { return new (t || IsRouteActiveModule)(); };
IsRouteActiveModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: IsRouteActiveModule });
IsRouteActiveModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](IsRouteActiveModule, { declarations: [_is_route_active_directive__WEBPACK_IMPORTED_MODULE_1__["IsRouteActiveDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_is_route_active_directive__WEBPACK_IMPORTED_MODULE_1__["IsRouteActiveDirective"]] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _content_content_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/content.routing.module */ "9EcU");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_file_reader_file_reader_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/file-reader/file-reader.module */ "lPXN");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _shared_is_route_active_is_route_active_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/is-route-active/is-route-active.module */ "TTC+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_11__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"] }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([], { useHash: true }),
            _content_content_routing_module__WEBPACK_IMPORTED_MODULE_7__["ContentRoutingModule"],
            _shared_file_reader_file_reader_module__WEBPACK_IMPORTED_MODULE_10__["FileReaderModule"],
            _shared_is_route_active_is_route_active_module__WEBPACK_IMPORTED_MODULE_14__["IsRouteActiveModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_11__["MarkdownModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _content_content_routing_module__WEBPACK_IMPORTED_MODULE_7__["ContentRoutingModule"],
        _shared_file_reader_file_reader_module__WEBPACK_IMPORTED_MODULE_10__["FileReaderModule"],
        _shared_is_route_active_is_route_active_module__WEBPACK_IMPORTED_MODULE_14__["IsRouteActiveModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"]] }); })();


/***/ }),

/***/ "lPXN":
/*!**********************************************************!*\
  !*** ./src/app/shared/file-reader/file-reader.module.ts ***!
  \**********************************************************/
/*! exports provided: FileReaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileReaderModule", function() { return FileReaderModule; });
/* harmony import */ var _file_reader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-reader.component */ "Rqvj");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class FileReaderModule {
    constructor() {
    }
}
FileReaderModule.ɵfac = function FileReaderModule_Factory(t) { return new (t || FileReaderModule)(); };
FileReaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FileReaderModule });
FileReaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[ngx_markdown__WEBPACK_IMPORTED_MODULE_1__["MarkdownModule"].forChild()]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FileReaderModule, { declarations: [_file_reader_component__WEBPACK_IMPORTED_MODULE_0__["FileReaderComponent"]], imports: [ngx_markdown__WEBPACK_IMPORTED_MODULE_1__["MarkdownModule"]], exports: [_file_reader_component__WEBPACK_IMPORTED_MODULE_0__["FileReaderComponent"]] }); })();


/***/ }),

/***/ "osyr":
/*!*********************************************************************!*\
  !*** ./src/app/shared/is-route-active/is-route-active.directive.ts ***!
  \*********************************************************************/
/*! exports provided: IsRouteActiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsRouteActiveDirective", function() { return IsRouteActiveDirective; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const isNavigationEnd = (e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"];
class IsRouteActiveDirective {
    constructor(router, element, renderer, cdr) {
        this.router = router;
        this.element = element;
        this.renderer = renderer;
        this.cdr = cdr;
        this.route = '';
        this.classes = [];
        this.isDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isActive = false;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.isDestroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(isNavigationEnd)).subscribe((e) => {
            this.update();
        });
    }
    set isRouteActive(data) {
        const classes = data.split(' ');
        this.classes = classes.filter(c => !!c);
    }
    ngOnDestroy() {
        this.isDestroyed$.next();
        this.isDestroyed$.complete();
    }
    update() {
        if (!this.route || !this.router.navigated) {
            return;
        }
        const hasActiveLinks = this.hasActiveLinks();
        if (this.isActive !== hasActiveLinks) {
            this.isActive = hasActiveLinks;
            this.cdr.markForCheck();
            this.classes.forEach((c) => {
                if (hasActiveLinks) {
                    this.renderer.addClass(this.element.nativeElement, c);
                }
                else {
                    this.renderer.removeClass(this.element.nativeElement, c);
                }
            });
        }
    }
    hasActiveLinks() {
        return !!this.route && this.router.isActive(this.router.createUrlTree([this.route]), false);
    }
}
IsRouteActiveDirective.ɵfac = function IsRouteActiveDirective_Factory(t) { return new (t || IsRouteActiveDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
IsRouteActiveDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: IsRouteActiveDirective, selectors: [["", "isRouteActive", ""]], inputs: { isRouteActive: "isRouteActive", route: "route" } });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map