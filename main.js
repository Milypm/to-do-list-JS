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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  width: 100%;\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Quicksand', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n}\\n\\n.main-header {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 20px 0;\\n  background: #4e9a6a;\\n  color: #fff;\\n  font-size: 20px;\\n  height: 100px;\\n}\\n\\n.main-container {\\n  display: grid;\\n  grid-template-columns: 25% 37.5% 37.5%;\\n  width: 100%;\\n  height: calc(100vh - 100px);\\n}\\n\\n.column-view {\\n  display: flex;\\n  flex-direction: column;\\n  background: #d0ecda;\\n  margin: 0 2.5px 0 2.5px;\\n  padding: 25px 0 25px 25px;\\n  height: 100%;\\n}\\n\\n.mylists-maincontainer {\\n  width: 90%;\\n  padding-bottom: 30px;\\n  border-bottom: 3px solid #fff;\\n}\\n\\n.mylists-title-btn {\\n  width: 100%;\\n  height: 40px;\\n  display: flex;\\n  justify-content: space-between;\\n  margin-bottom: 10px;\\n}\\n\\n.column-view h3 {\\n  font-size: 20px;\\n  font-weight: 600;\\n  margin: auto 0;\\n}\\n\\n.fa-plus {\\n  font-size: 20px;\\n  padding: 5px 7px;\\n  margin: 0;\\n  border-radius: 50%;\\n  z-index: 1;\\n}\\n\\n.plus-btn {\\n  border: none;\\n  background: transparent;\\n  padding: 0;\\n  border-radius: 50%;\\n}\\n\\n.fa-plus:hover {\\n  background: #96ccaa;\\n}\\n\\n.column-view form {\\n  width: 90%;\\n}\\n\\n.new-project-btn {\\n  margin-top: 10px;\\n  margin-right: 10px;\\n  padding: 5px 10px;\\n  border: none;\\n  border-radius: 10px;\\n  background: #70b088;\\n  color: #fff;\\n  font-size: 15px;\\n  font-weight: 500;\\n}\\n\\n.new-project-btn:hover {\\n  opacity: 0.7;\\n}\\n\\n.project-form {\\n  display: none;\\n}\\n\\n.fa-list-alt {\\n  position: absolute;\\n  left: 15px;\\n  font-size: 20px;\\n}\\n\\n.fa-pen {\\n  position: absolute;\\n  left: 190px;\\n  font-size: 13px;\\n}\\n\\n.fa-trash {\\n  position: absolute;\\n  left: 215px;\\n  font-size: 13px;\\n}\\n\\n.fa-pen:hover,\\n.fa-trash:hover {\\n  opacity: 0.5;\\n}\\n\\n.projectList-btn {\\n  position: relative;\\n  display: flex;\\n  align-items: center;\\n  width: 265px;\\n  border: none;\\n  border-radius: 10px;\\n  background: transparent;\\n  text-align: start;\\n  padding: 8px 0 8px 45px;\\n  font-size: 18px;\\n}\\n\\n.projectList-btn:hover {\\n  background: #96ccaa;\\n}\\n\\n.projectList-btn span {\\n  display: flex;\\n  width: 150px;\\n}\\n\\n.mylists-container {\\n  width: 100%;\\n  height: max-content;\\n  margin-top: 25px;\\n  border: 2px solid red;\\n}\\n\\n.default-list-btn {\\n  margin-top: 20px;\\n}\\n\\n.myTasks-title-btn {\\n  display: flex;\\n  width: 90%;\\n  height: 40px;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.myTasks-title-btn h3 {\\n  margin: auto 0;\\n}\\n\\n#add-task-btn {\\n  border: none;\\n  background: transparent;\\n  border-bottom: 1.5px solid;\\n  padding: 0;\\n}\\n\\n.plus-btn-sm {\\n  font-size: 15px;\\n  margin: 0;\\n}\\n\\n#add-task-btn:hover {\\n  border: none;\\n  border-radius: 10px;\\n  padding: 5px 10px 6px 5px;\\n  background: #96ccaa;\\n}\\n\\n#add-task-btn span {\\n  margin-left: 3px;\\n  font-size: 16px;\\n  font-weight: 700;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-JS/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logics_projectsList_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logics/projectsList-Store */ \"./src/js/logics/projectsList-Store.js\");\n/* harmony import */ var _projectsList_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectsList-UI */ \"./src/js/dom/projectsList-UI.js\");\n/* harmony import */ var _middleView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middleView */ \"./src/js/dom/middleView.js\");\n\n\n\n\nconst setLeftView = () => {\n  const leftView = document.createElement('div');\n  leftView.classList.add('column-view');\n  const myListsMainContainer = document.createElement('div');\n  myListsMainContainer.classList.add('mylists-maincontainer');\n  const myListsTitleBtn = document.createElement('div');\n  myListsTitleBtn.classList.add('mylists-title-btn');\n  const myListsTitle = document.createElement('h3');\n  myListsTitle.textContent = 'My Lists';\n  const plusBtn = document.createElement('i');\n  plusBtn.classList.add('fas');\n  plusBtn.classList.add('fa-plus');\n  const myListsBtn = document.createElement('button');\n  myListsBtn.classList.add('plus-btn');\n  myListsBtn.setAttribute('id', 'add-project-btn');\n  myListsBtn.addEventListener('click', function() {\n    document.querySelector('#id-project-form').style.display = 'block';\n  });\n\n  const myListsContainer = document.createElement('div');\n  myListsContainer.classList.add('mylists-container');\n\n  const listIcon = document.createElement('i');\n  listIcon.classList.add('fas');\n  listIcon.classList.add('fa-list-alt');\n  const defaultListText = document.createElement('span');\n  defaultListText.textContent = 'General List';\n  const defaultList = document.createElement('button');\n  defaultList.classList.add('projectList-btn');\n  defaultList.classList.add('default-list-btn');\n  const newProjectInput = document.createElement('input');\n  newProjectInput.classList.add('input-formProject');\n  newProjectInput.type = 'text';\n  const newProjectSaveBtn = document.createElement('button');\n  newProjectSaveBtn.classList.add('new-project-btn');\n  newProjectSaveBtn.classList.add('form-save-btn');\n  newProjectSaveBtn.setAttribute('id', 'project-save-btn');\n  newProjectSaveBtn.textContent = 'Save';\n  const newProjectCancelBtn = document.createElement('button');\n  newProjectCancelBtn.classList.add('new-project-btn');\n  newProjectCancelBtn.classList.add('form-cancel-btn');\n  newProjectCancelBtn.setAttribute('id', 'project-cancel-btn');\n  newProjectCancelBtn.textContent = 'Cancel';\n  const newProjectForm = document.createElement('form');\n  newProjectForm.classList.add('project-form');\n  newProjectForm.setAttribute('id', 'id-project-form');\n  newProjectForm.addEventListener('click', (e) => {\n    if (e.target.classList.contains('form-save-btn')) {\n      e.preventDefault();\n      const name = document.querySelector('.input-formProject').value;\n      if (name === '') {\n        alert('Please fill the name field.');\n      } else {\n        _logics_projectsList_Store__WEBPACK_IMPORTED_MODULE_0__.default.addProject(name);\n        addProjectToProjects(name); //Passing a string to the addProjectToProjects method\n        _projectsList_UI__WEBPACK_IMPORTED_MODULE_1__.default.clearFields();\n        document.querySelector('#id-project-form').style.display = 'none';\n      }\n    } else if (e.target.classList.contains('form-cancel-btn')) {\n      document.querySelector('#id-project-form').style.display = 'none';\n    }\n  });\n\n  const displayProjects = () => {\n    const projects = _logics_projectsList_Store__WEBPACK_IMPORTED_MODULE_0__.default.getProjects();\n    projects.shift();\n    projects.forEach((projectObj) => addProjectToProjects(projectObj));\n  };\n\n  const addProjectToProjects = (project) => {\n    let myProjectName;\n    if (typeof project === 'string') {\n      myProjectName = project;\n    } else {\n      myProjectName = project.name;\n    }\n\n    const listItem = document.createElement('button');\n    listItem.classList.add('projectList-btn');\n\n    const listIcon = document.createElement('i');\n    listIcon.classList.add('fas');\n    listIcon.classList.add('fa-list-alt');\n\n    const name = document.createElement('span');\n    name.textContent = `${myProjectName}`;\n\n    const editIcon = document.createElement('i');\n    editIcon.classList.add('fas');\n    editIcon.classList.add('fa-pen');\n\n    const deleteIcon = document.createElement('i');\n    deleteIcon.classList.add('fas');\n    deleteIcon.classList.add('fa-trash');\n    // listItem.addEventListener('click', function() {\n\n    // });\n    listItem.appendChild(listIcon);\n    listItem.appendChild(name);\n    listItem.appendChild(editIcon);\n    listItem.appendChild(deleteIcon);\n    myListsContainer.appendChild(listItem);\n\n    listItem.addEventListener('click', function () {\n      const projectName = listItem.textContent;\n      console.log(projectName);\n      const projects = _logics_projectsList_Store__WEBPACK_IMPORTED_MODULE_0__.default.getProjects();\n      const selectedProject = projects.forEach((project) => {\n        if (project.name === projectName) {\n          console.log(project.name === projectName);\n          console.log(project);\n          return project.name;\n        }\n      });\n      console.log(selectedProject);\n      _middleView__WEBPACK_IMPORTED_MODULE_2__.default.displayProjectDetails(selectedProject);\n    });\n  };\n\n  myListsBtn.appendChild(plusBtn);\n  myListsTitleBtn.appendChild(myListsTitle);\n  myListsTitleBtn.appendChild(myListsBtn);\n  newProjectForm.appendChild(newProjectInput);\n  newProjectForm.appendChild(newProjectSaveBtn);\n  newProjectForm.appendChild(newProjectCancelBtn);\n  myListsMainContainer.appendChild(myListsTitleBtn);\n  myListsMainContainer.appendChild(newProjectForm);\n  myListsMainContainer.appendChild(myListsContainer);\n  defaultList.appendChild(listIcon);\n  defaultList.appendChild(defaultListText);\n  leftView.appendChild(myListsMainContainer);\n  leftView.appendChild(defaultList);\n\n  document.addEventListener('DOMContentLoaded', displayProjects());\n\n  return leftView;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setLeftView);\n\n//# sourceURL=webpack://to-do-list-JS/./src/js/dom/leftView.js?");

