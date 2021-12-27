(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shabbir.abdulmajeed\Downloads\FortressTest\DogRescue\src\main.ts */"zUnb");


/***/ }),

/***/ "2D3X":
/*!*****************************************!*\
  !*** ./src/app/services/dog.service.ts ***!
  \*****************************************/
/*! exports provided: DogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DogService", function() { return DogService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class DogService {
    constructor(http) {
        this.http = http;
        this.randomImageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].randomImageUrl;
        this.breedsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].listOfBreedUrl;
        this.dogBreeds = [];
    }
    getRandomDogImage() {
        return this.http.get(this.randomImageUrl);
    }
    getDogBreeds() {
        return this.http.get(this.breedsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => {
            Object.keys(response.message).forEach(key => {
                this.dogBreeds.push(key);
            });
            return this.dogBreeds;
        }));
    }
    getDog(id) {
        const dog = this.dogBreeds.find(x => x === id);
        if (dog !== undefined)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(dog);
        else
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])("Dog not found");
    }
    getDogImage(breed) {
        return this.http.get(`https://dog.ceo/api/breed/${breed}/images/random`);
    }
    getGalleryImages(breed) {
        return this.http.get(`https://dog.ceo/api/breed/${breed}/images`);
    }
}
DogService.ɵfac = function DogService_Factory(t) { return new (t || DogService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
DogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DogService, factory: DogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "6HOl":
/*!**************************************************************!*\
  !*** ./src/app/pages/dog/dog-detail/dog-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: DogDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DogDetailComponent", function() { return DogDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_dog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dog.service */ "2D3X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function DogDetailComponent_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.image.message || "./assets/dog-api-logo.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DogDetailComponent_div_5_li_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", image_r3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DogDetailComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back to Search Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DogDetailComponent_div_5_div_6_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "London");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "I'm looking for a new home...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Likes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Type of Home Needed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, DogDetailComponent_div_5_li_36_Template, 2, 1, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Come & Meet Me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Donate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 4, ctx_r0.dog), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("About ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 6, ctx_r0.dog), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.galleryImages);
} }
class DogDetailComponent {
    constructor(dogService, route) {
        this.dogService = dogService;
        this.route = route;
        this.galleryImages = [];
    }
    ngOnInit() {
        this.loadDog();
        this.loadDogImage();
        this.loadGalleryImages();
    }
    loadDog() {
        this.dogService.getDog(this.route.snapshot.params.id || '').subscribe(dog => {
            this.dog = dog;
        });
    }
    loadDogImage() {
        this.dogService.getDogImage(this.route.snapshot.params.id || '').subscribe(image => {
            this.image = image;
        });
    }
    loadGalleryImages() {
        this.dogService.getGalleryImages(this.route.snapshot.params.id || '').subscribe(images => {
            this.galleryImages = images.message.slice(0, 9);
        });
    }
}
DogDetailComponent.ɵfac = function DogDetailComponent_Factory(t) { return new (t || DogDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dog_service__WEBPACK_IMPORTED_MODULE_1__["DogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
DogDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DogDetailComponent, selectors: [["app-dog-detail"]], decls: 6, vars: 1, consts: [[1, "container-fluid", "dog-detail-section"], [1, "row", "green-bar-row"], [1, "col", "green-bar-div"], [1, "green-bar-text"], ["class", "row dog-detail-row", 4, "ngIf"], [1, "row", "dog-detail-row"], [1, "col-12", "text-left", "mb-3"], [1, "fa", "fa-chevron-left", "mr-2"], ["routerLink", "/home", 1, "back-to-search-results"], [1, "col-sm-12", "col-md-12", "col-lg-4", "left-section"], ["class", "card left-card", 4, "ngIf"], [1, "col-sm-12", "col-md-12", "col-lg-8", "right-section"], [1, "card", "right-card"], [1, "card-body"], [1, "right-card-title"], [1, "right-card-text"], [1, "text-muted"], [1, "about-section"], [1, "about-heading"], [1, "about-subheading"], [1, "likes-section"], [1, "likes-heading"], [1, "likes-subheading"], [1, "type-of-home-section"], [1, "type-of-home-heading"], [1, "type-of-home-subheading"], [1, "gallery-images-section"], [1, "row", "gallery-images-list-row"], ["class", "col-sm-12 col-md-6 col-lg-6 col-xl-4 gallery-images-list-item", 4, "ngFor", "ngForOf"], [1, "card-footer"], [1, "button-container"], [1, "btn", "btn-success", "meet-me-button"], [1, "fa", "fa-map-marker", "mr-2"], [1, "btn", "btn-warning", "donate-button"], [1, "card", "left-card"], ["alt", "Dog", 1, "card-img-top", "img-thumbnail", 3, "src"], [1, "col-sm-12", "col-md-6", "col-lg-6", "col-xl-4", "gallery-images-list-item"], ["height", "180", "width", "180", "alt", "Gallery Images", 1, "gallery-image", 3, "src"]], template: function DogDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dogs Rescue Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DogDetailComponent_div_5_Template, 44, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dog);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]], styles: [".green-bar-row[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n    color: #fff;\r\n    height: 125px;\r\n    background-color: #53bd63;\r\n    align-items: center;\r\n}\r\n\r\n.green-bar-text[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    text-transform: uppercase;\r\n    font-style: italic;\r\n    margin-bottom: 0px;\r\n    font-weight: 500;\r\n    text-align: center;\r\n}\r\n\r\n.dog-detail-row[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    margin: 50px auto;\r\n}\r\n\r\n.back-to-search-results[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    color: black;\r\n}\r\n\r\n.right-card[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\r\n\r\n.right-card-title[_ngcontent-%COMP%] {\r\n    font-weight: 700;\r\n    font-size: 25px;\r\n}\r\n\r\n.right-card-title[_ngcontent-%COMP%] > sub[_ngcontent-%COMP%] {\r\n    color: #53bd63;\r\n    font-size: 15px;\r\n}\r\n\r\n.right-card-text[_ngcontent-%COMP%] {\r\n    font-style: italic;\r\n    font-size: 18px;\r\n}\r\n\r\n.about-heading[_ngcontent-%COMP%], .likes-heading[_ngcontent-%COMP%], .type-of-home-heading[_ngcontent-%COMP%] {\r\n    color: #53bd63;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n}\r\n\r\n.about-subheading[_ngcontent-%COMP%], .likes-subheading[_ngcontent-%COMP%], .type-of-home-subheading[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n}\r\n\r\n.gallery-images-list-row[_ngcontent-%COMP%] {\r\n    padding-left: 10px;\r\n}\r\n\r\n.gallery-images-list-item[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    margin: auto;\r\n    list-style: none;\r\n}\r\n\r\n.gallery-image[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n    min-width: 250px;\r\n}\r\n\r\n.meet-me-button[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n}\r\n\r\n.donate-button[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    float: right;\r\n}\r\n\r\n@media screen and (max-width:767px) {\r\n\r\n    .green-bar-row[_ngcontent-%COMP%] {\r\n        border-radius: 5px;\r\n        color: #fff;\r\n        height: 125px;\r\n        background-color: #53bd63;\r\n        align-items: center;\r\n    }\r\n\r\n    .green-bar-text[_ngcontent-%COMP%] {\r\n        font-size: 20px;\r\n        text-transform: uppercase;\r\n        font-style: italic;\r\n        margin-bottom: 0px;\r\n        font-weight: 500;\r\n    }\r\n\r\n    .dog-detail-row[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        margin: 50px auto;\r\n    }\r\n\r\n    .back-to-search-results[_ngcontent-%COMP%] {\r\n        font-size: 15px;\r\n        color: black;\r\n    }\r\n\r\n    .right-card[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n\r\n    .right-card-title[_ngcontent-%COMP%] {\r\n        font-weight: 700;\r\n        font-size: 22px;\r\n    }\r\n\r\n    .right-card-title[_ngcontent-%COMP%] > sub[_ngcontent-%COMP%] {\r\n        color: #53bd63;\r\n        font-size: 15px;\r\n    }\r\n\r\n    .right-card-text[_ngcontent-%COMP%] {\r\n        font-style: italic;\r\n        font-size: 16px;\r\n    }\r\n\r\n    .about-heading[_ngcontent-%COMP%], .likes-heading[_ngcontent-%COMP%], .type-of-home-heading[_ngcontent-%COMP%] {\r\n        color: #53bd63;\r\n        font-size: 18px;\r\n        font-weight: 500;\r\n    }\r\n\r\n    .about-subheading[_ngcontent-%COMP%], .likes-subheading[_ngcontent-%COMP%], .type-of-home-subheading[_ngcontent-%COMP%] {\r\n        font-size: 13px;\r\n    }\r\n\r\n    .gallery-images-list-row[_ngcontent-%COMP%] {\r\n        padding-left: 10px;\r\n    }\r\n\r\n    .gallery-images-list-item[_ngcontent-%COMP%] {\r\n        padding: 10px;\r\n        margin: auto;\r\n        list-style: none;\r\n    }\r\n\r\n    .gallery-image[_ngcontent-%COMP%] {\r\n        height: 170px;\r\n        min-width: 210px;\r\n    }\r\n\r\n    .meet-me-button[_ngcontent-%COMP%] {\r\n        display: block;\r\n        width: 100%;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .donate-button[_ngcontent-%COMP%] {\r\n        display: block;\r\n        width: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvZy1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBOztJQUVJO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxhQUFhO1FBQ2IseUJBQXlCO1FBQ3pCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGVBQWU7UUFDZix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxlQUFlO0lBQ25COztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsWUFBWTtRQUNaLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsV0FBVztRQUNYLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJkb2ctZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JlZW4tYmFyLXJvdyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNiZDYzO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmdyZWVuLWJhci10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZG9nLWRldGFpbC1yb3cge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG59XHJcblxyXG4uYmFjay10by1zZWFyY2gtcmVzdWx0cyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5yaWdodC1jYXJkIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5yaWdodC1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5yaWdodC1jYXJkLXRpdGxlPnN1YiB7XHJcbiAgICBjb2xvcjogIzUzYmQ2MztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnJpZ2h0LWNhcmQtdGV4dCB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5hYm91dC1oZWFkaW5nLCAubGlrZXMtaGVhZGluZywgLnR5cGUtb2YtaG9tZS1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjNTNiZDYzO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmFib3V0LXN1YmhlYWRpbmcsIC5saWtlcy1zdWJoZWFkaW5nLCAudHlwZS1vZi1ob21lLXN1YmhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uZ2FsbGVyeS1pbWFnZXMtbGlzdC1yb3cge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZ2FsbGVyeS1pbWFnZXMtbGlzdC1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uZ2FsbGVyeS1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLm1lZXQtbWUtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5kb25hdGUtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuXHJcbiAgICAuZ3JlZW4tYmFyLXJvdyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUzYmQ2MztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ncmVlbi1iYXItdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5kb2ctZGV0YWlsLXJvdyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmJhY2stdG8tc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnJpZ2h0LWNhcmQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnJpZ2h0LWNhcmQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodC1jYXJkLXRpdGxlPnN1YiB7XHJcbiAgICAgICAgY29sb3I6ICM1M2JkNjM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodC1jYXJkLXRleHQge1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0LWhlYWRpbmcsIC5saWtlcy1oZWFkaW5nLCAudHlwZS1vZi1ob21lLWhlYWRpbmcge1xyXG4gICAgICAgIGNvbG9yOiAjNTNiZDYzO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dC1zdWJoZWFkaW5nLCAubGlrZXMtc3ViaGVhZGluZywgLnR5cGUtb2YtaG9tZS1zdWJoZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmdhbGxlcnktaW1hZ2VzLWxpc3Qtcm93IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmdhbGxlcnktaW1hZ2VzLWxpc3QtaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuZ2FsbGVyeS1pbWFnZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNzBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDIxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tZWV0LW1lLWJ1dHRvbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZG9uYXRlLWJ1dHRvbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn0iXX0= */"] });


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
    production: false,
    listOfBreedUrl: 'https://dog.ceo/api/breeds/list/all',
    randomImageUrl: 'https://dog.ceo/api/breeds/image/random'
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

