/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet loadContact = () => {\n    let main = document.querySelector('#main-content');\n    let headline = document.querySelector('.headline');\n    headline.textContent = \"Contact\";\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction loadHome(main) {\n    main.innerHTML = '';\n    \n    let body = document.querySelector('body');\n    body.style.cssText = 'height: 100vh';\n\n    let headline = document.createElement('h1');\n    let about = document.createElement('p');\n\n    headline.textContent = 'Restaurant';\n    headline.classList.add('headline');\n\n    about.innerHTML = 'The coolest place to retire after<br>' +\n        'a long day of work to have a cup of coffee.';\n    about.classList.add('about');\n\n    main.append(headline, about);\n}\n\nlet initializeContent = () => {\n    let content = document.querySelector('#content');\n    // content.innerHTML = '';\n\n    let navBar = document.createElement('nav');\n    navBar.classList.add('nav-bar');\n\n    let home = document.createElement('div');\n    let menu = document.createElement('div');\n    let contact = document.createElement('div');\n\n    home.id = 'home';\n    menu.id = 'menu';\n    contact.id = 'contact';\n\n    home.textContent = 'Home';\n    menu.textContent = \"Menu\";\n    contact.textContent = \"Contact\";\n\n    navBar.appendChild(home);\n    navBar.appendChild(menu);\n    navBar.appendChild(contact);\n\n    let main = document.createElement('main');\n    main.id = 'main-content';\n\n    loadHome(main);\n\n    content.append(navBar, main);\n    console.log(\"done\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeContent);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nconsole.log(\"Hello\");\n(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nlet home = document.querySelector('#home');\nlet menu = document.querySelector('#menu');\nlet contact = document.querySelector('#contact');\n\nhome.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_1__.loadHome.bind(undefined, document.querySelector('#main-content')));\nmenu.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\ncontact.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet addItem = (card, title, description) => {\n    let cardTitle = document.createElement('h2');\n    cardTitle.textContent = title;\n    cardTitle.classList.add('card-title');\n\n    let cardDescription = document.createElement('p');\n    cardDescription.textContent = description;\n    cardDescription.classList.add('card-description');\n\n    card.append(cardTitle, cardDescription);\n}\n\nlet loadMenu = () => {\n\n    let body = document.querySelector('body');\n    body.style.cssText = 'height: 100%';\n\n    let main = document.querySelector('#main-content');\n    main.innerHTML = '';\n\n    let headline = document.createElement('h1');\n    headline.textContent = 'Menu';\n    headline.classList.add('headline');\n\n    let cards = [];\n\n    cards.push(document.createElement('div'));\n    cards.push(document.createElement('div'));\n    cards.push(document.createElement('div'));\n\n    cards[0].classList.add('menu-card');\n    cards[1].classList.add('menu-card');\n    cards[2].classList.add('menu-card');\n\n\n    addItem(cards[0], 'Pizza', 'Pepperoni sausage, tomato, mozzarella, oregano.' +\n        ' Add jalapeños to your Americana for an extra £1.00');\n\n    addItem(cards[1], 'Pasta', 'Penne Pasta with strips of chicken,' +\n        ' bacon, sun dried tomatoes and peas in a creamy roquette pesto sauce.' +\n        ' Topped with sun dried tomatoes and fresh roquette.');\n\n    addItem(cards[2], 'Lasagne', 'Layers of pasta, ground beef, tomato and bechamel sauce.');\n\n    main.append(headline, ...cards);\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;