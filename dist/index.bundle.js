/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html{\n    height: 100vh;\n    width: 100vw;\n    padding:0\n}\nbody{\n    position: relative;\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-rows:  auto 100px;\n    padding: 0;\n    margin:0;\n    font-family: Arial, Helvetica, sans-serif;\n\n}\n\nheader{\n    display: grid;\n    position: fixed;\n    z-index: 100;\n\n    grid-template-columns: 2fr auto;\n\n    border-bottom: 1px solid black;\n    width: 100%;\n    height: 100px;\n    background-color: gray;\n}\n    #left-header{\n        display: flex;\n        align-items: center;\n    }\n        #header-logo-con{\n            border: 1px solid black;\n            min-width: 100px;\n            height: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n        #header-title{\n            display: none;\n            margin: 0;\n            margin-left: 1em;\n        }\n    \n    #right-header{\n        position: relative;\n        display: flex;\n        justify-content: flex-end;\n        \n    }\n        #header-add-con{\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            /* border: 1px solid black; */\n            min-width: 150px;\n            height: 100%;\n        }\n            #header-add{\n                /* border: 1px solid black; */\n                font-size: 4em;\n                cursor: default;\n            }\n\n    #drop-down-con{\n        position: absolute;\n        background-color: gray;\n        top: 100px;\n        border: 1px solid black;\n        height: auto;\n        width: 100%;\n    }\n        #drop-down-con>ul{\n            list-style-type: none;\n            text-align: center;\n            padding-left: 0;\n            margin: 0;\n            \n        }\n            .dropdown-li{\n                padding-top: 1em;\n                padding-bottom: 1em;\n            }\n            .dropdown-li:hover{\n                background-color: darkgray;\n            }\n            .dropdown-anchor{\n                font-size: 1.2rem;\n                font-weight: bold;\n                color: black;\n                text-decoration: none;\n                margin-bottom: 1em;\n            }\n        #new-task-con{\n            display: none;\n        }\n\n    .anchor-btn{\n        font-weight: bolder;\n        padding: 1em;\n    }\n    .anchor-btn:hover{\n        color: white;\n    }\n\n@media (min-width: 540px){\n    #header-title{\n        display: grid;\n    }\n}\n\n\nmain{\n    border: 1px solid black;\n    margin-top: 100px;\n}\n#main-header-wrapper{\n    display: grid;\n    grid-template-rows: auto auto;\n}\n#main-settings-wrapper{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 6px;\n}\n    .setting-btn{\n        font-size: 0.7rem;\n        width: 115px;\n        min-height: 52px;\n        padding: 0.4rem;\n        border: 1px solid black;\n        border-radius: 20px;\n    }\n\n#proj-name-con{\n    display: none;\n    justify-content: center;\n    align-items: center;\n    margin-right: 2em;\n}\n#main-projects-con{\n    display: flex;\n    flex-direction: column;\n    justify-items: center;\n    gap: 2em;\n    padding-top: 2em;\n    padding-bottom: 2em;\n\n}\n    .proj-con{\n        display: flex;\n        width: 80%;\n        flex-direction: column;\n        justify-content: center;    \n        border: 1px solid black;\n        margin-left: 10%;\n        margin-right: 10%;\n    }\n\n    #main-view-proj{\n        position: absolute;\n        \n        z-index: 90;\n        width: 100%;\n        height: 100%;\n        top: 101px;\n        background-color: white;\n        \n    }\n        #proj-details-con{\n            display: flex;\n            flex-direction: column;\n            gap: 1em;\n            margin: 1em 1em 1em 1em;\n        }\n            #proj-details-top{\n                display: grid;\n                grid-template-columns: 2fr 1fr;\n                gap: 1em;\n\n            }\n                #proj-details-left{\n                    border: 1px solid black;\n                }\n                #proj-details-right{\n                    display: flex;\n                    border: 1px solid black;\n                    flex-direction: column;\n                    align-items: center;\n                    justify-content: center;\n\n                }\n            #proj-details-bot{\n                display: grid;\n                justify-content: center;\n                border: 1px solid black;\n\n            }\n\n        #view-tasks-ul{\n            list-style-type: none;\n            padding-left: 0;\n            border: 1px solid black;\n            margin: 0 1em 0 1em;\n\n\n        }\n            .bottom-bordered{\n                border-bottom: 1px solid black;\n            }\n        .view-task-li{\n           padding: 1em;\n        }\n        .view-task-li:hover{\n            background-color: darkgrey;\n        }\n\n#add-form{\n    display: grid;\n    grid-template-rows: repeat(7, 50px);\n    position: absolute;\n    background-color: white;\n    width: 100%;\n    height: 100vh;\n    z-index: 90;\n    top: 101px;\n}\n\n\nfooter{\n    border: 1px solid black;\n    display: flex;\n    font-size: 1rem;\n    justify-content: center;\n    align-items: center;\n    \n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["html{\n    height: 100vh;\n    width: 100vw;\n    padding:0\n}\nbody{\n    position: relative;\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-rows:  auto 100px;\n    padding: 0;\n    margin:0;\n    font-family: Arial, Helvetica, sans-serif;\n\n}\n\nheader{\n    display: grid;\n    position: fixed;\n    z-index: 100;\n\n    grid-template-columns: 2fr auto;\n\n    border-bottom: 1px solid black;\n    width: 100%;\n    height: 100px;\n    background-color: gray;\n}\n    #left-header{\n        display: flex;\n        align-items: center;\n    }\n        #header-logo-con{\n            border: 1px solid black;\n            min-width: 100px;\n            height: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n        #header-title{\n            display: none;\n            margin: 0;\n            margin-left: 1em;\n        }\n    \n    #right-header{\n        position: relative;\n        display: flex;\n        justify-content: flex-end;\n        \n    }\n        #header-add-con{\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            /* border: 1px solid black; */\n            min-width: 150px;\n            height: 100%;\n        }\n            #header-add{\n                /* border: 1px solid black; */\n                font-size: 4em;\n                cursor: default;\n            }\n\n    #drop-down-con{\n        position: absolute;\n        background-color: gray;\n        top: 100px;\n        border: 1px solid black;\n        height: auto;\n        width: 100%;\n    }\n        #drop-down-con>ul{\n            list-style-type: none;\n            text-align: center;\n            padding-left: 0;\n            margin: 0;\n            \n        }\n            .dropdown-li{\n                padding-top: 1em;\n                padding-bottom: 1em;\n            }\n            .dropdown-li:hover{\n                background-color: darkgray;\n            }\n            .dropdown-anchor{\n                font-size: 1.2rem;\n                font-weight: bold;\n                color: black;\n                text-decoration: none;\n                margin-bottom: 1em;\n            }\n        #new-task-con{\n            display: none;\n        }\n\n    .anchor-btn{\n        font-weight: bolder;\n        padding: 1em;\n    }\n    .anchor-btn:hover{\n        color: white;\n    }\n\n@media (min-width: 540px){\n    #header-title{\n        display: grid;\n    }\n}\n\n\nmain{\n    border: 1px solid black;\n    margin-top: 100px;\n}\n#main-header-wrapper{\n    display: grid;\n    grid-template-rows: auto auto;\n}\n#main-settings-wrapper{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 6px;\n}\n    .setting-btn{\n        font-size: 0.7rem;\n        width: 115px;\n        min-height: 52px;\n        padding: 0.4rem;\n        border: 1px solid black;\n        border-radius: 20px;\n    }\n\n#proj-name-con{\n    display: none;\n    justify-content: center;\n    align-items: center;\n    margin-right: 2em;\n}\n#main-projects-con{\n    display: flex;\n    flex-direction: column;\n    justify-items: center;\n    gap: 2em;\n    padding-top: 2em;\n    padding-bottom: 2em;\n\n}\n    .proj-con{\n        display: flex;\n        width: 80%;\n        flex-direction: column;\n        justify-content: center;    \n        border: 1px solid black;\n        margin-left: 10%;\n        margin-right: 10%;\n    }\n\n    #main-view-proj{\n        position: absolute;\n        \n        z-index: 90;\n        width: 100%;\n        height: 100%;\n        top: 101px;\n        background-color: white;\n        \n    }\n        #proj-details-con{\n            display: flex;\n            flex-direction: column;\n            gap: 1em;\n            margin: 1em 1em 1em 1em;\n        }\n            #proj-details-top{\n                display: grid;\n                grid-template-columns: 2fr 1fr;\n                gap: 1em;\n\n            }\n                #proj-details-left{\n                    border: 1px solid black;\n                }\n                #proj-details-right{\n                    display: flex;\n                    border: 1px solid black;\n                    flex-direction: column;\n                    align-items: center;\n                    justify-content: center;\n\n                }\n            #proj-details-bot{\n                display: grid;\n                justify-content: center;\n                border: 1px solid black;\n\n            }\n\n        #view-tasks-ul{\n            list-style-type: none;\n            padding-left: 0;\n            border: 1px solid black;\n            margin: 0 1em 0 1em;\n\n\n        }\n            .bottom-bordered{\n                border-bottom: 1px solid black;\n            }\n        .view-task-li{\n           padding: 1em;\n        }\n        .view-task-li:hover{\n            background-color: darkgrey;\n        }\n\n#add-form{\n    display: grid;\n    grid-template-rows: repeat(7, 50px);\n    position: absolute;\n    background-color: white;\n    width: 100%;\n    height: 100vh;\n    z-index: 90;\n    top: 101px;\n}\n\n\nfooter{\n    border: 1px solid black;\n    display: flex;\n    font-size: 1rem;\n    justify-content: center;\n    align-items: center;\n    \n}\n\n\n\n"],"sourceRoot":""}]);
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
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

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

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/sample1.js":
/*!************************!*\
  !*** ./src/sample1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pubSub": () => (/* binding */ pubSub)
/* harmony export */ });
const pubSub = {
    eventsAggregator: [],
    subscribe : function(eventName, eventHandler){
        if(this.eventsAggregator.length != 0 && this.eventsAggregator.some(event => event.name == eventName))
            this.eventsAggregator.filter(event => event.name == eventName)[0].handlers.push(eventHandler);
        else{
            this.eventsAggregator.push({
                name: eventName,
                handlers: [eventHandler],
            })
        }
    },
    publish : function(eventName){
        this.eventsAggregator.filter(event => event.name == eventName)[0].handlers.forEach(handler => handler([... arguments].slice(1)));
    },

};

/***/ }),

/***/ "./src/expand.png":
/*!************************!*\
  !*** ./src/expand.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5be1249d73ffe4aa0654.png";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sample1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sample1.js */ "./src/sample1.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _expand_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expand.png */ "./src/expand.png");





