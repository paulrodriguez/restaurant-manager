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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/react/App.js":
/*!***********************************!*\
  !*** ./resources/js/react/App.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/paul/programming/restaurant_manager/resources/js/react/App.js: Unexpected token (9:6)\n\n\u001b[0m \u001b[90m  7 | \u001b[39m  render () {\u001b[0m\n\u001b[0m \u001b[90m  8 | \u001b[39m    \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  9 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33mBrowserRouter\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 11 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33mRoute\u001b[39m exact path\u001b[33m=\u001b[39m\u001b[32m'/'\u001b[39m component\u001b[33m=\u001b[39m{\u001b[33mRestaurant\u001b[39m} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at Parser.raise (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:3831:17)\n    at Parser.unexpected (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:5143:16)\n    at Parser.parseExprAtom (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:6283:20)\n    at Parser.parseExprSubscripts (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:5862:23)\n    at Parser.parseMaybeUnary (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:5842:21)\n    at Parser.parseExprOps (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:5729:23)\n    at Parser.parseMaybeConditional (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:5702:23)\n    at Parser.parseMaybeAssign (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:5647:21)\n    at Parser.parseParenAndDistinguishExpression (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:6435:28)\n    at Parser.parseExprAtom (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:6215:21)\n    at Parser.parseExprSubscripts (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:5862:23)\n    at Parser.parseMaybeUnary (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:5842:21)\n    at Parser.parseExprOps (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:5729:23)\n    at Parser.parseMaybeConditional (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:5702:23)\n    at Parser.parseMaybeAssign (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:5647:21)\n    at Parser.parseExpression (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:5595:23)\n    at Parser.parseReturnStatement (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:7617:28)\n    at Parser.parseStatementContent (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:7295:21)\n    at Parser.parseStatement (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:7243:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:7810:25)\n    at Parser.parseBlockBody (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:7797:10)\n    at Parser.parseBlock (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:7786:10)\n    at Parser.parseFunctionBody (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:6876:24)\n    at Parser.parseFunctionBodyAndFinish (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:6860:10)\n    at Parser.parseMethod (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:6804:10)\n    at Parser.pushClassMethod (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:8200:30)\n    at Parser.parseClassMemberWithIsStatic (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:8125:12)\n    at Parser.parseClassMember (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:8067:10)\n    at withTopicForbiddingContext (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:8022:14)\n    at Parser.withTopicForbiddingContext (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:7150:14)\n    at Parser.parseClassBody (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:7999:10)\n    at Parser.parseClass (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:7973:10)\n    at Parser.parseStatementContent (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:7289:21)\n    at Parser.parseStatement (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:7243:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:7810:25)\n    at Parser.parseBlockBody (/home/paul/programming/restaurant_manager/node_modules/@babel/parser/lib/index.js:7797:10)");

/***/ }),

/***/ 1:
/*!*****************************************!*\
  !*** multi ./resources/js/react/App.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/paul/programming/restaurant_manager/resources/js/react/App.js */"./resources/js/react/App.js");


/***/ })

/******/ });