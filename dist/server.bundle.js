/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/LoginController.js":
/*!************************************!*\
  !*** ./src/api/LoginController.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/index */ \"./src/config/index.js\");\n\n\n\nclass LoginController {\n  constructor() {}\n\n  async login(ctx) {\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n      _id: 'abbb',\n      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24\n    }, _config_index__WEBPACK_IMPORTED_MODULE_1__.default.JWT_SECRET);\n    ctx.body = {\n      code: 200,\n      token\n    };\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new LoginController());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtZGVtby8uL3NyYy9hcGkvTG9naW5Db250cm9sbGVyLmpzPzk1MDciXSwibmFtZXMiOlsiTG9naW5Db250cm9sbGVyIiwiY29uc3RydWN0b3IiLCJsb2dpbiIsImN0eCIsInRva2VuIiwianNvbndlYnRva2VuIiwiX2lkIiwiZXhwIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImNvbmZpZyIsImJvZHkiLCJjb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxlQUFOLENBQXNCO0FBQ3BCQyxhQUFXLEdBQUcsQ0FBRzs7QUFDakIsUUFBTUMsS0FBTixDQUFZQyxHQUFaLEVBQWlCO0FBQ2YsVUFBTUMsS0FBSyxHQUFHQyx3REFBQSxDQUFrQjtBQUM5QkMsU0FBRyxFQUFFLE1BRHlCO0FBRTlCQyxTQUFHLEVBQUVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxJQUFJLENBQUNDLEdBQUwsS0FBYSxJQUF4QixJQUFnQyxLQUFLLEVBQUwsR0FBVTtBQUZqQixLQUFsQixFQUdYQyw2REFIVyxDQUFkO0FBS0FULE9BQUcsQ0FBQ1UsSUFBSixHQUFXO0FBQ1RDLFVBQUksRUFBRSxHQURHO0FBRVRWO0FBRlMsS0FBWDtBQUlEOztBQVptQjs7QUFldEIsaUVBQWUsSUFBSUosZUFBSixFQUFmIiwiZmlsZSI6Ii4vc3JjL2FwaS9Mb2dpbkNvbnRyb2xsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQganNvbndlYnRva2VuIGZyb20gJ2pzb253ZWJ0b2tlbidcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2luZGV4J1xuXG5jbGFzcyBMb2dpbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBhc3luYyBsb2dpbihjdHgpIHtcbiAgICBjb25zdCB0b2tlbiA9IGpzb253ZWJ0b2tlbi5zaWduKHtcbiAgICAgIF9pZDogJ2FiYmInLFxuICAgICAgZXhwOiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSArIDYwICogNjAgKiAyNFxuICAgIH0sIGNvbmZpZy5KV1RfU0VDUkVUKTtcblxuICAgIGN0eC5ib2R5ID0ge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgdG9rZW5cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IExvZ2luQ29udHJvbGxlcigpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/LoginController.js\n");

/***/ }),

/***/ "./src/api/a.js":
/*!**********************!*\
  !*** ./src/api/a.js ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = ctx => {\n  ctx.body = {\n    message: 'from a...'\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtZGVtby8uL3NyYy9hcGkvYS5qcz9jMTk4Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjdHgiLCJib2R5IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFrQkMsR0FBRCxJQUFTO0FBQ3hCQSxFQUFBQSxHQUFHLENBQUNDLElBQUosR0FBVztBQUNUQyxJQUFBQSxPQUFPLEVBQUU7QUFEQSxHQUFYO0FBR0QsQ0FKRCIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKGN0eCkgPT4ge1xuICBjdHguYm9keSA9IHtcbiAgICBtZXNzYWdlOiAnZnJvbSBhLi4uJ1xuICB9O1xufSJdLCJmaWxlIjoiLi9zcmMvYXBpL2EuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/a.js\n");

/***/ }),

/***/ "./src/api/b.js":
/*!**********************!*\
  !*** ./src/api/b.js ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = ctx => {\n  ctx.body = {\n    message: 'from b'\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtZGVtby8uL3NyYy9hcGkvYi5qcz9kZWZkIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjdHgiLCJib2R5IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsR0FBRyxJQUFJO0FBQ3RCQSxFQUFBQSxHQUFHLENBQUNDLElBQUosR0FBVztBQUNUQyxJQUFBQSxPQUFPLEVBQUU7QUFEQSxHQUFYO0FBR0QsQ0FKRCIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gY3R4ID0+IHtcbiAgY3R4LmJvZHkgPSB7XG4gICAgbWVzc2FnZTogJ2Zyb20gYidcbiAgfTtcbn1cbiJdLCJmaWxlIjoiLi9zcmMvYXBpL2IuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/b.js\n");

/***/ }),

