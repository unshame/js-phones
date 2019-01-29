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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/my-crappy-components/Component.js":
/*!********************************************************!*\
  !*** ./node_modules/my-crappy-components/Component.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Component; });\n/* harmony import */ var _EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitter.js */ \"./node_modules/my-crappy-components/EventEmitter.js\");\n\r\n\r\nclass Component extends _EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor({\r\n        element,\r\n        data = {},\r\n        template = () => '',\r\n        hiddenClass = 'js-hidden'\r\n    }) {\r\n        super();\r\n        this._ownsElement = !(element instanceof Element);\r\n        this.element = this._ownsElement ? this._createElement(element) : element;\r\n        this._data = data;\r\n        this._template = template;\r\n        this._hiddenClass = hiddenClass;\r\n    }\r\n\r\n    _createElement({ tag = this.defaultTag, name, id }) {\r\n        let element = document.createElement(tag);\r\n\r\n        if (name) {\r\n            element.dataset.component = name;\r\n        }\r\n\r\n        if (id) {\r\n            element.dataset.componentId = id;\r\n        }\r\n\r\n        return element;\r\n    }\r\n\r\n    render() {\r\n        this.element.innerHTML = this.generateHTML(this.getRenderData());\r\n    }\r\n\r\n    generateHTML(data) {\r\n        return this._template(data);\r\n    }\r\n\r\n    hide() {\r\n        this.element.classList.add(this._hiddenClass);\r\n    }\r\n\r\n    show() {\r\n        this.element.classList.remove(this._hiddenClass);\r\n    }\r\n\r\n    destroy(alwaysRemove) {\r\n        this.element.innerHTML = '';\r\n\r\n        if (alwaysRemove || this._ownsElement) {\r\n            this.element.remove();\r\n        }\r\n\r\n        super.destroy();\r\n    }\r\n\r\n    set data(data) {\r\n        this._data = data;\r\n    }\r\n\r\n    get data() {\r\n        return this._data;\r\n    }\r\n\r\n    getRenderData() {\r\n        return this._data;\r\n    }\r\n\r\n    get defaultTag() {\r\n        return 'div';\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/my-crappy-components/Component.js?");

/***/ }),

/***/ "./node_modules/my-crappy-components/ComponentArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/my-crappy-components/ComponentArray.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ComponentArray; });\n/* harmony import */ var _ComponentCollection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentCollection.js */ \"./node_modules/my-crappy-components/ComponentCollection.js\");\n\r\n\r\nclass ComponentArray extends _ComponentCollection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    constructor({ element, data, template }) {\r\n        super({ element, data, template });\r\n    }\r\n\r\n    getRenderData() {\r\n        let children = this.filterChildren(this.children).map(child => this.mapChild(child));\r\n        return { children, ...super.getRenderData() };\r\n    }\r\n\r\n    filterChildren(children) {\r\n        return children;\r\n    }\r\n\r\n    mapChild(child) {\r\n        return child.dataAttributes;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/my-crappy-components/ComponentArray.js?");

/***/ }),

/***/ "./node_modules/my-crappy-components/ComponentCollection.js":
/*!******************************************************************!*\
  !*** ./node_modules/my-crappy-components/ComponentCollection.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ComponentCollection; });\n/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ \"./node_modules/my-crappy-components/Component.js\");\n\n\nclass ComponentCollection extends _Component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor({ element, data, template }) {\n        super({ element, data, template });\n        this.children = [];\n        this.childrenById = {};\n        this._autoEmbedChildren = true;\n        this._autoRenderChildren = true;\n    }\n\n    setAutoRenderOptions({ embed = true, render = true }) {\n        this._autoEmbedChildren = embed;\n        this._autoRenderChildren = render;\n    }\n\n    addChild({\n        component,\n        name, id, tag,\n        options = {}\n    }) {\n        options.element = { tag, name, id };\n        component = new component(options);\n        let dataId = id ? `data-component-id=\"${id}\"` : '';\n        let componentInfo = {\n            component, name, id,\n            selector: `[data-component=\"${name}\"]${dataId ? '[' + dataId + ']' : ''}`,\n            dataAttributes: `data-component=\"${name}\"${dataId ? ' ' + dataId : ''}`\n        };\n        this.children.push(componentInfo);\n        this.childrenById[id || name] = componentInfo;\n        return component;\n    }\n\n    removeChild(child, destroy, alwaysRemove) {\n        let index, id;\n\n        if (typeof child == 'object') {\n            index = this.children.findIndex(otherChild => otherChild.component == child);\n\n            if (index == -1) {\n                index = this.children.indexOf(child);\n            }\n            else {\n                child = this.children[index];\n            }\n        }\n        else if (typeof child == 'number') {\n            index = child;\n            child = this.children[index];\n        }\n        else {\n            id = child;\n            child = this.childrenById[id];\n            index = this.children.indexOf(child);\n        }\n\n        id = id || child.id || child.name;\n        this.children.splice(index, 1);\n        delete this.childrenById[id];\n\n        if (destroy) {\n            child.component.destroy(alwaysRemove);\n        }\n    }\n\n    _embedChildren() {\n        for (let child of this.children) {\n            let { component, selector, hasBeenEmbedded } = child;\n            let node = this.element.querySelector(selector);\n\n            if (node) {\n\n                if (!hasBeenEmbedded) {\n\n                    for (let attribute of node.attributes) {\n                        component.element.setAttribute(attribute.name, attribute.value);\n                    }\n\n                    child.hasBeenEmbedded = true;\n                }\n\n                node.replaceWith(component.element);\n            }\n        }\n    }\n\n    _renderChildren() {\n        for (let { component } of this.children) {\n            component.render();\n        }\n    }\n\n    render() {\n        super.render();\n\n        if (this._autoEmbedChildren) {\n            this._embedChildren();\n        }\n\n        if (this._autoRenderChildren) {\n            this._renderChildren();\n        }\n    }\n\n    destroy(alwaysRemove, alwaysRemoveSub) {\n\n        for (let { component } of this.children) {\n            component.destroy(alwaysRemoveSub);\n        }\n\n        super.destroy(alwaysRemove);\n    }\n}\n\n//# sourceURL=webpack:///./node_modules/my-crappy-components/ComponentCollection.js?");

/***/ }),

