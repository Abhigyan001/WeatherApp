/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/results */ \"./src/modules/results.js\");\n\n\n(0,_modules_results__WEBPACK_IMPORTED_MODULE_0__.setQuery)(13);\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/results.js":
/*!********************************!*\
  !*** ./src/modules/results.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setQuery\": () => /* binding */ setQuery\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/modules/weather.js\");\n/* eslint-disable no-use-before-define */\n/* eslint-disable import/prefer-default-export */\n\n\nconst api = {\n  key: '4cc8a926413ba21a3774022235df5269',\n  base: 'https://api.openweathermap.org/data/2.5/',\n};\n\nconst toggleSwitch = document.querySelector('[switch]');\n\nconst setQuery = (evt) => {\n  if (evt.keyCode === 13) {\n    getResults(searchbox.value);\n  }\n};\n\nconst getResults = async (query) => {\n  await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)\n    .then(weather => weather.json()).then(displayResults);\n};\n\nconst displayResults = (weather) => {\n  const city = document.querySelector('.location .city');\n  city.innerText = `${weather.name}, ${weather.sys.country}`;\n\n  const now = new Date();\n  const date = document.querySelector('.location .date');\n  date.innerText = (0,_weather__WEBPACK_IMPORTED_MODULE_0__.dateBuilder)(now);\n\n  const temp = document.querySelector('.current .temp');\n  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;\n\n  const weatherEl = document.querySelector('.current .weather');\n  weatherEl.innerText = weather.weather[0].main;\n\n  const hilow = document.querySelector('.hi-low');\n  hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;\n\n  toggleSwitch.addEventListener('change', () => {\n    if (toggleSwitch.checked) {\n      setTimeout(() => {\n        const tempCurrent = (0,_weather__WEBPACK_IMPORTED_MODULE_0__.cToF)(weather.main.temp);\n        const tempMin = (0,_weather__WEBPACK_IMPORTED_MODULE_0__.cToF)(weather.main.temp_min);\n        const tempMax = (0,_weather__WEBPACK_IMPORTED_MODULE_0__.cToF)(weather.main.temp_max);\n        temp.innerHTML = `${Math.round(tempCurrent)}<span>°F</span>`;\n        hilow.innerText = `${Math.round(tempMin)}°F / ${Math.round(tempMax)}°F`;\n      }, 150);\n    } else {\n      setTimeout(() => {\n        const tempCurrent = weather.main.temp;\n        const tempMin = weather.main.temp_min;\n        const tempMax = weather.main.temp_max;\n        temp.innerHTML = `${Math.round(tempCurrent)}<span>°C</span>`;\n        hilow.innerText = `${Math.round(tempMin)}°C / ${Math.round(tempMax)}°C`;\n      }, 150);\n    }\n  });\n};\n\nconst searchbox = document.querySelector('.search-box');\nsearchbox.addEventListener('keypress', setQuery);\n\n\n//# sourceURL=webpack://weatherapp/./src/modules/results.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dateBuilder\": () => /* binding */ dateBuilder,\n/* harmony export */   \"cToF\": () => /* binding */ cToF\n/* harmony export */ });\n\nconst dateBuilder = (d) => {\n  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n  const day = days[d.getDay()];\n  const date = d.getDate();\n  const month = months[d.getMonth()];\n  const year = d.getFullYear();\n  return `${day} ${date} ${month} ${year}`;\n};\n\nconst cToF = (temp) => {\n  temp = parseFloat(temp);\n  temp = Math.round((temp = temp * 1.8 + 32));\n  return temp;\n};\n\n\n//# sourceURL=webpack://weatherapp/./src/modules/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;