/***/ "./src/api/demoController.js":
/*!***********************************!*\
  !*** ./src/api/demoController.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass DemoController {\n  constructor() {}\n\n  async demo(ctx) {\n    ctx.body = {\n      msg: 'body message'\n    };\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new DemoController());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtZGVtby8uL3NyYy9hcGkvZGVtb0NvbnRyb2xsZXIuanM/NTViNSJdLCJuYW1lcyI6WyJEZW1vQ29udHJvbGxlciIsImNvbnN0cnVjdG9yIiwiZGVtbyIsImN0eCIsImJvZHkiLCJtc2ciXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxjQUFOLENBQXFCO0FBQ25CQyxhQUFXLEdBQUcsQ0FBRzs7QUFDakIsUUFBTUMsSUFBTixDQUFXQyxHQUFYLEVBQWdCO0FBQ2RBLE9BQUcsQ0FBQ0MsSUFBSixHQUFXO0FBQ1RDLFNBQUcsRUFBRTtBQURJLEtBQVg7QUFHRDs7QUFOa0I7O0FBU3JCLGlFQUFlLElBQUlMLGNBQUosRUFBZiIsImZpbGUiOiIuL3NyYy9hcGkvZGVtb0NvbnRyb2xsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBEZW1vQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIGFzeW5jIGRlbW8oY3R4KSB7XG4gICAgY3R4LmJvZHkgPSB7XG4gICAgICBtc2c6ICdib2R5IG1lc3NhZ2UnXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBEZW1vQ29udHJvbGxlcigpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/demoController.js\n");

/***/ }),

