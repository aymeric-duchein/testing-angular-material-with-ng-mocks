(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bottom-sheet-bottom-sheet-module"],{

/***/ "gYbi":
/*!****************************************************************!*\
  !*** ./src/app/content/bottom-sheet/bottom-sheet.component.ts ***!
  \****************************************************************/
/*! exports provided: BottomSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetComponent", function() { return BottomSheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class BottomSheetComponent {
}
BottomSheetComponent.ɵfac = function BottomSheetComponent_Factory(t) { return new (t || BottomSheetComponent)(); };
BottomSheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BottomSheetComponent, selectors: [["app-button"]], decls: 6, vars: 0, consts: [[1, "header"], ["mat-raised-button", "", "color", "accent", "href", "https://material.angular.io/components/bottom-sheet/overview"]], template: function BottomSheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Bottom Sheet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Read the documentation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.header[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.header[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JvdHRvbS1zaGVldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUFFO0VBQ0UsZ0JBQUE7QUFFSjtBQUFFO0VBQ0UsWUFBQTtBQUVKIiwiZmlsZSI6ImJvdHRvbS1zaGVldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gID4gaDMge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbiAgPiBhIHtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "hgSV":
/*!*************************************************************!*\
  !*** ./src/app/content/bottom-sheet/bottom-sheet.module.ts ***!
  \*************************************************************/
/*! exports provided: BottomSheetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetModule", function() { return BottomSheetModule; });
/* harmony import */ var _bottom_sheet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bottom-sheet.component */ "gYbi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '', component: _bottom_sheet_component__WEBPACK_IMPORTED_MODULE_0__["BottomSheetComponent"], children: [
            { path: 'base', loadChildren: () => Promise.all(/*! import() | base-base-bottom-sheet-module */[__webpack_require__.e("default~action-list-action-list-module~base-base-bottom-sheet-module~basic-list-basic-list-module~da~f1b1ee30"), __webpack_require__.e("default~action-list-action-list-module~base-base-bottom-sheet-module~data-data-bottom-sheet-module~s~5f4e6cb3"), __webpack_require__.e("default~base-base-bottom-sheet-module~data-data-bottom-sheet-module~list-list-module~simple-simple-a~c775bbb3"), __webpack_require__.e("default~base-base-bottom-sheet-module~data-data-bottom-sheet-module~simple-simple-autocomplete-module"), __webpack_require__.e("base-base-bottom-sheet-module")]).then(__webpack_require__.bind(null, /*! ./base/base-bottom-sheet.module */ "pgSS")).then(m => m.BaseBottomSheetModule) },
            { path: 'data', loadChildren: () => Promise.all(/*! import() | data-data-bottom-sheet-module */[__webpack_require__.e("default~action-list-action-list-module~base-base-bottom-sheet-module~basic-list-basic-list-module~da~f1b1ee30"), __webpack_require__.e("default~action-list-action-list-module~base-base-bottom-sheet-module~data-data-bottom-sheet-module~s~5f4e6cb3"), __webpack_require__.e("default~base-base-bottom-sheet-module~data-data-bottom-sheet-module~list-list-module~simple-simple-a~c775bbb3"), __webpack_require__.e("default~base-base-bottom-sheet-module~data-data-bottom-sheet-module~simple-simple-autocomplete-module"), __webpack_require__.e("data-data-bottom-sheet-module")]).then(__webpack_require__.bind(null, /*! ./data/data-bottom-sheet.module */ "YlIo")).then(m => m.DataBottomSheetModule) },
            { path: '', redirectTo: 'base', pathMatch: 'full' },
            { path: '**', redirectTo: 'base' },
        ]
    },
];
class BottomSheetModule {
}
BottomSheetModule.ɵfac = function BottomSheetModule_Factory(t) { return new (t || BottomSheetModule)(); };
BottomSheetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BottomSheetModule });
BottomSheetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BottomSheetModule, { declarations: [_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_0__["BottomSheetComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=bottom-sheet-bottom-sheet-module.js.map