const App = (function(){
    // Initialize core object factory functions
    const Projects = {
        list : [],
        consoleView: function(){
            console.log(`You currently have ${this.list.length} projects.`)
        }
    };
    const Project = {
        type: 'project',
        init: function(title, desc, startDate, dueDate, prio, status){
            this.title = title;
            this.description = desc;
            this.startDate = startDate;
            this.dueDate = dueDate;
            this.priority = prio;
            this.status = status;
            
            //Pre-set properties
            this.ctor = Project
            this.tasks = [];
            this.list = this.tasks;
            this.parentObj = Projects;
            
            _sample1_js__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('projectAdded', this);
            return this;
        },
        create: function() {
            let newProject = Object.create(this);
            return newProject;
        },
        update: function(title, desc, startDate, dueDate, prio, status){
            this.title = title;
            this.description =desc;
            this.startDate = startDate;
            this.dueDate = dueDate;
            this.priority = prio;
            this.status = status;
        },
        consoleView: function(){
            console.log(`Project: ${this.title}`);
            console.log(`Description: ${this.description}`);
            console.log(`Status: ${this.status}`);
            console.log(`Tasks:`);
            this.tasks.forEach(task => {
                console.log(task.title);
            });
            console.log(`Start Date: ${this.startDate} Due Date:${this.dueDate}`)
            console.log(`Project Priority: ${this.priority}`);
        },
    }
    const Task = {
        type: 'task',
        init: function(title, desc, startDate, dueDate, prio, project, status) {
            this.title = title;
            this.description =desc;
            this.startDate = startDate;
            this.dueDate = dueDate;
            this.priority = prio;
            this.project = project;
            this.status = status;

            //Pre-set properties
            this.ctor = Task;
            this.parentObj = this.project;
            
            _sample1_js__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('taskAdded', this, project);
            return this;
        },
        create: function(){
            let newTask = Object.create(this);
            return newTask;
        },
        update: function(title, desc, startDate, dueDate, prio, status){
            this.title = title;
            this.description =desc;
            this.startDate = startDate;
            this.dueDate = dueDate;
            this.priority = prio;
            this.status = status;
        },
        consoleView: function(){
            console.log(`Project: ${this.project.title}`);
            console.log(`Task: ${this.title}`);
            console.log(`Description: ${this.description}`);
            console.log(`Status: ${this.status}`);
            console.log(`Start Date: ${this.startDate} Due Date:${this.dueDate}`);
            console.log(`Task Priority: ${this.priority}`);
        },
    }

    // Subscribe methods
    _sample1_js__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('createThat', ([constructor, argsArr])=>{
        let newObj = constructor.create();
        newObj.init.apply(newObj, argsArr);
        console.log(`You've created a new ${constructor.type}: ${argsArr[0]}.`)
    })
    _sample1_js__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('updateThat', ([target, updatedValues]) => {
        target.update.apply(target, updatedValues)
    })
    _sample1_js__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('deleteThat', ([target])=>{
        let objStorage = target.parentObj.list;
        objStorage.splice(objStorage.indexOf(target), 1);
        console.log(`You've deleted the ${target.ctor.type}: ${target.title}.`)
    })
    _sample1_js__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('projectAdded', ([project])=>{
        Projects.list.push(project);
    })
    _sample1_js__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('taskAdded', ([task, project])=>{
        project.tasks.push(task);
    })

    // Interface of DOM to object logic
    function requestCreate(ctor, objArgs){
        _sample1_js__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('createThat', ctor , [... arguments].slice(1));
    }
    function requestDelete(target){
        _sample1_js__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('deleteThat', target)
    }
    function requestUpdate(target, updatedValues){
        _sample1_js__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('updateThat', target, [... arguments].slice(1))
    }

    // Used for tests on console trying out functionality
    function viewInConsole(object){ 
        console.log('*****************')
        object.consoleView();
    }

    

    function simulate(){
        //Populate project storage
        requestCreate(Project, 'sampleProj', 'for testing', 'today', 'tommorow', 'high', 'started') ;   
            requestCreate(Task, 'SampleTask1', 'first task', 'today', 'max', 'high', Projects.list[0], 'started');
            requestCreate(Task, 'SampleTask2', 'second task', 'today', 'max', 'high', Projects.list[0], 'started');
        requestCreate(Project, 'myProj', 'for testing', 'today', 'tommorow', 'high', 'started');   
            requestCreate(Task, 'SampleTask1', 'first task', 'today', 'max', 'high', Projects.list[1], 'started');
            requestCreate(Task, 'SampleTask2', 'second task', 'today', 'max', 'high', Projects.list[1], 'started');

            
        // Initialize and render html body
        let body = document.querySelector('body')
        let header, headerNav, main, mainViewProj, addForm, footer;
        let objToCreate;
        let lastProjSelected;
        let lastConSelected;
        let currentProj = {

        }
        let currentTask = {

        }
        let taskCon;

        _sample1_js__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('initBody', initBody);
        _sample1_js__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('initBody');
        _sample1_js__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('renderBody', renderBody);
        _sample1_js__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('renderBody');
        _sample1_js__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('viewProject', viewProject);
        _sample1_js__WEBPACK_IMPORTED_MODULE_0__.pubSub.subscribe('viewTask', viewTask);

        function initBody(){
            initHeader();
            initCreateForm();
            initMain();
            initMainView();
            initFooter();
            
        }

        function renderBody(){
            body.appendChild(header);
            body.appendChild(main);
            body.appendChild(footer);
        }

        // Header Functions - START
        function initHeader(){
            let newHeader = document.createElement('header');

            let headerLeft = document.createElement('div');
            headerLeft.setAttribute('id', 'left-header');
                let logoCon = document.createElement('div');
                logoCon.setAttribute('id', 'header-logo-con');
                let headerTitle = document.createElement('h1');
                headerTitle.setAttribute('id', 'header-title');
                headerTitle.textContent = 'Boogie Reminds'
            headerLeft.appendChild(logoCon);
            headerLeft.appendChild(headerTitle);

            let headerRight = document.createElement('div');
            headerRight.setAttribute('id'
            , 'right-header');

                let projectNameCon = document.createElement('div');
                    let projectName = document.createElement('h2');
                    projectName.textContent = 'Project';
                projectNameCon.appendChild(projectName);
                projectNameCon.setAttribute('id', 'proj-name-con');

                let headerAddCon = document.createElement('div');
                headerAddCon.setAttribute('id', 'header-add-con');
                    let headerAdd = document.createElement('a');
                    headerAdd.setAttribute('id', 'header-add');
                    headerAdd.textContent = '+';
                //hover and toggle dropdown functions
                headerAddCon.addEventListener('mouseover', ()=> {
                    if(headerAddCon.getAttribute('data-state') != 'toggled-on')headerAddCon.setAttribute('data-state', 'hover-on');
                    renderDropdown(headerAddCon)
                });
                headerAddCon.addEventListener('mouseleave', ()=> {
                    if(headerAddCon.contains(headerNav) && headerAddCon.getAttribute('data-state') != 'toggled-on'){
                        headerAddCon.removeChild(headerNav);
                        headerAddCon.setAttribute('data-state', 'hover-off');
                    }
                    else return 0;
                });
                headerAddCon.addEventListener('click', ()=> toggleDropdown(headerAddCon));
                headerAddCon.appendChild(headerAdd); 

            headerRight.appendChild(projectNameCon);
            headerRight.appendChild(headerAddCon);

            newHeader.appendChild(headerLeft);
            newHeader.appendChild(headerRight);
            initDropDown();
            header = newHeader;
        }

        
        function initDropDown(){
            let dropDownCon = document.createElement('div');
            dropDownCon.setAttribute('id', 'drop-down-con');
            let dropDownUL = document.createElement('ul');
            let dropDownItems = ['New project', 'New task'];
            for(let item of dropDownItems){
                
                
            
                let newItemCon = document.createElement('li');
                
                newItemCon.classList.add('dropdown-li')
                let newItem = document.createElement('a');
                newItem.classList.add('dropdown-anchor')
                newItem.textContent = item;
                newItem.href = '';
                newItem.addEventListener('click', (e) => createNew(e, item));
                newItemCon.appendChild(newItem);
                if(item == 'New task') {
                    taskCon = newItemCon;
                    newItemCon.setAttribute('id', 'new-task-con')};
                dropDownUL.appendChild(newItemCon);
            
            }
            dropDownCon.appendChild(dropDownUL);
            headerNav = dropDownCon;
        }

        function createNew(e, item){
            e.preventDefault();
            objToCreate = (item == 'New project') ? Project: Task;
            renderCreateForm();
        }

        function renderCreateForm(){
            body.appendChild(addForm);
            scrollable(false);
            loadHeader(2)
        }
        
        function unrenderCreateForm(){
            removeBackBtn();
            returnToPrevious();
        }

        

        function initCreateForm(){
            let newForm = document.createElement('form');
            newForm.setAttribute('id', 'add-form');
            
            let titleLabel = document.createElement('label');
            titleLabel.textContent  = 'Title:';
                let titleInput = document.createElement('input');
            titleLabel.appendChild(titleInput)

            let descLabel = document.createElement('label');
            descLabel.textContent  = 'Description:';
                let descInput = document.createElement('input');
                descLabel.appendChild(descInput)

            let startLabel = document.createElement('label');
            startLabel.textContent  = 'Start Date:';
                let startInput = document.createElement('input');
            startLabel.appendChild(startInput)

            let dueLabel = document.createElement('label');
            dueLabel.textContent  = 'Due Date:';
                let dueInput = document.createElement('input');
            dueLabel.appendChild(dueInput)

            let prioLabel = document.createElement('label');
            prioLabel.textContent  = 'Priority:';
                let prioInput = document.createElement('input');
            prioLabel.appendChild(prioInput)

            let statLabel = document.createElement('label');
            statLabel.textContent  = 'Status:';
                let statInput = document.createElement('input');
            statLabel.appendChild(statInput);

            let inputFields = [titleInput, descInput, startInput, dueInput, prioInput, statInput];

            let submitBtn = document.createElement('button');
            submitBtn.textContent = 'Add/Update';
            submitBtn.addEventListener('click', (e)=> {
                e.preventDefault();
                if(inputFields.every(inputBox => inputBox.value != 0)){
                    console.log(`requestCreate(${objToCreate}, ${titleInput.value}, ${descInput.value}, ${startInput.value},  ${dueInput.value}, ${prioInput.value}, ${statInput.value})`);
                    if(objToCreate == Project) requestCreate(objToCreate, titleInput.value, descInput.value, startInput.value, dueInput.value, prioInput.value, statInput.value);   
                    else if(objToCreate == Task) requestCreate(objToCreate, titleInput.value, descInput.value, startInput.value, dueInput.value, prioInput.value, lastProjSelected, statInput.value); 
                    clearInputFields(inputFields);
                    clearProjectsCon();
                    renderProjectsTo(main.lastElementChild);
                    unrenderCreateForm();
                }
                else{
                    console.log('Some fields are invalid.');
                }
            })


            newForm.appendChild(titleLabel);
            newForm.appendChild(descLabel);
            newForm.appendChild(startLabel);
            newForm.appendChild(dueLabel);
            newForm.appendChild(prioLabel);
            newForm.appendChild(statLabel);
            newForm.appendChild(submitBtn);


            addForm = newForm;
        }
        function clearInputFields(arr){
            arr.forEach(field => field.value = '');
        }

        function clearProjectsCon(){
            while(main.lastElementChild.firstElementChild) main.lastElementChild.removeChild(main.lastElementChild.firstElementChild);
        }

        function renderDropdown(that){
            if(that.children.length == 2){
                return 0;
            }
            else{
                that.appendChild(headerNav);        
            }
        }
        function toggleDropdown(that){
            if(that.getAttribute('data-state') == 'hover-on') that.setAttribute('data-state', 'toggled-on');
            else if(that.children.length == 2){
                that.removeChild(headerNav);
                that.setAttribute('data-state', 'hover-off');
            }
            else{
                that.appendChild(headerNav);   
            }
        }
        // Header Functions - END


        // Main Functions - START
        function initMain(){
            let newMain = document.createElement('main');
            newMain.setAttribute('data-showing', 'project-list');
            
            let mainHeaderWrapper = document.createElement('div');
            mainHeaderWrapper.setAttribute('id', 'main-header-wrapper');
            

            let mainTitle = document.createElement('h1');
            mainTitle.setAttribute('id', 'main-title');
            mainTitle.textContent = 'Your projects';
            mainHeaderWrapper.appendChild(mainTitle);

            let mainSettingsWrapper = document.createElement('div');
            mainSettingsWrapper.setAttribute('id', 'main-settings-wrapper');
                let mainSettings = ['Filter ongoing', 'Filter finished', 'Filter due today', 'Filter due this week', 'Sort by start date', 'Sort by due date'];
                for(let setting of mainSettings){
                    let settingBtn = document.createElement('button');
                    settingBtn.classList.add('setting-btn');
                    settingBtn.textContent = setting;
                    mainSettingsWrapper.appendChild(settingBtn);
                }
            mainHeaderWrapper.appendChild(mainSettingsWrapper);

            let projectsCon = document.createElement('div');
            projectsCon.setAttribute('id', 'main-projects-con');
            renderProjectsTo(projectsCon);
            

            newMain.appendChild(mainHeaderWrapper);
            newMain.appendChild(projectsCon);
            main = newMain;
        }
        // Stores the project view /task view html into a variable for rendering/unrendering
        function initMainView(){
            let wrapper = document.createElement('div');
            
            let detailsCon = document.createElement('div');
            detailsCon.setAttribute('id', 'proj-details-con');
                let topCon = document.createElement('div');
                topCon.setAttribute('id', 'proj-details-top');
                    let leftCon = document.createElement('div');
                    leftCon.setAttribute('id', 'proj-details-left');
                        let descLabel = document.createElement('label');
                        descLabel.textContent = 'Description:';
                        let desc = document.createElement('p');
                        desc.textContent = 'Placeholder';
                        descLabel.appendChild(desc);
                    leftCon.appendChild(descLabel);    

                    let rightCon =document.createElement('div');
                    rightCon.setAttribute('id', 'proj-details-right');
                        let startLabel = document.createElement('label');
                        startLabel.textContent = 'Start Date:';
                        let start = document.createElement('p');
                        start.textContent = 'Placeholder';
                        startLabel.appendChild(start);

                        let dueLabel = document.createElement('label');
                        dueLabel.textContent = 'Due Date:';
                        let due = document.createElement('p');
                        due.textContent = 'Placeholder';
                        dueLabel.appendChild(due);

                        let priorityLabel = document.createElement('label');
                        priorityLabel.textContent = 'Priority:';
                        let prio = document.createElement('p');
                        prio.textContent = 'Placeholder';
                        priorityLabel.appendChild(prio);
                    rightCon.appendChild(startLabel);
                    rightCon.appendChild(dueLabel);
                    rightCon.appendChild(priorityLabel);
                topCon.appendChild(leftCon);
                topCon.appendChild(rightCon);

                let botCon = document.createElement('div');
                botCon.setAttribute('id', 'proj-details-bot');
                    let statusLabel = document.createElement('label');
                    statusLabel.textContent = 'Status:';
                    let stat = document.createElement('p');
                    stat.textContent = 'Placeholder';
                    statusLabel.appendChild(stat);
                botCon.appendChild(statusLabel);

            detailsCon.appendChild(topCon);
            detailsCon.appendChild(botCon);    
            // // detailsCon.appendChild(titleLabel);    
            
            

         
            currentProj.setDetails = function (){
                // title.textContent = currentProj.title;
                desc.textContent = currentProj.description;
                start.textContent = currentProj.startDate;
                due.textContent = currentProj.dueDate;
                prio.textContent = currentProj.priority;
                stat.textContent = currentProj.status;
                tasksCon.style.display = 'block'
            }
            currentTask.setDetails = function(){
                desc.textContent = currentTask.description;
                start.textContent = currentTask.startDate;
                due.textContent = currentTask.dueDate;
                prio.textContent = currentTask.priority;
                stat.textContent = currentTask.status;
                tasksCon.style.display = 'none'
            }

            let tasksCon = document.createElement('div');
            let tasks = document.createElement('ul');
            tasks.setAttribute('id', 'view-tasks-ul');
            tasksCon.appendChild(tasks)
            currentProj.tasksCon = tasks;

            wrapper.appendChild(detailsCon);
            wrapper.appendChild(tasksCon);
            mainViewProj = wrapper;
            mainViewProj.setAttribute('id', 'main-view-proj')
        }

        // Requests to view project/task
        function requestTaskView(){
            _sample1_js__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('viewTask');
        }
        function requestProjectView(){
            _sample1_js__WEBPACK_IMPORTED_MODULE_0__.pubSub.publish('viewProject');
        }

        function viewProject(){
            main.setAttribute('data-showing', 'project');
            scrollable(false);
            loadHeader(1);

            //Set details in project view
            currentProj.setDetails();

            //Clear tasks from previously viewed project
            if(currentProj.tasksCon.children.length != 0){
                while(currentProj.tasksCon.firstElementChild) currentProj.tasksCon.removeChild(currentProj.tasksCon.firstElementChild);
            }
            //Set tasks. Add an li to ul(tasks) for each task present on the project
            for(let i = 0; i < currentProj.tasks.length; i++)
            {
                // Add a ul heading 
                if(i == 0){
                    let ulHeading = document.createElement('li');
                    ulHeading.textContent = 'TASKS'
                    ulHeading.classList.add('bottom-bordered')
                    ulHeading.style.textAlign = 'center';
                    ulHeading.style.fontWeight = 'bolder';
                    currentProj.tasksCon.appendChild(ulHeading);
                }


                let storedTask = currentProj.tasks[i];
                let newTask =document.createElement('li');
                    let taskName = document.createElement('h3');
                    taskName.textContent = storedTask.title;
                    let expandBtn = document.createElement('a');
                        let expandIcon = getImage(_expand_png__WEBPACK_IMPORTED_MODULE_2__);
                    expandBtn.appendChild(expandIcon);
                newTask.appendChild(taskName);
                newTask.appendChild(expandBtn);
                newTask.classList.add('view-task-li');
                //Add bottom borders to each task except the last
                if(i < currentProj.tasks.length-1) newTask.classList.add('bottom-bordered');
                newTask.textContent = storedTask.title;
                newTask.addEventListener('click', ()=> {
                    Object.assign(currentTask, storedTask);
                    requestTaskView();
                });
                currentProj.tasksCon.appendChild(newTask);
            }
            
            body.appendChild(mainViewProj);
        }

        function getImage(imageURL){
            let newImg = document.createElement('img');
            newImg.src=imageURL;
            return newImg;
        }

        function viewTask(){
            // main.setAttribute('data-showing', 'task');
            // currentTask.setDetails();
            // // while(currentProj.tasksCon.firstElementChild) currentProj.tasksCon.removeChild(currentProj.tasksCon.firstElementChild);
        }

        function loadHeader(num){
            let leftHeader = header.firstElementChild;
            let headerTitle = leftHeader.lastElementChild;
            let rightHeader = leftHeader.nextElementSibling;
            let projectNameCon = rightHeader.firstElementChild;
            let projectName = projectNameCon.firstElementChild;
            let headerAddCon = rightHeader.lastElementChild;
            projectName.textContent = currentProj.title;

            //Default header
            if(num == 0){
                projectNameCon.style.display = 'none';
                headerTitle.style.fontSize = '2em';
                headerAddCon.style.display = 'flex';
                if(window.matchMedia('(min-width: 540px)').matches) headerTitle.style.display = 'initial';

            } 
            //Custom header for viewing project & task. 
            else if (num == 1){
                attachBackBtn();
                projectNameCon.style.display = 'flex';
                headerTitle.style.fontSize = '0px';
                headerAddCon.style.display = 'none';
            }
            else if (num == 2){
                attachBackBtn();
                projectNameCon.style.display = 'flex';
                headerTitle.style.fontSize = '0px';
                headerAddCon.style.display = 'none';
                projectName.textContent = `Create new ${capitalize(objToCreate.type)}`;
            }
        }

        function capitalize(str){
            str = [... str];
            str[0] = str[0].toUpperCase();
            return str.join('');
        }
        
        
        // Attaches a return button
        function attachBackBtn(){
            let wrapper = header.firstElementChild.firstElementChild;
            let backBtn = document.createElement('a');
            backBtn.classList.add('anchor-btn');
            backBtn.textContent = 'Back';

            backBtn.addEventListener('click', () => {
                removeBackBtn();
                returnToPrevious();
            });
            wrapper.appendChild(backBtn);
        }

        function removeBackBtn(){
            let backBtn = header.querySelector('.anchor-btn');
            backBtn.parentElement.removeChild(backBtn);
        }

        function returnToPrevious(){
            if(isViewingProject()){
                returnToMain();
            }
            else if(isViewingTask()) {
                returnToProject()
            }
            else{
                returnToMain();
            }
        }
            
        //Sub functions
        function returnToMain(){
            body.removeChild(body.lastElementChild);
            loadHeader(0);
            scrollable(true);
        }
        function returnToProject(){
            requestProjectView();
        }

        function isViewingTask(){
            return main.getAttribute('data-showing') == 'task';
        }
        function isViewingProject(){    
            return main.getAttribute('data-showing') == 'project';
        }
        function scrollable(bool){
            (bool == true) ? document.documentElement.style.overflow = 'auto' : document.documentElement.style.overflow = 'hidden';       
        }
        function renderProjectsTo(parent){
            for(let project of Projects.list){
                let container = document.createElement('div');
                container.classList.add('proj-con');
                container.addEventListener('click', () => {
                    selectThis(container, project);
                });

                let title = document.createElement('h2');
                title.textContent = project.title;
                container.appendChild(title);
                
                let viewBtn = document.createElement('button');
                viewBtn.classList.add('proj-view-btn');
                viewBtn.textContent = 'View project details';
                viewBtn.addEventListener('click', () => {
                    Object.assign(currentProj, project);
                    requestProjectView()
                });
                container.appendChild(viewBtn);
                
                parent.appendChild(container);
            }
        }

        function selectThis(selectedEle, selectedProj){
            
            if(selectedEle == lastConSelected){
                lastProjSelected = null;
                lastConSelected = null;
                selectedEle.style.backgroundColor = 'white';
                enableAddTask(false);
                console.log(`Unselected ${selectedEle}`)
            }
            else{ 
                let otherCons = [... document.querySelectorAll('.proj-con')].filter(con => con != selectedEle);
                otherCons.forEach(con => con.style.backgroundColor = 'white');
                lastProjSelected = selectedProj;
                lastConSelected = selectedEle;
                selectedEle.style.backgroundColor = 'red';
                enableAddTask(true);
                console.log(`Selected ${selectedEle}`)};
        }

        function enableAddTask(bool){
            if(bool == true){
                taskCon.style.display = 'block';
            }
            else{
                taskCon.style.display = 'none';
            }
        }
        // Main Functions - END

        

        // Footer Functions - START
        function initFooter(){
            let newFooter = document.createElement('footer');
            let tag = document.createElement('h2');
            tag.setAttribute('id', 'footer-tag');
            tag.textContent = 'Copyright © Viveyd 2021';
            newFooter.appendChild(tag);
            footer = newFooter;
        }
        // Footer Functions - END


        function unrenderBody(){
            body.removeChild(header);
            body.removeChild(main);
            body.removeChild(footer);
        }

    }

    return {
        simulate,
    }
})();

