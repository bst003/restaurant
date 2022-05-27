/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/styles.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/styles.scss ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n  background-color: #FEFEFE;\n  color: #111;\n  font-family: \"Hind Siliguri\", sans-serif;\n  line-height: 1.3;\n}\n\n#old-content,\n#content {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.wrap {\n  position: relative;\n  display: block;\n  margin: 0 auto;\n  width: min(84%, 1160px);\n}\n.wrap.mini {\n  width: min(84%, 800px);\n}\n\n.center {\n  text-align: center;\n  justify-content: center;\n}\n\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3,\nh4,\n.h4 {\n  margin: 10px 0px;\n  color: #2EA28F;\n  font-weight: 700;\n}\n\nh1,\n.h1 {\n  font-size: 54px;\n}\n\nh2,\n.h2 {\n  font-size: 38px;\n}\n\nh3,\n.h3 {\n  font-size: 32px;\n}\n\nh4,\n.h4 {\n  font-size: 26px;\n}\n\np {\n  margin: 24px 0px;\n  font-size: 18px;\n}\n\nheader {\n  position: relative;\n  z-index: 2;\n  padding: 15px 0px;\n}\nheader .wrap {\n  display: flex;\n  align-items: center;\n  gap: 50px;\n}\n\n.logo {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 20px;\n  font-weight: 700;\n}\n.logo div {\n  height: 36px;\n  width: 36px;\n  background-color: #A22E41;\n  border-radius: 100%;\n}\n\n.nav-contain {\n  position: relative;\n  flex: 2;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.mm-trigger {\n  position: relative;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n  width: 40px;\n  background-color: initial;\n  border: initial;\n}\n.mm-trigger::before {\n  content: \"\\f0c9\";\n  font-family: \"Font Awesome 5 Free\";\n  font-size: 24px;\n  font-weight: 900;\n}\n.mm-trigger.active::before {\n  color: #A22E41;\n}\n\n.nav {\n  padding: 0px;\n  margin: 0px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 35px;\n  list-style-type: none;\n}\n.nav li a {\n  font-size: 18px;\n  font-weight: 600;\n  color: #111;\n  text-decoration: none;\n  text-transform: capitalize;\n  transition: all 0.2s;\n}\n.nav li a.active {\n  color: #A22E41;\n}\n.nav li a:hover, .nav li a:active {\n  color: #A22E41;\n}\n\n@media all and (max-width: 768px) {\n  .mm-trigger {\n    display: flex;\n  }\n\n  .nav {\n    display: none;\n    position: absolute;\n    top: 100%;\n    right: 0;\n    background-color: #FEFEFE;\n    padding: 20px;\n    flex-direction: column;\n    gap: 6px;\n  }\n  .nav.active {\n    display: flex;\n  }\n  .nav li {\n    text-align: right;\n  }\n}\n.hero {\n  position: relative;\n  display: flex;\n  align-items: center;\n  min-height: 400px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.hero::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #2EA28F;\n  opacity: 0.75;\n}\n.hero .wrap {\n  padding: 40px 0px;\n}\n.hero p {\n  color: #FEFEFE;\n}\n.hero p:not(.h1) {\n  font-size: 24px;\n  font-weight: 500;\n}\n\n.content-contain {\n  padding: 100px 0px;\n}\n.content-contain > div:not(:last-of-type) {\n  margin-bottom: 50px;\n}\n\n.menu-items {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  row-gap: 40px;\n  column-gap: 50px;\n}\n\n.menu-item .header {\n  display: flex;\n  justify-content: space-between;\n  column-gap: 12px;\n  row-gap: 4px;\n  margin: 0px 0px 8px;\n}\n.menu-item p {\n  margin: 0px;\n}\n.menu-item p.title {\n  font-weight: 600;\n}\n\n@media all and (max-width: 991px) {\n  .menu-items {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media all and (max-width: 599px) {\n  .menu-items {\n    grid-template-columns: 1fr;\n  }\n}\nfooter {\n  margin-top: auto;\n  padding: 15px;\n  text-align: center;\n  background-color: #A22E41;\n  color: #FEFEFE;\n  font-weight: 500;\n}", "",{"version":3,"sources":["webpack://./src/assets/scss/styles.scss"],"names":[],"mappings":"AAkBA;EACI,YAAA;AAjBJ;;AAoBA;EACI,YAAA;EACA,yBAlBI;EAmBJ,WAlBI;EAmBJ,wCAtBU;EAuBV,gBAAA;AAjBJ;;AAoBA;;EAEI,aAAA;EACA,sBAAA;EACA,YAAA;AAjBJ;;AAoBA;EACI,kBAAA;EACA,cAAA;EACA,cAAA;EACA,uBAAA;AAjBJ;AAoBI;EACI,sBAAA;AAlBR;;AAuBA;EACI,kBAAA;EACA,uBAAA;AApBJ;;AAsBA;;;;;;;;EAQI,gBAAA;EACA,cApDO;EAqDP,gBAAA;AAnBJ;;AAqBA;;EAEI,eAAA;AAlBJ;;AAoBA;;EAEI,eAAA;AAjBJ;;AAmBA;;EAEI,eAAA;AAhBJ;;AAkBA;;EAEI,eAAA;AAfJ;;AAiBA;EACI,gBAAA;EACA,eAAA;AAdJ;;AAqBA;EACI,kBAAA;EACA,UAAA;EACA,iBAAA;AAlBJ;AAoBI;EACI,aAAA;EACA,mBAAA;EACA,SAAA;AAlBR;;AAuBA;EACI,OAAA;EACA,aAAA;EACA,mBAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;AApBJ;AAsBI;EACI,YAAA;EACA,WAAA;EACA,yBAzGG;EA0GH,mBAAA;AApBR;;AAwBA;EACI,kBAAA;EACA,OAAA;EACA,aAAA;EACA,yBAAA;AArBJ;;AAwBA;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,yBAAA;EACA,eAAA;AArBJ;AAuBI;EACI,gBAAA;EACA,kCAAA;EACA,eAAA;EACA,gBAAA;AArBR;AA0BQ;EACI,cAzID;AAiHX;;AA+BA;EACI,YAAA;EACA,WAAA;EACA,aAAA;EACA,yBAAA;EACA,SAAA;EACA,qBAAA;AA5BJ;AAgCQ;EACI,eAAA;EACA,gBAAA;EACA,WAhKJ;EAiKI,qBAAA;EACA,0BAAA;EACA,oBAAA;AA9BZ;AAgCY;EACI,cAnKL;AAqIX;AAiCY;EAEI,cAxKL;AAwIX;;AA0CA;EAEI;IACI,aAAA;EAxCN;;EA2CE;IACI,aAAA;IACA,kBAAA;IACA,SAAA;IACA,QAAA;IACA,yBAjMA;IAkMA,aAAA;IACA,sBAAA;IACA,QAAA;EAxCN;EA0CM;IACI,aAAA;EAxCV;EA2CM;IACI,iBAAA;EAzCV;AACF;AAqDA;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,2BAAA;EACA,4BAAA;EACA,sBAAA;AAnDJ;AAqDI;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,mBAnOG;EAoOH,aAAA;AAnDR;AAqDI;EACI,iBAAA;AAnDR;AAqDI;EACI,cA/OA;AA4LR;AAqDQ;EACI,eAAA;EACA,gBAAA;AAnDZ;;AA0DA;EACI,kBAAA;AAvDJ;AAyDI;EACI,mBAAA;AAvDR;;AA6DA;EACI,aAAA;EACA,qCAAA;EACA,aAAA;EACA,gBAAA;AA1DJ;;AA+DI;EACI,aAAA;EACA,8BAAA;EACA,gBAAA;EACA,YAAA;EACA,mBAAA;AA5DR;AA+DI;EACI,WAAA;AA7DR;AA8DQ;EACI,gBAAA;AA5DZ;;AAmEA;EAEI;IACI,qCAAA;EAjEN;AACF;AAqEA;EAEI;IACI,0BAAA;EApEN;AACF;AA4EA;EACI,gBAAA;EACA,aAAA;EACA,kBAAA;EACA,yBAnTO;EAoTP,cAxTI;EAyTJ,gBAAA;AA1EJ","sourcesContent":["// Global Variables\n////////////////////////////////////\n\n\n$primaryFont: 'Hind Siliguri', sans-serif;\n\n$white: #FEFEFE;\n$black: #111;\n$lightGray: #ebeaea;\n\n$brandOne: #A22E41;\n$brandTwo: #2EA28F;\n$brandThree: #77D8C8;\n\n\n// Base Styles\n////////////////////////////////////\n\nhtml{\n    height: 100%;\n}\n\nbody{\n    height: 100%;\n    background-color: $white;\n    color: $black;\n    font-family: $primaryFont;\n    line-height: 1.3;\n}\n\n#old-content,\n#content{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.wrap{\n    position: relative;\n    display: block;\n    margin: 0 auto;\n    width: min(84%, 1160px);\n\n\n    &.mini{\n        width: min(84%, 800px);\n    }\n\n}\n\n.center{\n    text-align: center;\n    justify-content: center;}\n\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3,\nh4,\n.h4{\n    margin: 10px 0px;\n    color: $brandTwo;\n    font-weight: 700;}\n\nh1,\n.h1{\n    font-size: 54px;}\n\nh2,\n.h2{\n    font-size: 38px;}\n\nh3,\n.h3{\n    font-size: 32px;}\n\nh4,\n.h4{\n    font-size: 26px;}\n\np{\n    margin: 24px 0px;\n    font-size: 18px;}\n\n\n\n// Header\n////////////////////////////////////\n\nheader{\n    position: relative;\n    z-index: 2;\n    padding: 15px 0px;\n\n    .wrap{\n        display: flex;\n        align-items: center;\n        gap: 50px;\n    }\n\n}\n\n.logo{\n    flex: 1;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 20px;\n    font-weight: 700;\n\n    div{\n        height: 36px;\n        width: 36px;\n        background-color: $brandOne;\n        border-radius: 100%;}\n\n}\n\n.nav-contain{\n    position: relative;\n    flex: 2;\n    display: flex;\n    justify-content: flex-end;\n}\n\n.mm-trigger{\n    position: relative;\n    display: none;\n    align-items: center;\n    justify-content: center;\n    height: 40px;\n    width: 40px;\n    background-color: initial;\n    border: initial;\n\n    &::before{\n        content: \"\\f0c9\";\n        font-family: 'Font Awesome 5 Free';\n        font-size: 24px;\n        font-weight: 900;\n    }\n\n    &.active{\n\n        &::before{\n            color: $brandOne;\n        }\n\n    }\n\n}\n\n.nav{\n    padding: 0px;\n    margin: 0px;\n    display: flex;\n    justify-content: flex-end;\n    gap: 35px;\n    list-style-type: none;\n\n    li{\n\n        a{\n            font-size: 18px;\n            font-weight: 600;\n            color: $black;\n            text-decoration: none;\n            text-transform: capitalize;\n            transition: all .2s;\n\n            &.active{\n                color: $brandOne;\n            }\n\n            &:hover,\n            &:active{\n                color: $brandOne;\n            }\n\n        }\n\n    }\n\n}\n\n\n@media all and (max-width: 768px) {\n\n    .mm-trigger{\n        display: flex;\n    }\n\n    .nav{\n        display: none;\n        position: absolute;\n        top: 100%;\n        right: 0;\n        background-color: $white;\n        padding: 20px;\n        flex-direction: column;\n        gap: 6px;\n\n        &.active{\n            display: flex;\n        }\n\n        li{\n            text-align: right;\n        }\n\n    }\n\n}\n\n\n\n// Main Content\n////////////////////////////////////\n\n\n.hero{\n    position: relative;\n    display: flex;\n    align-items: center;\n    min-height: 400px;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    &::before{\n        content: \"\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: $brandTwo;\n        opacity: .75;}\n\n    .wrap{\n        padding: 40px 0px;}\n\n    p{\n        color: $white;\n\n        &:not(.h1){\n            font-size: 24px;\n            font-weight: 500;\n        }\n    }\n\n}\n\n\n.content-contain{\n    padding: 100px 0px;\n\n    >div:not(:last-of-type){\n        margin-bottom: 50px;\n    }\n\n}\n\n\n.menu-items{\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    row-gap: 40px;\n    column-gap: 50px;\n}\n\n.menu-item{\n\n    .header{\n        display: flex;\n        justify-content: space-between;\n        column-gap: 12px;\n        row-gap: 4px;\n        margin: 0px 0px 8px;\n    }\n\n    p{\n        margin: 0px;\n        &.title{\n            font-weight: 600;\n        }\n    }\n\n}\n\n\n@media all and (max-width: 991px) {\n\n    .menu-items{\n        grid-template-columns: repeat(2, 1fr);\n    }\n\n}\n\n@media all and (max-width: 599px) {\n\n    .menu-items{\n        grid-template-columns: 1fr;\n    }\n\n}\n\n\n// Footer\n////////////////////////////////////\n\nfooter{\n    margin-top: auto;\n    padding: 15px;\n    text-align: center;\n    background-color: $brandOne;\n    color: $white;\n    font-weight: 500;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/scss/styles.scss":
/*!*************************************!*\
  !*** ./src/assets/scss/styles.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footerFunctions": () => (/* binding */ footerFunctions)
