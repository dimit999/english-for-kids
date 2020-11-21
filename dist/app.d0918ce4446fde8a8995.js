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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets sync recursive \\.(mp3)$":
/*!******************************!*\
  !*** ./assets sync \.(mp3)$ ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./audio/angry.mp3\": \"./assets/audio/angry.mp3\",\n\t\"./audio/bird.mp3\": \"./assets/audio/bird.mp3\",\n\t\"./audio/blouse.mp3\": \"./assets/audio/blouse.mp3\",\n\t\"./audio/boot.mp3\": \"./assets/audio/boot.mp3\",\n\t\"./audio/cat.mp3\": \"./assets/audio/cat.mp3\",\n\t\"./audio/chick.mp3\": \"./assets/audio/chick.mp3\",\n\t\"./audio/chicken.mp3\": \"./assets/audio/chicken.mp3\",\n\t\"./audio/coat.mp3\": \"./assets/audio/coat.mp3\",\n\t\"./audio/correct.mp3\": \"./assets/audio/correct.mp3\",\n\t\"./audio/cry.mp3\": \"./assets/audio/cry.mp3\",\n\t\"./audio/dance.mp3\": \"./assets/audio/dance.mp3\",\n\t\"./audio/dive.mp3\": \"./assets/audio/dive.mp3\",\n\t\"./audio/dog.mp3\": \"./assets/audio/dog.mp3\",\n\t\"./audio/dolphin.mp3\": \"./assets/audio/dolphin.mp3\",\n\t\"./audio/draw.mp3\": \"./assets/audio/draw.mp3\",\n\t\"./audio/dress.mp3\": \"./assets/audio/dress.mp3\",\n\t\"./audio/error.mp3\": \"./assets/audio/error.mp3\",\n\t\"./audio/failure.mp3\": \"./assets/audio/failure.mp3\",\n\t\"./audio/fish.mp3\": \"./assets/audio/fish.mp3\",\n\t\"./audio/fly.mp3\": \"./assets/audio/fly.mp3\",\n\t\"./audio/frog.mp3\": \"./assets/audio/frog.mp3\",\n\t\"./audio/giraffe.mp3\": \"./assets/audio/giraffe.mp3\",\n\t\"./audio/happy.mp3\": \"./assets/audio/happy.mp3\",\n\t\"./audio/horse.mp3\": \"./assets/audio/horse.mp3\",\n\t\"./audio/hug.mp3\": \"./assets/audio/hug.mp3\",\n\t\"./audio/jump.mp3\": \"./assets/audio/jump.mp3\",\n\t\"./audio/laugh.mp3\": \"./assets/audio/laugh.mp3\",\n\t\"./audio/lion.mp3\": \"./assets/audio/lion.mp3\",\n\t\"./audio/mouse.mp3\": \"./assets/audio/mouse.mp3\",\n\t\"./audio/open.mp3\": \"./assets/audio/open.mp3\",\n\t\"./audio/pants.mp3\": \"./assets/audio/pants.mp3\",\n\t\"./audio/pig.mp3\": \"./assets/audio/pig.mp3\",\n\t\"./audio/play.mp3\": \"./assets/audio/play.mp3\",\n\t\"./audio/point.mp3\": \"./assets/audio/point.mp3\",\n\t\"./audio/rabbit.mp3\": \"./assets/audio/rabbit.mp3\",\n\t\"./audio/ride.mp3\": \"./assets/audio/ride.mp3\",\n\t\"./audio/run.mp3\": \"./assets/audio/run.mp3\",\n\t\"./audio/sad.mp3\": \"./assets/audio/sad.mp3\",\n\t\"./audio/scared.mp3\": \"./assets/audio/scared.mp3\",\n\t\"./audio/sheep.mp3\": \"./assets/audio/sheep.mp3\",\n\t\"./audio/shirt.mp3\": \"./assets/audio/shirt.mp3\",\n\t\"./audio/shoe.mp3\": \"./assets/audio/shoe.mp3\",\n\t\"./audio/sing.mp3\": \"./assets/audio/sing.mp3\",\n\t\"./audio/skip.mp3\": \"./assets/audio/skip.mp3\",\n\t\"./audio/skirt.mp3\": \"./assets/audio/skirt.mp3\",\n\t\"./audio/smile.mp3\": \"./assets/audio/smile.mp3\",\n\t\"./audio/success.mp3\": \"./assets/audio/success.mp3\",\n\t\"./audio/surprised.mp3\": \"./assets/audio/surprised.mp3\",\n\t\"./audio/swim.mp3\": \"./assets/audio/swim.mp3\",\n\t\"./audio/tired.mp3\": \"./assets/audio/tired.mp3\",\n\t\"./audio/turtle.mp3\": \"./assets/audio/turtle.mp3\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./assets sync recursive \\\\.(mp3)$\";\n\n//# sourceURL=webpack:///./assets_sync_\\.(mp3)$?");

/***/ }),