/***/ "./src/common/ErrorHandle.js":
/*!***********************************!*\
  !*** ./src/common/ErrorHandle.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((ctx, next) => {\n  return next().catch(err => {\n    if (401 == err.status) {\n      ctx.status = 401;\n      ctx.body = {\n        code: 401,\n        msg: 'Protected resource, use Authorization header to get access\\n'\n      };\n    } else {\n      throw err;\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtZGVtby8uL3NyYy9jb21tb24vRXJyb3JIYW5kbGUuanM/NDFlYiJdLCJuYW1lcyI6WyJjdHgiLCJuZXh0IiwiY2F0Y2giLCJlcnIiLCJzdGF0dXMiLCJib2R5IiwiY29kZSIsIm1zZyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlLENBQUNBLEdBQUQsRUFBTUMsSUFBTixLQUFlO0FBQzVCLFNBQU9BLElBQUksR0FBR0MsS0FBUCxDQUFjQyxHQUFELElBQVM7QUFDM0IsUUFBSSxPQUFPQSxHQUFHLENBQUNDLE1BQWYsRUFBdUI7QUFDckJKLFNBQUcsQ0FBQ0ksTUFBSixHQUFhLEdBQWI7QUFDQUosU0FBRyxDQUFDSyxJQUFKLEdBQVc7QUFDVEMsWUFBSSxFQUFFLEdBREc7QUFFVEMsV0FBRyxFQUFFO0FBRkksT0FBWDtBQUlELEtBTkQsTUFNTztBQUNMLFlBQU1KLEdBQU47QUFDRDtBQUNGLEdBVk0sQ0FBUDtBQVdELENBWkQiLCJmaWxlIjoiLi9zcmMvY29tbW9uL0Vycm9ySGFuZGxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKGN0eCwgbmV4dCkgPT4ge1xuICByZXR1cm4gbmV4dCgpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAoNDAxID09IGVyci5zdGF0dXMpIHtcbiAgICAgIGN0eC5zdGF0dXMgPSA0MDE7XG4gICAgICBjdHguYm9keSA9IHtcbiAgICAgICAgY29kZTogNDAxLFxuICAgICAgICBtc2c6ICdQcm90ZWN0ZWQgcmVzb3VyY2UsIHVzZSBBdXRob3JpemF0aW9uIGhlYWRlciB0byBnZXQgYWNjZXNzXFxuJ1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/ErrorHandle.js\n");

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst JWT_SECRET = 'abc';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  JWT_SECRET\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtZGVtby8uL3NyYy9jb25maWcvaW5kZXguanM/ZjEyMSJdLCJuYW1lcyI6WyJKV1RfU0VDUkVUIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsVUFBVSxHQUFHLEtBQW5CO0FBRUEsaUVBQWU7QUFDYkE7QUFEYSxDQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbmZpZy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEpXVF9TRUNSRVQgPSAnYWJjJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBKV1RfU0VDUkVUXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/index.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("var __dirname = \"src\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/routes */ \"./src/routes/routes.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! koa-body */ \"koa-body\");\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(koa_body__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! koa-json */ \"koa-json\");\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(koa_json__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @koa/cors */ \"@koa/cors\");\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_koa_cors__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var koa_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! koa-compose */ \"koa-compose\");\n/* harmony import */ var koa_compose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(koa_compose__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var koa_compress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! koa-compress */ \"koa-compress\");\n/* harmony import */ var koa_compress__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(koa_compress__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var koa_jwt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! koa-jwt */ \"koa-jwt\");\n/* harmony import */ var koa_jwt__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(koa_jwt__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config/index */ \"./src/config/index.js\");\n/* harmony import */ var _common_ErrorHandle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/ErrorHandle */ \"./src/common/ErrorHandle.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst app = new (koa__WEBPACK_IMPORTED_MODULE_0___default())(); // 判断执行环境\n\nconst isProdMode =  false ? 0 : false; // 定义公共路径，不需要jwt鉴权\n\nconst jwt = koa_jwt__WEBPACK_IMPORTED_MODULE_10___default()({\n  secret: _config_index__WEBPACK_IMPORTED_MODULE_11__.default.JWT_SECRET\n}).unless({\n  path: [/^\\/public/, /^\\/login/, /^\\/a/]\n});\nconst middleware = koa_compose__WEBPACK_IMPORTED_MODULE_8___default()([koa_body__WEBPACK_IMPORTED_MODULE_5___default()(), koa_static__WEBPACK_IMPORTED_MODULE_2___default()(path__WEBPACK_IMPORTED_MODULE_4___default().join(__dirname, '../publich')), _koa_cors__WEBPACK_IMPORTED_MODULE_7___default()(), koa_json__WEBPACK_IMPORTED_MODULE_6___default()({\n  pretty: false,\n  param: 'pretty'\n}), koa_helmet__WEBPACK_IMPORTED_MODULE_1___default()(), _common_ErrorHandle__WEBPACK_IMPORTED_MODULE_12__.default, jwt]);\n\nif (isProdMode) {\n  app.use(koa_compress__WEBPACK_IMPORTED_MODULE_9___default()());\n}\n\napp.use(middleware);\napp.use((0,_routes_routes__WEBPACK_IMPORTED_MODULE_3__.default)());\napp.listen(3000);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtZGVtby8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbImFwcCIsImtvYSIsImlzUHJvZE1vZGUiLCJwcm9jZXNzIiwiand0IiwiSldUIiwic2VjcmV0IiwiY29uZmlnIiwiSldUX1NFQ1JFVCIsInVubGVzcyIsInBhdGgiLCJtaWRkbGV3YXJlIiwiY29tcG9zZSIsImtvYUJvZHkiLCJzdGF0aWNzIiwiX19kaXJuYW1lIiwiY29ycyIsImpzb251dGlsIiwicHJldHR5IiwicGFyYW0iLCJoZWxtZXQiLCJlcnJvckhhbmRsZSIsInVzZSIsImNvbXByZXNzIiwicm91dGVyIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxHQUFHLEdBQUcsSUFBSUMsNENBQUosRUFBWixDLENBRUE7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHQyxNQUFBLEdBQXdDLENBQXhDLEdBQStDLEtBQWxFLEMsQ0FFQTs7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLCtDQUFHLENBQUM7QUFDZEMsUUFBTSxFQUFFQyw4REFBaUJDO0FBRFgsQ0FBRCxDQUFILENBRVRDLE1BRlMsQ0FFRjtBQUNSQyxNQUFJLEVBQUUsQ0FBQyxXQUFELEVBQWMsVUFBZCxFQUEwQixNQUExQjtBQURFLENBRkUsQ0FBWjtBQU1BLE1BQU1DLFVBQVUsR0FBR0Msa0RBQU8sQ0FBQyxDQUN6QkMsK0NBQU8sRUFEa0IsRUFFekJDLGlEQUFPLENBQUNKLGdEQUFBLENBQVVLLFNBQVYsRUFBcUIsWUFBckIsQ0FBRCxDQUZrQixFQUd6QkMsZ0RBQUksRUFIcUIsRUFJekJDLCtDQUFRLENBQUM7QUFBRUMsUUFBTSxFQUFFLEtBQVY7QUFBaUJDLE9BQUssRUFBRTtBQUF4QixDQUFELENBSmlCLEVBS3pCQyxpREFBTSxFQUxtQixFQU16QkMseURBTnlCLEVBT3pCakIsR0FQeUIsQ0FBRCxDQUExQjs7QUFVQSxJQUFJRixVQUFKLEVBQWdCO0FBQ2RGLEtBQUcsQ0FBQ3NCLEdBQUosQ0FBUUMsbURBQVEsRUFBaEI7QUFDRDs7QUFFRHZCLEdBQUcsQ0FBQ3NCLEdBQUosQ0FBUVgsVUFBUjtBQUNBWCxHQUFHLENBQUNzQixHQUFKLENBQVFFLHVEQUFNLEVBQWQ7QUFFQXhCLEdBQUcsQ0FBQ3lCLE1BQUosQ0FBVyxJQUFYIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGtvYSBmcm9tICdrb2EnXG5pbXBvcnQgaGVsbWV0IGZyb20gJ2tvYS1oZWxtZXQnXG5pbXBvcnQgc3RhdGljcyBmcm9tICdrb2Etc3RhdGljJ1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcy9yb3V0ZXMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGtvYUJvZHkgZnJvbSAna29hLWJvZHknXG5pbXBvcnQganNvbnV0aWwgZnJvbSAna29hLWpzb24nXG5pbXBvcnQgY29ycyBmcm9tICdAa29hL2NvcnMnXG5pbXBvcnQgY29tcG9zZSBmcm9tICdrb2EtY29tcG9zZSdcbmltcG9ydCBjb21wcmVzcyBmcm9tICdrb2EtY29tcHJlc3MnXG5pbXBvcnQgSldUIGZyb20gJ2tvYS1qd3QnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnL2luZGV4J1xuaW1wb3J0IGVycm9ySGFuZGxlIGZyb20gJy4vY29tbW9uL0Vycm9ySGFuZGxlJ1xuXG5jb25zdCBhcHAgPSBuZXcga29hKCk7XG5cbi8vIOWIpOaWreaJp+ihjOeOr+Wig1xuY29uc3QgaXNQcm9kTW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyB0cnVlIDogZmFsc2U7XG5cbi8vIOWumuS5ieWFrOWFsei3r+W+hO+8jOS4jemcgOimgWp3dOmJtOadg1xuY29uc3Qgand0ID0gSldUKHtcbiAgc2VjcmV0OiBjb25maWcuSldUX1NFQ1JFVFxufSkudW5sZXNzKHtcbiAgcGF0aDogWy9eXFwvcHVibGljLywgL15cXC9sb2dpbi8sIC9eXFwvYS9dXG59KTtcblxuY29uc3QgbWlkZGxld2FyZSA9IGNvbXBvc2UoW1xuICBrb2FCb2R5KCksXG4gIHN0YXRpY3MocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3B1YmxpY2gnKSksXG4gIGNvcnMoKSxcbiAganNvbnV0aWwoeyBwcmV0dHk6IGZhbHNlLCBwYXJhbTogJ3ByZXR0eScgfSksXG4gIGhlbG1ldCgpLFxuICBlcnJvckhhbmRsZSxcbiAgand0XG5dKTtcblxuaWYgKGlzUHJvZE1vZGUpIHtcbiAgYXBwLnVzZShjb21wcmVzcygpKTtcbn1cblxuYXBwLnVzZShtaWRkbGV3YXJlKTtcbmFwcC51c2Uocm91dGVyKCkpO1xuXG5hcHAubGlzdGVuKDMwMDApOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/routes/aRouter.js":
/*!*******************************!*\
  !*** ./src/routes/aRouter.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst router = new Router();\n\nconst a = __webpack_require__(/*! ../api/a */ \"./src/api/a.js\");\n\nrouter.get('/a', a);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtZGVtby8uL3NyYy9yb3V0ZXMvYVJvdXRlci5qcz85MmJjIl0sIm5hbWVzIjpbIlJvdXRlciIsInJlcXVpcmUiLCJyb3V0ZXIiLCJhIiwiZ2V0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDhCQUFELENBQXRCOztBQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFJRixNQUFKLEVBQWY7O0FBQ0EsTUFBTUcsQ0FBQyxHQUFHRixtQkFBTyxDQUFDLGdDQUFELENBQWpCOztBQUNBQyxNQUFNLENBQUNFLEdBQVAsQ0FBVyxJQUFYLEVBQWlCRCxDQUFqQjtBQUVBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLE1BQWpCIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9hUm91dGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUm91dGVyID0gcmVxdWlyZSgna29hLXJvdXRlcicpO1xuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xuY29uc3QgYSA9IHJlcXVpcmUoJy4uL2FwaS9hJyk7XG5yb3V0ZXIuZ2V0KCcvYScsIGEpXG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/aRouter.js\n");