/***/ "./node_modules/my-crappy-components/ComponentMap.js":
/*!***********************************************************!*\
  !*** ./node_modules/my-crappy-components/ComponentMap.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ComponentMap; });\n/* harmony import */ var _ComponentCollection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentCollection.js */ \"./node_modules/my-crappy-components/ComponentCollection.js\");\n\r\n\r\nclass ComponentMap extends _ComponentCollection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    constructor({ element, data, template }) {\r\n        super({ element, data, template });\r\n    }\r\n\r\n    getRenderData() {\r\n        let children = this.children.reduce((obj, child) => {\r\n            obj[child.id || child.name] = this.mapChild(child);\r\n            return obj;\r\n        }, {});\r\n        return { children, ...super.getRenderData() };\r\n    }\r\n\r\n    mapChild(child) {\r\n        return child.dataAttributes;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/my-crappy-components/ComponentMap.js?");

/***/ }),

/***/ "./node_modules/my-crappy-components/EventEmitter.js":
/*!***********************************************************!*\
  !*** ./node_modules/my-crappy-components/EventEmitter.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventEmitter; });\nclass EventEmitter {\r\n\r\n    constructor() {\r\n        this._events = Object.create(null);\r\n    }\r\n\r\n    subscribe(eventName, listener) {\r\n\r\n        if (!(eventName in this._events)) {\r\n            this._events[eventName] = [];\r\n        }\r\n\r\n        let listeners = this._events[eventName];\r\n\r\n        if (!listeners.includes(listener)) {\r\n            listeners.push(listener);\r\n        }\r\n    }\r\n\r\n    unsibscribe(eventName, listener) {\r\n\r\n        if (!(eventName in this._events)) {\r\n            return;\r\n        }\r\n\r\n        let listeners = this._events[eventName];\r\n        let index = listeners.indexOf(listener);\r\n        if(index != -1) {\r\n            listeners.splice(index, 1);\r\n        }\r\n    }\r\n\r\n    dispatch(eventName, ...args) {\r\n\r\n        if (!(eventName in this._events)) {\r\n            return;\r\n        }\r\n\r\n        let listeners = this._events[eventName];\r\n        for(let listener of listeners) {\r\n            listener(...args);\r\n        }\r\n    }\r\n\r\n    bubble(eventEmitter, eventName, ...args) {\r\n        this.subscribe(eventName, (...moreArgs) => void eventEmitter.dispatch(eventName, ...args, ...moreArgs));\r\n    }\r\n\r\n    destroy() {\r\n        this._events = null;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./node_modules/my-crappy-components/EventEmitter.js?");

/***/ }),

/***/ "./node_modules/my-crappy-components/index.js":
/*!****************************************************!*\
  !*** ./node_modules/my-crappy-components/index.js ***!
  \****************************************************/
/*! exports provided: Component, ComponentCollection, ComponentMap, ComponentArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ \"./node_modules/my-crappy-components/Component.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return _Component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _ComponentCollection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentCollection.js */ \"./node_modules/my-crappy-components/ComponentCollection.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ComponentCollection\", function() { return _ComponentCollection_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _ComponentMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComponentMap.js */ \"./node_modules/my-crappy-components/ComponentMap.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ComponentMap\", function() { return _ComponentMap_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _ComponentArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ComponentArray.js */ \"./node_modules/my-crappy-components/ComponentArray.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ComponentArray\", function() { return _ComponentArray_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./node_modules/my-crappy-components/index.js?");

/***/ }),

/***/ "./scripts/app.js":
/*!************************!*\
  !*** ./scripts/app.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetcher.js */ \"./scripts/fetcher.js\");\n/* harmony import */ var _components_page_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/page/component.js */ \"./scripts/components/page/component.js\");\n\n\n\ninitPage();\n\nasync function initPage() {\n    let phones = await Object(_fetcher_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('./phones/phones.json');\n    phones.forEach(phone => phone.urlBase = location.pathname + 'phones/');\n    window.page = new _components_page_component_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        element: document.querySelector('[data-page-container]'),\n        childrenData: {\n            catalogData: phones,\n            filterData: {\n                attributes: [\n                    { value: 'name', name: 'Alphabetical' },\n                    { value: 'age', name: 'Newest' }\n                ]\n            }\n        }\n    });\n\n}\n\n\n\n//# sourceURL=webpack:///./scripts/app.js?");

/***/ }),

/***/ "./scripts/components/catalog/component.js":
/*!*************************************************!*\
  !*** ./scripts/components/catalog/component.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Catalog; });\n/* harmony import */ var my_crappy_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-crappy-components */ \"./node_modules/my-crappy-components/index.js\");\n/* harmony import */ var _preview_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../preview/component.js */ \"./scripts/components/preview/component.js\");\n/* harmony import */ var _template_ejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template.ejs */ \"./scripts/components/catalog/template.ejs\");\n/* harmony import */ var _template_ejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_template_ejs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass Catalog extends my_crappy_components__WEBPACK_IMPORTED_MODULE_0__[\"ComponentArray\"] {\n\n    constructor({ element, childrenData = [], template = _template_ejs__WEBPACK_IMPORTED_MODULE_2___default.a }) {\n        super({ element, template });\n\n        for (let datum of childrenData) {\n            let child = this.addChild({\n                component: _preview_component_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                name: 'preview',\n                id: datum.id,\n                options: { data: datum }\n            });\n            child.bubble(this, 'select');\n            child.bubble(this, 'addToCart');\n        }\n\n        this._filters = {};\n    }\n\n    setFilter(filters) {\n        this._filters = { ...this._filters, ...filters };\n    }\n\n    filterChildren(children) {\n        let { query, order } = this._filters;\n        if (!query) {\n            children = [...this.children];\n        }\n        else {\n            children = this.children.filter(({ component }) => {\n\n                for (let word of query.toLowerCase().split(/\\s/)) {\n                    if (!component.data.name.toLowerCase().includes(word)) {\n                        return false;\n                    }\n                }\n\n                return true;\n            });\n        }\n\n        children.sort(({ component: ca }, { component: cb }) => {\n            let a = String(ca.data[order]).toLowerCase();\n            let b = String(cb.data[order]).toLowerCase();\n\n            if (a > b) {return 1;}\n            if (a < b) {return -1;}\n            return 0;\n        });\n\n        return children;\n    }\n}\n\n\n//# sourceURL=webpack:///./scripts/components/catalog/component.js?");

/***/ }),