/***/ "BlWo":
/*!**************************************************************************!*\
  !*** ./src/app/pages/dog/random-dog-image/random-dog-image.component.ts ***!
  \**************************************************************************/
/*! exports provided: RandomDogImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomDogImageComponent", function() { return RandomDogImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_dog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dog.service */ "2D3X");


class RandomDogImageComponent {
    constructor(dogService) {
        this.dogService = dogService;
    }
    ngOnInit() {
        this.loadRandomDogImage();
    }
    loadRandomDogImage() {
        this.dogService.getRandomDogImage().subscribe(response => {
            this.imageUrl = response.message;
        });
    }
}
RandomDogImageComponent.ɵfac = function RandomDogImageComponent_Factory(t) { return new (t || RandomDogImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dog_service__WEBPACK_IMPORTED_MODULE_1__["DogService"])); };
RandomDogImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RandomDogImageComponent, selectors: [["app-random-dog-image"]], decls: 4, vars: 1, consts: [[1, "container-fluid", "random-image-section"], [1, "row", "random-image-row"], [1, "col-12", "random-image-div"], ["alt", "Random Dog Image", 1, "random-image", 3, "src"]], template: function RandomDogImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".random-image-section[_ngcontent-%COMP%]{\r\n    min-height: 300px;\r\n    overflow: hidden;\r\n}\r\n.random-image-div[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n}\r\n.random-image[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 280px;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    border-radius: 5px;\r\n    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhbmRvbS1kb2ctaW1hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLHdDQUF3QztBQUM1QyIsImZpbGUiOiJyYW5kb20tZG9nLWltYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFuZG9tLWltYWdlLXNlY3Rpb257XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnJhbmRvbS1pbWFnZS1kaXZ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLnJhbmRvbS1pbWFnZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyODBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwwLDAsMC41KTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "EtBk":
/*!************************************************************!*\
  !*** ./src/app/pages/dog/dogs-list/dogs-list.component.ts ***!
  \************************************************************/