/***/ "./assets sync recursive \\.(png|svg|jpg|jpe?g|gif)$":
/*!************************************************!*\
  !*** ./assets sync \.(png|svg|jpg|jpe?g|gif)$ ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./images/cards/actions_1.jpg\": \"./assets/images/cards/actions_1.jpg\",\n\t\"./images/cards/actions_2.jpg\": \"./assets/images/cards/actions_2.jpg\",\n\t\"./images/cards/angry.jpg\": \"./assets/images/cards/angry.jpg\",\n\t\"./images/cards/animals_1.jpg\": \"./assets/images/cards/animals_1.jpg\",\n\t\"./images/cards/animals_2.jpg\": \"./assets/images/cards/animals_2.jpg\",\n\t\"./images/cards/audio.svg\": \"./assets/images/cards/audio.svg\",\n\t\"./images/cards/bird.jpg\": \"./assets/images/cards/bird.jpg\",\n\t\"./images/cards/blouse.jpg\": \"./assets/images/cards/blouse.jpg\",\n\t\"./images/cards/boot.jpg\": \"./assets/images/cards/boot.jpg\",\n\t\"./images/cards/cat.jpg\": \"./assets/images/cards/cat.jpg\",\n\t\"./images/cards/chick.jpg\": \"./assets/images/cards/chick.jpg\",\n\t\"./images/cards/chicken.jpg\": \"./assets/images/cards/chicken.jpg\",\n\t\"./images/cards/clothes_1.jpg\": \"./assets/images/cards/clothes_1.jpg\",\n\t\"./images/cards/coat.jpg\": \"./assets/images/cards/coat.jpg\",\n\t\"./images/cards/cry.jpg\": \"./assets/images/cards/cry.jpg\",\n\t\"./images/cards/dance.jpg\": \"./assets/images/cards/dance.jpg\",\n\t\"./images/cards/dive.jpg\": \"./assets/images/cards/dive.jpg\",\n\t\"./images/cards/dog.jpg\": \"./assets/images/cards/dog.jpg\",\n\t\"./images/cards/dolphin.jpg\": \"./assets/images/cards/dolphin.jpg\",\n\t\"./images/cards/draw.jpg\": \"./assets/images/cards/draw.jpg\",\n\t\"./images/cards/dress.jpg\": \"./assets/images/cards/dress.jpg\",\n\t\"./images/cards/emotions_1.jpg\": \"./assets/images/cards/emotions_1.jpg\",\n\t\"./images/cards/failure.jpg\": \"./assets/images/cards/failure.jpg\",\n\t\"./images/cards/fairytales_1.jpg\": \"./assets/images/cards/fairytales_1.jpg\",\n\t\"./images/cards/fish.jpg\": \"./assets/images/cards/fish.jpg\",\n\t\"./images/cards/fish1.jpg\": \"./assets/images/cards/fish1.jpg\",\n\t\"./images/cards/fly.jpg\": \"./assets/images/cards/fly.jpg\",\n\t\"./images/cards/food_1.jpg\": \"./assets/images/cards/food_1.jpg\",\n\t\"./images/cards/frog.jpg\": \"./assets/images/cards/frog.jpg\",\n\t\"./images/cards/giraffe.jpg\": \"./assets/images/cards/giraffe.jpg\",\n\t\"./images/cards/happy.jpg\": \"./assets/images/cards/happy.jpg\",\n\t\"./images/cards/horse.jpg\": \"./assets/images/cards/horse.jpg\",\n\t\"./images/cards/hug.jpg\": \"./assets/images/cards/hug.jpg\",\n\t\"./images/cards/jump.jpg\": \"./assets/images/cards/jump.jpg\",\n\t\"./images/cards/laugh.jpg\": \"./assets/images/cards/laugh.jpg\",\n\t\"./images/cards/lion.jpg\": \"./assets/images/cards/lion.jpg\",\n\t\"./images/cards/mouse.jpg\": \"./assets/images/cards/mouse.jpg\",\n\t\"./images/cards/open.jpg\": \"./assets/images/cards/open.jpg\",\n\t\"./images/cards/pants.jpg\": \"./assets/images/cards/pants.jpg\",\n\t\"./images/cards/pig.jpg\": \"./assets/images/cards/pig.jpg\",\n\t\"./images/cards/play.jpg\": \"./assets/images/cards/play.jpg\",\n\t\"./images/cards/point.jpg\": \"./assets/images/cards/point.jpg\",\n\t\"./images/cards/rabbit.jpg\": \"./assets/images/cards/rabbit.jpg\",\n\t\"./images/cards/repeat.svg\": \"./assets/images/cards/repeat.svg\",\n\t\"./images/cards/ride.jpg\": \"./assets/images/cards/ride.jpg\",\n\t\"./images/cards/rotate.svg\": \"./assets/images/cards/rotate.svg\",\n\t\"./images/cards/run.jpg\": \"./assets/images/cards/run.jpg\",\n\t\"./images/cards/sad.jpg\": \"./assets/images/cards/sad.jpg\",\n\t\"./images/cards/scared.jpg\": \"./assets/images/cards/scared.jpg\",\n\t\"./images/cards/screenshot.png\": \"./assets/images/cards/screenshot.png\",\n\t\"./images/cards/sheep.jpg\": \"./assets/images/cards/sheep.jpg\",\n\t\"./images/cards/shirt.jpg\": \"./assets/images/cards/shirt.jpg\",\n\t\"./images/cards/shoe.jpg\": \"./assets/images/cards/shoe.jpg\",\n\t\"./images/cards/sing.jpg\": \"./assets/images/cards/sing.jpg\",\n\t\"./images/cards/skip.jpg\": \"./assets/images/cards/skip.jpg\",\n\t\"./images/cards/skirt.jpg\": \"./assets/images/cards/skirt.jpg\",\n\t\"./images/cards/smile.jpg\": \"./assets/images/cards/smile.jpg\",\n\t\"./images/cards/star-win.svg\": \"./assets/images/cards/star-win.svg\",\n\t\"./images/cards/star.svg\": \"./assets/images/cards/star.svg\",\n\t\"./images/cards/success.jpg\": \"./assets/images/cards/success.jpg\",\n\t\"./images/cards/surprised.jpg\": \"./assets/images/cards/surprised.jpg\",\n\t\"./images/cards/swim.jpg\": \"./assets/images/cards/swim.jpg\",\n\t\"./images/cards/tired.jpg\": \"./assets/images/cards/tired.jpg\",\n\t\"./images/cards/turtle.jpg\": \"./assets/images/cards/turtle.jpg\",\n\t\"./images/jpg/bg.jpg\": \"./assets/images/jpg/bg.jpg\",\n\t\"./images/png/favicon.png\": \"./assets/images/png/favicon.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./assets sync recursive \\\\.(png|svg|jpg|jpe?g|gif)$\";\n\n//# sourceURL=webpack:///./assets_sync_\\.(png%7Csvg%7Cjpg%7Cjpe?");

/***/ }),

/***/ "./assets/audio/angry.mp3":
/*!********************************!*\
  !*** ./assets/audio/angry.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/angry.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/angry.mp3?");

/***/ }),

/***/ "./assets/audio/bird.mp3":
/*!*******************************!*\
  !*** ./assets/audio/bird.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/bird.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/bird.mp3?");

/***/ }),

/***/ "./assets/audio/blouse.mp3":
/*!*********************************!*\
  !*** ./assets/audio/blouse.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/blouse.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/blouse.mp3?");

/***/ }),

/***/ "./assets/audio/boot.mp3":
/*!*******************************!*\
  !*** ./assets/audio/boot.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/boot.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/boot.mp3?");

/***/ }),

/***/ "./assets/audio/cat.mp3":
/*!******************************!*\
  !*** ./assets/audio/cat.mp3 ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/cat.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/cat.mp3?");

/***/ }),

/***/ "./assets/audio/chick.mp3":
/*!********************************!*\
  !*** ./assets/audio/chick.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/chick.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/chick.mp3?");

/***/ }),