/***/ "./scripts/components/catalog/template.ejs":
/*!*************************************************!*\
  !*** ./scripts/components/catalog/template.ejs ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function anonymous(locals, escapeFn, include, rethrow\n) {\nrethrow = rethrow || function rethrow(err, str, flnm, lineno, esc){\n  var lines = str.split('\\n');\n  var start = Math.max(lineno - 3, 0);\n  var end = Math.min(lines.length, lineno + 3);\n  var filename = esc(flnm); // eslint-disable-line\n  // Error context\n  var context = lines.slice(start, end).map(function (line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? ' >> ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'ejs') + ':'\n    + lineno + '\\n'\n    + context + '\\n\\n'\n    + err.message;\n\n  throw err;\n};\nescapeFn = escapeFn || function (markup) {\n  return markup == undefined\n    ? ''\n    : String(markup)\n      .replace(_MATCH_HTML, encode_char);\n};\nvar _ENCODE_HTML_RULES = {\n      \"&\": \"&amp;\"\n    , \"<\": \"&lt;\"\n    , \">\": \"&gt;\"\n    , '\"': \"&#34;\"\n    , \"'\": \"&#39;\"\n    }\n  , _MATCH_HTML = /[&<>'\"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n;\nvar __line = 1\n  , __lines = \"<ul class=\\\"phones\\\">\\r\\n  <% for(let dataAttributes of children) { %>\\r\\n    <li class=\\\"thumbnail\\\" <%- dataAttributes %>></li>\\r\\n  <% } %>\\r\\n</ul>\"\n  , __filename = undefined;\ntry {\n  var __output = [], __append = __output.push.bind(__output);\n  with (locals || {}) {\n    ; __append(\"<ul class=\\\"phones\\\">\\r\\n  \")\n    ; __line = 2\n    ;  for(let dataAttributes of children) { \n    ; __append(\"\\r\\n    <li class=\\\"thumbnail\\\" \")\n    ; __line = 3\n    ; __append( dataAttributes )\n    ; __append(\"></li>\\r\\n  \")\n    ; __line = 4\n    ;  } \n    ; __append(\"\\r\\n</ul>\")\n    ; __line = 5\n  }\n  return __output.join(\"\");\n} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n\n}\n\n//# sourceURL=webpack:///./scripts/components/catalog/template.ejs?");

/***/ }),

/***/ "./scripts/components/element-picker/component.js":
/*!********************************************************!*\
  !*** ./scripts/components/element-picker/component.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ElementPicker; });\n/* harmony import */ var my_crappy_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-crappy-components */ \"./node_modules/my-crappy-components/index.js\");\n/* harmony import */ var _template_ejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.ejs */ \"./scripts/components/element-picker/template.ejs\");\n/* harmony import */ var _template_ejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_template_ejs__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nclass ElementPicker extends my_crappy_components__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n\r\n    constructor({ element, data, template = _template_ejs__WEBPACK_IMPORTED_MODULE_1___default.a }) {\r\n        super({ element, data, template });\r\n        this.element.addEventListener('click', (event) => {\r\n            let target = event.target.closest('[data-action=\"pick\"]');\r\n            if (target) {\r\n                this.dispatch('elementPicked', target);\r\n                event.preventDefault();\r\n            }\r\n        });\r\n    }\r\n\r\n    get defaultTag() {\r\n        return 'ul';\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./scripts/components/element-picker/component.js?");

/***/ }),

/***/ "./scripts/components/element-picker/template.ejs":
/*!********************************************************!*\
  !*** ./scripts/components/element-picker/template.ejs ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function anonymous(locals, escapeFn, include, rethrow\n) {\nrethrow = rethrow || function rethrow(err, str, flnm, lineno, esc){\n  var lines = str.split('\\n');\n  var start = Math.max(lineno - 3, 0);\n  var end = Math.min(lines.length, lineno + 3);\n  var filename = esc(flnm); // eslint-disable-line\n  // Error context\n  var context = lines.slice(start, end).map(function (line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? ' >> ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'ejs') + ':'\n    + lineno + '\\n'\n    + context + '\\n\\n'\n    + err.message;\n\n  throw err;\n};\nescapeFn = escapeFn || function (markup) {\n  return markup == undefined\n    ? ''\n    : String(markup)\n      .replace(_MATCH_HTML, encode_char);\n};\nvar _ENCODE_HTML_RULES = {\n      \"&\": \"&amp;\"\n    , \"<\": \"&lt;\"\n    , \">\": \"&gt;\"\n    , '\"': \"&#34;\"\n    , \"'\": \"&#39;\"\n    }\n  , _MATCH_HTML = /[&<>'\"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n;\nvar __line = 1\n  , __lines = \"<% for(let url of elements) { %>\\r\\n    <li>\\r\\n        <img src=\\\"<%- url %>\\\" data-action=\\\"pick\\\" data-url=\\\"<%- url %>\\\">\\r\\n    </li>\\r\\n<% } %>\"\n  , __filename = undefined;\ntry {\n  var __output = [], __append = __output.push.bind(__output);\n  with (locals || {}) {\n    ;  for(let url of elements) { \n    ; __append(\"\\r\\n    <li>\\r\\n        <img src=\\\"\")\n    ; __line = 3\n    ; __append( url )\n    ; __append(\"\\\" data-action=\\\"pick\\\" data-url=\\\"\")\n    ; __append( url )\n    ; __append(\"\\\">\\r\\n    </li>\\r\\n\")\n    ; __line = 5\n    ;  } \n  }\n  return __output.join(\"\");\n} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n\n}\n\n//# sourceURL=webpack:///./scripts/components/element-picker/template.ejs?");

/***/ }),

/***/ "./scripts/components/filter/component.js":
/*!************************************************!*\
  !*** ./scripts/components/filter/component.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Filter; });\n/* harmony import */ var my_crappy_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-crappy-components */ \"./node_modules/my-crappy-components/index.js\");\n/* harmony import */ var _search_field_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search-field/component.js */ \"./scripts/components/search-field/component.js\");\n/* harmony import */ var _select_field_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../select-field/component.js */ \"./scripts/components/select-field/component.js\");\n/* harmony import */ var _template_ejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template.ejs */ \"./scripts/components/filter/template.ejs\");\n/* harmony import */ var _template_ejs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_template_ejs__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\nclass Filter extends my_crappy_components__WEBPACK_IMPORTED_MODULE_0__[\"ComponentMap\"] {\r\n\r\n    constructor({ element, childrenData: { attributes }, template = _template_ejs__WEBPACK_IMPORTED_MODULE_3___default.a }) {\r\n        super({ element, template });\r\n\r\n        this._searchField = this.addChild({\r\n            component: _search_field_component_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n            name: 'search-field'\r\n        });\r\n        this._searchField.subscribe(\r\n            'change',\r\n            () => void this.dispatch('change', this.getValues())\r\n        );\r\n\r\n        this._selectField = this.addChild({\r\n            component: _select_field_component_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n            name: 'select-field',\r\n            options: {\r\n                data: {\r\n                    elements: attributes\r\n                }\r\n            }\r\n        });\r\n        this._selectField.subscribe(\r\n            'change',\r\n            () => void this.dispatch('change', this.getValues())\r\n        );\r\n    }\r\n\r\n    getValues() {\r\n        return {\r\n            query: this._searchField.element.value,\r\n            order: this._selectField.element.value\r\n        };\r\n    }\r\n}\n\n//# sourceURL=webpack:///./scripts/components/filter/component.js?");