/*! exports provided: DogsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DogsListComponent", function() { return DogsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_dog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dog.service */ "2D3X");
/* harmony import */ var _random_dog_image_random_dog_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../random-dog-image/random-dog-image.component */ "BlWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dog_card_dog_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dog-card/dog-card.component */ "pF8U");





function DogsListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-dog-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dogName_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dogName", dogName_r1);
} }
class DogsListComponent {
    constructor(dogService) {
        this.dogService = dogService;
        this.dogNames = [];
        this.filterDogNames = [];
    }
    ngOnInit() {
        this.loadDogs();
    }
    loadDogs() {
        this.dogService.getDogBreeds().subscribe(dogs => {
            this.dogNames = dogs.slice(0, 9);
            this.filterDogNames = this.dogNames;
        });
    }
    filterDogs(dog) {
        const filterValue = dog.target.value;
        if (filterValue.length > 0) {
            this.filterDogNames = this.dogNames.filter(name => name.toLowerCase().includes(filterValue.toLowerCase()));
        }
    }
}
DogsListComponent.ɵfac = function DogsListComponent_Factory(t) { return new (t || DogsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dog_service__WEBPACK_IMPORTED_MODULE_1__["DogService"])); };
DogsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DogsListComponent, selectors: [["app-dogs-list"]], decls: 14, vars: 1, consts: [[1, "container-fluid", "dogs-list-section"], [1, "row", "dogs-rescue-center-row"], [1, "dogs-rescue-center-heading"], [1, "dogs-rescue-center-subheading"], [1, "find-dog-text"], [1, "search-container"], [1, "form-group", "search-input"], ["type", "text", "id", "search-text", "aria-describedby", "search-text", "placeholder", "Search", "autofocus", "", "name", "search", 1, "form-control", 3, "keyup"], [1, "row", "dogs-list-card-row"], ["class", "col-sm-12 col-md-12 col-lg-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-12", "col-lg-6", "col-xl-4"], [3, "dogName"]], template: function DogsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-random-dog-image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dogs Rescue Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Find a rescue dog near you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function DogsListComponent_Template_input_keyup_11_listener($event) { return ctx.filterDogs($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DogsListComponent_div_13_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterDogNames);
    } }, directives: [_random_dog_image_random_dog_image_component__WEBPACK_IMPORTED_MODULE_2__["RandomDogImageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _dog_card_dog_card_component__WEBPACK_IMPORTED_MODULE_4__["DogCardComponent"]], styles: [".dogs-list-section[_ngcontent-%COMP%] {\r\n    width: 75%;\r\n}\r\n\r\n.dogs-rescue-center-row[_ngcontent-%COMP%] {\r\n    background-color: #53bd63;\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    padding: 3%;\r\n}\r\n\r\n.dogs-rescue-center-heading[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    border-bottom: 2px solid;\r\n    width: 100%;\r\n    text-align: left;\r\n    padding-bottom: 15px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.dogs-rescue-center-subheading[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    font-size: 14px;\r\n}\r\n\r\n.find-dog-text[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n}\r\n\r\n.search-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.search-form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.search-input[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.dogs-list-card-row[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    margin: 30px 0px;\r\n}\r\n\r\n@media screen and (max-width:767px) {\r\n    .dogs-list-section[_ngcontent-%COMP%] {\r\n        width: 90%;\r\n    }\r\n\r\n    .dogs-rescue-center-row[_ngcontent-%COMP%] {\r\n        background-color: #53bd63;\r\n        color: #fff;\r\n        border-radius: 5px;\r\n        padding: 8%;\r\n    }\r\n\r\n    .dogs-rescue-center-heading[_ngcontent-%COMP%] {\r\n        font-size: 20px;\r\n        border-bottom: 2px solid;\r\n        width: 100%;\r\n        text-align: left;\r\n        padding-bottom: 15px;\r\n        text-transform: uppercase;\r\n        font-weight: 500;\r\n    }\r\n\r\n    .dogs-rescue-center-subheading[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n        font-size: 13px;\r\n    }\r\n\r\n    .find-dog-text[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        text-align: left;\r\n        text-transform: uppercase;\r\n        font-weight: 500;\r\n    }\r\n\r\n    .search-container[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n\r\n    .search-form[_ngcontent-%COMP%] {\r\n        display: flex;\r\n    }\r\n\r\n    .search-input[_ngcontent-%COMP%] {\r\n        margin-bottom: 0px;\r\n    }\r\n\r\n    .dogs-list-card-row[_ngcontent-%COMP%] {\r\n        justify-content: center;\r\n        margin-bottom: 30px 0px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvZ3MtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSx5QkFBeUI7UUFDekIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO1FBQ2Ysd0JBQXdCO1FBQ3hCLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLHlCQUF5QjtRQUN6QixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIseUJBQXlCO1FBQ3pCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSx1QkFBdUI7UUFDdkIsdUJBQXVCO0lBQzNCO0FBQ0oiLCJmaWxlIjoiZG9ncy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9ncy1saXN0LXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuLmRvZ3MtcmVzY3VlLWNlbnRlci1yb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzYmQ2MztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMyU7XHJcbn1cclxuXHJcbi5kb2dzLXJlc2N1ZS1jZW50ZXItaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5kb2dzLXJlc2N1ZS1jZW50ZXItc3ViaGVhZGluZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZmluZC1kb2ctdGV4dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnNlYXJjaC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWFyY2gtZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmRvZ3MtbGlzdC1jYXJkLXJvdyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAgIC5kb2dzLWxpc3Qtc2VjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuXHJcbiAgICAuZG9ncy1yZXNjdWUtY2VudGVyLXJvdyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUzYmQ2MztcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogOCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRvZ3MtcmVzY3VlLWNlbnRlci1oZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5kb2dzLXJlc2N1ZS1jZW50ZXItc3ViaGVhZGluZyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbmQtZG9nLXRleHQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWZvcm0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1pbnB1dCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kb2dzLWxpc3QtY2FyZC1yb3cge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHggMHB4O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "Jlas":
/*!*****************************************!*\
  !*** ./src/app/pages/dog/dog.module.ts ***!
  \*****************************************/
/*! exports provided: DogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DogModule", function() { return DogModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "m3Vf");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "i1au");
/* harmony import */ var _dogs_list_dogs_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dogs-list/dogs-list.component */ "EtBk");
/* harmony import */ var _dog_card_dog_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dog-card/dog-card.component */ "pF8U");
/* harmony import */ var _dog_detail_dog_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dog-detail/dog-detail.component */ "6HOl");
/* harmony import */ var _random_dog_image_random_dog_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./random-dog-image/random-dog-image.component */ "BlWo");
/* harmony import */ var _dog_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dog-routing.module */ "kY3z");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class DogModule {
}
DogModule.ɵfac = function DogModule_Factory(t) { return new (t || DogModule)(); };
DogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: DogModule });
DogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _dog_routing_module__WEBPACK_IMPORTED_MODULE_7__["DogRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](DogModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
        _dogs_list_dogs_list_component__WEBPACK_IMPORTED_MODULE_3__["DogsListComponent"],
        _dog_card_dog_card_component__WEBPACK_IMPORTED_MODULE_4__["DogCardComponent"],
        _dog_detail_dog_detail_component__WEBPACK_IMPORTED_MODULE_5__["DogDetailComponent"],
        _random_dog_image_random_dog_image_component__WEBPACK_IMPORTED_MODULE_6__["RandomDogImageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _dog_routing_module__WEBPACK_IMPORTED_MODULE_7__["DogRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pages_dog_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/dog/header/header.component */ "m3Vf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_dog_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dog/footer/footer.component */ "i1au");




class AppComponent {
    constructor() {
        this.title = 'DogRescue';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_pages_dog_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _pages_dog_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _pages_dog_dog_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/dog/dog.module */ "Jlas");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _pages_dog_dog_module__WEBPACK_IMPORTED_MODULE_6__["DogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _pages_dog_dog_module__WEBPACK_IMPORTED_MODULE_6__["DogModule"]] }); })();


/***/ }),

/***/ "i1au":
/*!******************************************************!*\
  !*** ./src/app/pages/dog/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 3, consts: [[1, "container-fluid"], [1, "row", "primary-footer"], [1, "navbar", "d-flex", "footer-links"], [1, "nav-item"], [1, "nav-link", "nav-menu-item", "nav-menu-link", 3, "routerLink"], [1, "row", "secondary-footer"], [1, "fa", "fa-heart", "footer-icon", 3, "routerLink"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "FAQ's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".primary-footer[_ngcontent-%COMP%]{\r\n    background-color: rgb(0, 0, 0);\r\n    justify-content: center;\r\n}\r\n.secondary-footer[_ngcontent-%COMP%]{\r\n    background-color: #53bd63;\r\n    justify-content: center;\r\n    padding: 30px;\r\n}\r\n.footer-icon[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    color: #fff;\r\n}\r\n.user-icon[_ngcontent-%COMP%]{\r\n    color: black;\r\n    font-size: 30px;\r\n}\r\n.nav-menu-link[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n    color: #fff;\r\n}\r\n.footer-links[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    margin-bottom: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmltYXJ5LWZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5zZWNvbmRhcnktZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzYmQ2MztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxufVxyXG4uZm9vdGVyLWljb257XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4udXNlci1pY29ue1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5uYXYtbWVudS1saW5re1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5mb290ZXItbGlua3N7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "kY3z":
/*!*************************************************!*\
  !*** ./src/app/pages/dog/dog-routing.module.ts ***!
  \*************************************************/
/*! exports provided: DogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DogRoutingModule", function() { return DogRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dog_detail_dog_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dog-detail/dog-detail.component */ "6HOl");
/* harmony import */ var _dogs_list_dogs_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dogs-list/dogs-list.component */ "EtBk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: 'home', component: _dogs_list_dogs_list_component__WEBPACK_IMPORTED_MODULE_2__["DogsListComponent"] },
    { path: 'dogs/:id', component: _dog_detail_dog_detail_component__WEBPACK_IMPORTED_MODULE_1__["DogDetailComponent"] },
    { path: '**', component: _dogs_list_dogs_list_component__WEBPACK_IMPORTED_MODULE_2__["DogsListComponent"] }
];
class DogRoutingModule {
}
DogRoutingModule.ɵfac = function DogRoutingModule_Factory(t) { return new (t || DogRoutingModule)(); };
DogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DogRoutingModule });
DogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DogRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "m3Vf":
/*!******************************************************!*\
  !*** ./src/app/pages/dog/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 19, vars: 4, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["href", "#", 1, "fa", "fa-heart", "header-icon"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "m-auto"], [1, "nav-item"], [1, "nav-link", "nav-menu-item", "nav-menu-link", 3, "routerLink"], ["href", "#", 1, "fa", "fa-user-circle", "user-icon"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Our Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Recue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".nav-menu-item[_ngcontent-%COMP%]{\r\n    color: black !important;\r\n}\r\n.hamburger-menu[_ngcontent-%COMP%]{\r\n    color: black;\r\n}\r\n.navbar-section[_ngcontent-%COMP%] {\r\n    padding: 10px 10px;\r\n}\r\n.nav-menu-row[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    margin: auto !important;\r\n    padding: 10px 10px;\r\n}\r\n.nav-menu-logo[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n.innovative-logo-navbar[_ngcontent-%COMP%] {\r\n    width: 295px;\r\n}\r\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    border-top: 1px solid transparent;\r\n    border-image: linear-gradient(to right, #fff 0%, rgb(141, 187, 69) 100%);\r\n    border-image-slice: 1;\r\n    border-left: none;\r\n    border-right: none;\r\n    border-bottom: none;\r\n}\r\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #676767;\r\n    padding-bottom: 0px;\r\n    width: 85%;\r\n}\r\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    border-bottom: 1px solid #80B247;\r\n    color: #80B247;\r\n    width: 96%;\r\n}\r\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n    padding: 5px 15px;\r\n    color: #676767;\r\n    font-family: \"MyriadPro\";\r\n}\r\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: unset;\r\n    color: #80B247 !important;\r\n}\r\n.nav-link[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    padding: 10px 25px !important;\r\n    font-size: 15px;\r\n    width: max-content;\r\n}\r\n.adjust-toggler[_ngcontent-%COMP%] {\r\n    line-height: 0 !important;\r\n}\r\n\r\n.header-icon[_ngcontent-%COMP%]{\r\n    color: green;\r\n    font-size: 30px;\r\n}\r\n.user-icon[_ngcontent-%COMP%]{\r\n    color: black;\r\n    font-size: 30px;\r\n}\r\n.nav-menu-link[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQjtBQUN0QjtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLHdFQUF3RTtJQUN4RSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLFVBQVU7QUFDZDtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQSxvQkFBb0I7QUFHcEI7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBOYXZiYXIgQ1NTIHN0YXJ0cyAqL1xyXG4ubmF2LW1lbnUtaXRlbXtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcbi5oYW1idXJnZXItbWVudXtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4ubmF2YmFyLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG59XHJcbi5uYXYtbWVudS1yb3cge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxufVxyXG4ubmF2LW1lbnUtbG9nbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmlubm92YXRpdmUtbG9nby1uYXZiYXIge1xyXG4gICAgd2lkdGg6IDI5NXB4O1xyXG59XHJcbi5uYXZiYXIgLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm5hdmJhciAubmF2LWl0ZW06aG92ZXIgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLm5hdmJhciAubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmIDAlLCByZ2IoMTQxLCAxODcsIDY5KSAxMDAlKTtcclxuICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG4ubmF2YmFyIC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSBsaSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY3Njc2NztcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICB3aWR0aDogODUlO1xyXG59XHJcbi5uYXZiYXIgLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51IGxpOmhvdmVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODBCMjQ3O1xyXG4gICAgY29sb3I6ICM4MEIyNDc7XHJcbiAgICB3aWR0aDogOTYlO1xyXG59XHJcbi5uYXZiYXIgLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51IGxpIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBjb2xvcjogIzY3Njc2NztcclxuICAgIGZvbnQtZmFtaWx5OiBcIk15cmlhZFByb1wiO1xyXG59XHJcbi5uYXZiYXIgLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51IGxpIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbiAgICBjb2xvcjogIzgwQjI0NyAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXYtbGluayB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxufVxyXG4uYWRqdXN0LXRvZ2dsZXIge1xyXG4gICAgbGluZS1oZWlnaHQ6IDAgIWltcG9ydGFudDtcclxufVxyXG4vKiBOYXZiYXIgQ1NTIGVuZHMgKi9cclxuXHJcblxyXG4uaGVhZGVyLWljb257XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLnVzZXItaWNvbntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4ubmF2LW1lbnUtbGlua3tcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59Il19 */"] });


