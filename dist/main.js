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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  /* colors */\r\n  --main-background__color: hsl(227, 100%, 98%);\r\n  --section-background__color: hsl(0, 0%, 100%);\r\n  --main-txt__color: hsl(214, 16%, 48%);\r\n  --heading-txt__color: hsl(227, 9%, 20%);\r\n  --btn-background__color: hsl(211, 98%, 49%);\r\n  --user-name__color: hsl(212, 75%, 35%);\r\n\r\n  /* dark mode */\r\n  --main-background__color-dark: hsl(221, 42%, 13%);\r\n  --section-background__color-dark: hsl(224, 40%, 20%);\r\n  --main-txt__color-dark: hsl(222, 22%, 79%);\r\n  --heading-txt__color-dark: hsl(225, 40%, 96%);\r\n  --btn-background__color-dark: hsl(212, 100%, 50%);\r\n\r\n  /* font */\r\n\r\n  --ff-monospace: \"Source Code Pro\", monospace;\r\n\r\n  --fw-700: 700;\r\n  --fw-600: 600;\r\n  --fw-400: 400;\r\n\r\n  --fs-base: 1rem;\r\n  --fs-headings: 1.5rem;\r\n}\r\n\r\n/* css reset */\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  font-family: var(--ff-monospace);\r\n  font-size: var(--fs-base);\r\n  color: var(--main-txt__color);\r\n  background-color: var(--main-background__color);\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\n/* utility classes */\r\n\r\n.headings-txt__color {\r\n  color: var(--heading-txt__color);\r\n}\r\n\r\n.user-name__color {\r\n  color: var(--user-name__color);\r\n}\r\n\r\n.btn-background__color {\r\n  background-color: var(--btn-background__color);\r\n}\r\n\r\n.section-background__color {\r\n  background-color: var(--section-background__color);\r\n}\r\n\r\n.fw-700 {\r\n  font-weight: var(--fw-700);\r\n}\r\n\r\n.fw-600 {\r\n  font-weight: var(--fw-600);\r\n}\r\n\r\n.fw-400 {\r\n  font-weight: var(--fw-400);\r\n}\r\n\r\n.fs-base {\r\n  font-size: var(--fs-base);\r\n}\r\n\r\n.fs-headings {\r\n  font-size: var(--fs-headings);\r\n}\r\n\r\n.flow > *:where(:not(:first-child)) {\r\n  margin-top: var(--flow-space, 1rem);\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  gap: var(--gap, 1rem);\r\n}\r\n\r\n.flex-column {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: var(--gap, 1rem);\r\n}\r\n\r\n.uppercase {\r\n  text-transform: uppercase;\r\n}\r\n\r\n/* nav */\r\n\r\n.nav-bar {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 50vw;\r\n  min-width: 20rem;\r\n}\r\n\r\n.nav-logo:hover {\r\n  cursor: pointer;\r\n  text-shadow: var(--heading-txt__color) 0 0.1rem 2rem;\r\n}\r\n\r\n/* search */\r\n\r\n.search-container {\r\n  position: relative;\r\n  width: 50vw;\r\n  min-width: 20rem;\r\n  background: var(--section-background__color);\r\n  height: 7vh;\r\n  min-height: 3rem;\r\n  padding: 1rem;\r\n  border-radius: 1.5vmin;\r\n}\r\n\r\n.search-container img {\r\n  height: 90%;\r\n}\r\n\r\n.search-container__input {\r\n  width: 75%;\r\n  height: 90%;\r\n  background: none;\r\n  border: none;\r\n  color: var(--main-txt__color);\r\n}\r\n\r\n.search-container__input:focus-visible {\r\n  outline: none;\r\n}\r\n\r\n.search-container__input:-webkit-autofill,\r\n.search-container__input:-webkit-autofill:hover,\r\n.search-container__input:-webkit-autofill:focus,\r\n.search-container__input:-webkit-autofill:active {\r\n  -webkit-box-shadow: 0 0 0 30px var(--section-background__color) inset !important;\r\n  -webkit-text-fill-color: white !important;\r\n}\r\n\r\n.search-container__button {\r\n  position: absolute;\r\n  right: 2%;\r\n  top: 50%;\r\n  transform: translate(0, -50%);\r\n  border-radius: 1vmin;\r\n  background: var(--btn-background__color);\r\n  color: hsl(0, 0%, 100%);\r\n  font-size: clamp(0.825rem, 1rem, 1.3rem);\r\n  border: none;\r\n  padding: 0.5rem 1rem;\r\n  height: 80%;\r\n  text-align: center;\r\n}\r\n\r\n.search-container__button:hover {\r\n  background-color: hsl(160, 100%, 75%);\r\n  color: hsl(0, 0%, 0%);\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-container {\r\n  position: absolute;\r\n  top: 125%;\r\n  left: 0;\r\n  width: 100%;\r\n  height: fit-content;\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n  align-items: center;\r\n}\r\n\r\n.modal-container ul {\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n  gap: 1rem;\r\n}\r\n\r\n.modal-container li {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: row-reverse;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: fit-content;\r\n  padding: 1rem;\r\n  border-radius: 1.5vmin;\r\n  background-color: rgba(38, 39, 37, 0.7);\r\n  color: var(--heading-txt__color);\r\n  font-size: clamp(0.825rem, 1rem, 1.3rem);\r\n  border: none;\r\n  cursor: pointer;\r\n  gap: 1rem;\r\n}\r\n\r\n.modal-container li:hover {\r\n  background-color: hsl(160, 100%, 75%, 0.8);\r\n  color: hsl(0, 0%, 0%);\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-container li a {\r\n  color: var(--user-name__color);\r\n  font-weight: var(--fw-700);\r\n}\r\n\r\n.modal-container img {\r\n  width: 3rem;\r\n  height: 3rem;\r\n  border-radius: 50%;\r\n}\r\n\r\n/* main */\r\n\r\nmain {\r\n  width: 50vw;\r\n  min-width: 20rem;\r\n  height: fit-content;\r\n  background: var(--section-background__color);\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n  padding: 2rem 1rem;\r\n  border-radius: 1.5vmin;\r\n  --gap: 1.5rem;\r\n}\r\n\r\n.image-wrapper {\r\n  height: 9rem;\r\n  width: 9rem;\r\n  border-radius: 50%;\r\n  background: var(--main-background__color);\r\n  overflow: hidden;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n/* main right section */\r\n\r\n.main-right {\r\n  flex-direction: column;\r\n  min-width: 30vw;\r\n}\r\n\r\n.main-right__header {\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.username-link {\r\n  color: var(--user-name__color);\r\n  margin-top: -0.5rem;\r\n}\r\n\r\n.main-right__stats {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  justify-content: space-between;\r\n  background-color: var(--main-background__color);\r\n  border-radius: 1.5vmin;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.main-right__contact {\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\n.empty {\r\n  color: hsla(0, 0%, 50%, 0.7);\r\n  cursor: default;\r\n}\r\n\r\n.valid-info:hover {\r\n  color: var(--user-name__color);\r\n  cursor: pointer;\r\n}\r\n\r\n/* dark/light theme */\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  :root {\r\n    --main-background__color: var(--main-background__color-dark);\r\n    --section-background__color: var(--section-background__color-dark);\r\n    --main-txt__color: var(--main-txt__color-dark);\r\n    --heading-txt__color: var(--heading-txt__color-dark);\r\n    --btn-background__color: var(--btn-background__color-dark);\r\n  }\r\n}\r\n\r\n@media (prefers-color-scheme: light) {\r\n  :root {\r\n    --main-background__color: hsl(227, 100%, 98%);\r\n    --section-background__color: hsl(0, 0%, 100%);\r\n    --main-txt__color: hsl(214, 16%, 48%);\r\n    --heading-txt__color: hsl(227, 9%, 20%);\r\n    --btn-background__color: hsl(211, 98%, 49%);\r\n    --user-name__color: hsl(212, 75%, 35%);\r\n  }\r\n}\r\n\r\n.dark-theme[data-visible=\"false\"] {\r\n  display: none;\r\n}\r\n\r\n.light-theme[data-visible=\"false\"] {\r\n  display: none;\r\n}\r\n\r\n.dark-theme[data-visible=\"true\"]:hover {\r\n  cursor: pointer;\r\n  color: aquamarine;\r\n  text-shadow: hsla(0, 0%, 50%, 0.7) 0 0.2rem 1.5rem;\r\n  font-weight: var(--fw-600);\r\n}\r\n\r\n.light-theme[data-visible=\"true\"]:hover {\r\n  cursor: pointer;\r\n  color: hsl(0, 0%, 0%);\r\n  text-shadow: hsla(0, 1%, 17%, 0.7) 0 0.2rem 2rem;\r\n  font-weight: var(--fw-600);\r\n}\r\n\r\n.dark-theme {\r\n  --main-background__color: var(--main-background__color-dark);\r\n  --section-background__color: var(--section-background__color-dark);\r\n  --main-txt__color: var(--main-txt__color-dark);\r\n  --heading-txt__color: var(--heading-txt__color-dark);\r\n  --btn-background__color: var(--btn-background__color-dark);\r\n}\r\n\r\n.light-theme {\r\n  --main-background__color: hsl(227, 100%, 98%);\r\n  --section-background__color: hsl(0, 0%, 100%);\r\n  --main-txt__color: hsl(214, 16%, 48%);\r\n  --heading-txt__color: hsl(227, 9%, 20%);\r\n  --btn-background__color: hsl(211, 98%, 49%);\r\n  --user-name__color: hsl(212, 75%, 35%);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700&display=swap\");\r\n\r\n:root {\r\n  /* colors */\r\n  --main-background__color: hsl(227, 100%, 98%);\r\n  --section-background__color: hsl(0, 0%, 100%);\r\n  --main-txt__color: hsl(214, 16%, 48%);\r\n  --heading-txt__color: hsl(227, 9%, 20%);\r\n  --btn-background__color: hsl(211, 98%, 49%);\r\n  --user-name__color: hsl(212, 75%, 35%);\r\n\r\n  /* dark mode */\r\n  --main-background__color-dark: hsl(221, 42%, 13%);\r\n  --section-background__color-dark: hsl(224, 40%, 20%);\r\n  --main-txt__color-dark: hsl(222, 22%, 79%);\r\n  --heading-txt__color-dark: hsl(225, 40%, 96%);\r\n  --btn-background__color-dark: hsl(212, 100%, 50%);\r\n\r\n  /* font */\r\n\r\n  --ff-monospace: \"Source Code Pro\", monospace;\r\n\r\n  --fw-700: 700;\r\n  --fw-600: 600;\r\n  --fw-400: 400;\r\n\r\n  --fs-base: 1rem;\r\n  --fs-headings: 1.5rem;\r\n}\r\n\r\n/* css reset */\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  font-family: var(--ff-monospace);\r\n  font-size: var(--fs-base);\r\n  color: var(--main-txt__color);\r\n  background-color: var(--main-background__color);\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\n/* utility classes */\r\n\r\n.headings-txt__color {\r\n  color: var(--heading-txt__color);\r\n}\r\n\r\n.user-name__color {\r\n  color: var(--user-name__color);\r\n}\r\n\r\n.btn-background__color {\r\n  background-color: var(--btn-background__color);\r\n}\r\n\r\n.section-background__color {\r\n  background-color: var(--section-background__color);\r\n}\r\n\r\n.fw-700 {\r\n  font-weight: var(--fw-700);\r\n}\r\n\r\n.fw-600 {\r\n  font-weight: var(--fw-600);\r\n}\r\n\r\n.fw-400 {\r\n  font-weight: var(--fw-400);\r\n}\r\n\r\n.fs-base {\r\n  font-size: var(--fs-base);\r\n}\r\n\r\n.fs-headings {\r\n  font-size: var(--fs-headings);\r\n}\r\n\r\n.flow > *:where(:not(:first-child)) {\r\n  margin-top: var(--flow-space, 1rem);\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  gap: var(--gap, 1rem);\r\n}\r\n\r\n.flex-column {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: var(--gap, 1rem);\r\n}\r\n\r\n.uppercase {\r\n  text-transform: uppercase;\r\n}\r\n\r\n/* nav */\r\n\r\n.nav-bar {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 50vw;\r\n  min-width: 20rem;\r\n}\r\n\r\n.nav-logo:hover {\r\n  cursor: pointer;\r\n  text-shadow: var(--heading-txt__color) 0 0.1rem 2rem;\r\n}\r\n\r\n/* search */\r\n\r\n.search-container {\r\n  position: relative;\r\n  width: 50vw;\r\n  min-width: 20rem;\r\n  background: var(--section-background__color);\r\n  height: 7vh;\r\n  min-height: 3rem;\r\n  padding: 1rem;\r\n  border-radius: 1.5vmin;\r\n}\r\n\r\n.search-container img {\r\n  height: 90%;\r\n}\r\n\r\n.search-container__input {\r\n  width: 75%;\r\n  height: 90%;\r\n  background: none;\r\n  border: none;\r\n  color: var(--main-txt__color);\r\n}\r\n\r\n.search-container__input:focus-visible {\r\n  outline: none;\r\n}\r\n\r\n.search-container__input:-webkit-autofill,\r\n.search-container__input:-webkit-autofill:hover,\r\n.search-container__input:-webkit-autofill:focus,\r\n.search-container__input:-webkit-autofill:active {\r\n  -webkit-box-shadow: 0 0 0 30px var(--section-background__color) inset !important;\r\n  -webkit-text-fill-color: white !important;\r\n}\r\n\r\n.search-container__button {\r\n  position: absolute;\r\n  right: 2%;\r\n  top: 50%;\r\n  transform: translate(0, -50%);\r\n  border-radius: 1vmin;\r\n  background: var(--btn-background__color);\r\n  color: hsl(0, 0%, 100%);\r\n  font-size: clamp(0.825rem, 1rem, 1.3rem);\r\n  border: none;\r\n  padding: 0.5rem 1rem;\r\n  height: 80%;\r\n  text-align: center;\r\n}\r\n\r\n.search-container__button:hover {\r\n  background-color: hsl(160, 100%, 75%);\r\n  color: hsl(0, 0%, 0%);\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-container {\r\n  position: absolute;\r\n  top: 125%;\r\n  left: 0;\r\n  width: 100%;\r\n  height: fit-content;\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n  align-items: center;\r\n}\r\n\r\n.modal-container ul {\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n  gap: 1rem;\r\n}\r\n\r\n.modal-container li {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: row-reverse;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: fit-content;\r\n  padding: 1rem;\r\n  border-radius: 1.5vmin;\r\n  background-color: rgba(38, 39, 37, 0.7);\r\n  color: var(--heading-txt__color);\r\n  font-size: clamp(0.825rem, 1rem, 1.3rem);\r\n  border: none;\r\n  cursor: pointer;\r\n  gap: 1rem;\r\n}\r\n\r\n.modal-container li:hover {\r\n  background-color: hsl(160, 100%, 75%, 0.8);\r\n  color: hsl(0, 0%, 0%);\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-container li a {\r\n  color: var(--user-name__color);\r\n  font-weight: var(--fw-700);\r\n}\r\n\r\n.modal-container img {\r\n  width: 3rem;\r\n  height: 3rem;\r\n  border-radius: 50%;\r\n}\r\n\r\n/* main */\r\n\r\nmain {\r\n  width: 50vw;\r\n  min-width: 20rem;\r\n  height: fit-content;\r\n  background: var(--section-background__color);\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n  padding: 2rem 1rem;\r\n  border-radius: 1.5vmin;\r\n  --gap: 1.5rem;\r\n}\r\n\r\n.image-wrapper {\r\n  height: 9rem;\r\n  width: 9rem;\r\n  border-radius: 50%;\r\n  background: var(--main-background__color);\r\n  overflow: hidden;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n/* main right section */\r\n\r\n.main-right {\r\n  flex-direction: column;\r\n  min-width: 30vw;\r\n}\r\n\r\n.main-right__header {\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.username-link {\r\n  color: var(--user-name__color);\r\n  margin-top: -0.5rem;\r\n}\r\n\r\n.main-right__stats {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  justify-content: space-between;\r\n  background-color: var(--main-background__color);\r\n  border-radius: 1.5vmin;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.main-right__contact {\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\n.empty {\r\n  color: hsla(0, 0%, 50%, 0.7);\r\n  cursor: default;\r\n}\r\n\r\n.valid-info:hover {\r\n  color: var(--user-name__color);\r\n  cursor: pointer;\r\n}\r\n\r\n/* dark/light theme */\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  :root {\r\n    --main-background__color: var(--main-background__color-dark);\r\n    --section-background__color: var(--section-background__color-dark);\r\n    --main-txt__color: var(--main-txt__color-dark);\r\n    --heading-txt__color: var(--heading-txt__color-dark);\r\n    --btn-background__color: var(--btn-background__color-dark);\r\n  }\r\n}\r\n\r\n@media (prefers-color-scheme: light) {\r\n  :root {\r\n    --main-background__color: hsl(227, 100%, 98%);\r\n    --section-background__color: hsl(0, 0%, 100%);\r\n    --main-txt__color: hsl(214, 16%, 48%);\r\n    --heading-txt__color: hsl(227, 9%, 20%);\r\n    --btn-background__color: hsl(211, 98%, 49%);\r\n    --user-name__color: hsl(212, 75%, 35%);\r\n  }\r\n}\r\n\r\n.dark-theme[data-visible=\"false\"] {\r\n  display: none;\r\n}\r\n\r\n.light-theme[data-visible=\"false\"] {\r\n  display: none;\r\n}\r\n\r\n.dark-theme[data-visible=\"true\"]:hover {\r\n  cursor: pointer;\r\n  color: aquamarine;\r\n  text-shadow: hsla(0, 0%, 50%, 0.7) 0 0.2rem 1.5rem;\r\n  font-weight: var(--fw-600);\r\n}\r\n\r\n.light-theme[data-visible=\"true\"]:hover {\r\n  cursor: pointer;\r\n  color: hsl(0, 0%, 0%);\r\n  text-shadow: hsla(0, 1%, 17%, 0.7) 0 0.2rem 2rem;\r\n  font-weight: var(--fw-600);\r\n}\r\n\r\n.dark-theme {\r\n  --main-background__color: var(--main-background__color-dark);\r\n  --section-background__color: var(--section-background__color-dark);\r\n  --main-txt__color: var(--main-txt__color-dark);\r\n  --heading-txt__color: var(--heading-txt__color-dark);\r\n  --btn-background__color: var(--btn-background__color-dark);\r\n}\r\n\r\n.light-theme {\r\n  --main-background__color: hsl(227, 100%, 98%);\r\n  --section-background__color: hsl(0, 0%, 100%);\r\n  --main-txt__color: hsl(214, 16%, 48%);\r\n  --heading-txt__color: hsl(227, 9%, 20%);\r\n  --btn-background__color: hsl(211, 98%, 49%);\r\n  --user-name__color: hsl(212, 75%, 35%);\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/images/favicon-32x32.png":
/*!**************************************!*\
  !*** ./src/images/favicon-32x32.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/736eae1ff09acfe04c50.png";

/***/ }),

