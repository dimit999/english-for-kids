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

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ../node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/dima/repo/rs_scool/english-for-kids/english-for-kids/src/js/app.js: Unexpected token, expected \\\";\\\" (17:7)\\n\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m  \\u001b[36mconst\\u001b[39m divElem \\u001b[33m=\\u001b[39m document\\u001b[33m.\\u001b[39mcreateElement(\\u001b[32m'div'\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m  divElem\\u001b[33m.\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 17 | \\u001b[39m\\t\\u001b[36mconst\\u001b[39m defaultCardElement \\u001b[33m=\\u001b[39m \\u001b[32m`\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m\\t      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 18 | \\u001b[39m\\u001b[32m    <div class=\\\"card\\\" style=\\\"width: 18rem;\\\">\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 19 | \\u001b[39m\\u001b[32m    <img src=\\\"${card.image}\\\" class=\\\"card-img-top\\\" alt=\\\"${card.title} image\\\">\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 20 | \\u001b[39m\\u001b[32m    <div class=\\\"card-body\\\">\\u001b[39m\\u001b[0m\\n    at Parser._raise (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:790:17)\\n    at Parser.raiseWithData (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:783:17)\\n    at Parser.raise (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:777:17)\\n    at Parser.unexpected (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:9095:16)\\n    at Parser.semicolon (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:9077:40)\\n    at Parser.parseExpressionStatement (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:12179:10)\\n    at Parser.parseStatementContent (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:11775:19)\\n    at Parser.parseStatement (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:11639:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:12221:25)\\n    at Parser.parseBlockBody (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:12207:10)\\n    at Parser.parseBlock (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:12191:10)\\n    at Parser.parseFunctionBody (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:11184:24)\\n    at Parser.parseArrowExpression (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:11156:10)\\n    at Parser.parseParenAndDistinguishExpression (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:10729:12)\\n    at Parser.parseExprAtom (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:10424:21)\\n    at Parser.parseExprSubscripts (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:10094:23)\\n    at Parser.parseUpdate (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:10074:21)\\n    at Parser.parseMaybeUnary (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:10063:17)\\n    at Parser.parseExprOps (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:9933:23)\\n    at Parser.parseMaybeConditional (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:9907:23)\\n    at Parser.parseMaybeAssign (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:9870:21)\\n    at /Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:9837:39\\n    at Parser.allowInAnd (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:11510:12)\\n    at Parser.parseMaybeAssignAllowIn (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:9837:17)\\n    at Parser.parseExprListItem (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:11271:18)\\n    at Parser.parseCallExpressionArguments (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:10300:22)\\n    at Parser.parseCoverCallAndAsyncArrowHead (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:10203:29)\\n    at Parser.parseSubscript (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:10139:19)\\n    at Parser.parseSubscripts (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:10111:19)\\n    at Parser.parseExprSubscripts (/Users/dima/repo/rs_scool/english-for-kids/english-for-kids/node_modules/@babel/parser/lib/index.js:10100:17)\");\n\n//# sourceURL=webpack:///./js/app.js?");

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./sass/style.scss?");

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