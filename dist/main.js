/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

p {
    cursor: default;
}

:root {
    font-family: 'DM Sans', sans-serif;

    --primary-background: #1b1d1f;
    --secondary-background: rgba(240, 242, 245, 0.85);
    --tertiary-background: rgb(81, 88, 100);
    --hover-primary: #3f4246;
    --border-radius-value: 7px;
}

.navbar {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-background);
    color: white;
    font-size: 1.5rem;
}

.container {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    width: 220px;
    background-color: var(--primary-background);
    padding: 20px;
    color: white;
}

.sidebar-title {
    margin-bottom: 40px;
    font-size: 1.7rem;
    font-weight: 1000;
    text-align: center;
}

.content {
    padding: 40px 80px;
    flex-grow: 1;
    background-color: var(--secondary-background);
}

.content-title-div {
    font-size: 2rem;
    font-weight: 1000;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#edit-project-input {
    font-size: 1.3rem;
    padding: 7px 15px;
    border-radius: var(--border-radius-value);
    border: 0px;
    outline: 0;
    background-color: white;
    border: 0.5px solid rgb(224, 224, 224);
}

.edit-project-title svg {
    cursor: pointer;
    transition: 0.2s;
    border-radius: var(--border-radius-value);
    padding: 5px;
}

.edit-project-title svg:hover {
    transform: scale(1.1);
    background-color: rgb(219, 218, 218);
}

.sidebar-item {
    margin: 10px 0px;
    padding: 7px 15px;
    transition: 0.2s;
    border-radius: var(--border-radius-value);
    font-size: 1.2rem;
    height: 25px;
    display: flex;
    align-items: center;
}

.sidebar-item:hover {
    background-color: var(--hover-primary);
    cursor: pointer;
}

.project {
    justify-content: space-between;
}

.selected-project {
    background-color: var(--hover-primary);
}

.project-title {
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
}

.add-project-container {
    justify-content: end;
}

.add-project-button {
    cursor: pointer;
}

.add-project-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    height: 100px;
    transition: 0.2s;
}

.add-project-form-input input {
    border: 0px;
    height: 25px;
    max-width: 180px;
    padding: 5px 10px;
    border-radius: var(--border-radius-value);
    outline: 0px;
    background-color: #3f4246;
    color: white;
    font-size: 1.1rem;
    transition: 0.2s;
}

.add-project-form-input input:hover {
    transform: scale(1.05);
}

.add-project-form-buttons {
    display: flex;
    gap: 10px;
    width: 200px;
}

.submit-project-form,
.edit-task-save-button,
.edit-project-save-button {
    background-color: var(--tertiary-background);
    color: white;
}

.cancel-add-project-form,
.edit-task-cancel-button {
    background-color: rgb(210, 212, 218);
}

.add-project-form-buttons button {
    padding: 7px 3px;
    font-size: 1.15rem;
    flex-grow: 1;
    border-radius: var(--border-radius-value);
    border: 0px;
    cursor: pointer;
    transition: 0.2s;
    color: var(--primary-background);
}

.add-project-form-buttons button:hover {
    transform: scale(1.1);
}

.delete-project-svg {
    fill: white;
}

.delete-project-button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 0px;
    margin: 0px;
    padding: 0px;
    cursor: pointer;
}

.delete-project-button:hover {
    transform: scale(1.1);
}

.tasks-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
}

.task-item {
    background-color: white;
    box-shadow: 0px 2px 2px #dfe5ec;
    border-radius: var(--border-radius-value);
    border: 1px solid rgb(231, 231, 231);
    padding: 10px 15px;
    display: grid;
    grid-template-columns: 30px 1fr 100px 80px 50px;
    align-items: center;
    gap: 10px;
    height: 30px;
}

.task-completed {
    display: flex;
    justify-content: center;
    align-items: center;
}

.checkbox {
    border: 1px solid rgb(196, 196, 196);
    border-radius: 20px;
    height: 20px;
    width: 20px;
    cursor: pointer;
}

.checked {
    background-color: var(--tertiary-background);
}

.strikethrough {
    text-decoration: line-through;
}

.edit-task-item {
    background-color: white;
    box-shadow: 0px 2px 2px #dfe5ec;
    border-radius: var(--border-radius-value);
    border: 1px solid rgb(231, 231, 231);
    padding: 15px 15px 5px 15px;
    display: grid;
    grid-template-columns: 1fr 250px;
    grid-template-rows: 30px 100px 50px;
    align-items: center;
    gap: 15px;
}

.edit-task-description-container {
    grid-row: 2 / 3;
    grid-column: 1 / -1;
    align-self: stretch;
}

.edit-task-description-container textarea {
    width: 98.5%;
    height: 95%;
    border-radius: var(--border-radius-value);
    outline: 0;
    border: 0.5px solid rgb(224, 224, 224);
    resize: none;
    font-family: 'DM Sans', sans-serif;
    padding: 10px 0px 0px 10px;
    background-color: var(--secondary-background);
}

.edit-task-priority-and-due-date-container {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    display: flex;
    gap: 10px;
}

input[type="date"] {
    padding: 7px 15px;
    border-radius: var(--border-radius-value);
    border: 0px;
    outline: 0;
    background-color: var(--secondary-background);
    border: 0.5px solid rgb(224, 224, 224);
}

.priority-selector,
.project-selector {
    padding: 7px 15px;
    border: 0;
    outline: 0;
    border-radius: var(--border-radius-value);
    background-color: var(--secondary-background);
    height: 100%;
    border: 0.5px solid rgb(224, 224, 224);
}

.edit-task-action-buttons {
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    justify-self: end;
    display: flex;
    gap: 7px;
}

.edit-task-action-buttons button {
    border: 0;
    padding: 7px 15px;
    border-radius: var(--border-radius-value);
    transition: 0.2s;
    cursor: pointer;
    font-size: 1.05rem;
}

.edit-task-action-buttons button:hover {
    transform: scale(1.1);
}

.edit-task-title-container input {
    background-color: var(--secondary-background);
    padding: 7px 15px;
    border-radius: var(--border-radius-value);
    border: 0px;
    outline: 0px;
    color: black;
    font-weight: 500;
    font-size: 1rem;
    border: 0.5px solid rgb(224, 224, 224);
}


.edit-task-project-container {
    display: flex;
    justify-content: end;
}

.task-title {
    font-weight: bold;
    flex-grow: 1;
}


[class^="task-priority-"] {
    padding: 5px 10px;
    border-radius: var(--border-radius-value);
    justify-self: stretch;
    text-align: center;
    border: 2px solid var(--tertiary-background);
    background-color: var(--secondary-background);
}

.add-task-div {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}

.add-task-button,
.clear-completed-tasks {
    padding: 10px 15px;
    font-size: 1rem;
    box-shadow: 0px 4px 4px #dfe5ec;
    border-radius: var(--border-radius-value);
    background-color: var(--primary-background);
    border: 0px;
    text-align: start;
    transition: 0.2s;
    color: white;
}

.add-task-item {
    width: 100%;
}

.add-task-button:hover,
.clear-completed-tasks:hover {
    background-color: var(--hover-primary);
    cursor: pointer;
}

.action-buttons-container {
    display: flex;
    align-items: center;
    gap: 5px;
}

.action-button {
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: 0.1s;
}