/***/ "./src/images/icon-company.svg":
/*!*************************************!*\
  !*** ./src/images/icon-company.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/6f78ffb334b191c8ed54.svg";

/***/ }),

/***/ "./src/images/icon-location.svg":
/*!**************************************!*\
  !*** ./src/images/icon-location.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/f11c5487a9922cbad40a.svg";

/***/ }),

/***/ "./src/images/icon-moon.svg":
/*!**********************************!*\
  !*** ./src/images/icon-moon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cce754cec46d095fd3ce.svg";

/***/ }),

/***/ "./src/images/icon-search.svg":
/*!************************************!*\
  !*** ./src/images/icon-search.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/0cc0c98424cc75d5e1df.svg";

/***/ }),

/***/ "./src/images/icon-sun.svg":
/*!*********************************!*\
  !*** ./src/images/icon-sun.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/f28a8996f9959c40bdff.svg";

/***/ }),

/***/ "./src/images/icon-twitter.svg":
/*!*************************************!*\
  !*** ./src/images/icon-twitter.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/f6a2a695fbb260b28a9f.svg";

/***/ }),

/***/ "./src/images/icon-website.svg":
/*!*************************************!*\
  !*** ./src/images/icon-website.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/b7923f6c1dae9717c079.svg";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
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
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/favicon-32x32.png */ "./src/images/favicon-32x32.png");
/* harmony import */ var _images_icon_company_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/icon-company.svg */ "./src/images/icon-company.svg");
/* harmony import */ var _images_icon_location_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/icon-location.svg */ "./src/images/icon-location.svg");
/* harmony import */ var _images_icon_moon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/icon-moon.svg */ "./src/images/icon-moon.svg");
/* harmony import */ var _images_icon_sun_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/icon-sun.svg */ "./src/images/icon-sun.svg");
/* harmony import */ var _images_icon_search_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/icon-search.svg */ "./src/images/icon-search.svg");
/* harmony import */ var _images_icon_twitter_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/icon-twitter.svg */ "./src/images/icon-twitter.svg");
/* harmony import */ var _images_icon_website_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/icon-website.svg */ "./src/images/icon-website.svg");
 // images









