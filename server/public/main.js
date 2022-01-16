(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+rn0":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "VGjC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class LoginComponent {
    constructor(userSrvice) {
        this.userSrvice = userSrvice;
    }
    ngOnInit() {
        this.formLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            "email": new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            "password": new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
    }
    loginSubmit() {
        console.log(this.formLogin.value);
        this.userSrvice.login(this.formLogin.value);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 20, vars: 2, consts: [[1, "row", "page-center"], [1, "with-shadow", "col-sm-4"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "email"], ["formControlName", "email", "id", "email", 1, "form-control"], ["for", "password"], ["formControlName", "password", "id", "password", 1, "form-control"], [1, "btn", "btn-primary", "mt-1", 3, "disabled"], [1, "routs-wrap", "space-around"], ["routerLink", "/signup"], ["routerLink", "/user/example"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.loginSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Sign in with an example user");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formLogin.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "/14H":
/*!*********************************************!*\
  !*** ./src/app/playlist/youtube.service.ts ***!
  \*********************************************/
/*! exports provided: YoutubeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeService", function() { return YoutubeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _song_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./song.model */ "3G+z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loader/loader.service */ "t0Il");






class YoutubeService {
    constructor(http, loaderService) {
        this.http = http;
        this.loaderService = loaderService;
        this.videos = [];
        this.KEY = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].youtubeApiKey;
        this.searchValue = '';
    }
    getFromYoutube(keyWord, limit, catID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loaderService.loading.next(true);
            const res = yield this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${keyWord}&type=video&maxResults=${limit}&key=${this.KEY}`).toPromise();
            console.log("res", res);
            this.videos = res['items'].map(item => (new _song_model__WEBPACK_IMPORTED_MODULE_2__["SongModel"](item.snippet.title, item.snippet.description, item.snippet.thumbnails.default.url, item.snippet.publishedAt, item.id.videoId, catID, '')));
            this.loaderService.loading.next(false);
            return this.videos;
        });
    }
}
YoutubeService.ɵfac = function YoutubeService_Factory(t) { return new (t || YoutubeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"])); };
YoutubeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: YoutubeService, factory: YoutubeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\angular\playlist\client\src\main.ts */"zUnb");


/***/ }),

/***/ "3G+z":
/*!****************************************!*\
  !*** ./src/app/playlist/song.model.ts ***!
  \****************************************/
/*! exports provided: SongModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongModel", function() { return SongModel; });
class SongModel {
    constructor(title, description, imgUrl, publish, src, catID, _id) {
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
        this.publish = publish;
        this.src = src;
        this.catID = catID;
        this._id = _id;
    }
}


/***/ }),

/***/ "3i8e":
/*!*************************************************************!*\
  !*** ./src/app/routes-guard/isloged-route-guard.service.ts ***!
  \*************************************************************/
/*! exports provided: IslogedRouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IslogedRouteGuardService", function() { return IslogedRouteGuardService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user.service */ "VGjC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class IslogedRouteGuardService {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.userService.userDynamic.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(user => {
            console.log("user from guard", user);
            if (localStorage.getItem('token')) {
                return true;
            }
            else {
                return this.router.createUrlTree(['/login']);
            }
        }));
    }
}
IslogedRouteGuardService.ɵfac = function IslogedRouteGuardService_Factory(t) { return new (t || IslogedRouteGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
IslogedRouteGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IslogedRouteGuardService, factory: IslogedRouteGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "3nXK":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UserComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 2, vars: 0, template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "6StN":
/*!****************************************!*\
  !*** ./src/app/auth-header.service.ts ***!
  \****************************************/
/*! exports provided: AuthHeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHeaderService", function() { return AuthHeaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AuthHeaderService {
    // token:string;
    // constructor() {
    //   this.token = localStorage.getItem("token");
    //   console.log("token from header class", this.token);
    //   if(this.token) this.addAuth();
    // }
    intercept(request, next) {
        let token = localStorage.getItem("token");
        console.log("token from header class", token);
        if (!token)
            return next.handle(request);
        ;
        request = request.clone({
            setHeaders: {
                Authorization: token
            }
        });
        return next.handle(request);
    }
}
AuthHeaderService.ɵfac = function AuthHeaderService_Factory(t) { return new (t || AuthHeaderService)(); };
AuthHeaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthHeaderService, factory: AuthHeaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.service */ "VGjC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _all_playlist_all_playlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../all-playlist/all-playlist.component */ "FS+Z");





const _c0 = function (a0) { return { "show": a0 }; };
class HomeComponent {
    constructor(US) {
        this.US = US;
        this.userSubscribe = this.US.userDynamic;
        this.showDropUser = false;
    }
    onClick(element) {
        console.log("element", element);
        if (!element.classList.contains('user-toggle')) {
            this.showDropUser = false;
        }
    }
    ngOnInit() {
        this.userSubscribe.subscribe(user => {
            console.log("user from username", user);
            if (!user)
                return;
            this.username = user.user.username;
        });
    }
    logOut() {
        this.US.logOut();
    }
    ngOnDestroy() {
        this.userSubscribe.subscribe();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_click_HostBindingHandler($event) { return ctx.onClick($event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 18, vars: 7, consts: [[1, "row"], [1, "col-sm-12", "text-center", "hero-head"], ["routerLink", "/"], ["width", "250", "src", "../../assets/logo.png", "alt", "logo"], [1, "col-sm-12", "drop-user", "text-center"], [1, "dropdown", 3, "ngClass"], ["type", "button", 1, "user-toggle", 3, "click"], [1, "fa", "fa-chevron-down"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "m-auto", 3, "ngClass"], ["routerLink", "/profile", 1, "dropdown-item"], [1, "dropdown-item", 3, "click"], [1, "col-sm-12"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_7_listener() { return ctx.showDropUser = !ctx.showDropUser; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_13_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "LogOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-all-playlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.showDropUser));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.showDropUser));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _all_playlist_all_playlist_component__WEBPACK_IMPORTED_MODULE_4__["AllPlaylistComponent"]], styles: [".drop-user[_ngcontent-%COMP%]{\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: auto;\r\n    margin-bottom: 10px;\r\n    position: absolute;\r\n    right: 4%;\r\n}\r\n\r\n.user-toggle[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    padding: 10px 15px;\r\n    border: solid 1px #6c757d;\r\n    border-radius: 6px;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    background-color: transparent;\r\n    text-transform: uppercase;\r\n    line-height: 1.2;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGdCQUFnQjs7QUFFcEIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3AtdXNlcntcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNCU7XHJcbn1cclxuXHJcbi51c2VyLXRvZ2dsZXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzZjNzU3ZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcblxyXG59Il19 */"] });


/***/ }),

/***/ "AeXY":
/*!************************************************!*\
  !*** ./src/app/all-playlist/category.model.ts ***!
  \************************************************/
/*! exports provided: CategoryModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModel", function() { return CategoryModel; });
class CategoryModel {
    constructor(title, description, userID, _id) {
        this.title = title;
        this.description = description;
        this.userID = userID;
        this._id = _id;
        // return {title:this.title, description: this.desc}
    }
    ;
}


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
    apiUrl: "http://localhost:3030/api",
    youtubeApiKey: "AIzaSyCNE13CHQAZyDdQh07yzqEwTFIsPldSslk",
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

/***/ "EN8v":
/*!*************************************************!*\
  !*** ./src/app/user/update/update.component.ts ***!
  \*************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UpdateComponent {
    constructor() { }
    ngOnInit() {
    }
}
UpdateComponent.ɵfac = function UpdateComponent_Factory(t) { return new (t || UpdateComponent)(); };
UpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateComponent, selectors: [["app-update"]], decls: 2, vars: 0, template: function UpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "update works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "FS+Z":
/*!********************************************************!*\
  !*** ./src/app/all-playlist/all-playlist.component.ts ***!
  \********************************************************/
/*! exports provided: AllPlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPlaylistComponent", function() { return AllPlaylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _all_playlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-playlist.service */ "R2ZD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_cat_add_cat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-cat/add-cat.component */ "poVV");





function AllPlaylistComponent_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 10);
} }
const _c0 = function (a1) { return ["playlist", a1]; };
function AllPlaylistComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, cat_r2._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r2.description);
} }
const _c1 = function (a0) { return { "isopen": a0 }; };
const _c2 = function (a0) { return { "show": a0 }; };
const _c3 = function (a0, a1) { return { "show": a0, "wide": a1 }; };
class AllPlaylistComponent {
    constructor(allPS, route) {
        this.allPS = allPS;
        this.route = route;
        this.showFormCat = false;
        this.showList = true;
        this.helpShowList = false;
    }
    onClick(element) {
        console.log("element", element);
        if (!element.classList.contains('open') && this.helpShowList) {
            this.showList = false;
        }
    }
    ;
    ngOnInit() {
        const initUrl = window.location.href;
        if (initUrl.includes('playlist/')) {
            this.helpShowList = true;
            this.showList = false;
        }
        else {
            this.helpShowList = false;
            this.showList = true;
        }
        this.route.events.subscribe((params) => {
            const url = window.location.href;
            if (url.includes('playlist/')) {
                this.helpShowList = true;
            }
            else {
                this.helpShowList = false;
                this.showList = true;
            }
            return;
        });
        this.allPS.loadCategories();
        this.allPS.catsChange.subscribe(cats => {
            console.log('subscribe', cats);
            this.categories = cats;
        });
        this.allPS.showFormCat.subscribe(show => {
            this.showFormCat = show;
        });
    }
    togglePlaylists() {
        if (this.helpShowList)
            this.showList = !this.showList;
    }
}
AllPlaylistComponent.ɵfac = function AllPlaylistComponent_Factory(t) { return new (t || AllPlaylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_all_playlist_service__WEBPACK_IMPORTED_MODULE_1__["AllPlaylistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AllPlaylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllPlaylistComponent, selectors: [["app-all-playlist"]], hostBindings: function AllPlaylistComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllPlaylistComponent_click_HostBindingHandler($event) { return ctx.onClick($event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 14, vars: 12, consts: [[1, "col-sm-3", "playlist-control", 3, "ngClass"], [1, "open", 3, "click"], ["class", "fa fa-chevron-down phone-mode", 4, "ngIf"], [1, "overlay", 3, "ngClass"], [1, "col-12"], [1, "row"], [1, "list-group", "col-sm-3", "playlist-list", 3, "ngClass"], [1, "btn", "btn-primary", "new-playlist", 3, "click"], ["class", "list-group-item playlist-item", "routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "col-sm-9"], [1, "fa", "fa-chevron-down", "phone-mode"], ["routerLinkActive", "active", 1, "list-group-item", "playlist-item", 3, "routerLink"]], template: function AllPlaylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllPlaylistComponent_Template_h1_click_1_listener() { return ctx.togglePlaylists(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " MY PLAYLISTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AllPlaylistComponent_i_3_Template, 1, 0, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-add-cat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllPlaylistComponent_Template_button_click_9_listener() { return ctx.showFormCat = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add New Playlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AllPlaylistComponent_a_11_Template, 5, 5, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, !ctx.helpShowList));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.helpShowList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.showFormCat));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c3, ctx.showList, ctx.helpShowList));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _add_cat_add_cat_component__WEBPACK_IMPORTED_MODULE_4__["AddCatComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".active[_ngcontent-%COMP%]{\r\n    border-right: none;\r\n    background-color: rgb(36, 114, 187);\r\n}\r\n\r\n.playlist-item[_ngcontent-%COMP%]{\r\n    padding: 2% 10%;\r\n}\r\n\r\n.playlist-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n    margin-bottom: 1%;\r\n}\r\n\r\n.playlist-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.playlist-section[_ngcontent-%COMP%]{\r\n        box-shadow: 1px 0px 10px;\r\n        padding: 25px 0;\r\n        margin-left: 30px;\r\n        margin-right: -30px;\r\n}\r\n\r\n.new-playlist[_ngcontent-%COMP%]{\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.playlist-control[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: 'Acme';\r\n}\r\n\r\n@media (max-width:600px) {\r\n    \r\n    .playlist-list[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n\r\n    .playlist-list.show[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        position: absolute;\r\n        width: 92%;\r\n        left: 4%;\r\n        z-index: 2;\r\n    }\r\n\r\n    .playlist-list.show.wide[_ngcontent-%COMP%]{\r\n        width: auto;\r\n    }\r\n\r\n    .new-playlist[_ngcontent-%COMP%]{\r\n        margin-bottom: 0;\r\n    }\r\n    \r\n    .playlist-control[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        text-align: left;\r\n        font-size: 13px;\r\n        padding: 10px 15px;\r\n        border: solid 1px #6c757d;\r\n        border-radius: 6px;\r\n        width: -moz-fit-content;\r\n        width: fit-content;\r\n    }\r\n    .playlist-control.isopen[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        padding: 12px 20px 10px;\r\n        border-bottom: none;\r\n        border-radius: 6px 6px 0 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1wbGF5bGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO1FBQ1Esd0JBQXdCO1FBQ3hCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsbUJBQW1CO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFHQTs7SUFFSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixRQUFRO1FBQ1IsVUFBVTtJQUNkOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQix1QkFBa0I7UUFBbEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSx1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLDBCQUEwQjtJQUM5QjtBQUNKIiwiZmlsZSI6ImFsbC1wbGF5bGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZXtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgMTE0LCAxODcpO1xyXG59XHJcblxyXG4ucGxheWxpc3QtaXRlbXtcclxuICAgIHBhZGRpbmc6IDIlIDEwJTtcclxufVxyXG5cclxuLnBsYXlsaXN0LWl0ZW0gaDV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxufVxyXG5cclxuLnBsYXlsaXN0LWl0ZW0gcHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG4ucGxheWxpc3Qtc2VjdGlvbntcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLTMwcHg7XHJcbn1cclxuXHJcbi5uZXctcGxheWxpc3R7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucGxheWxpc3QtY29udHJvbHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnQWNtZSc7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo2MDBweCkge1xyXG4gICAgXHJcbiAgICAucGxheWxpc3QtbGlzdHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5wbGF5bGlzdC1saXN0LnNob3d7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDkyJTtcclxuICAgICAgICBsZWZ0OiA0JTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wbGF5bGlzdC1saXN0LnNob3cud2lkZXtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAubmV3LXBsYXlsaXN0e1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wbGF5bGlzdC1jb250cm9sIGgxe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNmM3NTdkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICAucGxheWxpc3QtY29udHJvbC5pc29wZW4gaDF7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAyMHB4IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDAgMDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "GIcy":
/*!**********************************************!*\
  !*** ./src/app/playlist/playlist.service.ts ***!
  \**********************************************/
/*! exports provided: PlaylistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistService", function() { return PlaylistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _song_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./song.model */ "3G+z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loader/loader.service */ "t0Il");








class PlaylistService {
    constructor(http, loaderService) {
        this.http = http;
        this.loaderService = loaderService;
        this.playChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.playlist = [];
    }
    loadPlaylist(_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            setTimeout(() => this.loaderService.loading.next(true), 0);
            try {
                const res = yield this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/songs/get`, { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("_id", _id) }).toPromise();
                this.loaderService.loading.next(false);
                console.log("res from get songs", res);
                let songs = [];
                for (let s = 0; s < res["length"]; s++) {
                    songs.push(res[s]);
                }
                this.playlist = songs;
                this.playChange.next(songs);
                return 'go';
            }
            catch (error) {
                this.loaderService.loading.next(false);
                console.log("error from loadPlaylist in playlistService", error.error);
            }
        });
    }
    getSongs() {
        return [...this.playlist];
    }
    addSong(newSong) {
        newSong["_id"] = newSong["catID"];
        console.log("newSong from playlist service", newSong);
        this.loaderService.loading.next(true);
        this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/songs/add`, newSong).subscribe(res => {
            console.log(res);
            const pushSong = new _song_model__WEBPACK_IMPORTED_MODULE_4__["SongModel"](res['title'], res['description'], res['imgUrl'], res['publish'], res['src'], res['catID'], res['_id']);
            this.playlist.push(pushSong);
            this.playChange.next(this.playlist);
            this.loaderService.loading.next(false);
        });
    }
    deleteSong(songID) {
        this.loaderService.loading.next(true);
        this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/songs/delete/${this.playlist[0]["catID"]}/${songID}`).subscribe(res => {
            console.log(res);
            console.log('songs filter');
            const songs = [...this.playlist].filter(song => song['_id'] !== songID);
            console.log('songs filter', songs);
            this.playlist = songs;
            this.playChange.next(songs);
            this.loaderService.loading.next(false);
        });
    }
    deleteSongBySrc(src) {
        const songID = [...this.playlist].filter(song => song.src == src)[0]._id;
        this.deleteSong(songID);
        // this.loaderService.loading.next(true);
        // this.http.delete(`${environment.apiUrl}/songs/delete/${this.playlist[0]["catID"]}/${songID}`).subscribe(res => {
        //   console.log(res);
        //   console.log('songs filter');
        //   const songs = [...this.playlist].filter(song => song['_id'] !== songID);
        //   console.log('songs filter', songs);
        //   this.playlist = songs;
        //   this.playChange.next(songs);
        //   this.loaderService.loading.next(false);
        // })
    }
}
PlaylistService.ɵfac = function PlaylistService_Factory(t) { return new (t || PlaylistService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"])); };
PlaylistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: PlaylistService, factory: PlaylistService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "HMGD":
/*!************************************************!*\
  !*** ./src/app/playlist/playlist.component.ts ***!
  \************************************************/
/*! exports provided: PlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistComponent", function() { return PlaylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _all_playlist_category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../all-playlist/category.model */ "AeXY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _all_playlist_all_playlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../all-playlist/all-playlist.service */ "R2ZD");
/* harmony import */ var _routes_guard_is_admin_route_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes-guard/is-admin-route-guard.service */ "HeAC");
/* harmony import */ var _playlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playlist.service */ "GIcy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _search_song_search_song_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../search-song/search-song.component */ "sWyf");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../safe.pipe */ "Z2+D");
/* harmony import */ var _short_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./short.pipe */ "xnpb");











function PlaylistComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "iframe", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r0.src), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeResourceUrl"]);
} }
function PlaylistComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlaylistComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.playAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Play All");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PlaylistComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h6", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "short");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlaylistComponent_li_9_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const song_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.play(song_r5.src); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlaylistComponent_li_9_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const song_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.deleteSong(song_r5._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", song_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 4, song_r5.title, 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", song_r5.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", song_r5.title);
} }
class PlaylistComponent {
    constructor(Aroute, allPS, isAdmin, playService) {
        this.Aroute = Aroute;
        this.allPS = allPS;
        this.isAdmin = isAdmin;
        this.playService = playService;
        this.src = ``;
        this.playlistDetails = new _all_playlist_category_model__WEBPACK_IMPORTED_MODULE_1__["CategoryModel"]('', '', '', '');
    }
    ngOnInit() {
        this.Aroute.params.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("params._id", params._id);
            this.songs = [];
            this.src = '';
            yield this.playService.loadPlaylist(params._id);
            this.playlistID = params._id;
            this.playlistDetails = this.allPS.getCategory(params._id)[0];
            this.isAdmin.isAdmin(this.playlistDetails.userID);
            console.log("category from the playlist component", this.playlistDetails);
        }));
        this.playService.playChange.subscribe(songs => {
            this.songs = songs;
        });
    }
    playAll() {
        const list = [...this.songs].map(song => song.src).join();
        console.log('list of src', list);
        this.src = `https://www.youtube.com/embed/${this.songs[0].src}?playlist=${list}&autoplay=1`;
    }
    deleteCat() {
        if (confirm("are you shure? you whant to delete me?"))
            this.allPS.deleteCategory(this.playlistID);
    }
    editCat() {
        this.allPS.showFormCat.next(true);
        this.allPS.catEdit.next(this.playlistDetails);
    }
    deleteSong(_id) {
        this.playService.deleteSong(_id);
    }
    play(src) {
        this.src = `https://www.youtube.com/embed/${src}?autoplay=1`;
    }
}
PlaylistComponent.ɵfac = function PlaylistComponent_Factory(t) { return new (t || PlaylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_all_playlist_all_playlist_service__WEBPACK_IMPORTED_MODULE_4__["AllPlaylistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_routes_guard_is_admin_route_guard_service__WEBPACK_IMPORTED_MODULE_5__["IsAdminRouteGuardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_playlist_service__WEBPACK_IMPORTED_MODULE_6__["PlaylistService"])); };
PlaylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PlaylistComponent, selectors: [["app-playlist"]], decls: 22, vars: 4, consts: [[1, "row", "space-around", "with-shadow", "wrap-playlist"], [1, "text-center"], [1, "row", "playlist-section"], [1, "col-sm-5", "row"], [1, "col-sm-12"], ["class", "row", 4, "ngIf"], [1, "list-group"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], ["draggable", "true", "class", "list-group-item d-flex song-li", 4, "ngFor", "ngForOf"], [1, "col-sm-5"], [1, "control-btn", "mb-3"], [1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-trash"], [1, "btn", "btn-dark", 3, "click"], [1, "fa", "fa-pencil"], [1, "row"], [1, "col-sm-12", "form-search-song"], [1, "phone-mode", "w-75", "m-auto"], [1, "col-sm-6"], ["allowfullscreen", "", "allow", "autoplay", 3, "src"], [1, "btn", "btn-success", 3, "click"], ["draggable", "true", 1, "list-group-item", "d-flex", "song-li"], [1, "col-sm-5", 3, "alt"], [1, "col-sm-3", "img-fluid", 3, "src", "alt"], [1, "fa", "fa-play"]], template: function PlaylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PlaylistComponent_div_6_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, PlaylistComponent_button_8_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, PlaylistComponent_li_9_Template, 9, 7, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlaylistComponent_Template_button_click_12_listener() { return ctx.deleteCat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Delete Playlist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlaylistComponent_Template_button_click_15_listener() { return ctx.editCat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Edit Playlist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "app-search-song");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Playlist: ", ctx.playlistDetails.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.src);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.songs.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.songs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _search_song_search_song_component__WEBPACK_IMPORTED_MODULE_8__["SearchSongComponent"]], pipes: [_safe_pipe__WEBPACK_IMPORTED_MODULE_9__["SafePipe"], _short_pipe__WEBPACK_IMPORTED_MODULE_10__["ShortPipe"]], styles: [".wrap-playlist[_ngcontent-%COMP%]{\r\n    margin-left: 30px;\r\n    margin-right: 0;\r\n    text-align: center;\r\n}\r\n\r\n.playlist-section[_ngcontent-%COMP%]{\r\n    padding: 25px 0;\r\n    justify-content: space-between;\r\n}\r\n\r\n.song-li[_ngcontent-%COMP%]{\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 3px;\r\n    border-top: solid 1px #c9c1c1;\r\n}\r\n\r\niframe[_ngcontent-%COMP%]{\r\n        width: 398px;\r\n        height: 275px;\r\n        font-family: 'Acme';\r\n    }\r\n\r\n.song-li[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n}\r\n\r\n.song-li[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]{\r\n    width: 70px;\r\n}\r\n\r\n.control-btn[_ngcontent-%COMP%]{\r\n    text-align: end;\r\n    margin-top: -53px;\r\n}\r\n\r\n.control-btn[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]{\r\n    margin-right: 10px;\r\n}\r\n\r\n@media (max-width:600px) {\r\n    .wrap-playlist[_ngcontent-%COMP%]{\r\n        margin-left: 0;\r\n        margin-top: 12px;\r\n    }\r\n    \r\n    .playlist-section[_ngcontent-%COMP%]{\r\n        flex-direction: column-reverse;\r\n    }\r\n    \r\n    .row.playlist-section[_ngcontent-%COMP%]   .control-btn[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        margin: -25px 0;\r\n    }\r\n    \r\n    .form-search-song[_ngcontent-%COMP%]{\r\n        margin-bottom: 15px;\r\n    }\r\n    \r\n    .with-shadow[_ngcontent-%COMP%]{\r\n        padding: 25px 10px 10px;\r\n    }\r\n\r\n    iframe[_ngcontent-%COMP%]{\r\n        width: 315px;\r\n        height: 250px;\r\n    }\r\n    \r\n    .song-li[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{\r\n        margin: 0;\r\n        flex-basis: 50%;\r\n    }\r\n    \r\n    .song-li[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]{\r\n        width: 50px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXlsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7O0FBRUk7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtJQUN2Qjs7QUFFSjtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLGNBQWM7UUFDZCxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxlQUFlO0lBQ25COztJQUVBO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoicGxheWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi53cmFwLXBsYXlsaXN0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wbGF5bGlzdC1zZWN0aW9ue1xyXG4gICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc29uZy1saXtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2M5YzFjMTtcclxufVxyXG5cclxuICAgIGlmcmFtZXtcclxuICAgICAgICB3aWR0aDogMzk4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNzVweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ0FjbWUnO1xyXG4gICAgfVxyXG5cclxuLnNvbmctbGkgaDZ7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zb25nLWxpIC5pbWctZmx1aWR7XHJcbiAgICB3aWR0aDogNzBweDtcclxufVxyXG5cclxuLmNvbnRyb2wtYnRue1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgbWFyZ2luLXRvcDogLTUzcHg7XHJcbn1cclxuXHJcbi5jb250cm9sLWJ0biAuYnRuLWRhbmdlcntcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpIHtcclxuICAgIC53cmFwLXBsYXlsaXN0e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wbGF5bGlzdC1zZWN0aW9ue1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJvdy5wbGF5bGlzdC1zZWN0aW9uIC5jb250cm9sLWJ0biB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgbWFyZ2luOiAtMjVweCAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZm9ybS1zZWFyY2gtc29uZ3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAud2l0aC1zaGFkb3d7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAxMHB4IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaWZyYW1le1xyXG4gICAgICAgIHdpZHRoOiAzMTVweDtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc29uZy1saSBoNntcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZmxleC1iYXNpczogNTAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc29uZy1saSAuaW1nLWZsdWlke1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "HeAC":
/*!**************************************************************!*\
  !*** ./src/app/routes-guard/is-admin-route-guard.service.ts ***!
  \**************************************************************/
/*! exports provided: IsAdminRouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAdminRouteGuardService", function() { return IsAdminRouteGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.service */ "VGjC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class IsAdminRouteGuardService {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    isAdmin(checkID) {
        this.userService.userDynamic.subscribe(user => {
            console.log("user._id from isAdmin", user.user._id);
            console.log("checkID from isAdmin", checkID);
            if (user.user._id !== checkID) {
                alert("Just the admin of this playlist can access it");
                this.router.navigate([""]);
            }
            else {
            }
        });
    }
}
IsAdminRouteGuardService.ɵfac = function IsAdminRouteGuardService_Factory(t) { return new (t || IsAdminRouteGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
IsAdminRouteGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IsAdminRouteGuardService, factory: IsAdminRouteGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "KNqQ":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "VGjC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function SignupComponent_a_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Signin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Sign in with an example user");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SignupComponent {
    constructor(userService) {
        this.userService = userService;
        this.update = false;
        this.passwordValidation = (control) => {
            console.log("pass input", control.value);
            if (!this.formRegister)
                return;
            const cval = control.value;
            if ((!this.update || cval) && (!cval || cval.length < 6)) {
                console.log('invalid');
                return { 'confirmInvalid': true };
            }
            else {
                console.log('valid');
                return null;
            }
        };
        this.confirmValidation = (control) => {
            console.log(control.value);
            if (!this.formRegister)
                return;
            console.log("password", this.formRegister.get("password").value);
            if (this.formRegister.get("password").value !== control.value) {
                console.log('invalid');
                return { 'confirmInvalid': true };
            }
            else {
                console.log('valid');
                return null;
            }
        };
    }
    ngOnInit() {
        var user = { username: null, email: null, password: null };
        const logedUser = this.userService.getUser();
        if (logedUser.user) {
            this.update = true;
            user = Object.assign(Object.assign({}, user), logedUser.user);
        }
        this.formRegister = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            "username": new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](user.username, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            "email": new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            "password": new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](user.password, [this.passwordValidation]),
            "confirmPassword": new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](user.password, [this.confirmValidation]),
        });
    }
    resetConfirm() {
        this.formRegister.patchValue({ "confirmPassword": '' });
    }
    submitRegister() {
        console.log(this.formRegister.value);
        delete this.formRegister.value.confirmPassword;
        console.log(this.formRegister.value);
        if (!this.update)
            this.userService.signup(this.formRegister.value);
        this.userService.updateUser(this.formRegister.value);
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 26, vars: 7, consts: [[1, "row", "page-center"], [1, "with-shadow", "col-sm-4"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "username"], ["formControlName", "username", 1, "form-control"], ["for", "email"], ["formControlName", "email", "id", "email", 1, "form-control"], ["for", "password"], ["formControlName", "password", "id", "password", 1, "form-control", 3, "input"], ["for", "confirmPassword"], ["formControlName", "confirmPassword", "id", "confirmPassword", 1, "form-control"], [1, "btns-wrap"], [1, "btn", "btn-primary", 3, "disabled"], ["routerLink", "/", "class", "btn btn-danger", 4, "ngIf"], ["class", "routs-wrap space-around", 4, "ngIf"], ["routerLink", "/", 1, "btn", "btn-danger"], [1, "routs-wrap", "space-around"], ["routerLink", "/login"], ["routerLink", "/user/example"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_4_listener() { return ctx.submitRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Username:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function SignupComponent_Template_input_input_16_listener() { return ctx.resetConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Confirm Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SignupComponent_a_24_Template, 2, 0, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SignupComponent_div_25_Template, 5, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.update ? "My Profile" : "REGISTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formRegister);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Password: ", ctx.update ? "(just if you want to change it)" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formRegister.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.update ? "update" : "signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.update);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.update);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".form-group[_ngcontent-%COMP%]{\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.btns-wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n margin-left: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUVIO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmVkO1xyXG59ICovXHJcblxyXG4uZm9ybS1ncm91cHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmJ0bnMtd3JhcCBhe1xyXG4gbWFyZ2luLWxlZnQ6IDVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "R2ZD":
/*!******************************************************!*\
  !*** ./src/app/all-playlist/all-playlist.service.ts ***!
  \******************************************************/
/*! exports provided: AllPlaylistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPlaylistService", function() { return AllPlaylistService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _category_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.model */ "AeXY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loader/loader.service */ "t0Il");







class AllPlaylistService {
    constructor(http, route, loaderService) {
        this.http = http;
        this.route = route;
        this.loaderService = loaderService;
        this.catsChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.catEdit = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.showFormCat = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.categories = [];
    }
    addCategory(cat) {
        this.loaderService.loading.next(true);
        this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/cat/add`, cat).subscribe(res => {
            console.log(res);
            console.log(res['title']);
            const newCat = new _category_model__WEBPACK_IMPORTED_MODULE_2__["CategoryModel"](res['title'], res['description'], res["userID"], res["_id"]);
            this.categories.push(newCat);
            this.catsChange.next(this.categories.slice());
            this.loaderService.loading.next(false);
        });
    }
    loadCategories() {
        this.loaderService.loading.next(true);
        this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/cat/get`).subscribe(res => {
            console.log('res from load', res);
            this.categories = [];
            for (let i = 0; i < res['length']; i++) {
                this.categories.push(res[i]);
            }
            this.catsChange.next(this.categories.slice());
            this.loaderService.loading.next(false);
        });
    }
    getCategory(id) {
        return [...this.categories].filter(cat => cat['_id'] == id);
    }
    deleteCategory(id) {
        this.loaderService.loading.next(true);
        this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/cat/delete/${id}`).subscribe(res => {
            console.log(res);
            const cats = [...this.categories].filter(cat => cat["_id"] !== id);
            this.categories = cats;
            this.catsChange.next(this.categories.slice());
            this.loaderService.loading.next(false);
            this.route.navigateByUrl('/');
        });
    }
    editCategory(cat) {
        this.catEdit.next(cat);
    }
    updateCategory(cat) {
        console.log("cat from service updateCategory", cat);
        this.loaderService.loading.next(true);
        this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/cat/update`, cat).subscribe(res => {
            console.log(res);
            const updatedCats = [...this.categories].filter(c => c["_id"] == cat["_id"] ? cat : c);
            this.categories = updatedCats;
            this.catsChange.next(this.categories.slice());
            this.loaderService.loading.next(false);
        });
    }
}
AllPlaylistService.ɵfac = function AllPlaylistService_Factory(t) { return new (t || AllPlaylistService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"])); };
AllPlaylistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AllPlaylistService, factory: AllPlaylistService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/user.service */ "VGjC");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader/loader.service */ "t0Il");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader/loader.component */ "kQyY");






function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(userService, LoaderService) {
        this.userService = userService;
        this.LoaderService = LoaderService;
        this.title = 'playlist';
        this.loader = this.LoaderService.loading.value;
    }
    ;
    // loaderSubscribe = this.LoaderService.loading;
    ngOnInit() {
        // this.loader = this.LoaderService.loading.value;
        this.userService.signinByToken();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.LoaderService.loading.subscribe(status => {
                this.loader = status;
            });
        }, 0);
    }
    logOut() {
        this.userService.logOut();
    }
    ngOnDestroy() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[1, "row", "lay-out"], [1, "col-sm-12"], ["class", "loader", 4, "ngIf"], [1, "loader"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 0, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"]], styles: [".lay-out[_ngcontent-%COMP%]{\r\n    padding: 0 4%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXktb3V0e1xyXG4gICAgcGFkZGluZzogMCA0JTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "VGjC":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class UserService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.userDynamic = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    }
    getUser() {
        return Object.assign({}, this.user);
    }
    signup(newUser) {
        this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/user/signup`, newUser).subscribe(result => {
            this.user = { token: result['token'], user: result['user'] };
            console.log("this.user", this.user);
            this.userDynamic.next({ token: result['token'], user: result['user'] });
            localStorage.setItem("token", this.user.token);
            this.router.navigateByUrl('/');
        });
    }
    login(data) {
        console.log("data from login service", data);
        this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/user/signin`, data).subscribe(result => {
            console.log(result);
            if (!result)
                return;
            this.user = { token: result['token'], user: result['user'] };
            this.userDynamic.next({ token: result['token'], user: result['user'] });
            console.log("this.user", this.user);
            localStorage.setItem("token", this.user.token);
            this.router.navigateByUrl('/');
        });
    }
    signinByToken() {
        const token = localStorage.getItem("token");
        console.log("token from signin by token", token);
        if (!token || this.user)
            return;
        this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/user/token`).subscribe(result => {
            this.user = { token: result['token'], user: result['user'] };
            this.userDynamic.next({ token: result['token'], user: result['user'] });
            console.log("this.user from token", this.user);
            localStorage.setItem("token", this.user.token);
        });
    }
    updateUser(newUser) {
        console.log("newUser from update service", newUser);
        if (!newUser.password)
            delete newUser.password;
        this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/user/update`, newUser).subscribe(result => {
            console.log(result);
            this.user = Object.assign(Object.assign({}, this.user), { user: { _id: result['_id'], username: result['username'], email: result['email'] } });
            console.log("this.user", this.user);
            this.userDynamic.next(this.user);
            // localStorage.setItem("token",this.user.token);
            this.router.navigateByUrl('/');
        });
    }
    logOut() {
        console.log("userDynamic", this.userDynamic);
        this.user = null;
        this.userDynamic.next(false);
        console.log("userDynamic", this.userDynamic);
        this.router.navigate(["/login"]);
        localStorage.removeItem('token');
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Z2+D":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });


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
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/login/login.component */ "+rn0");
/* harmony import */ var _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/signup/signup.component */ "KNqQ");
/* harmony import */ var _user_update_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/update/update.component */ "EN8v");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _search_song_search_song_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-song/search-song.component */ "sWyf");
/* harmony import */ var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./playlist/playlist.component */ "HMGD");
/* harmony import */ var _all_playlist_all_playlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./all-playlist/all-playlist.component */ "FS+Z");
/* harmony import */ var _auth_header_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth-header.service */ "6StN");
/* harmony import */ var _all_playlist_add_cat_add_cat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./all-playlist/add-cat/add-cat.component */ "poVV");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./safe.pipe */ "Z2+D");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./loader/loader.component */ "kQyY");
/* harmony import */ var _routes_guard_is_admin_route_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./routes-guard/is-admin-route-guard.service */ "HeAC");
/* harmony import */ var _playlist_short_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./playlist/short.pipe */ "xnpb");
/* harmony import */ var _user_example_user_example_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user-example/user-example.component */ "fdMQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _routes_guard_is_admin_route_guard_service__WEBPACK_IMPORTED_MODULE_17__["IsAdminRouteGuardService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _auth_header_service__WEBPACK_IMPORTED_MODULE_13__["AuthHeaderService"],
            multi: true
        }
    ], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
        _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
        _user_update_update_component__WEBPACK_IMPORTED_MODULE_7__["UpdateComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _search_song_search_song_component__WEBPACK_IMPORTED_MODULE_10__["SearchSongComponent"],
        _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_11__["PlaylistComponent"],
        _all_playlist_all_playlist_component__WEBPACK_IMPORTED_MODULE_12__["AllPlaylistComponent"],
        _all_playlist_add_cat_add_cat_component__WEBPACK_IMPORTED_MODULE_14__["AddCatComponent"],
        _safe_pipe__WEBPACK_IMPORTED_MODULE_15__["SafePipe"],
        _loader_loader_component__WEBPACK_IMPORTED_MODULE_16__["LoaderComponent"],
        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _playlist_short_pipe__WEBPACK_IMPORTED_MODULE_18__["ShortPipe"],
        _user_example_user_example_component__WEBPACK_IMPORTED_MODULE_19__["UserExampleComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "fdMQ":
/*!********************************************************!*\
  !*** ./src/app/user-example/user-example.component.ts ***!
  \********************************************************/
/*! exports provided: UserExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserExampleComponent", function() { return UserExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.service */ "VGjC");


class UserExampleComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.login({ email: 'user@example.com', password: "123456" });
        setTimeout(() => this.userService.logOut(), 3000000);
    }
}
UserExampleComponent.ɵfac = function UserExampleComponent_Factory(t) { return new (t || UserExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
UserExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserExampleComponent, selectors: [["app-user-example"]], decls: 2, vars: 0, template: function UserExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWV4YW1wbGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "kQyY":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 10, vars: 0, consts: [[1, "wrap-loader"], [1, "middle"], [1, "bar", "bar1"], [1, "bar", "bar2"], [1, "bar", "bar3"], [1, "bar", "bar4"], [1, "bar", "bar5"], [1, "bar", "bar6"], [1, "bar", "bar7"], [1, "bar", "bar8"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrap-loader[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    background: rgba(0, 0, 0, 0.582);\r\n    position: fixed;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 99;\r\n  }\r\n  .middle[_ngcontent-%COMP%] {\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    position: absolute;\r\n  }\r\n  .bar[_ngcontent-%COMP%] {\r\n    width: 10px;\r\n    height: 70px;\r\n    background: #fff;\r\n    display: inline-block;\r\n    transform-origin: bottom center;\r\n    border-top-right-radius: 20px;\r\n    border-top-left-radius: 20px;\r\n    animation: loader 1.2s linear infinite;\r\n  }\r\n  .bar1[_ngcontent-%COMP%] {\r\n    animation-delay: 0.1s;\r\n  }\r\n  .bar2[_ngcontent-%COMP%] {\r\n    animation-delay: 0.2s;\r\n  }\r\n  .bar3[_ngcontent-%COMP%] {\r\n    animation-delay: 0.3s;\r\n  }\r\n  .bar4[_ngcontent-%COMP%] {\r\n    animation-delay: 0.4s;\r\n  }\r\n  .bar5[_ngcontent-%COMP%] {\r\n    animation-delay: 0.5s;\r\n  }\r\n  .bar6[_ngcontent-%COMP%] {\r\n    animation-delay: 0.6s;\r\n  }\r\n  .bar7[_ngcontent-%COMP%] {\r\n    animation-delay: 0.7s;\r\n  }\r\n  .bar8[_ngcontent-%COMP%] {\r\n    animation-delay: 0.8s;\r\n  }\r\n  @keyframes loader {\r\n    0% {\r\n      transform: scaleY(0.1);\r\n      \r\n    }\r\n    50% {\r\n      transform: scaleY(1);\r\n      background: yellowgreen;\r\n    }\r\n    100% {\r\n      transform: scaleY(0.1);\r\n      background: transparent;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztFQUNiO0VBQ0E7SUFDRSxRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixzQ0FBc0M7RUFDeEM7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBRUE7SUFDRTtNQUNFLHNCQUFzQjtNQUN0QixrQkFBa0I7SUFDcEI7SUFDQTtNQUNFLG9CQUFvQjtNQUNwQix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLHNCQUFzQjtNQUN0Qix1QkFBdUI7SUFDekI7RUFDRiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwLWxvYWRlciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41ODIpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICB9XHJcbiAgLm1pZGRsZSB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICAuYmFyIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBhbmltYXRpb246IGxvYWRlciAxLjJzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmJhcjEge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xyXG4gIH1cclxuICAuYmFyMiB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgfVxyXG4gIC5iYXIzIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcclxuICB9XHJcbiAgLmJhcjQge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gIH1cclxuICAuYmFyNSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XHJcbiAgfVxyXG4gIC5iYXI2IHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICB9XHJcbiAgLmJhcjcge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjdzO1xyXG4gIH1cclxuICAuYmFyOCB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgbG9hZGVyIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMC4xKTtcclxuICAgICAgLyogYmFja2dyb3VuZDogOyAqL1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHllbGxvd2dyZWVuO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuMSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ "mSCq":
/*!******************************************************!*\
  !*** ./src/app/routes-guard/is-loged-out.service.ts ***!
  \******************************************************/
/*! exports provided: IsLogedOutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLogedOutService", function() { return IsLogedOutService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user.service */ "VGjC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class IsLogedOutService {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.userService.userDynamic.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(user => {
            console.log("user from is loged out guard", user);
            if (!localStorage.getItem('token')) {
                return true;
            }
            else {
                return this.router.createUrlTree(['/']);
            }
        }));
    }
}
IsLogedOutService.ɵfac = function IsLogedOutService_Factory(t) { return new (t || IsLogedOutService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
IsLogedOutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IsLogedOutService, factory: IsLogedOutService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "poVV":
/*!***********************************************************!*\
  !*** ./src/app/all-playlist/add-cat/add-cat.component.ts ***!
  \***********************************************************/
/*! exports provided: AddCatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCatComponent", function() { return AddCatComponent; });
/* harmony import */ var _category_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../category.model */ "AeXY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _all_playlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../all-playlist.service */ "R2ZD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




const _c0 = ["refFC"];
class AddCatComponent {
    constructor(allPService) {
        this.allPService = allPService;
        this.updateStatus = false;
    }
    ngOnInit() {
        this.allPService.catEdit.subscribe(cat => {
            console.log('cat to edit from add cat', cat);
            this.updateStatus = true;
            this.catEditing = cat;
            this.title = cat['title'];
            console.log("this.title", this.title);
            console.log("cat['title']", cat['title']);
            this.description = cat['description'];
        });
    }
    cancel() {
        this.updateStatus = false;
        this.allPService.showFormCat.next(false);
        this.refFC.reset();
    }
    submitFormCat(fCat) {
        console.log(this.title);
        console.log(fCat.value);
        if (this.updateStatus) {
            this.catEditing["title"] = this.title;
            this.catEditing["description"] = this.description;
            const newCat = this.catEditing;
            this.allPService.updateCategory(newCat);
        }
        else {
            const newCat = new _category_model__WEBPACK_IMPORTED_MODULE_0__["CategoryModel"](this.title, this.description, '', '');
            this.allPService.addCategory(newCat);
        }
        this.cancel();
    }
}
AddCatComponent.ɵfac = function AddCatComponent_Factory(t) { return new (t || AddCatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_all_playlist_service__WEBPACK_IMPORTED_MODULE_2__["AllPlaylistService"])); };
AddCatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddCatComponent, selectors: [["app-add-cat"]], viewQuery: function AddCatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.refFC = _t.first);
    } }, decls: 18, vars: 3, consts: [[1, ""], [1, "row", "form-cat", "in-overlay"], [1, "col-sm-4", "m-auto"], [3, "ngSubmit"], ["refFC", "ngForm"], [1, "form-group"], ["for", "title"], ["id", "title", "name", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "desc"], ["id", "desc", "name", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn-wrap"], [1, "btn", "btn-primary", "col-sm-5", 3, "disabled"], ["type", "button", 1, "btn", "btn-danger", "col-sm-5", 3, "click"]], template: function AddCatComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddCatComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); return ctx.submitFormCat(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCatComponent_Template_input_ngModelChange_8_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCatComponent_Template_input_ngModelChange_12_listener($event) { return ctx.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddCatComponent_Template_button_click_16_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.title);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".form-cat[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    color: white;\r\n    margin: 1% 0;\r\n}\r\n\r\n.btn-wrap[_ngcontent-%COMP%]{\r\n    justify-content: space-between;\r\n    display: flex;\r\n    margin-top: 2%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGFBQWE7SUFDYixjQUFjO0FBQ2xCIiwiZmlsZSI6ImFkZC1jYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNhdCBsYWJlbCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDElIDA7XHJcbn1cclxuXHJcbi5idG4td3JhcHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "sWyf":
/*!******************************************************!*\
  !*** ./src/app/search-song/search-song.component.ts ***!
  \******************************************************/
/*! exports provided: SearchSongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSongComponent", function() { return SearchSongComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _playlist_song_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../playlist/song.model */ "3G+z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _playlist_youtube_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../playlist/youtube.service */ "/14H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _playlist_playlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../playlist/playlist.service */ "GIcy");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _playlist_short_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../playlist/short.pipe */ "xnpb");









function SearchSongComponent_div_7_li_9_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchSongComponent_div_7_li_9_span_8_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const video_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r7.addToPlaylist(video_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchSongComponent_div_7_li_9_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchSongComponent_div_7_li_9_ng_template_10_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const video_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.deleteSong(video_r2.src); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchSongComponent_div_7_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "short");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SearchSongComponent_div_7_li_9_span_8_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SearchSongComponent_div_7_li_9_ng_template_10_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r2 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 5, video_r2.title, 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", video_r2.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", video_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.notExist(video_r2.src))("ngIfElse", _r5);
} }
function SearchSongComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchSongComponent_div_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.closeTubeResult(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SearchSongComponent_div_7_li_9_Template, 13, 8, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchSongComponent_div_7_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.moreResults(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "More Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.videos);
} }
class SearchSongComponent {
    constructor(tubeSrvice, activatedRoute, playService) {
        this.tubeSrvice = tubeSrvice;
        this.activatedRoute = activatedRoute;
        this.playService = playService;
        this.videos = [];
        this.searchValue = '';
        this.resultLength = 10;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.catID = params._id;
            this.videos = [];
            this.searchValue = '';
        });
    }
    searchSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const resVideo = yield this.tubeSrvice.getFromYoutube(this.searchValue, this.resultLength, this.catID);
            console.log('resVideo', resVideo);
            this.videos = resVideo;
        });
    }
    moreResults() {
        this.resultLength += 10;
        this.searchSubmit();
    }
    addToPlaylist(song) {
        const newSong = new _playlist_song_model__WEBPACK_IMPORTED_MODULE_1__["SongModel"](song.title, song.description, song.imgUrl, song.publish, song.src, song.catID, song._id);
        console.log(newSong);
        this.playService.addSong(newSong);
    }
    notExist(src) {
        const exist = this.playService.getSongs().filter(song => song['src'] == src);
        return exist.length > 0 ? false : true;
    }
    deleteSong(src) {
        this.playService.deleteSongBySrc(src);
    }
    closeTubeResult() {
        this.videos = [];
        this.searchValue = '';
    }
}
SearchSongComponent.ɵfac = function SearchSongComponent_Factory(t) { return new (t || SearchSongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_playlist_youtube_service__WEBPACK_IMPORTED_MODULE_3__["YoutubeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_playlist_playlist_service__WEBPACK_IMPORTED_MODULE_5__["PlaylistService"])); };
SearchSongComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchSongComponent, selectors: [["app-search-song"]], decls: 8, vars: 2, consts: [[1, "row", "form-search"], [1, "col-sm-12", "text-center"], [1, "row", 3, "ngSubmit"], [1, "form-group", "col-9"], ["placeholder", "import songs to the playlist...", "name", "search-text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "col-3"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-sm-12", "tube-result"], [1, "text-end", "wrap-close-result"], [1, "btn", "btn-danger", "float-right", 3, "click"], [1, "list-group"], ["class", "list-group-item d-flex song-li", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "more-res", 3, "click"], [1, "list-group-item", "d-flex", "song-li"], [1, "col-sm-8"], [1, "img-fluid", "col-sm-3", 3, "src", "alt"], ["class", "btn btn-success", 3, "click", 4, "ngIf", "ngIfElse"], ["isExist", ""], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function SearchSongComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SearchSongComponent_Template_form_ngSubmit_2_listener() { return ctx.searchSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchSongComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Search...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SearchSongComponent_div_7_Template, 15, 1, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.videos.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [_playlist_short_pipe__WEBPACK_IMPORTED_MODULE_8__["ShortPipe"]], styles: ["pre[_ngcontent-%COMP%]{\r\n    overflow-x: hidden;\r\n    height: 60vh;\r\n    font-family: cursive;\r\n    white-space: pre-wrap;\r\n}\r\n\r\n.tube-result[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]{\r\n    background-color: green;\r\n}\r\n\r\n.wrap-close-result[_ngcontent-%COMP%]{\r\n    margin: 4px 20px -20px;\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n\r\npre[_ngcontent-%COMP%]   li.list-group-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    padding: 2px;\r\n    margin: 0;\r\n    text-align: center;\r\n}\r\n\r\npre[_ngcontent-%COMP%]   li.list-group-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n}\r\n\r\npre[_ngcontent-%COMP%]   li.list-group-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    font-size: 13px;\r\n    letter-spacing: 0px;\r\n    font-family: arial;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\npre[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n@media (max-width:600px) {\r\n    \r\n    .form-search[_ngcontent-%COMP%]{\r\n        margin-bottom: 20px;\r\n    }\r\n    \r\n    .list-group-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{\r\n        margin: 0;\r\n        flex-basis: 65%;\r\n    }\r\n    \r\n    pre[_ngcontent-%COMP%]   li.list-group-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 50px;\r\n    }\r\n\r\n    .more-res[_ngcontent-%COMP%]{\r\n        display: block;\r\n        margin: -20px auto -40px;\r\n    }\r\n    \r\n    .wrap-close-result[_ngcontent-%COMP%]{\r\n        margin: 10px 0 -20px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1zb25nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxlQUFlO0lBQ25COztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksY0FBYztRQUNkLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLG9CQUFvQjtJQUN4QjtBQUNKIiwiZmlsZSI6InNlYXJjaC1zb25nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwcmV7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG5cclxuLnR1YmUtcmVzdWx0ID4gLmJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4ud3JhcC1jbG9zZS1yZXN1bHR7XHJcbiAgICBtYXJnaW46IDRweCAyMHB4IC0yMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxucHJlIGxpLmxpc3QtZ3JvdXAtaXRlbSBoNiB7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnByZSBsaS5saXN0LWdyb3VwLWl0ZW0gaW1nIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG5wcmUgbGkubGlzdC1ncm91cC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxucHJlIGxpIC5idG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo2MDBweCkge1xyXG4gICAgXHJcbiAgICAuZm9ybS1zZWFyY2h7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxpc3QtZ3JvdXAtaXRlbSBoNntcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZmxleC1iYXNpczogNjUlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcmUgbGkubGlzdC1ncm91cC1pdGVtIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vcmUtcmVze1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogLTIwcHggYXV0byAtNDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLndyYXAtY2xvc2UtcmVzdWx0e1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwIC0yMHB4O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "t0Il":
/*!******************************************!*\
  !*** ./src/app/loader/loader.service.ts ***!
  \******************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoaderService {
    constructor() {
        this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _routes_guard_isloged_route_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes-guard/isloged-route-guard.service */ "3i8e");
/* harmony import */ var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playlist/playlist.component */ "HMGD");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/login/login.component */ "+rn0");
/* harmony import */ var _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/signup/signup.component */ "KNqQ");
/* harmony import */ var _user_example_user_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-example/user-example.component */ "fdMQ");
/* harmony import */ var _routes_guard_is_loged_out_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes-guard/is-loged-out.service */ "mSCq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_routes_guard_isloged_route_guard_service__WEBPACK_IMPORTED_MODULE_2__["IslogedRouteGuardService"]], children: [
            { path: 'playlist/:_id', component: _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_3__["PlaylistComponent"] },
        ] },
    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], canActivate: [_routes_guard_is_loged_out_service__WEBPACK_IMPORTED_MODULE_7__["IsLogedOutService"]] },
    { path: 'signup', component: _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'profile', component: _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'user/example', component: _user_example_user_example_component__WEBPACK_IMPORTED_MODULE_6__["UserExampleComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xnpb":
/*!****************************************!*\
  !*** ./src/app/playlist/short.pipe.ts ***!
  \****************************************/
/*! exports provided: ShortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortPipe", function() { return ShortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ShortPipe {
    transform(value, ...args) {
        const shortVal = value.slice(0, args[0]);
        return shortVal;
    }
}
ShortPipe.ɵfac = function ShortPipe_Factory(t) { return new (t || ShortPipe)(); };
ShortPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "short", type: ShortPipe, pure: true });


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