.action-button:hover {
    transform: scale(1.15);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300&display=swap');\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\np {\n    cursor: default;\n}\n\n:root {\n    font-family: 'DM Sans', sans-serif;\n\n    --primary-background: #1b1d1f;\n    --secondary-background: rgba(240, 242, 245, 0.85);\n    --tertiary-background: rgb(81, 88, 100);\n    --hover-primary: #3f4246;\n    --border-radius-value: 7px;\n}\n\n.navbar {\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--primary-background);\n    color: white;\n    font-size: 1.5rem;\n}\n\n.container {\n    display: flex;\n    min-height: 100vh;\n}\n\n.sidebar {\n    width: 220px;\n    background-color: var(--primary-background);\n    padding: 20px;\n    color: white;\n}\n\n.sidebar-title {\n    margin-bottom: 40px;\n    font-size: 1.7rem;\n    font-weight: 1000;\n    text-align: center;\n}\n\n.content {\n    padding: 40px 80px;\n    flex-grow: 1;\n    background-color: var(--secondary-background);\n}\n\n.content-title-div {\n    font-size: 2rem;\n    font-weight: 1000;\n    margin-bottom: 30px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#edit-project-input {\n    font-size: 1.3rem;\n    padding: 7px 15px;\n    border-radius: var(--border-radius-value);\n    border: 0px;\n    outline: 0;\n    background-color: white;\n    border: 0.5px solid rgb(224, 224, 224);\n}\n\n.edit-project-title svg {\n    cursor: pointer;\n    transition: 0.2s;\n    border-radius: var(--border-radius-value);\n    padding: 5px;\n}\n\n.edit-project-title svg:hover {\n    transform: scale(1.1);\n    background-color: rgb(219, 218, 218);\n}\n\n.sidebar-item {\n    margin: 10px 0px;\n    padding: 7px 15px;\n    transition: 0.2s;\n    border-radius: var(--border-radius-value);\n    font-size: 1.2rem;\n    height: 25px;\n    display: flex;\n    align-items: center;\n}\n\n.sidebar-item:hover {\n    background-color: var(--hover-primary);\n    cursor: pointer;\n}\n\n.project {\n    justify-content: space-between;\n}\n\n.selected-project {\n    background-color: var(--hover-primary);\n}\n\n.project-title {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    cursor: pointer;\n}\n\n.add-project-container {\n    justify-content: end;\n}\n\n.add-project-button {\n    cursor: pointer;\n}\n\n.add-project-form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    justify-content: center;\n    align-items: center;\n    height: 100px;\n    transition: 0.2s;\n}\n\n.add-project-form-input input {\n    border: 0px;\n    height: 25px;\n    max-width: 180px;\n    padding: 5px 10px;\n    border-radius: var(--border-radius-value);\n    outline: 0px;\n    background-color: #3f4246;\n    color: white;\n    font-size: 1.1rem;\n    transition: 0.2s;\n}\n\n.add-project-form-input input:hover {\n    transform: scale(1.05);\n}\n\n.add-project-form-buttons {\n    display: flex;\n    gap: 10px;\n    width: 200px;\n}\n\n.submit-project-form,\n.edit-task-save-button,\n.edit-project-save-button {\n    background-color: var(--tertiary-background);\n    color: white;\n}\n\n.cancel-add-project-form,\n.edit-task-cancel-button {\n    background-color: rgb(210, 212, 218);\n}\n\n.add-project-form-buttons button {\n    padding: 7px 3px;\n    font-size: 1.15rem;\n    flex-grow: 1;\n    border-radius: var(--border-radius-value);\n    border: 0px;\n    cursor: pointer;\n    transition: 0.2s;\n    color: var(--primary-background);\n}\n\n.add-project-form-buttons button:hover {\n    transform: scale(1.1);\n}\n\n.delete-project-svg {\n    fill: white;\n}\n\n.delete-project-button {\n    display: flex;\n    align-items: center;\n    background-color: transparent;\n    border: 0px;\n    margin: 0px;\n    padding: 0px;\n    cursor: pointer;\n}\n\n.delete-project-button:hover {\n    transform: scale(1.1);\n}\n\n.tasks-content {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-top: 10px;\n}\n\n.task-item {\n    background-color: white;\n    box-shadow: 0px 2px 2px #dfe5ec;\n    border-radius: var(--border-radius-value);\n    border: 1px solid rgb(231, 231, 231);\n    padding: 10px 15px;\n    display: grid;\n    grid-template-columns: 30px 1fr 100px 80px 50px;\n    align-items: center;\n    gap: 10px;\n    height: 30px;\n}\n\n.task-completed {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.checkbox {\n    border: 1px solid rgb(196, 196, 196);\n    border-radius: 20px;\n    height: 20px;\n    width: 20px;\n    cursor: pointer;\n}\n\n.checked {\n    background-color: var(--tertiary-background);\n}\n\n.strikethrough {\n    text-decoration: line-through;\n}\n\n.edit-task-item {\n    background-color: white;\n    box-shadow: 0px 2px 2px #dfe5ec;\n    border-radius: var(--border-radius-value);\n    border: 1px solid rgb(231, 231, 231);\n    padding: 15px 15px 5px 15px;\n    display: grid;\n    grid-template-columns: 1fr 250px;\n    grid-template-rows: 30px 100px 50px;\n    align-items: center;\n    gap: 15px;\n}\n\n.edit-task-description-container {\n    grid-row: 2 / 3;\n    grid-column: 1 / -1;\n    align-self: stretch;\n}\n\n.edit-task-description-container textarea {\n    width: 98.5%;\n    height: 95%;\n    border-radius: var(--border-radius-value);\n    outline: 0;\n    border: 0.5px solid rgb(224, 224, 224);\n    resize: none;\n    font-family: 'DM Sans', sans-serif;\n    padding: 10px 0px 0px 10px;\n    background-color: var(--secondary-background);\n}\n\n.edit-task-priority-and-due-date-container {\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n    display: flex;\n    gap: 10px;\n}\n\ninput[type=\"date\"] {\n    padding: 7px 15px;\n    border-radius: var(--border-radius-value);\n    border: 0px;\n    outline: 0;\n    background-color: var(--secondary-background);\n    border: 0.5px solid rgb(224, 224, 224);\n}\n\n.priority-selector,\n.project-selector {\n    padding: 7px 15px;\n    border: 0;\n    outline: 0;\n    border-radius: var(--border-radius-value);\n    background-color: var(--secondary-background);\n    height: 100%;\n    border: 0.5px solid rgb(224, 224, 224);\n}\n\n.edit-task-action-buttons {\n    grid-row: 3 / 4;\n    grid-column: 2 / 3;\n    justify-self: end;\n    display: flex;\n    gap: 7px;\n}\n\n.edit-task-action-buttons button {\n    border: 0;\n    padding: 7px 15px;\n    border-radius: var(--border-radius-value);\n    transition: 0.2s;\n    cursor: pointer;\n    font-size: 1.05rem;\n}\n\n.edit-task-action-buttons button:hover {\n    transform: scale(1.1);\n}\n\n.edit-task-title-container input {\n    background-color: var(--secondary-background);\n    padding: 7px 15px;\n    border-radius: var(--border-radius-value);\n    border: 0px;\n    outline: 0px;\n    color: black;\n    font-weight: 500;\n    font-size: 1rem;\n    border: 0.5px solid rgb(224, 224, 224);\n}\n\n\n.edit-task-project-container {\n    display: flex;\n    justify-content: end;\n}\n\n.task-title {\n    font-weight: bold;\n    flex-grow: 1;\n}\n\n\n[class^=\"task-priority-\"] {\n    padding: 5px 10px;\n    border-radius: var(--border-radius-value);\n    justify-self: stretch;\n    text-align: center;\n    border: 2px solid var(--tertiary-background);\n    background-color: var(--secondary-background);\n}\n\n.add-task-div {\n    margin-top: 10px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.add-task-button,\n.clear-completed-tasks {\n    padding: 10px 15px;\n    font-size: 1rem;\n    box-shadow: 0px 4px 4px #dfe5ec;\n    border-radius: var(--border-radius-value);\n    background-color: var(--primary-background);\n    border: 0px;\n    text-align: start;\n    transition: 0.2s;\n    color: white;\n}\n\n.add-task-item {\n    width: 100%;\n}\n\n.add-task-button:hover,\n.clear-completed-tasks:hover {\n    background-color: var(--hover-primary);\n    cursor: pointer;\n}\n\n.action-buttons-container {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.action-button {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    transition: 0.1s;\n}\n\n.action-button:hover {\n    transform: scale(1.15);\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/crud.js":
/*!*********************!*\
  !*** ./src/crud.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allProjects: () => (/* binding */ allProjects),
/* harmony export */   clearCompletedTasks: () => (/* binding */ clearCompletedTasks),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   editProjectTitle: () => (/* binding */ editProjectTitle),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   getTasksInProject: () => (/* binding */ getTasksInProject),
/* harmony export */   syncAllProjects: () => (/* binding */ syncAllProjects),
/* harmony export */   toggleCompletion: () => (/* binding */ toggleCompletion),
/* harmony export */   updateLocalStorage: () => (/* binding */ updateLocalStorage)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


let allProjects;
let inboxId;

// Check if local storage contains "allProjects" and if not, initiate it with default "inbox" project
const syncAllProjects = function() {
    const items = localStorage.getItem('allProjects');
    let inbox;
    if (items === null) {
        allProjects = {};
        inbox = createProject('Inbox');
    } else {
        const parsedItems = JSON.parse(items);
        allProjects = parsedItems
        inbox = allProjects[Object.keys(allProjects)[0]];
    }
    inboxId = inbox.id;
};

// Function to update local storage after making changes to allProjects object
const updateLocalStorage = function() {
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
};

// Factory function to create new project
function createProject (title) { 
    const tasks = {};
    const id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const newProject = { title, tasks, id };
    allProjects[id] = newProject;
    updateLocalStorage();
    return newProject;
};

// Factory function to create new todo list, added to inbox by default
const createTask = function(title, directory, description, dueDate, priority) {

    // Define a "complete" property which defaults to False
    const complete = false;

    // Create a unique identifier for created object
    const id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();

    // Create the new to-do item
    const createdTask = { title, description, dueDate, priority, directory, complete, id };

    // Add the newly created item onto the desired projects list
    allProjects[directory].tasks[id] = createdTask;

    // Update local storage
    updateLocalStorage();

    // Return the item, thereby assigning it to the created variable outside 
    return createdTask;
};

const getTasksInProject = function (projectId) {
    return allProjects[projectId].tasks;
};

const deleteTask = function(taskId, projectId) {
    delete allProjects[projectId].tasks[taskId];
    updateLocalStorage();
};

const deleteProject = function(id) {
    if (id === inboxId) {
        return console.log('cannot delete inbox');
    }
    for (const key in allProjects) {
        if (key === id) {
            delete allProjects[key];
            updateLocalStorage();
        }
    }
};

const editTask = function(taskId, currentProject, newProject, title, description, dueDate, priority) {
    if (currentProject != newProject) {
        deleteTask(taskId);
        createTask(title, newProject, description, dueDate, priority);
    }
    else {
        allProjects[currentProject].tasks[taskId].title = title;
        allProjects[currentProject].tasks[taskId].description = description;
        allProjects[currentProject].tasks[taskId].dueDate = dueDate;
        allProjects[currentProject].tasks[taskId].priority = priority;
        updateLocalStorage();
    }
};

const toggleCompletion = function(taskId, projectId) {
    allProjects[projectId].tasks[taskId].complete = !allProjects[projectId].tasks[taskId].complete;
    updateLocalStorage();
};

const editProjectTitle = function(projectId, newTitle) {
    allProjects[projectId].title = newTitle;
    updateLocalStorage()
}

const clearCompletedTasks = function(projectId) {
    let project = allProjects[projectId].tasks;
    for (const key in project) {
        let task = project[key];
        if (task.complete === true) {
            delete allProjects[projectId].tasks[key];
            updateLocalStorage();
        }
    }
}



/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectSelector: () => (/* binding */ addProjectSelector),
/* harmony export */   addSelectedClass: () => (/* binding */ addSelectedClass),
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   defaultSelectedProject: () => (/* binding */ defaultSelectedProject),
/* harmony export */   deleteProjectEvent: () => (/* binding */ deleteProjectEvent),
/* harmony export */   deleteTaskEvent: () => (/* binding */ deleteTaskEvent),
/* harmony export */   displayProjects: () => (/* binding */ displayProjects),
/* harmony export */   displayTasks: () => (/* binding */ displayTasks),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   editTaskEvent: () => (/* binding */ editTaskEvent),
/* harmony export */   switchProjects: () => (/* binding */ switchProjects)
/* harmony export */ });
/* harmony import */ var _crud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud */ "./src/crud.js");


