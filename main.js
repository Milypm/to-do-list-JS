/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  width: 100%;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: 'Quicksand', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\r\\n}\\r\\n\\r\\n.main-header {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  padding: 20px 0;\\r\\n  background: #4e9a6a;\\r\\n  color: #fff;\\r\\n  font-size: 20px;\\r\\n  height: 100px;\\r\\n}\\r\\n\\r\\n.main-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: 25% 37.5% 37.5%;\\r\\n  width: 100%;\\r\\n  height: calc(100vh - 100px);\\r\\n}\\r\\n\\r\\n.column-view {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background: #d0ecda;\\r\\n  margin: 0 2.5px 0 2.5px;\\r\\n  padding: 25px 0 25px 25px;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.mylists-maincontainer {\\r\\n  width: 90%;\\r\\n  padding-bottom: 30px;\\r\\n  border-bottom: 3px solid #fff;\\r\\n}\\r\\n\\r\\n.mylists-title-btn {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.column-view h3 {\\r\\n  font-size: 20px;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.fa-plus {\\r\\n  font-size: 20px;\\r\\n  padding: 5px;\\r\\n  margin: 0;\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\n.plus-btn {\\r\\n  border: none;\\r\\n  background: transparent;\\r\\n  padding: 0 4px 0 4px;\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\n.plus-btn:hover {\\r\\n  background: #96ccaa;\\r\\n}\\r\\n\\r\\n.column-view form {\\r\\n  width: 90%;\\r\\n}\\r\\n\\r\\n.new-project-btn {\\r\\n  margin-top: 10px;\\r\\n  margin-right: 10px;\\r\\n  padding: 5px 10px;\\r\\n  border: none;\\r\\n  border-radius: 10px;\\r\\n  background: #70b088;\\r\\n  color: #fff;\\r\\n  font-size: 15px;\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n.new-project-btn:hover {\\r\\n  opacity: 0.7;\\r\\n}\\r\\n\\r\\n.project-form {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.fa-list-alt {\\r\\n  position: absolute;\\r\\n  left: 15px;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.fa-pen {\\r\\n  position: absolute;\\r\\n  left: 190px;\\r\\n  font-size: 13px;\\r\\n}\\r\\n\\r\\n.fa-trash {\\r\\n  position: absolute;\\r\\n  left: 215px;\\r\\n  font-size: 13px;\\r\\n}\\r\\n\\r\\n.fa-pen:hover,\\r\\n.fa-trash:hover {\\r\\n  opacity: 0.5;\\r\\n}\\r\\n\\r\\n.default-list-btn {\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  width: 265px;\\r\\n  border: none;\\r\\n  border-radius: 10px;\\r\\n  background: transparent;\\r\\n  text-align: start;\\r\\n  padding: 8px 0 8px 45px;\\r\\n  font-size: 18px;\\r\\n  margin-top: 20px;\\r\\n}\\r\\n\\r\\n.default-list-btn:hover {\\r\\n  background: #96ccaa;\\r\\n}\\r\\n\\r\\n.default-list-btn span {\\r\\n  display: flex;\\r\\n  width: 150px;\\r\\n}\\r\\n\\r\\n.myItems-title-btn {\\r\\n  display: flex;\\r\\n  width: 90%;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.myItems-title-btn h3 {\\r\\n  margin: auto 0;\\r\\n}\\r\\n\\r\\n#add-item-btn {\\r\\n  border: none;\\r\\n  background: transparent;\\r\\n  border-bottom: 1.5px solid;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.plus-btn-sm {\\r\\n  font-size: 15px;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n#add-item-btn:hover {\\r\\n  border: none;\\r\\n  border-radius: 10px;\\r\\n  padding: 0 10px 0 5px;\\r\\n  background: #96ccaa;\\r\\n}\\r\\n\\r\\n#add-item-btn span {\\r\\n  margin-left: 3px;\\r\\n  font-size: 16px;\\r\\n  font-weight: 700;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-JS/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-JS/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://to-do-list-JS/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-JS/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/js/dom/leftView.js":
/*!********************************!*\
  !*** ./src/js/dom/leftView.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logics_buildProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logics/buildProject */ \"./src/js/logics/buildProject.js\");\n\r\n\r\nconst setLeftView = () => {\r\n  const leftView = document.createElement('div');\r\n  leftView.classList.add('column-view');\r\n\r\n  const myListsMainContainer = document.createElement('div');\r\n  myListsMainContainer.classList.add('mylists-maincontainer');\r\n\r\n  const myListsTitleBtn = document.createElement('div');\r\n  myListsTitleBtn.classList.add('mylists-title-btn');\r\n\r\n  const myListsTitle = document.createElement('h3');\r\n  myListsTitle.textContent = 'My Lists';\r\n\r\n  const plusBtn = document.createElement('i');\r\n  plusBtn.classList.add('fas');\r\n  plusBtn.classList.add('fa-plus');\r\n\r\n  const myListsBtn = document.createElement('button');\r\n  myListsBtn.classList.add('plus-btn');\r\n  myListsBtn.setAttribute('id', 'add-project-btn');\r\n  myListsBtn.addEventListener('click', function() {\r\n    document.querySelector('#id-project-form').style.display = 'block';\r\n  });\r\n\r\n  const myListsContainer = document.createElement('div');\r\n  myListsContainer.classList.add('mylists-container');\r\n\r\n  const listIcon = document.createElement('i');\r\n  listIcon.classList.add('fas');\r\n  listIcon.classList.add('fa-list-alt');\r\n\r\n  const defaultListText = document.createElement('span');\r\n  defaultListText.textContent = 'General List';\r\n\r\n  const defaultList = document.createElement('button');\r\n  defaultList.classList.add('default-list-btn');\r\n  \r\n  const newProjectInput = document.createElement('input');\r\n  newProjectInput.classList.add('input-formProject');\r\n  newProjectInput.type = 'text';\r\n\r\n  const newProjectSaveBtn = document.createElement('button');\r\n  newProjectSaveBtn.classList.add('new-project-btn');\r\n  newProjectSaveBtn.classList.add('form-save-btn');\r\n  newProjectSaveBtn.setAttribute('id', 'project-save-btn');\r\n  newProjectSaveBtn.textContent = 'Save';\r\n\r\n  const newProjectCancelBtn = document.createElement('button');\r\n  newProjectCancelBtn.classList.add('new-project-btn');\r\n  newProjectCancelBtn.classList.add('form-cancel-btn');\r\n  newProjectCancelBtn.setAttribute('id', 'project-cancel-btn');\r\n  newProjectCancelBtn.textContent = 'Cancel';\r\n\r\n  const newProjectForm = document.createElement('form');\r\n  newProjectForm.classList.add('project-form');\r\n  newProjectForm.setAttribute('id', 'id-project-form');\r\n  newProjectForm.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('form-save-btn')) {\r\n      e.preventDefault();\r\n      const name = document.querySelector('.input-formProject').value;\r\n      if (name === '') {\r\n        alert('Please fill the name field.');\r\n      } else {\r\n        const newProject = (0,_logics_buildProject__WEBPACK_IMPORTED_MODULE_0__.default)(name);\r\n        newProject.addProject();\r\n        newProjectInput.value = '';\r\n        document.querySelector('#id-project-form').style.display = 'none';\r\n      }\r\n    } else if (e.target.classList.contains('form-cancel-btn')) {\r\n      document.querySelector('#id-project-form').style.display = 'none';\r\n    }\r\n  });\r\n\r\n  myListsBtn.appendChild(plusBtn);\r\n  myListsTitleBtn.appendChild(myListsTitle);\r\n  myListsTitleBtn.appendChild(myListsBtn);\r\n  newProjectForm.appendChild(newProjectInput);\r\n  newProjectForm.appendChild(newProjectSaveBtn);\r\n  newProjectForm.appendChild(newProjectCancelBtn);\r\n  myListsMainContainer.appendChild(myListsTitleBtn);\r\n  myListsMainContainer.appendChild(newProjectForm);\r\n  myListsMainContainer.appendChild(myListsContainer);\r\n  defaultList.appendChild(listIcon);\r\n  defaultList.appendChild(defaultListText);\r\n  leftView.appendChild(myListsMainContainer);\r\n  leftView.appendChild(defaultList);\r\n\r\n  return leftView;\r\n};\r\n\r\n\r\n// const showLeftView = () => {\r\n//   const main = document.getElementById('main');\r\n//   main.textContent = '';\r\n//   main.appendChild(setLeftView());\r\n// };\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setLeftView);\n\n//# sourceURL=webpack://to-do-list-JS/./src/js/dom/leftView.js?");