var faviconElement = document.querySelector("#favicon");
var companyIconElement = document.querySelector("#company-icon");
var locationIconElement = document.querySelector("#location-icon");
var moonIconElement = document.querySelector("#moon-icon");
var sunIconElement = document.querySelector("#sun-icon");
var searchIconElement = document.querySelector("#search-icon");
var websiteIconElement = document.querySelector("#website-icon");
var twitterIconElement = document.querySelector("#twitter-icon");
faviconElement.href = _images_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_1__;
companyIconElement.src = _images_icon_company_svg__WEBPACK_IMPORTED_MODULE_2__;
locationIconElement.src = _images_icon_location_svg__WEBPACK_IMPORTED_MODULE_3__;
moonIconElement.src = _images_icon_moon_svg__WEBPACK_IMPORTED_MODULE_4__;
sunIconElement.src = _images_icon_sun_svg__WEBPACK_IMPORTED_MODULE_5__;
searchIconElement.src = _images_icon_search_svg__WEBPACK_IMPORTED_MODULE_6__;
websiteIconElement.src = _images_icon_website_svg__WEBPACK_IMPORTED_MODULE_8__;
twitterIconElement.src = _images_icon_twitter_svg__WEBPACK_IMPORTED_MODULE_7__; //  Get elements

var avatar = document.getElementById("profile-img");
var username = document.querySelector(".username-title");
var loginData = document.querySelector(".username-link");
var bio = document.querySelector(".bio-value");
var joined = document.querySelector(".date-value");
var repos = document.getElementById("repos-value");
var followers = document.getElementById("followers-value");
var following = document.getElementById("following-value");
var locationValue = document.getElementById("location-value");
var company = document.getElementById("company-value");
var blog = document.getElementById("blog-value");
var twitter = document.getElementById("twitter-value");
var input = document.getElementById("search-input");
var modalUser = document.getElementById("modal");
var API_URL = "https://api.github.com/users/";
var searchButton = document.getElementById("search-button");
var modalUserList = document.createElement("ul");