// Accept form input and create new task
const addTask = function() {
    document.querySelector('.content').addEventListener('click', (event) => {
        if (event.target.classList.contains('submit-task-form')) {
            const title = document.querySelector('#title').value;
            const description = document.querySelector('#description').value;
            const dueDate = document.querySelector('#due-date').value;
            const priority = document.querySelector('#priority').value;
            const project = document.querySelector('#add-task-project-selector').value;
            
            _crud__WEBPACK_IMPORTED_MODULE_0__.createTask(title, project, description, dueDate, priority);
            displayTasks();
        }
    })
}();

const addProjectEvents = function() {
    document.querySelector('.sidebar').addEventListener('click', function (event) {
        if (event.target.className === 'submit-project-form') {
            const title = document.querySelector('#project-title').value;
            _crud__WEBPACK_IMPORTED_MODULE_0__.createProject(title);
            displayProjects();
            addProjectSelector();
            displayAddProjectButton();
            
            const newlyCreatedProject = document.querySelector('.project:last-child');
            removeSelectedClass();
            addSelectedClass(newlyCreatedProject);

            displayTasks();
        }
        if (event.target.className === 'cancel-add-project-form') {
            displayAddProjectButton();
        }
        if (event.target.closest('.add-project-container')) {
            const trigger = event.target.closest('.add-project-container');
            trigger.innerHTML = `
            <div class="add-project-form">
                <div class="add-project-form-input">
                    <input type="text" name="project-title" id="project-title" placeholder="add project">
                </div>
                <div class="add-project-form-buttons">
                    <button type="button" class="submit-project-form">Submit</button>
                    <button type="button" class="cancel-add-project-form">Cancel</button>
                </div>
            </div>
            `
            trigger.classList.remove('add-project-container');
            trigger.classList.remove('sidebar-item');
            trigger.classList.add('add-project-form-container');
            document.querySelector('#project-title').focus();
        }
    })
}();

function displayAddProjectButton() {
    const add = document.querySelector('.add-project-form-container');
    add.innerHTML = `<p class="add-project-button">+ Add Project</p>`;
    add.classList.remove('add-project-form-container');
    add.classList.add('add-project-container');
    add.classList.add('sidebar-item');
};

const addTaskEvents = function() {

    document.querySelector('.content').addEventListener('click', (event) => {
        if (event.target.className === 'add-task-button') {
            displayTasks();
            const addTaskDiv = document.querySelector('.add-task-div');
            addTaskDiv.innerHTML = `
            <div class="edit-task-item add-task-item">
                <div class="edit-task-title-container">
                    <input type="text" name="title" id="title" placeholder="Add title">
                </div>
                <div class="edit-task-description-container">
                    <textarea class="edit-task-description-input" id="description" name="description" placeholder="Add description"></textarea>
                </div>
                <div class="edit-task-priority-and-due-date-container">
                    <input type="date" name="due-date" id="due-date" placeholder="due date">
                    <select class="priority-selector" name="priority" id="priority">
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low" selected>Low</option>
                    </select>
                </div>
                <div class="edit-task-project-container">
                    <select class="project-selector" name="add-task-project-selector" id="add-task-project-selector"></select>
                </div>
                <div class="edit-task-action-buttons">
                    <button type="button" class="submit-task-form edit-task-save-button">Add Task</button>
                    <button type="button" class="close-task-dialog edit-task-cancel-button">Close</button>
                </div>
            </div>
        `;
        addProjectSelector();
        document.querySelector('#title').focus();
        addTaskDiv.scrollIntoView({ behavior: "smooth" });
        }
    })

    document.querySelector('.add-task-div').addEventListener('click', (event) => {
        if (event.target.classList.contains('close-task-dialog')) {
            displayTasks();
        }
    })

}();

function displayProjects() {
    const sidebar = document.querySelector('.sidebar-projects');
    sidebar.innerHTML = '';
    for (const key in _crud__WEBPACK_IMPORTED_MODULE_0__.allProjects) {
        const project = _crud__WEBPACK_IMPORTED_MODULE_0__.allProjects[key];
        const newProject = document.createElement('div');
        newProject.className = 'project sidebar-item';
        newProject.setAttribute('data-project-id', `${project.id}`)
        newProject.innerHTML = `
            <p class="project-title">${project.title}</p>  
            <button class="delete-project-button">
                <svg class="delete-project-svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path  class="delete-project-svg-path" d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"/></svg>
            </button>
        `;
        sidebar.appendChild(newProject);
    }
    defaultSelectedProject();
}

const addProjectSelector = function() {
    const selectProjects = document.querySelectorAll('.project-selector');
    const currentProject = document.querySelector('.selected-project');

    selectProjects.forEach((selectProject) => {
        selectProject.innerHTML = '';
        for (const key in _crud__WEBPACK_IMPORTED_MODULE_0__.allProjects) {
            const project = _crud__WEBPACK_IMPORTED_MODULE_0__.allProjects[key];
            if (currentProject.dataset.projectId === key) {
                selectProject.innerHTML += `
                    <option value="${project.id}" selected>${project.title}</option>
                `;
            } else {
                selectProject.innerHTML += `
                    <option value="${project.id}">${project.title}</option>
                `;
            }
        }
    })    
};

const switchProjects = function() {
    const sidebar = document.querySelector('.sidebar-projects');
    sidebar.addEventListener('click', (event) => {

        let clicked = 0;
        let clickedProject;

        if (event.target.classList.contains('project')) {
            clickedProject = event.target;
            clicked = 1;
        }
        if (event.target.classList.contains('project-title')) {
            clickedProject = event.target.parentElement;
            clicked = 1;
        }
        if (clicked === 1) {
            removeSelectedClass();
            addSelectedClass(clickedProject);
            displayTasks();
        }
    })
}();

const displayTasks = function() {
    const content = document.querySelector('.tasks-content');

    const projectId = document.querySelector('.selected-project').dataset.projectId;
    const title = _crud__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectId].title;
    content.innerHTML = `
        <div class="content-title-div">
            <p class="content-title">${title}</p>
            <div class="edit-project-title">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
            </div>
        </div>
    `

    const tasksObject = _crud__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectId].tasks

    let completedTasksPresent = false;

    for (const key in tasksObject) {
        const task = tasksObject[key];
        content.innerHTML += `
            <div class="task-item" data-task-id="${task.id}">
                <div class="task-completed">
                    <div class="checkbox"></div>
                </div>
                <p class="task-title">${task.title}</p>
                <p class="task-due-date">${task.dueDate}</p>
                <p class="task-priority-${task.priority}">${task.priority}</p>
                <div class="action-buttons-container">
                    <div class="action-button edit-task-button">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                    </div>
                    <div class="action-button delete-task-button">    
                            <svg class="delete-task-svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path  class="delete-project-svg-path" d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"/></svg>
                    </div>
                </div>
            </div>
        `;

        if (task.complete === true) {
            completedTasksPresent = true;
            document.querySelector(`[data-task-id="${task.id}"] .checkbox`).classList.add('checked');
            document.querySelector(`[data-task-id="${task.id}"] .task-title`).classList.add('strikethrough');
            document.querySelector(`[data-task-id="${task.id}"] .task-priority-${task.priority}`).innerHTML = '';
            document.querySelector(`[data-task-id="${task.id}"] .task-priority-${task.priority}`).className = '';
            document.querySelector(`[data-task-id="${task.id}"] .edit-task-button`).innerHTML = '';
        }
    }

    if (completedTasksPresent) {
        document.querySelector('.add-task-div').innerHTML = `
        <button type="button" class="add-task-button">+ Add Task</button>
        <button type="button" class="clear-completed-tasks">Clear Completed Tasks</button>
        `;
    } else {
        document.querySelector('.add-task-div').innerHTML = `
        <button type="button" class="add-task-button">+ Add Task</button>
        `;
    }
};

const clearCompletedTasks = function() {
    document.querySelector('.content').addEventListener('click', (event) => {
        if (event.target.className === 'clear-completed-tasks') {
            const projectId = document.querySelector('.selected-project').dataset.projectId;
            _crud__WEBPACK_IMPORTED_MODULE_0__.clearCompletedTasks(projectId);
            displayTasks();
        }
    })
}();

const deleteTaskEvent = function() {
    const content = document.querySelector('.tasks-content');
    content.addEventListener('click', (event) => {

        if (event.target.closest('.delete-task-button')) {
            const clickedTask = event.target.closest('[data-task-id]');
            const id = clickedTask.dataset.taskId;
            const projectId = document.querySelector('.selected-project').dataset.projectId;
            _crud__WEBPACK_IMPORTED_MODULE_0__.deleteTask(id, projectId);
            displayTasks();
        }
    })
}();

const deleteProjectEvent = function() {
    const content = document.querySelector('.sidebar-projects');
    content.addEventListener('click', (event) => {
        if (event.target.closest('.delete-project-button')) {

            const currentProject = document.querySelector('.selected-project').dataset.projectId;
            const id = event.target.closest('[data-project-id]').dataset.projectId;
            _crud__WEBPACK_IMPORTED_MODULE_0__.deleteProject(id);
            displayProjects();
            
            if (currentProject != id) {
                removeSelectedClass();
                addSelectedClass(document.querySelector(`[data-project-id="${currentProject}"]`));
            }
            
            displayTasks();
        }
    })
}();

function removeSelectedClass() {
    const currentSelection = document.querySelector('.selected-project');
    currentSelection.classList.remove('selected-project')
};

function addSelectedClass(projectElement) {
    projectElement.classList.add('selected-project');
    addProjectSelector();
};

const defaultSelectedProject = function() {
    const currentSelection = document.querySelector('.selected-project');
    if (currentSelection === null) {
        const inbox = document.querySelector('.project');
        inbox.classList.add('selected-project');
        addProjectSelector();
    }
};