/***/ }),

/***/ "./src/routes/bRouter.js":
/*!*******************************!*\
  !*** ./src/routes/bRouter.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst router = new Router();\n\nconst b = __webpack_require__(/*! ../api/b */ \"./src/api/b.js\");\n\nrouter.get('/b', b);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtZGVtby8uL3NyYy9yb3V0ZXMvYlJvdXRlci5qcz8yZmU3Il0sIm5hbWVzIjpbIlJvdXRlciIsInJlcXVpcmUiLCJyb3V0ZXIiLCJiIiwiZ2V0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDhCQUFELENBQXRCOztBQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFJRixNQUFKLEVBQWY7O0FBQ0EsTUFBTUcsQ0FBQyxHQUFHRixtQkFBTyxDQUFDLGdDQUFELENBQWpCOztBQUNBQyxNQUFNLENBQUNFLEdBQVAsQ0FBVyxJQUFYLEVBQWlCRCxDQUFqQjtBQUVBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLE1BQWpCIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9iUm91dGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUm91dGVyID0gcmVxdWlyZSgna29hLXJvdXRlcicpO1xuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xuY29uc3QgYiA9IHJlcXVpcmUoJy4uL2FwaS9iJyk7XG5yb3V0ZXIuZ2V0KCcvYicsIGIpXG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/bRouter.js\n");