/***/ }),

/***/ "./scripts/components/filter/template.ejs":
/*!************************************************!*\
  !*** ./scripts/components/filter/template.ejs ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function anonymous(locals, escapeFn, include, rethrow\n) {\nrethrow = rethrow || function rethrow(err, str, flnm, lineno, esc){\n  var lines = str.split('\\n');\n  var start = Math.max(lineno - 3, 0);\n  var end = Math.min(lines.length, lineno + 3);\n  var filename = esc(flnm); // eslint-disable-line\n  // Error context\n  var context = lines.slice(start, end).map(function (line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? ' >> ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'ejs') + ':'\n    + lineno + '\\n'\n    + context + '\\n\\n'\n    + err.message;\n\n  throw err;\n};\nescapeFn = escapeFn || function (markup) {\n  return markup == undefined\n    ? ''\n    : String(markup)\n      .replace(_MATCH_HTML, encode_char);\n};\nvar _ENCODE_HTML_RULES = {\n      \"&\": \"&amp;\"\n    , \"<\": \"&lt;\"\n    , \">\": \"&gt;\"\n    , '\"': \"&#34;\"\n    , \"'\": \"&#39;\"\n    }\n  , _MATCH_HTML = /[&<>'\"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n;\nvar __line = 1\n  , __lines = \"<p>\\r\\n    Search:\\r\\n    <input <%- children['search-field'] %>>\\r\\n</p>\\r\\n\\r\\n<p>\\r\\n    Sort by:\\r\\n    <select <%- children['select-field'] %>></select>\\r\\n</p>\"\n  , __filename = undefined;\ntry {\n  var __output = [], __append = __output.push.bind(__output);\n  with (locals || {}) {\n    ; __append(\"<p>\\r\\n    Search:\\r\\n    <input \")\n    ; __line = 3\n    ; __append( children['search-field'] )\n    ; __append(\">\\r\\n</p>\\r\\n\\r\\n<p>\\r\\n    Sort by:\\r\\n    <select \")\n    ; __line = 8\n    ; __append( children['select-field'] )\n    ; __append(\"></select>\\r\\n</p>\")\n    ; __line = 9\n  }\n  return __output.join(\"\");\n} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n\n}\n\n//# sourceURL=webpack:///./scripts/components/filter/template.ejs?");

/***/ }),

/***/ "./scripts/components/fullview/component.js":
/*!**************************************************!*\
  !*** ./scripts/components/fullview/component.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Fullview; });\n/* harmony import */ var my_crappy_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-crappy-components */ \"./node_modules/my-crappy-components/index.js\");\n/* harmony import */ var _element_picker_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../element-picker/component.js */ \"./scripts/components/element-picker/component.js\");\n/* harmony import */ var _image_thrower_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../image-thrower.js */ \"./scripts/image-thrower.js\");\n/* harmony import */ var _template_ejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template.ejs */ \"./scripts/components/fullview/template.ejs\");\n/* harmony import */ var _template_ejs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_template_ejs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nclass Fullview extends my_crappy_components__WEBPACK_IMPORTED_MODULE_0__[\"ComponentMap\"] {\n    constructor({ element, data, template = _template_ejs__WEBPACK_IMPORTED_MODULE_3___default.a }) {\n        super({ element, data, template });\n\n        this._elementPicker = this.addChild({\n            component: _element_picker_component_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n            name: 'element-picker',\n            options: {\n                data:  {\n                    elements: data ? data.images : null\n                }\n            }\n        });\n\n        this._elementPicker.subscribe('elementPicked', (thumb) => void this.changePreview(thumb));\n\n        this.element.addEventListener('click', (event) => {\n            if (event.target.closest('[data-action=\"add-to-cart\"]')) {\n                this.dispatch('addToCart', this.data.name, this.element.querySelector('[data-element=\"preview\"]'));\n                event.preventDefault();\n            }\n            else if (event.target.closest('[data-action=\"back\"]')) {\n                this.dispatch('close');\n                event.preventDefault();\n            }\n        });\n    }\n\n    async changePreview(thumb) {\n        let preview = this.element.querySelector('[data-element=\"preview\"]');\n        let url = thumb.dataset.url;\n        await Object(_image_thrower_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n            thumb,\n            preview,\n            url,\n            false\n        );\n        preview.src = url;\n    }\n\n    set data(data) {\n        super.data = data;\n        if(data) {\n            this._elementPicker.data.elements = data.images;\n        }\n    }\n\n    get data() {\n        return super.data;\n    }\n}\n\n\n//# sourceURL=webpack:///./scripts/components/fullview/component.js?");

/***/ }),

