/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cards */ \"./src/js/modules/cards.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./src/js/modules/modal.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabs */ \"./src/js/modules/tabs.js\");\n\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  'use strict';\n\n  Object(_modules_cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cards = function cards() {\n  var goodsWrapper = document.querySelector('.goods-wrapper');\n  fetch('../../../db/db.json').then(function (data) {\n    return data.json();\n  }).then(function (response) {\n    response.forEach(function (card) {\n      var div = document.createElement('div');\n      div.classList.add('card-wrapper', 'col-12', 'col-md-6', 'col-lg-4', 'col-xl-3', 'pb-3');\n      div.innerHTML = \"\\n\\t\\t\\t\\t\\t<div class=\\\"card\\\" data-category=\".concat(card.category, \">\\n\\t\\t\\t\\t\\t\\t<div class=\\\"card-img-wrapper\\\">\\n\\t\\t\\t\\t\\t\\t\\t<img class=\\\"card-img-top\\\" src=\").concat(card.imgMin, \" alt=\\\"\\\">\\n\\t\\t\\t\\t\\t\\t\\t<button class=\\\"card-add-wishlist\\\"></button>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\\"card-body justify-content-between\\\">\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\\"#\\\" class=\\\"card-title\\\">\").concat(card.title, \"</a>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"card-price\\\">\").concat(card.price, \" \\u20BD</div>\\n\\t\\t\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<button class=\\\"card-add-cart\\\" data-id=\").concat(card.id, \">\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \\u0432 \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0443</button>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\");\n      goodsWrapper.appendChild(div);\n    }); // const cardImg = document.querySelectorAll('.card');\n    // cardImg.forEach(item => {\n    // \titem.addEventListener('click', (e) => {\n    // \t\tconst target = e.target;\n    // \t\tif (target.classList.contains('card-img-top')) {\n    // \t\t\tconsole.log(target.src);\n    // \t\t}\n    // \t})\n    // })\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cards);\n\n//# sourceURL=webpack:///./src/js/modules/cards.js?");

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar modal = function modal() {\n  var cart = document.querySelector('.cart'),\n      cartBtn = document.getElementById('cart'),\n      cartClose = document.querySelector('.cart-close');\n\n  var showModal = function showModal() {\n    cart.style.display = 'flex';\n  };\n\n  var closeModal = function closeModal() {\n    cart.style.display = 'none';\n  };\n\n  cartBtn.addEventListener('click', showModal);\n  cartClose.addEventListener('click', closeModal);\n  cart.addEventListener('click', function (e) {\n    var target = e.target;\n\n    if (target.classList.contains('cart')) {\n      closeModal();\n    }\n  });\n  document.documentElement.addEventListener('keydown', function (e) {\n    if (e.key === 'Escape') {\n      closeModal();\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modal);\n\n//# sourceURL=webpack:///./src/js/modules/modal.js?");

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar tabs = function tabs() {\n  var categoryItem = document.querySelectorAll('.category-item');\n  categoryItem.forEach(function (item) {\n    item.addEventListener('click', function (e) {\n      var target = e.target; // console.log(document.querySelectorAll('.card'));\n\n      document.querySelectorAll('.card-wrapper').forEach(function (item) {\n        // console.log(item.dataset.category);\n        item.style.display = 'none';\n\n        if (target.dataset.category === item.firstElementChild.dataset.category) {\n          item.style.display = 'flex';\n        }\n      });\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tabs);\n\n//# sourceURL=webpack:///./src/js/modules/tabs.js?");

/***/ })

/******/ });