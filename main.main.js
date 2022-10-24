"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/website */ "./src/modules/website.js");


(0,_modules_website__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_placeholder_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/placeholder.png */ "./src/img/placeholder.png");
/* harmony import */ var _img_old_typical_phone_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/old-typical-phone.png */ "./src/img/old-typical-phone.png");
/* harmony import */ var _img_clock_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/clock.png */ "./src/img/clock.png");




function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const info = document.createElement('ul');
    info.classList.add('info');

    const address = document.createElement('li');
    address.classList.add('address');

    const addressIcon = document.createElement('img');
    addressIcon.src = _img_placeholder_png__WEBPACK_IMPORTED_MODULE_0__;
    addressIcon.alt = 'location';

    const addressText = document.createElement('p');
    addressText.textContent = 'Bangkok, Thailand';

    address.appendChild(addressIcon);
    address.appendChild(addressText);
    info.appendChild(address);
    
    const time = document.createElement('li');
    time.classList.add('time');
    const timeIcon = document.createElement('img');
    timeIcon.src = _img_clock_png__WEBPACK_IMPORTED_MODULE_2__;
    timeIcon.alt = 'open time';

    const timeText = document.createElement('p')
    timeText.textContent = 'Open everyday 24hrs';

    time.appendChild(timeIcon);
    time.appendChild(timeText);
    info.appendChild(time);

    const phone = document.createElement('li');
    time.classList.add('phone');
    const phoneIcon = document.createElement('img');
    phoneIcon.src = _img_old_typical_phone_png__WEBPACK_IMPORTED_MODULE_1__;
    phoneIcon.alt = 'phone number';

    const phoneText = document.createElement('p')
    phoneText.textContent = '12-123-12-121';

    phone.appendChild(phoneIcon);
    phone.appendChild(phoneText);
    info.appendChild(phone);

    contact.appendChild(info);

    return contact;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_meal_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/meal.jpg */ "./src/img/meal.jpg");


function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');
    home.innerHTML = 
    `<div id="home" class="home">
    <div class="description">
    <h1>Discover</h1>
    <h2>Comfort Food with a Twist</h2>
    <p>We serve best authentic Thai cuisine and expectations for cleanliness, service and decor to enjoy at authentic thai restaurant.</p>
    </div>

    <div class = "picture">
    <img class = "meal" src="https://content.api.news/v3/images/bin/a5a6b73ca2ab4a09aead12daad1bc9ee" />
    </div>
    </div>`;

    return home;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createMenuItem(
        'https://www.thong-lor.com/images/online-menu/food-menu/appetizer/moo-krong-kraeng.jpg',
        'Moo Krong Kraeng',
        'Pork balls with caramelized coating. They are soft on the inside but slightly crispy on the outside, and served with syrup.'
    ));
    menu.appendChild(createMenuItem(
        'https://www.thong-lor.com/images/online-menu/food-menu/chili-dip/nam-prik-goong-siab.jpg',
        'Nam Prik Goong Siab',
        'Smoked shrimp chili dip with shrimp paste relish.'
    ));
    menu.appendChild(createMenuItem(
        'https://www.thong-lor.com/images/online-menu/food-menu/grilled-dishes/thai-wagyu-yang-samunprai.jpg',
        'Thai Wagyu Yang Samunprai',
        'Thai-style roast wagyu beef with herbs.'
    ));
        menu.appendChild(createMenuItem(
        'https://www.thong-lor.com/images/online-menu/food-menu/thai-curry/gaeng-som-pu-kai-sai-nor-mai.jpg',
        'Gaeng Som Pu Kai Sai Nor Mai',
        'Spicy and sour yellow curry with serrated mud crab and pickled bamboo shoots.'
    ));
    menu.appendChild(createMenuItem(
        'https://www.thong-lor.com/images/online-menu/thai-dessert/pai-lin-krob.jpg',
        'Pai Lin Krob',
        'Water chestnut colored with butterfly pea flowers in coconut milk.'
    ));
    menu.appendChild(createMenuItem(
        'https://www.thong-lor.com/images/online-menu/thai-dessert/kanom-co-kati-sod-khao-pong.jpg',
        'Kanom Co Kati Sod Khao Pong',
        'Coconut caramelized sugar dumplings with coconut milk.'
    ));
    return menu;
}

function createMenuItem(src, name, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodImage = document.createElement('img');
    foodImage.setAttribute('src', src);
     

    const foodName = document.createElement('h3');
    foodName.textContent = name;

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/modules/website.js":
/*!********************************!*\
  !*** ./src/modules/website.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/modules/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/modules/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/modules/contact.js");
/* harmony import */ var _img_logo_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/logo.jpg */ "./src/img/logo.jpg");