const editTaskEvent = function() {
    
    const content = document.querySelector('.tasks-content');
    content.addEventListener('click', (event) => {

        if (event.target.closest('.edit-task-button')) {

            displayTasks();
            
            const projectId = document.querySelector('.selected-project').dataset.projectId;
            const taskId = event.target.closest('[data-task-id]').dataset.taskId;
            const clickedTask = document.querySelector(`[data-task-id="${taskId}"]`);

            clickedTask.classList.remove('task-item');
            clickedTask.classList.add('edit-task-item');
            clickedTask.innerHTML = `
                <div class="edit-task-title-container">
                    <input type="text" class="edit-task-title-input" id="edit-task-title-input" name="edit-task-title-input" value="${_crud__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectId].tasks[taskId].title}" placeholder="Add title">
                </div>

                <div class="edit-task-project-container">
                    <select class="project-selector" name="edit-project-selector" id="edit-project-selector"></select>    
                </div>

                <div class="edit-task-description-container">
                    <textarea class="edit-task-description-input" id="edit-task-description-input" name="edit-task-description-input" placeholder="Add description">${_crud__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectId].tasks[taskId].description}</textarea>
                </div>

                <div class="edit-task-priority-and-due-date-container">
                    <div class="edit-task-due-date-container">
                        <input type="date" class="edit-task-due-date-input" id="edit-task-due-date-input" name="edit-task-due-date-input" value=${_crud__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectId].tasks[taskId].dueDate}>
                    </div>
                    <div class="edit-task-priority-container">
                        <select class="priority-selector" name="edit-priority-${taskId}" id="edit-priority-${taskId}">
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                </div>
                
                <div class="edit-task-action-buttons">
                    <button type="button" class="edit-task-save-button">Save</button>
                    <button type="button" class="edit-task-cancel-button">Cancel</button>
                </div>
            `;

            const currentPriorityOption = document.querySelector(`#edit-priority-${taskId} option[value="${_crud__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectId].tasks[taskId].priority}"]`);
            currentPriorityOption.selected = true;
            addProjectSelector();
        }
    });
}();

const cancelEditTask = function() {
    document.querySelector('.tasks-content').addEventListener('click', (event) => {
        if (event.target.className === 'edit-task-cancel-button') {
            displayTasks();
        }
    })
}();

const editTask = function() {
    const content = document.querySelector('.tasks-content');
    content.addEventListener('click', (event) => {
        if (event.target.className === 'edit-task-save-button') {
            const taskId = event.target.closest('[data-task-id]').dataset.taskId;
            const currentProjectId = document.querySelector('.selected-project').dataset.projectId;
            
            const title = document.querySelector('#edit-task-title-input').value;
            const description = document.querySelector('#edit-task-description-input').value;
            const dueDate = document.querySelector('#edit-task-due-date-input').value;
            const priority = document.querySelector(`#edit-priority-${taskId}`).value;
            const newProject = document.querySelector('#edit-project-selector').value;

            _crud__WEBPACK_IMPORTED_MODULE_0__.editTask(taskId, currentProjectId, newProject, title, description, dueDate, priority)
            displayTasks();
        }
    })
}();

const checkboxEvents = function() {
    document.querySelector('.tasks-content').addEventListener('click', (event) => {
        if (event.target.classList.contains('checkbox')) {

            event.target.classList.toggle('checked');

            const taskId = event.target.closest('[data-task-id]').dataset.taskId;
            const projectId = document.querySelector('.selected-project').dataset.projectId;
            _crud__WEBPACK_IMPORTED_MODULE_0__.toggleCompletion(taskId, projectId);

            displayTasks();
        }
    })
}();

const editProjectEvent = function() {
    const content = document.querySelector('.content');
    content.addEventListener('click', (event) => {
        if (event.target.closest('.edit-project-title')) {
            const projectId = document.querySelector('.selected-project').dataset.projectId;
            const div = document.querySelector('.content-title-div');
            div.innerHTML = `
            <input type="text" name="edit-project-input" id="edit-project-input" value="${_crud__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectId].title}">
            <div class="edit-task-action-buttons">
                    <button type="button" class="edit-project-save-button">Save</button>
                    <button type="button" class="edit-task-cancel-button">Cancel</button>
            </div>
            `;
            document.querySelector('#edit-project-input');
        }
        if (event.target.className === 'edit-project-save-button') {
            const projectId = document.querySelector('.selected-project').dataset.projectId;
            const newTitle = document.querySelector('#edit-project-input').value;
            _crud__WEBPACK_IMPORTED_MODULE_0__.editProjectTitle(projectId, newTitle);
            displayProjects();
            removeSelectedClass();
            addSelectedClass(document.querySelector(`[data-project-id="${projectId}"]`));
            displayTasks();
        }
    })
}();



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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud.js */ "./src/crud.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");




_crud_js__WEBPACK_IMPORTED_MODULE_1__.syncAllProjects();
_dom_js__WEBPACK_IMPORTED_MODULE_2__.displayProjects();
_dom_js__WEBPACK_IMPORTED_MODULE_2__.displayTasks();

