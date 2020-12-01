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

/***/ "./resources/js/members/UI/elements.js":
/*!*********************************************!*\
  !*** ./resources/js/members/UI/elements.js ***!
  \*********************************************/
/*! exports provided: memberFrame, addNewMemberButton, mainWindow, backButton, createNewMemberButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memberFrame", function() { return memberFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewMemberButton", function() { return addNewMemberButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainWindow", function() { return mainWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backButton", function() { return backButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewMemberButton", function() { return createNewMemberButton; });
var memberFrame = function memberFrame() {
  return document.querySelector('.pagination-space');
};
var addNewMemberButton = function addNewMemberButton() {
  return document.querySelector('#add-new-member-button');
};
var mainWindow = function mainWindow() {
  return document.querySelector('#main-window-members');
};
var backButton = function backButton() {
  return document.querySelector('#back-to-members-list');
};
var createNewMemberButton = function createNewMemberButton() {
  return document.querySelector('#createNewMemberButton');
};

/***/ }),

/***/ "./resources/js/members/UI/helper-items.js":
/*!*************************************************!*\
  !*** ./resources/js/members/UI/helper-items.js ***!
  \*************************************************/
/*! exports provided: mainWindowBackup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainWindowBackup", function() { return mainWindowBackup; });
function mainWindowBackup() {
  return "\n            <h1>\n                <span class=\"page-header\">\u10EF\u10D2\u10E3\u10E4\u10D8\u10E1 \u10EC\u10D4\u10D5\u10E0\u10D4\u10D1\u10D8</span>\n            </h1>\n            <div class=\"pagination-space\">\n                \n            </div>\n            <div class=\"add-button\" id=\"add-new-member-button\">\u10D0\u10EE\u10D0\u10DA\u10D8 \u10EC\u10D4\u10D5\u10E0\u10D8 \u10D2\u10D5\u10E7\u10D0\u10D5\u10E1?</div>\n    ";
}

/***/ }),

/***/ "./resources/js/members/UI/member-item.js":
/*!************************************************!*\
  !*** ./resources/js/members/UI/member-item.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (img, name) {
  return "\n            <div class=\"member-frame\">\n                    <div class=\"member-photo-and-name\">\n                        <div class=\"member-picture\">\n                            <div class=\"member-picture-inner\" >\n                                <img src=\"".concat(img, "\" />\n                            </div>\n                            <img class=\"member-picture-edit\" src=\"/assets/icons/EditPhotoBtn.svg\" />\n                        </div>\n                        <div class=\"member-name\"> ").concat(name, " </div>\n                    </div>\n                    <div class=\"member-frame-buttons-space\">\n                        <div class=\"view\">\n                            <div class=\"view-outer\"></div>\n                            <div class=\"view-inner\"></div>\n                        </div>\n                        <div class=\"edit\">\n                            <div class=\"edit-outer\"></div>\n                            <div class=\"edit-inner\"></div>\n                        </div>\n                        <div class=\"delete\">\n                            <div class=\"delete-outer\"></div>\n                            <div class=\"delete-inner\"></div>\n                        </div>\n                    </div>\n                </div>\n            ");
});

/***/ }),