/***/ }),

/***/ "./src/routes/demoRouter.js":
/*!**********************************!*\
  !*** ./src/routes/demoRouter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_demoController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/demoController */ \"./src/api/demoController.js\");\n\n\nconst router = new (koa_router__WEBPACK_IMPORTED_MODULE_0___default())();\nrouter.get('/demo', _api_demoController__WEBPACK_IMPORTED_MODULE_1__.default.demo);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtZGVtby8uL3NyYy9yb3V0ZXMvZGVtb1JvdXRlci5qcz83YTAxIl0sIm5hbWVzIjpbInJvdXRlciIsIlJvdXRlciIsImdldCIsImRlbW9Db250cm9sbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyxtREFBSixFQUFmO0FBRUFELE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLE9BQVgsRUFBb0JDLDZEQUFwQjtBQUVBLGlFQUFlSCxNQUFmIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9kZW1vUm91dGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcbmltcG9ydCBkZW1vQ29udHJvbGxlciBmcm9tICcuLi9hcGkvZGVtb0NvbnRyb2xsZXInO1xuXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoJy9kZW1vJywgZGVtb0NvbnRyb2xsZXIuZGVtbylcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/demoRouter.js\n");

/***/ }),

/***/ "./src/routes/loginRouter.js":
/*!***********************************!*\
  !*** ./src/routes/loginRouter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_LoginController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/LoginController */ \"./src/api/LoginController.js\");\n\n\nconst router = new (koa_router__WEBPACK_IMPORTED_MODULE_0___default())();\nrouter.prefix('/login');\nrouter.post('/login', _api_LoginController__WEBPACK_IMPORTED_MODULE_1__.default.login);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtZGVtby8uL3NyYy9yb3V0ZXMvbG9naW5Sb3V0ZXIuanM/M2RkMSJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJSb3V0ZXIiLCJwcmVmaXgiLCJwb3N0IiwibG9naW5Db250cm9sbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyxtREFBSixFQUFmO0FBRUFELE1BQU0sQ0FBQ0UsTUFBUCxDQUFjLFFBQWQ7QUFFQUYsTUFBTSxDQUFDRyxJQUFQLENBQVksUUFBWixFQUFzQkMsK0RBQXRCO0FBRUEsaUVBQWVKLE1BQWYiLCJmaWxlIjoiLi9zcmMvcm91dGVzL2xvZ2luUm91dGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcbmltcG9ydCBsb2dpbkNvbnRyb2xsZXIgZnJvbSAnLi4vYXBpL0xvZ2luQ29udHJvbGxlcic7XG5cbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcblxucm91dGVyLnByZWZpeCgnL2xvZ2luJyk7XG5cbnJvdXRlci5wb3N0KCcvbG9naW4nLCBsb2dpbkNvbnRyb2xsZXIubG9naW4pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/loginRouter.js\n");