/***/ "./scripts/components/fullview/template.ejs":
/*!**************************************************!*\
  !*** ./scripts/components/fullview/template.ejs ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function anonymous(locals, escapeFn, include, rethrow\n) {\nrethrow = rethrow || function rethrow(err, str, flnm, lineno, esc){\n  var lines = str.split('\\n');\n  var start = Math.max(lineno - 3, 0);\n  var end = Math.min(lines.length, lineno + 3);\n  var filename = esc(flnm); // eslint-disable-line\n  // Error context\n  var context = lines.slice(start, end).map(function (line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? ' >> ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'ejs') + ':'\n    + lineno + '\\n'\n    + context + '\\n\\n'\n    + err.message;\n\n  throw err;\n};\nescapeFn = escapeFn || function (markup) {\n  return markup == undefined\n    ? ''\n    : String(markup)\n      .replace(_MATCH_HTML, encode_char);\n};\nvar _ENCODE_HTML_RULES = {\n      \"&\": \"&amp;\"\n    , \"<\": \"&lt;\"\n    , \">\": \"&gt;\"\n    , '\"': \"&#34;\"\n    , \"'\": \"&#39;\"\n    }\n  , _MATCH_HTML = /[&<>'\"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n;\nvar __line = 1\n  , __lines = \"<img class=\\\"phone\\\" src=\\\"<%- images[0] %>\\\" data-element=\\\"preview\\\">\\r\\n<button data-action=\\\"back\\\">Back</button>\\r\\n<button data-action=\\\"add-to-cart\\\">Add to basket</button>\\r\\n\\r\\n<h1><%- name %></h1>\\r\\n\\r\\n<p><%- description %></p>\\r\\n\\r\\n<ul class=\\\"phone-thumbs\\\" <%- children['element-picker'] %>></ul>\"\n  , __filename = undefined;\ntry {\n  var __output = [], __append = __output.push.bind(__output);\n  with (locals || {}) {\n    ; __append(\"<img class=\\\"phone\\\" src=\\\"\")\n    ; __append( images[0] )\n    ; __append(\"\\\" data-element=\\\"preview\\\">\\r\\n<button data-action=\\\"back\\\">Back</button>\\r\\n<button data-action=\\\"add-to-cart\\\">Add to basket</button>\\r\\n\\r\\n<h1>\")\n    ; __line = 5\n    ; __append( name )\n    ; __append(\"</h1>\\r\\n\\r\\n<p>\")\n    ; __line = 7\n    ; __append( description )\n    ; __append(\"</p>\\r\\n\\r\\n<ul class=\\\"phone-thumbs\\\" \")\n    ; __line = 9\n    ; __append( children['element-picker'] )\n    ; __append(\"></ul>\")\n  }\n  return __output.join(\"\");\n} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n\n}\n\n//# sourceURL=webpack:///./scripts/components/fullview/template.ejs?");

/***/ }),

/***/ "./scripts/components/minicart/component.js":
/*!**************************************************!*\
  !*** ./scripts/components/minicart/component.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Minicart; });\n/* harmony import */ var _image_thrower_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../image-thrower.js */ \"./scripts/image-thrower.js\");\n/* harmony import */ var _element_picker_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../element-picker/component.js */ \"./scripts/components/element-picker/component.js\");\n/* harmony import */ var _template_ejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template.ejs */ \"./scripts/components/minicart/template.ejs\");\n/* harmony import */ var _template_ejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_template_ejs__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\nclass Minicart extends _element_picker_component_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\r\n\r\n    constructor({ element, data = { elements: [] }, template = _template_ejs__WEBPACK_IMPORTED_MODULE_2___default.a }) {\r\n        super({ element, data, template });\r\n        this.subscribe('elementPicked', (li) => {\r\n            this.removeItem(li.dataset.itemName);\r\n            this.render();\r\n        });\r\n        this._lastIndex = 0;\r\n    }\r\n\r\n    addItem(name, thumb) {\r\n        let cart = this.data.elements;\r\n        let item = cart.find(item => item.name == name);\r\n        if (item) {\r\n            item.amount++;\r\n            this._lastIndex = cart.indexOf(item);\r\n        }\r\n        else {\r\n            cart.push({ name, amount: 1 });\r\n            this._lastIndex = cart.length - 1;\r\n        }\r\n    }\r\n\r\n    removeItem(name) {\r\n        let cart = this.data.elements;\r\n        let index = cart.findIndex(item => item.name == name);\r\n        let item = cart[index];\r\n        item.amount--;\r\n        if (item.amount === 0) {\r\n            cart.splice(index, 1);\r\n        }\r\n    }\r\n\r\n    render(thumb) {\r\n        super.render();\r\n        if(thumb) {\r\n            let item = this.element.querySelectorAll('[data-element=\"item\"]')[this._lastIndex];\r\n            if(item) {\r\n                Object(_image_thrower_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(thumb, item, thumb.src, true);\r\n            }\r\n        }\r\n    }\r\n\r\n    get defaultTag() {\r\n        return 'div';\r\n    }\r\n}\n\n//# sourceURL=webpack:///./scripts/components/minicart/component.js?");

/***/ }),

/***/ "./scripts/components/minicart/template.ejs":
/*!**************************************************!*\
  !*** ./scripts/components/minicart/template.ejs ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function anonymous(locals, escapeFn, include, rethrow\n) {\nrethrow = rethrow || function rethrow(err, str, flnm, lineno, esc){\n  var lines = str.split('\\n');\n  var start = Math.max(lineno - 3, 0);\n  var end = Math.min(lines.length, lineno + 3);\n  var filename = esc(flnm); // eslint-disable-line\n  // Error context\n  var context = lines.slice(start, end).map(function (line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? ' >> ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'ejs') + ':'\n    + lineno + '\\n'\n    + context + '\\n\\n'\n    + err.message;\n\n  throw err;\n};\nescapeFn = escapeFn || function (markup) {\n  return markup == undefined\n    ? ''\n    : String(markup)\n      .replace(_MATCH_HTML, encode_char);\n};\nvar _ENCODE_HTML_RULES = {\n      \"&\": \"&amp;\"\n    , \"<\": \"&lt;\"\n    , \">\": \"&gt;\"\n    , '\"': \"&#34;\"\n    , \"'\": \"&#39;\"\n    }\n  , _MATCH_HTML = /[&<>'\"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n;\nvar __line = 1\n  , __lines = \"<p>Shopping Cart</p>\\r\\n<ul>\\r\\n    <% if (elements.length > 0) { %>\\r\\n        <% for(let { name, amount } of elements) { %>\\r\\n            <li class=\\\"minicart-item\\\"\\r\\n                data-action=\\\"pick\\\"\\r\\n                data-item-name=\\\"<%- name %>\\\"\\r\\n                data-element=\\\"item\\\"><%- name %> (<%- amount %>)</li>\\r\\n        <% } %>\\r\\n    <% } else { %>\\r\\n        <li>So empty...</li>\\r\\n    <% } %>\\r\\n</ul>\"\n  , __filename = undefined;\ntry {\n  var __output = [], __append = __output.push.bind(__output);\n  with (locals || {}) {\n    ; __append(\"<p>Shopping Cart</p>\\r\\n<ul>\\r\\n    \")\n    ; __line = 3\n    ;  if (elements.length > 0) { \n    ; __append(\"\\r\\n        \")\n    ; __line = 4\n    ;  for(let { name, amount } of elements) { \n    ; __append(\"\\r\\n            <li class=\\\"minicart-item\\\"\\r\\n                data-action=\\\"pick\\\"\\r\\n                data-item-name=\\\"\")\n    ; __line = 7\n    ; __append( name )\n    ; __append(\"\\\"\\r\\n                data-element=\\\"item\\\">\")\n    ; __line = 8\n    ; __append( name )\n    ; __append(\" (\")\n    ; __append( amount )\n    ; __append(\")</li>\\r\\n        \")\n    ; __line = 9\n    ;  } \n    ; __append(\"\\r\\n    \")\n    ; __line = 10\n    ;  } else { \n    ; __append(\"\\r\\n        <li>So empty...</li>\\r\\n    \")\n    ; __line = 12\n    ;  } \n    ; __append(\"\\r\\n</ul>\")\n    ; __line = 13\n  }\n  return __output.join(\"\");\n} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n\n}\n\n//# sourceURL=webpack:///./scripts/components/minicart/template.ejs?");

/***/ }),

