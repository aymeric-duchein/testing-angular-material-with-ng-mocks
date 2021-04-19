(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-list-basic-list-module"],{

/***/ "aySI":
/*!**************************************************************!*\
  !*** ./src/app/content/list/basic-list/basic-list.module.ts ***!
  \**************************************************************/
/*! exports provided: BasicListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicListModule", function() { return BasicListModule; });
/* harmony import */ var _basic_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-list.component */ "eSpw");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/container.component */ "w+aw");
/* harmony import */ var _shared_item_template_item_template_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/item-template/item-template.module */ "6gGk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', component: _container_container_component__WEBPACK_IMPORTED_MODULE_2__["ContainerComponent"] },
];
class BasicListModule {
}
BasicListModule.ɵfac = function BasicListModule_Factory(t) { return new (t || BasicListModule)(); };
BasicListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: BasicListModule });
BasicListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
            _shared_item_template_item_template_module__WEBPACK_IMPORTED_MODULE_3__["ItemTemplateModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BasicListModule, { declarations: [_basic_list_component__WEBPACK_IMPORTED_MODULE_0__["BasicListComponent"], _container_container_component__WEBPACK_IMPORTED_MODULE_2__["ContainerComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
        _shared_item_template_item_template_module__WEBPACK_IMPORTED_MODULE_3__["ItemTemplateModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]] }); })();


/***/ }),

/***/ "eSpw":
/*!*****************************************************************!*\
  !*** ./src/app/content/list/basic-list/basic-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: BasicListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicListComponent", function() { return BasicListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "MutI");


class BasicListComponent {
}
BasicListComponent.ɵfac = function BasicListComponent_Factory(t) { return new (t || BasicListComponent)(); };
BasicListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasicListComponent, selectors: [["app-basic-list"]], decls: 7, vars: 0, template: function BasicListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Item 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Item 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "w+aw":
/*!**************************************************************************!*\
  !*** ./src/app/content/list/basic-list/container/container.component.ts ***!
  \**************************************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _shared_item_template_item_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/item-template/item-template.component */ "sdMC");
/* harmony import */ var _basic_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../basic-list.component */ "eSpw");




class ContainerComponent {
}
ContainerComponent.ɵfac = function ContainerComponent_Factory(t) { return new (t || ContainerComponent)(); };
ContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainerComponent, selectors: [["app-container"]], decls: 6, vars: 0, consts: [["htmlFile", "basic-list.component.html", "tsFile", "basic-list.component.ts", "specFile", "basic-list.component.spec.ts"]], template: function ContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is the basic use of a list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-item-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-basic-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _shared_item_template_item_template_component__WEBPACK_IMPORTED_MODULE_2__["ItemTemplateComponent"], _basic_list_component__WEBPACK_IMPORTED_MODULE_3__["BasicListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=basic-list-basic-list-module.js.map