/***/ }),

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var koa_combine_routers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\n/* harmony import */ var koa_combine_routers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_combine_routers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _aRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aRouter */ \"./src/routes/aRouter.js\");\n/* harmony import */ var _aRouter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aRouter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _bRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bRouter */ \"./src/routes/bRouter.js\");\n/* harmony import */ var _bRouter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bRouter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _demoRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demoRouter */ \"./src/routes/demoRouter.js\");\n/* harmony import */ var _loginRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loginRouter */ \"./src/routes/loginRouter.js\");\n\n\n\n\n\nconst router = koa_combine_routers__WEBPACK_IMPORTED_MODULE_0___default()((_aRouter__WEBPACK_IMPORTED_MODULE_1___default()), (_bRouter__WEBPACK_IMPORTED_MODULE_2___default()), _demoRouter__WEBPACK_IMPORTED_MODULE_3__.default, _loginRouter__WEBPACK_IMPORTED_MODULE_4__.default);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtZGVtby8uL3NyYy9yb3V0ZXMvcm91dGVzLmpzPzY0MWIiXSwibmFtZXMiOlsicm91dGVyIiwiY29tYmluZVJvdXRlcnMiLCJhUm91dGVyIiwiYlJvdXRlciIsImRlbW9Sb3V0ZXIiLCJsb2dpblJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU1BLE1BQU0sR0FBR0MsMERBQWMsQ0FDM0JDLGlEQUQyQixFQUUzQkMsaURBRjJCLEVBRzNCQyxnREFIMkIsRUFJM0JDLGlEQUoyQixDQUE3QjtBQU9BLGlFQUFlTCxNQUFmIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9yb3V0ZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29tYmluZVJvdXRlcnMgZnJvbSAna29hLWNvbWJpbmUtcm91dGVycyc7XG5pbXBvcnQgYVJvdXRlciBmcm9tICcuL2FSb3V0ZXInO1xuaW1wb3J0IGJSb3V0ZXIgZnJvbSAnLi9iUm91dGVyJztcbmltcG9ydCBkZW1vUm91dGVyIGZyb20gJy4vZGVtb1JvdXRlcic7XG5pbXBvcnQgbG9naW5Sb3V0ZXIgZnJvbSAnLi9sb2dpblJvdXRlcidcblxuXG5jb25zdCByb3V0ZXIgPSBjb21iaW5lUm91dGVycyhcbiAgYVJvdXRlcixcbiAgYlJvdXRlcixcbiAgZGVtb1JvdXRlcixcbiAgbG9naW5Sb3V0ZXJcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/routes.js\n");

/***/ }),

/***/ "@koa/cors":
/*!****************************!*\
  !*** external "@koa/cors" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@koa/cors");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("koa");;

/***/ }),

/***/ "koa-body":
/*!***************************!*\
  !*** external "koa-body" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-body");;

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-combine-routers");;

/***/ }),

/***/ "koa-compose":
/*!******************************!*\
  !*** external "koa-compose" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-compose");;

/***/ }),

/***/ "koa-compress":
/*!*******************************!*\
  !*** external "koa-compress" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-compress");;

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-helmet");;

/***/ }),

/***/ "koa-json":
/*!***************************!*\
  !*** external "koa-json" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-json");;

/***/ }),

/***/ "koa-jwt":
/*!**************************!*\
  !*** external "koa-jwt" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-jwt");;

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-router");;

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-static");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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