/***/ "./assets/audio/chicken.mp3":
/*!**********************************!*\
  !*** ./assets/audio/chicken.mp3 ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/chicken.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/chicken.mp3?");

/***/ }),

/***/ "./assets/audio/coat.mp3":
/*!*******************************!*\
  !*** ./assets/audio/coat.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/coat.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/coat.mp3?");

/***/ }),

/***/ "./assets/audio/correct.mp3":
/*!**********************************!*\
  !*** ./assets/audio/correct.mp3 ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/correct.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/correct.mp3?");

/***/ }),

/***/ "./assets/audio/cry.mp3":
/*!******************************!*\
  !*** ./assets/audio/cry.mp3 ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/cry.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/cry.mp3?");

/***/ }),

/***/ "./assets/audio/dance.mp3":
/*!********************************!*\
  !*** ./assets/audio/dance.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/dance.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/dance.mp3?");

/***/ }),

/***/ "./assets/audio/dive.mp3":
/*!*******************************!*\
  !*** ./assets/audio/dive.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/dive.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/dive.mp3?");

/***/ }),

/***/ "./assets/audio/dog.mp3":
/*!******************************!*\
  !*** ./assets/audio/dog.mp3 ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/dog.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/dog.mp3?");

/***/ }),

/***/ "./assets/audio/dolphin.mp3":
/*!**********************************!*\
  !*** ./assets/audio/dolphin.mp3 ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/dolphin.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/dolphin.mp3?");

/***/ }),

/***/ "./assets/audio/draw.mp3":
/*!*******************************!*\
  !*** ./assets/audio/draw.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/draw.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/draw.mp3?");

/***/ }),

/***/ "./assets/audio/dress.mp3":
/*!********************************!*\
  !*** ./assets/audio/dress.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/dress.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/dress.mp3?");

/***/ }),

/***/ "./assets/audio/error.mp3":
/*!********************************!*\
  !*** ./assets/audio/error.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/error.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/error.mp3?");

/***/ }),

/***/ "./assets/audio/failure.mp3":
/*!**********************************!*\
  !*** ./assets/audio/failure.mp3 ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/failure.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/failure.mp3?");

/***/ }),

/***/ "./assets/audio/fish.mp3":
/*!*******************************!*\
  !*** ./assets/audio/fish.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/fish.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/fish.mp3?");

/***/ }),

/***/ "./assets/audio/fly.mp3":
/*!******************************!*\
  !*** ./assets/audio/fly.mp3 ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/fly.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/fly.mp3?");

/***/ }),

/***/ "./assets/audio/frog.mp3":
/*!*******************************!*\
  !*** ./assets/audio/frog.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/frog.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/frog.mp3?");

/***/ }),

/***/ "./assets/audio/giraffe.mp3":
/*!**********************************!*\
  !*** ./assets/audio/giraffe.mp3 ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/giraffe.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/giraffe.mp3?");

/***/ }),

/***/ "./assets/audio/happy.mp3":
/*!********************************!*\
  !*** ./assets/audio/happy.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/happy.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/happy.mp3?");

/***/ }),

/***/ "./assets/audio/horse.mp3":
/*!********************************!*\
  !*** ./assets/audio/horse.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/horse.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/horse.mp3?");

/***/ }),

/***/ "./assets/audio/hug.mp3":
/*!******************************!*\
  !*** ./assets/audio/hug.mp3 ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/hug.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/hug.mp3?");

/***/ }),

/***/ "./assets/audio/jump.mp3":
/*!*******************************!*\
  !*** ./assets/audio/jump.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/jump.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/jump.mp3?");

/***/ }),

/***/ "./assets/audio/laugh.mp3":
/*!********************************!*\
  !*** ./assets/audio/laugh.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/laugh.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/laugh.mp3?");

/***/ }),

/***/ "./assets/audio/lion.mp3":
/*!*******************************!*\
  !*** ./assets/audio/lion.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/lion.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/lion.mp3?");

/***/ }),

/***/ "./assets/audio/mouse.mp3":
/*!********************************!*\
  !*** ./assets/audio/mouse.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/mouse.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/mouse.mp3?");

/***/ }),

/***/ "./assets/audio/open.mp3":
/*!*******************************!*\
  !*** ./assets/audio/open.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/open.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/open.mp3?");

/***/ }),

/***/ "./assets/audio/pants.mp3":
/*!********************************!*\
  !*** ./assets/audio/pants.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/pants.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/pants.mp3?");

/***/ }),

/***/ "./assets/audio/pig.mp3":
/*!******************************!*\
  !*** ./assets/audio/pig.mp3 ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/pig.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/pig.mp3?");

/***/ }),

/***/ "./assets/audio/play.mp3":
/*!*******************************!*\
  !*** ./assets/audio/play.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/play.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/play.mp3?");

/***/ }),

/***/ "./assets/audio/point.mp3":
/*!********************************!*\
  !*** ./assets/audio/point.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/point.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/point.mp3?");

/***/ }),

/***/ "./assets/audio/rabbit.mp3":
/*!*********************************!*\
  !*** ./assets/audio/rabbit.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/rabbit.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/rabbit.mp3?");

/***/ }),

/***/ "./assets/audio/ride.mp3":
/*!*******************************!*\
  !*** ./assets/audio/ride.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/ride.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/ride.mp3?");

/***/ }),

/***/ "./assets/audio/run.mp3":
/*!******************************!*\
  !*** ./assets/audio/run.mp3 ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/run.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/run.mp3?");

/***/ }),

/***/ "./assets/audio/sad.mp3":
/*!******************************!*\
  !*** ./assets/audio/sad.mp3 ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/sad.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/sad.mp3?");

/***/ }),

/***/ "./assets/audio/scared.mp3":
/*!*********************************!*\
  !*** ./assets/audio/scared.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/scared.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/scared.mp3?");

/***/ }),

/***/ "./assets/audio/sheep.mp3":
/*!********************************!*\
  !*** ./assets/audio/sheep.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/sheep.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/sheep.mp3?");

/***/ }),

/***/ "./assets/audio/shirt.mp3":
/*!********************************!*\
  !*** ./assets/audio/shirt.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/shirt.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/shirt.mp3?");

/***/ }),

/***/ "./assets/audio/shoe.mp3":
/*!*******************************!*\
  !*** ./assets/audio/shoe.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/shoe.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/shoe.mp3?");

/***/ }),

/***/ "./assets/audio/sing.mp3":
/*!*******************************!*\
  !*** ./assets/audio/sing.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/sing.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/sing.mp3?");

/***/ }),