/***/ }),

/***/ "pF8U":
/*!**********************************************************!*\
  !*** ./src/app/pages/dog/dog-card/dog-card.component.ts ***!
  \**********************************************************/
/*! exports provided: DogCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DogCardComponent", function() { return DogCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_dog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dog.service */ "2D3X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




class DogCardComponent {
    constructor(dogService) {
        this.dogService = dogService;
        this.dogName = '';
        this.dogImage = '';
    }
    ngOnInit() {
        this.dogService.getDogImage(this.dogName).subscribe(image => {
            this.dogImage = image.message;
        });
    }
}
DogCardComponent.ɵfac = function DogCardComponent_Factory(t) { return new (t || DogCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dog_service__WEBPACK_IMPORTED_MODULE_1__["DogService"])); };
DogCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DogCardComponent, selectors: [["app-dog-card"]], inputs: { dogName: "dogName" }, decls: 12, vars: 5, consts: [[1, "card", "dog-card"], [1, "card-img-wrapper"], ["alt", "Dog image", 1, "card-img-top", 3, "src"], [1, "dog-icons", "animate", "text-center"], [1, "btn", "btn-primary", "mb-2", 3, "routerLink"], [1, "card-body", "p-2", "text-center"], [1, "card-title", "mb-1"], [1, "card-text", "text-muted"]], template: function DogCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Go to Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "London");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.dogImage || "./assets/dog-api-logo.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/dogs/", ctx.dogName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 3, ctx.dogName), " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]], styles: [".dog-card[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n    transform: scale(1.2, 1.2);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n    opacity: 0.7;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transform: scale(1.0, 1.0);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n.card-img-wrapper[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.card-img-top[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 270px;\r\n}\r\n\r\n.dog-icons[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: -30%;\r\n    left: 0;\r\n    right: 0;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    opacity: 0;\r\n}\r\n\r\n.card-img-wrapper[_ngcontent-%COMP%]:hover   .dog-icons[_ngcontent-%COMP%] {\r\n    bottom: 0;\r\n    opacity: 1;\r\n}\r\n\r\n.animate[_ngcontent-%COMP%] {\r\n    transition: all 0.3s ease-in-out;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvZy1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixvQ0FBb0M7SUFDcEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixPQUFPO0lBQ1AsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQyIsImZpbGUiOiJkb2ctY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvZy1jYXJkIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmNhcmQgOmhvdmVyIGltZyB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4uY2FyZCBpbWcge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAsIDEuMCk7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxufVxyXG5cclxuLmNhcmQtaW1nLXdyYXBwZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjcwcHg7XHJcbn1cclxuXHJcbi5kb2ctaWNvbnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMzAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2FyZC1pbWctd3JhcHBlcjpob3ZlciAuZG9nLWljb25zIHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5hbmltYXRlIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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