/***/ }),

/***/ "./src/js/dom/middleView.js":
/*!**********************************!*\
  !*** ./src/js/dom/middleView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setMiddleView = () => {\r\n  const middleView = document.createElement('div');\r\n  middleView.classList.add('column-view');\r\n\r\n  const myItemsTitleBtn = document.createElement('div');\r\n  myItemsTitleBtn.classList.add('myItems-title-btn');\r\n\r\n  const middleViewTitle = document.createElement('h3');\r\n  middleViewTitle.textContent = 'General List';\r\n\r\n  const plusBtn = document.createElement('i');\r\n  plusBtn.classList.add('fas');\r\n  plusBtn.classList.add('fa-plus');\r\n  plusBtn.classList.add('plus-btn-sm');\r\n\r\n  const addItemTextBtn = document.createElement('span');\r\n  addItemTextBtn.textContent = 'Add Task';\r\n\r\n  const myItemsBtn = document.createElement('button');\r\n  myItemsBtn.setAttribute('id', 'add-item-btn');\r\n\r\n  myItemsBtn.appendChild(plusBtn);\r\n  myItemsBtn.appendChild(addItemTextBtn);\r\n  myItemsTitleBtn.appendChild(middleViewTitle);\r\n  myItemsTitleBtn.appendChild(myItemsBtn);\r\n  middleView.appendChild(myItemsTitleBtn);\r\n\r\n  return middleView;\r\n};\r\n\r\n// const showMiddleView = () => {\r\n//   const main = document.getElementById('main');\r\n//   main.textContent = '';\r\n//   main.appendChild(setMiddleView());\r\n// };\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setMiddleView);\n\n//# sourceURL=webpack://to-do-list-JS/./src/js/dom/middleView.js?");

/***/ }),