/***/ "./assets/audio/skip.mp3":
/*!*******************************!*\
  !*** ./assets/audio/skip.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/skip.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/skip.mp3?");

/***/ }),

/***/ "./assets/audio/skirt.mp3":
/*!********************************!*\
  !*** ./assets/audio/skirt.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/skirt.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/skirt.mp3?");

/***/ }),

/***/ "./assets/audio/smile.mp3":
/*!********************************!*\
  !*** ./assets/audio/smile.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/smile.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/smile.mp3?");

/***/ }),

/***/ "./assets/audio/success.mp3":
/*!**********************************!*\
  !*** ./assets/audio/success.mp3 ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/success.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/success.mp3?");

/***/ }),

/***/ "./assets/audio/surprised.mp3":
/*!************************************!*\
  !*** ./assets/audio/surprised.mp3 ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/surprised.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/surprised.mp3?");

/***/ }),

/***/ "./assets/audio/swim.mp3":
/*!*******************************!*\
  !*** ./assets/audio/swim.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/swim.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/swim.mp3?");

/***/ }),

/***/ "./assets/audio/tired.mp3":
/*!********************************!*\
  !*** ./assets/audio/tired.mp3 ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/tired.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/tired.mp3?");

/***/ }),

/***/ "./assets/audio/turtle.mp3":
/*!*********************************!*\
  !*** ./assets/audio/turtle.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/turtle.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/turtle.mp3?");

/***/ }),

/***/ "./assets/images/cards/actions_1.jpg":
/*!*******************************************!*\
  !*** ./assets/images/cards/actions_1.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/actions_1.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/actions_1.jpg?");

/***/ }),

/***/ "./assets/images/cards/actions_2.jpg":
/*!*******************************************!*\
  !*** ./assets/images/cards/actions_2.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/actions_2.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/actions_2.jpg?");

/***/ }),

/***/ "./assets/images/cards/angry.jpg":
/*!***************************************!*\
  !*** ./assets/images/cards/angry.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/angry.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/angry.jpg?");

/***/ }),

/***/ "./assets/images/cards/animals_1.jpg":
/*!*******************************************!*\
  !*** ./assets/images/cards/animals_1.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/animals_1.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/animals_1.jpg?");

/***/ }),

/***/ "./assets/images/cards/animals_2.jpg":
/*!*******************************************!*\
  !*** ./assets/images/cards/animals_2.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/animals_2.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/animals_2.jpg?");

/***/ }),

/***/ "./assets/images/cards/audio.svg":
/*!***************************************!*\
  !*** ./assets/images/cards/audio.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/audio.svg\";\n\n//# sourceURL=webpack:///./assets/images/cards/audio.svg?");

/***/ }),

/***/ "./assets/images/cards/bird.jpg":
/*!**************************************!*\
  !*** ./assets/images/cards/bird.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/bird.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/bird.jpg?");

/***/ }),

/***/ "./assets/images/cards/blouse.jpg":
/*!****************************************!*\
  !*** ./assets/images/cards/blouse.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/blouse.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/blouse.jpg?");

/***/ }),

/***/ "./assets/images/cards/boot.jpg":
/*!**************************************!*\
  !*** ./assets/images/cards/boot.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/boot.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/boot.jpg?");

/***/ }),

/***/ "./assets/images/cards/cat.jpg":
/*!*************************************!*\
  !*** ./assets/images/cards/cat.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/cat.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/cat.jpg?");

/***/ }),

/***/ "./assets/images/cards/chick.jpg":
/*!***************************************!*\
  !*** ./assets/images/cards/chick.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/chick.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/chick.jpg?");

/***/ }),

/***/ "./assets/images/cards/chicken.jpg":
/*!*****************************************!*\
  !*** ./assets/images/cards/chicken.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/chicken.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/chicken.jpg?");

/***/ }),

/***/ "./assets/images/cards/clothes_1.jpg":
/*!*******************************************!*\
  !*** ./assets/images/cards/clothes_1.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/clothes_1.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/clothes_1.jpg?");

/***/ }),

/***/ "./assets/images/cards/coat.jpg":
/*!**************************************!*\
  !*** ./assets/images/cards/coat.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/coat.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/coat.jpg?");

/***/ }),

/***/ "./assets/images/cards/cry.jpg":
/*!*************************************!*\
  !*** ./assets/images/cards/cry.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/cry.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/cry.jpg?");

/***/ }),

/***/ "./assets/images/cards/dance.jpg":
/*!***************************************!*\
  !*** ./assets/images/cards/dance.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/dance.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/dance.jpg?");

/***/ }),

/***/ "./assets/images/cards/dive.jpg":
/*!**************************************!*\
  !*** ./assets/images/cards/dive.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/dive.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/dive.jpg?");

/***/ }),

/***/ "./assets/images/cards/dog.jpg":
/*!*************************************!*\
  !*** ./assets/images/cards/dog.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/dog.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/dog.jpg?");

/***/ }),

/***/ "./assets/images/cards/dolphin.jpg":
/*!*****************************************!*\
  !*** ./assets/images/cards/dolphin.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/dolphin.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/dolphin.jpg?");

/***/ }),

/***/ "./assets/images/cards/draw.jpg":
/*!**************************************!*\
  !*** ./assets/images/cards/draw.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/draw.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/draw.jpg?");

/***/ }),

/***/ "./assets/images/cards/dress.jpg":
/*!***************************************!*\
  !*** ./assets/images/cards/dress.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/dress.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/dress.jpg?");

/***/ }),

/***/ "./assets/images/cards/emotions_1.jpg":
/*!********************************************!*\
  !*** ./assets/images/cards/emotions_1.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/emotions_1.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/emotions_1.jpg?");

/***/ }),

/***/ "./assets/images/cards/failure.jpg":
/*!*****************************************!*\
  !*** ./assets/images/cards/failure.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/failure.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/failure.jpg?");

/***/ }),

/***/ "./assets/images/cards/fairytales_1.jpg":
/*!**********************************************!*\
  !*** ./assets/images/cards/fairytales_1.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/fairytales_1.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/fairytales_1.jpg?");

/***/ }),

/***/ "./assets/images/cards/fish.jpg":
/*!**************************************!*\
  !*** ./assets/images/cards/fish.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/fish.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/fish.jpg?");

/***/ }),

/***/ "./assets/images/cards/fish1.jpg":
/*!***************************************!*\
  !*** ./assets/images/cards/fish1.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/fish1.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/fish1.jpg?");

/***/ }),