/* harmony export */ });
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ "./src/modules/general.js");


const footerFunctions = (() => {

    // Private variables/functions


    // Public variables/functions

    const buildFooter = () => {

        const footer = document.createElement('footer');
        
        const wrap = _general__WEBPACK_IMPORTED_MODULE_0__.generalFunctions.createWrap();

        wrap.innerHTML = '&copy; Brunch Bowl';

        footer.appendChild(wrap);

        return footer;

    }

    return {
        buildFooter
    }

})();

/***/ }),

/***/ "./src/modules/general.js":
/*!********************************!*\
  !*** ./src/modules/general.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generalFunctions": () => (/* binding */ generalFunctions)
/* harmony export */ });
const generalFunctions = (() => {

    // Private variables/functions



    // Public variables/functions


    const clearContent = (parent) => {

        while( parent.firstChild ){

            parent.removeChild( parent.firstChild );

        }

    }


    const createContentSection = ( title, ...description ) => {

        const contentSection = document.createElement('div');
        contentSection.classList.add('content-section', 'wrap', 'mini');

        const sectionTitle = document.createElement('h2');
        sectionTitle.setAttribute('class', 'center');
        sectionTitle.innerText = title;

        contentSection.appendChild(sectionTitle);
        

        const descriptionArray = description;

        for ( let i = 0; i < descriptionArray.length; i++){

            const sectionDescription = document.createElement('p');
            sectionDescription.innerText = descriptionArray[i];

            contentSection.appendChild(sectionDescription);

        }

        return contentSection;

    }


    const createHero = ( title, description, image) => {

        const hero = document.createElement('div');
        hero.setAttribute('class', 'hero');
        hero.style.backgroundImage = `url(${image})`;

        const wrap = createWrap();

        const heroTitle = document.createElement('p');
        heroTitle.setAttribute('class', 'h1');
        heroTitle.innerText = title;

        const heroDescription = document.createElement('p');
        heroDescription.innerText = description;

        wrap.appendChild(heroTitle);
        wrap.appendChild(heroDescription);

        hero.appendChild(wrap);

        return hero;

    }


    const createModule = (title) => {

        const module = document.createElement('div');
        module.setAttribute('class', 'module');
        module.setAttribute('data-module', title);

        return module;

    }


    const createWrap = () => {

        const wrap = document.createElement('div');
        wrap.setAttribute('class', 'wrap');

        return wrap;

    }


    return {
        clearContent,
        createContentSection,
        createHero,
        createModule,
        createWrap
    }


})();

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headerFunctions": () => (/* binding */ headerFunctions)
/* harmony export */ });
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ "./src/modules/general.js");