/***/ }),

/***/ "./src/js/dom/middleView.js":
/*!**********************************!*\
  !*** ./src/js/dom/middleView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logics_projectsList_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logics/projectsList-Store */ \"./src/js/logics/projectsList-Store.js\");\n\n\nconst setMiddleView = (() => {\n  const middleView = document.createElement('div');\n  middleView.classList.add('column-view');\n\n  const myTasksTitleBtn = document.createElement('div');\n  myTasksTitleBtn.classList.add('myTasks-title-btn');\n\n  const middleViewTitle = document.createElement('h3');\n  middleViewTitle.textContent = 'General List';\n\n  const plusBtn = document.createElement('i');\n  plusBtn.classList.add('fas');\n  plusBtn.classList.add('fa-plus');\n  plusBtn.classList.add('plus-btn-sm');\n\n  const addTaskTextBtn = document.createElement('span');\n  addTaskTextBtn.textContent = 'Add Task';\n\n  const myTasksBtn = document.createElement('button');\n  myTasksBtn.setAttribute('id', 'add-task-btn');\n\n  const descripFormInput = document.createElement('input');\n  descripFormInput.classList.add('task-form-input');\n  descripFormInput.type = 'text';\n\n  // const descripFormInput = document.createElement('input');\n  // descripFormInput.classList.add('task-form-input');\n  // descripFormInput.type = 'text';\n\n  const newProjectSaveBtn = document.createElement('button');\n  newProjectSaveBtn.classList.add('new-project-btn');\n  newProjectSaveBtn.classList.add('form-save-btn');\n  newProjectSaveBtn.setAttribute('id', 'project-save-btn');\n  newProjectSaveBtn.textContent = 'Save';\n\n  const newProjectCancelBtn = document.createElement('button');\n  newProjectCancelBtn.classList.add('new-project-btn');\n  newProjectCancelBtn.classList.add('form-cancel-btn');\n  newProjectCancelBtn.setAttribute('id', 'project-cancel-btn');\n  newProjectCancelBtn.textContent = 'Cancel';\n\n  const myTasksForm = document.createElement('form');\n\n  const myTasksList = document.createElement('div');\n  myTasksList.classList.add('mytasks-list');\n  \n  const setMiddle = () => {\n    myTasksBtn.appendChild(plusBtn);\n    myTasksBtn.appendChild(addTaskTextBtn);\n    myTasksTitleBtn.appendChild(middleViewTitle);\n    myTasksTitleBtn.appendChild(myTasksBtn);\n    middleView.appendChild(myTasksTitleBtn);\n\n    return middleView;\n  };\n  \n\n  const displayProjectDetails = (project) => {\n    \n\n  };\n\n  return { setMiddle, displayProjectDetails };\n})();\n\n// const showMiddleView = () => {\n//   const main = document.getElementById('main');\n//   main.textContent = '';\n//   main.appendChild(setMiddleView());\n// };\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setMiddleView);\n\n//# sourceURL=webpack://to-do-list-JS/./src/js/dom/middleView.js?");