/***/ "./scripts/components/page/component.js":
/*!**********************************************!*\
  !*** ./scripts/components/page/component.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var my_crappy_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-crappy-components */ \"./node_modules/my-crappy-components/index.js\");\n/* harmony import */ var _catalog_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../catalog/component.js */ \"./scripts/components/catalog/component.js\");\n/* harmony import */ var _minicart_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../minicart/component.js */ \"./scripts/components/minicart/component.js\");\n/* harmony import */ var _filter_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filter/component.js */ \"./scripts/components/filter/component.js\");\n/* harmony import */ var _fullview_component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fullview/component.js */ \"./scripts/components/fullview/component.js\");\n/* harmony import */ var _fetcher_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fetcher.js */ \"./scripts/fetcher.js\");\n/* harmony import */ var _template_ejs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template.ejs */ \"./scripts/components/page/template.ejs\");\n/* harmony import */ var _template_ejs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_template_ejs__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\nclass Page extends my_crappy_components__WEBPACK_IMPORTED_MODULE_0__[\"ComponentMap\"] {\n    constructor({\n        element,\n        childrenData: {\n            catalogData = [],\n            filterData = []\n        },\n        template = _template_ejs__WEBPACK_IMPORTED_MODULE_6___default.a\n    }) {\n        super({ element, template });\n\n        this.setAutoRenderOptions({ render: false });\n\n        let onAddToCart = (name, thumb) => {\n            this._minicart.addItem(name);\n            this._minicart.render(thumb);\n        };\n\n        this._catalog = this.addChild({\n            component: _catalog_component_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n            name: 'catalog',\n            options: {\n                childrenData: catalogData\n            }\n        });\n        this._catalog.subscribe('select', link => void this.showItem(link.dataset.url));\n        this._catalog.subscribe('addToCart', onAddToCart);\n\n        this._fullview = this.addChild({\n            component: _fullview_component_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            name: 'fullview'\n        });\n\n        this._fullview.subscribe('close', () => void this.hideItem());\n        this._fullview.subscribe('addToCart', onAddToCart);\n\n        this._minicart = this.addChild({\n            component: _minicart_component_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            name: 'minicart',\n            tag: 'section'\n        });\n\n        this._filter = this.addChild({\n            component: _filter_component_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            name: 'filter',\n            tag: 'section',\n            options: {\n                childrenData: filterData\n            }\n        });\n        this._filter.subscribe('change', (values) => {\n            this._catalog.setFilter(values);\n            this._catalog.render();\n        });\n\n        this._activeSubComponent = this._catalog;\n        this.render();\n    }\n\n    async showItem(url) {\n        let data;\n\n        try {\n            data = await Object(_fetcher_js__WEBPACK_IMPORTED_MODULE_5__[\"abortAndFetchJSON\"])(url + '.json');\n        }\n        catch(err) {\n            console.warn(err);\n        }\n\n        if (!data) {\n            return;\n        }\n\n        this._catalog.hide();\n        this._filter.hide();\n        this._fullview.data = data;\n        this._fullview.show();\n        this._fullview.render();\n        this._activeSubComponent = this._fullview;\n    }\n\n    hideItem() {\n        this._fullview.hide();\n        this._filter.show();\n        this._catalog.show();\n        this._catalog.render();\n        this._activeSubComponent = this._catalog;\n    }\n\n    render() {\n        super.render();\n        this._filter.render();\n        this._minicart.render();\n        this._catalog.setFilter(this._filter.getValues());\n        this._activeSubComponent.render();\n    }\n}\n\n\n//# sourceURL=webpack:///./scripts/components/page/component.js?");

/***/ }),

/***/ "./scripts/components/page/template.ejs":
/*!**********************************************!*\
  !*** ./scripts/components/page/template.ejs ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function anonymous(locals, escapeFn, include, rethrow\n) {\nrethrow = rethrow || function rethrow(err, str, flnm, lineno, esc){\n  var lines = str.split('\\n');\n  var start = Math.max(lineno - 3, 0);\n  var end = Math.min(lines.length, lineno + 3);\n  var filename = esc(flnm); // eslint-disable-line\n  // Error context\n  var context = lines.slice(start, end).map(function (line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? ' >> ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'ejs') + ':'\n    + lineno + '\\n'\n    + context + '\\n\\n'\n    + err.message;\n\n  throw err;\n};\nescapeFn = escapeFn || function (markup) {\n  return markup == undefined\n    ? ''\n    : String(markup)\n      .replace(_MATCH_HTML, encode_char);\n};\nvar _ENCODE_HTML_RULES = {\n      \"&\": \"&amp;\"\n    , \"<\": \"&lt;\"\n    , \">\": \"&gt;\"\n    , '\"': \"&#34;\"\n    , \"'\": \"&#39;\"\n    }\n  , _MATCH_HTML = /[&<>'\"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n;\nvar __line = 1\n  , __lines = \"<div class=\\\"row\\\">\\r\\n    <!--Sidebar-->\\r\\n    <div class=\\\"col-md-2\\\">\\r\\n        <div <%- children.filter %>></div>\\r\\n\\r\\n        <div <%- children.minicart %>>\\r\\n\\r\\n        </div>\\r\\n    </div>\\r\\n\\r\\n    <!--Main content-->\\r\\n    <div class=\\\"col-md-10\\\">\\r\\n        <div <%- children.catalog %>></div>\\r\\n        <div <%- children.fullview %>></div>\\r\\n    </div>\\r\\n</div>\"\n  , __filename = undefined;\ntry {\n  var __output = [], __append = __output.push.bind(__output);\n  with (locals || {}) {\n    ; __append(\"<div class=\\\"row\\\">\\r\\n    <!--Sidebar-->\\r\\n    <div class=\\\"col-md-2\\\">\\r\\n        <div \")\n    ; __line = 4\n    ; __append( children.filter )\n    ; __append(\"></div>\\r\\n\\r\\n        <div \")\n    ; __line = 6\n    ; __append( children.minicart )\n    ; __append(\">\\r\\n\\r\\n        </div>\\r\\n    </div>\\r\\n\\r\\n    <!--Main content-->\\r\\n    <div class=\\\"col-md-10\\\">\\r\\n        <div \")\n    ; __line = 13\n    ; __append( children.catalog )\n    ; __append(\"></div>\\r\\n        <div \")\n    ; __line = 14\n    ; __append( children.fullview )\n    ; __append(\"></div>\\r\\n    </div>\\r\\n</div>\")\n    ; __line = 16\n  }\n  return __output.join(\"\");\n} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n\n}\n\n//# sourceURL=webpack:///./scripts/components/page/template.ejs?");

/***/ }),

