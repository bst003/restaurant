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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n  background-color: #FEFEFE;\n  color: #111;\n  font-family: \"Hind Siliguri\", sans-serif;\n  line-height: 1.3;\n}\n\n#old-content,\n#content {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.wrap {\n  position: relative;\n  display: block;\n  margin: 0 auto;\n  width: min(84%, 1160px);\n}\n.wrap.mini {\n  width: min(84%, 800px);\n}\n\n.center {\n  text-align: center;\n  justify-content: center;\n}\n\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3,\nh4,\n.h4 {\n  margin: 10px 0px;\n  color: #2EA28F;\n  font-weight: 700;\n}\n\nh1,\n.h1 {\n  font-size: 54px;\n}\n\nh2,\n.h2 {\n  font-size: 38px;\n}\n\nh3,\n.h3 {\n  font-size: 32px;\n}\n\nh4,\n.h4 {\n  font-size: 26px;\n}\n\np {\n  margin: 24px 0px;\n  font-size: 18px;\n}\n\nheader {\n  position: relative;\n  z-index: 2;\n  padding: 15px 0px;\n}\nheader .wrap {\n  display: flex;\n  align-items: center;\n  gap: 50px;\n}\n\n.logo {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 20px;\n  font-weight: 700;\n}\n.logo div {\n  height: 36px;\n  width: 36px;\n  background-color: #A22E41;\n  border-radius: 100%;\n}\n\n.nav-contain {\n  position: relative;\n  flex: 2;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.mm-trigger {\n  position: relative;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n  width: 40px;\n  background-color: initial;\n  border: initial;\n}\n.mm-trigger::before {\n  content: \"\\f0c9\";\n  font-family: \"Font Awesome 5 Free\";\n  font-size: 24px;\n  font-weight: 900;\n}\n.mm-trigger.active::before {\n  color: #A22E41;\n}\n\n.nav {\n  padding: 0px;\n  margin: 0px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 35px;\n  list-style-type: none;\n}\n.nav li a {\n  font-size: 18px;\n  font-weight: 600;\n  color: #111;\n  text-decoration: none;\n  text-transform: capitalize;\n  transition: all 0.2s;\n}\n.nav li a.active {\n  color: #A22E41;\n}\n.nav li a:hover, .nav li a:active {\n  color: #A22E41;\n}\n\n@media all and (max-width: 768px) {\n  .logo {\n    flex: 2;\n  }\n\n  .nav-contain {\n    flex: 1;\n  }\n\n  .mm-trigger {\n    display: flex;\n  }\n\n  .nav {\n    display: none;\n    position: absolute;\n    top: 100%;\n    right: 0;\n    background-color: #FEFEFE;\n    padding: 20px;\n    flex-direction: column;\n    gap: 6px;\n  }\n  .nav.active {\n    display: flex;\n  }\n  .nav li {\n    text-align: right;\n  }\n}\n.hero {\n  position: relative;\n  display: flex;\n  align-items: center;\n  min-height: 400px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.hero::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #2EA28F;\n  opacity: 0.75;\n}\n.hero .wrap {\n  padding: 40px 0px;\n}\n.hero p {\n  color: #FEFEFE;\n}\n.hero p:not(.h1) {\n  font-size: 24px;\n  font-weight: 500;\n}\n\n.content-contain {\n  padding: 100px 0px;\n}\n.content-contain > div:not(:last-of-type) {\n  margin-bottom: 50px;\n}\n\n.menu-items {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  row-gap: 40px;\n  column-gap: 50px;\n}\n\n.menu-item .header {\n  display: flex;\n  justify-content: space-between;\n  column-gap: 12px;\n  row-gap: 4px;\n  margin: 0px 0px 8px;\n}\n.menu-item p {\n  margin: 0px;\n}\n.menu-item p.title {\n  font-weight: 600;\n}\n\n@media all and (max-width: 991px) {\n  .menu-items {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media all and (max-width: 599px) {\n  .menu-items {\n    grid-template-columns: 1fr;\n  }\n}\nfooter {\n  margin-top: auto;\n  padding: 15px;\n  text-align: center;\n  background-color: #A22E41;\n  color: #FEFEFE;\n  font-weight: 500;\n}", "",{"version":3,"sources":["webpack://./src/assets/scss/styles.scss"],"names":[],"mappings":"AAkBA;EACI,YAAA;AAjBJ;;AAoBA;EACI,YAAA;EACA,yBAlBI;EAmBJ,WAlBI;EAmBJ,wCAtBU;EAuBV,gBAAA;AAjBJ;;AAoBA;;EAEI,aAAA;EACA,sBAAA;EACA,YAAA;AAjBJ;;AAoBA;EACI,kBAAA;EACA,cAAA;EACA,cAAA;EACA,uBAAA;AAjBJ;AAoBI;EACI,sBAAA;AAlBR;;AAuBA;EACI,kBAAA;EACA,uBAAA;AApBJ;;AAsBA;;;;;;;;EAQI,gBAAA;EACA,cApDO;EAqDP,gBAAA;AAnBJ;;AAqBA;;EAEI,eAAA;AAlBJ;;AAoBA;;EAEI,eAAA;AAjBJ;;AAmBA;;EAEI,eAAA;AAhBJ;;AAkBA;;EAEI,eAAA;AAfJ;;AAiBA;EACI,gBAAA;EACA,eAAA;AAdJ;;AAqBA;EACI,kBAAA;EACA,UAAA;EACA,iBAAA;AAlBJ;AAoBI;EACI,aAAA;EACA,mBAAA;EACA,SAAA;AAlBR;;AAuBA;EACI,OAAA;EACA,aAAA;EACA,mBAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;AApBJ;AAsBI;EACI,YAAA;EACA,WAAA;EACA,yBAzGG;EA0GH,mBAAA;AApBR;;AAwBA;EACI,kBAAA;EACA,OAAA;EACA,aAAA;EACA,yBAAA;AArBJ;;AAwBA;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,yBAAA;EACA,eAAA;AArBJ;AAuBI;EACI,gBAAA;EACA,kCAAA;EACA,eAAA;EACA,gBAAA;AArBR;AA0BQ;EACI,cAzID;AAiHX;;AA+BA;EACI,YAAA;EACA,WAAA;EACA,aAAA;EACA,yBAAA;EACA,SAAA;EACA,qBAAA;AA5BJ;AAgCQ;EACI,eAAA;EACA,gBAAA;EACA,WAhKJ;EAiKI,qBAAA;EACA,0BAAA;EACA,oBAAA;AA9BZ;AAgCY;EACI,cAnKL;AAqIX;AAiCY;EAEI,cAxKL;AAwIX;;AA0CA;EAEI;IACI,OAAA;EAxCN;;EA2CE;IACI,OAAA;EAxCN;;EA2CE;IACI,aAAA;EAxCN;;EA2CE;IACI,aAAA;IACA,kBAAA;IACA,SAAA;IACA,QAAA;IACA,yBAzMA;IA0MA,aAAA;IACA,sBAAA;IACA,QAAA;EAxCN;EA0CM;IACI,aAAA;EAxCV;EA2CM;IACI,iBAAA;EAzCV;AACF;AAqDA;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,2BAAA;EACA,4BAAA;EACA,sBAAA;AAnDJ;AAqDI;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,mBA3OG;EA4OH,aAAA;AAnDR;AAqDI;EACI,iBAAA;AAnDR;AAqDI;EACI,cAvPA;AAoMR;AAqDQ;EACI,eAAA;EACA,gBAAA;AAnDZ;;AA0DA;EACI,kBAAA;AAvDJ;AAyDI;EACI,mBAAA;AAvDR;;AA6DA;EACI,aAAA;EACA,qCAAA;EACA,aAAA;EACA,gBAAA;AA1DJ;;AA+DI;EACI,aAAA;EACA,8BAAA;EACA,gBAAA;EACA,YAAA;EACA,mBAAA;AA5DR;AA+DI;EACI,WAAA;AA7DR;AA8DQ;EACI,gBAAA;AA5DZ;;AAmEA;EAEI;IACI,qCAAA;EAjEN;AACF;AAqEA;EAEI;IACI,0BAAA;EApEN;AACF;AA4EA;EACI,gBAAA;EACA,aAAA;EACA,kBAAA;EACA,yBA3TO;EA4TP,cAhUI;EAiUJ,gBAAA;AA1EJ","sourcesContent":["// Global Variables\n////////////////////////////////////\n\n\n$primaryFont: 'Hind Siliguri', sans-serif;\n\n$white: #FEFEFE;\n$black: #111;\n$lightGray: #ebeaea;\n\n$brandOne: #A22E41;\n$brandTwo: #2EA28F;\n$brandThree: #77D8C8;\n\n\n// Base Styles\n////////////////////////////////////\n\nhtml{\n    height: 100%;\n}\n\nbody{\n    height: 100%;\n    background-color: $white;\n    color: $black;\n    font-family: $primaryFont;\n    line-height: 1.3;\n}\n\n#old-content,\n#content{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.wrap{\n    position: relative;\n    display: block;\n    margin: 0 auto;\n    width: min(84%, 1160px);\n\n\n    &.mini{\n        width: min(84%, 800px);\n    }\n\n}\n\n.center{\n    text-align: center;\n    justify-content: center;}\n\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3,\nh4,\n.h4{\n    margin: 10px 0px;\n    color: $brandTwo;\n    font-weight: 700;}\n\nh1,\n.h1{\n    font-size: 54px;}\n\nh2,\n.h2{\n    font-size: 38px;}\n\nh3,\n.h3{\n    font-size: 32px;}\n\nh4,\n.h4{\n    font-size: 26px;}\n\np{\n    margin: 24px 0px;\n    font-size: 18px;}\n\n\n\n// Header\n////////////////////////////////////\n\nheader{\n    position: relative;\n    z-index: 2;\n    padding: 15px 0px;\n\n    .wrap{\n        display: flex;\n        align-items: center;\n        gap: 50px;\n    }\n\n}\n\n.logo{\n    flex: 1;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 20px;\n    font-weight: 700;\n\n    div{\n        height: 36px;\n        width: 36px;\n        background-color: $brandOne;\n        border-radius: 100%;}\n\n}\n\n.nav-contain{\n    position: relative;\n    flex: 2;\n    display: flex;\n    justify-content: flex-end;\n}\n\n.mm-trigger{\n    position: relative;\n    display: none;\n    align-items: center;\n    justify-content: center;\n    height: 40px;\n    width: 40px;\n    background-color: initial;\n    border: initial;\n\n    &::before{\n        content: \"\\f0c9\";\n        font-family: 'Font Awesome 5 Free';\n        font-size: 24px;\n        font-weight: 900;\n    }\n\n    &.active{\n\n        &::before{\n            color: $brandOne;\n        }\n\n    }\n\n}\n\n.nav{\n    padding: 0px;\n    margin: 0px;\n    display: flex;\n    justify-content: flex-end;\n    gap: 35px;\n    list-style-type: none;\n\n    li{\n\n        a{\n            font-size: 18px;\n            font-weight: 600;\n            color: $black;\n            text-decoration: none;\n            text-transform: capitalize;\n            transition: all .2s;\n\n            &.active{\n                color: $brandOne;\n            }\n\n            &:hover,\n            &:active{\n                color: $brandOne;\n            }\n\n        }\n\n    }\n\n}\n\n\n@media all and (max-width: 768px) {\n\n    .logo{\n        flex: 2;\n    }\n\n    .nav-contain{\n        flex: 1;\n    }\n\n    .mm-trigger{\n        display: flex;\n    }\n\n    .nav{\n        display: none;\n        position: absolute;\n        top: 100%;\n        right: 0;\n        background-color: $white;\n        padding: 20px;\n        flex-direction: column;\n        gap: 6px;\n\n        &.active{\n            display: flex;\n        }\n\n        li{\n            text-align: right;\n        }\n\n    }\n\n}\n\n\n\n// Main Content\n////////////////////////////////////\n\n\n.hero{\n    position: relative;\n    display: flex;\n    align-items: center;\n    min-height: 400px;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    &::before{\n        content: \"\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: $brandTwo;\n        opacity: .75;}\n\n    .wrap{\n        padding: 40px 0px;}\n\n    p{\n        color: $white;\n\n        &:not(.h1){\n            font-size: 24px;\n            font-weight: 500;\n        }\n    }\n\n}\n\n\n.content-contain{\n    padding: 100px 0px;\n\n    >div:not(:last-of-type){\n        margin-bottom: 50px;\n    }\n\n}\n\n\n.menu-items{\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    row-gap: 40px;\n    column-gap: 50px;\n}\n\n.menu-item{\n\n    .header{\n        display: flex;\n        justify-content: space-between;\n        column-gap: 12px;\n        row-gap: 4px;\n        margin: 0px 0px 8px;\n    }\n\n    p{\n        margin: 0px;\n        &.title{\n            font-weight: 600;\n        }\n    }\n\n}\n\n\n@media all and (max-width: 991px) {\n\n    .menu-items{\n        grid-template-columns: repeat(2, 1fr);\n    }\n\n}\n\n@media all and (max-width: 599px) {\n\n    .menu-items{\n        grid-template-columns: 1fr;\n    }\n\n}\n\n\n// Footer\n////////////////////////////////////\n\nfooter{\n    margin-top: auto;\n    padding: 15px;\n    text-align: center;\n    background-color: $brandOne;\n    color: $white;\n    font-weight: 500;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLFlBQVksT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxZQUFZLG1JQUFtSSxvQkFBb0IsZUFBZSxzQkFBc0IsdUJBQXVCLHFCQUFxQix1QkFBdUIsbUVBQW1FLG1CQUFtQixHQUFHLFNBQVMsbUJBQW1CLCtCQUErQixvQkFBb0IsZ0NBQWdDLHVCQUF1QixHQUFH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Q0FBNkMsZ0ZBQTJCO0FBQ3hFOztBQUVBO0FBQ0EsNkNBQTZDLHNGQUE4Qjs7QUFFM0U7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRDs7QUFFQSwyRUFBNEI7O0FBRTVCOztBQUVBLDZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvc2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvc2Nzcy9zdHlsZXMuc2Nzcz9mM2M4Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvZ2VuZXJhbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvdGVtcGxhdGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL3RlbXBsYXRlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy90ZW1wbGF0ZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRkVGRTtcXG4gIGNvbG9yOiAjMTExO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIaW5kIFNpbGlndXJpXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxufVxcblxcbiNvbGQtY29udGVudCxcXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiBtaW4oODQlLCAxMTYwcHgpO1xcbn1cXG4ud3JhcC5taW5pIHtcXG4gIHdpZHRoOiBtaW4oODQlLCA4MDBweCk7XFxufVxcblxcbi5jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmgxLFxcbi5oMSxcXG5oMixcXG4uaDIsXFxuaDMsXFxuLmgzLFxcbmg0LFxcbi5oNCB7XFxuICBtYXJnaW46IDEwcHggMHB4O1xcbiAgY29sb3I6ICMyRUEyOEY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5oMSxcXG4uaDEge1xcbiAgZm9udC1zaXplOiA1NHB4O1xcbn1cXG5cXG5oMixcXG4uaDIge1xcbiAgZm9udC1zaXplOiAzOHB4O1xcbn1cXG5cXG5oMyxcXG4uaDMge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG5oNCxcXG4uaDQge1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMjRweCAwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAyO1xcbiAgcGFkZGluZzogMTVweCAwcHg7XFxufVxcbmhlYWRlciAud3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmxvZ28gZGl2IHtcXG4gIGhlaWdodDogMzZweDtcXG4gIHdpZHRoOiAzNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0EyMkU0MTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcbi5uYXYtY29udGFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5tbS10cmlnZ2VyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XFxuICBib3JkZXI6IGluaXRpYWw7XFxufVxcbi5tbS10cmlnZ2VyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM5XFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCI7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4ubW0tdHJpZ2dlci5hY3RpdmU6OmJlZm9yZSB7XFxuICBjb2xvcjogI0EyMkU0MTtcXG59XFxuXFxuLm5hdiB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZ2FwOiAzNXB4O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4ubmF2IGxpIGEge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiAjMTExO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuLm5hdiBsaSBhLmFjdGl2ZSB7XFxuICBjb2xvcjogI0EyMkU0MTtcXG59XFxuLm5hdiBsaSBhOmhvdmVyLCAubmF2IGxpIGE6YWN0aXZlIHtcXG4gIGNvbG9yOiAjQTIyRTQxO1xcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmxvZ28ge1xcbiAgICBmbGV4OiAyO1xcbiAgfVxcblxcbiAgLm5hdi1jb250YWluIHtcXG4gICAgZmxleDogMTtcXG4gIH1cXG5cXG4gIC5tbS10cmlnZ2VyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gIC5uYXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRUZFRkU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNnB4O1xcbiAgfVxcbiAgLm5hdi5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLm5hdiBsaSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgfVxcbn1cXG4uaGVybyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbi5oZXJvOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjMkVBMjhGO1xcbiAgb3BhY2l0eTogMC43NTtcXG59XFxuLmhlcm8gLndyYXAge1xcbiAgcGFkZGluZzogNDBweCAwcHg7XFxufVxcbi5oZXJvIHAge1xcbiAgY29sb3I6ICNGRUZFRkU7XFxufVxcbi5oZXJvIHA6bm90KC5oMSkge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbiB7XFxuICBwYWRkaW5nOiAxMDBweCAwcHg7XFxufVxcbi5jb250ZW50LWNvbnRhaW4gPiBkaXY6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5tZW51LWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgcm93LWdhcDogNDBweDtcXG4gIGNvbHVtbi1nYXA6IDUwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0gLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgY29sdW1uLWdhcDogMTJweDtcXG4gIHJvdy1nYXA6IDRweDtcXG4gIG1hcmdpbjogMHB4IDBweCA4cHg7XFxufVxcbi5tZW51LWl0ZW0gcCB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuLm1lbnUtaXRlbSBwLnRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAubWVudS1pdGVtcyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XFxuICAubWVudS1pdGVtcyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cXG5mb290ZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTIyRTQxO1xcbiAgY29sb3I6ICNGRUZFRkU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3Mvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBa0JBO0VBQ0ksWUFBQTtBQWpCSjs7QUFvQkE7RUFDSSxZQUFBO0VBQ0EseUJBbEJJO0VBbUJKLFdBbEJJO0VBbUJKLHdDQXRCVTtFQXVCVixnQkFBQTtBQWpCSjs7QUFvQkE7O0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQWpCSjs7QUFvQkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFqQko7QUFvQkk7RUFDSSxzQkFBQTtBQWxCUjs7QUF1QkE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0FBcEJKOztBQXNCQTs7Ozs7Ozs7RUFRSSxnQkFBQTtFQUNBLGNBcERPO0VBcURQLGdCQUFBO0FBbkJKOztBQXFCQTs7RUFFSSxlQUFBO0FBbEJKOztBQW9CQTs7RUFFSSxlQUFBO0FBakJKOztBQW1CQTs7RUFFSSxlQUFBO0FBaEJKOztBQWtCQTs7RUFFSSxlQUFBO0FBZko7O0FBaUJBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBZEo7O0FBcUJBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFsQko7QUFvQkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBbEJSOztBQXVCQTtFQUNJLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBcEJKO0FBc0JJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkF6R0c7RUEwR0gsbUJBQUE7QUFwQlI7O0FBd0JBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBckJKOztBQXdCQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQXJCSjtBQXVCSTtFQUNJLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFyQlI7QUEwQlE7RUFDSSxjQXpJRDtBQWlIWDs7QUErQkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQTVCSjtBQWdDUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBaEtKO0VBaUtJLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtBQTlCWjtBQWdDWTtFQUNJLGNBbktMO0FBcUlYO0FBaUNZO0VBRUksY0F4S0w7QUF3SVg7O0FBMENBO0VBRUk7SUFDSSxPQUFBO0VBeENOOztFQTJDRTtJQUNJLE9BQUE7RUF4Q047O0VBMkNFO0lBQ0ksYUFBQTtFQXhDTjs7RUEyQ0U7SUFDSSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLHlCQXpNQTtJQTBNQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxRQUFBO0VBeENOO0VBMENNO0lBQ0ksYUFBQTtFQXhDVjtFQTJDTTtJQUNJLGlCQUFBO0VBekNWO0FBQ0Y7QUFxREE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBbkRKO0FBcURJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQTNPRztFQTRPSCxhQUFBO0FBbkRSO0FBcURJO0VBQ0ksaUJBQUE7QUFuRFI7QUFxREk7RUFDSSxjQXZQQTtBQW9NUjtBQXFEUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQW5EWjs7QUEwREE7RUFDSSxrQkFBQTtBQXZESjtBQXlESTtFQUNJLG1CQUFBO0FBdkRSOztBQTZEQTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQTFESjs7QUErREk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTVEUjtBQStESTtFQUNJLFdBQUE7QUE3RFI7QUE4RFE7RUFDSSxnQkFBQTtBQTVEWjs7QUFtRUE7RUFFSTtJQUNJLHFDQUFBO0VBakVOO0FBQ0Y7QUFxRUE7RUFFSTtJQUNJLDBCQUFBO0VBcEVOO0FBQ0Y7QUE0RUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQTNUTztFQTRUUCxjQWhVSTtFQWlVSixnQkFBQTtBQTFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyBHbG9iYWwgVmFyaWFibGVzXFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXFxuXFxuXFxuJHByaW1hcnlGb250OiAnSGluZCBTaWxpZ3VyaScsIHNhbnMtc2VyaWY7XFxuXFxuJHdoaXRlOiAjRkVGRUZFO1xcbiRibGFjazogIzExMTtcXG4kbGlnaHRHcmF5OiAjZWJlYWVhO1xcblxcbiRicmFuZE9uZTogI0EyMkU0MTtcXG4kYnJhbmRUd286ICMyRUEyOEY7XFxuJGJyYW5kVGhyZWU6ICM3N0Q4Qzg7XFxuXFxuXFxuLy8gQmFzZSBTdHlsZXNcXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cXG5cXG5odG1se1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgICBjb2xvcjogJGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogJHByaW1hcnlGb250O1xcbiAgICBsaW5lLWhlaWdodDogMS4zO1xcbn1cXG5cXG4jb2xkLWNvbnRlbnQsXFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLndyYXB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogbWluKDg0JSwgMTE2MHB4KTtcXG5cXG5cXG4gICAgJi5taW5pe1xcbiAgICAgICAgd2lkdGg6IG1pbig4NCUsIDgwMHB4KTtcXG4gICAgfVxcblxcbn1cXG5cXG4uY2VudGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO31cXG5cXG5oMSxcXG4uaDEsXFxuaDIsXFxuLmgyLFxcbmgzLFxcbi5oMyxcXG5oNCxcXG4uaDR7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxuICAgIGNvbG9yOiAkYnJhbmRUd287XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7fVxcblxcbmgxLFxcbi5oMXtcXG4gICAgZm9udC1zaXplOiA1NHB4O31cXG5cXG5oMixcXG4uaDJ7XFxuICAgIGZvbnQtc2l6ZTogMzhweDt9XFxuXFxuaDMsXFxuLmgze1xcbiAgICBmb250LXNpemU6IDMycHg7fVxcblxcbmg0LFxcbi5oNHtcXG4gICAgZm9udC1zaXplOiAyNnB4O31cXG5cXG5we1xcbiAgICBtYXJnaW46IDI0cHggMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7fVxcblxcblxcblxcbi8vIEhlYWRlclxcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xcblxcbmhlYWRlcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcXG5cXG4gICAgLndyYXB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogNTBweDtcXG4gICAgfVxcblxcbn1cXG5cXG4ubG9nb3tcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFxuICAgIGRpdntcXG4gICAgICAgIGhlaWdodDogMzZweDtcXG4gICAgICAgIHdpZHRoOiAzNnB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJyYW5kT25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTt9XFxuXFxufVxcblxcbi5uYXYtY29udGFpbntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbGV4OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubW0tdHJpZ2dlcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG4gICAgYm9yZGVyOiBpbml0aWFsO1xcblxcbiAgICAmOjpiZWZvcmV7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcXGYwYzlcXFwiO1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJztcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIH1cXG5cXG4gICAgJi5hY3RpdmV7XFxuXFxuICAgICAgICAmOjpiZWZvcmV7XFxuICAgICAgICAgICAgY29sb3I6ICRicmFuZE9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgfVxcblxcbn1cXG5cXG4ubmF2e1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDM1cHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG5cXG4gICAgbGl7XFxuXFxuICAgICAgICBhe1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxuXFxuICAgICAgICAgICAgJi5hY3RpdmV7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYnJhbmRPbmU7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICY6aG92ZXIsXFxuICAgICAgICAgICAgJjphY3RpdmV7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYnJhbmRPbmU7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgfVxcblxcbiAgICB9XFxuXFxufVxcblxcblxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuXFxuICAgIC5sb2dve1xcbiAgICAgICAgZmxleDogMjtcXG4gICAgfVxcblxcbiAgICAubmF2LWNvbnRhaW57XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICB9XFxuXFxuICAgIC5tbS10cmlnZ2Vye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAubmF2e1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMTAwJTtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDZweDtcXG5cXG4gICAgICAgICYuYWN0aXZle1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBsaXtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgICAgIH1cXG5cXG4gICAgfVxcblxcbn1cXG5cXG5cXG5cXG4vLyBNYWluIENvbnRlbnRcXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cXG5cXG5cXG4uaGVyb3tcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgICAmOjpiZWZvcmV7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQ6ICRicmFuZFR3bztcXG4gICAgICAgIG9wYWNpdHk6IC43NTt9XFxuXFxuICAgIC53cmFwe1xcbiAgICAgICAgcGFkZGluZzogNDBweCAwcHg7fVxcblxcbiAgICBwe1xcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcXG5cXG4gICAgICAgICY6bm90KC5oMSl7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG59XFxuXFxuXFxuLmNvbnRlbnQtY29udGFpbntcXG4gICAgcGFkZGluZzogMTAwcHggMHB4O1xcblxcbiAgICA+ZGl2Om5vdCg6bGFzdC1vZi10eXBlKXtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICAgIH1cXG5cXG59XFxuXFxuXFxuLm1lbnUtaXRlbXN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIHJvdy1nYXA6IDQwcHg7XFxuICAgIGNvbHVtbi1nYXA6IDUwcHg7XFxufVxcblxcbi5tZW51LWl0ZW17XFxuXFxuICAgIC5oZWFkZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgY29sdW1uLWdhcDogMTJweDtcXG4gICAgICAgIHJvdy1nYXA6IDRweDtcXG4gICAgICAgIG1hcmdpbjogMHB4IDBweCA4cHg7XFxuICAgIH1cXG5cXG4gICAgcHtcXG4gICAgICAgIG1hcmdpbjogMHB4O1xcbiAgICAgICAgJi50aXRsZXtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxufVxcblxcblxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuXFxuICAgIC5tZW51LWl0ZW1ze1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgfVxcblxcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xcblxcbiAgICAubWVudS1pdGVtc3tcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxuXFxufVxcblxcblxcbi8vIEZvb3Rlclxcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xcblxcbmZvb3RlcntcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJhbmRPbmU7XFxuICAgIGNvbG9yOiAkd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2VuZXJhbEZ1bmN0aW9ucyB9IGZyb20gXCIuL2dlbmVyYWxcIjtcblxuZXhwb3J0IGNvbnN0IGZvb3RlckZ1bmN0aW9ucyA9ICgoKSA9PiB7XG5cbiAgICAvLyBQcml2YXRlIHZhcmlhYmxlcy9mdW5jdGlvbnNcblxuXG4gICAgLy8gUHVibGljIHZhcmlhYmxlcy9mdW5jdGlvbnNcblxuICAgIGNvbnN0IGJ1aWxkRm9vdGVyID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgd3JhcCA9IGdlbmVyYWxGdW5jdGlvbnMuY3JlYXRlV3JhcCgpO1xuXG4gICAgICAgIHdyYXAuaW5uZXJIVE1MID0gJyZjb3B5OyBCcnVuY2ggQm93bCc7XG5cbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKHdyYXApO1xuXG4gICAgICAgIHJldHVybiBmb290ZXI7XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBidWlsZEZvb3RlclxuICAgIH1cblxufSkoKTsiLCJleHBvcnQgY29uc3QgZ2VuZXJhbEZ1bmN0aW9ucyA9ICgoKSA9PiB7XG5cbiAgICAvLyBQcml2YXRlIHZhcmlhYmxlcy9mdW5jdGlvbnNcblxuXG5cbiAgICAvLyBQdWJsaWMgdmFyaWFibGVzL2Z1bmN0aW9uc1xuXG5cbiAgICBjb25zdCBjbGVhckNvbnRlbnQgPSAocGFyZW50KSA9PiB7XG5cbiAgICAgICAgd2hpbGUoIHBhcmVudC5maXJzdENoaWxkICl7XG5cbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZCggcGFyZW50LmZpcnN0Q2hpbGQgKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIGNvbnN0IGNyZWF0ZUNvbnRlbnRTZWN0aW9uID0gKCB0aXRsZSwgLi4uZGVzY3JpcHRpb24gKSA9PiB7XG5cbiAgICAgICAgY29uc3QgY29udGVudFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGVudFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29udGVudC1zZWN0aW9uJywgJ3dyYXAnLCAnbWluaScpO1xuXG4gICAgICAgIGNvbnN0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHNlY3Rpb25UaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbnRlcicpO1xuICAgICAgICBzZWN0aW9uVGl0bGUuaW5uZXJUZXh0ID0gdGl0bGU7XG5cbiAgICAgICAgY29udGVudFNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvblRpdGxlKTtcbiAgICAgICAgXG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25BcnJheSA9IGRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGRlc2NyaXB0aW9uQXJyYXkubGVuZ3RoOyBpKyspe1xuXG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBzZWN0aW9uRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGVzY3JpcHRpb25BcnJheVtpXTtcblxuICAgICAgICAgICAgY29udGVudFNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvbkRlc2NyaXB0aW9uKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnRlbnRTZWN0aW9uO1xuXG4gICAgfVxuXG5cbiAgICBjb25zdCBjcmVhdGVIZXJvID0gKCB0aXRsZSwgZGVzY3JpcHRpb24sIGltYWdlKSA9PiB7XG5cbiAgICAgICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZXJvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVybycpO1xuICAgICAgICBoZXJvLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWFnZX0pYDtcblxuICAgICAgICBjb25zdCB3cmFwID0gY3JlYXRlV3JhcCgpO1xuXG4gICAgICAgIGNvbnN0IGhlcm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaGVyb1RpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaDEnKTtcbiAgICAgICAgaGVyb1RpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuXG4gICAgICAgIGNvbnN0IGhlcm9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaGVyb0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uO1xuXG4gICAgICAgIHdyYXAuYXBwZW5kQ2hpbGQoaGVyb1RpdGxlKTtcbiAgICAgICAgd3JhcC5hcHBlbmRDaGlsZChoZXJvRGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGhlcm8uYXBwZW5kQ2hpbGQod3JhcCk7XG5cbiAgICAgICAgcmV0dXJuIGhlcm87XG5cbiAgICB9XG5cblxuICAgIGNvbnN0IGNyZWF0ZU1vZHVsZSA9ICh0aXRsZSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb2R1bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtb2R1bGUnKTtcbiAgICAgICAgbW9kdWxlLnNldEF0dHJpYnV0ZSgnZGF0YS1tb2R1bGUnLCB0aXRsZSk7XG5cbiAgICAgICAgcmV0dXJuIG1vZHVsZTtcblxuICAgIH1cblxuXG4gICAgY29uc3QgY3JlYXRlV3JhcCA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd3cmFwJyk7XG5cbiAgICAgICAgcmV0dXJuIHdyYXA7XG5cbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNsZWFyQ29udGVudCxcbiAgICAgICAgY3JlYXRlQ29udGVudFNlY3Rpb24sXG4gICAgICAgIGNyZWF0ZUhlcm8sXG4gICAgICAgIGNyZWF0ZU1vZHVsZSxcbiAgICAgICAgY3JlYXRlV3JhcFxuICAgIH1cblxuXG59KSgpOyIsImltcG9ydCB7IGdlbmVyYWxGdW5jdGlvbnMgfSBmcm9tIFwiLi9nZW5lcmFsXCI7XG5cbmV4cG9ydCBjb25zdCBoZWFkZXJGdW5jdGlvbnMgPSAoKCkgPT4ge1xuXG4gICAgLy8gRmFjdG9yaWVzXG5cbiAgICBjb25zdCBfbmV3TmF2TGluayA9ICggbmFtZSApID0+IHtcblxuICAgICAgICBjb25zdCBnZXROYW1lICA9ICgpID0+IG5hbWU7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldE5hbWVcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSB2YXJpYWJsZXMvZnVuY3Rpb25zXG5cbiAgICBjb25zdCBfbmF2TGlua3MgPSBbXTtcblxuICAgIGNvbnN0IF9jcmVhdGVMb2dvID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb2dvJyk7XG4gICAgICAgIGxvZ28uc2V0QXR0cmlidXRlKCdjbGFzcycsICdsb2dvJyk7XG5cbiAgICAgICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgbG9nb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBsb2dvVGl0bGUuaW5uZXJUZXh0ID0gJ0JydW5jaCBCb3dsJztcblxuICAgICAgICBsb2dvLmFwcGVuZENoaWxkKGNpcmNsZSk7XG4gICAgICAgIGxvZ28uYXBwZW5kQ2hpbGQobG9nb1RpdGxlKTtcblxuICAgICAgICByZXR1cm4gbG9nbztcblxuICAgIH0gXG5cbiAgICBjb25zdCBfY3JlYXRlTmF2ID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IG5hdkNvbnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmF2Q29udGFpbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1jb250YWluJyk7XG5cbiAgICAgICAgY29uc3QgbW1UcmlnZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG1tVHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIG1tVHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21tLXRyaWdnZXInKTtcblxuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBuYXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYnKTtcblxuICAgICAgICBjb25zdCBob21lTGluayA9IF9uZXdOYXZMaW5rKCdob21lJyk7XG4gICAgICAgIF9uYXZMaW5rcy5wdXNoKGhvbWVMaW5rKTtcblxuICAgICAgICBjb25zdCBtZW51TGluayA9IF9uZXdOYXZMaW5rKCdtZW51Jyk7XG4gICAgICAgIF9uYXZMaW5rcy5wdXNoKG1lbnVMaW5rKTtcblxuICAgICAgICBjb25zdCBjb250YWN0TGluayA9IF9uZXdOYXZMaW5rKCdjb250YWN0Jyk7XG4gICAgICAgIF9uYXZMaW5rcy5wdXNoKGNvbnRhY3RMaW5rKTtcblxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX25hdkxpbmtzLmxlbmd0aDsgaSsrKXtcblxuICAgICAgICAgICAgY29uc3QgbmF2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5hdkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICAgICAgICAgIGlmKCBpID09PSAwICl7XG4gICAgICAgICAgICAgICAgbmF2TGluay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYXZMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyk7XG4gICAgICAgICAgICBuYXZMaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCBfbmF2TGlua3NbaV0uZ2V0TmFtZSgpICk7XG5cbiAgICAgICAgICAgIG5hdkxpbmsuaW5uZXJUZXh0ID0gX25hdkxpbmtzW2ldLmdldE5hbWUoKTtcblxuICAgICAgICAgICAgbmF2SXRlbS5hcHBlbmRDaGlsZChuYXZMaW5rKTtcblxuICAgICAgICAgICAgbmF2LmFwcGVuZENoaWxkKG5hdkl0ZW0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBuYXZDb250YWluLmFwcGVuZENoaWxkKG1tVHJpZ2dlcik7XG4gICAgICAgIG5hdkNvbnRhaW4uYXBwZW5kQ2hpbGQobmF2KTtcblxuXG4gICAgICAgIHJldHVybiBuYXZDb250YWluO1xuXG4gICAgfVxuXG5cbiAgICAvLyBQdWJsaWMgdmFyaWFibGVzL2Z1bmN0aW9uc1xuXG4gICAgY29uc3QgYnVpbGRIZWFkZXIgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgICAgICAgY29uc3Qgd3JhcCA9IGdlbmVyYWxGdW5jdGlvbnMuY3JlYXRlV3JhcCgpO1xuXG4gICAgICAgIHdyYXAuYXBwZW5kQ2hpbGQoIF9jcmVhdGVMb2dvKCkgKTtcblxuICAgICAgICB3cmFwLmFwcGVuZENoaWxkKCBfY3JlYXRlTmF2KCkgKTtcblxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQod3JhcCk7XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcblxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJ1aWxkSGVhZGVyXG4gICAgfVxuXG59KSgpOyIsImltcG9ydCB7IGhlYWRlckZ1bmN0aW9ucyB9IGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IHsgZm9vdGVyRnVuY3Rpb25zIH0gZnJvbSBcIi4vZm9vdGVyXCI7XG5cbmltcG9ydCB7IGhvbWVGdW5jdGlvbnMgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvaG9tZVwiO1xuXG5leHBvcnQgY29uc3QgcGFnZUxvYWQgPSAoKCkgPT4ge1xuXG4gICAgLy8gUHJpdmF0ZSB2YXJpYWJsZXMvZnVuY3Rpb25zXG4gICAgY29uc3QgX2NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgY29uc3QgX2NyZWF0ZU1haW5Db250ZW50ID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1haW5Db250ZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWFpbi1jb250ZW50Jyk7XG5cbiAgICAgICAgcmV0dXJuIG1haW5Db250ZW50O1xuXG4gICAgfVxuXG4gICAgLy8gUHVibGljIHZhcmlhYmxlcy9mdW5jdGlvbnNcblxuICAgIGNvbnN0IGJ1aWxkSW5pdGlhbENvbnRlbnQgPSAoKSA9PiB7XG5cbiAgICAgICAgX2NvbnRlbnQuYXBwZW5kQ2hpbGQoIGhlYWRlckZ1bmN0aW9ucy5idWlsZEhlYWRlcigpICk7XG5cbiAgICAgICAgY29uc3QgcGFnZU1haW5Db250ZW50ID0gX2NyZWF0ZU1haW5Db250ZW50KCk7XG4gICAgICAgIHBhZ2VNYWluQ29udGVudC5hcHBlbmRDaGlsZCggaG9tZUZ1bmN0aW9ucy5idWlsZFRlbXBsYXRlKCkgKTtcblxuICAgICAgICBfY29udGVudC5hcHBlbmRDaGlsZChwYWdlTWFpbkNvbnRlbnQpO1xuXG4gICAgICAgIF9jb250ZW50LmFwcGVuZENoaWxkKCBmb290ZXJGdW5jdGlvbnMuYnVpbGRGb290ZXIoKSApO1xuXG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBidWlsZEluaXRpYWxDb250ZW50XG4gICAgfVxuXG5cbn0pKCk7IiwiaW1wb3J0IHsgZ2VuZXJhbEZ1bmN0aW9ucyB9IGZyb20gXCIuLi9nZW5lcmFsXCI7XG5pbXBvcnQgY29udGFjdEhlcm8gZnJvbSAnLi4vLi4vYXNzZXRzL2ltZy9jb250YWN0LWhlcm8uanBnJztcblxuZXhwb3J0IGNvbnN0IGNvbnRhY3RGdW5jdGlvbnMgPSAoKCkgPT4ge1xuXG4gICAgLy8gUHJpdmF0ZSB2YXJpYWJsZXMvZnVuY3Rpb25zXG5cbiAgICAvLyBQdWJsaWMgdmFyaWFibGVzL2Z1bmN0aW9uc1xuXG4gICAgY29uc3QgYnVpbGRUZW1wbGF0ZSA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCBtb2R1bGUgPSBnZW5lcmFsRnVuY3Rpb25zLmNyZWF0ZU1vZHVsZSgnbWVudScpO1xuICAgICAgICBcbiAgICAgICAgbW9kdWxlLmFwcGVuZENoaWxkKCBnZW5lcmFsRnVuY3Rpb25zLmNyZWF0ZUhlcm8oJ0NvbnRhY3QnLCAnRmVlbCBmcmVlIHRvIHJlYWNoIG91dCBhbnkgdGltZScsIGNvbnRhY3RIZXJvKSApO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnRDb250YWluLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudC1jb250YWluJyk7XG5cbiAgICAgICAgY29udGVudENvbnRhaW4uYXBwZW5kQ2hpbGQoIFxuICAgICAgICAgICAgZ2VuZXJhbEZ1bmN0aW9ucy5jcmVhdGVDb250ZW50U2VjdGlvbihcbiAgICAgICAgICAgICAgICBcIldlJ2QgbG92ZSB0byBoZWFyIGZyb20geW91XCIsIFxuICAgICAgICAgICAgICAgIFwiSGVyZSBhcmUgQnJ1bmNoIEJvd2wgd2UncmUgYWx3YXlzIGV4Y2l0ZWQgdG8gaGVhciBmcm9tIG91ciBjdXN0b21lcnMuIFlvdSBjYW4gcmVhY2ggdXMgYXQgaW5mb0BicnVuY2hib3dsLmNvbSBvciBqdXN0IGNhbGwgdXMgYXQgKDIzMikgMjIyLTQ0NDQuXCIsXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgbW9kdWxlLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluKTtcblxuICAgICAgICByZXR1cm4gbW9kdWxlO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYnVpbGRUZW1wbGF0ZVxuICAgIH1cblxufSkoKTsiLCJpbXBvcnQgeyBnZW5lcmFsRnVuY3Rpb25zIH0gZnJvbSBcIi4uL2dlbmVyYWxcIjtcbmltcG9ydCBob21lSGVybyBmcm9tICcuLi8uLi9hc3NldHMvaW1nL2JydW5jaC1ob21lLmpwZyc7XG5cbmV4cG9ydCBjb25zdCBob21lRnVuY3Rpb25zID0gKCgpID0+IHtcblxuICAgIC8vIFByaXZhdGUgdmFyaWFibGVzL2Z1bmN0aW9uc1xuXG4gICAgLy8gUHVibGljIHZhcmlhYmxlcy9mdW5jdGlvbnNcblxuICAgIGNvbnN0IGJ1aWxkVGVtcGxhdGUgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gZ2VuZXJhbEZ1bmN0aW9ucy5jcmVhdGVNb2R1bGUoJ2hvbWUnKTtcbiAgICAgICAgXG4gICAgICAgIG1vZHVsZS5hcHBlbmRDaGlsZCggZ2VuZXJhbEZ1bmN0aW9ucy5jcmVhdGVIZXJvKCdCcnVuY2ggQm93bCcsICdTYXRpc2Z5IHlvdXIgYnJlYWtmYXN0IGNyYXZpbmdzIHdpdGggZGVsaWNpb3VzIGJydW5jaCBib3dscycsIGhvbWVIZXJvKSApO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnRDb250YWluLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudC1jb250YWluJyk7XG5cbiAgICAgICAgY29udGVudENvbnRhaW4uYXBwZW5kQ2hpbGQoIFxuICAgICAgICAgICAgZ2VuZXJhbEZ1bmN0aW9ucy5jcmVhdGVDb250ZW50U2VjdGlvbihcbiAgICAgICAgICAgICAgICAnV2VsY29tZSB0byBCcnVuY2ggQm93bCcsIFxuICAgICAgICAgICAgICAgIFwiV2VsY29tZSB0byBCcnVuY2ggQm93bCwgdGhlIGhvdHRlc3QgbmV3IGJydW5jaCBzcG90IGluIHRoZSBlbnRpcmUgY291bnRyeS4gV2UnbGwgc2VydmUgdXAgYW55IGZ1biBicmVha3lmYXN0IGFuZCBsdW5jaCBzdHlsZSBmb29kIHRoYXQgeW91IGNhbiBpbWFnaW5lLiBPdXIgY3VsaW5hcnkgYXJ0aXN0cyBoYXZlIHdvcmtlZCBoYXJkIHRvIHBvbGlzaCB0aGVpciBza2lsbHMgc28gdGhhdCBvdXIgY3VzdG9tZXJzIG5ldmVyIGxlYXZlIHVuc2F0aXNmaWVkLiBDaGVjayBvdXQgb3VyIG1lbnUgdG8gc2VlIGV2ZXJ5dGhpbmcgd2Ugb2ZmZXIuXCIsXG4gICAgICAgICAgICAgICAgXCJXZSBob3BlIHlvdSBzdG9wIGJ5IHNvb24hXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgICBtb2R1bGUuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW4pO1xuXG5cbiAgICAgICAgcmV0dXJuIG1vZHVsZTtcblxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJ1aWxkVGVtcGxhdGVcbiAgICB9XG5cbn0pKCk7IiwiaW1wb3J0IHsgZ2VuZXJhbEZ1bmN0aW9ucyB9IGZyb20gXCIuLi9nZW5lcmFsXCI7XG5pbXBvcnQgbWVudUhlcm8gZnJvbSAnLi4vLi4vYXNzZXRzL2ltZy9tZW51LWhlcm8uanBnJztcbmltcG9ydCBtZW51RGF0YSBmcm9tICcuLi8uLi9hc3NldHMvZGF0YS9tZW51LWRhdGEuanNvbic7XG5cbmV4cG9ydCBjb25zdCBtZW51RnVuY3Rpb25zID0gKCgpID0+IHtcblxuICAgIC8vIFByaXZhdGUgdmFyaWFibGVzL2Z1bmN0aW9uc1xuXG4gICAgY29uc3QgX2J1aWxkTWVudSA9ICggYXJyYXkgKSA9PiB7XG5cbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoICdtZW51LWl0ZW1zJywgJ3dyYXAnICk7XG5cbiAgICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyApe1xuXG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbWVudUl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcblxuICAgICAgICAgICAgY29uc3QgaXRlbUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaXRlbUhlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYWRlcicpO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBpdGVtVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZScpO1xuICAgICAgICAgICAgaXRlbVRpdGxlLmlubmVyVGV4dCA9IGFycmF5W2ldLm5hbWU7XG5cbiAgICAgICAgICAgIGl0ZW1IZWFkZXIuYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcblxuICAgICAgICAgICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgaXRlbVByaWNlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpY2UnKTtcbiAgICAgICAgICAgIGl0ZW1QcmljZS5pbm5lclRleHQgPSBcIiRcIiArIGFycmF5W2ldLnByaWNlO1xuXG4gICAgICAgICAgICBpdGVtSGVhZGVyLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBpdGVtRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gYXJyYXlbaV0uZGVzY3JpcHRpb247XG5cbiAgICAgICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1IZWFkZXIpO1xuICAgICAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcblxuICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZW51O1xuXG4gICAgfVxuXG4gICAgLy8gUHVibGljIHZhcmlhYmxlcy9mdW5jdGlvbnNcblxuICAgIGNvbnN0IGJ1aWxkVGVtcGxhdGUgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gZ2VuZXJhbEZ1bmN0aW9ucy5jcmVhdGVNb2R1bGUoJ21lbnUnKTtcbiAgICAgICAgXG4gICAgICAgIG1vZHVsZS5hcHBlbmRDaGlsZCggZ2VuZXJhbEZ1bmN0aW9ucy5jcmVhdGVIZXJvKCdNZW51JywgJ091ciBjaG9pY2VzIHdpbGwgYWx3YXlzIGxlYXZlIHlvdSBzYXRpc2ZpZWQnLCBtZW51SGVybykgKTtcblxuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50Q29udGFpbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnQtY29udGFpbicpO1xuXG4gICAgICAgIGNvbnRlbnRDb250YWluLmFwcGVuZENoaWxkKCBcbiAgICAgICAgICAgIGdlbmVyYWxGdW5jdGlvbnMuY3JlYXRlQ29udGVudFNlY3Rpb24oXG4gICAgICAgICAgICAgICAgJ091ciBPcHRpb25zJywgXG4gICAgICAgICAgICAgICAgXCJCcnVuY2ggQm93bCBvZmZlcnMgYSB2YXJpZXR5IG9mIGN1bGluYXJ5IG9wdGlvbnMsIHBsZWFzZSBsZXQgdXMga25vdyBpZiB0aGVyZSBhcmUgYW55IHNwZWNpYWwgYWxsZXJnZW5zIGJlZm9yZSBtYWtpbmcgeW91ciBvcmRlci5cIiAgICAgICAgICAgIFxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnRlbnRDb250YWluLmFwcGVuZENoaWxkKCBfYnVpbGRNZW51KG1lbnVEYXRhKSApO1xuXG4gICAgICAgIG1vZHVsZS5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbik7XG5cbiAgICAgICAgcmV0dXJuIG1vZHVsZTtcblxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJ1aWxkVGVtcGxhdGVcbiAgICB9XG5cbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9hc3NldHMvc2Nzcy9zdHlsZXMuc2Nzcyc7XG5cbmltcG9ydCB7IHBhZ2VMb2FkIH0gZnJvbSBcIi4vbW9kdWxlcy9wYWdlTG9hZFwiO1xuaW1wb3J0IHsgZ2VuZXJhbEZ1bmN0aW9ucyB9IGZyb20gXCIuL21vZHVsZXMvZ2VuZXJhbFwiO1xuaW1wb3J0IHsgaG9tZUZ1bmN0aW9ucyB9IGZyb20gXCIuL21vZHVsZXMvdGVtcGxhdGVzL2hvbWVcIjtcbmltcG9ydCB7IG1lbnVGdW5jdGlvbnMgfSBmcm9tIFwiLi9tb2R1bGVzL3RlbXBsYXRlcy9tZW51XCI7XG5pbXBvcnQgeyBjb250YWN0RnVuY3Rpb25zIH0gZnJvbSBcIi4vbW9kdWxlcy90ZW1wbGF0ZXMvY29udGFjdFwiO1xuXG5jb25zdCBzd2l0Y2hUYWJzID0gKCgpID0+IHtcblxuICAgIC8vIFByaXZhdGUgdmFyaWFibGVzL2Z1bmN0aW9uc1xuXG4gICAgY29uc3QgX2NoYW5nZVRhYiA9IChlKSA9PiB7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IGxpbmtUYXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdiBhJyk7XG4gICAgICAgIGNvbnN0IHBhZ2VNYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcblxuICAgICAgICBuYXZMaW5rcy5mb3JFYWNoKCAobmF2TGluaykgPT4ge1xuICAgICAgICAgICAgbmF2TGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FjdGl2ZScpO1xuXG5cbiAgICAgICAgZ2VuZXJhbEZ1bmN0aW9ucy5jbGVhckNvbnRlbnQocGFnZU1haW5Db250ZW50KTtcblxuICAgICAgICBzd2l0Y2gobGlua1RhcmdldCkge1xuXG4gICAgICAgICAgICBjYXNlICdob21lJzpcbiAgICAgICAgICAgICAgICBwYWdlTWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoIGhvbWVGdW5jdGlvbnMuYnVpbGRUZW1wbGF0ZSgpICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ21lbnUnOlxuICAgICAgICAgICAgICAgIHBhZ2VNYWluQ29udGVudC5hcHBlbmRDaGlsZCggbWVudUZ1bmN0aW9ucy5idWlsZFRlbXBsYXRlKCkgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnY29udGFjdCc6XG4gICAgICAgICAgICAgICAgcGFnZU1haW5Db250ZW50LmFwcGVuZENoaWxkKCBjb250YWN0RnVuY3Rpb25zLmJ1aWxkVGVtcGxhdGUoKSApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgdmFyaWFibGVzL2Z1bmN0aW9uc1xuXG4gICAgY29uc3QgYnVpbGRMaXN0ZW5lcnMgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2IGEnKTtcblxuICAgICAgICBuYXZMaW5rcy5mb3JFYWNoKCAobmF2TGluaykgPT4ge1xuXG4gICAgICAgICAgICBuYXZMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2NoYW5nZVRhYiApO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYnVpbGRMaXN0ZW5lcnNcbiAgICB9XG5cbn0pKCk7XG5cblxuY29uc3QgdHJpZ2dlck1lbnUgPSAoKCkgPT4ge1xuXG4gICAgLy8gUHJpdmF0ZSB2YXJpYWJsZXMvZnVuY3Rpb25zXG5cbiAgICBjb25zdCBfdHJpZ2dlciA9IChlKSA9PiB7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKTtcbiAgICAgICAgY29uc3QgdHJpZ2dlciA9IGUuY3VycmVudFRhcmdldDtcblxuICAgICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIHRyaWdnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gXG4gICAgfVxuXG4gICAgLy8gUHVibGljIHZhcmlhYmxlcy9mdW5jdGlvbnNcblxuICAgIGNvbnN0IGJ1aWxkTGlzdGVuZXJzID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IG1tVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tbS10cmlnZ2VyJyk7XG5cbiAgICAgICAgbW1UcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RyaWdnZXIgKTtcblxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJ1aWxkTGlzdGVuZXJzXG4gICAgfVxuXG59KSgpO1xuXG5cbi8vIFNpdGUgSW5pdGlhbGl6YXRpb25cblxucGFnZUxvYWQuYnVpbGRJbml0aWFsQ29udGVudCgpO1xuXG5zd2l0Y2hUYWJzLmJ1aWxkTGlzdGVuZXJzKCk7XG5cbnRyaWdnZXJNZW51LmJ1aWxkTGlzdGVuZXJzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9