App.simulate();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdCQUFnQixJQUFJLGlCQUFpQixLQUFLLGVBQWUsSUFBSSxnQkFBZ0IsSUFBSSxnQkFBZ0I7QUFDdkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLHVEQUFjO0FBQzFCO0FBQ0E7QUFDQSxZQUFZLHVEQUFjO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw4QkFBOEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Qsd0NBQVM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsNkJBQTZCO0FBQ3JGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxZQUFZO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsWUFBWTtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2FtcGxlMS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWx7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcGFkZGluZzowXFxufVxcbmJvZHl7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgYXV0byAxMDBweDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTAwO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciBhdXRvO1xcblxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG4gICAgI2xlZnQtaGVhZGVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgICAgICNoZWFkZXItbG9nby1jb257XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgI2hlYWRlci10aXRsZXtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgICAgICAgfVxcbiAgICBcXG4gICAgI3JpZ2h0LWhlYWRlcntcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgICAgICNoZWFkZXItYWRkLWNvbntcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgI2hlYWRlci1hZGR7XFxuICAgICAgICAgICAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDRlbTtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgI2Ryb3AtZG93bi1jb257XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICAgICAgdG9wOiAxMDBweDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgICAgICNkcm9wLWRvd24tY29uPnVse1xcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAuZHJvcGRvd24tbGl7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxZW07XFxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5kcm9wZG93bi1saTpob3ZlcntcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5kcm9wZG93bi1hbmNob3J7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAjbmV3LXRhc2stY29ue1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgIC5hbmNob3ItYnRue1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgfVxcbiAgICAuYW5jaG9yLWJ0bjpob3ZlcntcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA1NDBweCl7XFxuICAgICNoZWFkZXItdGl0bGV7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB9XFxufVxcblxcblxcbm1haW57XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuI21haW4taGVhZGVyLXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbn1cXG4jbWFpbi1zZXR0aW5ncy13cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDZweDtcXG59XFxuICAgIC5zZXR0aW5nLWJ0bntcXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgICAgICAgd2lkdGg6IDExNXB4O1xcbiAgICAgICAgbWluLWhlaWdodDogNTJweDtcXG4gICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgfVxcblxcbiNwcm9qLW5hbWUtY29ue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XFxufVxcbiNtYWluLXByb2plY3RzLWNvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJlbTtcXG4gICAgcGFkZGluZy10b3A6IDJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcXG5cXG59XFxuICAgIC5wcm9qLWNvbntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgICBcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgICB9XFxuXFxuICAgICNtYWluLXZpZXctcHJvantcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIFxcbiAgICAgICAgei1pbmRleDogOTA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHRvcDogMTAxcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIFxcbiAgICB9XFxuICAgICAgICAjcHJvai1kZXRhaWxzLWNvbntcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiAxZW07XFxuICAgICAgICAgICAgbWFyZ2luOiAxZW0gMWVtIDFlbSAxZW07XFxuICAgICAgICB9XFxuICAgICAgICAgICAgI3Byb2otZGV0YWlscy10b3B7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gICAgICAgICAgICAgICAgZ2FwOiAxZW07XFxuXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAjcHJvai1kZXRhaWxzLWxlZnR7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAjcHJvai1kZXRhaWxzLXJpZ2h0e1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICNwcm9qLWRldGFpbHMtYm90e1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgI3ZpZXctdGFza3MtdWx7XFxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICBtYXJnaW46IDAgMWVtIDAgMWVtO1xcblxcblxcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5ib3R0b20tYm9yZGVyZWR7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICB9XFxuICAgICAgICAudmlldy10YXNrLWxpe1xcbiAgICAgICAgICAgcGFkZGluZzogMWVtO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnZpZXctdGFzay1saTpob3ZlcntcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcXG4gICAgICAgIH1cXG5cXG4jYWRkLWZvcm17XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDUwcHgpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgei1pbmRleDogOTA7XFxuICAgIHRvcDogMTAxcHg7XFxufVxcblxcblxcbmZvb3RlcntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWjtBQUNKO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLFVBQVU7SUFDVixRQUFRO0lBQ1IseUNBQXlDOztBQUU3Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTs7SUFFWiwrQkFBK0I7O0lBRS9CLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtJQUNJO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtJQUN2QjtRQUNJO1lBQ0ksdUJBQXVCO1lBQ3ZCLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osYUFBYTtZQUNiLHVCQUF1QjtZQUN2QixtQkFBbUI7UUFDdkI7UUFDQTtZQUNJLGFBQWE7WUFDYixTQUFTO1lBQ1QsZ0JBQWdCO1FBQ3BCOztJQUVKO1FBQ0ksa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYix5QkFBeUI7O0lBRTdCO1FBQ0k7WUFDSSxhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLG1CQUFtQjtZQUNuQiw2QkFBNkI7WUFDN0IsZ0JBQWdCO1lBQ2hCLFlBQVk7UUFDaEI7WUFDSTtnQkFDSSw2QkFBNkI7Z0JBQzdCLGNBQWM7Z0JBQ2QsZUFBZTtZQUNuQjs7SUFFUjtRQUNJLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsVUFBVTtRQUNWLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osV0FBVztJQUNmO1FBQ0k7WUFDSSxxQkFBcUI7WUFDckIsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixTQUFTOztRQUViO1lBQ0k7Z0JBQ0ksZ0JBQWdCO2dCQUNoQixtQkFBbUI7WUFDdkI7WUFDQTtnQkFDSSwwQkFBMEI7WUFDOUI7WUFDQTtnQkFDSSxpQkFBaUI7Z0JBQ2pCLGlCQUFpQjtnQkFDakIsWUFBWTtnQkFDWixxQkFBcUI7Z0JBQ3JCLGtCQUFrQjtZQUN0QjtRQUNKO1lBQ0ksYUFBYTtRQUNqQjs7SUFFSjtRQUNJLG1CQUFtQjtRQUNuQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCOztBQUVKO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7OztBQUdBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsUUFBUTtBQUNaO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtJQUN2Qjs7QUFFSjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixtQkFBbUI7O0FBRXZCO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsVUFBVTtRQUNWLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxrQkFBa0I7O1FBRWxCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsWUFBWTtRQUNaLFVBQVU7UUFDVix1QkFBdUI7O0lBRTNCO1FBQ0k7WUFDSSxhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLFFBQVE7WUFDUix1QkFBdUI7UUFDM0I7WUFDSTtnQkFDSSxhQUFhO2dCQUNiLDhCQUE4QjtnQkFDOUIsUUFBUTs7WUFFWjtnQkFDSTtvQkFDSSx1QkFBdUI7Z0JBQzNCO2dCQUNBO29CQUNJLGFBQWE7b0JBQ2IsdUJBQXVCO29CQUN2QixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsdUJBQXVCOztnQkFFM0I7WUFDSjtnQkFDSSxhQUFhO2dCQUNiLHVCQUF1QjtnQkFDdkIsdUJBQXVCOztZQUUzQjs7UUFFSjtZQUNJLHFCQUFxQjtZQUNyQixlQUFlO1lBQ2YsdUJBQXVCO1lBQ3ZCLG1CQUFtQjs7O1FBR3ZCO1lBQ0k7Z0JBQ0ksOEJBQThCO1lBQ2xDO1FBQ0o7V0FDRyxZQUFZO1FBQ2Y7UUFDQTtZQUNJLDBCQUEwQjtRQUM5Qjs7QUFFUjtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7OztBQUdBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7QUFFdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBwYWRkaW5nOjBcXG59XFxuYm9keXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6ICBhdXRvIDEwMHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46MDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFxufVxcblxcbmhlYWRlcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIGF1dG87XFxuXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcbiAgICAjbGVmdC1oZWFkZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAgICAgI2hlYWRlci1sb2dvLWNvbntcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgICAgICAjaGVhZGVyLXRpdGxle1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XFxuICAgICAgICB9XFxuICAgIFxcbiAgICAjcmlnaHQtaGVhZGVye1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgICBcXG4gICAgfVxcbiAgICAgICAgI2hlYWRlci1hZGQtY29ue1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAjaGVhZGVyLWFkZHtcXG4gICAgICAgICAgICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNGVtO1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAjZHJvcC1kb3duLWNvbntcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgICAgICB0b3A6IDEwMHB4O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICAgICAgI2Ryb3AtZG93bi1jb24+dWx7XFxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5kcm9wZG93bi1saXtcXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLmRyb3Bkb3duLWxpOmhvdmVye1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLmRyb3Bkb3duLWFuY2hvcntcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICNuZXctdGFzay1jb257XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgLmFuY2hvci1idG57XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICAgICAgcGFkZGluZzogMWVtO1xcbiAgICB9XFxuICAgIC5hbmNob3ItYnRuOmhvdmVye1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDU0MHB4KXtcXG4gICAgI2hlYWRlci10aXRsZXtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIH1cXG59XFxuXFxuXFxubWFpbntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG4jbWFpbi1oZWFkZXItd3JhcHBlcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxufVxcbiNtYWluLXNldHRpbmdzLXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNnB4O1xcbn1cXG4gICAgLnNldHRpbmctYnRue1xcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgICAgICB3aWR0aDogMTE1cHg7XFxuICAgICAgICBtaW4taGVpZ2h0OiA1MnB4O1xcbiAgICAgICAgcGFkZGluZzogMC40cmVtO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB9XFxuXFxuI3Byb2otbmFtZS1jb257XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcXG59XFxuI21haW4tcHJvamVjdHMtY29ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xcblxcbn1cXG4gICAgLnByb2otY29ue1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgIFxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxuICAgIH1cXG5cXG4gICAgI21haW4tdmlldy1wcm9qe1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgXFxuICAgICAgICB6LWluZGV4OiA5MDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgdG9wOiAxMDFweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgICAgICNwcm9qLWRldGFpbHMtY29ue1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBnYXA6IDFlbTtcXG4gICAgICAgICAgICBtYXJnaW46IDFlbSAxZW0gMWVtIDFlbTtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAjcHJvai1kZXRhaWxzLXRvcHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgICAgICAgICAgICAgICBnYXA6IDFlbTtcXG5cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICNwcm9qLWRldGFpbHMtbGVmdHtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICNwcm9qLWRldGFpbHMtcmlnaHR7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgI3Byb2otZGV0YWlscy1ib3R7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAjdmlldy10YXNrcy11bHtcXG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgIG1hcmdpbjogMCAxZW0gMCAxZW07XFxuXFxuXFxuICAgICAgICB9XFxuICAgICAgICAgICAgLmJvdHRvbS1ib3JkZXJlZHtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIC52aWV3LXRhc2stbGl7XFxuICAgICAgICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgICB9XFxuICAgICAgICAudmlldy10YXNrLWxpOmhvdmVye1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xcbiAgICAgICAgfVxcblxcbiNhZGQtZm9ybXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgNTBweCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB6LWluZGV4OiA5MDtcXG4gICAgdG9wOiAxMDFweDtcXG59XFxuXFxuXFxuZm9vdGVye1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgcHViU3ViID0ge1xuICAgIGV2ZW50c0FnZ3JlZ2F0b3I6IFtdLFxuICAgIHN1YnNjcmliZSA6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVyKXtcbiAgICAgICAgaWYodGhpcy5ldmVudHNBZ2dyZWdhdG9yLmxlbmd0aCAhPSAwICYmIHRoaXMuZXZlbnRzQWdncmVnYXRvci5zb21lKGV2ZW50ID0+IGV2ZW50Lm5hbWUgPT0gZXZlbnROYW1lKSlcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzQWdncmVnYXRvci5maWx0ZXIoZXZlbnQgPT4gZXZlbnQubmFtZSA9PSBldmVudE5hbWUpWzBdLmhhbmRsZXJzLnB1c2goZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzQWdncmVnYXRvci5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBldmVudE5hbWUsXG4gICAgICAgICAgICAgICAgaGFuZGxlcnM6IFtldmVudEhhbmRsZXJdLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHVibGlzaCA6IGZ1bmN0aW9uKGV2ZW50TmFtZSl7XG4gICAgICAgIHRoaXMuZXZlbnRzQWdncmVnYXRvci5maWx0ZXIoZXZlbnQgPT4gZXZlbnQubmFtZSA9PSBldmVudE5hbWUpWzBdLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyKFsuLi4gYXJndW1lbnRzXS5zbGljZSgxKSkpO1xuICAgIH0sXG5cbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBwdWJTdWIgfSBmcm9tIFwiLi9zYW1wbGUxLmpzXCI7XG5pbXBvcnQnLi9pbmRleC5jc3MnO1xuaW1wb3J0IGV4cGFuZFVSTCBmcm9tICcuL2V4cGFuZC5wbmcnO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNvbnN0IEFwcCA9IChmdW5jdGlvbigpe1xuICAgIC8vIEluaXRpYWxpemUgY29yZSBvYmplY3QgZmFjdG9yeSBmdW5jdGlvbnNcbiAgICBjb25zdCBQcm9qZWN0cyA9IHtcbiAgICAgICAgbGlzdCA6IFtdLFxuICAgICAgICBjb25zb2xlVmlldzogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBZb3UgY3VycmVudGx5IGhhdmUgJHt0aGlzLmxpc3QubGVuZ3RofSBwcm9qZWN0cy5gKVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBQcm9qZWN0ID0ge1xuICAgICAgICB0eXBlOiAncHJvamVjdCcsXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKHRpdGxlLCBkZXNjLCBzdGFydERhdGUsIGR1ZURhdGUsIHByaW8sIHN0YXR1cyl7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzYztcbiAgICAgICAgICAgIHRoaXMuc3RhcnREYXRlID0gc3RhcnREYXRlO1xuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vUHJlLXNldCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICB0aGlzLmN0b3IgPSBQcm9qZWN0XG4gICAgICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgICAgICAgICB0aGlzLmxpc3QgPSB0aGlzLnRhc2tzO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRPYmogPSBQcm9qZWN0cztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHViU3ViLnB1Ymxpc2goJ3Byb2plY3RBZGRlZCcsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgbmV3UHJvamVjdCA9IE9iamVjdC5jcmVhdGUodGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbih0aXRsZSwgZGVzYywgc3RhcnREYXRlLCBkdWVEYXRlLCBwcmlvLCBzdGF0dXMpe1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9ZGVzYztcbiAgICAgICAgICAgIHRoaXMuc3RhcnREYXRlID0gc3RhcnREYXRlO1xuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbnNvbGVWaWV3OiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFByb2plY3Q6ICR7dGhpcy50aXRsZX1gKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEZXNjcmlwdGlvbjogJHt0aGlzLmRlc2NyaXB0aW9ufWApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFN0YXR1czogJHt0aGlzLnN0YXR1c31gKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUYXNrczpgKTtcbiAgICAgICAgICAgIHRoaXMudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrLnRpdGxlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFN0YXJ0IERhdGU6ICR7dGhpcy5zdGFydERhdGV9IER1ZSBEYXRlOiR7dGhpcy5kdWVEYXRlfWApXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUHJvamVjdCBQcmlvcml0eTogJHt0aGlzLnByaW9yaXR5fWApO1xuICAgICAgICB9LFxuICAgIH1cbiAgICBjb25zdCBUYXNrID0ge1xuICAgICAgICB0eXBlOiAndGFzaycsXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKHRpdGxlLCBkZXNjLCBzdGFydERhdGUsIGR1ZURhdGUsIHByaW8sIHByb2plY3QsIHN0YXR1cykge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9ZGVzYztcbiAgICAgICAgICAgIHRoaXMuc3RhcnREYXRlID0gc3RhcnREYXRlO1xuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvO1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuXG4gICAgICAgICAgICAvL1ByZS1zZXQgcHJvcGVydGllc1xuICAgICAgICAgICAgdGhpcy5jdG9yID0gVGFzaztcbiAgICAgICAgICAgIHRoaXMucGFyZW50T2JqID0gdGhpcy5wcm9qZWN0O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwdWJTdWIucHVibGlzaCgndGFza0FkZGVkJywgdGhpcywgcHJvamVjdCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgbGV0IG5ld1Rhc2sgPSBPYmplY3QuY3JlYXRlKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1Rhc2s7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24odGl0bGUsIGRlc2MsIHN0YXJ0RGF0ZSwgZHVlRGF0ZSwgcHJpbywgc3RhdHVzKXtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPWRlc2M7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZTtcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpbztcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB9LFxuICAgICAgICBjb25zb2xlVmlldzogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQcm9qZWN0OiAke3RoaXMucHJvamVjdC50aXRsZX1gKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUYXNrOiAke3RoaXMudGl0bGV9YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRGVzY3JpcHRpb246ICR7dGhpcy5kZXNjcmlwdGlvbn1gKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTdGF0dXM6ICR7dGhpcy5zdGF0dXN9YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU3RhcnQgRGF0ZTogJHt0aGlzLnN0YXJ0RGF0ZX0gRHVlIERhdGU6JHt0aGlzLmR1ZURhdGV9YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVGFzayBQcmlvcml0eTogJHt0aGlzLnByaW9yaXR5fWApO1xuICAgICAgICB9LFxuICAgIH1cblxuICAgIC8vIFN1YnNjcmliZSBtZXRob2RzXG4gICAgcHViU3ViLnN1YnNjcmliZSgnY3JlYXRlVGhhdCcsIChbY29uc3RydWN0b3IsIGFyZ3NBcnJdKT0+e1xuICAgICAgICBsZXQgbmV3T2JqID0gY29uc3RydWN0b3IuY3JlYXRlKCk7XG4gICAgICAgIG5ld09iai5pbml0LmFwcGx5KG5ld09iaiwgYXJnc0Fycik7XG4gICAgICAgIGNvbnNvbGUubG9nKGBZb3UndmUgY3JlYXRlZCBhIG5ldyAke2NvbnN0cnVjdG9yLnR5cGV9OiAke2FyZ3NBcnJbMF19LmApXG4gICAgfSlcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCd1cGRhdGVUaGF0JywgKFt0YXJnZXQsIHVwZGF0ZWRWYWx1ZXNdKSA9PiB7XG4gICAgICAgIHRhcmdldC51cGRhdGUuYXBwbHkodGFyZ2V0LCB1cGRhdGVkVmFsdWVzKVxuICAgIH0pXG4gICAgcHViU3ViLnN1YnNjcmliZSgnZGVsZXRlVGhhdCcsIChbdGFyZ2V0XSk9PntcbiAgICAgICAgbGV0IG9ialN0b3JhZ2UgPSB0YXJnZXQucGFyZW50T2JqLmxpc3Q7XG4gICAgICAgIG9ialN0b3JhZ2Uuc3BsaWNlKG9ialN0b3JhZ2UuaW5kZXhPZih0YXJnZXQpLCAxKTtcbiAgICAgICAgY29uc29sZS5sb2coYFlvdSd2ZSBkZWxldGVkIHRoZSAke3RhcmdldC5jdG9yLnR5cGV9OiAke3RhcmdldC50aXRsZX0uYClcbiAgICB9KVxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RBZGRlZCcsIChbcHJvamVjdF0pPT57XG4gICAgICAgIFByb2plY3RzLmxpc3QucHVzaChwcm9qZWN0KTtcbiAgICB9KVxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3Rhc2tBZGRlZCcsIChbdGFzaywgcHJvamVjdF0pPT57XG4gICAgICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbiAgICB9KVxuXG4gICAgLy8gSW50ZXJmYWNlIG9mIERPTSB0byBvYmplY3QgbG9naWNcbiAgICBmdW5jdGlvbiByZXF1ZXN0Q3JlYXRlKGN0b3IsIG9iakFyZ3Mpe1xuICAgICAgICBwdWJTdWIucHVibGlzaCgnY3JlYXRlVGhhdCcsIGN0b3IgLCBbLi4uIGFyZ3VtZW50c10uc2xpY2UoMSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXF1ZXN0RGVsZXRlKHRhcmdldCl7XG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdkZWxldGVUaGF0JywgdGFyZ2V0KVxuICAgIH1cbiAgICBmdW5jdGlvbiByZXF1ZXN0VXBkYXRlKHRhcmdldCwgdXBkYXRlZFZhbHVlcyl7XG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKCd1cGRhdGVUaGF0JywgdGFyZ2V0LCBbLi4uIGFyZ3VtZW50c10uc2xpY2UoMSkpXG4gICAgfVxuXG4gICAgLy8gVXNlZCBmb3IgdGVzdHMgb24gY29uc29sZSB0cnlpbmcgb3V0IGZ1bmN0aW9uYWxpdHlcbiAgICBmdW5jdGlvbiB2aWV3SW5Db25zb2xlKG9iamVjdCl7IFxuICAgICAgICBjb25zb2xlLmxvZygnKioqKioqKioqKioqKioqKionKVxuICAgICAgICBvYmplY3QuY29uc29sZVZpZXcoKTtcbiAgICB9XG5cbiAgICBcblxuICAgIGZ1bmN0aW9uIHNpbXVsYXRlKCl7XG4gICAgICAgIC8vUG9wdWxhdGUgcHJvamVjdCBzdG9yYWdlXG4gICAgICAgIHJlcXVlc3RDcmVhdGUoUHJvamVjdCwgJ3NhbXBsZVByb2onLCAnZm9yIHRlc3RpbmcnLCAndG9kYXknLCAndG9tbW9yb3cnLCAnaGlnaCcsICdzdGFydGVkJykgOyAgIFxuICAgICAgICAgICAgcmVxdWVzdENyZWF0ZShUYXNrLCAnU2FtcGxlVGFzazEnLCAnZmlyc3QgdGFzaycsICd0b2RheScsICdtYXgnLCAnaGlnaCcsIFByb2plY3RzLmxpc3RbMF0sICdzdGFydGVkJyk7XG4gICAgICAgICAgICByZXF1ZXN0Q3JlYXRlKFRhc2ssICdTYW1wbGVUYXNrMicsICdzZWNvbmQgdGFzaycsICd0b2RheScsICdtYXgnLCAnaGlnaCcsIFByb2plY3RzLmxpc3RbMF0sICdzdGFydGVkJyk7XG4gICAgICAgIHJlcXVlc3RDcmVhdGUoUHJvamVjdCwgJ215UHJvaicsICdmb3IgdGVzdGluZycsICd0b2RheScsICd0b21tb3JvdycsICdoaWdoJywgJ3N0YXJ0ZWQnKTsgICBcbiAgICAgICAgICAgIHJlcXVlc3RDcmVhdGUoVGFzaywgJ1NhbXBsZVRhc2sxJywgJ2ZpcnN0IHRhc2snLCAndG9kYXknLCAnbWF4JywgJ2hpZ2gnLCBQcm9qZWN0cy5saXN0WzFdLCAnc3RhcnRlZCcpO1xuICAgICAgICAgICAgcmVxdWVzdENyZWF0ZShUYXNrLCAnU2FtcGxlVGFzazInLCAnc2Vjb25kIHRhc2snLCAndG9kYXknLCAnbWF4JywgJ2hpZ2gnLCBQcm9qZWN0cy5saXN0WzFdLCAnc3RhcnRlZCcpO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBhbmQgcmVuZGVyIGh0bWwgYm9keVxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgICAgICBsZXQgaGVhZGVyLCBoZWFkZXJOYXYsIG1haW4sIG1haW5WaWV3UHJvaiwgYWRkRm9ybSwgZm9vdGVyO1xuICAgICAgICBsZXQgb2JqVG9DcmVhdGU7XG4gICAgICAgIGxldCBsYXN0UHJvalNlbGVjdGVkO1xuICAgICAgICBsZXQgbGFzdENvblNlbGVjdGVkO1xuICAgICAgICBsZXQgY3VycmVudFByb2ogPSB7XG5cbiAgICAgICAgfVxuICAgICAgICBsZXQgY3VycmVudFRhc2sgPSB7XG5cbiAgICAgICAgfVxuICAgICAgICBsZXQgdGFza0NvbjtcblxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCdpbml0Qm9keScsIGluaXRCb2R5KTtcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2luaXRCb2R5Jyk7XG4gICAgICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3JlbmRlckJvZHknLCByZW5kZXJCb2R5KTtcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goJ3JlbmRlckJvZHknKTtcbiAgICAgICAgcHViU3ViLnN1YnNjcmliZSgndmlld1Byb2plY3QnLCB2aWV3UHJvamVjdCk7XG4gICAgICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3ZpZXdUYXNrJywgdmlld1Rhc2spO1xuXG4gICAgICAgIGZ1bmN0aW9uIGluaXRCb2R5KCl7XG4gICAgICAgICAgICBpbml0SGVhZGVyKCk7XG4gICAgICAgICAgICBpbml0Q3JlYXRlRm9ybSgpO1xuICAgICAgICAgICAgaW5pdE1haW4oKTtcbiAgICAgICAgICAgIGluaXRNYWluVmlldygpO1xuICAgICAgICAgICAgaW5pdEZvb3RlcigpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJCb2R5KCl7XG4gICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGVhZGVyIEZ1bmN0aW9ucyAtIFNUQVJUXG4gICAgICAgIGZ1bmN0aW9uIGluaXRIZWFkZXIoKXtcbiAgICAgICAgICAgIGxldCBuZXdIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICAgICAgICAgICAgbGV0IGhlYWRlckxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGhlYWRlckxlZnQuc2V0QXR0cmlidXRlKCdpZCcsICdsZWZ0LWhlYWRlcicpO1xuICAgICAgICAgICAgICAgIGxldCBsb2dvQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbG9nb0Nvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlci1sb2dvLWNvbicpO1xuICAgICAgICAgICAgICAgIGxldCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgICAgICAgICAgaGVhZGVyVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXItdGl0bGUnKTtcbiAgICAgICAgICAgICAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICdCb29naWUgUmVtaW5kcydcbiAgICAgICAgICAgIGhlYWRlckxlZnQuYXBwZW5kQ2hpbGQobG9nb0Nvbik7XG4gICAgICAgICAgICBoZWFkZXJMZWZ0LmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcblxuICAgICAgICAgICAgbGV0IGhlYWRlclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBoZWFkZXJSaWdodC5zZXRBdHRyaWJ1dGUoJ2lkJ1xuICAgICAgICAgICAgLCAncmlnaHQtaGVhZGVyJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdE5hbWVDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSAnUHJvamVjdCc7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWVDb24uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lQ29uLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvai1uYW1lLWNvbicpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGhlYWRlckFkZENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGhlYWRlckFkZENvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlci1hZGQtY29uJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBoZWFkZXJBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlckFkZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlci1hZGQnKTtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyQWRkLnRleHRDb250ZW50ID0gJysnO1xuICAgICAgICAgICAgICAgIC8vaG92ZXIgYW5kIHRvZ2dsZSBkcm9wZG93biBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICBoZWFkZXJBZGRDb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGhlYWRlckFkZENvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnKSAhPSAndG9nZ2xlZC1vbicpaGVhZGVyQWRkQ29uLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsICdob3Zlci1vbicpO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJEcm9wZG93bihoZWFkZXJBZGRDb24pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaGVhZGVyQWRkQ29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoaGVhZGVyQWRkQ29uLmNvbnRhaW5zKGhlYWRlck5hdikgJiYgaGVhZGVyQWRkQ29uLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScpICE9ICd0b2dnbGVkLW9uJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJBZGRDb24ucmVtb3ZlQ2hpbGQoaGVhZGVyTmF2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckFkZENvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCAnaG92ZXItb2ZmJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBoZWFkZXJBZGRDb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHRvZ2dsZURyb3Bkb3duKGhlYWRlckFkZENvbikpO1xuICAgICAgICAgICAgICAgIGhlYWRlckFkZENvbi5hcHBlbmRDaGlsZChoZWFkZXJBZGQpOyBcblxuICAgICAgICAgICAgaGVhZGVyUmlnaHQuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVDb24pO1xuICAgICAgICAgICAgaGVhZGVyUmlnaHQuYXBwZW5kQ2hpbGQoaGVhZGVyQWRkQ29uKTtcblxuICAgICAgICAgICAgbmV3SGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckxlZnQpO1xuICAgICAgICAgICAgbmV3SGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclJpZ2h0KTtcbiAgICAgICAgICAgIGluaXREcm9wRG93bigpO1xuICAgICAgICAgICAgaGVhZGVyID0gbmV3SGVhZGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGluaXREcm9wRG93bigpe1xuICAgICAgICAgICAgbGV0IGRyb3BEb3duQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkcm9wRG93bkNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Ryb3AtZG93bi1jb24nKTtcbiAgICAgICAgICAgIGxldCBkcm9wRG93blVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICAgIGxldCBkcm9wRG93bkl0ZW1zID0gWydOZXcgcHJvamVjdCcsICdOZXcgdGFzayddO1xuICAgICAgICAgICAgZm9yKGxldCBpdGVtIG9mIGRyb3BEb3duSXRlbXMpe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IG5ld0l0ZW1Db24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG5ld0l0ZW1Db24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tbGknKVxuICAgICAgICAgICAgICAgIGxldCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgICAgIG5ld0l0ZW0uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tYW5jaG9yJylcbiAgICAgICAgICAgICAgICBuZXdJdGVtLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgICAgICAgICBuZXdJdGVtLmhyZWYgPSAnJztcbiAgICAgICAgICAgICAgICBuZXdJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNyZWF0ZU5ldyhlLCBpdGVtKSk7XG4gICAgICAgICAgICAgICAgbmV3SXRlbUNvbi5hcHBlbmRDaGlsZChuZXdJdGVtKTtcbiAgICAgICAgICAgICAgICBpZihpdGVtID09ICdOZXcgdGFzaycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0NvbiA9IG5ld0l0ZW1Db247XG4gICAgICAgICAgICAgICAgICAgIG5ld0l0ZW1Db24uc2V0QXR0cmlidXRlKCdpZCcsICduZXctdGFzay1jb24nKX07XG4gICAgICAgICAgICAgICAgZHJvcERvd25VTC5hcHBlbmRDaGlsZChuZXdJdGVtQ29uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJvcERvd25Db24uYXBwZW5kQ2hpbGQoZHJvcERvd25VTCk7XG4gICAgICAgICAgICBoZWFkZXJOYXYgPSBkcm9wRG93bkNvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU5ldyhlLCBpdGVtKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIG9ialRvQ3JlYXRlID0gKGl0ZW0gPT0gJ05ldyBwcm9qZWN0JykgPyBQcm9qZWN0OiBUYXNrO1xuICAgICAgICAgICAgcmVuZGVyQ3JlYXRlRm9ybSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyQ3JlYXRlRm9ybSgpe1xuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChhZGRGb3JtKTtcbiAgICAgICAgICAgIHNjcm9sbGFibGUoZmFsc2UpO1xuICAgICAgICAgICAgbG9hZEhlYWRlcigyKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiB1bnJlbmRlckNyZWF0ZUZvcm0oKXtcbiAgICAgICAgICAgIHJlbW92ZUJhY2tCdG4oKTtcbiAgICAgICAgICAgIHJldHVyblRvUHJldmlvdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuXG4gICAgICAgIGZ1bmN0aW9uIGluaXRDcmVhdGVGb3JtKCl7XG4gICAgICAgICAgICBsZXQgbmV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgIG5ld0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtZm9ybScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ICA9ICdUaXRsZTonO1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRpdGxlTGFiZWwuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dClcblxuICAgICAgICAgICAgbGV0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBkZXNjTGFiZWwudGV4dENvbnRlbnQgID0gJ0Rlc2NyaXB0aW9uOic7XG4gICAgICAgICAgICAgICAgbGV0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgZGVzY0xhYmVsLmFwcGVuZENoaWxkKGRlc2NJbnB1dClcblxuICAgICAgICAgICAgbGV0IHN0YXJ0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgc3RhcnRMYWJlbC50ZXh0Q29udGVudCAgPSAnU3RhcnQgRGF0ZTonO1xuICAgICAgICAgICAgICAgIGxldCBzdGFydElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHN0YXJ0TGFiZWwuYXBwZW5kQ2hpbGQoc3RhcnRJbnB1dClcblxuICAgICAgICAgICAgbGV0IGR1ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGR1ZUxhYmVsLnRleHRDb250ZW50ICA9ICdEdWUgRGF0ZTonO1xuICAgICAgICAgICAgICAgIGxldCBkdWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBkdWVMYWJlbC5hcHBlbmRDaGlsZChkdWVJbnB1dClcblxuICAgICAgICAgICAgbGV0IHByaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBwcmlvTGFiZWwudGV4dENvbnRlbnQgID0gJ1ByaW9yaXR5Oic7XG4gICAgICAgICAgICAgICAgbGV0IHByaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBwcmlvTGFiZWwuYXBwZW5kQ2hpbGQocHJpb0lucHV0KVxuXG4gICAgICAgICAgICBsZXQgc3RhdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIHN0YXRMYWJlbC50ZXh0Q29udGVudCAgPSAnU3RhdHVzOic7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBzdGF0TGFiZWwuYXBwZW5kQ2hpbGQoc3RhdElucHV0KTtcblxuICAgICAgICAgICAgbGV0IGlucHV0RmllbGRzID0gW3RpdGxlSW5wdXQsIGRlc2NJbnB1dCwgc3RhcnRJbnB1dCwgZHVlSW5wdXQsIHByaW9JbnB1dCwgc3RhdElucHV0XTtcblxuICAgICAgICAgICAgbGV0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ0FkZC9VcGRhdGUnO1xuICAgICAgICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZihpbnB1dEZpZWxkcy5ldmVyeShpbnB1dEJveCA9PiBpbnB1dEJveC52YWx1ZSAhPSAwKSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGByZXF1ZXN0Q3JlYXRlKCR7b2JqVG9DcmVhdGV9LCAke3RpdGxlSW5wdXQudmFsdWV9LCAke2Rlc2NJbnB1dC52YWx1ZX0sICR7c3RhcnRJbnB1dC52YWx1ZX0sICAke2R1ZUlucHV0LnZhbHVlfSwgJHtwcmlvSW5wdXQudmFsdWV9LCAke3N0YXRJbnB1dC52YWx1ZX0pYCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKG9ialRvQ3JlYXRlID09IFByb2plY3QpIHJlcXVlc3RDcmVhdGUob2JqVG9DcmVhdGUsIHRpdGxlSW5wdXQudmFsdWUsIGRlc2NJbnB1dC52YWx1ZSwgc3RhcnRJbnB1dC52YWx1ZSwgZHVlSW5wdXQudmFsdWUsIHByaW9JbnB1dC52YWx1ZSwgc3RhdElucHV0LnZhbHVlKTsgICBcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihvYmpUb0NyZWF0ZSA9PSBUYXNrKSByZXF1ZXN0Q3JlYXRlKG9ialRvQ3JlYXRlLCB0aXRsZUlucHV0LnZhbHVlLCBkZXNjSW5wdXQudmFsdWUsIHN0YXJ0SW5wdXQudmFsdWUsIGR1ZUlucHV0LnZhbHVlLCBwcmlvSW5wdXQudmFsdWUsIGxhc3RQcm9qU2VsZWN0ZWQsIHN0YXRJbnB1dC52YWx1ZSk7IFxuICAgICAgICAgICAgICAgICAgICBjbGVhcklucHV0RmllbGRzKGlucHV0RmllbGRzKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJQcm9qZWN0c0NvbigpO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJQcm9qZWN0c1RvKG1haW4ubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIHVucmVuZGVyQ3JlYXRlRm9ybSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU29tZSBmaWVsZHMgYXJlIGludmFsaWQuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICBuZXdGb3JtLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgICAgICAgICAgbmV3Rm9ybS5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuICAgICAgICAgICAgbmV3Rm9ybS5hcHBlbmRDaGlsZChzdGFydExhYmVsKTtcbiAgICAgICAgICAgIG5ld0Zvcm0uYXBwZW5kQ2hpbGQoZHVlTGFiZWwpO1xuICAgICAgICAgICAgbmV3Rm9ybS5hcHBlbmRDaGlsZChwcmlvTGFiZWwpO1xuICAgICAgICAgICAgbmV3Rm9ybS5hcHBlbmRDaGlsZChzdGF0TGFiZWwpO1xuICAgICAgICAgICAgbmV3Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG5cbiAgICAgICAgICAgIGFkZEZvcm0gPSBuZXdGb3JtO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFySW5wdXRGaWVsZHMoYXJyKXtcbiAgICAgICAgICAgIGFyci5mb3JFYWNoKGZpZWxkID0+IGZpZWxkLnZhbHVlID0gJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2xlYXJQcm9qZWN0c0Nvbigpe1xuICAgICAgICAgICAgd2hpbGUobWFpbi5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkKSBtYWluLmxhc3RFbGVtZW50Q2hpbGQucmVtb3ZlQ2hpbGQobWFpbi5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlckRyb3Bkb3duKHRoYXQpe1xuICAgICAgICAgICAgaWYodGhhdC5jaGlsZHJlbi5sZW5ndGggPT0gMil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRoYXQuYXBwZW5kQ2hpbGQoaGVhZGVyTmF2KTsgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZURyb3Bkb3duKHRoYXQpe1xuICAgICAgICAgICAgaWYodGhhdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnKSA9PSAnaG92ZXItb24nKSB0aGF0LnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsICd0b2dnbGVkLW9uJyk7XG4gICAgICAgICAgICBlbHNlIGlmKHRoYXQuY2hpbGRyZW4ubGVuZ3RoID09IDIpe1xuICAgICAgICAgICAgICAgIHRoYXQucmVtb3ZlQ2hpbGQoaGVhZGVyTmF2KTtcbiAgICAgICAgICAgICAgICB0aGF0LnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsICdob3Zlci1vZmYnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgdGhhdC5hcHBlbmRDaGlsZChoZWFkZXJOYXYpOyAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEhlYWRlciBGdW5jdGlvbnMgLSBFTkRcblxuXG4gICAgICAgIC8vIE1haW4gRnVuY3Rpb25zIC0gU1RBUlRcbiAgICAgICAgZnVuY3Rpb24gaW5pdE1haW4oKXtcbiAgICAgICAgICAgIGxldCBuZXdNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgICAgICAgICAgbmV3TWFpbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2hvd2luZycsICdwcm9qZWN0LWxpc3QnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG1haW5IZWFkZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtYWluSGVhZGVyV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4taGVhZGVyLXdyYXBwZXInKTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBsZXQgbWFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgICAgIG1haW5UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4tdGl0bGUnKTtcbiAgICAgICAgICAgIG1haW5UaXRsZS50ZXh0Q29udGVudCA9ICdZb3VyIHByb2plY3RzJztcbiAgICAgICAgICAgIG1haW5IZWFkZXJXcmFwcGVyLmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG5cbiAgICAgICAgICAgIGxldCBtYWluU2V0dGluZ3NXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtYWluU2V0dGluZ3NXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbi1zZXR0aW5ncy13cmFwcGVyJyk7XG4gICAgICAgICAgICAgICAgbGV0IG1haW5TZXR0aW5ncyA9IFsnRmlsdGVyIG9uZ29pbmcnLCAnRmlsdGVyIGZpbmlzaGVkJywgJ0ZpbHRlciBkdWUgdG9kYXknLCAnRmlsdGVyIGR1ZSB0aGlzIHdlZWsnLCAnU29ydCBieSBzdGFydCBkYXRlJywgJ1NvcnQgYnkgZHVlIGRhdGUnXTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IHNldHRpbmcgb2YgbWFpblNldHRpbmdzKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNldHRpbmdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ0J0bi5jbGFzc0xpc3QuYWRkKCdzZXR0aW5nLWJ0bicpO1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nQnRuLnRleHRDb250ZW50ID0gc2V0dGluZztcbiAgICAgICAgICAgICAgICAgICAgbWFpblNldHRpbmdzV3JhcHBlci5hcHBlbmRDaGlsZChzZXR0aW5nQnRuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBtYWluSGVhZGVyV3JhcHBlci5hcHBlbmRDaGlsZChtYWluU2V0dGluZ3NXcmFwcGVyKTtcblxuICAgICAgICAgICAgbGV0IHByb2plY3RzQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0c0Nvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4tcHJvamVjdHMtY29uJyk7XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0c1RvKHByb2plY3RzQ29uKTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBuZXdNYWluLmFwcGVuZENoaWxkKG1haW5IZWFkZXJXcmFwcGVyKTtcbiAgICAgICAgICAgIG5ld01haW4uYXBwZW5kQ2hpbGQocHJvamVjdHNDb24pO1xuICAgICAgICAgICAgbWFpbiA9IG5ld01haW47XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3RvcmVzIHRoZSBwcm9qZWN0IHZpZXcgL3Rhc2sgdmlldyBodG1sIGludG8gYSB2YXJpYWJsZSBmb3IgcmVuZGVyaW5nL3VucmVuZGVyaW5nXG4gICAgICAgIGZ1bmN0aW9uIGluaXRNYWluVmlldygpe1xuICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGRldGFpbHNDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRldGFpbHNDb24uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qLWRldGFpbHMtY29uJyk7XG4gICAgICAgICAgICAgICAgbGV0IHRvcENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRvcENvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2otZGV0YWlscy10b3AnKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxlZnRDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdENvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2otZGV0YWlscy1sZWZ0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjLnRleHRDb250ZW50ID0gJ1BsYWNlaG9sZGVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NMYWJlbC5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdENvbi5hcHBlbmRDaGlsZChkZXNjTGFiZWwpOyAgICBcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcmlnaHRDb24gPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICByaWdodENvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2otZGV0YWlscy1yaWdodCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRMYWJlbC50ZXh0Q29udGVudCA9ICdTdGFydCBEYXRlOic7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydC50ZXh0Q29udGVudCA9ICdQbGFjZWhvbGRlcic7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydExhYmVsLmFwcGVuZENoaWxkKHN0YXJ0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGR1ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVlLnRleHRDb250ZW50ID0gJ1BsYWNlaG9sZGVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1ZUxhYmVsLmFwcGVuZENoaWxkKGR1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpby50ZXh0Q29udGVudCA9ICdQbGFjZWhvbGRlcic7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUxhYmVsLmFwcGVuZENoaWxkKHByaW8pO1xuICAgICAgICAgICAgICAgICAgICByaWdodENvbi5hcHBlbmRDaGlsZChzdGFydExhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRDb24uYXBwZW5kQ2hpbGQoZHVlTGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICByaWdodENvbi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICAgICAgICAgICAgICB0b3BDb24uYXBwZW5kQ2hpbGQobGVmdENvbik7XG4gICAgICAgICAgICAgICAgdG9wQ29uLmFwcGVuZENoaWxkKHJpZ2h0Q29uKTtcblxuICAgICAgICAgICAgICAgIGxldCBib3RDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBib3RDb24uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qLWRldGFpbHMtYm90Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGF0dXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0xhYmVsLnRleHRDb250ZW50ID0gJ1N0YXR1czonO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdC50ZXh0Q29udGVudCA9ICdQbGFjZWhvbGRlcic7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0xhYmVsLmFwcGVuZENoaWxkKHN0YXQpO1xuICAgICAgICAgICAgICAgIGJvdENvbi5hcHBlbmRDaGlsZChzdGF0dXNMYWJlbCk7XG5cbiAgICAgICAgICAgIGRldGFpbHNDb24uYXBwZW5kQ2hpbGQodG9wQ29uKTtcbiAgICAgICAgICAgIGRldGFpbHNDb24uYXBwZW5kQ2hpbGQoYm90Q29uKTsgICAgXG4gICAgICAgICAgICAvLyAvLyBkZXRhaWxzQ29uLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpOyAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG5cbiAgICAgICAgIFxuICAgICAgICAgICAgY3VycmVudFByb2ouc2V0RGV0YWlscyA9IGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgICAgIC8vIHRpdGxlLnRleHRDb250ZW50ID0gY3VycmVudFByb2oudGl0bGU7XG4gICAgICAgICAgICAgICAgZGVzYy50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIHN0YXJ0LnRleHRDb250ZW50ID0gY3VycmVudFByb2ouc3RhcnREYXRlO1xuICAgICAgICAgICAgICAgIGR1ZS50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qLmR1ZURhdGU7XG4gICAgICAgICAgICAgICAgcHJpby50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qLnByaW9yaXR5O1xuICAgICAgICAgICAgICAgIHN0YXQudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvai5zdGF0dXM7XG4gICAgICAgICAgICAgICAgdGFza3NDb24uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRUYXNrLnNldERldGFpbHMgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGRlc2MudGV4dENvbnRlbnQgPSBjdXJyZW50VGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICBzdGFydC50ZXh0Q29udGVudCA9IGN1cnJlbnRUYXNrLnN0YXJ0RGF0ZTtcbiAgICAgICAgICAgICAgICBkdWUudGV4dENvbnRlbnQgPSBjdXJyZW50VGFzay5kdWVEYXRlO1xuICAgICAgICAgICAgICAgIHByaW8udGV4dENvbnRlbnQgPSBjdXJyZW50VGFzay5wcmlvcml0eTtcbiAgICAgICAgICAgICAgICBzdGF0LnRleHRDb250ZW50ID0gY3VycmVudFRhc2suc3RhdHVzO1xuICAgICAgICAgICAgICAgIHRhc2tzQ29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHRhc2tzQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgdGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgdGFza3Muc2V0QXR0cmlidXRlKCdpZCcsICd2aWV3LXRhc2tzLXVsJyk7XG4gICAgICAgICAgICB0YXNrc0Nvbi5hcHBlbmRDaGlsZCh0YXNrcylcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qLnRhc2tzQ29uID0gdGFza3M7XG5cbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0Nvbik7XG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRhc2tzQ29uKTtcbiAgICAgICAgICAgIG1haW5WaWV3UHJvaiA9IHdyYXBwZXI7XG4gICAgICAgICAgICBtYWluVmlld1Byb2ouc2V0QXR0cmlidXRlKCdpZCcsICdtYWluLXZpZXctcHJvaicpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXF1ZXN0cyB0byB2aWV3IHByb2plY3QvdGFza1xuICAgICAgICBmdW5jdGlvbiByZXF1ZXN0VGFza1ZpZXcoKXtcbiAgICAgICAgICAgIHB1YlN1Yi5wdWJsaXNoKCd2aWV3VGFzaycpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlcXVlc3RQcm9qZWN0Vmlldygpe1xuICAgICAgICAgICAgcHViU3ViLnB1Ymxpc2goJ3ZpZXdQcm9qZWN0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB2aWV3UHJvamVjdCgpe1xuICAgICAgICAgICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2hvd2luZycsICdwcm9qZWN0Jyk7XG4gICAgICAgICAgICBzY3JvbGxhYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIGxvYWRIZWFkZXIoMSk7XG5cbiAgICAgICAgICAgIC8vU2V0IGRldGFpbHMgaW4gcHJvamVjdCB2aWV3XG4gICAgICAgICAgICBjdXJyZW50UHJvai5zZXREZXRhaWxzKCk7XG5cbiAgICAgICAgICAgIC8vQ2xlYXIgdGFza3MgZnJvbSBwcmV2aW91c2x5IHZpZXdlZCBwcm9qZWN0XG4gICAgICAgICAgICBpZihjdXJyZW50UHJvai50YXNrc0Nvbi5jaGlsZHJlbi5sZW5ndGggIT0gMCl7XG4gICAgICAgICAgICAgICAgd2hpbGUoY3VycmVudFByb2oudGFza3NDb24uZmlyc3RFbGVtZW50Q2hpbGQpIGN1cnJlbnRQcm9qLnRhc2tzQ29uLnJlbW92ZUNoaWxkKGN1cnJlbnRQcm9qLnRhc2tzQ29uLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vU2V0IHRhc2tzLiBBZGQgYW4gbGkgdG8gdWwodGFza3MpIGZvciBlYWNoIHRhc2sgcHJlc2VudCBvbiB0aGUgcHJvamVjdFxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qLnRhc2tzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIEFkZCBhIHVsIGhlYWRpbmcgXG4gICAgICAgICAgICAgICAgaWYoaSA9PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVsSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgICAgIHVsSGVhZGluZy50ZXh0Q29udGVudCA9ICdUQVNLUydcbiAgICAgICAgICAgICAgICAgICAgdWxIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbS1ib3JkZXJlZCcpXG4gICAgICAgICAgICAgICAgICAgIHVsSGVhZGluZy5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgICAgICAgICAgICAgdWxIZWFkaW5nLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZGVyJztcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFByb2oudGFza3NDb24uYXBwZW5kQ2hpbGQodWxIZWFkaW5nKTtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGxldCBzdG9yZWRUYXNrID0gY3VycmVudFByb2oudGFza3NbaV07XG4gICAgICAgICAgICAgICAgbGV0IG5ld1Rhc2sgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gc3RvcmVkVGFzay50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV4cGFuZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBleHBhbmRJY29uID0gZ2V0SW1hZ2UoZXhwYW5kVVJMKTtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kQnRuLmFwcGVuZENoaWxkKGV4cGFuZEljb24pO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoZXhwYW5kQnRuKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoJ3ZpZXctdGFzay1saScpO1xuICAgICAgICAgICAgICAgIC8vQWRkIGJvdHRvbSBib3JkZXJzIHRvIGVhY2ggdGFzayBleGNlcHQgdGhlIGxhc3RcbiAgICAgICAgICAgICAgICBpZihpIDwgY3VycmVudFByb2oudGFza3MubGVuZ3RoLTEpIG5ld1Rhc2suY2xhc3NMaXN0LmFkZCgnYm90dG9tLWJvcmRlcmVkJyk7XG4gICAgICAgICAgICAgICAgbmV3VGFzay50ZXh0Q29udGVudCA9IHN0b3JlZFRhc2sudGl0bGU7XG4gICAgICAgICAgICAgICAgbmV3VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGN1cnJlbnRUYXNrLCBzdG9yZWRUYXNrKTtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFRhc2tWaWV3KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2oudGFza3NDb24uYXBwZW5kQ2hpbGQobmV3VGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpblZpZXdQcm9qKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldEltYWdlKGltYWdlVVJMKXtcbiAgICAgICAgICAgIGxldCBuZXdJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIG5ld0ltZy5zcmM9aW1hZ2VVUkw7XG4gICAgICAgICAgICByZXR1cm4gbmV3SW1nO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdmlld1Rhc2soKXtcbiAgICAgICAgICAgIC8vIG1haW4uc2V0QXR0cmlidXRlKCdkYXRhLXNob3dpbmcnLCAndGFzaycpO1xuICAgICAgICAgICAgLy8gY3VycmVudFRhc2suc2V0RGV0YWlscygpO1xuICAgICAgICAgICAgLy8gLy8gd2hpbGUoY3VycmVudFByb2oudGFza3NDb24uZmlyc3RFbGVtZW50Q2hpbGQpIGN1cnJlbnRQcm9qLnRhc2tzQ29uLnJlbW92ZUNoaWxkKGN1cnJlbnRQcm9qLnRhc2tzQ29uLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRIZWFkZXIobnVtKXtcbiAgICAgICAgICAgIGxldCBsZWZ0SGVhZGVyID0gaGVhZGVyLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgbGV0IGhlYWRlclRpdGxlID0gbGVmdEhlYWRlci5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgbGV0IHJpZ2h0SGVhZGVyID0gbGVmdEhlYWRlci5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBsZXQgcHJvamVjdE5hbWVDb24gPSByaWdodEhlYWRlci5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lQ29uLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgbGV0IGhlYWRlckFkZENvbiA9IHJpZ2h0SGVhZGVyLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qLnRpdGxlO1xuXG4gICAgICAgICAgICAvL0RlZmF1bHQgaGVhZGVyXG4gICAgICAgICAgICBpZihudW0gPT0gMCl7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWVDb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBoZWFkZXJUaXRsZS5zdHlsZS5mb250U2l6ZSA9ICcyZW0nO1xuICAgICAgICAgICAgICAgIGhlYWRlckFkZENvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA1NDBweCknKS5tYXRjaGVzKSBoZWFkZXJUaXRsZS5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgLy9DdXN0b20gaGVhZGVyIGZvciB2aWV3aW5nIHByb2plY3QgJiB0YXNrLiBcbiAgICAgICAgICAgIGVsc2UgaWYgKG51bSA9PSAxKXtcbiAgICAgICAgICAgICAgICBhdHRhY2hCYWNrQnRuKCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWVDb24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgICAgICBoZWFkZXJUaXRsZS5zdHlsZS5mb250U2l6ZSA9ICcwcHgnO1xuICAgICAgICAgICAgICAgIGhlYWRlckFkZENvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobnVtID09IDIpe1xuICAgICAgICAgICAgICAgIGF0dGFjaEJhY2tCdG4oKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZUNvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgICAgIGhlYWRlclRpdGxlLnN0eWxlLmZvbnRTaXplID0gJzBweCc7XG4gICAgICAgICAgICAgICAgaGVhZGVyQWRkQ29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgQ3JlYXRlIG5ldyAke2NhcGl0YWxpemUob2JqVG9DcmVhdGUudHlwZSl9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyKXtcbiAgICAgICAgICAgIHN0ciA9IFsuLi4gc3RyXTtcbiAgICAgICAgICAgIHN0clswXSA9IHN0clswXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHN0ci5qb2luKCcnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIEF0dGFjaGVzIGEgcmV0dXJuIGJ1dHRvblxuICAgICAgICBmdW5jdGlvbiBhdHRhY2hCYWNrQnRuKCl7XG4gICAgICAgICAgICBsZXQgd3JhcHBlciA9IGhlYWRlci5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIGxldCBiYWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgYmFja0J0bi5jbGFzc0xpc3QuYWRkKCdhbmNob3ItYnRuJyk7XG4gICAgICAgICAgICBiYWNrQnRuLnRleHRDb250ZW50ID0gJ0JhY2snO1xuXG4gICAgICAgICAgICBiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlbW92ZUJhY2tCdG4oKTtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub1ByZXZpb3VzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYmFja0J0bik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW1vdmVCYWNrQnRuKCl7XG4gICAgICAgICAgICBsZXQgYmFja0J0biA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcuYW5jaG9yLWJ0bicpO1xuICAgICAgICAgICAgYmFja0J0bi5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGJhY2tCdG4pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9QcmV2aW91cygpe1xuICAgICAgICAgICAgaWYoaXNWaWV3aW5nUHJvamVjdCgpKXtcbiAgICAgICAgICAgICAgICByZXR1cm5Ub01haW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoaXNWaWV3aW5nVGFzaygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9Qcm9qZWN0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuVG9NYWluKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAvL1N1YiBmdW5jdGlvbnNcbiAgICAgICAgZnVuY3Rpb24gcmV0dXJuVG9NYWluKCl7XG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGJvZHkubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgICAgICBsb2FkSGVhZGVyKDApO1xuICAgICAgICAgICAgc2Nyb2xsYWJsZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZXR1cm5Ub1Byb2plY3QoKXtcbiAgICAgICAgICAgIHJlcXVlc3RQcm9qZWN0VmlldygpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaXNWaWV3aW5nVGFzaygpe1xuICAgICAgICAgICAgcmV0dXJuIG1haW4uZ2V0QXR0cmlidXRlKCdkYXRhLXNob3dpbmcnKSA9PSAndGFzayc7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNWaWV3aW5nUHJvamVjdCgpeyAgICBcbiAgICAgICAgICAgIHJldHVybiBtYWluLmdldEF0dHJpYnV0ZSgnZGF0YS1zaG93aW5nJykgPT0gJ3Byb2plY3QnO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbGFibGUoYm9vbCl7XG4gICAgICAgICAgICAoYm9vbCA9PSB0cnVlKSA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJyA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nOyAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0c1RvKHBhcmVudCl7XG4gICAgICAgICAgICBmb3IobGV0IHByb2plY3Qgb2YgUHJvamVjdHMubGlzdCl7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qLWNvbicpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0VGhpcyhjb250YWluZXIsIHByb2plY3QpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgdmlld0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHZpZXdCdG4uY2xhc3NMaXN0LmFkZCgncHJvai12aWV3LWJ0bicpO1xuICAgICAgICAgICAgICAgIHZpZXdCdG4udGV4dENvbnRlbnQgPSAnVmlldyBwcm9qZWN0IGRldGFpbHMnO1xuICAgICAgICAgICAgICAgIHZpZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY3VycmVudFByb2osIHByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0UHJvamVjdFZpZXcoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWV3QnRuKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNlbGVjdFRoaXMoc2VsZWN0ZWRFbGUsIHNlbGVjdGVkUHJvail7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHNlbGVjdGVkRWxlID09IGxhc3RDb25TZWxlY3RlZCl7XG4gICAgICAgICAgICAgICAgbGFzdFByb2pTZWxlY3RlZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGFzdENvblNlbGVjdGVkID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEVsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgIGVuYWJsZUFkZFRhc2soZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBVbnNlbGVjdGVkICR7c2VsZWN0ZWRFbGV9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7IFxuICAgICAgICAgICAgICAgIGxldCBvdGhlckNvbnMgPSBbLi4uIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qLWNvbicpXS5maWx0ZXIoY29uID0+IGNvbiAhPSBzZWxlY3RlZEVsZSk7XG4gICAgICAgICAgICAgICAgb3RoZXJDb25zLmZvckVhY2goY29uID0+IGNvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnKTtcbiAgICAgICAgICAgICAgICBsYXN0UHJvalNlbGVjdGVkID0gc2VsZWN0ZWRQcm9qO1xuICAgICAgICAgICAgICAgIGxhc3RDb25TZWxlY3RlZCA9IHNlbGVjdGVkRWxlO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkRWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgICAgIGVuYWJsZUFkZFRhc2sodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFNlbGVjdGVkICR7c2VsZWN0ZWRFbGV9YCl9O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZW5hYmxlQWRkVGFzayhib29sKXtcbiAgICAgICAgICAgIGlmKGJvb2wgPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgdGFza0Nvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgdGFza0Nvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE1haW4gRnVuY3Rpb25zIC0gRU5EXG5cbiAgICAgICAgXG5cbiAgICAgICAgLy8gRm9vdGVyIEZ1bmN0aW9ucyAtIFNUQVJUXG4gICAgICAgIGZ1bmN0aW9uIGluaXRGb290ZXIoKXtcbiAgICAgICAgICAgIGxldCBuZXdGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICAgICAgICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgdGFnLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyLXRhZycpO1xuICAgICAgICAgICAgdGFnLnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCDCqSBWaXZleWQgMjAyMSc7XG4gICAgICAgICAgICBuZXdGb290ZXIuYXBwZW5kQ2hpbGQodGFnKTtcbiAgICAgICAgICAgIGZvb3RlciA9IG5ld0Zvb3RlcjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGb290ZXIgRnVuY3Rpb25zIC0gRU5EXG5cblxuICAgICAgICBmdW5jdGlvbiB1bnJlbmRlckJvZHkoKXtcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobWFpbik7XG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGZvb3Rlcik7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNpbXVsYXRlLFxuICAgIH1cbn0pKCk7XG5cbkFwcC5zaW11bGF0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9