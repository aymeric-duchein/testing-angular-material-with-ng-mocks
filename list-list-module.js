(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "7P8+":
/*!*********************************************!*\
  !*** ./src/app/content/list/list.module.ts ***!
  \*********************************************/
/*! exports provided: ListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModule", function() { return ListModule; });
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.component */ "Ti5N");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '', component: _list_component__WEBPACK_IMPORTED_MODULE_0__["ListComponent"], children: [
            { path: 'base', loadChildren: () => Promise.all(/*! import() | basic-list-basic-list-module */[__webpack_require__.e("default~action-list-action-list-module~base-base-bottom-sheet-module~basic-list-basic-list-module~da~f1b1ee30"), __webpack_require__.e("basic-list-basic-list-module")]).then(__webpack_require__.bind(null, /*! ./basic-list/basic-list.module */ "aySI")).then(m => m.BasicListModule) },
            { path: 'action', loadChildren: () => Promise.all(/*! import() | action-list-action-list-module */[__webpack_require__.e("default~action-list-action-list-module~base-base-bottom-sheet-module~basic-list-basic-list-module~da~f1b1ee30"), __webpack_require__.e("default~action-list-action-list-module~base-base-bottom-sheet-module~data-data-bottom-sheet-module~s~5f4e6cb3"), __webpack_require__.e("action-list-action-list-module")]).then(__webpack_require__.bind(null, /*! ./action-list/action-list.module */ "VQ6b")).then(m => m.ActionListModule) },
            { path: 'nav', loadChildren: () => Promise.all(/*! import() | nav-list-nav-list-module */[__webpack_require__.e("default~action-list-action-list-module~base-base-bottom-sheet-module~basic-list-basic-list-module~da~f1b1ee30"), __webpack_require__.e("nav-list-nav-list-module")]).then(__webpack_require__.bind(null, /*! ./nav-list/nav-list.module */ "MU+E")).then(m => m.NavListModule) },
            { path: 'select', loadChildren: () => Promise.all(/*! import() | selection-list-selection-list-module */[__webpack_require__.e("default~action-list-action-list-module~base-base-bottom-sheet-module~basic-list-basic-list-module~da~f1b1ee30"), __webpack_require__.e("default~selection-list-selection-list-module~selection-multiple-list-selection-multiple-list-module~~9c3b03e1"), __webpack_require__.e("default~selection-list-selection-list-module~selection-multiple-list-selection-multiple-list-module"), __webpack_require__.e("selection-list-selection-list-module")]).then(__webpack_require__.bind(null, /*! ./selection-list/selection-list.module */ "hNQw")).then(m => m.SelectionListModule) },
            {
                path: 'multiSelect',
                loadChildren: () => Promise.all(/*! import() | selection-multiple-list-selection-multiple-list-module */[__webpack_require__.e("default~action-list-action-list-module~base-base-bottom-sheet-module~basic-list-basic-list-module~da~f1b1ee30"), __webpack_require__.e("default~selection-list-selection-list-module~selection-multiple-list-selection-multiple-list-module~~9c3b03e1"), __webpack_require__.e("default~selection-list-selection-list-module~selection-multiple-list-selection-multiple-list-module"), __webpack_require__.e("selection-multiple-list-selection-multiple-list-module")]).then(__webpack_require__.bind(null, /*! ./selection-multiple-list/selection-multiple-list.module */ "B7FF")).then(m => m.SelectionMultipleListModule)
            },
            { path: '', redirectTo: 'base', pathMatch: 'full' },
            { path: '**', redirectTo: 'base' },
        ]
    },
];
class ListModule {
}
ListModule.ɵfac = function ListModule_Factory(t) { return new (t || ListModule)(); };
ListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ListModule });
ListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ListModule, { declarations: [_list_component__WEBPACK_IMPORTED_MODULE_0__["ListComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]] }); })();


/***/ }),

/***/ "Ti5N":
/*!************************************************!*\
  !*** ./src/app/content/list/list.component.ts ***!
  \************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ListComponent {
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 6, vars: 0, consts: [[1, "header"], ["mat-raised-button", "", "color", "accent", "href", "https://material.angular.io/components/list/overview"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " MatList ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Read the documentation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.header[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.header[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0FBRUo7QUFBRTtFQUNFLFlBQUE7QUFFSiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgPiBoMyB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuICA+IGEge1xuICAgIGhlaWdodDogMzZweDtcbiAgfVxufVxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=list-list-module.js.map