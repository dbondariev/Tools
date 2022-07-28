/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile */ \"./src/profile.js\");\n// file path: src/index.js\n\nconst userData = {\n  name: 'Tom',\n  age: 17\n};\nconst profile = { ...userData,\n  company: 'Gromcode'\n};\n(0,_profile__WEBPACK_IMPORTED_MODULE_0__.printProfile)(profile);\nconst data = [1, 2, [3, 4, [5, 6]]];\nconst result = data.flat(2);\nconsole.log(result);\nPromise.resolve().finally();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBO0FBRUEsTUFBTUMsUUFBUSxHQUFHO0VBQ2ZDLElBQUksRUFBRSxLQURTO0VBRWZDLEdBQUcsRUFBRTtBQUZVLENBQWpCO0FBS0EsTUFBTUMsT0FBTyxHQUFHLEVBQ2QsR0FBR0gsUUFEVztFQUVkSSxPQUFPLEVBQUU7QUFGSyxDQUFoQjtBQUtBTCxzREFBWSxDQUFDSSxPQUFELENBQVo7QUFFQSxNQUFNRSxJQUFJLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVAsQ0FBUCxDQUFiO0FBRUEsTUFBTUMsTUFBTSxHQUFHRCxJQUFJLENBQUNFLElBQUwsQ0FBVSxDQUFWLENBQWY7QUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQVo7QUFFQUksT0FBTyxDQUFDQyxPQUFSLEdBQWtCQyxPQUFsQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2syLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZmlsZSBwYXRoOiBzcmMvaW5kZXguanNcblxuaW1wb3J0IHsgcHJpbnRQcm9maWxlIH0gZnJvbSAnLi9wcm9maWxlJztcblxuY29uc3QgdXNlckRhdGEgPSB7XG4gIG5hbWU6ICdUb20nLFxuICBhZ2U6IDE3LFxufTtcblxuY29uc3QgcHJvZmlsZSA9IHtcbiAgLi4udXNlckRhdGEsXG4gIGNvbXBhbnk6ICdHcm9tY29kZScsXG59O1xuXG5wcmludFByb2ZpbGUocHJvZmlsZSk7XG5cbmNvbnN0IGRhdGEgPSBbMSwgMiwgWzMsIDQsIFs1LCA2XV1dO1xuXG5jb25zdCByZXN1bHQgPSBkYXRhLmZsYXQoMik7XG5jb25zb2xlLmxvZyhyZXN1bHQpO1xuXG5Qcm9taXNlLnJlc29sdmUoKS5maW5hbGx5KCk7XG4iXSwibmFtZXMiOlsicHJpbnRQcm9maWxlIiwidXNlckRhdGEiLCJuYW1lIiwiYWdlIiwicHJvZmlsZSIsImNvbXBhbnkiLCJkYXRhIiwicmVzdWx0IiwiZmxhdCIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImZpbmFsbHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/profile.js":
/*!************************!*\
  !*** ./src/profile.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printProfile\": () => (/* binding */ printProfile)\n/* harmony export */ });\n// file path: src/profile.js\nconst printProfile = profileData => {\n  const {\n    name,\n    company\n  } = profileData;\n  console.log(`${name} from ${company}`);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFFTyxNQUFNQSxZQUFZLEdBQUlDLFdBQUQsSUFBaUI7RUFDM0MsTUFBTTtJQUFFQyxJQUFGO0lBQVFDO0VBQVIsSUFBb0JGLFdBQTFCO0VBQ0FHLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLEdBQUVILElBQUssU0FBUUMsT0FBUSxFQUFwQztBQUNELENBSE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrMi8uL3NyYy9wcm9maWxlLmpzPzZlMTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZmlsZSBwYXRoOiBzcmMvcHJvZmlsZS5qc1xuXG5leHBvcnQgY29uc3QgcHJpbnRQcm9maWxlID0gKHByb2ZpbGVEYXRhKSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgY29tcGFueSB9ID0gcHJvZmlsZURhdGE7XG4gIGNvbnNvbGUubG9nKGAke25hbWV9IGZyb20gJHtjb21wYW55fWApO1xufTtcbiJdLCJuYW1lcyI6WyJwcmludFByb2ZpbGUiLCJwcm9maWxlRGF0YSIsIm5hbWUiLCJjb21wYW55IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/profile.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;