const headerFunctions = (() => {

    // Factories

    const _newNavLink = ( name ) => {

        const getName  = () => name;

        return {
            getName
        }

    }

    // Private variables/functions

    const _navLinks = [];

    const _createLogo = () => {

        const logo = document.createElement('logo');
        logo.setAttribute('class', 'logo');

        const circle = document.createElement('div');

        const logoTitle = document.createElement('span');
        logoTitle.innerText = 'Brunch Bowl';

        logo.appendChild(circle);
        logo.appendChild(logoTitle);

        return logo;

    } 

    const _createNav = () => {

        const navContain = document.createElement('div');
        navContain.setAttribute('class', 'nav-contain');

        const mmTrigger = document.createElement('button');
        mmTrigger.setAttribute('type', 'button');
        mmTrigger.setAttribute('class', 'mm-trigger');

        const nav = document.createElement('ul');
        nav.setAttribute('class', 'nav');

        const homeLink = _newNavLink('home');
        _navLinks.push(homeLink);

        const menuLink = _newNavLink('menu');
        _navLinks.push(menuLink);

        const contactLink = _newNavLink('contact');
        _navLinks.push(contactLink);


        for (let i = 0; i < _navLinks.length; i++){

            const navItem = document.createElement('li');

            const navLink = document.createElement('a');

            if( i === 0 ){
                navLink.setAttribute('class', 'active');
            }

            navLink.setAttribute('href', '#');
            navLink.setAttribute('data-target', _navLinks[i].getName() );

            navLink.innerText = _navLinks[i].getName();

            navItem.appendChild(navLink);

            nav.appendChild(navItem);

        }

        navContain.appendChild(mmTrigger);
        navContain.appendChild(nav);


        return navContain;

    }


    // Public variables/functions

    const buildHeader = () => {

        const header = document.createElement('header');

        const wrap = _general__WEBPACK_IMPORTED_MODULE_0__.generalFunctions.createWrap();

        wrap.appendChild( _createLogo() );

        wrap.appendChild( _createNav() );

        header.appendChild(wrap);

        return header;

    }

    return {
        buildHeader
    }

})();

/***/ }),

/***/ "./src/modules/pageLoad.js":
/*!*********************************!*\
  !*** ./src/modules/pageLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/modules/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/modules/footer.js");
/* harmony import */ var _templates_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/home */ "./src/modules/templates/home.js");





const pageLoad = (() => {

    // Private variables/functions
    const _content = document.querySelector('#content');

    const _createMainContent = () => {

        const mainContent = document.createElement('div');
        mainContent.setAttribute('class', 'main-content');

        return mainContent;

    }

    // Public variables/functions

    const buildInitialContent = () => {

        _content.appendChild( _header__WEBPACK_IMPORTED_MODULE_0__.headerFunctions.buildHeader() );

        const pageMainContent = _createMainContent();
        pageMainContent.appendChild( _templates_home__WEBPACK_IMPORTED_MODULE_2__.homeFunctions.buildTemplate() );

        _content.appendChild(pageMainContent);

        _content.appendChild( _footer__WEBPACK_IMPORTED_MODULE_1__.footerFunctions.buildFooter() );

    }


    return {
        buildInitialContent
    }


})();

/***/ }),

/***/ "./src/modules/templates/contact.js":
/*!******************************************!*\
  !*** ./src/modules/templates/contact.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactFunctions": () => (/* binding */ contactFunctions)
/* harmony export */ });
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../general */ "./src/modules/general.js");
/* harmony import */ var _assets_img_contact_hero_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/contact-hero.jpg */ "./src/assets/img/contact-hero.jpg");



const contactFunctions = (() => {

    // Private variables/functions

    // Public variables/functions

    const buildTemplate = () => {

        const module = _general__WEBPACK_IMPORTED_MODULE_0__.generalFunctions.createModule('menu');
        
        module.appendChild( _general__WEBPACK_IMPORTED_MODULE_0__.generalFunctions.createHero('Contact', 'Feel free to reach out any time', _assets_img_contact_hero_jpg__WEBPACK_IMPORTED_MODULE_1__) );

        const contentContain = document.createElement('div');
        contentContain.setAttribute('class', 'content-contain');

        contentContain.appendChild( 
            _general__WEBPACK_IMPORTED_MODULE_0__.generalFunctions.createContentSection(
                "We'd love to hear from you", 
                "Here are Brunch Bowl we're always excited to hear from our customers. You can reach us at info@brunchbowl.com or just call us at (232) 222-4444.",
            )
        );

        module.appendChild(contentContain);

        return module;

    }

    return {
        buildTemplate
    }

})();

/***/ }),

/***/ "./src/modules/templates/home.js":
/*!***************************************!*\
  !*** ./src/modules/templates/home.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeFunctions": () => (/* binding */ homeFunctions)
/* harmony export */ });
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../general */ "./src/modules/general.js");
/* harmony import */ var _assets_img_brunch_home_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/brunch-home.jpg */ "./src/assets/img/brunch-home.jpg");



const homeFunctions = (() => {

    // Private variables/functions

    // Public variables/functions

    const buildTemplate = () => {

        const module = _general__WEBPACK_IMPORTED_MODULE_0__.generalFunctions.createModule('home');
        
        module.appendChild( _general__WEBPACK_IMPORTED_MODULE_0__.generalFunctions.createHero('Brunch Bowl', 'Satisfy your breakfast cravings with delicious brunch bowls', _assets_img_brunch_home_jpg__WEBPACK_IMPORTED_MODULE_1__) );

        const contentContain = document.createElement('div');
        contentContain.setAttribute('class', 'content-contain');

        contentContain.appendChild( 
            _general__WEBPACK_IMPORTED_MODULE_0__.generalFunctions.createContentSection(
                'Welcome to Brunch Bowl', 
                "Welcome to Brunch Bowl, the hottest new brunch spot in the entire country. We'll serve up any fun breakyfast and lunch style food that you can imagine. Our culinary artists have worked hard to polish their skills so that our customers never leave unsatisfied. Check out our menu to see everything we offer.",
                "We hope you stop by soon!"
            )
        );

        module.appendChild(contentContain);


        return module;

    }

    return {
        buildTemplate
    }

})();

/***/ }),

/***/ "./src/modules/templates/menu.js":
/*!***************************************!*\
  !*** ./src/modules/templates/menu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuFunctions": () => (/* binding */ menuFunctions)
/* harmony export */ });
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../general */ "./src/modules/general.js");
/* harmony import */ var _assets_img_menu_hero_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/menu-hero.jpg */ "./src/assets/img/menu-hero.jpg");
/* harmony import */ var _assets_data_menu_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/data/menu-data.json */ "./src/assets/data/menu-data.json");




const menuFunctions = (() => {

    // Private variables/functions

    const _buildMenu = ( array ) => {

        const menu = document.createElement('div');
        menu.classList.add( 'menu-items', 'wrap' );

        for( let i = 0; i < array.length; i++ ){

            const menuItem = document.createElement('div');
            menuItem.setAttribute('class', 'menu-item');

            const itemHeader = document.createElement('div');
            itemHeader.setAttribute('class', 'header');

            const itemTitle = document.createElement('p');
            itemTitle.setAttribute('class', 'title');
            itemTitle.innerText = array[i].name;

            itemHeader.appendChild(itemTitle);

            const itemPrice = document.createElement('span');
            itemPrice.setAttribute('class', 'price');
            itemPrice.innerText = "$" + array[i].price;

            itemHeader.appendChild(itemPrice);

            const itemDescription = document.createElement('p');
            itemDescription.setAttribute('class', 'description');
            itemDescription.innerText = array[i].description;

            menuItem.appendChild(itemHeader);
            menuItem.appendChild(itemDescription);

            menu.appendChild(menuItem);

        }

        return menu;

    }

    // Public variables/functions

    const buildTemplate = () => {

        const module = _general__WEBPACK_IMPORTED_MODULE_0__.generalFunctions.createModule('menu');
        
        module.appendChild( _general__WEBPACK_IMPORTED_MODULE_0__.generalFunctions.createHero('Menu', 'Our choices will always leave you satisfied', _assets_img_menu_hero_jpg__WEBPACK_IMPORTED_MODULE_1__) );

        const contentContain = document.createElement('div');
        contentContain.setAttribute('class', 'content-contain');

        contentContain.appendChild( 
            _general__WEBPACK_IMPORTED_MODULE_0__.generalFunctions.createContentSection(
                'Our Options', 
                "Brunch Bowl offers a variety of culinary options, please let us know if there are any special allergens before making your order."            
            )
        );

        contentContain.appendChild( _buildMenu(_assets_data_menu_data_json__WEBPACK_IMPORTED_MODULE_2__) );

        module.appendChild(contentContain);

        return module;

    }

    return {
        buildTemplate
    }

})();