function createHeader() {
const header = document.createElement('header');
header.classList.add('header');

const logoImg = new Image();
logoImg.classList.add('logo')
logoImg.src = _img_logo_jpg__WEBPACK_IMPORTED_MODULE_3__;

header.appendChild(logoImg);
header.appendChild(createNav());

return header;
}

function createNav() {
    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('button-nav');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return setActiveBtn(homeBtn);
        (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('button-nav');
    menuBtn.textContent = 'Menu'
    menuBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return setActiveBtn(menuBtn);
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('button-nav');
    contactBtn.textContent = 'Contact'
    contactBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return setActiveBtn(contactBtn);
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

function setActiveBtn(button) {
    const buttons = document.querySelectorAll('.button-nav');

    buttons.forEach((button) => {
        if(button !== this) {
            button.classList.remove('active');
        }
    });

    button.classList.add('active');
}

    function createMain() {
        const main = document.createElement('main');
        main.classList.add('main');
        main.setAttribute('id', 'main');
        return main;
    }

    function createFooter() {
        const footer = document.createElement('footer');
        footer.classList.add('footer');

        const cr = document.createElement('p');
        cr.textContent = 'Created by Chanatinart.k';

        footer.appendChild(cr);

        return footer;
    }

    function initWebsite() {
        const content = document.querySelector('#content');

        content.appendChild(createHeader());
        content.appendChild(createMain());
        content.appendChild(createFooter());

        setActiveBtn(document.querySelector('.button-nav'));
        (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initWebsite);

/***/ }),

/***/ "./src/img/clock.png":
/*!***************************!*\
  !*** ./src/img/clock.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb0d7ea672d59973d573.png";

/***/ }),

/***/ "./src/img/logo.jpg":
/*!**************************!*\
  !*** ./src/img/logo.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c07d7184b879c73f4ab1.jpg";

/***/ }),

/***/ "./src/img/meal.jpg":
/*!**************************!*\
  !*** ./src/img/meal.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d15a57d205be851597e6.jpg";

/***/ }),

/***/ "./src/img/old-typical-phone.png":
/*!***************************************!*\
  !*** ./src/img/old-typical-phone.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c7085a28814854e0fad.png";

/***/ }),