console.log(_crud_js__WEBPACK_IMPORTED_MODULE_1__.allProjects);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlJQUF5STtBQUN6STtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGtGQUFrRixNQUFNLGlCQUFpQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksT0FBTyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZ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VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2E7QUFDRjs7QUFFaEMscURBQW9CO0FBQ3BCLG9EQUFtQjtBQUNuQixpREFBZ0I7O0FBRWhCLFlBQVksaURBQWdCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NydWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ETStTYW5zOm9wc3osd2dodEA5Li40MCwzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5vbCwgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSwgcSB7XG5cdHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0Y29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbnAge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuOnJvb3Qge1xuICAgIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XG5cbiAgICAtLXByaW1hcnktYmFja2dyb3VuZDogIzFiMWQxZjtcbiAgICAtLXNlY29uZGFyeS1iYWNrZ3JvdW5kOiByZ2JhKDI0MCwgMjQyLCAyNDUsIDAuODUpO1xuICAgIC0tdGVydGlhcnktYmFja2dyb3VuZDogcmdiKDgxLCA4OCwgMTAwKTtcbiAgICAtLWhvdmVyLXByaW1hcnk6ICMzZjQyNDY7XG4gICAgLS1ib3JkZXItcmFkaXVzLXZhbHVlOiA3cHg7XG59XG5cbi5uYXZiYXIge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5zaWRlYmFyIHtcbiAgICB3aWR0aDogMjIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNpZGViYXItdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVudCB7XG4gICAgcGFkZGluZzogNDBweCA4MHB4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZCk7XG59XG5cbi5jb250ZW50LXRpdGxlLWRpdiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2VkaXQtcHJvamVjdC1pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgcGFkZGluZzogN3B4IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigyMjQsIDIyNCwgMjI0KTtcbn1cblxuLmVkaXQtcHJvamVjdC10aXRsZSBzdmcge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmVkaXQtcHJvamVjdC10aXRsZSBzdmc6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMTgsIDIxOCk7XG59XG5cbi5zaWRlYmFyLWl0ZW0ge1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgcGFkZGluZzogN3B4IDE1cHg7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2lkZWJhci1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1wcmltYXJ5KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zZWxlY3RlZC1wcm9qZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1wcmltYXJ5KTtcbn1cblxuLnByb2plY3QtdGl0bGUge1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLXByb2plY3QtY29udGFpbmVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLXByb2plY3QtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLmFkZC1wcm9qZWN0LWZvcm0taW5wdXQgaW5wdXQge1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xuICAgIG91dGxpbmU6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y0MjQ2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uYWRkLXByb2plY3QtZm9ybS1pbnB1dCBpbnB1dDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLmFkZC1wcm9qZWN0LWZvcm0tYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc3VibWl0LXByb2plY3QtZm9ybSxcbi5lZGl0LXRhc2stc2F2ZS1idXR0b24sXG4uZWRpdC1wcm9qZWN0LXNhdmUtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1iYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYW5jZWwtYWRkLXByb2plY3QtZm9ybSxcbi5lZGl0LXRhc2stY2FuY2VsLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMjEyLCAyMTgpO1xufVxuXG4uYWRkLXByb2plY3QtZm9ybS1idXR0b25zIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogN3B4IDNweDtcbiAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xufVxuXG4uYWRkLXByb2plY3QtZm9ybS1idXR0b25zIGJ1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uZGVsZXRlLXByb2plY3Qtc3ZnIHtcbiAgICBmaWxsOiB3aGl0ZTtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kZWxldGUtcHJvamVjdC1idXR0b246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLnRhc2tzLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRhc2staXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggI2RmZTVlYztcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjMxLCAyMzEsIDIzMSk7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDFmciAxMDBweCA4MHB4IDUwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4udGFzay1jb21wbGV0ZWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNoZWNrYm94IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk2LCAxOTYsIDE5Nik7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktYmFja2dyb3VuZCk7XG59XG5cbi5zdHJpa2V0aHJvdWdoIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLmVkaXQtdGFzay1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAjZGZlNWVjO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzEsIDIzMSwgMjMxKTtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggNXB4IDE1cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyNTBweDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMTAwcHggNTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTVweDtcbn1cblxuLmVkaXQtdGFzay1kZXNjcmlwdGlvbi1jb250YWluZXIge1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG59XG5cbi5lZGl0LXRhc2stZGVzY3JpcHRpb24tY29udGFpbmVyIHRleHRhcmVhIHtcbiAgICB3aWR0aDogOTguNSU7XG4gICAgaGVpZ2h0OiA5NSU7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigyMjQsIDIyNCwgMjI0KTtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZCk7XG59XG5cbi5lZGl0LXRhc2stcHJpb3JpdHktYW5kLWR1ZS1kYXRlLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAzIC8gNDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbn1cblxuaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xuICAgIHBhZGRpbmc6IDdweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xuICAgIGJvcmRlcjogMHB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQpO1xuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDIyNCwgMjI0LCAyMjQpO1xufVxuXG4ucHJpb3JpdHktc2VsZWN0b3IsXG4ucHJvamVjdC1zZWxlY3RvciB7XG4gICAgcGFkZGluZzogN3B4IDE1cHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigyMjQsIDIyNCwgMjI0KTtcbn1cblxuLmVkaXQtdGFzay1hY3Rpb24tYnV0dG9ucyB7XG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogN3B4O1xufVxuXG4uZWRpdC10YXNrLWFjdGlvbi1idXR0b25zIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDdweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcbn1cblxuLmVkaXQtdGFzay1hY3Rpb24tYnV0dG9ucyBidXR0b246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmVkaXQtdGFzay10aXRsZS1jb250YWluZXIgaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kKTtcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcbiAgICBib3JkZXI6IDBweDtcbiAgICBvdXRsaW5lOiAwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDIyNCwgMjI0LCAyMjQpO1xufVxuXG5cbi5lZGl0LXRhc2stcHJvamVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG5cbi50YXNrLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cblxuW2NsYXNzXj1cInRhc2stcHJpb3JpdHktXCJdIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcbiAgICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRlcnRpYXJ5LWJhY2tncm91bmQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kKTtcbn1cblxuLmFkZC10YXNrLWRpdiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmFkZC10YXNrLWJ1dHRvbixcbi5jbGVhci1jb21wbGV0ZWQtdGFza3Mge1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggI2RmZTVlYztcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xuICAgIGJvcmRlcjogMHB4O1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWRkLXRhc2staXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5hZGQtdGFzay1idXR0b246aG92ZXIsXG4uY2xlYXItY29tcGxldGVkLXRhc2tzOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1wcmltYXJ5KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hY3Rpb24tYnV0dG9ucy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC4xcztcbn1cblxuLmFjdGlvbi1idXR0b246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFJRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0NBQWtDOztJQUVsQyw2QkFBNkI7SUFDN0IsaURBQWlEO0lBQ2pELHVDQUF1QztJQUN2Qyx3QkFBd0I7SUFDeEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQyxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0MsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNq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Z0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ETStTYW5zOm9wc3osd2dodEA5Li40MCwzMDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbnAge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcXG5cXG4gICAgLS1wcmltYXJ5LWJhY2tncm91bmQ6ICMxYjFkMWY7XFxuICAgIC0tc2Vjb25kYXJ5LWJhY2tncm91bmQ6IHJnYmEoMjQwLCAyNDIsIDI0NSwgMC44NSk7XFxuICAgIC0tdGVydGlhcnktYmFja2dyb3VuZDogcmdiKDgxLCA4OCwgMTAwKTtcXG4gICAgLS1ob3Zlci1wcmltYXJ5OiAjM2Y0MjQ2O1xcbiAgICAtLWJvcmRlci1yYWRpdXMtdmFsdWU6IDdweDtcXG59XFxuXFxuLm5hdmJhciB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZCk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNpZGViYXItdGl0bGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiA0MHB4IDgwcHg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQpO1xcbn1cXG5cXG4uY29udGVudC10aXRsZS1kaXYge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNlZGl0LXByb2plY3QtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgcGFkZGluZzogN3B4IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDIyNCwgMjI0LCAyMjQpO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0LXRpdGxlIHN2ZyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmVkaXQtcHJvamVjdC10aXRsZSBzdmc6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIxOCwgMjE4KTtcXG59XFxuXFxuLnNpZGViYXItaXRlbSB7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxuICAgIHBhZGRpbmc6IDdweCAxNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGViYXItaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLXByaW1hcnkpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2VsZWN0ZWQtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLXByaW1hcnkpO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdC1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZm9ybS1pbnB1dCBpbnB1dCB7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIG1heC13aWR0aDogMTgwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcXG4gICAgb3V0bGluZTogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y0MjQ2O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZm9ybS1pbnB1dCBpbnB1dDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5hZGQtcHJvamVjdC1mb3JtLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnN1Ym1pdC1wcm9qZWN0LWZvcm0sXFxuLmVkaXQtdGFzay1zYXZlLWJ1dHRvbixcXG4uZWRpdC1wcm9qZWN0LXNhdmUtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktYmFja2dyb3VuZCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNhbmNlbC1hZGQtcHJvamVjdC1mb3JtLFxcbi5lZGl0LXRhc2stY2FuY2VsLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMiwgMjE4KTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWZvcm0tYnV0dG9ucyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA3cHggM3B4O1xcbiAgICBmb250LXNpemU6IDEuMTVyZW07XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZm9ybS1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LXN2ZyB7XFxuICAgIGZpbGw6IHdoaXRlO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi50YXNrcy1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4ICNkZmU1ZWM7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjMxLCAyMzEsIDIzMSk7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDFmciAxMDBweCA4MHB4IDUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5NiwgMTk2LCAxOTYpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGVja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktYmFja2dyb3VuZCk7XFxufVxcblxcbi5zdHJpa2V0aHJvdWdoIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5lZGl0LXRhc2staXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAjZGZlNWVjO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzMSwgMjMxLCAyMzEpO1xcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggNXB4IDE1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDI1MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMTAwcHggNTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uZWRpdC10YXNrLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuLmVkaXQtdGFzay1kZXNjcmlwdGlvbi1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICB3aWR0aDogOTguNSU7XFxuICAgIGhlaWdodDogOTUlO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMjI0LCAyMjQsIDIyNCk7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogMTBweCAwcHggMHB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmVkaXQtdGFzay1wcmlvcml0eS1hbmQtZHVlLWRhdGUtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgcGFkZGluZzogN3B4IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQpO1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigyMjQsIDIyNCwgMjI0KTtcXG59XFxuXFxuLnByaW9yaXR5LXNlbGVjdG9yLFxcbi5wcm9qZWN0LXNlbGVjdG9yIHtcXG4gICAgcGFkZGluZzogN3B4IDE1cHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigyMjQsIDIyNCwgMjI0KTtcXG59XFxuXFxuLmVkaXQtdGFzay1hY3Rpb24tYnV0dG9ucyB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA3cHg7XFxufVxcblxcbi5lZGl0LXRhc2stYWN0aW9uLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xcbn1cXG5cXG4uZWRpdC10YXNrLWFjdGlvbi1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmVkaXQtdGFzay10aXRsZS1jb250YWluZXIgaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZCk7XFxuICAgIHBhZGRpbmc6IDdweCAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIG91dGxpbmU6IDBweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDIyNCwgMjI0LCAyMjQpO1xcbn1cXG5cXG5cXG4uZWRpdC10YXNrLXByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuXFxuW2NsYXNzXj1cXFwidGFzay1wcmlvcml0eS1cXFwiXSB7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcXG4gICAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRlcnRpYXJ5LWJhY2tncm91bmQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZCk7XFxufVxcblxcbi5hZGQtdGFzay1kaXYge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5hZGQtdGFzay1idXR0b24sXFxuLmNsZWFyLWNvbXBsZXRlZC10YXNrcyB7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAjZGZlNWVjO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hZGQtdGFzay1pdGVtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b246aG92ZXIsXFxuLmNsZWFyLWNvbXBsZXRlZC10YXNrczpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLXByaW1hcnkpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hY3Rpb24tYnV0dG9ucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmFjdGlvbi1idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMXM7XFxufVxcblxcbi5hY3Rpb24tYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV07XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuXG5sZXQgYWxsUHJvamVjdHM7XG5sZXQgaW5ib3hJZDtcblxuLy8gQ2hlY2sgaWYgbG9jYWwgc3RvcmFnZSBjb250YWlucyBcImFsbFByb2plY3RzXCIgYW5kIGlmIG5vdCwgaW5pdGlhdGUgaXQgd2l0aCBkZWZhdWx0IFwiaW5ib3hcIiBwcm9qZWN0XG5jb25zdCBzeW5jQWxsUHJvamVjdHMgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBpdGVtcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxQcm9qZWN0cycpO1xuICAgIGxldCBpbmJveDtcbiAgICBpZiAoaXRlbXMgPT09IG51bGwpIHtcbiAgICAgICAgYWxsUHJvamVjdHMgPSB7fTtcbiAgICAgICAgaW5ib3ggPSBjcmVhdGVQcm9qZWN0KCdJbmJveCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZEl0ZW1zID0gSlNPTi5wYXJzZShpdGVtcyk7XG4gICAgICAgIGFsbFByb2plY3RzID0gcGFyc2VkSXRlbXNcbiAgICAgICAgaW5ib3ggPSBhbGxQcm9qZWN0c1tPYmplY3Qua2V5cyhhbGxQcm9qZWN0cylbMF1dO1xuICAgIH1cbiAgICBpbmJveElkID0gaW5ib3guaWQ7XG59O1xuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgbG9jYWwgc3RvcmFnZSBhZnRlciBtYWtpbmcgY2hhbmdlcyB0byBhbGxQcm9qZWN0cyBvYmplY3RcbmNvbnN0IHVwZGF0ZUxvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG59O1xuXG4vLyBGYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBuZXcgcHJvamVjdFxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCAodGl0bGUpIHsgXG4gICAgY29uc3QgdGFza3MgPSB7fTtcbiAgICBjb25zdCBpZCA9IHV1aWQoKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0geyB0aXRsZSwgdGFza3MsIGlkIH07XG4gICAgYWxsUHJvamVjdHNbaWRdID0gbmV3UHJvamVjdDtcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn07XG5cbi8vIEZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIG5ldyB0b2RvIGxpc3QsIGFkZGVkIHRvIGluYm94IGJ5IGRlZmF1bHRcbmNvbnN0IGNyZWF0ZVRhc2sgPSBmdW5jdGlvbih0aXRsZSwgZGlyZWN0b3J5LCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcblxuICAgIC8vIERlZmluZSBhIFwiY29tcGxldGVcIiBwcm9wZXJ0eSB3aGljaCBkZWZhdWx0cyB0byBGYWxzZVxuICAgIGNvbnN0IGNvbXBsZXRlID0gZmFsc2U7XG5cbiAgICAvLyBDcmVhdGUgYSB1bmlxdWUgaWRlbnRpZmllciBmb3IgY3JlYXRlZCBvYmplY3RcbiAgICBjb25zdCBpZCA9IHV1aWQoKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgbmV3IHRvLWRvIGl0ZW1cbiAgICBjb25zdCBjcmVhdGVkVGFzayA9IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZGlyZWN0b3J5LCBjb21wbGV0ZSwgaWQgfTtcblxuICAgIC8vIEFkZCB0aGUgbmV3bHkgY3JlYXRlZCBpdGVtIG9udG8gdGhlIGRlc2lyZWQgcHJvamVjdHMgbGlzdFxuICAgIGFsbFByb2plY3RzW2RpcmVjdG9yeV0udGFza3NbaWRdID0gY3JlYXRlZFRhc2s7XG5cbiAgICAvLyBVcGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuXG4gICAgLy8gUmV0dXJuIHRoZSBpdGVtLCB0aGVyZWJ5IGFzc2lnbmluZyBpdCB0byB0aGUgY3JlYXRlZCB2YXJpYWJsZSBvdXRzaWRlIFxuICAgIHJldHVybiBjcmVhdGVkVGFzaztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUYXNrc0luUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0SWQpIHtcbiAgICByZXR1cm4gYWxsUHJvamVjdHNbcHJvamVjdElkXS50YXNrcztcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVUYXNrID0gZnVuY3Rpb24odGFza0lkLCBwcm9qZWN0SWQpIHtcbiAgICBkZWxldGUgYWxsUHJvamVjdHNbcHJvamVjdElkXS50YXNrc1t0YXNrSWRdO1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3QgPSBmdW5jdGlvbihpZCkge1xuICAgIGlmIChpZCA9PT0gaW5ib3hJZCkge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ2Nhbm5vdCBkZWxldGUgaW5ib3gnKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYWxsUHJvamVjdHMpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gaWQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBhbGxQcm9qZWN0c1trZXldO1xuICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgZWRpdFRhc2sgPSBmdW5jdGlvbih0YXNrSWQsIGN1cnJlbnRQcm9qZWN0LCBuZXdQcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0ICE9IG5ld1Byb2plY3QpIHtcbiAgICAgICAgZGVsZXRlVGFzayh0YXNrSWQpO1xuICAgICAgICBjcmVhdGVUYXNrKHRpdGxlLCBuZXdQcm9qZWN0LCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3Rhc2tJZF0udGl0bGUgPSB0aXRsZTtcbiAgICAgICAgYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3Rhc2tJZF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3Rhc2tJZF0uZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50YXNrc1t0YXNrSWRdLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVDb21wbGV0aW9uID0gZnVuY3Rpb24odGFza0lkLCBwcm9qZWN0SWQpIHtcbiAgICBhbGxQcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZF0uY29tcGxldGUgPSAhYWxsUHJvamVjdHNbcHJvamVjdElkXS50YXNrc1t0YXNrSWRdLmNvbXBsZXRlO1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGVkaXRQcm9qZWN0VGl0bGUgPSBmdW5jdGlvbihwcm9qZWN0SWQsIG5ld1RpdGxlKSB7XG4gICAgYWxsUHJvamVjdHNbcHJvamVjdElkXS50aXRsZSA9IG5ld1RpdGxlO1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpXG59XG5cbmV4cG9ydCBjb25zdCBjbGVhckNvbXBsZXRlZFRhc2tzID0gZnVuY3Rpb24ocHJvamVjdElkKSB7XG4gICAgbGV0IHByb2plY3QgPSBhbGxQcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzO1xuICAgIGZvciAoY29uc3Qga2V5IGluIHByb2plY3QpIHtcbiAgICAgICAgbGV0IHRhc2sgPSBwcm9qZWN0W2tleV07XG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBkZWxldGUgYWxsUHJvamVjdHNbcHJvamVjdElkXS50YXNrc1trZXldO1xuICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IGFsbFByb2plY3RzLCBzeW5jQWxsUHJvamVjdHMsIHVwZGF0ZUxvY2FsU3RvcmFnZSwgY3JlYXRlUHJvamVjdCwgY3JlYXRlVGFzayB9IiwiaW1wb3J0ICogYXMgY3J1ZCBmcm9tIFwiLi9jcnVkXCI7XG5cbi8vIEFjY2VwdCBmb3JtIGlucHV0IGFuZCBjcmVhdGUgbmV3IHRhc2tcbmNvbnN0IGFkZFRhc2sgPSBmdW5jdGlvbigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWJtaXQtdGFzay1mb3JtJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZScpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stcHJvamVjdC1zZWxlY3RvcicpLnZhbHVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjcnVkLmNyZWF0ZVRhc2sodGl0bGUsIHByb2plY3QsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgICAgfVxuICAgIH0pXG59KCk7XG5cbmNvbnN0IGFkZFByb2plY3RFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnc3VibWl0LXByb2plY3QtZm9ybScpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgICAgIGNydWQuY3JlYXRlUHJvamVjdCh0aXRsZSk7XG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgICAgICAgIGFkZFByb2plY3RTZWxlY3RvcigpO1xuICAgICAgICAgICAgZGlzcGxheUFkZFByb2plY3RCdXR0b24oKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbmV3bHlDcmVhdGVkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Omxhc3QtY2hpbGQnKTtcbiAgICAgICAgICAgIHJlbW92ZVNlbGVjdGVkQ2xhc3MoKTtcbiAgICAgICAgICAgIGFkZFNlbGVjdGVkQ2xhc3MobmV3bHlDcmVhdGVkUHJvamVjdCk7XG5cbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnY2FuY2VsLWFkZC1wcm9qZWN0LWZvcm0nKSB7XG4gICAgICAgICAgICBkaXNwbGF5QWRkUHJvamVjdEJ1dHRvbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdCgnLmFkZC1wcm9qZWN0LWNvbnRhaW5lcicpKSB7XG4gICAgICAgICAgICBjb25zdCB0cmlnZ2VyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5hZGQtcHJvamVjdC1jb250YWluZXInKTtcbiAgICAgICAgICAgIHRyaWdnZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1wcm9qZWN0LWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLXByb2plY3QtZm9ybS1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicHJvamVjdC10aXRsZVwiIGlkPVwicHJvamVjdC10aXRsZVwiIHBsYWNlaG9sZGVyPVwiYWRkIHByb2plY3RcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLXByb2plY3QtZm9ybS1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic3VibWl0LXByb2plY3QtZm9ybVwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNhbmNlbC1hZGQtcHJvamVjdC1mb3JtXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIHRyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWRkLXByb2plY3QtY29udGFpbmVyJyk7XG4gICAgICAgICAgICB0cmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItaXRlbScpO1xuICAgICAgICAgICAgdHJpZ2dlci5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1mb3JtLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfSlcbn0oKTtcblxuZnVuY3Rpb24gZGlzcGxheUFkZFByb2plY3RCdXR0b24oKSB7XG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWZvcm0tY29udGFpbmVyJyk7XG4gICAgYWRkLmlubmVySFRNTCA9IGA8cCBjbGFzcz1cImFkZC1wcm9qZWN0LWJ1dHRvblwiPisgQWRkIFByb2plY3Q8L3A+YDtcbiAgICBhZGQuY2xhc3NMaXN0LnJlbW92ZSgnYWRkLXByb2plY3QtZm9ybS1jb250YWluZXInKTtcbiAgICBhZGQuY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtY29udGFpbmVyJyk7XG4gICAgYWRkLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaXRlbScpO1xufTtcblxuY29uc3QgYWRkVGFza0V2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2FkZC10YXNrLWJ1dHRvbicpIHtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICAgICAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1kaXYnKTtcbiAgICAgICAgICAgIGFkZFRhc2tEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtdGFzay1pdGVtIGFkZC10YXNrLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC10YXNrLXRpdGxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBpZD1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJBZGQgdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC10YXNrLWRlc2NyaXB0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJlZGl0LXRhc2stZGVzY3JpcHRpb24taW5wdXRcIiBpZD1cImRlc2NyaXB0aW9uXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJBZGQgZGVzY3JpcHRpb25cIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LXRhc2stcHJpb3JpdHktYW5kLWR1ZS1kYXRlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZHVlLWRhdGVcIiBpZD1cImR1ZS1kYXRlXCIgcGxhY2Vob2xkZXI9XCJkdWUgZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwicHJpb3JpdHktc2VsZWN0b3JcIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInByaW9yaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMb3dcIiBzZWxlY3RlZD5Mb3c8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtdGFzay1wcm9qZWN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwicHJvamVjdC1zZWxlY3RvclwiIG5hbWU9XCJhZGQtdGFzay1wcm9qZWN0LXNlbGVjdG9yXCIgaWQ9XCJhZGQtdGFzay1wcm9qZWN0LXNlbGVjdG9yXCI+PC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtdGFzay1hY3Rpb24tYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInN1Ym1pdC10YXNrLWZvcm0gZWRpdC10YXNrLXNhdmUtYnV0dG9uXCI+QWRkIFRhc2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZS10YXNrLWRpYWxvZyBlZGl0LXRhc2stY2FuY2VsLWJ1dHRvblwiPkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgYWRkUHJvamVjdFNlbGVjdG9yKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLmZvY3VzKCk7XG4gICAgICAgIGFkZFRhc2tEaXYuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stZGl2JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlLXRhc2stZGlhbG9nJykpIHtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9XG4gICAgfSlcblxufSgpO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1wcm9qZWN0cycpO1xuICAgIHNpZGViYXIuaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY3J1ZC5hbGxQcm9qZWN0cykge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gY3J1ZC5hbGxQcm9qZWN0c1trZXldO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld1Byb2plY3QuY2xhc3NOYW1lID0gJ3Byb2plY3Qgc2lkZWJhci1pdGVtJztcbiAgICAgICAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1pZCcsIGAke3Byb2plY3QuaWR9YClcbiAgICAgICAgbmV3UHJvamVjdC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3QtdGl0bGVcIj4ke3Byb2plY3QudGl0bGV9PC9wPiAgXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLXByb2plY3QtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImRlbGV0ZS1wcm9qZWN0LXN2Z1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiAgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIj48cGF0aCAgY2xhc3M9XCJkZWxldGUtcHJvamVjdC1zdmctcGF0aFwiIGQ9XCJNIDEwLjgwNjY0MSAyIEMgMTAuMjg5NjQxIDIgOS43OTU2ODc1IDIuMjA0MzEyNSA5LjQyOTY4NzUgMi41NzAzMTI1IEwgOSAzIEwgNCAzIEEgMS4wMDAxIDEuMDAwMSAwIDEgMCA0IDUgTCAyMCA1IEEgMS4wMDAxIDEuMDAwMSAwIDEgMCAyMCAzIEwgMTUgMyBMIDE0LjU3MDMxMiAyLjU3MDMxMjUgQyAxNC4yMDUzMTIgMi4yMDQzMTI1IDEzLjcxMDM1OSAyIDEzLjE5MzM1OSAyIEwgMTAuODA2NjQxIDIgeiBNIDQuMzY1MjM0NCA3IEwgNS44OTI1NzgxIDIwLjI2MzY3MiBDIDYuMDI0NTc4MSAyMS4yNTM2NzIgNi44NzcgMjIgNy44NzUgMjIgTCAxNi4xMjMwNDcgMjIgQyAxNy4xMjEwNDcgMjIgMTcuOTc0NDIyIDIxLjI1NDg1OSAxOC4xMDc0MjIgMjAuMjU1ODU5IEwgMTkuNjM0NzY2IDcgTCA0LjM2NTIzNDQgNyB6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIGA7XG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG4gICAgfVxuICAgIGRlZmF1bHRTZWxlY3RlZFByb2plY3QoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RTZWxlY3RvciA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNlbGVjdFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3Qtc2VsZWN0b3InKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZC1wcm9qZWN0Jyk7XG5cbiAgICBzZWxlY3RQcm9qZWN0cy5mb3JFYWNoKChzZWxlY3RQcm9qZWN0KSA9PiB7XG4gICAgICAgIHNlbGVjdFByb2plY3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNydWQuYWxsUHJvamVjdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBjcnVkLmFsbFByb2plY3RzW2tleV07XG4gICAgICAgICAgICBpZiAoY3VycmVudFByb2plY3QuZGF0YXNldC5wcm9qZWN0SWQgPT09IGtleSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdFByb2plY3QuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7cHJvamVjdC5pZH1cIiBzZWxlY3RlZD4ke3Byb2plY3QudGl0bGV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0UHJvamVjdC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtwcm9qZWN0LmlkfVwiPiR7cHJvamVjdC50aXRsZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkgICAgXG59O1xuXG5leHBvcnQgY29uc3Qgc3dpdGNoUHJvamVjdHMgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItcHJvamVjdHMnKTtcbiAgICBzaWRlYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgbGV0IGNsaWNrZWQgPSAwO1xuICAgICAgICBsZXQgY2xpY2tlZFByb2plY3Q7XG5cbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKSkge1xuICAgICAgICAgICAgY2xpY2tlZFByb2plY3QgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBjbGlja2VkID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdC10aXRsZScpKSB7XG4gICAgICAgICAgICBjbGlja2VkUHJvamVjdCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgY2xpY2tlZCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsaWNrZWQgPT09IDEpIHtcbiAgICAgICAgICAgIHJlbW92ZVNlbGVjdGVkQ2xhc3MoKTtcbiAgICAgICAgICAgIGFkZFNlbGVjdGVkQ2xhc3MoY2xpY2tlZFByb2plY3QpO1xuICAgICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIH1cbiAgICB9KVxufSgpO1xuXG5leHBvcnQgY29uc3QgZGlzcGxheVRhc2tzID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBwcm9qZWN0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQtcHJvamVjdCcpLmRhdGFzZXQucHJvamVjdElkO1xuICAgIGNvbnN0IHRpdGxlID0gY3J1ZC5hbGxQcm9qZWN0c1twcm9qZWN0SWRdLnRpdGxlO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC10aXRsZS1kaXZcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udGVudC10aXRsZVwiPiR7dGl0bGV9PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtcHJvamVjdC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgLTk2MCA5NjAgOTYwXCIgd2lkdGg9XCIyNFwiPjxwYXRoIGQ9XCJNMjAwLTIwMGg1N2wzOTEtMzkxLTU3LTU3LTM5MSAzOTF2NTdabS04MCA4MHYtMTcwbDUyOC01MjdxMTItMTEgMjYuNS0xN3QzMC41LTZxMTYgMCAzMSA2dDI2IDE4bDU1IDU2cTEyIDExIDE3LjUgMjZ0NS41IDMwcTAgMTYtNS41IDMwLjVUODE3LTY0N0wyOTAtMTIwSDEyMFptNjQwLTU4NC01Ni01NiA1NiA1NlptLTE0MSA4NS0yOC0yOSA1NyA1Ny0yOS0yOFpcIi8+PC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuXG4gICAgY29uc3QgdGFza3NPYmplY3QgPSBjcnVkLmFsbFByb2plY3RzW3Byb2plY3RJZF0udGFza3NcblxuICAgIGxldCBjb21wbGV0ZWRUYXNrc1ByZXNlbnQgPSBmYWxzZTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHRhc2tzT2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSB0YXNrc09iamVjdFtrZXldO1xuICAgICAgICBjb250ZW50LmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1pdGVtXCIgZGF0YS10YXNrLWlkPVwiJHt0YXNrLmlkfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNvbXBsZXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGFzay1kdWUtZGF0ZVwiPiR7dGFzay5kdWVEYXRlfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stcHJpb3JpdHktJHt0YXNrLnByaW9yaXR5fVwiPiR7dGFzay5wcmlvcml0eX08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbi1idXR0b25zLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWJ1dHRvbiBlZGl0LXRhc2stYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIC05NjAgOTYwIDk2MFwiIHdpZHRoPVwiMjRcIj48cGF0aCBkPVwiTTIwMC0yMDBoNTdsMzkxLTM5MS01Ny01Ny0zOTEgMzkxdjU3Wm0tODAgODB2LTE3MGw1MjgtNTI3cTEyLTExIDI2LjUtMTd0MzAuNS02cTE2IDAgMzEgNnQyNiAxOGw1NSA1NnExMiAxMSAxNy41IDI2dDUuNSAzMHEwIDE2LTUuNSAzMC41VDgxNy02NDdMMjkwLTEyMEgxMjBabTY0MC01ODQtNTYtNTYgNTYgNTZabS0xNDEgODUtMjgtMjkgNTcgNTctMjktMjhaXCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbi1idXR0b24gZGVsZXRlLXRhc2stYnV0dG9uXCI+ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJkZWxldGUtdGFzay1zdmdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCI+PHBhdGggIGNsYXNzPVwiZGVsZXRlLXByb2plY3Qtc3ZnLXBhdGhcIiBkPVwiTSAxMC44MDY2NDEgMiBDIDEwLjI4OTY0MSAyIDkuNzk1Njg3NSAyLjIwNDMxMjUgOS40Mjk2ODc1IDIuNTcwMzEyNSBMIDkgMyBMIDQgMyBBIDEuMDAwMSAxLjAwMDEgMCAxIDAgNCA1IEwgMjAgNSBBIDEuMDAwMSAxLjAwMDEgMCAxIDAgMjAgMyBMIDE1IDMgTCAxNC41NzAzMTIgMi41NzAzMTI1IEMgMTQuMjA1MzEyIDIuMjA0MzEyNSAxMy43MTAzNTkgMiAxMy4xOTMzNTkgMiBMIDEwLjgwNjY0MSAyIHogTSA0LjM2NTIzNDQgNyBMIDUuODkyNTc4MSAyMC4yNjM2NzIgQyA2LjAyNDU3ODEgMjEuMjUzNjcyIDYuODc3IDIyIDcuODc1IDIyIEwgMTYuMTIzMDQ3IDIyIEMgMTcuMTIxMDQ3IDIyIDE3Ljk3NDQyMiAyMS4yNTQ4NTkgMTguMTA3NDIyIDIwLjI1NTg1OSBMIDE5LjYzNDc2NiA3IEwgNC4zNjUyMzQ0IDcgelwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICBpZiAodGFzay5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29tcGxldGVkVGFza3NQcmVzZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCJdIC5jaGVja2JveGApLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCJdIC50YXNrLXRpdGxlYCkuY2xhc3NMaXN0LmFkZCgnc3RyaWtldGhyb3VnaCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIl0gLnRhc2stcHJpb3JpdHktJHt0YXNrLnByaW9yaXR5fWApLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIl0gLnRhc2stcHJpb3JpdHktJHt0YXNrLnByaW9yaXR5fWApLmNsYXNzTmFtZSA9ICcnO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIl0gLmVkaXQtdGFzay1idXR0b25gKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb21wbGV0ZWRUYXNrc1ByZXNlbnQpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWRpdicpLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJhZGQtdGFzay1idXR0b25cIj4rIEFkZCBUYXNrPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xlYXItY29tcGxldGVkLXRhc2tzXCI+Q2xlYXIgQ29tcGxldGVkIFRhc2tzPC9idXR0b24+XG4gICAgICAgIGA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWRpdicpLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJhZGQtdGFzay1idXR0b25cIj4rIEFkZCBUYXNrPC9idXR0b24+XG4gICAgICAgIGA7XG4gICAgfVxufTtcblxuY29uc3QgY2xlYXJDb21wbGV0ZWRUYXNrcyA9IGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdjbGVhci1jb21wbGV0ZWQtdGFza3MnKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQtcHJvamVjdCcpLmRhdGFzZXQucHJvamVjdElkO1xuICAgICAgICAgICAgY3J1ZC5jbGVhckNvbXBsZXRlZFRhc2tzKHByb2plY3RJZCk7XG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgICAgfVxuICAgIH0pXG59KCk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVUYXNrRXZlbnQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNvbnRlbnQnKTtcbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZGVsZXRlLXRhc2stYnV0dG9uJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRUYXNrID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXRhc2staWRdJyk7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGNsaWNrZWRUYXNrLmRhdGFzZXQudGFza0lkO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkLXByb2plY3QnKS5kYXRhc2V0LnByb2plY3RJZDtcbiAgICAgICAgICAgIGNydWQuZGVsZXRlVGFzayhpZCwgcHJvamVjdElkKTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9XG4gICAgfSlcbn0oKTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3RFdmVudCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1wcm9qZWN0cycpO1xuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZGVsZXRlLXByb2plY3QtYnV0dG9uJykpIHtcblxuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQtcHJvamVjdCcpLmRhdGFzZXQucHJvamVjdElkO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnW2RhdGEtcHJvamVjdC1pZF0nKS5kYXRhc2V0LnByb2plY3RJZDtcbiAgICAgICAgICAgIGNydWQuZGVsZXRlUHJvamVjdChpZCk7XG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0ICE9IGlkKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlU2VsZWN0ZWRDbGFzcygpO1xuICAgICAgICAgICAgICAgIGFkZFNlbGVjdGVkQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcHJvamVjdC1pZD1cIiR7Y3VycmVudFByb2plY3R9XCJdYCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgICAgfVxuICAgIH0pXG59KCk7XG5cbmZ1bmN0aW9uIHJlbW92ZVNlbGVjdGVkQ2xhc3MoKSB7XG4gICAgY29uc3QgY3VycmVudFNlbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZC1wcm9qZWN0Jyk7XG4gICAgY3VycmVudFNlbGVjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1wcm9qZWN0Jylcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTZWxlY3RlZENsYXNzKHByb2plY3RFbGVtZW50KSB7XG4gICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtcHJvamVjdCcpO1xuICAgIGFkZFByb2plY3RTZWxlY3RvcigpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTZWxlY3RlZFByb2plY3QgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjdXJyZW50U2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkLXByb2plY3QnKTtcbiAgICBpZiAoY3VycmVudFNlbGVjdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Jyk7XG4gICAgICAgIGluYm94LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXByb2plY3QnKTtcbiAgICAgICAgYWRkUHJvamVjdFNlbGVjdG9yKCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGVkaXRUYXNrRXZlbnQgPSBmdW5jdGlvbigpIHtcbiAgICBcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNvbnRlbnQnKTtcbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZWRpdC10YXNrLWJ1dHRvbicpKSB7XG5cbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQtcHJvamVjdCcpLmRhdGFzZXQucHJvamVjdElkO1xuICAgICAgICAgICAgY29uc3QgdGFza0lkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXRhc2staWRdJykuZGF0YXNldC50YXNrSWQ7XG4gICAgICAgICAgICBjb25zdCBjbGlja2VkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9XCIke3Rhc2tJZH1cIl1gKTtcblxuICAgICAgICAgICAgY2xpY2tlZFRhc2suY2xhc3NMaXN0LnJlbW92ZSgndGFzay1pdGVtJyk7XG4gICAgICAgICAgICBjbGlja2VkVGFzay5jbGFzc0xpc3QuYWRkKCdlZGl0LXRhc2staXRlbScpO1xuICAgICAgICAgICAgY2xpY2tlZFRhc2suaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LXRhc2stdGl0bGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZWRpdC10YXNrLXRpdGxlLWlucHV0XCIgaWQ9XCJlZGl0LXRhc2stdGl0bGUtaW5wdXRcIiBuYW1lPVwiZWRpdC10YXNrLXRpdGxlLWlucHV0XCIgdmFsdWU9XCIke2NydWQuYWxsUHJvamVjdHNbcHJvamVjdElkXS50YXNrc1t0YXNrSWRdLnRpdGxlfVwiIHBsYWNlaG9sZGVyPVwiQWRkIHRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC10YXNrLXByb2plY3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJwcm9qZWN0LXNlbGVjdG9yXCIgbmFtZT1cImVkaXQtcHJvamVjdC1zZWxlY3RvclwiIGlkPVwiZWRpdC1wcm9qZWN0LXNlbGVjdG9yXCI+PC9zZWxlY3Q+ICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtdGFzay1kZXNjcmlwdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZWRpdC10YXNrLWRlc2NyaXB0aW9uLWlucHV0XCIgaWQ9XCJlZGl0LXRhc2stZGVzY3JpcHRpb24taW5wdXRcIiBuYW1lPVwiZWRpdC10YXNrLWRlc2NyaXB0aW9uLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJBZGQgZGVzY3JpcHRpb25cIj4ke2NydWQuYWxsUHJvamVjdHNbcHJvamVjdElkXS50YXNrc1t0YXNrSWRdLmRlc2NyaXB0aW9ufTwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC10YXNrLXByaW9yaXR5LWFuZC1kdWUtZGF0ZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtdGFzay1kdWUtZGF0ZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwiZWRpdC10YXNrLWR1ZS1kYXRlLWlucHV0XCIgaWQ9XCJlZGl0LXRhc2stZHVlLWRhdGUtaW5wdXRcIiBuYW1lPVwiZWRpdC10YXNrLWR1ZS1kYXRlLWlucHV0XCIgdmFsdWU9JHtjcnVkLmFsbFByb2plY3RzW3Byb2plY3RJZF0udGFza3NbdGFza0lkXS5kdWVEYXRlfT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LXRhc2stcHJpb3JpdHktY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwicHJpb3JpdHktc2VsZWN0b3JcIiBuYW1lPVwiZWRpdC1wcmlvcml0eS0ke3Rhc2tJZH1cIiBpZD1cImVkaXQtcHJpb3JpdHktJHt0YXNrSWR9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMb3dcIj5Mb3c8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC10YXNrLWFjdGlvbi1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZWRpdC10YXNrLXNhdmUtYnV0dG9uXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImVkaXQtdGFzay1jYW5jZWwtYnV0dG9uXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgO1xuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdC1wcmlvcml0eS0ke3Rhc2tJZH0gb3B0aW9uW3ZhbHVlPVwiJHtjcnVkLmFsbFByb2plY3RzW3Byb2plY3RJZF0udGFza3NbdGFza0lkXS5wcmlvcml0eX1cIl1gKTtcbiAgICAgICAgICAgIGN1cnJlbnRQcmlvcml0eU9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICBhZGRQcm9qZWN0U2VsZWN0b3IoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSgpO1xuXG5jb25zdCBjYW5jZWxFZGl0VGFzayA9IGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250ZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdlZGl0LXRhc2stY2FuY2VsLWJ1dHRvbicpIHtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9XG4gICAgfSlcbn0oKTtcblxuZXhwb3J0IGNvbnN0IGVkaXRUYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250ZW50Jyk7XG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2VkaXQtdGFzay1zYXZlLWJ1dHRvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbZGF0YS10YXNrLWlkXScpLmRhdGFzZXQudGFza0lkO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb2plY3RJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZC1wcm9qZWN0JykuZGF0YXNldC5wcm9qZWN0SWQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay10aXRsZS1pbnB1dCcpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWRlc2NyaXB0aW9uLWlucHV0JykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1kdWUtZGF0ZS1pbnB1dCcpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdC1wcmlvcml0eS0ke3Rhc2tJZH1gKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0LXNlbGVjdG9yJykudmFsdWU7XG5cbiAgICAgICAgICAgIGNydWQuZWRpdFRhc2sodGFza0lkLCBjdXJyZW50UHJvamVjdElkLCBuZXdQcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KVxuICAgICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIH1cbiAgICB9KVxufSgpO1xuXG5jb25zdCBjaGVja2JveEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250ZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrYm94JykpIHtcblxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrZWQnKTtcblxuICAgICAgICAgICAgY29uc3QgdGFza0lkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXRhc2staWRdJykuZGF0YXNldC50YXNrSWQ7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQtcHJvamVjdCcpLmRhdGFzZXQucHJvamVjdElkO1xuICAgICAgICAgICAgY3J1ZC50b2dnbGVDb21wbGV0aW9uKHRhc2tJZCwgcHJvamVjdElkKTtcblxuICAgICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIH1cbiAgICB9KVxufSgpO1xuXG5jb25zdCBlZGl0UHJvamVjdEV2ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5lZGl0LXByb2plY3QtdGl0bGUnKSkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkLXByb2plY3QnKS5kYXRhc2V0LnByb2plY3RJZDtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRpdGxlLWRpdicpO1xuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlZGl0LXByb2plY3QtaW5wdXRcIiBpZD1cImVkaXQtcHJvamVjdC1pbnB1dFwiIHZhbHVlPVwiJHtjcnVkLmFsbFByb2plY3RzW3Byb2plY3RJZF0udGl0bGV9XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC10YXNrLWFjdGlvbi1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZWRpdC1wcm9qZWN0LXNhdmUtYnV0dG9uXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImVkaXQtdGFzay1jYW5jZWwtYnV0dG9uXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0LWlucHV0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdlZGl0LXByb2plY3Qtc2F2ZS1idXR0b24nKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQtcHJvamVjdCcpLmRhdGFzZXQucHJvamVjdElkO1xuICAgICAgICAgICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0LWlucHV0JykudmFsdWU7XG4gICAgICAgICAgICBjcnVkLmVkaXRQcm9qZWN0VGl0bGUocHJvamVjdElkLCBuZXdUaXRsZSk7XG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgICAgICAgIHJlbW92ZVNlbGVjdGVkQ2xhc3MoKTtcbiAgICAgICAgICAgIGFkZFNlbGVjdGVkQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcHJvamVjdC1pZD1cIiR7cHJvamVjdElkfVwiXWApKTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9XG4gICAgfSlcbn0oKTtcblxuZXhwb3J0IHsgYWRkVGFzayB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICogYXMgY3J1ZCBmcm9tICcuL2NydWQuanMnO1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4vZG9tLmpzJztcblxuY3J1ZC5zeW5jQWxsUHJvamVjdHMoKTtcbmRvbS5kaXNwbGF5UHJvamVjdHMoKTtcbmRvbS5kaXNwbGF5VGFza3MoKTtcblxuY29uc29sZS5sb2coY3J1ZC5hbGxQcm9qZWN0cyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9