/***/ }),

/***/ "./src/assets/img/brunch-home.jpg":
/*!****************************************!*\
  !*** ./src/assets/img/brunch-home.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a81f04950f73c9fc804e.jpg";

/***/ }),

/***/ "./src/assets/img/contact-hero.jpg":
/*!*****************************************!*\
  !*** ./src/assets/img/contact-hero.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "52dead6dfca2780f9da2.jpg";

/***/ }),

/***/ "./src/assets/img/menu-hero.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/menu-hero.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "703f84ef5f648cfd2111.jpg";

/***/ }),

/***/ "./src/assets/data/menu-data.json":
/*!****************************************!*\
  !*** ./src/assets/data/menu-data.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Classic Bowl","description":"A classic brunch bowl with egg, sausage, broccoli and cheese over a potato hash","price":"10.95"},{"name":"Vegetatian Bowl","description":"A classic brunch bowl with egg, sausage, broccoli and cheese over a potato hash","price":"9.95"},{"name":"Meat Lovers Bowl","description":"A classic brunch bowl with egg, sausage, broccoli and cheese over a potato hash","price":"11.95"},{"name":"Southwestern Bowl","description":"A classic brunch bowl with egg, sausage, broccoli and cheese over a potato hash","price":"11.95"},{"name":"Fruit Bowl","description":"A classic brunch bowl with egg, sausage, broccoli and cheese over a potato hash","price":"11.95"},{"name":"Chicken & Waffle Bowl","description":"A classic brunch bowl with egg, sausage, broccoli and cheese over a potato hash","price":"11.95"},{"name":"ImpossiBowl","description":"A classic brunch bowl with egg, sausage, broccoli and cheese over a potato hash","price":"99.95"}]');

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
/******/ 			id: moduleId,
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scss/styles.scss */ "./src/assets/scss/styles.scss");
/* harmony import */ var _modules_pageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pageLoad */ "./src/modules/pageLoad.js");
/* harmony import */ var _modules_general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/general */ "./src/modules/general.js");
/* harmony import */ var _modules_templates_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/templates/home */ "./src/modules/templates/home.js");
/* harmony import */ var _modules_templates_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/templates/menu */ "./src/modules/templates/menu.js");
/* harmony import */ var _modules_templates_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/templates/contact */ "./src/modules/templates/contact.js");








const switchTabs = (() => {

    // Private variables/functions

    const _changeTab = (e) => {

        e.preventDefault();

        const link = e.currentTarget;
        const linkTarget = e.currentTarget.dataset.target;
        const navLinks = document.querySelectorAll('.nav a');
        const pageMainContent = document.querySelector('.main-content');

        navLinks.forEach( (navLink) => {
            navLink.classList.remove('active');
        });

        link.setAttribute('class', 'active');


        _modules_general__WEBPACK_IMPORTED_MODULE_2__.generalFunctions.clearContent(pageMainContent);

        switch(linkTarget) {

            case 'home':
                pageMainContent.appendChild( _modules_templates_home__WEBPACK_IMPORTED_MODULE_3__.homeFunctions.buildTemplate() );
                break;

            case 'menu':
                pageMainContent.appendChild( _modules_templates_menu__WEBPACK_IMPORTED_MODULE_4__.menuFunctions.buildTemplate() );
                break;

            case 'contact':
                pageMainContent.appendChild( _modules_templates_contact__WEBPACK_IMPORTED_MODULE_5__.contactFunctions.buildTemplate() );

        }

        
    }

    // Public variables/functions

    const buildListeners = () => {

        const navLinks = document.querySelectorAll('.nav a');

        navLinks.forEach( (navLink) => {

            navLink.addEventListener('click', _changeTab );

        });

    }

    return {
        buildListeners
    }

})();


const triggerMenu = (() => {

    // Private variables/functions

    const _trigger = (e) => {

        e.preventDefault();

        const nav = document.querySelector('.nav');
        const trigger = e.currentTarget;

        nav.classList.toggle('active');
        trigger.classList.toggle('active');
 
    }

    // Public variables/functions

    const buildListeners = () => {

        const mmTrigger = document.querySelector('.mm-trigger');

        mmTrigger.addEventListener('click', _trigger );

    }

    return {
        buildListeners
    }

})();


// Site Initialization

_modules_pageLoad__WEBPACK_IMPORTED_MODULE_1__.pageLoad.buildInitialContent();

switchTabs.buildListeners();