/***/ "./src/img/placeholder.png":
/*!*********************************!*\
  !*** ./src/img/placeholder.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "475513da1d9b9d4e5ee6.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTRDOztBQUU1Qyw0REFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGcUM7QUFDRztBQUNoQjs7QUFFbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixpREFBVztBQUNqQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJDQUFJO0FBQ3ZCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1REFBUTtBQUM1Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDOURTOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJ2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFTztBQUNBO0FBQ007QUFDRDs7O0FBR25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYywwQ0FBSTs7QUFFbEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVE7QUFDaEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBUTtBQUNoQixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFXO0FBQ25CLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsaURBQVE7QUFDaEI7O0FBRUEsSUFBSSxpRUFBZSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3dlYnNpdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGluaXRXZWJzaXRlIGZyb20gXCIuL21vZHVsZXMvd2Vic2l0ZVwiO1xuXG5pbml0V2Vic2l0ZSgpOyIsImltcG9ydCBwbGFjZWhvbGRlciBmcm9tIFwiLi4vaW1nL3BsYWNlaG9sZGVyLnBuZ1wiXG5pbXBvcnQgcGhvbmVOdW0gZnJvbSBcIi4uL2ltZy9vbGQtdHlwaWNhbC1waG9uZS5wbmdcIlxuaW1wb3J0IG9wZW4gZnJvbSBcIi4uL2ltZy9jbG9jay5wbmdcIlxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzJyk7XG5cbiAgICBjb25zdCBhZGRyZXNzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGFkZHJlc3NJY29uLnNyYyA9IHBsYWNlaG9sZGVyO1xuICAgIGFkZHJlc3NJY29uLmFsdCA9ICdsb2NhdGlvbic7XG5cbiAgICBjb25zdCBhZGRyZXNzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGRyZXNzVGV4dC50ZXh0Q29udGVudCA9ICdCYW5na29rLCBUaGFpbGFuZCc7XG5cbiAgICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3NJY29uKTtcbiAgICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3NUZXh0KTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgIFxuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHRpbWUuY2xhc3NMaXN0LmFkZCgndGltZScpO1xuICAgIGNvbnN0IHRpbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGltZUljb24uc3JjID0gb3BlbjtcbiAgICB0aW1lSWNvbi5hbHQgPSAnb3BlbiB0aW1lJztcblxuICAgIGNvbnN0IHRpbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGltZVRleHQudGV4dENvbnRlbnQgPSAnT3BlbiBldmVyeWRheSAyNGhycyc7XG5cbiAgICB0aW1lLmFwcGVuZENoaWxkKHRpbWVJY29uKTtcbiAgICB0aW1lLmFwcGVuZENoaWxkKHRpbWVUZXh0KTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKHRpbWUpO1xuXG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHRpbWUuY2xhc3NMaXN0LmFkZCgncGhvbmUnKTtcbiAgICBjb25zdCBwaG9uZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwaG9uZUljb24uc3JjID0gcGhvbmVOdW07XG4gICAgcGhvbmVJY29uLmFsdCA9ICdwaG9uZSBudW1iZXInO1xuXG4gICAgY29uc3QgcGhvbmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGhvbmVUZXh0LnRleHRDb250ZW50ID0gJzEyLTEyMy0xMi0xMjEnO1xuXG4gICAgcGhvbmUuYXBwZW5kQ2hpbGQocGhvbmVJY29uKTtcbiAgICBwaG9uZS5hcHBlbmRDaGlsZChwaG9uZVRleHQpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQocGhvbmUpO1xuXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIHJldHVybiBjb250YWN0O1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDsiLCJpbXBvcnQgbWVhbCBmcm9tICcuLi9pbWcvbWVhbC5qcGcnO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgICBob21lLmlubmVySFRNTCA9IFxuICAgIGA8ZGl2IGlkPVwiaG9tZVwiIGNsYXNzPVwiaG9tZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgIDxoMT5EaXNjb3ZlcjwvaDE+XG4gICAgPGgyPkNvbWZvcnQgRm9vZCB3aXRoIGEgVHdpc3Q8L2gyPlxuICAgIDxwPldlIHNlcnZlIGJlc3QgYXV0aGVudGljIFRoYWkgY3Vpc2luZSBhbmQgZXhwZWN0YXRpb25zIGZvciBjbGVhbmxpbmVzcywgc2VydmljZSBhbmQgZGVjb3IgdG8gZW5qb3kgYXQgYXV0aGVudGljIHRoYWkgcmVzdGF1cmFudC48L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzID0gXCJwaWN0dXJlXCI+XG4gICAgPGltZyBjbGFzcyA9IFwibWVhbFwiIHNyYz1cImh0dHBzOi8vY29udGVudC5hcGkubmV3cy92My9pbWFnZXMvYmluL2E1YTZiNzNjYTJhYjRhMDlhZWFkMTJkYWFkMWJjOWVlXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xuXG4gICAgcmV0dXJuIGhvbWU7XG59XG5cbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsIlxuZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAnaHR0cHM6Ly93d3cudGhvbmctbG9yLmNvbS9pbWFnZXMvb25saW5lLW1lbnUvZm9vZC1tZW51L2FwcGV0aXplci9tb28ta3Jvbmcta3JhZW5nLmpwZycsXG4gICAgICAgICdNb28gS3JvbmcgS3JhZW5nJyxcbiAgICAgICAgJ1BvcmsgYmFsbHMgd2l0aCBjYXJhbWVsaXplZCBjb2F0aW5nLiBUaGV5IGFyZSBzb2Z0IG9uIHRoZSBpbnNpZGUgYnV0IHNsaWdodGx5IGNyaXNweSBvbiB0aGUgb3V0c2lkZSwgYW5kIHNlcnZlZCB3aXRoIHN5cnVwLidcbiAgICApKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAnaHR0cHM6Ly93d3cudGhvbmctbG9yLmNvbS9pbWFnZXMvb25saW5lLW1lbnUvZm9vZC1tZW51L2NoaWxpLWRpcC9uYW0tcHJpay1nb29uZy1zaWFiLmpwZycsXG4gICAgICAgICdOYW0gUHJpayBHb29uZyBTaWFiJyxcbiAgICAgICAgJ1Ntb2tlZCBzaHJpbXAgY2hpbGkgZGlwIHdpdGggc2hyaW1wIHBhc3RlIHJlbGlzaC4nXG4gICAgKSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcbiAgICAgICAgJ2h0dHBzOi8vd3d3LnRob25nLWxvci5jb20vaW1hZ2VzL29ubGluZS1tZW51L2Zvb2QtbWVudS9ncmlsbGVkLWRpc2hlcy90aGFpLXdhZ3l1LXlhbmctc2FtdW5wcmFpLmpwZycsXG4gICAgICAgICdUaGFpIFdhZ3l1IFlhbmcgU2FtdW5wcmFpJyxcbiAgICAgICAgJ1RoYWktc3R5bGUgcm9hc3Qgd2FneXUgYmVlZiB3aXRoIGhlcmJzLidcbiAgICApKTtcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcbiAgICAgICAgJ2h0dHBzOi8vd3d3LnRob25nLWxvci5jb20vaW1hZ2VzL29ubGluZS1tZW51L2Zvb2QtbWVudS90aGFpLWN1cnJ5L2dhZW5nLXNvbS1wdS1rYWktc2FpLW5vci1tYWkuanBnJyxcbiAgICAgICAgJ0dhZW5nIFNvbSBQdSBLYWkgU2FpIE5vciBNYWknLFxuICAgICAgICAnU3BpY3kgYW5kIHNvdXIgeWVsbG93IGN1cnJ5IHdpdGggc2VycmF0ZWQgbXVkIGNyYWIgYW5kIHBpY2tsZWQgYmFtYm9vIHNob290cy4nXG4gICAgKSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcbiAgICAgICAgJ2h0dHBzOi8vd3d3LnRob25nLWxvci5jb20vaW1hZ2VzL29ubGluZS1tZW51L3RoYWktZGVzc2VydC9wYWktbGluLWtyb2IuanBnJyxcbiAgICAgICAgJ1BhaSBMaW4gS3JvYicsXG4gICAgICAgICdXYXRlciBjaGVzdG51dCBjb2xvcmVkIHdpdGggYnV0dGVyZmx5IHBlYSBmbG93ZXJzIGluIGNvY29udXQgbWlsay4nXG4gICAgKSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcbiAgICAgICAgJ2h0dHBzOi8vd3d3LnRob25nLWxvci5jb20vaW1hZ2VzL29ubGluZS1tZW51L3RoYWktZGVzc2VydC9rYW5vbS1jby1rYXRpLXNvZC1raGFvLXBvbmcuanBnJyxcbiAgICAgICAgJ0thbm9tIENvIEthdGkgU29kIEtoYW8gUG9uZycsXG4gICAgICAgICdDb2NvbnV0IGNhcmFtZWxpemVkIHN1Z2FyIGR1bXBsaW5ncyB3aXRoIGNvY29udXQgbWlsay4nXG4gICAgKSk7XG4gICAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKHNyYywgbmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgY29uc3QgZm9vZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZm9vZEltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgICAgXG5cbiAgICBjb25zdCBmb29kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZm9vZE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgY29uc3QgZm9vZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb2REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZEltYWdlKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kTmFtZSk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZERlc2NyaXB0aW9uKTtcblxuICAgIHJldHVybiBtZW51SXRlbTtcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7IiwiaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IGxvZ28gZnJvbSBcIi4uL2ltZy9sb2dvLmpwZ1wiO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG5jb25zdCBsb2dvSW1nID0gbmV3IEltYWdlKCk7XG5sb2dvSW1nLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKVxubG9nb0ltZy5zcmMgPSBsb2dvO1xuXG5oZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XG5oZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuXG5yZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24tbmF2Jyk7XG4gICAgaG9tZUJ0bi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybiBzZXRBY3RpdmVCdG4oaG9tZUJ0bik7XG4gICAgICAgIGxvYWRIb21lKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24tbmF2Jyk7XG4gICAgbWVudUJ0bi50ZXh0Q29udGVudCA9ICdNZW51J1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuIHNldEFjdGl2ZUJ0bihtZW51QnRuKTtcbiAgICAgICAgbG9hZE1lbnUoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXYnKTtcbiAgICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnXG4gICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm4gc2V0QWN0aXZlQnRuKGNvbnRhY3RCdG4pO1xuICAgICAgICBsb2FkQ29udGFjdCgpO1xuICAgIH0pO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG5cbiAgICByZXR1cm4gbmF2O1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVCdG4oYnV0dG9uKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tbmF2Jyk7XG5cbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBpZihidXR0b24gIT09IHRoaXMpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG4gICAgICAgIHJldHVybiBtYWluO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICAgICAgICBjb25zdCBjciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY3IudGV4dENvbnRlbnQgPSAnQ3JlYXRlZCBieSBDaGFuYXRpbmFydC5rJztcblxuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY3IpO1xuXG4gICAgICAgIHJldHVybiBmb290ZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFdlYnNpdGUoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gICAgICAgIHNldEFjdGl2ZUJ0bihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLW5hdicpKTtcbiAgICAgICAgbG9hZEhvbWUoKTtcbiAgICB9XG5cbiAgICBleHBvcnQgZGVmYXVsdCBpbml0V2Vic2l0ZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=