/***/ }),

/***/ "./src/js/dom/projectsList-UI.js":
/*!***************************************!*\
  !*** ./src/js/dom/projectsList-UI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logics_projectsList_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logics/projectsList-Store */ \"./src/js/logics/projectsList-Store.js\");\n/* harmony import */ var _middleView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middleView */ \"./src/js/dom/middleView.js\");\n\n\n\nconst UI = (() => {\n  const displayProjects = () => {\n    const projects = _logics_projectsList_Store__WEBPACK_IMPORTED_MODULE_0__.default.getProjects();\n    projects.forEach((projectObj) => addProjectToProjects(projectObj));\n  };\n  \n  const addProjectToProjects = (project) => {\n    let myProjectName;\n    if (typeof project === 'string') {\n      myProjectName = project;\n    } else {\n      myProjectName = project.name;\n    }\n\n    const list = document.querySelector('.mylists-container');\n    console.log(list);\n    const listItem = document.createElement('button');\n    listItem.classList.add('projectList-btn');\n\n    const listIcon = document.createElement('i');\n    listIcon.classList.add('fas');\n    listIcon.classList.add('fa-list-alt');\n\n    const name = document.createElement('span');\n    name.textContent = `${myProjectName}`;\n\n    const editIcon = document.createElement('i');\n    editIcon.classList.add('fas');\n    editIcon.classList.add('fa-pen');\n\n    const deleteIcon = document.createElement('i');\n    deleteIcon.classList.add('fas');\n    deleteIcon.classList.add('fa-trash');\n    // listItem.addEventListener('click', function() {\n\n    // });\n    // listItem.appendChild(listIcon);\n    // listItem.appendChild(name);\n    // listItem.appendChild(editIcon);\n    // listItem.appendChild(deleteIcon);\n    // list.appendChild(listItem);\n  };\n  \n  const clearFields = () => {\n    document.querySelector('.input-formProject').value = '';\n  };\n\n  return {\n    displayProjects, addProjectToProjects, clearFields\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://to-do-list-JS/./src/js/dom/projectsList-UI.js?");

