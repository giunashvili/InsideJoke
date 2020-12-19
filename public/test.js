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

/***/ "./resources/js/test.js":
/*!******************************!*\
  !*** ./resources/js/test.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var serverData = [{
  id: 1,
  name: 'გელა',
  profession: 'კაფელჩიკი'
}, {
  id: 2,
  name: 'ზურა',
  profession: 'მალიარი'
}, {
  id: 3,
  name: 'გია',
  profession: 'სანტეხნიკი'
}, {
  id: 4,
  name: 'გოჩა',
  profession: 'ტარაილერჩიკი'
}, {
  id: 5,
  name: 'ხვიჩა',
  profession: 'მამლუქი'
}];
/**
 * UI Component
 */

var component = function component(props) {
  return "\n  <a href=\"#\" class=\"collection-item\" member_id=\"".concat(props.id, "\">").concat(props.name, "</a>\n  ");
};
/**
 * Root component.
 */


var root = function root() {
  return document.getElementById('root');
};
/**
 * Regular element.
 */


var allElements = function allElements() {
  return Array.from(document.getElementsByClassName('collection-item'));
};
/**
 * Render data.
 */


var renderData = function renderData() {
  var content = serverData.map(function (el) {
    return component({
      id: el.id,
      name: el.name
    });
  }).join(' ');
  root().innerHTML = content;
};

document.addEventListener('DOMContentLoaded', function () {
  renderData();
  allElements().forEach(function (el) {
    return el.addEventListener('click', clickAction);
  });
});
/**
 * Click action.
 * 
 * @param {Event} e
 */

var clickAction = function clickAction(e) {
  var member = e.target;
  console.log(member.attributes.member_id.value);
};

/***/ }),

/***/ 1:
/*!************************************!*\
  !*** multi ./resources/js/test.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/george/Projects/InsideJoke/resources/js/test.js */"./resources/js/test.js");


/***/ })

/******/ });