/***/ "./assets/images/cards/fly.jpg":
/*!*************************************!*\
  !*** ./assets/images/cards/fly.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/fly.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/fly.jpg?");

/***/ }),

/***/ "./assets/images/cards/food_1.jpg":
/*!****************************************!*\
  !*** ./assets/images/cards/food_1.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/food_1.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/food_1.jpg?");

/***/ }),

/***/ "./assets/images/cards/frog.jpg":
/*!**************************************!*\
  !*** ./assets/images/cards/frog.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/frog.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/frog.jpg?");

/***/ }),

/***/ "./assets/images/cards/giraffe.jpg":
/*!*****************************************!*\
  !*** ./assets/images/cards/giraffe.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/giraffe.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/giraffe.jpg?");

/***/ }),

/***/ "./assets/images/cards/happy.jpg":
/*!***************************************!*\
  !*** ./assets/images/cards/happy.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/happy.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/happy.jpg?");

/***/ }),

/***/ "./assets/images/cards/horse.jpg":
/*!***************************************!*\
  !*** ./assets/images/cards/horse.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/horse.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/horse.jpg?");

/***/ }),

/***/ "./assets/images/cards/hug.jpg":
/*!*************************************!*\
  !*** ./assets/images/cards/hug.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/hug.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/hug.jpg?");

/***/ }),

/***/ "./assets/images/cards/jump.jpg":
/*!**************************************!*\
  !*** ./assets/images/cards/jump.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/jump.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/jump.jpg?");

/***/ }),

/***/ "./assets/images/cards/laugh.jpg":
/*!***************************************!*\
  !*** ./assets/images/cards/laugh.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/laugh.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/laugh.jpg?");

/***/ }),

/***/ "./assets/images/cards/lion.jpg":
/*!**************************************!*\
  !*** ./assets/images/cards/lion.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/lion.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/lion.jpg?");

/***/ }),

/***/ "./assets/images/cards/mouse.jpg":
/*!***************************************!*\
  !*** ./assets/images/cards/mouse.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/mouse.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/mouse.jpg?");

/***/ }),

/***/ "./assets/images/cards/open.jpg":
/*!**************************************!*\
  !*** ./assets/images/cards/open.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/open.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/open.jpg?");

/***/ }),

/***/ "./assets/images/cards/pants.jpg":
/*!***************************************!*\
  !*** ./assets/images/cards/pants.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/pants.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/pants.jpg?");

/***/ }),

/***/ "./assets/images/cards/pig.jpg":
/*!*************************************!*\
  !*** ./assets/images/cards/pig.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/pig.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/pig.jpg?");

/***/ }),

/***/ "./assets/images/cards/play.jpg":
/*!**************************************!*\
  !*** ./assets/images/cards/play.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/play.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/play.jpg?");

/***/ }),

/***/ "./assets/images/cards/point.jpg":
/*!***************************************!*\
  !*** ./assets/images/cards/point.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/point.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/point.jpg?");

/***/ }),

/***/ "./assets/images/cards/rabbit.jpg":
/*!****************************************!*\
  !*** ./assets/images/cards/rabbit.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/rabbit.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/rabbit.jpg?");

/***/ }),

/***/ "./assets/images/cards/repeat.svg":
/*!****************************************!*\
  !*** ./assets/images/cards/repeat.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/repeat.svg\";\n\n//# sourceURL=webpack:///./assets/images/cards/repeat.svg?");

/***/ }),

/***/ "./assets/images/cards/ride.jpg":
/*!**************************************!*\
  !*** ./assets/images/cards/ride.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/ride.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/ride.jpg?");

/***/ }),

/***/ "./assets/images/cards/rotate.svg":
/*!****************************************!*\
  !*** ./assets/images/cards/rotate.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/rotate.svg\";\n\n//# sourceURL=webpack:///./assets/images/cards/rotate.svg?");

/***/ }),

/***/ "./assets/images/cards/run.jpg":
/*!*************************************!*\
  !*** ./assets/images/cards/run.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/run.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/run.jpg?");

/***/ }),

/***/ "./assets/images/cards/sad.jpg":
/*!*************************************!*\
  !*** ./assets/images/cards/sad.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/sad.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/sad.jpg?");

/***/ }),

/***/ "./assets/images/cards/scared.jpg":
/*!****************************************!*\
  !*** ./assets/images/cards/scared.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/scared.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/scared.jpg?");

/***/ }),

/***/ "./assets/images/cards/screenshot.png":
/*!********************************************!*\
  !*** ./assets/images/cards/screenshot.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/screenshot.png\";\n\n//# sourceURL=webpack:///./assets/images/cards/screenshot.png?");

/***/ }),

/***/ "./assets/images/cards/sheep.jpg":
/*!***************************************!*\
  !*** ./assets/images/cards/sheep.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/sheep.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/sheep.jpg?");

/***/ }),

/***/ "./assets/images/cards/shirt.jpg":
/*!***************************************!*\
  !*** ./assets/images/cards/shirt.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/shirt.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/shirt.jpg?");

/***/ }),

/***/ "./assets/images/cards/shoe.jpg":
/*!**************************************!*\
  !*** ./assets/images/cards/shoe.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/shoe.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/shoe.jpg?");

/***/ }),

/***/ "./assets/images/cards/sing.jpg":
/*!**************************************!*\
  !*** ./assets/images/cards/sing.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/sing.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/sing.jpg?");

/***/ }),

/***/ "./assets/images/cards/skip.jpg":
/*!**************************************!*\
  !*** ./assets/images/cards/skip.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/skip.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/skip.jpg?");

/***/ }),

/***/ "./assets/images/cards/skirt.jpg":
/*!***************************************!*\
  !*** ./assets/images/cards/skirt.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/skirt.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/skirt.jpg?");

/***/ }),

/***/ "./assets/images/cards/smile.jpg":
/*!***************************************!*\
  !*** ./assets/images/cards/smile.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/smile.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/smile.jpg?");

/***/ }),

/***/ "./assets/images/cards/star-win.svg":
/*!******************************************!*\
  !*** ./assets/images/cards/star-win.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/star-win.svg\";\n\n//# sourceURL=webpack:///./assets/images/cards/star-win.svg?");

/***/ }),

/***/ "./assets/images/cards/star.svg":
/*!**************************************!*\
  !*** ./assets/images/cards/star.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/star.svg\";\n\n//# sourceURL=webpack:///./assets/images/cards/star.svg?");

/***/ }),

/***/ "./assets/images/cards/success.jpg":
/*!*****************************************!*\
  !*** ./assets/images/cards/success.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/success.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/success.jpg?");

/***/ }),