/***/ "./resources/js/members/UI/new-member-form.js":
/*!****************************************************!*\
  !*** ./resources/js/members/UI/new-member-form.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return "\n            <h1>\n                <span class=\"page-header\">\u10D3\u10D0\u10D0\u10DB\u10D0\u10E2\u10D4 \u10EF\u10D2\u10E3\u10E4\u10D8\u10E1 \u10D0\u10EE\u10D0\u10DA\u10D8 \u10EC\u10D4\u10D5\u10E0\u10D8</span>\n            </h1>\n                <form>\n                    <input \n                        type=\"text\" \n                        id=\"newMemberName\" \n                        name=\"newMemberName\" \n                        placeholder=\"\u10E1\u10D0\u10EE\u10D4\u10DA\u10D8\"\n                    >\n                    <div class=\"memberParameters\">\n                        <input \n                            class=\"parameter\"\n                            type=\"text\" \n                            id=\"newMemberInstrument\" \n                            name=\"newMemberInstrument\" \n                            placeholder=\"\u10D8\u10DC\u10E1\u10E2\u10E0\u10E3\u10DB\u10D4\u10DC\u10E2\u10D8\"\n                        >\n                        <input \n                            class=\"parameter\"\n                            type=\"number\" \n                            id=\"orbitWidth\" \n                            name=\"orbitWidth\" \n                            placeholder=\"\u10DD\u10E0\u10D1\u10D8\u10E2\u10D8\u10E1 \u10E1\u10D8\u10D2\u10D0\u10DC\u10D4\"\n                        >\n                        <input \n                            class=\"parameter\" \n                            type=\"text\"\n                            id=\"memberColor\"\n                            name=\"memberColor\"\n                            placeholder=\"\u10E4\u10D4\u10E0\u10D8\"\n                        >\n                    </div>\n                    <textarea \n                        id=\"memberDesc\" \n                        name=\"memberDesc\" \n                        placeholder=\"\u10E0\u10D0\u10E1 \u10D2\u10D5\u10D4\u10E2\u10E7\u10D5\u10D8\u10D7 \u10D0\u10DB \u10EC\u10D4\u10D5\u10E0\u10D8\u10E1 \u10E8\u10D4\u10E1\u10D0\u10EE\u10D4\u10D1?\"\n                    >\n                    </textarea>\n                    <input \n                        type=\"button\" \n                        class=\"blue-add-button\" \n                        id=\"createNewMemberButton\"\n                        value=\"\u10D3\u10D0\u10D0\u10DB\u10D0\u10E2\u10D4 \u10EC\u10D4\u10D5\u10E0\u10D8\"\n                    >\n                    <div class=\"back-button\" id=\"back-to-members-list\">\u10D2\u10D0\u10D3\u10D8 \u10E3\u10D9\u10D0\u10DC</div>\n                </form>\n            ";
});

/***/ }),

/***/ "./resources/js/members/index.js":
/*!***************************************!*\
  !*** ./resources/js/members/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/elements */ "./resources/js/members/UI/elements.js");
/* harmony import */ var _utils_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/renderer */ "./resources/js/members/utils/renderer.js");



window.onload = function () {
  Object(_utils_renderer__WEBPACK_IMPORTED_MODULE_1__["renderMembers"])();
  Object(_UI_elements__WEBPACK_IMPORTED_MODULE_0__["addNewMemberButton"])().addEventListener('click', _utils_renderer__WEBPACK_IMPORTED_MODULE_1__["renderNewMemberForm"]);
};

/***/ }),

/***/ "./resources/js/members/utils/actions.js":
/*!***********************************************!*\
  !*** ./resources/js/members/utils/actions.js ***!
  \***********************************************/
/*! exports provided: createNewMember */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewMember", function() { return createNewMember; });
/* harmony import */ var _utils_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/renderer */ "./resources/js/members/utils/renderer.js");

function createNewMember() {
  var name = document.getElementById("newMemberName").value;
  var type = document.getElementById("newMemberInstrument").value;
  var description = document.getElementById("memberDesc").value;
  var orbital_distance = document.getElementById("orbitWidth").value;
  var color = document.getElementById("memberColor").value; // აქ API უნდა გავიტანო მერე api.js-ში

  fetch('/api/members/create', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      type: type,
      description: description,
      orbital_distance: orbital_distance,
      color: color
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    Object(_utils_renderer__WEBPACK_IMPORTED_MODULE_0__["reRenderMembers"])();
  })["catch"](function (err) {
    return console.log(err);
  });
}

/***/ }),

/***/ "./resources/js/members/utils/api.js":
/*!*******************************************!*\
  !*** ./resources/js/members/utils/api.js ***!
  \*******************************************/
/*! exports provided: allMembersAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allMembersAPI", function() { return allMembersAPI; });
var allMembersAPI = '/api/members/all';

/***/ }),

/***/ "./resources/js/members/utils/helpers.js":
/*!***********************************************!*\
  !*** ./resources/js/members/utils/helpers.js ***!
  \***********************************************/
/*! exports provided: mainMembers, beautifulLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainMembers", function() { return mainMembers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beautifulLoader", function() { return beautifulLoader; });
/**
 * ამ წუთში ეს არსად მჭირდება, მაგრამ დამჭირდება და იყოს.
 */