/***/ "./scripts/components/preview/component.js":
/*!*************************************************!*\
  !*** ./scripts/components/preview/component.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Preview; });\n/* harmony import */ var my_crappy_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-crappy-components */ \"./node_modules/my-crappy-components/index.js\");\n/* harmony import */ var _template_ejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.ejs */ \"./scripts/components/preview/template.ejs\");\n/* harmony import */ var _template_ejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_template_ejs__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass Preview extends my_crappy_components__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n\n    constructor({ element, data, template = _template_ejs__WEBPACK_IMPORTED_MODULE_1___default.a }) {\n        super({ element, template, data });\n        this.element.addEventListener('click', (event) => {\n            if (event.target.closest('[data-action=\"add-to-cart\"]')) {\n                this.dispatch('addToCart', this.data.name, this.element.querySelector('[data-element=\"preview\"]'));\n                event.preventDefault();\n            }\n            else {\n                let link = event.target.closest('[data-action=\"select\"]');\n                if(link) {\n                    this.dispatch('select', link);\n                    event.preventDefault();\n                }\n            }\n        });\n    }\n\n    get defaultTag() {\n        return 'li';\n    }\n}\n\n\n//# sourceURL=webpack:///./scripts/components/preview/component.js?");

/***/ }),

/***/ "./scripts/components/preview/template.ejs":
/*!*************************************************!*\
  !*** ./scripts/components/preview/template.ejs ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function anonymous(locals, escapeFn, include, rethrow\n) {\nrethrow = rethrow || function rethrow(err, str, flnm, lineno, esc){\n  var lines = str.split('\\n');\n  var start = Math.max(lineno - 3, 0);\n  var end = Math.min(lines.length, lineno + 3);\n  var filename = esc(flnm); // eslint-disable-line\n  // Error context\n  var context = lines.slice(start, end).map(function (line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? ' >> ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'ejs') + ':'\n    + lineno + '\\n'\n    + context + '\\n\\n'\n    + err.message;\n\n  throw err;\n};\nescapeFn = escapeFn || function (markup) {\n  return markup == undefined\n    ? ''\n    : String(markup)\n      .replace(_MATCH_HTML, encode_char);\n};\nvar _ENCODE_HTML_RULES = {\n      \"&\": \"&amp;\"\n    , \"<\": \"&lt;\"\n    , \">\": \"&gt;\"\n    , '\"': \"&#34;\"\n    , \"'\": \"&#39;\"\n    }\n  , _MATCH_HTML = /[&<>'\"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n;\nvar __line = 1\n  , __lines = \"<% let url = urlBase + id %>\\r\\n<a href=\\\"#!<%- url %>\\\" data-url=\\\"<%- url %>\\\" class=\\\"thumb\\\" data-action=\\\"select\\\">\\r\\n    <img alt=\\\"<%- name %>\\\" src=\\\"<%- imageUrl %>\\\" data-element=\\\"preview\\\">\\r\\n</a>\\r\\n\\r\\n<div class=\\\"phones__btn-buy-wrapper\\\">\\r\\n    <a class=\\\"btn btn-success\\\" data-action=\\\"add-to-cart\\\">\\r\\n        Add\\r\\n    </a>\\r\\n</div>\\r\\n\\r\\n<a href=\\\"#!<%- url %>\\\" data-url=\\\"<%- url %>\\\" data-action=\\\"select\\\"><%- name %></a>\\r\\n\\r\\n<p><%- snippet %></p>\"\n  , __filename = undefined;\ntry {\n  var __output = [], __append = __output.push.bind(__output);\n  with (locals || {}) {\n    ;  let url = urlBase + id \n    ; __append(\"\\r\\n<a href=\\\"#!\")\n    ; __line = 2\n    ; __append( url )\n    ; __append(\"\\\" data-url=\\\"\")\n    ; __append( url )\n    ; __append(\"\\\" class=\\\"thumb\\\" data-action=\\\"select\\\">\\r\\n    <img alt=\\\"\")\n    ; __line = 3\n    ; __append( name )\n    ; __append(\"\\\" src=\\\"\")\n    ; __append( imageUrl )\n    ; __append(\"\\\" data-element=\\\"preview\\\">\\r\\n</a>\\r\\n\\r\\n<div class=\\\"phones__btn-buy-wrapper\\\">\\r\\n    <a class=\\\"btn btn-success\\\" data-action=\\\"add-to-cart\\\">\\r\\n        Add\\r\\n    </a>\\r\\n</div>\\r\\n\\r\\n<a href=\\\"#!\")\n    ; __line = 12\n    ; __append( url )\n    ; __append(\"\\\" data-url=\\\"\")\n    ; __append( url )\n    ; __append(\"\\\" data-action=\\\"select\\\">\")\n    ; __append( name )\n    ; __append(\"</a>\\r\\n\\r\\n<p>\")\n    ; __line = 14\n    ; __append( snippet )\n    ; __append(\"</p>\")\n  }\n  return __output.join(\"\");\n} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n\n}\n\n//# sourceURL=webpack:///./scripts/components/preview/template.ejs?");

/***/ }),