/***/ "./src/js/dom/rightView.js":
/*!*********************************!*\
  !*** ./src/js/dom/rightView.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setRightView = () => {\r\n  const rightView = document.createElement('div');\r\n  rightView.classList.add('column-view');\r\n\r\n  const rightViewTitle = document.createElement('h3');\r\n  rightViewTitle.textContent = 'Item List Details';\r\n\r\n  rightView.appendChild(rightViewTitle);\r\n\r\n  return rightView;\r\n};\r\n\r\n// const showRightView = () => {\r\n//   const main = document.getElementById('main');\r\n//   main.textContent = '';\r\n//   main.appendChild(setRightView());\r\n// };\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setRightView);\n\n//# sourceURL=webpack://to-do-list-JS/./src/js/dom/rightView.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_leftView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/leftView */ \"./src/js/dom/leftView.js\");\n/* harmony import */ var _dom_middleView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/middleView */ \"./src/js/dom/middleView.js\");\n/* harmony import */ var _dom_rightView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/rightView */ \"./src/js/dom/rightView.js\");\n\r\n\r\n\r\n\r\n__webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\r\n\r\nconst setHeader = () => {\r\n  const header = document.createElement('header');\r\n  header.classList.add('main-header');\r\n\r\n  const headerTitle = document.createElement('h1');\r\n  headerTitle.classList.add('header-title');\r\n  headerTitle.textContent = 'ToDo List';\r\n\r\n  header.appendChild(headerTitle);\r\n\r\n  return header;\r\n};\r\n\r\nconst setMain = () => {\r\n  const main = document.createElement('main');\r\n  main.classList.add('main-container');\r\n  main.setAttribute('id', 'main');\r\n\r\n  main.appendChild((0,_dom_leftView__WEBPACK_IMPORTED_MODULE_0__.default)());\r\n  main.appendChild((0,_dom_middleView__WEBPACK_IMPORTED_MODULE_1__.default)());\r\n  main.appendChild((0,_dom_rightView__WEBPACK_IMPORTED_MODULE_2__.default)());\r\n\r\n  return main;\r\n};\r\n\r\nconst startProject = () => {\r\n  const content = document.getElementById('content');\r\n  content.appendChild(setHeader());\r\n  content.appendChild(setMain());\r\n};\r\n\r\nstartProject();\n\n//# sourceURL=webpack://to-do-list-JS/./src/js/index.js?");

/***/ }),

/***/ "./src/js/logics/buildProject.js":
/*!***************************************!*\
  !*** ./src/js/logics/buildProject.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst buildProject = (name) => {\r\n  let projects;\r\n  let projectObject = {\r\n    'name': '',\r\n    'content': []\r\n  }\r\n  let defaultProject = {\r\n    'name': 'General List',\r\n    'content': []\r\n  }\r\n\r\n  const projectName = name;\r\n\r\n  const getProjects = () => {\r\n    const storedProjects = localStorage.getItem('projects');\r\n    if (storedProjects === null || storedProjects[1] === null) {\r\n      projects = [defaultProject];\r\n    } else {\r\n      projects = JSON.parse(localStorage.getItem('projects'));\r\n    }\r\n    return projects;\r\n  };\r\n\r\n  const addProject = () => {\r\n    const projects = getProjects();\r\n    projectObject['name'] = projectName;\r\n    projects.push(projectObject);\r\n    localStorage.setItem('projects', JSON.stringify(projects));\r\n  };\r\n\r\n  return { projects, getProjects, addProject };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildProject);\n\n//# sourceURL=webpack://to-do-list-JS/./src/js/logics/buildProject.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;