function searchGithubUserByInput(username) {
  username = input.value;
  fetch(API_URL + username).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.login) {
      displayModalUser(data);
      removeListItems(data);
    }

    if (data.message === "Not Found") {
      var notFoundItem = document.createElement("li");
      notFoundItem.textContent = "User not found";
      modalUserList.appendChild(notFoundItem);
      modalUser.appendChild(modalUserList);

      if (notFoundItem.textContent === "User not found") {
        setTimeout(function () {
          notFoundItem.remove();
        }, 3000);
      }
    }
  });
  return username;
}

function removeListItems(data) {
  var listItems = modalUserList.childNodes;
  listItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      fetchDataAndDisplay(data.login);
      modalUser.removeChild(modalUserList);
      input.value = "";
    });
    input.addEventListener("keyup", function (e) {
      setTimeout(function () {
        item.remove();
      }, 7000);
    });
  });
}

function displayModalUser(data) {
  var modalUserItem = document.createElement("li");
  var modalImg = document.createElement("img");
  modalImg.src = data.avatar_url;
  modalUserItem.appendChild(modalImg);
  var modalUsername = document.createElement("h3");
  modalUsername.textContent = data.name;
  modalUserItem.appendChild(modalUsername);
  var modalLogin = document.createElement("a");
  modalLogin.textContent = "Username: @".concat(data.login);
  modalUserItem.appendChild(modalLogin);
  modalUserList.appendChild(modalUserItem);
  modalUser.appendChild(modalUserList);
  input.addEventListener("keyup", function (e) {
    e.preventDefault();

    if (input.value === "" || input.value === " ") {
      modalUserItem.remove();
    }
  });
}