/***/ "./scripts/components/search-field/component.js":
/*!******************************************************!*\
  !*** ./scripts/components/search-field/component.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SearchField; });\n/* harmony import */ var my_crappy_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-crappy-components */ \"./node_modules/my-crappy-components/index.js\");\n\r\n\r\nclass SearchField extends my_crappy_components__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n\r\n    constructor({ element, data, template }) {\r\n        super({ element, data, template });\r\n        this.element.addEventListener('input', (event) => void this.dispatch('change', this.element.value, event));\r\n    }\r\n\r\n    get defaultTag() {\r\n        return 'input';\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./scripts/components/search-field/component.js?");

/***/ }),

/***/ "./scripts/components/select-field/component.js":
/*!******************************************************!*\
  !*** ./scripts/components/select-field/component.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SelectField; });\n/* harmony import */ var my_crappy_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-crappy-components */ \"./node_modules/my-crappy-components/index.js\");\n/* harmony import */ var _template_ejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.ejs */ \"./scripts/components/select-field/template.ejs\");\n/* harmony import */ var _template_ejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_template_ejs__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nclass SelectField extends my_crappy_components__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n\r\n    constructor({ element, data, template = _template_ejs__WEBPACK_IMPORTED_MODULE_1___default.a }) {\r\n        super({ element, data, template });\r\n        this.element.addEventListener('change', (event) => void this.dispatch('change', this.element.value, event));\r\n    }\r\n\r\n    get defaultTag() {\r\n        return 'select';\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./scripts/components/select-field/component.js?");

/***/ }),

/***/ "./scripts/components/select-field/template.ejs":
/*!******************************************************!*\
  !*** ./scripts/components/select-field/template.ejs ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function anonymous(locals, escapeFn, include, rethrow\n) {\nrethrow = rethrow || function rethrow(err, str, flnm, lineno, esc){\n  var lines = str.split('\\n');\n  var start = Math.max(lineno - 3, 0);\n  var end = Math.min(lines.length, lineno + 3);\n  var filename = esc(flnm); // eslint-disable-line\n  // Error context\n  var context = lines.slice(start, end).map(function (line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? ' >> ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'ejs') + ':'\n    + lineno + '\\n'\n    + context + '\\n\\n'\n    + err.message;\n\n  throw err;\n};\nescapeFn = escapeFn || function (markup) {\n  return markup == undefined\n    ? ''\n    : String(markup)\n      .replace(_MATCH_HTML, encode_char);\n};\nvar _ENCODE_HTML_RULES = {\n      \"&\": \"&amp;\"\n    , \"<\": \"&lt;\"\n    , \">\": \"&gt;\"\n    , '\"': \"&#34;\"\n    , \"'\": \"&#39;\"\n    }\n  , _MATCH_HTML = /[&<>'\"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n;\nvar __line = 1\n  , __lines = \"<% for(let { name, value } of elements) { %>\\r\\n    <option value=\\\"<%- value %>\\\"><%- name %></option>\\r\\n<% } %>\\r\\n\"\n  , __filename = undefined;\ntry {\n  var __output = [], __append = __output.push.bind(__output);\n  with (locals || {}) {\n    ;  for(let { name, value } of elements) { \n    ; __append(\"\\r\\n    <option value=\\\"\")\n    ; __line = 2\n    ; __append( value )\n    ; __append(\"\\\">\")\n    ; __append( name )\n    ; __append(\"</option>\\r\\n\")\n    ; __line = 3\n    ;  } \n    ; __append(\"\\r\\n\")\n    ; __line = 4\n  }\n  return __output.join(\"\");\n} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n\n}\n\n//# sourceURL=webpack:///./scripts/components/select-field/template.ejs?");

/***/ }),

/***/ "./scripts/fetcher.js":
/*!****************************!*\
  !*** ./scripts/fetcher.js ***!
  \****************************/
/*! exports provided: default, fetchJSON, abortAndFetchJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchJSON\", function() { return fetchJSON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"abortAndFetchJSON\", function() { return abortAndFetchJSON; });\nlet timestamp = null;\r\n\r\nasync function fetchJSON(url) {\r\n    let response = await fetch(url);\r\n    return await response.json();\r\n}\r\n\r\nasync function abortAndFetchJSON(url) {\r\n    let curTimestamp = timestamp = Date.now();\r\n    let obj = await fetchJSON(url);\r\n\r\n    if (curTimestamp == timestamp) {\r\n        return obj;\r\n    }\r\n\r\n    throw new Error('Request aborted');\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchJSON);\r\n\r\n\n\n//# sourceURL=webpack:///./scripts/fetcher.js?");

/***/ }),

/***/ "./scripts/image-thrower.js":
/*!**********************************!*\
  !*** ./scripts/image-thrower.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return throwImage; });\nfunction throwImage(source, target, url, changeOpacity, onComplete) {\r\n    return new Promise((resolve) => {\r\n        let img = new Image(source.clientWidth, source.clientHeight);\r\n        img.classList.add('transitioning-img');\r\n\r\n        let thumbRect = source.getBoundingClientRect();\r\n        img.style.top = source.clientTop + window.pageYOffset + thumbRect.top + 'px';\r\n        img.style.left = source.clientLeft + window.pageXOffset + thumbRect.left + 'px';\r\n        let angle = Math.round(Math.random() * 60 + 100) * Math.sign(Math.random() - 0.5);\r\n        img.style.transform = `rotate(${angle}deg)`;\r\n        img.style.borderRadius = '50%';\r\n        if (changeOpacity) {\r\n            img.style.opacity = 1;\r\n        }\r\n        img.src = url;\r\n\r\n        document.body.appendChild(img);\r\n\r\n        img.style.width = target.clientWidth - target.clientLeft + 'px';\r\n        img.style.height = target.clientHeight - target.clientTop + 'px';\r\n        img.style.transform = '';\r\n        img.style.borderRadius = '15px';\r\n\r\n        let largeImgRect = target.getBoundingClientRect();\r\n        img.style.top = target.clientTop + window.pageYOffset + largeImgRect.top + 'px';\r\n        img.style.left = target.clientLeft + window.pageXOffset + largeImgRect.left + 'px';\r\n        if (changeOpacity) {\r\n            img.style.opacity = 0;\r\n        }\r\n\r\n        img.addEventListener('transitionend', () => {\r\n            setTimeout(() => {\r\n                img.remove();\r\n                resolve();\r\n            }, 50);\r\n        });\r\n    });\r\n\r\n}\n\n//# sourceURL=webpack:///./scripts/image-thrower.js?");

/***/ })

/******/ });