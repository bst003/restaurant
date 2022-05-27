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


/*

BEFORE DOING ANYTHING WRITE OUT YOUR PLAN


General Setup
    Start by creating headers and footers in their own modules
    Each tab will have its own module
        Factory to create tab modules?
    Have a general site setup/creation function which will call the header/footer/tab creation functions


Miscellaneous
    tab switching event listeners will need to be added after page load
        will first remove existing .module then add new one

NEW NOTES
    Potentially refactor all templates into one template file?
    Should createWrap be with createHero and createModule when two are module specific?

*/







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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0EsNkNBQTZDLHNGQUE4Qjs7QUFFM0U7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRDs7QUFFQSwyRUFBNEI7O0FBRTVCOztBQUVBLDZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvc2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvc2Nzcy9zdHlsZXMuc2Nzcz9mM2M4Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvZ2VuZXJhbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvdGVtcGxhdGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL3RlbXBsYXRlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy90ZW1wbGF0ZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRkVGRTtcXG4gIGNvbG9yOiAjMTExO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIaW5kIFNpbGlndXJpXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxufVxcblxcbiNvbGQtY29udGVudCxcXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiBtaW4oODQlLCAxMTYwcHgpO1xcbn1cXG4ud3JhcC5taW5pIHtcXG4gIHdpZHRoOiBtaW4oODQlLCA4MDBweCk7XFxufVxcblxcbi5jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmgxLFxcbi5oMSxcXG5oMixcXG4uaDIsXFxuaDMsXFxuLmgzLFxcbmg0LFxcbi5oNCB7XFxuICBtYXJnaW46IDEwcHggMHB4O1xcbiAgY29sb3I6ICMyRUEyOEY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5oMSxcXG4uaDEge1xcbiAgZm9udC1zaXplOiA1NHB4O1xcbn1cXG5cXG5oMixcXG4uaDIge1xcbiAgZm9udC1zaXplOiAzOHB4O1xcbn1cXG5cXG5oMyxcXG4uaDMge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG5oNCxcXG4uaDQge1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMjRweCAwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAyO1xcbiAgcGFkZGluZzogMTVweCAwcHg7XFxufVxcbmhlYWRlciAud3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmxvZ28gZGl2IHtcXG4gIGhlaWdodDogMzZweDtcXG4gIHdpZHRoOiAzNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0EyMkU0MTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcbi5uYXYtY29udGFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5tbS10cmlnZ2VyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XFxuICBib3JkZXI6IGluaXRpYWw7XFxufVxcbi5tbS10cmlnZ2VyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM5XFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4ubW0tdHJpZ2dlci5hY3RpdmU6OmJlZm9yZSB7XFxuICBjb2xvcjogI0EyMkU0MTtcXG59XFxuXFxuLm5hdiB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZ2FwOiAzNXB4O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4ubmF2IGxpIGEge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiAjMTExO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuLm5hdiBsaSBhLmFjdGl2ZSB7XFxuICBjb2xvcjogI0EyMkU0MTtcXG59XFxuLm5hdiBsaSBhOmhvdmVyLCAubmF2IGxpIGE6YWN0aXZlIHtcXG4gIGNvbG9yOiAjQTIyRTQxO1xcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm1tLXRyaWdnZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgLm5hdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRkVGRTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA2cHg7XFxuICB9XFxuICAubmF2LmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICAubmF2IGxpIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB9XFxufVxcbi5oZXJvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLWhlaWdodDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuLmhlcm86OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICMyRUEyOEY7XFxuICBvcGFjaXR5OiAwLjc1O1xcbn1cXG4uaGVybyAud3JhcCB7XFxuICBwYWRkaW5nOiA0MHB4IDBweDtcXG59XFxuLmhlcm8gcCB7XFxuICBjb2xvcjogI0ZFRkVGRTtcXG59XFxuLmhlcm8gcDpub3QoLmgxKSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uY29udGVudC1jb250YWluIHtcXG4gIHBhZGRpbmc6IDEwMHB4IDBweDtcXG59XFxuLmNvbnRlbnQtY29udGFpbiA+IGRpdjpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLm1lbnUtaXRlbXMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICByb3ctZ2FwOiA0MHB4O1xcbiAgY29sdW1uLWdhcDogNTBweDtcXG59XFxuXFxuLm1lbnUtaXRlbSAuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBjb2x1bW4tZ2FwOiAxMnB4O1xcbiAgcm93LWdhcDogNHB4O1xcbiAgbWFyZ2luOiAwcHggMHB4IDhweDtcXG59XFxuLm1lbnUtaXRlbSBwIHtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG4ubWVudS1pdGVtIHAudGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gIC5tZW51LWl0ZW1zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcXG4gIC5tZW51LWl0ZW1zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxufVxcbmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNBMjJFNDE7XFxuICBjb2xvcjogI0ZFRkVGRTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Ny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RUk7SUFDSSxxQ0FBQTtFQWpFTjtBQUNGO0FBcUVBO0VBRUk7SUFDSSwwQkFBQTtFQXBFTjtBQUNGO0FBNEVBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFuVE87RUFvVFAsY0F4VEk7RUF5VEosZ0JBQUE7QUExRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gR2xvYmFsIFZhcmlhYmxlc1xcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xcblxcblxcbiRwcmltYXJ5Rm9udDogJ0hpbmQgU2lsaWd1cmknLCBzYW5zLXNlcmlmO1xcblxcbiR3aGl0ZTogI0ZFRkVGRTtcXG4kYmxhY2s6ICMxMTE7XFxuJGxpZ2h0R3JheTogI2ViZWFlYTtcXG5cXG4kYnJhbmRPbmU6ICNBMjJFNDE7XFxuJGJyYW5kVHdvOiAjMkVBMjhGO1xcbiRicmFuZFRocmVlOiAjNzdEOEM4O1xcblxcblxcbi8vIEJhc2UgU3R5bGVzXFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXFxuXFxuaHRtbHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gICAgY29sb3I6ICRibGFjaztcXG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5Rm9udDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcXG59XFxuXFxuI29sZC1jb250ZW50LFxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi53cmFwe1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IG1pbig4NCUsIDExNjBweCk7XFxuXFxuXFxuICAgICYubWluaXtcXG4gICAgICAgIHdpZHRoOiBtaW4oODQlLCA4MDBweCk7XFxuICAgIH1cXG5cXG59XFxuXFxuLmNlbnRlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjt9XFxuXFxuaDEsXFxuLmgxLFxcbmgyLFxcbi5oMixcXG5oMyxcXG4uaDMsXFxuaDQsXFxuLmg0e1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbiAgICBjb2xvcjogJGJyYW5kVHdvO1xcbiAgICBmb250LXdlaWdodDogNzAwO31cXG5cXG5oMSxcXG4uaDF7XFxuICAgIGZvbnQtc2l6ZTogNTRweDt9XFxuXFxuaDIsXFxuLmgye1xcbiAgICBmb250LXNpemU6IDM4cHg7fVxcblxcbmgzLFxcbi5oM3tcXG4gICAgZm9udC1zaXplOiAzMnB4O31cXG5cXG5oNCxcXG4uaDR7XFxuICAgIGZvbnQtc2l6ZTogMjZweDt9XFxuXFxucHtcXG4gICAgbWFyZ2luOiAyNHB4IDBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O31cXG5cXG5cXG5cXG4vLyBIZWFkZXJcXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cXG5cXG5oZWFkZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcGFkZGluZzogMTVweCAwcHg7XFxuXFxuICAgIC53cmFwe1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDUwcHg7XFxuICAgIH1cXG5cXG59XFxuXFxuLmxvZ297XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcblxcbiAgICBkaXZ7XFxuICAgICAgICBoZWlnaHQ6IDM2cHg7XFxuICAgICAgICB3aWR0aDogMzZweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRicmFuZE9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7fVxcblxcbn1cXG5cXG4ubmF2LWNvbnRhaW57XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxleDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLm1tLXRyaWdnZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XFxuICAgIGJvcmRlcjogaW5pdGlhbDtcXG5cXG4gICAgJjo6YmVmb3Jle1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXFxmMGM5XFxcIjtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgRnJlZSc7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICB9XFxuXFxuICAgICYuYWN0aXZle1xcblxcbiAgICAgICAgJjo6YmVmb3Jle1xcbiAgICAgICAgICAgIGNvbG9yOiAkYnJhbmRPbmU7XFxuICAgICAgICB9XFxuXFxuICAgIH1cXG5cXG59XFxuXFxuLm5hdntcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOiAzNXB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuXFxuICAgIGxpe1xcblxcbiAgICAgICAgYXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xcblxcbiAgICAgICAgICAgICYuYWN0aXZle1xcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJyYW5kT25lO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmOmhvdmVyLFxcbiAgICAgICAgICAgICY6YWN0aXZle1xcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJyYW5kT25lO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIH1cXG5cXG4gICAgfVxcblxcbn1cXG5cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcblxcbiAgICAubW0tdHJpZ2dlcntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgLm5hdntcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDEwMCU7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiA2cHg7XFxuXFxuICAgICAgICAmLmFjdGl2ZXtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgbGl7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgICAgICB9XFxuXFxuICAgIH1cXG5cXG59XFxuXFxuXFxuXFxuLy8gTWFpbiBDb250ZW50XFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXFxuXFxuXFxuLmhlcm97XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXG4gICAgJjo6YmVmb3Jle1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAkYnJhbmRUd287XFxuICAgICAgICBvcGFjaXR5OiAuNzU7fVxcblxcbiAgICAud3JhcHtcXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMHB4O31cXG5cXG4gICAgcHtcXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XFxuXFxuICAgICAgICAmOm5vdCguaDEpe1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxufVxcblxcblxcbi5jb250ZW50LWNvbnRhaW57XFxuICAgIHBhZGRpbmc6IDEwMHB4IDBweDtcXG5cXG4gICAgPmRpdjpub3QoOmxhc3Qtb2YtdHlwZSl7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgICB9XFxuXFxufVxcblxcblxcbi5tZW51LWl0ZW1ze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICByb3ctZ2FwOiA0MHB4O1xcbiAgICBjb2x1bW4tZ2FwOiA1MHB4O1xcbn1cXG5cXG4ubWVudS1pdGVte1xcblxcbiAgICAuaGVhZGVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGNvbHVtbi1nYXA6IDEycHg7XFxuICAgICAgICByb3ctZ2FwOiA0cHg7XFxuICAgICAgICBtYXJnaW46IDBweCAwcHggOHB4O1xcbiAgICB9XFxuXFxuICAgIHB7XFxuICAgICAgICBtYXJnaW46IDBweDtcXG4gICAgICAgICYudGl0bGV7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbn1cXG5cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcblxcbiAgICAubWVudS1pdGVtc3tcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIH1cXG5cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcXG5cXG4gICAgLm1lbnUtaXRlbXN7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgfVxcblxcbn1cXG5cXG5cXG4vLyBGb290ZXJcXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cXG5cXG5mb290ZXJ7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJyYW5kT25lO1xcbiAgICBjb2xvcjogJHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdlbmVyYWxGdW5jdGlvbnMgfSBmcm9tIFwiLi9nZW5lcmFsXCI7XG5cbmV4cG9ydCBjb25zdCBmb290ZXJGdW5jdGlvbnMgPSAoKCkgPT4ge1xuXG4gICAgLy8gUHJpdmF0ZSB2YXJpYWJsZXMvZnVuY3Rpb25zXG5cblxuICAgIC8vIFB1YmxpYyB2YXJpYWJsZXMvZnVuY3Rpb25zXG5cbiAgICBjb25zdCBidWlsZEZvb3RlciA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHdyYXAgPSBnZW5lcmFsRnVuY3Rpb25zLmNyZWF0ZVdyYXAoKTtcblxuICAgICAgICB3cmFwLmlubmVySFRNTCA9ICcmY29weTsgQnJ1bmNoIEJvd2wnO1xuXG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZCh3cmFwKTtcblxuICAgICAgICByZXR1cm4gZm9vdGVyO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYnVpbGRGb290ZXJcbiAgICB9XG5cbn0pKCk7IiwiZXhwb3J0IGNvbnN0IGdlbmVyYWxGdW5jdGlvbnMgPSAoKCkgPT4ge1xuXG4gICAgLy8gUHJpdmF0ZSB2YXJpYWJsZXMvZnVuY3Rpb25zXG5cblxuXG4gICAgLy8gUHVibGljIHZhcmlhYmxlcy9mdW5jdGlvbnNcblxuXG4gICAgY29uc3QgY2xlYXJDb250ZW50ID0gKHBhcmVudCkgPT4ge1xuXG4gICAgICAgIHdoaWxlKCBwYXJlbnQuZmlyc3RDaGlsZCApe1xuXG4gICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoIHBhcmVudC5maXJzdENoaWxkICk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICBjb25zdCBjcmVhdGVDb250ZW50U2VjdGlvbiA9ICggdGl0bGUsIC4uLmRlc2NyaXB0aW9uICkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtc2VjdGlvbicsICd3cmFwJywgJ21pbmknKTtcblxuICAgICAgICBjb25zdCBzZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBzZWN0aW9uVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjZW50ZXInKTtcbiAgICAgICAgc2VjdGlvblRpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuXG4gICAgICAgIGNvbnRlbnRTZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25UaXRsZSk7XG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uQXJyYXkgPSBkZXNjcmlwdGlvbjtcblxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBkZXNjcmlwdGlvbkFycmF5Lmxlbmd0aDsgaSsrKXtcblxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgc2VjdGlvbkRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uQXJyYXlbaV07XG5cbiAgICAgICAgICAgIGNvbnRlbnRTZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25EZXNjcmlwdGlvbik7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb250ZW50U2VjdGlvbjtcblxuICAgIH1cblxuXG4gICAgY29uc3QgY3JlYXRlSGVybyA9ICggdGl0bGUsIGRlc2NyaXB0aW9uLCBpbWFnZSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVyby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlcm8nKTtcbiAgICAgICAgaGVyby5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2V9KWA7XG5cbiAgICAgICAgY29uc3Qgd3JhcCA9IGNyZWF0ZVdyYXAoKTtcblxuICAgICAgICBjb25zdCBoZXJvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGhlcm9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2gxJyk7XG4gICAgICAgIGhlcm9UaXRsZS5pbm5lclRleHQgPSB0aXRsZTtcblxuICAgICAgICBjb25zdCBoZXJvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGhlcm9EZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcblxuICAgICAgICB3cmFwLmFwcGVuZENoaWxkKGhlcm9UaXRsZSk7XG4gICAgICAgIHdyYXAuYXBwZW5kQ2hpbGQoaGVyb0Rlc2NyaXB0aW9uKTtcblxuICAgICAgICBoZXJvLmFwcGVuZENoaWxkKHdyYXApO1xuXG4gICAgICAgIHJldHVybiBoZXJvO1xuXG4gICAgfVxuXG5cbiAgICBjb25zdCBjcmVhdGVNb2R1bGUgPSAodGl0bGUpID0+IHtcblxuICAgICAgICBjb25zdCBtb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kdWxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbW9kdWxlJyk7XG4gICAgICAgIG1vZHVsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kdWxlJywgdGl0bGUpO1xuXG4gICAgICAgIHJldHVybiBtb2R1bGU7XG5cbiAgICB9XG5cblxuICAgIGNvbnN0IGNyZWF0ZVdyYXAgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3Qgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3cmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd3JhcCcpO1xuXG4gICAgICAgIHJldHVybiB3cmFwO1xuXG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjbGVhckNvbnRlbnQsXG4gICAgICAgIGNyZWF0ZUNvbnRlbnRTZWN0aW9uLFxuICAgICAgICBjcmVhdGVIZXJvLFxuICAgICAgICBjcmVhdGVNb2R1bGUsXG4gICAgICAgIGNyZWF0ZVdyYXBcbiAgICB9XG5cblxufSkoKTsiLCJpbXBvcnQgeyBnZW5lcmFsRnVuY3Rpb25zIH0gZnJvbSBcIi4vZ2VuZXJhbFwiO1xuXG5leHBvcnQgY29uc3QgaGVhZGVyRnVuY3Rpb25zID0gKCgpID0+IHtcblxuICAgIC8vIEZhY3Rvcmllc1xuXG4gICAgY29uc3QgX25ld05hdkxpbmsgPSAoIG5hbWUgKSA9PiB7XG5cbiAgICAgICAgY29uc3QgZ2V0TmFtZSAgPSAoKSA9PiBuYW1lO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXROYW1lXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIFByaXZhdGUgdmFyaWFibGVzL2Z1bmN0aW9uc1xuXG4gICAgY29uc3QgX25hdkxpbmtzID0gW107XG5cbiAgICBjb25zdCBfY3JlYXRlTG9nbyA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbG9nbycpO1xuICAgICAgICBsb2dvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbG9nbycpO1xuXG4gICAgICAgIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IGxvZ29UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgbG9nb1RpdGxlLmlubmVyVGV4dCA9ICdCcnVuY2ggQm93bCc7XG5cbiAgICAgICAgbG9nby5hcHBlbmRDaGlsZChjaXJjbGUpO1xuICAgICAgICBsb2dvLmFwcGVuZENoaWxkKGxvZ29UaXRsZSk7XG5cbiAgICAgICAgcmV0dXJuIGxvZ287XG5cbiAgICB9IFxuXG4gICAgY29uc3QgX2NyZWF0ZU5hdiA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCBuYXZDb250YWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5hdkNvbnRhaW4uc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtY29udGFpbicpO1xuXG4gICAgICAgIGNvbnN0IG1tVHJpZ2dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBtbVRyaWdnZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBtbVRyaWdnZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtbS10cmlnZ2VyJyk7XG5cbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2Jyk7XG5cbiAgICAgICAgY29uc3QgaG9tZUxpbmsgPSBfbmV3TmF2TGluaygnaG9tZScpO1xuICAgICAgICBfbmF2TGlua3MucHVzaChob21lTGluayk7XG5cbiAgICAgICAgY29uc3QgbWVudUxpbmsgPSBfbmV3TmF2TGluaygnbWVudScpO1xuICAgICAgICBfbmF2TGlua3MucHVzaChtZW51TGluayk7XG5cbiAgICAgICAgY29uc3QgY29udGFjdExpbmsgPSBfbmV3TmF2TGluaygnY29udGFjdCcpO1xuICAgICAgICBfbmF2TGlua3MucHVzaChjb250YWN0TGluayk7XG5cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9uYXZMaW5rcy5sZW5ndGg7IGkrKyl7XG5cbiAgICAgICAgICAgIGNvbnN0IG5hdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgICAgICBjb25zdCBuYXZMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgICAgICAgICBpZiggaSA9PT0gMCApe1xuICAgICAgICAgICAgICAgIG5hdkxpbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmF2TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycpO1xuICAgICAgICAgICAgbmF2TGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgX25hdkxpbmtzW2ldLmdldE5hbWUoKSApO1xuXG4gICAgICAgICAgICBuYXZMaW5rLmlubmVyVGV4dCA9IF9uYXZMaW5rc1tpXS5nZXROYW1lKCk7XG5cbiAgICAgICAgICAgIG5hdkl0ZW0uYXBwZW5kQ2hpbGQobmF2TGluayk7XG5cbiAgICAgICAgICAgIG5hdi5hcHBlbmRDaGlsZChuYXZJdGVtKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgbmF2Q29udGFpbi5hcHBlbmRDaGlsZChtbVRyaWdnZXIpO1xuICAgICAgICBuYXZDb250YWluLmFwcGVuZENoaWxkKG5hdik7XG5cblxuICAgICAgICByZXR1cm4gbmF2Q29udGFpbjtcblxuICAgIH1cblxuXG4gICAgLy8gUHVibGljIHZhcmlhYmxlcy9mdW5jdGlvbnNcblxuICAgIGNvbnN0IGJ1aWxkSGVhZGVyID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gICAgICAgIGNvbnN0IHdyYXAgPSBnZW5lcmFsRnVuY3Rpb25zLmNyZWF0ZVdyYXAoKTtcblxuICAgICAgICB3cmFwLmFwcGVuZENoaWxkKCBfY3JlYXRlTG9nbygpICk7XG5cbiAgICAgICAgd3JhcC5hcHBlbmRDaGlsZCggX2NyZWF0ZU5hdigpICk7XG5cbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHdyYXApO1xuXG4gICAgICAgIHJldHVybiBoZWFkZXI7XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBidWlsZEhlYWRlclxuICAgIH1cblxufSkoKTsiLCJpbXBvcnQgeyBoZWFkZXJGdW5jdGlvbnMgfSBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCB7IGZvb3RlckZ1bmN0aW9ucyB9IGZyb20gXCIuL2Zvb3RlclwiO1xuXG5pbXBvcnQgeyBob21lRnVuY3Rpb25zIH0gZnJvbSBcIi4vdGVtcGxhdGVzL2hvbWVcIjtcblxuZXhwb3J0IGNvbnN0IHBhZ2VMb2FkID0gKCgpID0+IHtcblxuICAgIC8vIFByaXZhdGUgdmFyaWFibGVzL2Z1bmN0aW9uc1xuICAgIGNvbnN0IF9jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IF9jcmVhdGVNYWluQ29udGVudCA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21haW4tY29udGVudCcpO1xuXG4gICAgICAgIHJldHVybiBtYWluQ29udGVudDtcblxuICAgIH1cblxuICAgIC8vIFB1YmxpYyB2YXJpYWJsZXMvZnVuY3Rpb25zXG5cbiAgICBjb25zdCBidWlsZEluaXRpYWxDb250ZW50ID0gKCkgPT4ge1xuXG4gICAgICAgIF9jb250ZW50LmFwcGVuZENoaWxkKCBoZWFkZXJGdW5jdGlvbnMuYnVpbGRIZWFkZXIoKSApO1xuXG4gICAgICAgIGNvbnN0IHBhZ2VNYWluQ29udGVudCA9IF9jcmVhdGVNYWluQ29udGVudCgpO1xuICAgICAgICBwYWdlTWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoIGhvbWVGdW5jdGlvbnMuYnVpbGRUZW1wbGF0ZSgpICk7XG5cbiAgICAgICAgX2NvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZU1haW5Db250ZW50KTtcblxuICAgICAgICBfY29udGVudC5hcHBlbmRDaGlsZCggZm9vdGVyRnVuY3Rpb25zLmJ1aWxkRm9vdGVyKCkgKTtcblxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYnVpbGRJbml0aWFsQ29udGVudFxuICAgIH1cblxuXG59KSgpOyIsImltcG9ydCB7IGdlbmVyYWxGdW5jdGlvbnMgfSBmcm9tIFwiLi4vZ2VuZXJhbFwiO1xuaW1wb3J0IGNvbnRhY3RIZXJvIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcvY29udGFjdC1oZXJvLmpwZyc7XG5cbmV4cG9ydCBjb25zdCBjb250YWN0RnVuY3Rpb25zID0gKCgpID0+IHtcblxuICAgIC8vIFByaXZhdGUgdmFyaWFibGVzL2Z1bmN0aW9uc1xuXG4gICAgLy8gUHVibGljIHZhcmlhYmxlcy9mdW5jdGlvbnNcblxuICAgIGNvbnN0IGJ1aWxkVGVtcGxhdGUgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gZ2VuZXJhbEZ1bmN0aW9ucy5jcmVhdGVNb2R1bGUoJ21lbnUnKTtcbiAgICAgICAgXG4gICAgICAgIG1vZHVsZS5hcHBlbmRDaGlsZCggZ2VuZXJhbEZ1bmN0aW9ucy5jcmVhdGVIZXJvKCdDb250YWN0JywgJ0ZlZWwgZnJlZSB0byByZWFjaCBvdXQgYW55IHRpbWUnLCBjb250YWN0SGVybykgKTtcblxuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50Q29udGFpbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnQtY29udGFpbicpO1xuXG4gICAgICAgIGNvbnRlbnRDb250YWluLmFwcGVuZENoaWxkKCBcbiAgICAgICAgICAgIGdlbmVyYWxGdW5jdGlvbnMuY3JlYXRlQ29udGVudFNlY3Rpb24oXG4gICAgICAgICAgICAgICAgXCJXZSdkIGxvdmUgdG8gaGVhciBmcm9tIHlvdVwiLCBcbiAgICAgICAgICAgICAgICBcIkhlcmUgYXJlIEJydW5jaCBCb3dsIHdlJ3JlIGFsd2F5cyBleGNpdGVkIHRvIGhlYXIgZnJvbSBvdXIgY3VzdG9tZXJzLiBZb3UgY2FuIHJlYWNoIHVzIGF0IGluZm9AYnJ1bmNoYm93bC5jb20gb3IganVzdCBjYWxsIHVzIGF0ICgyMzIpIDIyMi00NDQ0LlwiLFxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIG1vZHVsZS5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbik7XG5cbiAgICAgICAgcmV0dXJuIG1vZHVsZTtcblxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJ1aWxkVGVtcGxhdGVcbiAgICB9XG5cbn0pKCk7IiwiaW1wb3J0IHsgZ2VuZXJhbEZ1bmN0aW9ucyB9IGZyb20gXCIuLi9nZW5lcmFsXCI7XG5pbXBvcnQgaG9tZUhlcm8gZnJvbSAnLi4vLi4vYXNzZXRzL2ltZy9icnVuY2gtaG9tZS5qcGcnO1xuXG5leHBvcnQgY29uc3QgaG9tZUZ1bmN0aW9ucyA9ICgoKSA9PiB7XG5cbiAgICAvLyBQcml2YXRlIHZhcmlhYmxlcy9mdW5jdGlvbnNcblxuICAgIC8vIFB1YmxpYyB2YXJpYWJsZXMvZnVuY3Rpb25zXG5cbiAgICBjb25zdCBidWlsZFRlbXBsYXRlID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGdlbmVyYWxGdW5jdGlvbnMuY3JlYXRlTW9kdWxlKCdob21lJyk7XG4gICAgICAgIFxuICAgICAgICBtb2R1bGUuYXBwZW5kQ2hpbGQoIGdlbmVyYWxGdW5jdGlvbnMuY3JlYXRlSGVybygnQnJ1bmNoIEJvd2wnLCAnU2F0aXNmeSB5b3VyIGJyZWFrZmFzdCBjcmF2aW5ncyB3aXRoIGRlbGljaW91cyBicnVuY2ggYm93bHMnLCBob21lSGVybykgKTtcblxuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50Q29udGFpbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnQtY29udGFpbicpO1xuXG4gICAgICAgIGNvbnRlbnRDb250YWluLmFwcGVuZENoaWxkKCBcbiAgICAgICAgICAgIGdlbmVyYWxGdW5jdGlvbnMuY3JlYXRlQ29udGVudFNlY3Rpb24oXG4gICAgICAgICAgICAgICAgJ1dlbGNvbWUgdG8gQnJ1bmNoIEJvd2wnLCBcbiAgICAgICAgICAgICAgICBcIldlbGNvbWUgdG8gQnJ1bmNoIEJvd2wsIHRoZSBob3R0ZXN0IG5ldyBicnVuY2ggc3BvdCBpbiB0aGUgZW50aXJlIGNvdW50cnkuIFdlJ2xsIHNlcnZlIHVwIGFueSBmdW4gYnJlYWt5ZmFzdCBhbmQgbHVuY2ggc3R5bGUgZm9vZCB0aGF0IHlvdSBjYW4gaW1hZ2luZS4gT3VyIGN1bGluYXJ5IGFydGlzdHMgaGF2ZSB3b3JrZWQgaGFyZCB0byBwb2xpc2ggdGhlaXIgc2tpbGxzIHNvIHRoYXQgb3VyIGN1c3RvbWVycyBuZXZlciBsZWF2ZSB1bnNhdGlzZmllZC4gQ2hlY2sgb3V0IG91ciBtZW51IHRvIHNlZSBldmVyeXRoaW5nIHdlIG9mZmVyLlwiLFxuICAgICAgICAgICAgICAgIFwiV2UgaG9wZSB5b3Ugc3RvcCBieSBzb29uIVwiXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgbW9kdWxlLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluKTtcblxuXG4gICAgICAgIHJldHVybiBtb2R1bGU7XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBidWlsZFRlbXBsYXRlXG4gICAgfVxuXG59KSgpOyIsImltcG9ydCB7IGdlbmVyYWxGdW5jdGlvbnMgfSBmcm9tIFwiLi4vZ2VuZXJhbFwiO1xuaW1wb3J0IG1lbnVIZXJvIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcvbWVudS1oZXJvLmpwZyc7XG5pbXBvcnQgbWVudURhdGEgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvbWVudS1kYXRhLmpzb24nO1xuXG5leHBvcnQgY29uc3QgbWVudUZ1bmN0aW9ucyA9ICgoKSA9PiB7XG5cbiAgICAvLyBQcml2YXRlIHZhcmlhYmxlcy9mdW5jdGlvbnNcblxuICAgIGNvbnN0IF9idWlsZE1lbnUgPSAoIGFycmF5ICkgPT4ge1xuXG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCAnbWVudS1pdGVtcycsICd3cmFwJyApO1xuXG4gICAgICAgIGZvciggbGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKysgKXtcblxuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1lbnVJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGl0ZW1IZWFkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZWFkZXInKTtcblxuICAgICAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgaXRlbVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKTtcbiAgICAgICAgICAgIGl0ZW1UaXRsZS5pbm5lclRleHQgPSBhcnJheVtpXS5uYW1lO1xuXG4gICAgICAgICAgICBpdGVtSGVhZGVyLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGl0ZW1QcmljZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaWNlJyk7XG4gICAgICAgICAgICBpdGVtUHJpY2UuaW5uZXJUZXh0ID0gXCIkXCIgKyBhcnJheVtpXS5wcmljZTtcblxuICAgICAgICAgICAgaXRlbUhlYWRlci5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBpdGVtRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgaXRlbURlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGFycmF5W2ldLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtSGVhZGVyKTtcbiAgICAgICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG5cbiAgICAgICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVudTtcblxuICAgIH1cblxuICAgIC8vIFB1YmxpYyB2YXJpYWJsZXMvZnVuY3Rpb25zXG5cbiAgICBjb25zdCBidWlsZFRlbXBsYXRlID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGdlbmVyYWxGdW5jdGlvbnMuY3JlYXRlTW9kdWxlKCdtZW51Jyk7XG4gICAgICAgIFxuICAgICAgICBtb2R1bGUuYXBwZW5kQ2hpbGQoIGdlbmVyYWxGdW5jdGlvbnMuY3JlYXRlSGVybygnTWVudScsICdPdXIgY2hvaWNlcyB3aWxsIGFsd2F5cyBsZWF2ZSB5b3Ugc2F0aXNmaWVkJywgbWVudUhlcm8pICk7XG5cbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGVudENvbnRhaW4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50LWNvbnRhaW4nKTtcblxuICAgICAgICBjb250ZW50Q29udGFpbi5hcHBlbmRDaGlsZCggXG4gICAgICAgICAgICBnZW5lcmFsRnVuY3Rpb25zLmNyZWF0ZUNvbnRlbnRTZWN0aW9uKFxuICAgICAgICAgICAgICAgICdPdXIgT3B0aW9ucycsIFxuICAgICAgICAgICAgICAgIFwiQnJ1bmNoIEJvd2wgb2ZmZXJzIGEgdmFyaWV0eSBvZiBjdWxpbmFyeSBvcHRpb25zLCBwbGVhc2UgbGV0IHVzIGtub3cgaWYgdGhlcmUgYXJlIGFueSBzcGVjaWFsIGFsbGVyZ2VucyBiZWZvcmUgbWFraW5nIHlvdXIgb3JkZXIuXCIgICAgICAgICAgICBcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgICBjb250ZW50Q29udGFpbi5hcHBlbmRDaGlsZCggX2J1aWxkTWVudShtZW51RGF0YSkgKTtcblxuICAgICAgICBtb2R1bGUuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW4pO1xuXG4gICAgICAgIHJldHVybiBtb2R1bGU7XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBidWlsZFRlbXBsYXRlXG4gICAgfVxuXG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vYXNzZXRzL3Njc3Mvc3R5bGVzLnNjc3MnO1xuXG4vKlxuXG5CRUZPUkUgRE9JTkcgQU5ZVEhJTkcgV1JJVEUgT1VUIFlPVVIgUExBTlxuXG5cbkdlbmVyYWwgU2V0dXBcbiAgICBTdGFydCBieSBjcmVhdGluZyBoZWFkZXJzIGFuZCBmb290ZXJzIGluIHRoZWlyIG93biBtb2R1bGVzXG4gICAgRWFjaCB0YWIgd2lsbCBoYXZlIGl0cyBvd24gbW9kdWxlXG4gICAgICAgIEZhY3RvcnkgdG8gY3JlYXRlIHRhYiBtb2R1bGVzP1xuICAgIEhhdmUgYSBnZW5lcmFsIHNpdGUgc2V0dXAvY3JlYXRpb24gZnVuY3Rpb24gd2hpY2ggd2lsbCBjYWxsIHRoZSBoZWFkZXIvZm9vdGVyL3RhYiBjcmVhdGlvbiBmdW5jdGlvbnNcblxuXG5NaXNjZWxsYW5lb3VzXG4gICAgdGFiIHN3aXRjaGluZyBldmVudCBsaXN0ZW5lcnMgd2lsbCBuZWVkIHRvIGJlIGFkZGVkIGFmdGVyIHBhZ2UgbG9hZFxuICAgICAgICB3aWxsIGZpcnN0IHJlbW92ZSBleGlzdGluZyAubW9kdWxlIHRoZW4gYWRkIG5ldyBvbmVcblxuTkVXIE5PVEVTXG4gICAgUG90ZW50aWFsbHkgcmVmYWN0b3IgYWxsIHRlbXBsYXRlcyBpbnRvIG9uZSB0ZW1wbGF0ZSBmaWxlP1xuICAgIFNob3VsZCBjcmVhdGVXcmFwIGJlIHdpdGggY3JlYXRlSGVybyBhbmQgY3JlYXRlTW9kdWxlIHdoZW4gdHdvIGFyZSBtb2R1bGUgc3BlY2lmaWM/XG5cbiovXG5cbmltcG9ydCB7IHBhZ2VMb2FkIH0gZnJvbSBcIi4vbW9kdWxlcy9wYWdlTG9hZFwiO1xuaW1wb3J0IHsgZ2VuZXJhbEZ1bmN0aW9ucyB9IGZyb20gXCIuL21vZHVsZXMvZ2VuZXJhbFwiO1xuaW1wb3J0IHsgaG9tZUZ1bmN0aW9ucyB9IGZyb20gXCIuL21vZHVsZXMvdGVtcGxhdGVzL2hvbWVcIjtcbmltcG9ydCB7IG1lbnVGdW5jdGlvbnMgfSBmcm9tIFwiLi9tb2R1bGVzL3RlbXBsYXRlcy9tZW51XCI7XG5pbXBvcnQgeyBjb250YWN0RnVuY3Rpb25zIH0gZnJvbSBcIi4vbW9kdWxlcy90ZW1wbGF0ZXMvY29udGFjdFwiO1xuXG5jb25zdCBzd2l0Y2hUYWJzID0gKCgpID0+IHtcblxuICAgIC8vIFByaXZhdGUgdmFyaWFibGVzL2Z1bmN0aW9uc1xuXG4gICAgY29uc3QgX2NoYW5nZVRhYiA9IChlKSA9PiB7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IGxpbmtUYXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdiBhJyk7XG4gICAgICAgIGNvbnN0IHBhZ2VNYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcblxuICAgICAgICBuYXZMaW5rcy5mb3JFYWNoKCAobmF2TGluaykgPT4ge1xuICAgICAgICAgICAgbmF2TGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FjdGl2ZScpO1xuXG5cbiAgICAgICAgZ2VuZXJhbEZ1bmN0aW9ucy5jbGVhckNvbnRlbnQocGFnZU1haW5Db250ZW50KTtcblxuICAgICAgICBzd2l0Y2gobGlua1RhcmdldCkge1xuXG4gICAgICAgICAgICBjYXNlICdob21lJzpcbiAgICAgICAgICAgICAgICBwYWdlTWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoIGhvbWVGdW5jdGlvbnMuYnVpbGRUZW1wbGF0ZSgpICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ21lbnUnOlxuICAgICAgICAgICAgICAgIHBhZ2VNYWluQ29udGVudC5hcHBlbmRDaGlsZCggbWVudUZ1bmN0aW9ucy5idWlsZFRlbXBsYXRlKCkgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnY29udGFjdCc6XG4gICAgICAgICAgICAgICAgcGFnZU1haW5Db250ZW50LmFwcGVuZENoaWxkKCBjb250YWN0RnVuY3Rpb25zLmJ1aWxkVGVtcGxhdGUoKSApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgdmFyaWFibGVzL2Z1bmN0aW9uc1xuXG4gICAgY29uc3QgYnVpbGRMaXN0ZW5lcnMgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2IGEnKTtcblxuICAgICAgICBuYXZMaW5rcy5mb3JFYWNoKCAobmF2TGluaykgPT4ge1xuXG4gICAgICAgICAgICBuYXZMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2NoYW5nZVRhYiApO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYnVpbGRMaXN0ZW5lcnNcbiAgICB9XG5cbn0pKCk7XG5cblxuY29uc3QgdHJpZ2dlck1lbnUgPSAoKCkgPT4ge1xuXG4gICAgLy8gUHJpdmF0ZSB2YXJpYWJsZXMvZnVuY3Rpb25zXG5cbiAgICBjb25zdCBfdHJpZ2dlciA9IChlKSA9PiB7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKTtcbiAgICAgICAgY29uc3QgdHJpZ2dlciA9IGUuY3VycmVudFRhcmdldDtcblxuICAgICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIHRyaWdnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gXG4gICAgfVxuXG4gICAgLy8gUHVibGljIHZhcmlhYmxlcy9mdW5jdGlvbnNcblxuICAgIGNvbnN0IGJ1aWxkTGlzdGVuZXJzID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IG1tVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tbS10cmlnZ2VyJyk7XG5cbiAgICAgICAgbW1UcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RyaWdnZXIgKTtcblxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJ1aWxkTGlzdGVuZXJzXG4gICAgfVxuXG59KSgpO1xuXG5cbi8vIFNpdGUgSW5pdGlhbGl6YXRpb25cblxucGFnZUxvYWQuYnVpbGRJbml0aWFsQ29udGVudCgpO1xuXG5zd2l0Y2hUYWJzLmJ1aWxkTGlzdGVuZXJzKCk7XG5cbnRyaWdnZXJNZW51LmJ1aWxkTGlzdGVuZXJzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9