function fetchDataAndDisplay(username) {
  fetch(API_URL + username).then(function (response) {
    return response.json();
  }).then(function (data) {
    avatar.src = data.avatar_url;
    getUsername(data);
    getBio(data);
    loginData.href = data.html_url;
    loginData.textContent = "@" + data.login;
    getDateJoined(data);
    repos.textContent = data.public_repos;
    followers.textContent = data.followers;
    following.textContent = data.following;
    getContactInfo(data);
  })["catch"](function (err) {
    console.log(err);
  });
}

function getGithubUser(username) {
  username = input.value;

  if (username) {
    fetchDataAndDisplay(username);
    username = "";
    modalUser.removeChild(modalUserList);
  } else {
    fetchDataAndDisplay("Octocat");
  }
}

window.onload = getGithubUser();
input.addEventListener("input", searchGithubUserByInput);
searchButton.addEventListener("click", getGithubUser);

function getUsername(data) {
  if (data.name) {
    username.textContent = data.name;
  } else {
    username.textContent = data.login;
  }

  return username.textContent;
}

function getDateJoined(data) {
  var dateJoined = new Date(data.created_at).toLocaleDateString("en-UK", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
  joined.textContent = dateJoined;
  return joined.textContent;
}

function getBio(data) {
  var bioValue = document.querySelector(".bio-value");

  if (data.bio) {
    bioValue.textContent = data.bio;
    bioValue.style.color = "hsl(222, 22%, 79%)";
  } else {
    bioValue.textContent = "This profile has no bio";
    bioValue.style.color = "hsla(0, 0%, 50%, 0.7)";
  }
}

function getContactInfo(data) {
  if (data.location) {
    locationValue.textContent = data.location;
    viewLocation();
  } else {
    locationValue.textContent = "Not available";
    locationValue.classList.remove("valid-info");
    locationValue.classList.add("empty");
  }

  if (data.company) {
    company.textContent = data.company;
    viewCompany();
  } else {
    company.textContent = "Not available";
    company.classList.remove("valid-info");
    company.classList.add("empty");
  }

  if (data.blog) {
    blog.textContent = data.blog;
    viewBlog();
  } else {
    blog.textContent = "Not available";
    blog.classList.remove("valid-info");
    blog.classList.add("empty");
  }

  if (data.twitter_username) {
    twitter.textContent = "@" + data.twitter_username;
    viewTwitter();
  } else {
    twitter.textContent = "Not available";
    twitter.classList.remove("valid-info");
    twitter.classList.add("empty");
  }
}

function viewLocation() {
  locationValue.addEventListener("click", function (e) {
    e.preventDefault();
    locationValue.href = "https://www.google.com/maps/place/" + locationValue.textContent;
    window.open(locationValue.href, "_blank");
  }), (locationValue.classList.remove("empty"), locationValue.classList.add("valid-info"));
}

function viewCompany() {
  company.addEventListener("click", function (e) {
    e.preventDefault();
    var companyValue = company.textContent.slice(1);
    company.href = "https://github.com/".concat(companyValue);
    window.open(company.href, "_blank");
  }), (company.classList.remove("empty"), company.classList.add("valid-info"));
}

function viewBlog() {
  blog.addEventListener("click", function (e) {
    e.preventDefault();
    blog.href = blog.textContent;
    window.open(blog.href, "_blank");
  }), (blog.classList.remove("empty"), blog.classList.add("valid-info"));
}

function viewTwitter() {
  twitter.addEventListener("click", function (e) {
    e.preventDefault();
    twitter.href = "https://twitter.com/" + twitter.textContent;
    window.open(twitter.href, "_blank");
  }), (twitter.classList.remove("empty"), twitter.classList.add("valid-info"));
} // Dark/Light Mode


var toggleDarkMode = document.querySelector(".light-theme");
var toggleLightMode = document.querySelector(".dark-theme");
toggleLightMode.addEventListener("click", function () {
  var visibleDark = toggleDarkMode.getAttribute("data-visible");
  var visibleLight = toggleLightMode.getAttribute("data-visible");

  if (visibleDark === "false") {
    toggleDarkMode.setAttribute("data-visible", true);
    toggleLightMode.setAttribute("data-visible", false);
    document.body.classList.add("light-theme");
  }

  if (visibleLight === "true") {
    toggleDarkMode.setAttribute("data-visible", true);
    toggleLightMode.setAttribute("data-visible", false);
    document.body.classList.remove("dark-theme");
  }
});
toggleDarkMode.addEventListener("click", function () {
  var visibleDark = toggleDarkMode.getAttribute("data-visible");
  var visibleLight = toggleLightMode.getAttribute("data-visible");

  if (visibleDark === "true") {
    toggleDarkMode.setAttribute("data-visible", false);
    toggleLightMode.setAttribute("data-visible", true);
    document.body.classList.remove("light-theme");
  }

  if (visibleLight === "false") {
    toggleDarkMode.setAttribute("data-visible", false);
    toggleLightMode.setAttribute("data-visible", true);
    document.body.classList.add("dark-theme");
  }
});

window.onload = function () {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    toggleDarkMode.setAttribute("data-visible", false);
    toggleLightMode.setAttribute("data-visible", true);
  } else {
    toggleDarkMode.setAttribute("data-visible", true);
    toggleLightMode.setAttribute("data-visible", false);
  }
};
})();

/******/ })()
;
//# sourceMappingURL=main.js.map