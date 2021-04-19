(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["autocomplete-autocomplete-module"],{

/***/ "gmVL":
/*!*************************************************************!*\
  !*** ./src/app/content/autocomplete/autocomplete.module.ts ***!
  \*************************************************************/
/*! exports provided: AutocompleteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteModule", function() { return AutocompleteModule; });
/* harmony import */ var _autocomplete_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocomplete.component */ "vdWM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '', component: _autocomplete_component__WEBPACK_IMPORTED_MODULE_0__["AutocompleteComponent"], children: [
            { path: 'simple', loadChildren: () => Promise.all(/*! import() | simple-simple-autocomplete-module */[__webpack_require__.e("default~action-list-action-list-module~advanced-advanced-autocomplete-module~base-base-bottom-sheet-~5f322b4a"), __webpack_require__.e("default~action-list-action-list-module~advanced-advanced-autocomplete-module~base-base-bottom-sheet-~55ad7e77"), __webpack_require__.e("default~advanced-advanced-autocomplete-module~base-base-bottom-sheet-module~data-data-bottom-sheet-m~13050dc4"), __webpack_require__.e("default~advanced-advanced-autocomplete-module~selection-list-selection-list-module~selection-multipl~57312251"), __webpack_require__.e("default~advanced-advanced-autocomplete-module~base-base-bottom-sheet-module~data-data-bottom-sheet-m~fb05998d"), __webpack_require__.e("default~advanced-advanced-autocomplete-module~simple-simple-autocomplete-module"), __webpack_require__.e("simple-simple-autocomplete-module")]).then(__webpack_require__.bind(null, /*! ./simple/simple-autocomplete.module */ "5yje")).then(m => m.SimpleAutocompleteModule) },
            {
                path: 'advanced',
                loadChildren: () => Promise.all(/*! import() | advanced-advanced-autocomplete-module */[__webpack_require__.e("default~action-list-action-list-module~advanced-advanced-autocomplete-module~base-base-bottom-sheet-~5f322b4a"), __webpack_require__.e("default~action-list-action-list-module~advanced-advanced-autocomplete-module~base-base-bottom-sheet-~55ad7e77"), __webpack_require__.e("default~advanced-advanced-autocomplete-module~base-base-bottom-sheet-module~data-data-bottom-sheet-m~13050dc4"), __webpack_require__.e("default~advanced-advanced-autocomplete-module~selection-list-selection-list-module~selection-multipl~57312251"), __webpack_require__.e("default~advanced-advanced-autocomplete-module~base-base-bottom-sheet-module~data-data-bottom-sheet-m~fb05998d"), __webpack_require__.e("default~advanced-advanced-autocomplete-module~simple-simple-autocomplete-module"), __webpack_require__.e("advanced-advanced-autocomplete-module")]).then(__webpack_require__.bind(null, /*! ./advanced/advanced-autocomplete.module */ "D0c/")).then(m => m.AdvancedAutocompleteModule)
            },
            { path: '', redirectTo: 'simple', pathMatch: 'full' },
            { path: '**', redirectTo: 'simple' },
        ]
    },
];
class AutocompleteModule {
}
AutocompleteModule.ɵfac = function AutocompleteModule_Factory(t) { return new (t || AutocompleteModule)(); };
AutocompleteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AutocompleteModule });
AutocompleteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AutocompleteModule, { declarations: [_autocomplete_component__WEBPACK_IMPORTED_MODULE_0__["AutocompleteComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]] }); })();


/***/ }),

/***/ "vdWM":
/*!****************************************************************!*\
  !*** ./src/app/content/autocomplete/autocomplete.component.ts ***!
  \****************************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AutocompleteComponent {
}
AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) { return new (t || AutocompleteComponent)(); };
AutocompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutocompleteComponent, selectors: [["app-button"]], decls: 6, vars: 0, consts: [[1, "header"], ["mat-raised-button", "", "color", "accent", "href", "https://material.angular.io/components/autocomplete/overview"]], template: function AutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Bottom Sheet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Read the documentation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.header[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.header[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUFFO0VBQ0UsZ0JBQUE7QUFFSjtBQUFFO0VBQ0UsWUFBQTtBQUVKIiwiZmlsZSI6ImF1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gID4gaDMge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbiAgPiBhIHtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=autocomplete-autocomplete-module.js.map