/***/ "./assets/images/cards/surprised.jpg":
/*!*******************************************!*\
  !*** ./assets/images/cards/surprised.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/surprised.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/surprised.jpg?");

/***/ }),

/***/ "./assets/images/cards/swim.jpg":
/*!**************************************!*\
  !*** ./assets/images/cards/swim.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/swim.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/swim.jpg?");

/***/ }),

/***/ "./assets/images/cards/tired.jpg":
/*!***************************************!*\
  !*** ./assets/images/cards/tired.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/tired.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/tired.jpg?");

/***/ }),

/***/ "./assets/images/cards/turtle.jpg":
/*!****************************************!*\
  !*** ./assets/images/cards/turtle.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/cards/turtle.jpg\";\n\n//# sourceURL=webpack:///./assets/images/cards/turtle.jpg?");

/***/ }),

/***/ "./assets/images/jpg/bg.jpg":
/*!**********************************!*\
  !*** ./assets/images/jpg/bg.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/jpg/bg.jpg\";\n\n//# sourceURL=webpack:///./assets/images/jpg/bg.jpg?");

/***/ }),

/***/ "./assets/images/png/favicon.png":
/*!***************************************!*\
  !*** ./assets/images/png/favicon.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/png/favicon.png\";\n\n//# sourceURL=webpack:///./assets/images/png/favicon.png?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ \"./js/cards.js\");\n\n\nfunction requireAll(r) {\n  r.keys().forEach(r);\n}\n\nrequireAll(__webpack_require__(\"./assets sync recursive \\\\.(png|svg|jpg|jpe?g|gif)$\"));\nrequireAll(__webpack_require__(\"./assets sync recursive \\\\.(mp3)$\"));\nvar defaultCardsContent = document.querySelector('.cards-content');\nvar defaultCardsFragment = document.createDocumentFragment();\n_cards__WEBPACK_IMPORTED_MODULE_0__[\"defaultCards\"].forEach(function (card) {\n  var divElem = document.createElement('div');\n  divElem.classList.add(\"default-card\");\n  var defaultCardElement = \"\\n    <div class=\\\"card\\\" style=\\\"width: 18rem;\\\">\\n    <img src=\\\"\".concat(card.image, \"\\\" class=\\\"card-img-top\\\" alt=\\\"\").concat(card.title, \" image\\\">\\n    <div class=\\\"card-body\\\">\\n      <p class=\\\"card-text\\\">\").concat(card.title, \"</p>\\n    </div>\\n  </div>\\n    \");\n  divElem.innerHTML = defaultCardElement;\n  defaultCardsFragment.appendChild(divElem);\n});\ndefaultCardsContent.appendChild(defaultCardsFragment);\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/burger.js":
/*!**********************!*\
  !*** ./js/burger.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar menu = document.querySelector('.burger-menu');\nvar menuButton = document.querySelector('.burger-menu_button');\nvar button = document.querySelector('.hamburger', '.hamburger__line');\nvar links = document.querySelectorAll('.burger-menu_link');\nvar overlay = document.querySelector('.burger-menu_overlay');\nvar label = false;\n\nfunction rotateBurger() {\n  if (!label) {\n    button.style = 'transform: rotate(90deg);';\n    label = true;\n  } else {\n    button.style = 'transform: rotate(180deg);';\n    label = false;\n  }\n}\n\nfunction toggleMenu() {\n  menu.classList.toggle('burger-menu_active');\n\n  if (menu.classList.contains('burger-menu_active')) {\n    document.body.style = 'overflow: hidden';\n  } else {\n    document.body.style = 'overflow: visible';\n  }\n}\n\nmenuButton.addEventListener('click', function (e) {\n  e.preventDefault();\n  rotateBurger();\n  toggleMenu();\n});\nmenu.addEventListener('click', function () {\n  button.style = 'z-index: 23;transform: rotate(270deg);';\n});\noverlay.addEventListener('click', function (e) {\n  e.preventDefault();\n  rotateBurger();\n  button.style = 'z-index: 23;';\n});\n\n_toConsumableArray(links).forEach(function (item) {\n  item.addEventListener('click', toggleMenu);\n});\n\noverlay.addEventListener('click', toggleMenu);\n\n//# sourceURL=webpack:///./js/burger.js?");

/***/ }),

/***/ "./js/cards.js":
/*!*********************!*\
  !*** ./js/cards.js ***!
  \*********************/