triggerMenu.buildListeners();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0Q7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0Q7O0FBRUEsMkVBQTRCOztBQUU1Qjs7QUFFQSw2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYXNzZXRzL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYXNzZXRzL3Njc3Mvc3R5bGVzLnNjc3M/ZjNjOCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2dlbmVyYWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL3RlbXBsYXRlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy90ZW1wbGF0ZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvdGVtcGxhdGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRUZFRkU7XFxuICBjb2xvcjogIzExMTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGluZCBTaWxpZ3VyaVxcXCIsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbn1cXG5cXG4jb2xkLWNvbnRlbnQsXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi53cmFwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogbWluKDg0JSwgMTE2MHB4KTtcXG59XFxuLndyYXAubWluaSB7XFxuICB3aWR0aDogbWluKDg0JSwgODAwcHgpO1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5oMSxcXG4uaDEsXFxuaDIsXFxuLmgyLFxcbmgzLFxcbi5oMyxcXG5oNCxcXG4uaDQge1xcbiAgbWFyZ2luOiAxMHB4IDBweDtcXG4gIGNvbG9yOiAjMkVBMjhGO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaDEsXFxuLmgxIHtcXG4gIGZvbnQtc2l6ZTogNTRweDtcXG59XFxuXFxuaDIsXFxuLmgyIHtcXG4gIGZvbnQtc2l6ZTogMzhweDtcXG59XFxuXFxuaDMsXFxuLmgzIHtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuaDQsXFxuLmg0IHtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDI0cHggMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMjtcXG4gIHBhZGRpbmc6IDE1cHggMHB4O1xcbn1cXG5oZWFkZXIgLndyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5sb2dvIGRpdiB7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICB3aWR0aDogMzZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNBMjJFNDE7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG5cXG4ubmF2LWNvbnRhaW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleDogMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubW0tdHJpZ2dlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbiAgYm9yZGVyOiBpbml0aWFsO1xcbn1cXG4ubW0tdHJpZ2dlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjOVxcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuLm1tLXRyaWdnZXIuYWN0aXZlOjpiZWZvcmUge1xcbiAgY29sb3I6ICNBMjJFNDE7XFxufVxcblxcbi5uYXYge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGdhcDogMzVweDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuLm5hdiBsaSBhIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogIzExMTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcbi5uYXYgbGkgYS5hY3RpdmUge1xcbiAgY29sb3I6ICNBMjJFNDE7XFxufVxcbi5uYXYgbGkgYTpob3ZlciwgLm5hdiBsaSBhOmFjdGl2ZSB7XFxuICBjb2xvcjogI0EyMkU0MTtcXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5tbS10cmlnZ2VyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gIC5uYXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRUZFRkU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNnB4O1xcbiAgfVxcbiAgLm5hdi5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLm5hdiBsaSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgfVxcbn1cXG4uaGVybyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbi5oZXJvOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjMkVBMjhGO1xcbiAgb3BhY2l0eTogMC43NTtcXG59XFxuLmhlcm8gLndyYXAge1xcbiAgcGFkZGluZzogNDBweCAwcHg7XFxufVxcbi5oZXJvIHAge1xcbiAgY29sb3I6ICNGRUZFRkU7XFxufVxcbi5oZXJvIHA6bm90KC5oMSkge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbiB7XFxuICBwYWRkaW5nOiAxMDBweCAwcHg7XFxufVxcbi5jb250ZW50LWNvbnRhaW4gPiBkaXY6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5tZW51LWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgcm93LWdhcDogNDBweDtcXG4gIGNvbHVtbi1nYXA6IDUwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0gLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgY29sdW1uLWdhcDogMTJweDtcXG4gIHJvdy1nYXA6IDRweDtcXG4gIG1hcmdpbjogMHB4IDBweCA4cHg7XFxufVxcbi5tZW51LWl0ZW0gcCB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuLm1lbnUtaXRlbSBwLnRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAubWVudS1pdGVtcyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XFxuICAubWVudS1pdGVtcyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cXG5mb290ZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTIyRTQxO1xcbiAgY29sb3I6ICNGRUZFRkU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3Mvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBa0JBO0VBQ0ksWUFBQTtBQWpCSjs7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YUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBblRPO0VBb1RQLGNBeFRJO0VBeVRKLGdCQUFBO0FBMUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIEdsb2JhbCBWYXJpYWJsZXNcXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cXG5cXG5cXG4kcHJpbWFyeUZvbnQ6ICdIaW5kIFNpbGlndXJpJywgc2Fucy1zZXJpZjtcXG5cXG4kd2hpdGU6ICNGRUZFRkU7XFxuJGJsYWNrOiAjMTExO1xcbiRsaWdodEdyYXk6ICNlYmVhZWE7XFxuXFxuJGJyYW5kT25lOiAjQTIyRTQxO1xcbiRicmFuZFR3bzogIzJFQTI4RjtcXG4kYnJhbmRUaHJlZTogIzc3RDhDODtcXG5cXG5cXG4vLyBCYXNlIFN0eWxlc1xcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xcblxcbmh0bWx7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICAgIGNvbG9yOiAkYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeUZvbnQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxufVxcblxcbiNvbGQtY29udGVudCxcXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud3JhcHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHdpZHRoOiBtaW4oODQlLCAxMTYwcHgpO1xcblxcblxcbiAgICAmLm1pbml7XFxuICAgICAgICB3aWR0aDogbWluKDg0JSwgODAwcHgpO1xcbiAgICB9XFxuXFxufVxcblxcbi5jZW50ZXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7fVxcblxcbmgxLFxcbi5oMSxcXG5oMixcXG4uaDIsXFxuaDMsXFxuLmgzLFxcbmg0LFxcbi5oNHtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgY29sb3I6ICRicmFuZFR3bztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDt9XFxuXFxuaDEsXFxuLmgxe1xcbiAgICBmb250LXNpemU6IDU0cHg7fVxcblxcbmgyLFxcbi5oMntcXG4gICAgZm9udC1zaXplOiAzOHB4O31cXG5cXG5oMyxcXG4uaDN7XFxuICAgIGZvbnQtc2l6ZTogMzJweDt9XFxuXFxuaDQsXFxuLmg0e1xcbiAgICBmb250LXNpemU6IDI2cHg7fVxcblxcbnB7XFxuICAgIG1hcmdpbjogMjRweCAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDt9XFxuXFxuXFxuXFxuLy8gSGVhZGVyXFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXFxuXFxuaGVhZGVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xcblxcbiAgICAud3JhcHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiA1MHB4O1xcbiAgICB9XFxuXFxufVxcblxcbi5sb2dve1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG4gICAgZGl2e1xcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xcbiAgICAgICAgd2lkdGg6IDM2cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJhbmRPbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO31cXG5cXG59XFxuXFxuLm5hdi1jb250YWlue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXg6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5tbS10cmlnZ2Vye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbiAgICBib3JkZXI6IGluaXRpYWw7XFxuXFxuICAgICY6OmJlZm9yZXtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjBjOVxcXCI7XFxuICAgICAgICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnO1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgfVxcblxcbiAgICAmLmFjdGl2ZXtcXG5cXG4gICAgICAgICY6OmJlZm9yZXtcXG4gICAgICAgICAgICBjb2xvcjogJGJyYW5kT25lO1xcbiAgICAgICAgfVxcblxcbiAgICB9XFxuXFxufVxcblxcbi5uYXZ7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogMzVweDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcblxcbiAgICBsaXtcXG5cXG4gICAgICAgIGF7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICAgICAgY29sb3I6ICRibGFjaztcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXG5cXG4gICAgICAgICAgICAmLmFjdGl2ZXtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRicmFuZE9uZTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJjpob3ZlcixcXG4gICAgICAgICAgICAmOmFjdGl2ZXtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRicmFuZE9uZTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICB9XFxuXFxuICAgIH1cXG5cXG59XFxuXFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG5cXG4gICAgLm1tLXRyaWdnZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC5uYXZ7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAxMDAlO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogNnB4O1xcblxcbiAgICAgICAgJi5hY3RpdmV7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGxpe1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICAgICAgfVxcblxcbiAgICB9XFxuXFxufVxcblxcblxcblxcbi8vIE1haW4gQ29udGVudFxcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xcblxcblxcbi5oZXJve1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFxuICAgICY6OmJlZm9yZXtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYmFja2dyb3VuZDogJGJyYW5kVHdvO1xcbiAgICAgICAgb3BhY2l0eTogLjc1O31cXG5cXG4gICAgLndyYXB7XFxuICAgICAgICBwYWRkaW5nOiA0MHB4IDBweDt9XFxuXFxuICAgIHB7XFxuICAgICAgICBjb2xvcjogJHdoaXRlO1xcblxcbiAgICAgICAgJjpub3QoLmgxKXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbn1cXG5cXG5cXG4uY29udGVudC1jb250YWlue1xcbiAgICBwYWRkaW5nOiAxMDBweCAwcHg7XFxuXFxuICAgID5kaXY6bm90KDpsYXN0LW9mLXR5cGUpe1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gICAgfVxcblxcbn1cXG5cXG5cXG4ubWVudS1pdGVtc3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgcm93LWdhcDogNDBweDtcXG4gICAgY29sdW1uLWdhcDogNTBweDtcXG59XFxuXFxuLm1lbnUtaXRlbXtcXG5cXG4gICAgLmhlYWRlcntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBjb2x1bW4tZ2FwOiAxMnB4O1xcbiAgICAgICAgcm93LWdhcDogNHB4O1xcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDhweDtcXG4gICAgfVxcblxcbiAgICBwe1xcbiAgICAgICAgbWFyZ2luOiAwcHg7XFxuICAgICAgICAmLnRpdGxle1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG59XFxuXFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG5cXG4gICAgLm1lbnUtaXRlbXN7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICB9XFxuXFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XFxuXFxuICAgIC5tZW51LWl0ZW1ze1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIH1cXG5cXG59XFxuXFxuXFxuLy8gRm9vdGVyXFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXFxuXFxuZm9vdGVye1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRicmFuZE9uZTtcXG4gICAgY29sb3I6ICR3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnZW5lcmFsRnVuY3Rpb25zIH0gZnJvbSBcIi4vZ2VuZXJhbFwiO1xuXG5leHBvcnQgY29uc3QgZm9vdGVyRnVuY3Rpb25zID0gKCgpID0+IHtcblxuICAgIC8vIFByaXZhdGUgdmFyaWFibGVzL2Z1bmN0aW9uc1xuXG5cbiAgICAvLyBQdWJsaWMgdmFyaWFibGVzL2Z1bmN0aW9uc1xuXG4gICAgY29uc3QgYnVpbGRGb290ZXIgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB3cmFwID0gZ2VuZXJhbEZ1bmN0aW9ucy5jcmVhdGVXcmFwKCk7XG5cbiAgICAgICAgd3JhcC5pbm5lckhUTUwgPSAnJmNvcHk7IEJydW5jaCBCb3dsJztcblxuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQod3JhcCk7XG5cbiAgICAgICAgcmV0dXJuIGZvb3RlcjtcblxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJ1aWxkRm9vdGVyXG4gICAgfVxuXG59KSgpOyIsImV4cG9ydCBjb25zdCBnZW5lcmFsRnVuY3Rpb25zID0gKCgpID0+IHtcblxuICAgIC8vIFByaXZhdGUgdmFyaWFibGVzL2Z1bmN0aW9uc1xuXG5cblxuICAgIC8vIFB1YmxpYyB2YXJpYWJsZXMvZnVuY3Rpb25zXG5cblxuICAgIGNvbnN0IGNsZWFyQ29udGVudCA9IChwYXJlbnQpID0+IHtcblxuICAgICAgICB3aGlsZSggcGFyZW50LmZpcnN0Q2hpbGQgKXtcblxuICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKCBwYXJlbnQuZmlyc3RDaGlsZCApO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgY29uc3QgY3JlYXRlQ29udGVudFNlY3Rpb24gPSAoIHRpdGxlLCAuLi5kZXNjcmlwdGlvbiApID0+IHtcblxuICAgICAgICBjb25zdCBjb250ZW50U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXNlY3Rpb24nLCAnd3JhcCcsICdtaW5pJyk7XG5cbiAgICAgICAgY29uc3Qgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgc2VjdGlvblRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VudGVyJyk7XG4gICAgICAgIHNlY3Rpb25UaXRsZS5pbm5lclRleHQgPSB0aXRsZTtcblxuICAgICAgICBjb250ZW50U2VjdGlvbi5hcHBlbmRDaGlsZChzZWN0aW9uVGl0bGUpO1xuICAgICAgICBcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkFycmF5ID0gZGVzY3JpcHRpb247XG5cbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgZGVzY3JpcHRpb25BcnJheS5sZW5ndGg7IGkrKyl7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHNlY3Rpb25EZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjcmlwdGlvbkFycmF5W2ldO1xuXG4gICAgICAgICAgICBjb250ZW50U2VjdGlvbi5hcHBlbmRDaGlsZChzZWN0aW9uRGVzY3JpcHRpb24pO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29udGVudFNlY3Rpb247XG5cbiAgICB9XG5cblxuICAgIGNvbnN0IGNyZWF0ZUhlcm8gPSAoIHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1hZ2UpID0+IHtcblxuICAgICAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlcm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZXJvJyk7XG4gICAgICAgIGhlcm8uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlfSlgO1xuXG4gICAgICAgIGNvbnN0IHdyYXAgPSBjcmVhdGVXcmFwKCk7XG5cbiAgICAgICAgY29uc3QgaGVyb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBoZXJvVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoMScpO1xuICAgICAgICBoZXJvVGl0bGUuaW5uZXJUZXh0ID0gdGl0bGU7XG5cbiAgICAgICAgY29uc3QgaGVyb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBoZXJvRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGVzY3JpcHRpb247XG5cbiAgICAgICAgd3JhcC5hcHBlbmRDaGlsZChoZXJvVGl0bGUpO1xuICAgICAgICB3cmFwLmFwcGVuZENoaWxkKGhlcm9EZXNjcmlwdGlvbik7XG5cbiAgICAgICAgaGVyby5hcHBlbmRDaGlsZCh3cmFwKTtcblxuICAgICAgICByZXR1cm4gaGVybztcblxuICAgIH1cblxuXG4gICAgY29uc3QgY3JlYXRlTW9kdWxlID0gKHRpdGxlKSA9PiB7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZHVsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21vZHVsZScpO1xuICAgICAgICBtb2R1bGUuc2V0QXR0cmlidXRlKCdkYXRhLW1vZHVsZScsIHRpdGxlKTtcblxuICAgICAgICByZXR1cm4gbW9kdWxlO1xuXG4gICAgfVxuXG5cbiAgICBjb25zdCBjcmVhdGVXcmFwID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd3JhcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dyYXAnKTtcblxuICAgICAgICByZXR1cm4gd3JhcDtcblxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xlYXJDb250ZW50LFxuICAgICAgICBjcmVhdGVDb250ZW50U2VjdGlvbixcbiAgICAgICAgY3JlYXRlSGVybyxcbiAgICAgICAgY3JlYXRlTW9kdWxlLFxuICAgICAgICBjcmVhdGVXcmFwXG4gICAgfVxuXG5cbn0pKCk7IiwiaW1wb3J0IHsgZ2VuZXJhbEZ1bmN0aW9ucyB9IGZyb20gXCIuL2dlbmVyYWxcIjtcblxuZXhwb3J0IGNvbnN0IGhlYWRlckZ1bmN0aW9ucyA9ICgoKSA9PiB7XG5cbiAgICAvLyBGYWN0b3JpZXNcblxuICAgIGNvbnN0IF9uZXdOYXZMaW5rID0gKCBuYW1lICkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGdldE5hbWUgID0gKCkgPT4gbmFtZTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0TmFtZVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBQcml2YXRlIHZhcmlhYmxlcy9mdW5jdGlvbnNcblxuICAgIGNvbnN0IF9uYXZMaW5rcyA9IFtdO1xuXG4gICAgY29uc3QgX2NyZWF0ZUxvZ28gPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvZ28nKTtcbiAgICAgICAgbG9nby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xvZ28nKTtcblxuICAgICAgICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCBsb2dvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGxvZ29UaXRsZS5pbm5lclRleHQgPSAnQnJ1bmNoIEJvd2wnO1xuXG4gICAgICAgIGxvZ28uYXBwZW5kQ2hpbGQoY2lyY2xlKTtcbiAgICAgICAgbG9nby5hcHBlbmRDaGlsZChsb2dvVGl0bGUpO1xuXG4gICAgICAgIHJldHVybiBsb2dvO1xuXG4gICAgfSBcblxuICAgIGNvbnN0IF9jcmVhdGVOYXYgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgbmF2Q29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuYXZDb250YWluLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2LWNvbnRhaW4nKTtcblxuICAgICAgICBjb25zdCBtbVRyaWdnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbW1UcmlnZ2VyLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgbW1UcmlnZ2VyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbW0tdHJpZ2dlcicpO1xuXG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdicpO1xuXG4gICAgICAgIGNvbnN0IGhvbWVMaW5rID0gX25ld05hdkxpbmsoJ2hvbWUnKTtcbiAgICAgICAgX25hdkxpbmtzLnB1c2goaG9tZUxpbmspO1xuXG4gICAgICAgIGNvbnN0IG1lbnVMaW5rID0gX25ld05hdkxpbmsoJ21lbnUnKTtcbiAgICAgICAgX25hdkxpbmtzLnB1c2gobWVudUxpbmspO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhY3RMaW5rID0gX25ld05hdkxpbmsoJ2NvbnRhY3QnKTtcbiAgICAgICAgX25hdkxpbmtzLnB1c2goY29udGFjdExpbmspO1xuXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfbmF2TGlua3MubGVuZ3RoOyBpKyspe1xuXG4gICAgICAgICAgICBjb25zdCBuYXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICAgICAgY29uc3QgbmF2TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgICAgICAgICAgaWYoIGkgPT09IDAgKXtcbiAgICAgICAgICAgICAgICBuYXZMaW5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hdkxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbiAgICAgICAgICAgIG5hdkxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsIF9uYXZMaW5rc1tpXS5nZXROYW1lKCkgKTtcblxuICAgICAgICAgICAgbmF2TGluay5pbm5lclRleHQgPSBfbmF2TGlua3NbaV0uZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICBuYXZJdGVtLmFwcGVuZENoaWxkKG5hdkxpbmspO1xuXG4gICAgICAgICAgICBuYXYuYXBwZW5kQ2hpbGQobmF2SXRlbSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIG5hdkNvbnRhaW4uYXBwZW5kQ2hpbGQobW1UcmlnZ2VyKTtcbiAgICAgICAgbmF2Q29udGFpbi5hcHBlbmRDaGlsZChuYXYpO1xuXG5cbiAgICAgICAgcmV0dXJuIG5hdkNvbnRhaW47XG5cbiAgICB9XG5cblxuICAgIC8vIFB1YmxpYyB2YXJpYWJsZXMvZnVuY3Rpb25zXG5cbiAgICBjb25zdCBidWlsZEhlYWRlciA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICAgICAgICBjb25zdCB3cmFwID0gZ2VuZXJhbEZ1bmN0aW9ucy5jcmVhdGVXcmFwKCk7XG5cbiAgICAgICAgd3JhcC5hcHBlbmRDaGlsZCggX2NyZWF0ZUxvZ28oKSApO1xuXG4gICAgICAgIHdyYXAuYXBwZW5kQ2hpbGQoIF9jcmVhdGVOYXYoKSApO1xuXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh3cmFwKTtcblxuICAgICAgICByZXR1cm4gaGVhZGVyO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYnVpbGRIZWFkZXJcbiAgICB9XG5cbn0pKCk7IiwiaW1wb3J0IHsgaGVhZGVyRnVuY3Rpb25zIH0gZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgeyBmb290ZXJGdW5jdGlvbnMgfSBmcm9tIFwiLi9mb290ZXJcIjtcblxuaW1wb3J0IHsgaG9tZUZ1bmN0aW9ucyB9IGZyb20gXCIuL3RlbXBsYXRlcy9ob21lXCI7XG5cbmV4cG9ydCBjb25zdCBwYWdlTG9hZCA9ICgoKSA9PiB7XG5cbiAgICAvLyBQcml2YXRlIHZhcmlhYmxlcy9mdW5jdGlvbnNcbiAgICBjb25zdCBfY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb25zdCBfY3JlYXRlTWFpbkNvbnRlbnQgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpbkNvbnRlbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYWluLWNvbnRlbnQnKTtcblxuICAgICAgICByZXR1cm4gbWFpbkNvbnRlbnQ7XG5cbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgdmFyaWFibGVzL2Z1bmN0aW9uc1xuXG4gICAgY29uc3QgYnVpbGRJbml0aWFsQ29udGVudCA9ICgpID0+IHtcblxuICAgICAgICBfY29udGVudC5hcHBlbmRDaGlsZCggaGVhZGVyRnVuY3Rpb25zLmJ1aWxkSGVhZGVyKCkgKTtcblxuICAgICAgICBjb25zdCBwYWdlTWFpbkNvbnRlbnQgPSBfY3JlYXRlTWFpbkNvbnRlbnQoKTtcbiAgICAgICAgcGFnZU1haW5Db250ZW50LmFwcGVuZENoaWxkKCBob21lRnVuY3Rpb25zLmJ1aWxkVGVtcGxhdGUoKSApO1xuXG4gICAgICAgIF9jb250ZW50LmFwcGVuZENoaWxkKHBhZ2VNYWluQ29udGVudCk7XG5cbiAgICAgICAgX2NvbnRlbnQuYXBwZW5kQ2hpbGQoIGZvb3RlckZ1bmN0aW9ucy5idWlsZEZvb3RlcigpICk7XG5cbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJ1aWxkSW5pdGlhbENvbnRlbnRcbiAgICB9XG5cblxufSkoKTsiLCJpbXBvcnQgeyBnZW5lcmFsRnVuY3Rpb25zIH0gZnJvbSBcIi4uL2dlbmVyYWxcIjtcbmltcG9ydCBjb250YWN0SGVybyBmcm9tICcuLi8uLi9hc3NldHMvaW1nL2NvbnRhY3QtaGVyby5qcGcnO1xuXG5leHBvcnQgY29uc3QgY29udGFjdEZ1bmN0aW9ucyA9ICgoKSA9PiB7XG5cbiAgICAvLyBQcml2YXRlIHZhcmlhYmxlcy9mdW5jdGlvbnNcblxuICAgIC8vIFB1YmxpYyB2YXJpYWJsZXMvZnVuY3Rpb25zXG5cbiAgICBjb25zdCBidWlsZFRlbXBsYXRlID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGdlbmVyYWxGdW5jdGlvbnMuY3JlYXRlTW9kdWxlKCdtZW51Jyk7XG4gICAgICAgIFxuICAgICAgICBtb2R1bGUuYXBwZW5kQ2hpbGQoIGdlbmVyYWxGdW5jdGlvbnMuY3JlYXRlSGVybygnQ29udGFjdCcsICdGZWVsIGZyZWUgdG8gcmVhY2ggb3V0IGFueSB0aW1lJywgY29udGFjdEhlcm8pICk7XG5cbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGVudENvbnRhaW4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50LWNvbnRhaW4nKTtcblxuICAgICAgICBjb250ZW50Q29udGFpbi5hcHBlbmRDaGlsZCggXG4gICAgICAgICAgICBnZW5lcmFsRnVuY3Rpb25zLmNyZWF0ZUNvbnRlbnRTZWN0aW9uKFxuICAgICAgICAgICAgICAgIFwiV2UnZCBsb3ZlIHRvIGhlYXIgZnJvbSB5b3VcIiwgXG4gICAgICAgICAgICAgICAgXCJIZXJlIGFyZSBCcnVuY2ggQm93bCB3ZSdyZSBhbHdheXMgZXhjaXRlZCB0byBoZWFyIGZyb20gb3VyIGN1c3RvbWVycy4gWW91IGNhbiByZWFjaCB1cyBhdCBpbmZvQGJydW5jaGJvd2wuY29tIG9yIGp1c3QgY2FsbCB1cyBhdCAoMjMyKSAyMjItNDQ0NC5cIixcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgICBtb2R1bGUuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW4pO1xuXG4gICAgICAgIHJldHVybiBtb2R1bGU7XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBidWlsZFRlbXBsYXRlXG4gICAgfVxuXG59KSgpOyIsImltcG9ydCB7IGdlbmVyYWxGdW5jdGlvbnMgfSBmcm9tIFwiLi4vZ2VuZXJhbFwiO1xuaW1wb3J0IGhvbWVIZXJvIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcvYnJ1bmNoLWhvbWUuanBnJztcblxuZXhwb3J0IGNvbnN0IGhvbWVGdW5jdGlvbnMgPSAoKCkgPT4ge1xuXG4gICAgLy8gUHJpdmF0ZSB2YXJpYWJsZXMvZnVuY3Rpb25zXG5cbiAgICAvLyBQdWJsaWMgdmFyaWFibGVzL2Z1bmN0aW9uc1xuXG4gICAgY29uc3QgYnVpbGRUZW1wbGF0ZSA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCBtb2R1bGUgPSBnZW5lcmFsRnVuY3Rpb25zLmNyZWF0ZU1vZHVsZSgnaG9tZScpO1xuICAgICAgICBcbiAgICAgICAgbW9kdWxlLmFwcGVuZENoaWxkKCBnZW5lcmFsRnVuY3Rpb25zLmNyZWF0ZUhlcm8oJ0JydW5jaCBCb3dsJywgJ1NhdGlzZnkgeW91ciBicmVha2Zhc3QgY3JhdmluZ3Mgd2l0aCBkZWxpY2lvdXMgYnJ1bmNoIGJvd2xzJywgaG9tZUhlcm8pICk7XG5cbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGVudENvbnRhaW4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50LWNvbnRhaW4nKTtcblxuICAgICAgICBjb250ZW50Q29udGFpbi5hcHBlbmRDaGlsZCggXG4gICAgICAgICAgICBnZW5lcmFsRnVuY3Rpb25zLmNyZWF0ZUNvbnRlbnRTZWN0aW9uKFxuICAgICAgICAgICAgICAgICdXZWxjb21lIHRvIEJydW5jaCBCb3dsJywgXG4gICAgICAgICAgICAgICAgXCJXZWxjb21lIHRvIEJydW5jaCBCb3dsLCB0aGUgaG90dGVzdCBuZXcgYnJ1bmNoIHNwb3QgaW4gdGhlIGVudGlyZSBjb3VudHJ5LiBXZSdsbCBzZXJ2ZSB1cCBhbnkgZnVuIGJyZWFreWZhc3QgYW5kIGx1bmNoIHN0eWxlIGZvb2QgdGhhdCB5b3UgY2FuIGltYWdpbmUuIE91ciBjdWxpbmFyeSBhcnRpc3RzIGhhdmUgd29ya2VkIGhhcmQgdG8gcG9saXNoIHRoZWlyIHNraWxscyBzbyB0aGF0IG91ciBjdXN0b21lcnMgbmV2ZXIgbGVhdmUgdW5zYXRpc2ZpZWQuIENoZWNrIG91dCBvdXIgbWVudSB0byBzZWUgZXZlcnl0aGluZyB3ZSBvZmZlci5cIixcbiAgICAgICAgICAgICAgICBcIldlIGhvcGUgeW91IHN0b3AgYnkgc29vbiFcIlxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIG1vZHVsZS5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbik7XG5cblxuICAgICAgICByZXR1cm4gbW9kdWxlO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYnVpbGRUZW1wbGF0ZVxuICAgIH1cblxufSkoKTsiLCJpbXBvcnQgeyBnZW5lcmFsRnVuY3Rpb25zIH0gZnJvbSBcIi4uL2dlbmVyYWxcIjtcbmltcG9ydCBtZW51SGVybyBmcm9tICcuLi8uLi9hc3NldHMvaW1nL21lbnUtaGVyby5qcGcnO1xuaW1wb3J0IG1lbnVEYXRhIGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhL21lbnUtZGF0YS5qc29uJztcblxuZXhwb3J0IGNvbnN0IG1lbnVGdW5jdGlvbnMgPSAoKCkgPT4ge1xuXG4gICAgLy8gUHJpdmF0ZSB2YXJpYWJsZXMvZnVuY3Rpb25zXG5cbiAgICBjb25zdCBfYnVpbGRNZW51ID0gKCBhcnJheSApID0+IHtcblxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCggJ21lbnUtaXRlbXMnLCAnd3JhcCcgKTtcblxuICAgICAgICBmb3IoIGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrICl7XG5cbiAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtZW51SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbScpO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpdGVtSGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhZGVyJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGl0ZW1UaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlJyk7XG4gICAgICAgICAgICBpdGVtVGl0bGUuaW5uZXJUZXh0ID0gYXJyYXlbaV0ubmFtZTtcblxuICAgICAgICAgICAgaXRlbUhlYWRlci5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBpdGVtUHJpY2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmljZScpO1xuICAgICAgICAgICAgaXRlbVByaWNlLmlubmVyVGV4dCA9IFwiJFwiICsgYXJyYXlbaV0ucHJpY2U7XG5cbiAgICAgICAgICAgIGl0ZW1IZWFkZXIuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcblxuICAgICAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgaXRlbURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5pbm5lclRleHQgPSBhcnJheVtpXS5kZXNjcmlwdGlvbjtcblxuICAgICAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUhlYWRlcik7XG4gICAgICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuXG4gICAgICAgICAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lbnU7XG5cbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgdmFyaWFibGVzL2Z1bmN0aW9uc1xuXG4gICAgY29uc3QgYnVpbGRUZW1wbGF0ZSA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCBtb2R1bGUgPSBnZW5lcmFsRnVuY3Rpb25zLmNyZWF0ZU1vZHVsZSgnbWVudScpO1xuICAgICAgICBcbiAgICAgICAgbW9kdWxlLmFwcGVuZENoaWxkKCBnZW5lcmFsRnVuY3Rpb25zLmNyZWF0ZUhlcm8oJ01lbnUnLCAnT3VyIGNob2ljZXMgd2lsbCBhbHdheXMgbGVhdmUgeW91IHNhdGlzZmllZCcsIG1lbnVIZXJvKSApO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnRDb250YWluLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudC1jb250YWluJyk7XG5cbiAgICAgICAgY29udGVudENvbnRhaW4uYXBwZW5kQ2hpbGQoIFxuICAgICAgICAgICAgZ2VuZXJhbEZ1bmN0aW9ucy5jcmVhdGVDb250ZW50U2VjdGlvbihcbiAgICAgICAgICAgICAgICAnT3VyIE9wdGlvbnMnLCBcbiAgICAgICAgICAgICAgICBcIkJydW5jaCBCb3dsIG9mZmVycyBhIHZhcmlldHkgb2YgY3VsaW5hcnkgb3B0aW9ucywgcGxlYXNlIGxldCB1cyBrbm93IGlmIHRoZXJlIGFyZSBhbnkgc3BlY2lhbCBhbGxlcmdlbnMgYmVmb3JlIG1ha2luZyB5b3VyIG9yZGVyLlwiICAgICAgICAgICAgXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgY29udGVudENvbnRhaW4uYXBwZW5kQ2hpbGQoIF9idWlsZE1lbnUobWVudURhdGEpICk7XG5cbiAgICAgICAgbW9kdWxlLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluKTtcblxuICAgICAgICByZXR1cm4gbW9kdWxlO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYnVpbGRUZW1wbGF0ZVxuICAgIH1cblxufSkoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL3N0eWxlcy5zY3NzJztcblxuaW1wb3J0IHsgcGFnZUxvYWQgfSBmcm9tIFwiLi9tb2R1bGVzL3BhZ2VMb2FkXCI7XG5pbXBvcnQgeyBnZW5lcmFsRnVuY3Rpb25zIH0gZnJvbSBcIi4vbW9kdWxlcy9nZW5lcmFsXCI7XG5pbXBvcnQgeyBob21lRnVuY3Rpb25zIH0gZnJvbSBcIi4vbW9kdWxlcy90ZW1wbGF0ZXMvaG9tZVwiO1xuaW1wb3J0IHsgbWVudUZ1bmN0aW9ucyB9IGZyb20gXCIuL21vZHVsZXMvdGVtcGxhdGVzL21lbnVcIjtcbmltcG9ydCB7IGNvbnRhY3RGdW5jdGlvbnMgfSBmcm9tIFwiLi9tb2R1bGVzL3RlbXBsYXRlcy9jb250YWN0XCI7XG5cbmNvbnN0IHN3aXRjaFRhYnMgPSAoKCkgPT4ge1xuXG4gICAgLy8gUHJpdmF0ZSB2YXJpYWJsZXMvZnVuY3Rpb25zXG5cbiAgICBjb25zdCBfY2hhbmdlVGFiID0gKGUpID0+IHtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgbGluayA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgbGlua1RhcmdldCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRhcmdldDtcbiAgICAgICAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2IGEnKTtcbiAgICAgICAgY29uc3QgcGFnZU1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuXG4gICAgICAgIG5hdkxpbmtzLmZvckVhY2goIChuYXZMaW5rKSA9PiB7XG4gICAgICAgICAgICBuYXZMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aXZlJyk7XG5cblxuICAgICAgICBnZW5lcmFsRnVuY3Rpb25zLmNsZWFyQ29udGVudChwYWdlTWFpbkNvbnRlbnQpO1xuXG4gICAgICAgIHN3aXRjaChsaW5rVGFyZ2V0KSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgICAgICAgIHBhZ2VNYWluQ29udGVudC5hcHBlbmRDaGlsZCggaG9tZUZ1bmN0aW9ucy5idWlsZFRlbXBsYXRlKCkgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgICAgICAgICAgcGFnZU1haW5Db250ZW50LmFwcGVuZENoaWxkKCBtZW51RnVuY3Rpb25zLmJ1aWxkVGVtcGxhdGUoKSApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdjb250YWN0JzpcbiAgICAgICAgICAgICAgICBwYWdlTWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoIGNvbnRhY3RGdW5jdGlvbnMuYnVpbGRUZW1wbGF0ZSgpICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIFB1YmxpYyB2YXJpYWJsZXMvZnVuY3Rpb25zXG5cbiAgICBjb25zdCBidWlsZExpc3RlbmVycyA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYgYScpO1xuXG4gICAgICAgIG5hdkxpbmtzLmZvckVhY2goIChuYXZMaW5rKSA9PiB7XG5cbiAgICAgICAgICAgIG5hdkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfY2hhbmdlVGFiICk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBidWlsZExpc3RlbmVyc1xuICAgIH1cblxufSkoKTtcblxuXG5jb25zdCB0cmlnZ2VyTWVudSA9ICgoKSA9PiB7XG5cbiAgICAvLyBQcml2YXRlIHZhcmlhYmxlcy9mdW5jdGlvbnNcblxuICAgIGNvbnN0IF90cmlnZ2VyID0gKGUpID0+IHtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpO1xuICAgICAgICBjb25zdCB0cmlnZ2VyID0gZS5jdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgdHJpZ2dlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiBcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgdmFyaWFibGVzL2Z1bmN0aW9uc1xuXG4gICAgY29uc3QgYnVpbGRMaXN0ZW5lcnMgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgbW1UcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1tLXRyaWdnZXInKTtcblxuICAgICAgICBtbVRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdHJpZ2dlciApO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYnVpbGRMaXN0ZW5lcnNcbiAgICB9XG5cbn0pKCk7XG5cblxuLy8gU2l0ZSBJbml0aWFsaXphdGlvblxuXG5wYWdlTG9hZC5idWlsZEluaXRpYWxDb250ZW50KCk7XG5cbnN3aXRjaFRhYnMuYnVpbGRMaXN0ZW5lcnMoKTtcblxudHJpZ2dlck1lbnUuYnVpbGRMaXN0ZW5lcnMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=