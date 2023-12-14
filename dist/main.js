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
    background-color: rgb(67, 185, 127);
}

.cancel-add-project-form,
.edit-task-cancel-button {
    background-color: rgb(239, 68, 68);
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

.delete-task-svg {
    fill: var(--primary-background);
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
    background-color: #1b1d1f;
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
}

.task-priority-High {
    border: 2px solid rgb(209, 69, 59);
    background-color: rgb(246, 218, 216);
}

.task-priority-Medium {
    border: 2px solid rgb(235, 137, 9);
    background-color: rgb(251, 231, 206);
}

.task-priority-Low {
    border: 2px solid rgb(36, 111, 224);
    background-color: rgb(211, 226, 249);
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300&display=swap');\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\np {\n    cursor: default;\n}\n\n:root {\n    font-family: 'DM Sans', sans-serif;\n\n    --primary-background: #1b1d1f;\n    --secondary-background: rgba(240, 242, 245, 0.85);\n    --hover-primary: #3f4246;\n    --border-radius-value: 7px;\n}\n\n.navbar {\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--primary-background);\n    color: white;\n    font-size: 1.5rem;\n}\n\n.container {\n    display: flex;\n    min-height: 100vh;\n}\n\n.sidebar {\n    width: 220px;\n    background-color: var(--primary-background);\n    padding: 20px;\n    color: white;\n}\n\n.sidebar-title {\n    margin-bottom: 40px;\n    font-size: 1.7rem;\n    font-weight: 1000;\n    text-align: center;\n}\n\n.content {\n    padding: 40px 80px;\n    flex-grow: 1;\n    background-color: var(--secondary-background);\n}\n\n.content-title-div {\n    font-size: 2rem;\n    font-weight: 1000;\n    margin-bottom: 30px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#edit-project-input {\n    font-size: 1.3rem;\n    padding: 7px 15px;\n    border-radius: var(--border-radius-value);\n    border: 0px;\n    outline: 0;\n    background-color: white;\n    border: 0.5px solid rgb(224, 224, 224);\n}\n\n.edit-project-title svg {\n    cursor: pointer;\n    transition: 0.2s;\n    border-radius: var(--border-radius-value);\n    padding: 5px;\n}\n\n.edit-project-title svg:hover {\n    transform: scale(1.1);\n    background-color: rgb(219, 218, 218);\n}\n\n.sidebar-item {\n    margin: 10px 0px;\n    padding: 7px 15px;\n    transition: 0.2s;\n    border-radius: var(--border-radius-value);\n    font-size: 1.2rem;\n    height: 25px;\n    display: flex;\n    align-items: center;\n}\n\n.sidebar-item:hover {\n    background-color: var(--hover-primary);\n    cursor: pointer;\n}\n\n.project {\n    justify-content: space-between;\n}\n\n.selected-project {\n    background-color: var(--hover-primary);\n}\n\n.project-title {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    cursor: pointer;\n}\n\n.add-project-container {\n    justify-content: end;\n}\n\n.add-project-button {\n    cursor: pointer;\n}\n\n.add-project-form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    justify-content: center;\n    align-items: center;\n    height: 100px;\n    transition: 0.2s;\n}\n\n.add-project-form-input input {\n    border: 0px;\n    height: 25px;\n    max-width: 180px;\n    padding: 5px 10px;\n    border-radius: var(--border-radius-value);\n    outline: 0px;\n    background-color: #3f4246;\n    color: white;\n    font-size: 1.1rem;\n    transition: 0.2s;\n}\n\n.add-project-form-input input:hover {\n    transform: scale(1.05);\n}\n\n.add-project-form-buttons {\n    display: flex;\n    gap: 10px;\n    width: 200px;\n}\n\n.submit-project-form,\n.edit-task-save-button,\n.edit-project-save-button {\n    background-color: rgb(67, 185, 127);\n}\n\n.cancel-add-project-form,\n.edit-task-cancel-button {\n    background-color: rgb(239, 68, 68);\n}\n\n.add-project-form-buttons button {\n    padding: 7px 3px;\n    font-size: 1.15rem;\n    flex-grow: 1;\n    border-radius: var(--border-radius-value);\n    border: 0px;\n    cursor: pointer;\n    transition: 0.2s;\n    color: var(--primary-background);\n}\n\n.add-project-form-buttons button:hover {\n    transform: scale(1.1);\n}\n\n.delete-project-svg {\n    fill: white;\n}\n\n.delete-task-svg {\n    fill: var(--primary-background);\n}\n\n.delete-project-button {\n    display: flex;\n    align-items: center;\n    background-color: transparent;\n    border: 0px;\n    margin: 0px;\n    padding: 0px;\n    cursor: pointer;\n}\n\n.delete-project-button:hover {\n    transform: scale(1.1);\n}\n\n.tasks-content {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-top: 10px;\n}\n\n.task-item {\n    background-color: white;\n    box-shadow: 0px 2px 2px #dfe5ec;\n    border-radius: var(--border-radius-value);\n    border: 1px solid rgb(231, 231, 231);\n    padding: 10px 15px;\n    display: grid;\n    grid-template-columns: 30px 1fr 100px 80px 50px;\n    align-items: center;\n    gap: 10px;\n    height: 30px;\n}\n\n.task-completed {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.checkbox {\n    border: 1px solid rgb(196, 196, 196);\n    border-radius: 20px;\n    height: 20px;\n    width: 20px;\n    cursor: pointer;\n}\n\n.checked {\n    background-color: #1b1d1f;\n}\n\n.strikethrough {\n    text-decoration: line-through;\n}\n\n.edit-task-item {\n    background-color: white;\n    box-shadow: 0px 2px 2px #dfe5ec;\n    border-radius: var(--border-radius-value);\n    border: 1px solid rgb(231, 231, 231);\n    padding: 15px 15px 5px 15px;\n    display: grid;\n    grid-template-columns: 1fr 250px;\n    grid-template-rows: 30px 100px 50px;\n    align-items: center;\n    gap: 15px;\n}\n\n.edit-task-description-container {\n    grid-row: 2 / 3;\n    grid-column: 1 / -1;\n    align-self: stretch;\n}\n\n.edit-task-description-container textarea {\n    width: 98.5%;\n    height: 95%;\n    border-radius: var(--border-radius-value);\n    outline: 0;\n    border: 0.5px solid rgb(224, 224, 224);\n    resize: none;\n    font-family: 'DM Sans', sans-serif;\n    padding: 10px 0px 0px 10px;\n    background-color: var(--secondary-background);\n}\n\n.edit-task-priority-and-due-date-container {\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n    display: flex;\n    gap: 10px;\n}\n\ninput[type=\"date\"] {\n    padding: 7px 15px;\n    border-radius: var(--border-radius-value);\n    border: 0px;\n    outline: 0;\n    background-color: var(--secondary-background);\n    border: 0.5px solid rgb(224, 224, 224);\n}\n\n.priority-selector,\n.project-selector {\n    padding: 7px 15px;\n    border: 0;\n    outline: 0;\n    border-radius: var(--border-radius-value);\n    background-color: var(--secondary-background);\n    height: 100%;\n    border: 0.5px solid rgb(224, 224, 224);\n}\n\n.edit-task-action-buttons {\n    grid-row: 3 / 4;\n    grid-column: 2 / 3;\n    justify-self: end;\n    display: flex;\n    gap: 7px;\n}\n\n.edit-task-action-buttons button {\n    border: 0;\n    padding: 7px 15px;\n    border-radius: var(--border-radius-value);\n    transition: 0.2s;\n    cursor: pointer;\n    font-size: 1.05rem;\n}\n\n.edit-task-action-buttons button:hover {\n    transform: scale(1.1);\n}\n\n.edit-task-title-container input {\n    background-color: var(--secondary-background);\n    padding: 7px 15px;\n    border-radius: var(--border-radius-value);\n    border: 0px;\n    outline: 0px;\n    color: black;\n    font-weight: 500;\n    font-size: 1rem;\n    border: 0.5px solid rgb(224, 224, 224);\n}\n\n\n.edit-task-project-container {\n    display: flex;\n    justify-content: end;\n}\n\n.task-title {\n    font-weight: bold;\n    flex-grow: 1;\n}\n\n\n[class^=\"task-priority-\"] {\n    padding: 5px 10px;\n    border-radius: var(--border-radius-value);\n    justify-self: stretch;\n    text-align: center;\n}\n\n.task-priority-High {\n    border: 2px solid rgb(209, 69, 59);\n    background-color: rgb(246, 218, 216);\n}\n\n.task-priority-Medium {\n    border: 2px solid rgb(235, 137, 9);\n    background-color: rgb(251, 231, 206);\n}\n\n.task-priority-Low {\n    border: 2px solid rgb(36, 111, 224);\n    background-color: rgb(211, 226, 249);\n}\n\n.add-task-div {\n    margin-top: 10px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.add-task-button,\n.clear-completed-tasks {\n    padding: 10px 15px;\n    font-size: 1rem;\n    box-shadow: 0px 4px 4px #dfe5ec;\n    border-radius: var(--border-radius-value);\n    background-color: var(--primary-background);\n    border: 0px;\n    text-align: start;\n    transition: 0.2s;\n    color: white;\n}\n\n.add-task-item {\n    width: 100%;\n}\n\n.add-task-button:hover,\n.clear-completed-tasks:hover {\n    background-color: var(--hover-primary);\n    cursor: pointer;\n}\n\n.action-buttons-container {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.action-button {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    transition: 0.1s;\n}\n\n.action-button:hover {\n    transform: scale(1.15);\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlJQUF5STtBQUN6STtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sa0ZBQWtGLE1BQU0saUJBQWlCLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxPQUFPLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFFBQVEsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksc09BQXNPLDhmQUE4ZixjQUFjLGVBQWUsY0FBYyxvQkFBb0Isa0JBQWtCLDZCQUE2QixHQUFHLGdKQUFnSixtQkFBbUIsR0FBRyxRQUFRLG1CQUFtQixHQUFHLFVBQVUscUJBQXFCLEdBQUcsaUJBQWlCLGlCQUFpQixHQUFHLDJEQUEyRCxnQkFBZ0Isa0JBQWtCLEdBQUcsU0FBUyw4QkFBOEIsc0JBQXNCLEdBQUcsT0FBTyxzQkFBc0IsR0FBRyxXQUFXLHlDQUF5QyxzQ0FBc0Msd0RBQXdELCtCQUErQixpQ0FBaUMsR0FBRyxhQUFhLG1CQUFtQixvQkFBb0IsOEJBQThCLDBCQUEwQixrREFBa0QsbUJBQW1CLHdCQUF3QixHQUFHLGdCQUFnQixvQkFBb0Isd0JBQXdCLEdBQUcsY0FBYyxtQkFBbUIsa0RBQWtELG9CQUFvQixtQkFBbUIsR0FBRyxvQkFBb0IsMEJBQTBCLHdCQUF3Qix3QkFBd0IseUJBQXlCLEdBQUcsY0FBYyx5QkFBeUIsbUJBQW1CLG9EQUFvRCxHQUFHLHdCQUF3QixzQkFBc0Isd0JBQXdCLDBCQUEwQixvQkFBb0IscUNBQXFDLDBCQUEwQixHQUFHLHlCQUF5Qix3QkFBd0Isd0JBQXdCLGdEQUFnRCxrQkFBa0IsaUJBQWlCLDhCQUE4Qiw2Q0FBNkMsR0FBRyw2QkFBNkIsc0JBQXNCLHVCQUF1QixnREFBZ0QsbUJBQW1CLEdBQUcsbUNBQW1DLDRCQUE0QiwyQ0FBMkMsR0FBRyxtQkFBbUIsdUJBQXVCLHdCQUF3Qix1QkFBdUIsZ0RBQWdELHdCQUF3QixtQkFBbUIsb0JBQW9CLDBCQUEwQixHQUFHLHlCQUF5Qiw2Q0FBNkMsc0JBQXNCLEdBQUcsY0FBYyxxQ0FBcUMsR0FBRyx1QkFBdUIsNkNBQTZDLEdBQUcsb0JBQW9CLDhCQUE4Qix1QkFBdUIsc0JBQXNCLEdBQUcsNEJBQTRCLDJCQUEyQixHQUFHLHlCQUF5QixzQkFBc0IsR0FBRyx1QkFBdUIsb0JBQW9CLDZCQUE2QixnQkFBZ0IsOEJBQThCLDBCQUEwQixvQkFBb0IsdUJBQXVCLEdBQUcsbUNBQW1DLGtCQUFrQixtQkFBbUIsdUJBQXVCLHdCQUF3QixnREFBZ0QsbUJBQW1CLGdDQUFnQyxtQkFBbUIsd0JBQXdCLHVCQUF1QixHQUFHLHlDQUF5Qyw2QkFBNkIsR0FBRywrQkFBK0Isb0JBQW9CLGdCQUFnQixtQkFBbUIsR0FBRywrRUFBK0UsMENBQTBDLEdBQUcseURBQXlELHlDQUF5QyxHQUFHLHNDQUFzQyx1QkFBdUIseUJBQXlCLG1CQUFtQixnREFBZ0Qsa0JBQWtCLHNCQUFzQix1QkFBdUIsdUNBQXVDLEdBQUcsNENBQTRDLDRCQUE0QixHQUFHLHlCQUF5QixrQkFBa0IsR0FBRyxzQkFBc0Isc0NBQXNDLEdBQUcsNEJBQTRCLG9CQUFvQiwwQkFBMEIsb0NBQW9DLGtCQUFrQixrQkFBa0IsbUJBQW1CLHNCQUFzQixHQUFHLGtDQUFrQyw0QkFBNEIsR0FBRyxvQkFBb0Isb0JBQW9CLDZCQUE2QixnQkFBZ0IsdUJBQXVCLEdBQUcsZ0JBQWdCLDhCQUE4QixzQ0FBc0MsZ0RBQWdELDJDQUEyQyx5QkFBeUIsb0JBQW9CLHNEQUFzRCwwQkFBMEIsZ0JBQWdCLG1CQUFtQixHQUFHLHFCQUFxQixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLGVBQWUsMkNBQTJDLDBCQUEwQixtQkFBbUIsa0JBQWtCLHNCQUFzQixHQUFHLGNBQWMsZ0NBQWdDLEdBQUcsb0JBQW9CLG9DQUFvQyxHQUFHLHFCQUFxQiw4QkFBOEIsc0NBQXNDLGdEQUFnRCwyQ0FBMkMsa0NBQWtDLG9CQUFvQix1Q0FBdUMsMENBQTBDLDBCQUEwQixnQkFBZ0IsR0FBRyxzQ0FBc0Msc0JBQXNCLDBCQUEwQiwwQkFBMEIsR0FBRywrQ0FBK0MsbUJBQW1CLGtCQUFrQixnREFBZ0QsaUJBQWlCLDZDQUE2QyxtQkFBbUIseUNBQXlDLGlDQUFpQyxvREFBb0QsR0FBRyxnREFBZ0QseUJBQXlCLHNCQUFzQixvQkFBb0IsZ0JBQWdCLEdBQUcsMEJBQTBCLHdCQUF3QixnREFBZ0Qsa0JBQWtCLGlCQUFpQixvREFBb0QsNkNBQTZDLEdBQUcsNENBQTRDLHdCQUF3QixnQkFBZ0IsaUJBQWlCLGdEQUFnRCxvREFBb0QsbUJBQW1CLDZDQUE2QyxHQUFHLCtCQUErQixzQkFBc0IseUJBQXlCLHdCQUF3QixvQkFBb0IsZUFBZSxHQUFHLHNDQUFzQyxnQkFBZ0Isd0JBQXdCLGdEQUFnRCx1QkFBdUIsc0JBQXNCLHlCQUF5QixHQUFHLDRDQUE0Qyw0QkFBNEIsR0FBRyxzQ0FBc0Msb0RBQW9ELHdCQUF3QixnREFBZ0Qsa0JBQWtCLG1CQUFtQixtQkFBbUIsdUJBQXVCLHNCQUFzQiw2Q0FBNkMsR0FBRyxvQ0FBb0Msb0JBQW9CLDJCQUEyQixHQUFHLGlCQUFpQix3QkFBd0IsbUJBQW1CLEdBQUcsbUNBQW1DLHdCQUF3QixnREFBZ0QsNEJBQTRCLHlCQUF5QixHQUFHLHlCQUF5Qix5Q0FBeUMsMkNBQTJDLEdBQUcsMkJBQTJCLHlDQUF5QywyQ0FBMkMsR0FBRyx3QkFBd0IsMENBQTBDLDJDQUEyQyxHQUFHLG1CQUFtQix1QkFBdUIsb0JBQW9CLHFDQUFxQyxHQUFHLCtDQUErQyx5QkFBeUIsc0JBQXNCLHNDQUFzQyxnREFBZ0Qsa0RBQWtELGtCQUFrQix3QkFBd0IsdUJBQXVCLG1CQUFtQixHQUFHLG9CQUFvQixrQkFBa0IsR0FBRywyREFBMkQsNkNBQTZDLHNCQUFzQixHQUFHLCtCQUErQixvQkFBb0IsMEJBQTBCLGVBQWUsR0FBRyxvQkFBb0Isc0JBQXNCLG9CQUFvQiwwQkFBMEIsdUJBQXVCLEdBQUcsMEJBQTBCLDZCQUE2QixHQUFHLG1CQUFtQjtBQUN6Nlo7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNsZDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0EsaUVBQWU7QUFDZjtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDSEQsaUVBQWUsY0FBYyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxHQUFHLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7QUNBcEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sd0RBQVE7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ1M7QUFDTjtBQUNzQjs7QUFFakQ7QUFDQSxNQUFNLGtEQUFNO0FBQ1osV0FBVyxrREFBTTtBQUNqQjs7QUFFQTtBQUNBLGlEQUFpRCwrQ0FBRyxLQUFLOztBQUV6RDtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUyw4REFBZTtBQUN4Qjs7QUFFQSxpRUFBZSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7QUM1QmM7O0FBRS9CO0FBQ0EscUNBQXFDLGlEQUFLO0FBQzFDOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlc7O0FBRWxDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0RBQUk7QUFDbkIseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGVBQWUsZ0RBQUk7O0FBRW5CO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRytCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkNBQWU7QUFDM0I7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnREFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9CQUFvQjtBQUN4RDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0Esc0JBQXNCLDhDQUFnQjtBQUN0Qyx3QkFBd0IsOENBQWdCO0FBQ3hDO0FBQ0E7QUFDQSxzREFBc0QsV0FBVztBQUNqRTtBQUNBLHVDQUF1QyxjQUFjO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsOENBQWdCO0FBQzFDLDRCQUE0Qiw4Q0FBZ0I7QUFDNUM7QUFDQTtBQUNBLHFDQUFxQyxXQUFXLGFBQWEsY0FBYztBQUMzRTtBQUNBLGNBQWM7QUFDZDtBQUNBLHFDQUFxQyxXQUFXLElBQUksY0FBYztBQUNsRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFTTtBQUNQOztBQUVBO0FBQ0Esa0JBQWtCLDhDQUFnQjtBQUNsQztBQUNBO0FBQ0EsdUNBQXVDLE1BQU07QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsOENBQWdCOztBQUV4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsUUFBUTtBQUMzRDtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRCwyQ0FBMkMsYUFBYTtBQUN4RCwwQ0FBMEMsY0FBYyxJQUFJLGNBQWM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRCxRQUFRO0FBQzdELHFEQUFxRCxRQUFRO0FBQzdELHFEQUFxRCxRQUFRLG9CQUFvQixjQUFjO0FBQy9GLHFEQUFxRCxRQUFRLG9CQUFvQixjQUFjO0FBQy9GLHFEQUFxRCxRQUFRO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzREFBd0I7QUFDcEM7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVNO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkNBQWU7QUFDM0I7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLGdEQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSxlQUFlO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxPQUFPOztBQUVoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNJQUFzSSw4Q0FBZ0IsZ0NBQWdDO0FBQ3RMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNLQUFzSyw4Q0FBZ0Isc0NBQXNDO0FBQzVOOztBQUVBO0FBQ0E7QUFDQSxrSkFBa0osOENBQWdCLGtDQUFrQztBQUNwTTtBQUNBO0FBQ0EsZ0ZBQWdGLE9BQU8sc0JBQXNCLE9BQU87QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1GQUFtRixRQUFRLGdCQUFnQiw4Q0FBZ0IsbUNBQW1DO0FBQzlKO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxPQUFPO0FBQzdFOztBQUVBLFlBQVksMkNBQWE7QUFDekI7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxtREFBcUI7O0FBRWpDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRiw4Q0FBZ0Isa0JBQWtCO0FBQzVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBcUI7QUFDakM7QUFDQTtBQUNBLHlFQUF5RSxVQUFVO0FBQ25GO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7VUNsYUQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2E7QUFDRjs7QUFFaEMscURBQW9CO0FBQ3BCLG9EQUFtQjtBQUNuQixpREFBZ0I7O0FBRWhCLFlBQVksaURBQWdCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NydWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ETStTYW5zOm9wc3osd2dodEA5Li40MCwzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5vbCwgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSwgcSB7XG5cdHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0Y29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbnAge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuOnJvb3Qge1xuICAgIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XG5cbiAgICAtLXByaW1hcnktYmFja2dyb3VuZDogIzFiMWQxZjtcbiAgICAtLXNlY29uZGFyeS1iYWNrZ3JvdW5kOiByZ2JhKDI0MCwgMjQyLCAyNDUsIDAuODUpO1xuICAgIC0taG92ZXItcHJpbWFyeTogIzNmNDI0NjtcbiAgICAtLWJvcmRlci1yYWRpdXMtdmFsdWU6IDdweDtcbn1cblxuLm5hdmJhciB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLnNpZGViYXIge1xuICAgIHdpZHRoOiAyMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2lkZWJhci10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBmb250LXdlaWdodDogMTAwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgICBwYWRkaW5nOiA0MHB4IDgwcHg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kKTtcbn1cblxuLmNvbnRlbnQtdGl0bGUtZGl2IHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jZWRpdC1wcm9qZWN0LWlucHV0IHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcbiAgICBib3JkZXI6IDBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDIyNCwgMjI0LCAyMjQpO1xufVxuXG4uZWRpdC1wcm9qZWN0LXRpdGxlIHN2ZyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4uZWRpdC1wcm9qZWN0LXRpdGxlIHN2Zzpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIxOCwgMjE4KTtcbn1cblxuLnNpZGViYXItaXRlbSB7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaWRlYmFyLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLXByaW1hcnkpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3Qge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnNlbGVjdGVkLXByb2plY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLXByaW1hcnkpO1xufVxuXG4ucHJvamVjdC10aXRsZSB7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGQtcHJvamVjdC1jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGQtcHJvamVjdC1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uYWRkLXByb2plY3QtZm9ybS1pbnB1dCBpbnB1dCB7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XG4gICAgb3V0bGluZTogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjQyNDY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5hZGQtcHJvamVjdC1mb3JtLWlucHV0IGlucHV0OmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4uYWRkLXByb2plY3QtZm9ybS1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICB3aWR0aDogMjAwcHg7XG59XG5cbi5zdWJtaXQtcHJvamVjdC1mb3JtLFxuLmVkaXQtdGFzay1zYXZlLWJ1dHRvbixcbi5lZGl0LXByb2plY3Qtc2F2ZS1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NywgMTg1LCAxMjcpO1xufVxuXG4uY2FuY2VsLWFkZC1wcm9qZWN0LWZvcm0sXG4uZWRpdC10YXNrLWNhbmNlbC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDY4LCA2OCk7XG59XG5cbi5hZGQtcHJvamVjdC1mb3JtLWJ1dHRvbnMgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA3cHggM3B4O1xuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZCk7XG59XG5cbi5hZGQtcHJvamVjdC1mb3JtLWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5kZWxldGUtcHJvamVjdC1zdmcge1xuICAgIGZpbGw6IHdoaXRlO1xufVxuXG4uZGVsZXRlLXRhc2stc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xufVxuXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4udGFza3MtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4udGFzay1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAjZGZlNWVjO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzEsIDIzMSwgMjMxKTtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMWZyIDEwMHB4IDgwcHggNTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbi50YXNrLWNvbXBsZXRlZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2hlY2tib3gge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTYsIDE5NiwgMTk2KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxZDFmO1xufVxuXG4uc3RyaWtldGhyb3VnaCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5lZGl0LXRhc2staXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggI2RmZTVlYztcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjMxLCAyMzEsIDIzMSk7XG4gICAgcGFkZGluZzogMTVweCAxNXB4IDVweCAxNXB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjUwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDEwMHB4IDUwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE1cHg7XG59XG5cbi5lZGl0LXRhc2stZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xufVxuXG4uZWRpdC10YXNrLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDk4LjUlO1xuICAgIGhlaWdodDogOTUlO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMjI0LCAyMjQsIDIyNCk7XG4gICAgcmVzaXplOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZzogMTBweCAwcHggMHB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQpO1xufVxuXG4uZWRpdC10YXNrLXByaW9yaXR5LWFuZC1kdWUtZGF0ZS1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBncmlkLXJvdzogMyAvIDQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbmlucHV0W3R5cGU9XCJkYXRlXCJdIHtcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcbiAgICBib3JkZXI6IDBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kKTtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigyMjQsIDIyNCwgMjI0KTtcbn1cblxuLnByaW9yaXR5LXNlbGVjdG9yLFxuLnByb2plY3Qtc2VsZWN0b3Ige1xuICAgIHBhZGRpbmc6IDdweCAxNXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMjI0LCAyMjQsIDIyNCk7XG59XG5cbi5lZGl0LXRhc2stYWN0aW9uLWJ1dHRvbnMge1xuICAgIGdyaWQtcm93OiAzIC8gNDtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDdweDtcbn1cblxuLmVkaXQtdGFzay1hY3Rpb24tYnV0dG9ucyBidXR0b24ge1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEuMDVyZW07XG59XG5cbi5lZGl0LXRhc2stYWN0aW9uLWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5lZGl0LXRhc2stdGl0bGUtY29udGFpbmVyIGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZCk7XG4gICAgcGFkZGluZzogN3B4IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgb3V0bGluZTogMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigyMjQsIDIyNCwgMjI0KTtcbn1cblxuXG4uZWRpdC10YXNrLXByb2plY3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4udGFzay10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG5cbltjbGFzc149XCJ0YXNrLXByaW9yaXR5LVwiXSB7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XG4gICAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhc2stcHJpb3JpdHktSGlnaCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIwOSwgNjksIDU5KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAyMTgsIDIxNik7XG59XG5cbi50YXNrLXByaW9yaXR5LU1lZGl1bSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIzNSwgMTM3LCA5KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAyMzEsIDIwNik7XG59XG5cbi50YXNrLXByaW9yaXR5LUxvdyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDM2LCAxMTEsIDIyNCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMSwgMjI2LCAyNDkpO1xufVxuXG4uYWRkLXRhc2stZGl2IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYWRkLXRhc2stYnV0dG9uLFxuLmNsZWFyLWNvbXBsZXRlZC10YXNrcyB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAjZGZlNWVjO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5hZGQtdGFzay1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmFkZC10YXNrLWJ1dHRvbjpob3Zlcixcbi5jbGVhci1jb21wbGV0ZWQtdGFza3M6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLXByaW1hcnkpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFjdGlvbi1idXR0b25zLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xufVxuXG4uYWN0aW9uLWJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xufVxuXG4uYWN0aW9uLWJ1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUlEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQ0FBa0M7O0lBRWxDLDZCQUE2QjtJQUM3QixpREFBaUQ7SUFDakQsd0JBQXdCO0lBQ3hCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVC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QjtJQUNqQix5Q0FBeUM7SUFDekMscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLHlDQUF5QztJQUN6QywyQ0FBMkM7SUFDM0MsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxzQ0FBc0M7SUFDdEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ETStTYW5zOm9wc3osd2dodEA5Li40MCwzMDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbnAge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcXG5cXG4gICAgLS1wcmltYXJ5LWJhY2tncm91bmQ6ICMxYjFkMWY7XFxuICAgIC0tc2Vjb25kYXJ5LWJhY2tncm91bmQ6IHJnYmEoMjQwLCAyNDIsIDI0NSwgMC44NSk7XFxuICAgIC0taG92ZXItcHJpbWFyeTogIzNmNDI0NjtcXG4gICAgLS1ib3JkZXItcmFkaXVzLXZhbHVlOiA3cHg7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyLXRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgcGFkZGluZzogNDBweCA4MHB4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmNvbnRlbnQtdGl0bGUtZGl2IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogMTAwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZWRpdC1wcm9qZWN0LWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHBhZGRpbmc6IDdweCAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigyMjQsIDIyNCwgMjI0KTtcXG59XFxuXFxuLmVkaXQtcHJvamVjdC10aXRsZSBzdmcge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5lZGl0LXByb2plY3QtdGl0bGUgc3ZnOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMTgsIDIxOCk7XFxufVxcblxcbi5zaWRlYmFyLWl0ZW0ge1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlYmFyLWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1wcmltYXJ5KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNlbGVjdGVkLXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1wcmltYXJ5KTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWZvcm0taW5wdXQgaW5wdXQge1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XFxuICAgIG91dGxpbmU6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNDI0NjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWZvcm0taW5wdXQgaW5wdXQ6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZm9ybS1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5zdWJtaXQtcHJvamVjdC1mb3JtLFxcbi5lZGl0LXRhc2stc2F2ZS1idXR0b24sXFxuLmVkaXQtcHJvamVjdC1zYXZlLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NywgMTg1LCAxMjcpO1xcbn1cXG5cXG4uY2FuY2VsLWFkZC1wcm9qZWN0LWZvcm0sXFxuLmVkaXQtdGFzay1jYW5jZWwtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgNjgsIDY4KTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWZvcm0tYnV0dG9ucyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA3cHggM3B4O1xcbiAgICBmb250LXNpemU6IDEuMTVyZW07XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZm9ybS1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LXN2ZyB7XFxuICAgIGZpbGw6IHdoaXRlO1xcbn1cXG5cXG4uZGVsZXRlLXRhc2stc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4udGFza3MtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnRhc2staXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAjZGZlNWVjO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzMSwgMjMxLCAyMzEpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAxZnIgMTAwcHggODBweCA1MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnRhc2stY29tcGxldGVkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTYsIDE5NiwgMTk2KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjFkMWY7XFxufVxcblxcbi5zdHJpa2V0aHJvdWdoIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5lZGl0LXRhc2staXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAjZGZlNWVjO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzMSwgMjMxLCAyMzEpO1xcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggNXB4IDE1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDI1MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMTAwcHggNTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uZWRpdC10YXNrLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuLmVkaXQtdGFzay1kZXNjcmlwdGlvbi1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICB3aWR0aDogOTguNSU7XFxuICAgIGhlaWdodDogOTUlO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMjI0LCAyMjQsIDIyNCk7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogMTBweCAwcHggMHB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmVkaXQtdGFzay1wcmlvcml0eS1hbmQtZHVlLWRhdGUtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgcGFkZGluZzogN3B4IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQpO1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigyMjQsIDIyNCwgMjI0KTtcXG59XFxuXFxuLnByaW9yaXR5LXNlbGVjdG9yLFxcbi5wcm9qZWN0LXNlbGVjdG9yIHtcXG4gICAgcGFkZGluZzogN3B4IDE1cHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigyMjQsIDIyNCwgMjI0KTtcXG59XFxuXFxuLmVkaXQtdGFzay1hY3Rpb24tYnV0dG9ucyB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA3cHg7XFxufVxcblxcbi5lZGl0LXRhc2stYWN0aW9uLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy12YWx1ZSk7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xcbn1cXG5cXG4uZWRpdC10YXNrLWFjdGlvbi1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmVkaXQtdGFzay10aXRsZS1jb250YWluZXIgaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZCk7XFxuICAgIHBhZGRpbmc6IDdweCAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIG91dGxpbmU6IDBweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDIyNCwgMjI0LCAyMjQpO1xcbn1cXG5cXG5cXG4uZWRpdC10YXNrLXByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuXFxuW2NsYXNzXj1cXFwidGFzay1wcmlvcml0eS1cXFwiXSB7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXZhbHVlKTtcXG4gICAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLXByaW9yaXR5LUhpZ2gge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjA5LCA2OSwgNTkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAyMTgsIDIxNik7XFxufVxcblxcbi50YXNrLXByaW9yaXR5LU1lZGl1bSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMzUsIDEzNywgOSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDIzMSwgMjA2KTtcXG59XFxuXFxuLnRhc2stcHJpb3JpdHktTG93IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDM2LCAxMTEsIDIyNCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDIyNiwgMjQ5KTtcXG59XFxuXFxuLmFkZC10YXNrLWRpdiB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbixcXG4uY2xlYXItY29tcGxldGVkLXRhc2tzIHtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4ICNkZmU1ZWM7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtdmFsdWUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFkZC10YXNrLWl0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbjpob3ZlcixcXG4uY2xlYXItY29tcGxldGVkLXRhc2tzOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItcHJpbWFyeSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFjdGlvbi1idXR0b25zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uYWN0aW9uLWJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXG59XFxuXFxuLmFjdGlvbi1idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiBieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5cbmxldCBhbGxQcm9qZWN0cztcbmxldCBpbmJveElkO1xuXG4vLyBDaGVjayBpZiBsb2NhbCBzdG9yYWdlIGNvbnRhaW5zIFwiYWxsUHJvamVjdHNcIiBhbmQgaWYgbm90LCBpbml0aWF0ZSBpdCB3aXRoIGRlZmF1bHQgXCJpbmJveFwiIHByb2plY3RcbmNvbnN0IHN5bmNBbGxQcm9qZWN0cyA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFByb2plY3RzJyk7XG4gICAgbGV0IGluYm94O1xuICAgIGlmIChpdGVtcyA9PT0gbnVsbCkge1xuICAgICAgICBhbGxQcm9qZWN0cyA9IHt9O1xuICAgICAgICBpbmJveCA9IGNyZWF0ZVByb2plY3QoJ0luYm94Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcGFyc2VkSXRlbXMgPSBKU09OLnBhcnNlKGl0ZW1zKTtcbiAgICAgICAgYWxsUHJvamVjdHMgPSBwYXJzZWRJdGVtc1xuICAgICAgICBpbmJveCA9IGFsbFByb2plY3RzW09iamVjdC5rZXlzKGFsbFByb2plY3RzKVswXV07XG4gICAgfVxuICAgIGluYm94SWQgPSBpbmJveC5pZDtcbn07XG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSBsb2NhbCBzdG9yYWdlIGFmdGVyIG1ha2luZyBjaGFuZ2VzIHRvIGFsbFByb2plY3RzIG9iamVjdFxuY29uc3QgdXBkYXRlTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbn07XG5cbi8vIEZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIG5ldyBwcm9qZWN0XG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0ICh0aXRsZSkgeyBcbiAgICBjb25zdCB0YXNrcyA9IHt9O1xuICAgIGNvbnN0IGlkID0gdXVpZCgpO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSB7IHRpdGxlLCB0YXNrcywgaWQgfTtcbiAgICBhbGxQcm9qZWN0c1tpZF0gPSBuZXdQcm9qZWN0O1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgIHJldHVybiBuZXdQcm9qZWN0O1xufTtcblxuLy8gRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgbmV3IHRvZG8gbGlzdCwgYWRkZWQgdG8gaW5ib3ggYnkgZGVmYXVsdFxuY29uc3QgY3JlYXRlVGFzayA9IGZ1bmN0aW9uKHRpdGxlLCBkaXJlY3RvcnksIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuXG4gICAgLy8gRGVmaW5lIGEgXCJjb21wbGV0ZVwiIHByb3BlcnR5IHdoaWNoIGRlZmF1bHRzIHRvIEZhbHNlXG4gICAgY29uc3QgY29tcGxldGUgPSBmYWxzZTtcblxuICAgIC8vIENyZWF0ZSBhIHVuaXF1ZSBpZGVudGlmaWVyIGZvciBjcmVhdGVkIG9iamVjdFxuICAgIGNvbnN0IGlkID0gdXVpZCgpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBuZXcgdG8tZG8gaXRlbVxuICAgIGNvbnN0IGNyZWF0ZWRUYXNrID0geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBkaXJlY3RvcnksIGNvbXBsZXRlLCBpZCB9O1xuXG4gICAgLy8gQWRkIHRoZSBuZXdseSBjcmVhdGVkIGl0ZW0gb250byB0aGUgZGVzaXJlZCBwcm9qZWN0cyBsaXN0XG4gICAgYWxsUHJvamVjdHNbZGlyZWN0b3J5XS50YXNrc1tpZF0gPSBjcmVhdGVkVGFzaztcblxuICAgIC8vIFVwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG5cbiAgICAvLyBSZXR1cm4gdGhlIGl0ZW0sIHRoZXJlYnkgYXNzaWduaW5nIGl0IHRvIHRoZSBjcmVhdGVkIHZhcmlhYmxlIG91dHNpZGUgXG4gICAgcmV0dXJuIGNyZWF0ZWRUYXNrO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRhc2tzSW5Qcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3RJZCkge1xuICAgIHJldHVybiBhbGxQcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRhc2sgPSBmdW5jdGlvbih0YXNrSWQsIHByb2plY3RJZCkge1xuICAgIGRlbGV0ZSBhbGxQcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZF07XG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvamVjdCA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgaWYgKGlkID09PSBpbmJveElkKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnY2Fubm90IGRlbGV0ZSBpbmJveCcpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhbGxQcm9qZWN0cykge1xuICAgICAgICBpZiAoa2V5ID09PSBpZCkge1xuICAgICAgICAgICAgZGVsZXRlIGFsbFByb2plY3RzW2tleV07XG4gICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBlZGl0VGFzayA9IGZ1bmN0aW9uKHRhc2tJZCwgY3VycmVudFByb2plY3QsIG5ld1Byb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICBpZiAoY3VycmVudFByb2plY3QgIT0gbmV3UHJvamVjdCkge1xuICAgICAgICBkZWxldGVUYXNrKHRhc2tJZCk7XG4gICAgICAgIGNyZWF0ZVRhc2sodGl0bGUsIG5ld1Byb2plY3QsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGFza0lkXS50aXRsZSA9IHRpdGxlO1xuICAgICAgICBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGFza0lkXS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udGFza3NbdGFza0lkXS5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdLnRhc2tzW3Rhc2tJZF0ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUNvbXBsZXRpb24gPSBmdW5jdGlvbih0YXNrSWQsIHByb2plY3RJZCkge1xuICAgIGFsbFByb2plY3RzW3Byb2plY3RJZF0udGFza3NbdGFza0lkXS5jb21wbGV0ZSA9ICFhbGxQcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZF0uY29tcGxldGU7XG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZWRpdFByb2plY3RUaXRsZSA9IGZ1bmN0aW9uKHByb2plY3RJZCwgbmV3VGl0bGUpIHtcbiAgICBhbGxQcm9qZWN0c1twcm9qZWN0SWRdLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKClcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFyQ29tcGxldGVkVGFza3MgPSBmdW5jdGlvbihwcm9qZWN0SWQpIHtcbiAgICBsZXQgcHJvamVjdCA9IGFsbFByb2plY3RzW3Byb2plY3RJZF0udGFza3M7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gcHJvamVjdCkge1xuICAgICAgICBsZXQgdGFzayA9IHByb2plY3Rba2V5XTtcbiAgICAgICAgaWYgKHRhc2suY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBhbGxQcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzW2tleV07XG4gICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgYWxsUHJvamVjdHMsIHN5bmNBbGxQcm9qZWN0cywgdXBkYXRlTG9jYWxTdG9yYWdlLCBjcmVhdGVQcm9qZWN0LCBjcmVhdGVUYXNrIH0iLCJpbXBvcnQgKiBhcyBjcnVkIGZyb20gXCIuL2NydWRcIjtcblxuLy8gQWNjZXB0IGZvcm0gaW5wdXQgYW5kIGNyZWF0ZSBuZXcgdGFza1xuY29uc3QgYWRkVGFzayA9IGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N1Ym1pdC10YXNrLWZvcm0nKSkge1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1wcm9qZWN0LXNlbGVjdG9yJykudmFsdWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNydWQuY3JlYXRlVGFzayh0aXRsZSwgcHJvamVjdCwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9XG4gICAgfSlcbn0oKTtcblxuY29uc3QgYWRkUHJvamVjdEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdzdWJtaXQtcHJvamVjdC1mb3JtJykge1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpLnZhbHVlO1xuICAgICAgICAgICAgY3J1ZC5jcmVhdGVQcm9qZWN0KHRpdGxlKTtcbiAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgICAgICAgICAgYWRkUHJvamVjdFNlbGVjdG9yKCk7XG4gICAgICAgICAgICBkaXNwbGF5QWRkUHJvamVjdEJ1dHRvbigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBuZXdseUNyZWF0ZWRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Q6bGFzdC1jaGlsZCcpO1xuICAgICAgICAgICAgcmVtb3ZlU2VsZWN0ZWRDbGFzcygpO1xuICAgICAgICAgICAgYWRkU2VsZWN0ZWRDbGFzcyhuZXdseUNyZWF0ZWRQcm9qZWN0KTtcblxuICAgICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdjYW5jZWwtYWRkLXByb2plY3QtZm9ybScpIHtcbiAgICAgICAgICAgIGRpc3BsYXlBZGRQcm9qZWN0QnV0dG9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuYWRkLXByb2plY3QtY29udGFpbmVyJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHRyaWdnZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmFkZC1wcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgdHJpZ2dlci5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLXByb2plY3QtZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtcHJvamVjdC1mb3JtLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwcm9qZWN0LXRpdGxlXCIgaWQ9XCJwcm9qZWN0LXRpdGxlXCIgcGxhY2Vob2xkZXI9XCJhZGQgcHJvamVjdFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtcHJvamVjdC1mb3JtLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzdWJtaXQtcHJvamVjdC1mb3JtXCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2FuY2VsLWFkZC1wcm9qZWN0LWZvcm1cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgdHJpZ2dlci5jbGFzc0xpc3QucmVtb3ZlKCdhZGQtcHJvamVjdC1jb250YWluZXInKTtcbiAgICAgICAgICAgIHRyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1pdGVtJyk7XG4gICAgICAgICAgICB0cmlnZ2VyLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWZvcm0tY29udGFpbmVyJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9KVxufSgpO1xuXG5mdW5jdGlvbiBkaXNwbGF5QWRkUHJvamVjdEJ1dHRvbigpIHtcbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtZm9ybS1jb250YWluZXInKTtcbiAgICBhZGQuaW5uZXJIVE1MID0gYDxwIGNsYXNzPVwiYWRkLXByb2plY3QtYnV0dG9uXCI+KyBBZGQgUHJvamVjdDwvcD5gO1xuICAgIGFkZC5jbGFzc0xpc3QucmVtb3ZlKCdhZGQtcHJvamVjdC1mb3JtLWNvbnRhaW5lcicpO1xuICAgIGFkZC5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1jb250YWluZXInKTtcbiAgICBhZGQuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1pdGVtJyk7XG59O1xuXG5jb25zdCBhZGRUYXNrRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnYWRkLXRhc2stYnV0dG9uJykge1xuICAgICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgICAgICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWRpdicpO1xuICAgICAgICAgICAgYWRkVGFza0Rpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC10YXNrLWl0ZW0gYWRkLXRhc2staXRlbVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LXRhc2stdGl0bGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGlkPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIkFkZCB0aXRsZVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LXRhc2stZGVzY3JpcHRpb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImVkaXQtdGFzay1kZXNjcmlwdGlvbi1pbnB1dFwiIGlkPVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkFkZCBkZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtdGFzay1wcmlvcml0eS1hbmQtZHVlLWRhdGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWUtZGF0ZVwiIGlkPVwiZHVlLWRhdGVcIiBwbGFjZWhvbGRlcj1cImR1ZSBkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJwcmlvcml0eS1zZWxlY3RvclwiIG5hbWU9XCJwcmlvcml0eVwiIGlkPVwicHJpb3JpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIaWdoXCI+SGlnaDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxvd1wiIHNlbGVjdGVkPkxvdzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC10YXNrLXByb2plY3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJwcm9qZWN0LXNlbGVjdG9yXCIgbmFtZT1cImFkZC10YXNrLXByb2plY3Qtc2VsZWN0b3JcIiBpZD1cImFkZC10YXNrLXByb2plY3Qtc2VsZWN0b3JcIj48L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC10YXNrLWFjdGlvbi1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic3VibWl0LXRhc2stZm9ybSBlZGl0LXRhc2stc2F2ZS1idXR0b25cIj5BZGQgVGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlLXRhc2stZGlhbG9nIGVkaXQtdGFzay1jYW5jZWwtYnV0dG9uXCI+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBhZGRQcm9qZWN0U2VsZWN0b3IoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykuZm9jdXMoKTtcbiAgICAgICAgYWRkVGFza0Rpdi5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1kaXYnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xvc2UtdGFzay1kaWFsb2cnKSkge1xuICAgICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIH1cbiAgICB9KVxuXG59KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLXByb2plY3RzJyk7XG4gICAgc2lkZWJhci5pbm5lckhUTUwgPSAnJztcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjcnVkLmFsbFByb2plY3RzKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBjcnVkLmFsbFByb2plY3RzW2tleV07XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3UHJvamVjdC5jbGFzc05hbWUgPSAncHJvamVjdCBzaWRlYmFyLWl0ZW0nO1xuICAgICAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWlkJywgYCR7cHJvamVjdC5pZH1gKVxuICAgICAgICBuZXdQcm9qZWN0LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvamVjdC10aXRsZVwiPiR7cHJvamVjdC50aXRsZX08L3A+ICBcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtcHJvamVjdC1idXR0b25cIj5cbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiZGVsZXRlLXByb2plY3Qtc3ZnXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiICB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiPjxwYXRoICBjbGFzcz1cImRlbGV0ZS1wcm9qZWN0LXN2Zy1wYXRoXCIgZD1cIk0gMTAuODA2NjQxIDIgQyAxMC4yODk2NDEgMiA5Ljc5NTY4NzUgMi4yMDQzMTI1IDkuNDI5Njg3NSAyLjU3MDMxMjUgTCA5IDMgTCA0IDMgQSAxLjAwMDEgMS4wMDAxIDAgMSAwIDQgNSBMIDIwIDUgQSAxLjAwMDEgMS4wMDAxIDAgMSAwIDIwIDMgTCAxNSAzIEwgMTQuNTcwMzEyIDIuNTcwMzEyNSBDIDE0LjIwNTMxMiAyLjIwNDMxMjUgMTMuNzEwMzU5IDIgMTMuMTkzMzU5IDIgTCAxMC44MDY2NDEgMiB6IE0gNC4zNjUyMzQ0IDcgTCA1Ljg5MjU3ODEgMjAuMjYzNjcyIEMgNi4wMjQ1NzgxIDIxLjI1MzY3MiA2Ljg3NyAyMiA3Ljg3NSAyMiBMIDE2LjEyMzA0NyAyMiBDIDE3LjEyMTA0NyAyMiAxNy45NzQ0MjIgMjEuMjU0ODU5IDE4LjEwNzQyMiAyMC4yNTU4NTkgTCAxOS42MzQ3NjYgNyBMIDQuMzY1MjM0NCA3IHpcIi8+PC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgYDtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgICB9XG4gICAgZGVmYXVsdFNlbGVjdGVkUHJvamVjdCgpO1xufVxuXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdFNlbGVjdG9yID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VsZWN0UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1zZWxlY3RvcicpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkLXByb2plY3QnKTtcblxuICAgIHNlbGVjdFByb2plY3RzLmZvckVhY2goKHNlbGVjdFByb2plY3QpID0+IHtcbiAgICAgICAgc2VsZWN0UHJvamVjdC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY3J1ZC5hbGxQcm9qZWN0cykge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGNydWQuYWxsUHJvamVjdHNba2V5XTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UHJvamVjdC5kYXRhc2V0LnByb2plY3RJZCA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0UHJvamVjdC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHtwcm9qZWN0LmlkfVwiIHNlbGVjdGVkPiR7cHJvamVjdC50aXRsZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RQcm9qZWN0LmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke3Byb2plY3QuaWR9XCI+JHtwcm9qZWN0LnRpdGxlfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSAgICBcbn07XG5cbmV4cG9ydCBjb25zdCBzd2l0Y2hQcm9qZWN0cyA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1wcm9qZWN0cycpO1xuICAgIHNpZGViYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblxuICAgICAgICBsZXQgY2xpY2tlZCA9IDA7XG4gICAgICAgIGxldCBjbGlja2VkUHJvamVjdDtcblxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpKSB7XG4gICAgICAgICAgICBjbGlja2VkUHJvamVjdCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGNsaWNrZWQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0LXRpdGxlJykpIHtcbiAgICAgICAgICAgIGNsaWNrZWRQcm9qZWN0ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBjbGlja2VkID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xpY2tlZCA9PT0gMSkge1xuICAgICAgICAgICAgcmVtb3ZlU2VsZWN0ZWRDbGFzcygpO1xuICAgICAgICAgICAgYWRkU2VsZWN0ZWRDbGFzcyhjbGlja2VkUHJvamVjdCk7XG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgICAgfVxuICAgIH0pXG59KCk7XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5VGFza3MgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IHByb2plY3RJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZC1wcm9qZWN0JykuZGF0YXNldC5wcm9qZWN0SWQ7XG4gICAgY29uc3QgdGl0bGUgPSBjcnVkLmFsbFByb2plY3RzW3Byb2plY3RJZF0udGl0bGU7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXRpdGxlLWRpdlwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250ZW50LXRpdGxlXCI+JHt0aXRsZX08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1wcm9qZWN0LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAtOTYwIDk2MCA5NjBcIiB3aWR0aD1cIjI0XCI+PHBhdGggZD1cIk0yMDAtMjAwaDU3bDM5MS0zOTEtNTctNTctMzkxIDM5MXY1N1ptLTgwIDgwdi0xNzBsNTI4LTUyN3ExMi0xMSAyNi41LTE3dDMwLjUtNnExNiAwIDMxIDZ0MjYgMThsNTUgNTZxMTIgMTEgMTcuNSAyNnQ1LjUgMzBxMCAxNi01LjUgMzAuNVQ4MTctNjQ3TDI5MC0xMjBIMTIwWm02NDAtNTg0LTU2LTU2IDU2IDU2Wm0tMTQxIDg1LTI4LTI5IDU3IDU3LTI5LTI4WlwiLz48L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG5cbiAgICBjb25zdCB0YXNrc09iamVjdCA9IGNydWQuYWxsUHJvamVjdHNbcHJvamVjdElkXS50YXNrc1xuXG4gICAgbGV0IGNvbXBsZXRlZFRhc2tzUHJlc2VudCA9IGZhbHNlO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGFza3NPYmplY3QpIHtcbiAgICAgICAgY29uc3QgdGFzayA9IHRhc2tzT2JqZWN0W2tleV07XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWl0ZW1cIiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stY29tcGxldGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGFzay10aXRsZVwiPiR7dGFzay50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YXNrLWR1ZS1kYXRlXCI+JHt0YXNrLmR1ZURhdGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGFzay1wcmlvcml0eS0ke3Rhc2sucHJpb3JpdHl9XCI+JHt0YXNrLnByaW9yaXR5fTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWJ1dHRvbnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24tYnV0dG9uIGVkaXQtdGFzay1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgLTk2MCA5NjAgOTYwXCIgd2lkdGg9XCIyNFwiPjxwYXRoIGQ9XCJNMjAwLTIwMGg1N2wzOTEtMzkxLTU3LTU3LTM5MSAzOTF2NTdabS04MCA4MHYtMTcwbDUyOC01MjdxMTItMTEgMjYuNS0xN3QzMC41LTZxMTYgMCAzMSA2dDI2IDE4bDU1IDU2cTEyIDExIDE3LjUgMjZ0NS41IDMwcTAgMTYtNS41IDMwLjVUODE3LTY0N0wyOTAtMTIwSDEyMFptNjQwLTU4NC01Ni01NiA1NiA1NlptLTE0MSA4NS0yOC0yOSA1NyA1Ny0yOS0yOFpcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWJ1dHRvbiBkZWxldGUtdGFzay1idXR0b25cIj4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImRlbGV0ZS10YXNrLXN2Z1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiAgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIj48cGF0aCAgY2xhc3M9XCJkZWxldGUtcHJvamVjdC1zdmctcGF0aFwiIGQ9XCJNIDEwLjgwNjY0MSAyIEMgMTAuMjg5NjQxIDIgOS43OTU2ODc1IDIuMjA0MzEyNSA5LjQyOTY4NzUgMi41NzAzMTI1IEwgOSAzIEwgNCAzIEEgMS4wMDAxIDEuMDAwMSAwIDEgMCA0IDUgTCAyMCA1IEEgMS4wMDAxIDEuMDAwMSAwIDEgMCAyMCAzIEwgMTUgMyBMIDE0LjU3MDMxMiAyLjU3MDMxMjUgQyAxNC4yMDUzMTIgMi4yMDQzMTI1IDEzLjcxMDM1OSAyIDEzLjE5MzM1OSAyIEwgMTAuODA2NjQxIDIgeiBNIDQuMzY1MjM0NCA3IEwgNS44OTI1NzgxIDIwLjI2MzY3MiBDIDYuMDI0NTc4MSAyMS4yNTM2NzIgNi44NzcgMjIgNy44NzUgMjIgTCAxNi4xMjMwNDcgMjIgQyAxNy4xMjEwNDcgMjIgMTcuOTc0NDIyIDIxLjI1NDg1OSAxOC4xMDc0MjIgMjAuMjU1ODU5IEwgMTkuNjM0NzY2IDcgTCA0LjM2NTIzNDQgNyB6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb21wbGV0ZWRUYXNrc1ByZXNlbnQgPSB0cnVlO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIl0gLmNoZWNrYm94YCkuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIl0gLnRhc2stdGl0bGVgKS5jbGFzc0xpc3QuYWRkKCdzdHJpa2V0aHJvdWdoJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWlkPVwiJHt0YXNrLmlkfVwiXSAudGFzay1wcmlvcml0eS0ke3Rhc2sucHJpb3JpdHl9YCkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWlkPVwiJHt0YXNrLmlkfVwiXSAudGFzay1wcmlvcml0eS0ke3Rhc2sucHJpb3JpdHl9YCkuY2xhc3NOYW1lID0gJyc7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWlkPVwiJHt0YXNrLmlkfVwiXSAuZWRpdC10YXNrLWJ1dHRvbmApLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbXBsZXRlZFRhc2tzUHJlc2VudCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stZGl2JykuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImFkZC10YXNrLWJ1dHRvblwiPisgQWRkIFRhc2s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbGVhci1jb21wbGV0ZWQtdGFza3NcIj5DbGVhciBDb21wbGV0ZWQgVGFza3M8L2J1dHRvbj5cbiAgICAgICAgYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stZGl2JykuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImFkZC10YXNrLWJ1dHRvblwiPisgQWRkIFRhc2s8L2J1dHRvbj5cbiAgICAgICAgYDtcbiAgICB9XG59O1xuXG5jb25zdCBjbGVhckNvbXBsZXRlZFRhc2tzID0gZnVuY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2NsZWFyLWNvbXBsZXRlZC10YXNrcycpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZC1wcm9qZWN0JykuZGF0YXNldC5wcm9qZWN0SWQ7XG4gICAgICAgICAgICBjcnVkLmNsZWFyQ29tcGxldGVkVGFza3MocHJvamVjdElkKTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9XG4gICAgfSlcbn0oKTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRhc2tFdmVudCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtY29udGVudCcpO1xuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kZWxldGUtdGFzay1idXR0b24nKSkge1xuICAgICAgICAgICAgY29uc3QgY2xpY2tlZFRhc2sgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnW2RhdGEtdGFzay1pZF0nKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gY2xpY2tlZFRhc2suZGF0YXNldC50YXNrSWQ7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQtcHJvamVjdCcpLmRhdGFzZXQucHJvamVjdElkO1xuICAgICAgICAgICAgY3J1ZC5kZWxldGVUYXNrKGlkLCBwcm9qZWN0SWQpO1xuICAgICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIH1cbiAgICB9KVxufSgpO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvamVjdEV2ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLXByb2plY3RzJyk7XG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kZWxldGUtcHJvamVjdC1idXR0b24nKSkge1xuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZC1wcm9qZWN0JykuZGF0YXNldC5wcm9qZWN0SWQ7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbZGF0YS1wcm9qZWN0LWlkXScpLmRhdGFzZXQucHJvamVjdElkO1xuICAgICAgICAgICAgY3J1ZC5kZWxldGVQcm9qZWN0KGlkKTtcbiAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoY3VycmVudFByb2plY3QgIT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVTZWxlY3RlZENsYXNzKCk7XG4gICAgICAgICAgICAgICAgYWRkU2VsZWN0ZWRDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcm9qZWN0LWlkPVwiJHtjdXJyZW50UHJvamVjdH1cIl1gKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9XG4gICAgfSlcbn0oKTtcblxuZnVuY3Rpb24gcmVtb3ZlU2VsZWN0ZWRDbGFzcygpIHtcbiAgICBjb25zdCBjdXJyZW50U2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkLXByb2plY3QnKTtcbiAgICBjdXJyZW50U2VsZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLXByb2plY3QnKVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNlbGVjdGVkQ2xhc3MocHJvamVjdEVsZW1lbnQpIHtcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1wcm9qZWN0Jyk7XG4gICAgYWRkUHJvamVjdFNlbGVjdG9yKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFNlbGVjdGVkUHJvamVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGN1cnJlbnRTZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQtcHJvamVjdCcpO1xuICAgIGlmIChjdXJyZW50U2VsZWN0aW9uID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKTtcbiAgICAgICAgaW5ib3guY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtcHJvamVjdCcpO1xuICAgICAgICBhZGRQcm9qZWN0U2VsZWN0b3IoKTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgZWRpdFRhc2tFdmVudCA9IGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtY29udGVudCcpO1xuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5lZGl0LXRhc2stYnV0dG9uJykpIHtcblxuICAgICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZC1wcm9qZWN0JykuZGF0YXNldC5wcm9qZWN0SWQ7XG4gICAgICAgICAgICBjb25zdCB0YXNrSWQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnW2RhdGEtdGFzay1pZF0nKS5kYXRhc2V0LnRhc2tJZDtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7dGFza0lkfVwiXWApO1xuXG4gICAgICAgICAgICBjbGlja2VkVGFzay5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWl0ZW0nKTtcbiAgICAgICAgICAgIGNsaWNrZWRUYXNrLmNsYXNzTGlzdC5hZGQoJ2VkaXQtdGFzay1pdGVtJyk7XG4gICAgICAgICAgICBjbGlja2VkVGFzay5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtdGFzay10aXRsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJlZGl0LXRhc2stdGl0bGUtaW5wdXRcIiBpZD1cImVkaXQtdGFzay10aXRsZS1pbnB1dFwiIG5hbWU9XCJlZGl0LXRhc2stdGl0bGUtaW5wdXRcIiB2YWx1ZT1cIiR7Y3J1ZC5hbGxQcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZF0udGl0bGV9XCIgcGxhY2Vob2xkZXI9XCJBZGQgdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LXRhc2stcHJvamVjdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cInByb2plY3Qtc2VsZWN0b3JcIiBuYW1lPVwiZWRpdC1wcm9qZWN0LXNlbGVjdG9yXCIgaWQ9XCJlZGl0LXByb2plY3Qtc2VsZWN0b3JcIj48L3NlbGVjdD4gICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC10YXNrLWRlc2NyaXB0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJlZGl0LXRhc2stZGVzY3JpcHRpb24taW5wdXRcIiBpZD1cImVkaXQtdGFzay1kZXNjcmlwdGlvbi1pbnB1dFwiIG5hbWU9XCJlZGl0LXRhc2stZGVzY3JpcHRpb24taW5wdXRcIiBwbGFjZWhvbGRlcj1cIkFkZCBkZXNjcmlwdGlvblwiPiR7Y3J1ZC5hbGxQcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZF0uZGVzY3JpcHRpb259PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LXRhc2stcHJpb3JpdHktYW5kLWR1ZS1kYXRlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC10YXNrLWR1ZS1kYXRlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJlZGl0LXRhc2stZHVlLWRhdGUtaW5wdXRcIiBpZD1cImVkaXQtdGFzay1kdWUtZGF0ZS1pbnB1dFwiIG5hbWU9XCJlZGl0LXRhc2stZHVlLWRhdGUtaW5wdXRcIiB2YWx1ZT0ke2NydWQuYWxsUHJvamVjdHNbcHJvamVjdElkXS50YXNrc1t0YXNrSWRdLmR1ZURhdGV9PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtdGFzay1wcmlvcml0eS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJwcmlvcml0eS1zZWxlY3RvclwiIG5hbWU9XCJlZGl0LXByaW9yaXR5LSR7dGFza0lkfVwiIGlkPVwiZWRpdC1wcmlvcml0eS0ke3Rhc2tJZH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LXRhc2stYWN0aW9uLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJlZGl0LXRhc2stc2F2ZS1idXR0b25cIj5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZWRpdC10YXNrLWNhbmNlbC1idXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0LXByaW9yaXR5LSR7dGFza0lkfSBvcHRpb25bdmFsdWU9XCIke2NydWQuYWxsUHJvamVjdHNbcHJvamVjdElkXS50YXNrc1t0YXNrSWRdLnByaW9yaXR5fVwiXWApO1xuICAgICAgICAgICAgY3VycmVudFByaW9yaXR5T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGFkZFByb2plY3RTZWxlY3RvcigpO1xuICAgICAgICB9XG4gICAgfSk7XG59KCk7XG5cbmNvbnN0IGNhbmNlbEVkaXRUYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNvbnRlbnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2VkaXQtdGFzay1jYW5jZWwtYnV0dG9uJykge1xuICAgICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIH1cbiAgICB9KVxufSgpO1xuXG5leHBvcnQgY29uc3QgZWRpdFRhc2sgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNvbnRlbnQnKTtcbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnZWRpdC10YXNrLXNhdmUtYnV0dG9uJykge1xuICAgICAgICAgICAgY29uc3QgdGFza0lkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXRhc2staWRdJykuZGF0YXNldC50YXNrSWQ7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkLXByb2plY3QnKS5kYXRhc2V0LnByb2plY3RJZDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXRpdGxlLWlucHV0JykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZGVzY3JpcHRpb24taW5wdXQnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWR1ZS1kYXRlLWlucHV0JykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0LXByaW9yaXR5LSR7dGFza0lkfWApLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3Qtc2VsZWN0b3InKS52YWx1ZTtcblxuICAgICAgICAgICAgY3J1ZC5lZGl0VGFzayh0YXNrSWQsIGN1cnJlbnRQcm9qZWN0SWQsIG5ld1Byb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpXG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgICAgfVxuICAgIH0pXG59KCk7XG5cbmNvbnN0IGNoZWNrYm94RXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNvbnRlbnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tib3gnKSkge1xuXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tlZCcpO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrSWQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnW2RhdGEtdGFzay1pZF0nKS5kYXRhc2V0LnRhc2tJZDtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZC1wcm9qZWN0JykuZGF0YXNldC5wcm9qZWN0SWQ7XG4gICAgICAgICAgICBjcnVkLnRvZ2dsZUNvbXBsZXRpb24odGFza0lkLCBwcm9qZWN0SWQpO1xuXG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgICAgfVxuICAgIH0pXG59KCk7XG5cbmNvbnN0IGVkaXRQcm9qZWN0RXZlbnQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdCgnLmVkaXQtcHJvamVjdC10aXRsZScpKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQtcHJvamVjdCcpLmRhdGFzZXQucHJvamVjdElkO1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdGl0bGUtZGl2Jyk7XG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVkaXQtcHJvamVjdC1pbnB1dFwiIGlkPVwiZWRpdC1wcm9qZWN0LWlucHV0XCIgdmFsdWU9XCIke2NydWQuYWxsUHJvamVjdHNbcHJvamVjdElkXS50aXRsZX1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LXRhc2stYWN0aW9uLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJlZGl0LXByb2plY3Qtc2F2ZS1idXR0b25cIj5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZWRpdC10YXNrLWNhbmNlbC1idXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QtaW5wdXQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2VkaXQtcHJvamVjdC1zYXZlLWJ1dHRvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZC1wcm9qZWN0JykuZGF0YXNldC5wcm9qZWN0SWQ7XG4gICAgICAgICAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QtaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgICAgIGNydWQuZWRpdFByb2plY3RUaXRsZShwcm9qZWN0SWQsIG5ld1RpdGxlKTtcbiAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgICAgICAgICAgcmVtb3ZlU2VsZWN0ZWRDbGFzcygpO1xuICAgICAgICAgICAgYWRkU2VsZWN0ZWRDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcm9qZWN0LWlkPVwiJHtwcm9qZWN0SWR9XCJdYCkpO1xuICAgICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIH1cbiAgICB9KVxufSgpO1xuXG5leHBvcnQgeyBhZGRUYXNrIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgKiBhcyBjcnVkIGZyb20gJy4vY3J1ZC5qcyc7XG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi9kb20uanMnO1xuXG5jcnVkLnN5bmNBbGxQcm9qZWN0cygpO1xuZG9tLmRpc3BsYXlQcm9qZWN0cygpO1xuZG9tLmRpc3BsYXlUYXNrcygpO1xuXG5jb25zb2xlLmxvZyhjcnVkLmFsbFByb2plY3RzKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=