/*! exports provided: defaultCards, cards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultCards\", function() { return defaultCards; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cards\", function() { return cards; });\nvar cards = [['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions', 'Fairytales', 'Food'], [{\n  word: 'cry',\n  translation: 'плакать',\n  image: './assets/images/cards/cry.jpg',\n  audioSrc: './assets/audio/cry.mp3'\n}, {\n  word: 'dance',\n  translation: 'танцевать',\n  image: './assets/images/cards/dance.jpg',\n  audioSrc: './assets/audio/dance.mp3'\n}, {\n  word: 'dive',\n  translation: 'нырять',\n  image: './assets/images/cards/dive.jpg',\n  audioSrc: './assets/audio/dive.mp3'\n}, {\n  word: 'draw',\n  translation: 'рисовать',\n  image: './assets/images/cards/draw.jpg',\n  audioSrc: './assets/audio/draw.mp3'\n}, {\n  word: 'fish',\n  translation: 'ловить рыбу',\n  image: './assets/images/cards/fish.jpg',\n  audioSrc: './assets/audio/fish.mp3'\n}, {\n  word: 'fly',\n  translation: 'летать',\n  image: './assets/images/cards/fly.jpg',\n  audioSrc: './assets/audio/fly.mp3'\n}, {\n  word: 'hug',\n  translation: 'обнимать',\n  image: './assets/images/cards/hug.jpg',\n  audioSrc: './assets/audio/hug.mp3'\n}, {\n  word: 'jump',\n  translation: 'прыгать',\n  image: './assets/images/cards/jump.jpg',\n  audioSrc: './assets/audio/jump.mp3'\n}], [{\n  word: 'open',\n  translation: 'открывать',\n  image: './assets/images/cards/open.jpg',\n  audioSrc: './assets/audio/open.mp3'\n}, {\n  word: 'play',\n  translation: 'играть',\n  image: './assets/images/cards/play.jpg',\n  audioSrc: './assets/audio/play.mp3'\n}, {\n  word: 'point',\n  translation: 'указывать',\n  image: './assets/images/cards/point.jpg',\n  audioSrc: './assets/audio/point.mp3'\n}, {\n  word: 'ride',\n  translation: 'ездить',\n  image: './assets/images/cards/ride.jpg',\n  audioSrc: './assets/audio/ride.mp3'\n}, {\n  word: 'run',\n  translation: 'бегать',\n  image: './assets/images/cards/run.jpg',\n  audioSrc: './assets/audio/run.mp3'\n}, {\n  word: 'sing',\n  translation: 'петь',\n  image: './assets/images/cards/sing.jpg',\n  audioSrc: './assets/audio/sing.mp3'\n}, {\n  word: 'skip',\n  translation: 'пропускать, прыгать',\n  image: './assets/images/cards/skip.jpg',\n  audioSrc: './assets/audio/skip.mp3'\n}, {\n  word: 'swim',\n  translation: 'плавать',\n  image: './assets/images/cards/swim.jpg',\n  audioSrc: './assets/audio/swim.mp3'\n}], [{\n  word: 'cat',\n  translation: 'кот',\n  image: './assets/images/cards/cat.jpg',\n  audioSrc: './assets/audio/cat.mp3'\n}, {\n  word: 'chick',\n  translation: 'цыплёнок',\n  image: './assets/images/cards/chick.jpg',\n  audioSrc: './assets/audio/chick.mp3'\n}, {\n  word: 'chicken',\n  translation: 'курица',\n  image: './assets/images/cards/chicken.jpg',\n  audioSrc: './assets/audio/chicken.mp3'\n}, {\n  word: 'dog',\n  translation: 'собака',\n  image: './assets/images/cards/dog.jpg',\n  audioSrc: './assets/audio/dog.mp3'\n}, {\n  word: 'horse',\n  translation: 'лошадь',\n  image: './assets/images/cards/horse.jpg',\n  audioSrc: './assets/audio/horse.mp3'\n}, {\n  word: 'pig',\n  translation: 'свинья',\n  image: './assets/images/cards/pig.jpg',\n  audioSrc: './assets/audio/pig.mp3'\n}, {\n  word: 'rabbit',\n  translation: 'кролик',\n  image: './assets/images/cards/rabbit.jpg',\n  audioSrc: './assets/audio/rabbit.mp3'\n}, {\n  word: 'sheep',\n  translation: 'овца',\n  image: './assets/images/cards/sheep.jpg',\n  audioSrc: './assets/audio/sheep.mp3'\n}], [{\n  word: 'bird',\n  translation: 'птица',\n  image: './assets/images/cards/bird.jpg',\n  audioSrc: './assets/audio/bird.mp3'\n}, {\n  word: 'fish',\n  translation: 'рыба',\n  image: './assets/images/cards/fish1.jpg',\n  audioSrc: './assets/audio/fish.mp3'\n}, {\n  word: 'frog',\n  translation: 'жаба',\n  image: './assets/images/cards/frog.jpg',\n  audioSrc: './assets/audio/frog.mp3'\n}, {\n  word: 'giraffe',\n  translation: 'жирафа',\n  image: './assets/images/cards/giraffe.jpg',\n  audioSrc: './assets/audio/giraffe.mp3'\n}, {\n  word: 'lion',\n  translation: 'лев',\n  image: './assets/images/cards/lion.jpg',\n  audioSrc: './assets/audio/lion.mp3'\n}, {\n  word: 'mouse',\n  translation: 'мышь',\n  image: './assets/images/cards/mouse.jpg',\n  audioSrc: './assets/audio/mouse.mp3'\n}, {\n  word: 'turtle',\n  translation: 'черепаха',\n  image: './assets/images/cards/turtle.jpg',\n  audioSrc: './assets/audio/turtle.mp3'\n}, {\n  word: 'dolphin',\n  translation: 'дельфин',\n  image: './assets/images/cards/dolphin.jpg',\n  audioSrc: './assets/audio/dolphin.mp3'\n}], [{\n  word: 'skirt',\n  translation: 'юбка',\n  image: './assets/images/cards/skirt.jpg',\n  audioSrc: './assets/audio/skirt.mp3'\n}, {\n  word: 'pants',\n  translation: 'брюки',\n  image: './assets/images/cards/pants.jpg',\n  audioSrc: './assets/audio/pants.mp3'\n}, {\n  word: 'blouse',\n  translation: 'блузка',\n  image: './assets/images/cards/blouse.jpg',\n  audioSrc: './assets/audio/blouse.mp3'\n}, {\n  word: 'dress',\n  translation: 'платье',\n  image: './assets/images/cards/dress.jpg',\n  audioSrc: './assets/audio/dress.mp3'\n}, {\n  word: 'boot',\n  translation: 'ботинок',\n  image: './assets/images/cards/boot.jpg',\n  audioSrc: './assets/audio/boot.mp3'\n}, {\n  word: 'shirt',\n  translation: 'рубашка',\n  image: './assets/images/cards/shirt.jpg',\n  audioSrc: './assets/audio/shirt.mp3'\n}, {\n  word: 'coat',\n  translation: 'пальто',\n  image: './assets/images/cards/coat.jpg',\n  audioSrc: './assets/audio/coat.mp3'\n}, {\n  word: 'shoe',\n  translation: 'туфли',\n  image: './assets/images/cards/shoe.jpg',\n  audioSrc: './assets/audio/shoe.mp3'\n}], [{\n  word: 'sad',\n  translation: 'грустный',\n  image: './assets/images/cards/sad.jpg',\n  audioSrc: './assets/audio/sad.mp3'\n}, {\n  word: 'angry',\n  translation: 'сердитый',\n  image: './assets/images/cards/angry.jpg',\n  audioSrc: './assets/audio/angry.mp3'\n}, {\n  word: 'happy',\n  translation: 'счастливый',\n  image: './assets/images/cards/happy.jpg',\n  audioSrc: './assets/audio/happy.mp3'\n}, {\n  word: 'tired',\n  translation: 'уставший',\n  image: './assets/images/cards/tired.jpg',\n  audioSrc: './assets/audio/tired.mp3'\n}, {\n  word: 'surprised',\n  translation: 'удивлённый',\n  image: './assets/images/cards/surprised.jpg',\n  audioSrc: './assets/audio/surprised.mp3'\n}, {\n  word: 'scared',\n  translation: 'испуганный',\n  image: './assets/images/cards/scared.jpg',\n  audioSrc: './assets/audio/scared.mp3'\n}, {\n  word: 'smile',\n  translation: 'улыбка',\n  image: './assets/images/cards/smile.jpg',\n  audioSrc: './assets/audio/smile.mp3'\n}, {\n  word: 'laugh',\n  translation: 'смех',\n  image: './assets/images/cards/laugh.jpg',\n  audioSrc: './assets/audio/laugh.mp3'\n}], [{\n  word: 'dragon',\n  translation: 'дракон',\n  image: './assets/images/cards/sad.jpg',\n  audioSrc: './assets/audio/sad.mp3'\n}, {\n  word: 'knight',\n  translation: 'рыцарь',\n  image: './assets/images/cards/angry.jpg',\n  audioSrc: './assets/audio/angry.mp3'\n}, {\n  word: 'witch',\n  translation: 'ведьма',\n  image: './assets/images/cards/happy.jpg',\n  audioSrc: './assets/audio/happy.mp3'\n}, {\n  word: 'king',\n  translation: 'король',\n  image: './assets/images/cards/tired.jpg',\n  audioSrc: './assets/audio/tired.mp3'\n}, {\n  word: 'mermaid',\n  translation: 'русалка',\n  image: './assets/images/cards/surprised.jpg',\n  audioSrc: './assets/audio/surprised.mp3'\n}, {\n  word: 'princess',\n  translation: 'принцесса',\n  image: './assets/images/cards/scared.jpg',\n  audioSrc: './assets/audio/scared.mp3'\n}, {\n  word: 'wizard',\n  translation: 'волшебник',\n  image: './assets/images/cards/smile.jpg',\n  audioSrc: './assets/audio/smile.mp3'\n}, {\n  word: 'fairy',\n  translation: 'фея',\n  image: './assets/images/cards/laugh.jpg',\n  audioSrc: './assets/audio/laugh.mp3'\n}], [{\n  word: 'salad',\n  translation: 'салат',\n  image: './assets/images/cards/sad.jpg',\n  audioSrc: './assets/audio/sad.mp3'\n}, {\n  word: 'cake',\n  translation: 'пирог',\n  image: './assets/images/cards/angry.jpg',\n  audioSrc: './assets/audio/angry.mp3'\n}, {\n  word: 'tako',\n  translation: 'тако',\n  image: './assets/images/cards/happy.jpg',\n  audioSrc: './assets/audio/happy.mp3'\n}, {\n  word: 'bread',\n  translation: 'хлеб',\n  image: './assets/images/cards/tired.jpg',\n  audioSrc: './assets/audio/tired.mp3'\n}, {\n  word: 'hot-dog',\n  translation: 'хот-дог',\n  image: './assets/images/cards/surprised.jpg',\n  audioSrc: './assets/audio/surprised.mp3'\n}, {\n  word: 'ham',\n  translation: 'ветчина',\n  image: './assets/images/cards/scared.jpg',\n  audioSrc: './assets/audio/scared.mp3'\n}, {\n  word: 'sushi',\n  translation: 'суши',\n  image: './assets/images/cards/smile.jpg',\n  audioSrc: './assets/audio/smile.mp3'\n}, {\n  word: 'sausage',\n  translation: 'колбаса',\n  image: './assets/images/cards/laugh.jpg',\n  audioSrc: './assets/audio/laugh.mp3'\n}]];\nvar defaultCards = [{\n  title: 'Action (set A)',\n  image: './assets/images/cards/actions_1.jpg'\n}, {\n  title: 'Action (set B)',\n  image: './assets/images/cards/actions_2.jpg'\n}, {\n  title: 'Animal (set A)',\n  image: './assets/images/cards/animals_1.jpg'\n}, {\n  title: 'Animal (set B)',\n  image: './assets/images/cards/animals_2.jpg'\n}, {\n  title: 'Clothes',\n  image: './assets/images/cards/clothes_1.jpg'\n}, {\n  title: 'Emotions',\n  image: './assets/images/cards/emotions_1.jpg'\n}, {\n  title: 'Fairytales',\n  image: './assets/images/cards/fairytales_1.jpg'\n}, {\n  title: 'Food',\n  image: './assets/images/cards/food_1.jpg'\n}];\n\n\n//# sourceURL=webpack:///./js/cards.js?");

/***/ }),