var mainMembers = null;
function beautifulLoader() {
  var mainWindow = document.querySelector('#main-window-members');
  var loader = "\n        <img \n        src=\"/assets/imgs/loader.gif\"\n        style=\"width:440px; display:block; margin:auto\"\n        />\n        ";
  mainWindow.innerHTML = loader;
}

/***/ }),

/***/ "./resources/js/members/utils/imgs.js":
/*!********************************************!*\
  !*** ./resources/js/members/utils/imgs.js ***!
  \********************************************/
/*! exports provided: editPhotoBtn, beautifulLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editPhotoBtn", function() { return editPhotoBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beautifulLoader", function() { return beautifulLoader; });
var editPhotoBtn = '/assets/icons/EditPhotoBtn.svg';
var beautifulLoader = '/assets/imgs/loader.gif';

/***/ }),

/***/ "./resources/js/members/utils/renderer.js":
/*!************************************************!*\
  !*** ./resources/js/members/utils/renderer.js ***!
  \************************************************/
/*! exports provided: renderMembers, reRenderMembers, renderNewMemberForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderMembers", function() { return renderMembers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reRenderMembers", function() { return reRenderMembers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderNewMemberForm", function() { return renderNewMemberForm; });
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/api */ "./resources/js/members/utils/api.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helpers */ "./resources/js/members/utils/helpers.js");
/* harmony import */ var _UI_member_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/member-item */ "./resources/js/members/UI/member-item.js");
/* harmony import */ var _UI_new_member_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/new-member-form */ "./resources/js/members/UI/new-member-form.js");
/* harmony import */ var _UI_helper_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/helper-items */ "./resources/js/members/UI/helper-items.js");
/* harmony import */ var _utils_imgs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/imgs */ "./resources/js/members/utils/imgs.js");
/* harmony import */ var _UI_elements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/elements */ "./resources/js/members/UI/elements.js");
/* harmony import */ var _utils_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/actions */ "./resources/js/members/utils/actions.js");








function renderMembers() {
  fetch(_utils_api__WEBPACK_IMPORTED_MODULE_0__["allMembersAPI"]).then(function (result) {
    return result.json();
  }).then(function (data) {
    var members = data.map(function (el) {
      el.img === null && (el.img = _utils_imgs__WEBPACK_IMPORTED_MODULE_5__["editPhotoBtn"]);
      return Object(_UI_member_item__WEBPACK_IMPORTED_MODULE_2__["default"])(el.img, el.name);
    }).join(' ');
    Object(_UI_elements__WEBPACK_IMPORTED_MODULE_6__["memberFrame"])().innerHTML = members;
  });
}
function reRenderMembers() {
  var paginationSpace = Object(_UI_elements__WEBPACK_IMPORTED_MODULE_6__["mainWindow"])();
  var backup = Object(_UI_helper_items__WEBPACK_IMPORTED_MODULE_4__["mainWindowBackup"])();
  console.log(paginationSpace);
  paginationSpace.innerHTML = backup;
  Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["beautifulLoader"])();
  renderMembers();
  Object(_UI_elements__WEBPACK_IMPORTED_MODULE_6__["addNewMemberButton"])().addEventListener('click', renderNewMemberForm);
}
function renderNewMemberForm() {
  var paginationSpace = Object(_UI_elements__WEBPACK_IMPORTED_MODULE_6__["mainWindow"])();
  var form = Object(_UI_new_member_form__WEBPACK_IMPORTED_MODULE_3__["default"])();
  paginationSpace.innerHTML = form;
  Object(_UI_elements__WEBPACK_IMPORTED_MODULE_6__["createNewMemberButton"])().addEventListener('click', _utils_actions__WEBPACK_IMPORTED_MODULE_7__["createNewMember"]);
  Object(_UI_elements__WEBPACK_IMPORTED_MODULE_6__["backButton"])().addEventListener('click', reRenderMembers);
}

/***/ }),

/***/ 1:
/*!*********************************************!*\
  !*** multi ./resources/js/members/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tamarela\Desktop\Programming\Projects\InsideJoke\resources\js\members\index.js */"./resources/js/members/index.js");


/***/ })

/******/ });