/***/ }),

/***/ "./src/js/dom/rightView.js":
/*!*********************************!*\
  !*** ./src/js/dom/rightView.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setRightView = () => {\n  const rightView = document.createElement('div');\n  rightView.classList.add('column-view');\n\n  const rightViewTitle = document.createElement('h3');\n  rightViewTitle.textContent = 'Item List Details';\n\n  rightView.appendChild(rightViewTitle);\n\n  return rightView;\n};\n\n// const showRightView = () => {\n//   const main = document.getElementById('main');\n//   main.textContent = '';\n//   main.appendChild(setRightView());\n// };\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setRightView);\n\n//# sourceURL=webpack://to-do-list-JS/./src/js/dom/rightView.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_leftView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/leftView */ \"./src/js/dom/leftView.js\");\n/* harmony import */ var _dom_middleView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/middleView */ \"./src/js/dom/middleView.js\");\n/* harmony import */ var _dom_rightView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/rightView */ \"./src/js/dom/rightView.js\");\n\n\n\n\n__webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n\nconst setHeader = () => {\n  const header = document.createElement('header');\n  header.classList.add('main-header');\n\n  const headerTitle = document.createElement('h1');\n  headerTitle.classList.add('header-title');\n  headerTitle.textContent = 'ToDo List';\n\n  header.appendChild(headerTitle);\n\n  return header;\n};\n\nconst setMain = () => {\n  const main = document.createElement('main');\n  main.classList.add('main-container');\n  main.setAttribute('id', 'main');\n\n  main.appendChild((0,_dom_leftView__WEBPACK_IMPORTED_MODULE_0__.default)());\n  main.appendChild(_dom_middleView__WEBPACK_IMPORTED_MODULE_1__.default.setMiddle());\n  main.appendChild((0,_dom_rightView__WEBPACK_IMPORTED_MODULE_2__.default)());\n\n  return main;\n};\n\nconst startProject = () => {\n  const content = document.getElementById('content');\n  content.appendChild(setHeader());\n  content.appendChild(setMain());\n};\n\nstartProject();\n\n//# sourceURL=webpack://to-do-list-JS/./src/js/index.js?");

/***/ }),

/***/ "./src/js/logics/projectsList-Store.js":
/*!*********************************************!*\
  !*** ./src/js/logics/projectsList-Store.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst buildProject = (() => {\n  let projects;\n  let projectObject = {\n    'name': '',\n    'content': []\n  }\n  let defaultProject = {\n    'name': 'General List',\n    'content': []\n  }\n\n  // const projectName = name;\n\n  const getProjects = () => {\n    const storedProjects = localStorage.getItem('projects');\n    if (storedProjects === null || storedProjects[1] === null) {\n      projects = [defaultProject];\n    } else {\n      projects = JSON.parse(localStorage.getItem('projects'));\n    }\n    return projects;\n  };\n\n  const addProject = (name) => {\n    const projects = getProjects();\n    projectObject['name'] = name;\n    projects.push(projectObject);\n    localStorage.setItem('projects', JSON.stringify(projects));\n  };\n\n  return { projects, getProjects, addProject };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildProject);\n\n//# sourceURL=webpack://to-do-list-JS/./src/js/logics/projectsList-Store.js?");

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