/***/ "./js/switch.js":
/*!**********************!*\
  !*** ./js/switch.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar checkbox = document.getElementById('checkbox');\nvar play = document.querySelector('.play');\nvar train = document.querySelector('.train'); // eslint-disable-next-line import/no-mutable-exports\n\nvar isTrain = true;\ncheckbox.addEventListener('change', function () {\n  if (train.classList.contains('none')) {\n    train.classList.remove('none');\n    play.classList.toggle('none');\n    isTrain = true;\n  } else {\n    play.classList.remove('none');\n    train.classList.toggle('none');\n    isTrain = false;\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (isTrain);\n\n//# sourceURL=webpack:///./js/switch.js?");

/***/ }),

/***/ "./sass/style.scss":
/*!*************************!*\
  !*** ./sass/style.scss ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ../node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ../node_modules/sass-loader/dist/cjs.js):\\nSassError: style declaration must contain a value\\n        on line 7 of src/sass/components/_main.scss\\n        from line 11 of src/sass/style.scss\\n>>   padding-right: ;\\n\\n   ---------------^\\n\\n    at /Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/webpack/lib/NormalModule.js:316:20\\n    at /Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/loader-runner/lib/LoaderRunner.js:367:11\\n    at /Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/loader-runner/lib/LoaderRunner.js:233:18\\n    at context.callback (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\\n    at Object.callback (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/sass-loader/dist/index.js:62:7)\\n    at Object.done [as callback] (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/neo-async/async.js:8069:18)\\n    at options.error (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/node-sass/lib/index.js:293:32)\");\n\n//# sourceURL=webpack:///./sass/style.scss?");

/***/ }),

/***/ 0:
/*!***************************************************************************************!*\
  !*** multi ./js/app.js ./js/burger.js ./js/cards.js ./js/switch.js ./sass/style.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/app.js */\"./js/app.js\");\n__webpack_require__(/*! ./js/burger.js */\"./js/burger.js\");\n__webpack_require__(/*! ./js/cards.js */\"./js/cards.js\");\n__webpack_require__(/*! ./js/switch.js */\"./js/switch.js\");\nmodule.exports = __webpack_require__(/*! ./sass/style.scss */\"./sass/style.scss\");\n\n\n//# sourceURL=webpack:///multi_./js/app.js_./js/burger.js_./js/cards.js_./js/switch.js_./sass/style.scss?");

/***/ })

/******/ });