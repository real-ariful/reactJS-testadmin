/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/front/index.js","vendors","styles"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/front/style/index.style.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/front/style/index.style.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".invisible {\n  opacity: 0; }\n\n.view-enter {\n  opacity: 0;\n  animation-name: smoothFadeInUp;\n  animation-timing-function: ease-in;\n  animation-duration: 0.5s;\n  animation-delay: 0s;\n  animation-fill-mode: both;\n  z-index: 1; }\n\n@keyframes smoothFadeInUp {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 3%, 0); }\n  90% {\n    opacity: 0.3;\n    transform: none; }\n  95% {\n    opacity: 0.5;\n    transform: none; }\n  100% {\n    opacity: 1;\n    transform: none; } }\n\n.form-inline > * {\n  margin: 5px 3px; }\n\n.panel-heading {\n  z-index: 1 !important; }\n\n.btn {\n  margin-left: 2px;\n  margin-right: 2px; }\n\n.well {\n  padding: 7px; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin-right: 2px;\n  margin-bottom: 0px;\n  margin-left: 2px;\n  margin-top: 2px; }\n\n.aside-left--fixed {\n  position: fixed; }\n\n.sidebar-animated {\n  transition: all 0.2s ease-out; }\n\n.sidebar-menu__marginTop {\n  margin-top: 0px !important; }\n\n.sidebar-menu__group-container {\n  margin-top: 0px !important;\n  height: 20px; }\n\n.sidebar-menu__group-title {\n  text-align: left;\n  font-size: 14px;\n  color: #f6f6f6;\n  font-weight: 600; }\n\n.left-side {\n  z-index: 10;\n  transform: translate3d(0, 0, 0) !important;\n  -webkit-transform: translate3d(0, 0, 0) !important;\n  -moz-transform: translate3d(0, 0, 0) !important;\n  -ms-transform: translate3d(0, 0, 0) !important;\n  -o-transform: translate3d(0, 0, 0) !important; }\n\n.left-side.collapse-left {\n  transform: translate3d(-220px, 0, 0) !important;\n  -webkit-transform: translate3d(-220px, 0, 0) !important;\n  -moz-transform: translate3d(-220px, 0, 0) !important;\n  -ms-transform: translate3d(-220px, 0, 0) !important;\n  -o-transform: translate3d(-220px, 0, 0) !important; }\n\n@media screen and (max-width: 990px) {\n  .aside-left {\n    position: fixed; }\n  .left-side {\n    z-index: 100;\n    margin-top: 50px;\n    transform: translateX(220px) !important; }\n  .left-side.collapse-left {\n    transform: translateX(0px) !important; } }\n\n.right-side--top-margin {\n  margin-top: 60px; }\n\n.aside-right-animated {\n  transition: all 0.15s ease-out;\n  -webkit-transition: all 0.15s ease-out; }\n\n.right-side.strech {\n  margin-left: 0 !important; }\n\n@media screen and (max-width: 990px) {\n  .right-side {\n    margin-left: 0px; } }\n", ""]);



/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/front/Root.js":
/*!***************************!*\
  !*** ./src/front/Root.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux/store/configureStore */ "./src/front/redux/store/configureStore.js");
/* harmony import */ var _redux_store_configureStore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_redux_store_configureStore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_scrollToTop_ScrollToTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/scrollToTop/ScrollToTop */ "./src/front/components/scrollToTop/ScrollToTop.js");
/* harmony import */ var _views_login_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/login/index */ "./src/front/views/login/index.js");
/* harmony import */ var _views_pageNotFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/pageNotFound */ "./src/front/views/pageNotFound/index.js");
/* harmony import */ var _containers_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/app */ "./src/front/containers/app/index.js");









 // #region constants
// $FlowIgnore

var store = _redux_store_configureStore__WEBPACK_IMPORTED_MODULE_4___default()(); // #endregion

function Root() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["ConnectedRouter"], {
    history: _redux_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["history"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_scrollToTop_ScrollToTop__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/login",
    component: _views_login_index__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_app__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "*",
    component: _views_pageNotFound__WEBPACK_IMPORTED_MODULE_7__["default"]
  })))));
}

Root.displayName = 'Root';
/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ "./src/front/components/alert/Alert.js":
/*!*********************************************!*\
  !*** ./src/front/components/alert/Alert.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




var Alert = function Alert(_ref) {
  var type = _ref.type,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      alert: true,
      'alert-block': true,
      'alert-danger': type === 'danger',
      'alert-info': type === 'info',
      'alert-warning': type === 'warning',
      'alert-success': type === 'success'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "data-dismiss": "alert",
    className: "close close-sm",
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-times"
  })), children);
};

Alert.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['danger', 'info', 'warning', 'success'])
};
Alert.defaultProps = {
  type: 'info'
};
Alert.displayName = 'Alert';
/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ }),

/***/ "./src/front/components/animatedView/AnimatedView.js":
/*!***********************************************************!*\
  !*** ./src/front/components/animatedView/AnimatedView.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");





function AnimatedView(_ref) {
  var _ref$animated = _ref.animated,
      animated = _ref$animated === void 0 ? true : _ref$animated,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      content: true,
      'view-enter': animated
    })
  }, children);
}

AnimatedView.displayName = 'AnimatedView';
AnimatedView.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  animated: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(AnimatedView));

/***/ }),

/***/ "./src/front/components/aside/asideLeft/AsideLeft.js":
/*!***********************************************************!*\
  !*** ./src/front/components/aside/asideLeft/AsideLeft.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _userPanel_UserPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userPanel/UserPanel */ "./src/front/components/aside/asideLeft/userPanel/UserPanel.js");
/* harmony import */ var _searchForm_SearchForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./searchForm/SearchForm */ "./src/front/components/aside/asideLeft/searchForm/SearchForm.js");
/* harmony import */ var _horloge_Horloge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../horloge/Horloge */ "./src/front/components/horloge/Horloge.js");
/* harmony import */ var _menu_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/Menu */ "./src/front/components/aside/asideLeft/menu/Menu.js");
/* eslint no-console: 0 */








var AsideLeft = function AsideLeft(_ref) {
  var connectionStatus = _ref.connectionStatus,
      userIsConnected = _ref.userIsConnected,
      username = _ref.username,
      _ref$helloWord = _ref.helloWord,
      helloWord = _ref$helloWord === void 0 ? '' : _ref$helloWord,
      userPicture = _ref.userPicture,
      showPicture = _ref.showPicture,
      isAnimated = _ref.isAnimated,
      isCollapsed = _ref.isCollapsed,
      currentView = _ref.currentView,
      sideMenu = _ref.sideMenu;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aside", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      'no-print': true,
      'left-side': true,
      'aside-left--fixed': true,
      'sidebar-offcanvas': true,
      'sidebar-animated': isAnimated,
      'collapse-left': isCollapsed
    }) // add overflow to left sidebar:
    ,
    style: {
      height: '100%',
      overflow: 'auto',
      position: 'fixed'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_userPanel_UserPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    hello: helloWord,
    username: username,
    connectionStatus: connectionStatus,
    online: userIsConnected,
    userPicture: userPicture,
    showUserPicture: showPicture
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_horloge_Horloge__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_searchForm_SearchForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onSearchSubmit: function onSearchSubmit(value) {
      return console.log('searching: ', value);
    }
  }), sideMenu.map(function (_ref2, menuIdx) {
    var id = _ref2.id,
        group = _ref2.group,
        menus = _ref2.menus;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: menuIdx,
      initialCollapseState: menuIdx === 0,
      headerTitle: group,
      headerBackColor: "#283744",
      activeView: currentView,
      views: menus,
      id: id
    });
  })));
};

AsideLeft.displayName = 'AsideLeft';
AsideLeft.propTypes = {
  isAnimated: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isCollapsed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  sideMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]).isRequired,
    group: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    menus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      linkTo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      faIconName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    }))
  })).isRequired,
  currentView: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  connectionStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    online: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    disconnected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }),
  userIsConnected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  username: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  userPicture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  showPicture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  helloWord: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
AsideLeft.defaultProps = {
  isAnimated: false,
  isCollapsed: false
};
/* harmony default export */ __webpack_exports__["default"] = (AsideLeft);

/***/ }),

/***/ "./src/front/components/aside/asideLeft/menu/Menu.js":
/*!***********************************************************!*\
  !*** ./src/front/components/aside/asideLeft/menu/Menu.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-collapse */ "./node_modules/react-collapse/lib/index.js");
/* harmony import */ var react_collapse__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_collapse__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _menuHeader_MenuHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menuHeader/MenuHeader */ "./src/front/components/aside/asideLeft/menu/menuHeader/MenuHeader.js");
/* harmony import */ var _menuLinks_MenuLinks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menuLinks/MenuLinks */ "./src/front/components/aside/asideLeft/menu/menuLinks/MenuLinks.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var Menu = /*#__PURE__*/function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Menu, _PureComponent);

  var _super = _createSuper(Menu);

  function Menu() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "state", {
      isCollapsed: true
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "setInitialCollapse", function (value) {
      _this.setState({
        isCollapsed: value
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handlesCollapseClick", function (evt) {
      var isCollapsed = _this.state.isCollapsed;
      evt && evt.preventDefault();

      _this.setState({
        isCollapsed: !isCollapsed
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var initialCollapseState = this.props.initialCollapseState;

      if (typeof initialCollapseState === 'boolean') {
        this.setInitialCollapse(initialCollapseState);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          headerTitle = _this$props.headerTitle,
          headerBackColor = _this$props.headerBackColor,
          activeView = _this$props.activeView,
          views = _this$props.views;
      var isCollapsed = this.state.isCollapsed;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_menuHeader_MenuHeader__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: headerTitle,
        isCollapsed: !isCollapsed,
        onClick: this.handlesCollapseClick,
        backColor: headerBackColor
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_collapse__WEBPACK_IMPORTED_MODULE_9___default.a, {
        isOpened: !isCollapsed
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_menuLinks_MenuLinks__WEBPACK_IMPORTED_MODULE_11__["default"], {
        activeView: activeView,
        views: views
      })));
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Menu, "propTypes", {
  headerTitle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  headerBackColor: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  activeView: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  views: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
    linkTo: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
    faIconName: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
    itemCount: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number
  })).isRequired,
  initialCollapseState: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Menu, "defaultProps", {
  headerBackColor: '#283744'
});

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/front/components/aside/asideLeft/menu/menuHeader/MenuHeader.js":
/*!****************************************************************************!*\
  !*** ./src/front/components/aside/asideLeft/menu/menuHeader/MenuHeader.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-motion */ "./node_modules/react-motion/lib/react-motion.js");
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_motion__WEBPACK_IMPORTED_MODULE_2__);




var MenuHeader = function MenuHeader(_ref) {
  var title = _ref.title,
      backColor = _ref.backColor,
      isCollapsed = _ref.isCollapsed,
      onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-inline sidebar-menu__group-container",
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    style: {
      width: '100%',
      backgroundColor: backColor
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn",
    style: {
      width: '100%',
      paddinLeft: '0px !important'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "pull-left sidebar-menu__group-title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"], {
    style: {
      deg: isCollapsed ? Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(0) : Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(180)
    }
  }, function (_ref2) {
    var deg = _ref2.deg;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-angle-up fa-1x pull-right",
      style: {
        WebkitTransform: "rotate(".concat(deg, "deg)"),
        transform: "rotate(".concat(deg, "deg)")
      },
      "aria-hidden": "true"
    });
  }))));
};

MenuHeader.displayName = 'MenuHeader';
MenuHeader.propTypes = {
  backColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  isCollapsed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MenuHeader);

/***/ }),

/***/ "./src/front/components/aside/asideLeft/menu/menuLinks/MenuLinks.js":
/*!**************************************************************************!*\
  !*** ./src/front/components/aside/asideLeft/menu/menuLinks/MenuLinks.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _viewLink_ViewLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewLink/ViewLink */ "./src/front/components/aside/asideLeft/menu/menuLinks/viewLink/ViewLink.js");




function MenuLinks(_ref) {
  var activeView = _ref.activeView,
      views = _ref.views;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "sidebar-menu sidebar-menu__marginTop"
  }, views.map(function (_ref2, idx) {
    var name = _ref2.name,
        linkTo = _ref2.linkTo,
        faIconName = _ref2.faIconName,
        itemCount = _ref2.itemCount;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_viewLink_ViewLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "js-menulinks-viewlinks",
      key: idx,
      isActive: activeView === name,
      linkTo: linkTo,
      viewName: name,
      faIconName: faIconName,
      itemCount: itemCount ? itemCount : 0
    });
  }));
}

MenuLinks.displayName = 'MenuLinks';
MenuLinks.propTypes = {
  activeView: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  views: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    linkTo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    faIconName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    itemCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  })).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MenuLinks);

/***/ }),

/***/ "./src/front/components/aside/asideLeft/menu/menuLinks/viewLink/ViewLink.js":
/*!**********************************************************************************!*\
  !*** ./src/front/components/aside/asideLeft/menu/menuLinks/viewLink/ViewLink.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");





var ViewLink = function ViewLink(_ref) {
  var isActive = _ref.isActive,
      linkTo = _ref.linkTo,
      viewName = _ref.viewName,
      itemCount = _ref.itemCount,
      faIconName = _ref.faIconName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      active: isActive
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: linkTo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa ".concat(faIconName),
    style: {
      marginLeft: '10px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      fontSize: '13px'
    }
  }, viewName), itemCount > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "label label-primary pull-right"
  }, itemCount)));
};

ViewLink.displayName = 'ViewLink';
ViewLink.propTypes = {
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  viewName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  linkTo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  faIconName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  itemCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
ViewLink.defaultProps = {
  isActive: false
};
/* harmony default export */ __webpack_exports__["default"] = (ViewLink);

/***/ }),

/***/ "./src/front/components/aside/asideLeft/searchForm/SearchForm.js":
/*!***********************************************************************!*\
  !*** ./src/front/components/aside/asideLeft/searchForm/SearchForm.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function SearchForm(_ref) {
  var onSearchSubmit = _ref.onSearchSubmit;
  var searchinput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    searchinput.current && searchinput.current.focus();
  }, []);
  var handlesFormKeyPress = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    if (event && event.charCode === 13) {
      event.preventDefault();
      searchinput.current && onSearchSubmit(searchinput.current.value.trim());
    }
  }, [onSearchSubmit]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "sidebar-form",
    onKeyPress: handlesFormKeyPress
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    ref: searchinput,
    type: "text",
    name: "searchinput",
    className: "form-control",
    placeholder: "Search..."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "input-group-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: handlesFormKeyPress,
    name: "search",
    id: "search-btn",
    className: "btn btn-flat"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-search"
  })))));
}

SearchForm.displayName = 'SearchForm';
SearchForm.propTypes = {
  onSearchSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (SearchForm);

/***/ }),

/***/ "./src/front/components/aside/asideLeft/userPanel/UserPanel.js":
/*!*********************************************************************!*\
  !*** ./src/front/components/aside/asideLeft/userPanel/UserPanel.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var UserPanel = function UserPanel(_ref) {
  var userPicture = _ref.userPicture,
      showUserPicture = _ref.showUserPicture,
      hello = _ref.hello,
      username = _ref.username,
      online = _ref.online,
      connectionStatus = _ref.connectionStatus;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-panel"
  }, showUserPicture && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pull-left image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: userPicture,
    className: "img-circle",
    alt: "User Image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pull-left info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "".concat(hello, " ").concat(username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, online && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-circle text-success"
  }), online && connectionStatus.online, !online && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-circle text-default"
  }), !online && connectionStatus.disconnected)));
};

UserPanel.displayName = 'UserPanel';
UserPanel.propTypes = {
  hello: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  username: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  showUserPicture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  userPicture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  connectionStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    online: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    disconnected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }),
  online: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
UserPanel.defaultProps = {
  hello: 'Hello',
  username: 'Jane',
  connectionStatus: {
    online: 'Online',
    disconnected: 'Disconnected'
  },
  online: false,
  showUserPicture: true
};
/* harmony default export */ __webpack_exports__["default"] = (UserPanel);

/***/ }),

/***/ "./src/front/components/aside/asideRight/AsideRight.js":
/*!*************************************************************!*\
  !*** ./src/front/components/aside/asideRight/AsideRight.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




var AsideRight = function AsideRight(_ref) {
  var children = _ref.children,
      isAnimated = _ref.isAnimated,
      isExpanded = _ref.isExpanded;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aside", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      'right-side': true,
      'right-side--top-margin': true,
      'aside-right-animated': isAnimated,
      strech: isExpanded
    })
  }, children);
};

AsideRight.displayName = 'AsideRight';
AsideRight.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  isAnimated: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  isExpanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
AsideRight.defaultProps = {
  isAnimated: true,
  isExpanded: false
};
/* harmony default export */ __webpack_exports__["default"] = (AsideRight);

/***/ }),

/***/ "./src/front/components/aside/index.js":
/*!*********************************************!*\
  !*** ./src/front/components/aside/index.js ***!
  \*********************************************/
/*! exports provided: AsideLeft, AsideRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asideLeft_AsideLeft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asideLeft/AsideLeft */ "./src/front/components/aside/asideLeft/AsideLeft.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsideLeft", function() { return _asideLeft_AsideLeft__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _asideRight_AsideRight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asideRight/AsideRight */ "./src/front/components/aside/asideRight/AsideRight.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsideRight", function() { return _asideRight_AsideRight__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/front/components/basicForms/BasicForms.js":
/*!*******************************************************!*\
  !*** ./src/front/components/basicForms/BasicForms.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _panel_Panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../panel/Panel */ "./src/front/components/panel/Panel.js");




var BasicForms = function BasicForms(_ref) {
  var headerTitle = _ref.headerTitle;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_panel_Panel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    hasTitle: true,
    title: headerTitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    role: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "exampleInputEmail1"
  }, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    className: "form-control",
    id: "exampleInputEmail1",
    placeholder: "Enter email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "exampleInputPassword1"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "password",
    className: "form-control",
    id: "exampleInputPassword1",
    placeholder: "Password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "exampleInputFile"
  }, "File input"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    id: "exampleInputFile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "help-block"
  }, "Example block-level help text here.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox"
  }), "Check me out")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-info"
  }, "Submit")));
};

BasicForms.propTypes = {
  headerTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
BasicForms.defaultProps = {
  headerTitle: 'Basic Forms'
};
/* harmony default export */ __webpack_exports__["default"] = (BasicForms);

/***/ }),

/***/ "./src/front/components/breadcrumb/Breadcrumb.js":
/*!*******************************************************!*\
  !*** ./src/front/components/breadcrumb/Breadcrumb.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* eslint consistent-return: 0 */



var Breadcrumb = function Breadcrumb(_ref) {
  var path = _ref.path;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "breadcrumb"
  }, path.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), path.length > 0 && path.map(function (view, viewIndex) {
    if (viewIndex === 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: viewIndex
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-home"
      }), "\xA0", view));
    }

    if (viewIndex < path.length - 1) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: viewIndex,
        className: "active"
      }, view);
    }

    if (viewIndex === path.length - 1) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: viewIndex,
        className: "active"
      }, view);
    }
  }));
};

Breadcrumb.propTypes = {
  path: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Breadcrumb);

/***/ }),

/***/ "./src/front/components/button/Button.js":
/*!***********************************************!*\
  !*** ./src/front/components/button/Button.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




var Button = function Button(_ref) {
  var type = _ref.type,
      onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: onClick,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      btn: true,
      'btn-default': type === 'default',
      'btn-primary': type === 'primary',
      'btn-success': type === 'success',
      'btn-info': type === 'info',
      'btn-warning': type === 'warning',
      'btn-danger': type === 'danger'
    })
  }, children);
};

Button.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Button.defaultProps = {
  type: 'default'
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/front/components/earningGraph/EarningGraph.js":
/*!***********************************************************!*\
  !*** ./src/front/components/earningGraph/EarningGraph.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./src/front/models/index.js");
/* harmony import */ var _panel_Panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../panel/Panel */ "./src/front/components/panel/Panel.js");





var options = {
  responsive: true,
  maintainAspectRatio: true
};

function EarningGraph(_ref) {
  var labels = _ref.labels,
      datasets = _ref.datasets;
  var chart = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var linechart = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var prevLabels = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
  var prevDatasets = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
  var drawChart = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (data) {
    if (linechart.current) {
      chart.current = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(linechart.current.getContext('2d'), {
        type: 'line',
        data: {
          labels: labels,
          datasets: datasets
        },
        options: options
      });
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    prevLabels.current = labels;
    prevDatasets.current = datasets;
    drawChart({
      labels: labels,
      datasets: datasets
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (labels.length > 0 && datasets.length > 0 && prevLabels.current.length === 0 && prevDatasets.current.length === 0) {
      drawChart({
        labels: labels,
        datasets: datasets
      });
    }
  }, [labels, datasets]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_panel_Panel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    hasTitle: true,
    title: 'Earning Graph'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
    ref: linechart,
    id: "linechart",
    width: "600",
    height: "330"
  }));
}

EarningGraph.displayName = 'EarningGraph';
EarningGraph.defaultProps = {
  data: _models__WEBPACK_IMPORTED_MODULE_3__["earningGraphMockData"]
};
EarningGraph.propTypes = {
  labels: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  datasets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (EarningGraph);

/***/ }),

/***/ "./src/front/components/footer/Footer.js":
/*!***********************************************!*\
  !*** ./src/front/components/footer/Footer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-main"
  }, "react Director Admin Template");
};

Footer.displayName = 'Footer';
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/front/components/header/Header.js":
/*!***********************************************!*\
  !*** ./src/front/components/header/Header.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _userMenu_UserMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userMenu/UserMenu */ "./src/front/components/header/userMenu/UserMenu.js");
/* harmony import */ var _taskMenu_TaskMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskMenu/TaskMenu */ "./src/front/components/header/taskMenu/TaskMenu.js");
/* harmony import */ var _messageMenu_MessageMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messageMenu/MessageMenu */ "./src/front/components/header/messageMenu/MessageMenu.js");
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./button/Button */ "./src/front/components/header/button/Button.js");


var _templateObject;








var FixedHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].header(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  position: fixed;\n\n  @media screen and (max-width: 990px) {\n    & a.logo {\n      width: 0px !important;\n    }\n\n    & nav.navbar {\n      margin: {\n        left: 0px !important;\n      }\n\n      padding: {\n        left: 0px !important;\n      }\n    }\n  }\n"])));

var Header = function Header(_ref) {
  var userLogin = _ref.userLogin,
      userFirstname = _ref.userFirstname,
      userLastname = _ref.userLastname,
      userPicture = _ref.userPicture,
      showPicture = _ref.showPicture,
      appName = _ref.appName,
      toggleSideMenu = _ref.toggleSideMenu,
      onLogout = _ref.onLogout;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FixedHeader, {
    className: "header fixed--header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "logo"
  }, appName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "navbar navbar-static-top",
    role: "navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    toggleSideMenu: toggleSideMenu
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "navbar-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "nav navbar-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_messageMenu_MessageMenu__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_taskMenu_TaskMenu__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_userMenu_UserMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    login: userLogin,
    firstname: userFirstname,
    lastname: userLastname,
    picture: userPicture,
    showUserPicture: showPicture,
    onLogout: onLogout
  })))));
};

Header.propTypes = {
  appName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  userLogin: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  userFirstname: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  userLastname: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  userPicture: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  showPicture: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  onLogout: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  currentView: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  toggleSideMenu: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
Header.defaultProps = {
  appName: 'applicationName'
};
Header.displayName = 'Header';
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/front/components/header/button/Button.js":
/*!******************************************************!*\
  !*** ./src/front/components/header/button/Button.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Button = function Button(_ref) {
  var toggleSideMenu = _ref.toggleSideMenu;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    onClick: toggleSideMenu,
    className: "navbar-btn sidebar-toggle",
    "data-toggle": "offcanvas",
    role: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "Toggle navigation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-bar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-bar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-bar"
  }));
};

Button.displayName = 'Button';
Button.propTypes = {
  toggleSideMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/front/components/header/messageMenu/MessageMenu.js":
/*!****************************************************************!*\
  !*** ./src/front/components/header/messageMenu/MessageMenu.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_Damon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/Damon.png */ "./src/front/img/Damon.png");
/* harmony import */ var _img_Damon_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_Damon_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_Joe_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/Joe.png */ "./src/front/img/Joe.png");
/* harmony import */ var _img_Joe_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_Joe_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_Emma_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../img/Emma.png */ "./src/front/img/Emma.png");
/* harmony import */ var _img_Emma_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_Emma_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_Jannie_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../img/Jannie.png */ "./src/front/img/Jannie.png");
/* harmony import */ var _img_Jannie_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_Jannie_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_Emmet_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../img/Emmet.png */ "./src/front/img/Emmet.png");
/* harmony import */ var _img_Emmet_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_Emmet_png__WEBPACK_IMPORTED_MODULE_5__);







var MessageMenu = function MessageMenu() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "dropdown messages-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "dropdown-toggle",
    "data-toggle": "dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-envelope"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "label label-success"
  }, "4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "dropdown-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "header"
  }, "You have 4 messages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pull-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_Damon_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    className: "img-circle",
    alt: "User Image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Support Team"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Why not buy a new awesome theme?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "pull-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-clock-o"
  }), "5 mins"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pull-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_Joe_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: "img-circle",
    alt: "user image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Director Design Team"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Why not buy a new awesome theme?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "pull-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-clock-o"
  }), "2 hours"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pull-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_Emma_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: "img-circle",
    alt: "user image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Developers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Why not buy a new awesome theme?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "pull-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-clock-o"
  }), "Today"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pull-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_Jannie_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    className: "img-circle",
    alt: "user image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Sales Department"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Why not buy a new awesome theme?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "pull-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-clock-o"
  }), "Yesterday"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pull-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_Emmet_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    className: "img-circle",
    alt: "user image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Reviewers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Why not buy a new awesome theme?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "pull-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-clock-o"
  }), "2 days"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "See All Messages"))));
};

MessageMenu.displayName = 'MessageMenu';
/* harmony default export */ __webpack_exports__["default"] = (MessageMenu);

/***/ }),

/***/ "./src/front/components/header/taskMenu/TaskMenu.js":
/*!**********************************************************!*\
  !*** ./src/front/components/header/taskMenu/TaskMenu.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var TaskMenu = function TaskMenu() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "dropdown tasks-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "dropdown-toggle",
    "data-toggle": "dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-tasks"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "label label-danger"
  }, "9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "dropdown-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "header"
  }, "You have 9 tasks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Design some buttons", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "pull-right"
  }, "20%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress progress-striped xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bar progress-bar-success",
    style: {
      width: '20%'
    },
    role: "progressbar",
    "aria-valuenow": "20",
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "20% Complete"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Create a nice theme", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "pull-right"
  }, "40%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress progress-striped xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bar progress-bar-danger",
    style: {
      width: '40%'
    },
    role: "progressbar",
    "aria-valuenow": "20",
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "40% Complete"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Some task I need to do", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "pull-right"
  }, "60%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress progress-striped xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bar progress-bar-info",
    style: {
      width: '60%'
    },
    role: "progressbar",
    "aria-valuenow": "20",
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "60% Complete"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Make beautiful transitions", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "pull-right"
  }, "80%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress progress-striped xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bar progress-bar-warning",
    style: {
      width: '80%'
    },
    role: "progressbar",
    "aria-valuenow": "20",
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "80% Complete"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "View all tasks"))));
};

TaskMenu.displayName = 'TaskMenu';
/* harmony default export */ __webpack_exports__["default"] = (TaskMenu);

/***/ }),

/***/ "./src/front/components/header/userMenu/UserMenu.js":
/*!**********************************************************!*\
  !*** ./src/front/components/header/userMenu/UserMenu.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var UserMenu = function UserMenu(_ref) {
  var firstname = _ref.firstname,
      lastname = _ref.lastname,
      onLogout = _ref.onLogout,
      login = _ref.login,
      picture = _ref.picture;
  return (
    /*#__PURE__*/
    // <Dropdown
    //   className="user user-menu"
    //   componentClass="li"
    //   id="user-menu"
    // >
    //   <Dropdown.Toggle>
    //     <i className="fa fa-user" />
    //     <span>
    //       { firstname } { lastname }
    //       <i className="caret" />
    //     </span>
    //   </Dropdown.Toggle>
    //   <Dropdown.Menu className="super-colors">
    //     <MenuItem
    //       eventKey="1"
    //       className="text-center"
    //     >
    //       Account
    //     </MenuItem>
    //     <MenuItem
    //       eventKey="2"
    //     >
    //       Another action
    //     </MenuItem>
    //     <MenuItem
    //       eventKey="3"
    //       active
    //     >
    //       Active Item
    //     </MenuItem>
    //     <MenuItem divider />
    //     <MenuItem eventKey="4">Separated link</MenuItem>
    //   </Dropdown.Menu>
    // </Dropdown>
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "dropdown user user-menu"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      className: "dropdown-toggle",
      "data-toggle": "dropdown"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-user"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, firstname, " ", lastname, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "caret"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "dropdown-menu dropdown-custom dropdown-menu-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "dropdown-header text-center"
    }, "Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-clock-o fa-fw pull-right"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "badge badge-success pull-right"
    }, "10"), "Updates"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-envelope-o fa-fw pull-right"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "badge badge-danger pull-right"
    }, "5"), "Messages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-magnet fa-fw pull-right"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "badge badge-info pull-right"
    }, "3"), "Subscriptions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-question fa-fw pull-right"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "badge pull-right"
    }, "11"), "FAQ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "divider"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-user fa-fw pull-right"
    }), "Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      "data-toggle": "modal",
      href: "#modal-user-settings"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-cog fa-fw pull-right"
    }), "Settings")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "divider"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      onClick: onLogout
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-ban fa-fw pull-right"
    }), "Logout"))))
  );
};

UserMenu.propTypes = {
  login: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  firstname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  lastname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onLogout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
UserMenu.defaultProps = {
  onLogout: function onLogout() {}
};
UserMenu.displayName = 'UserMenu';
/* harmony default export */ __webpack_exports__["default"] = (UserMenu);

/***/ }),

/***/ "./src/front/components/horloge/Horloge.js":
/*!*************************************************!*\
  !*** ./src/front/components/horloge/Horloge.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _templateObject, _templateObject2, _templateObject3, _templateObject4;




var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  border-bottom-width: 1px;\n  border-bottom-style: outset;\n  border-top-width: 1px;\n  border-top-style: outset;\n  margin: 10px 0;\n  color: rgb(238, 238, 238);\n  text-align: center;\n"])));
var DateAndTimeContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  color: rgb(238, 238, 238);\n"])));
var HorlogeTime = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h2(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  margin-top: 5px;\n  font-size: 26px;\n  text-align: center;\n"])));
var HorlogeDate = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h5(_templateObject4 || (_templateObject4 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  font-size: 13px;\n  text-align: center;\n"])));
var CENTIEME_SEC = 1000;
var DATE_FORMAT = 'MM/DD/YYYY';
var TIME_FORMAT = 'hh:mm:ss';

function Horloge() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(), DATE_FORMAT)),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(), TIME_FORMAT)),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      time = _useState4[0],
      setTime = _useState4[1];

  var horlogeTimer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function ticTac() {
      var now = new Date();
      setDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(now, DATE_FORMAT));
      setTime(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(now, TIME_FORMAT));
    }

    horlogeTimer.current = setInterval(function () {
      return ticTac();
    }, CENTIEME_SEC);
    return function () {
      clearInterval(horlogeTimer.current);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DateAndTimeContainer, {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HorlogeTime, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "horlogeTime"
  }, time)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HorlogeDate, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "horlogeDate"
  }, date))));
}

Horloge.displayName = 'Horloge';
/* harmony default export */ __webpack_exports__["default"] = (Horloge);

/***/ }),

/***/ "./src/front/components/index.js":
/*!***************************************!*\
  !*** ./src/front/components/index.js ***!
  \***************************************/
/*! exports provided: Header, AsideLeft, AsideRight, TodoListDemo, EarningGraph, Footer, Notifications, NotificationPanel, Notification, TeamMatesDemo, TwitterFeed, WorkProgress, StatsCard, Jumbotron, BasicForms, Panel, Horloge, Breadcrumb, Stat, Table, TableHeader, TableBody, TableRow, TableCol, Tweet, WriteNewTweet, ListTweetsContainer, TeamMates, TeamMember, TeamMateAddButton, TodoList, TodoListItem, TodoListCommands, TodoListAddTask, TodoListSeeAllTask, ProgressBar, ToolTip, Pagination, Pager, TabPanel, TabPanelHeader, TabPanelBody, TabPanelBodyContent, TabPanelDemo, Alert, Button, Label, AnimatedView, ScrollTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_Header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/Header.js */ "./src/front/components/header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header_Header_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _aside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aside */ "./src/front/components/aside/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsideLeft", function() { return _aside__WEBPACK_IMPORTED_MODULE_1__["AsideLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsideRight", function() { return _aside__WEBPACK_IMPORTED_MODULE_1__["AsideRight"]; });

/* harmony import */ var _todoList_TodoListDemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoList/TodoListDemo */ "./src/front/components/todoList/TodoListDemo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoListDemo", function() { return _todoList_TodoListDemo__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _earningGraph_EarningGraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./earningGraph/EarningGraph */ "./src/front/components/earningGraph/EarningGraph.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EarningGraph", function() { return _earningGraph_EarningGraph__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/Footer */ "./src/front/components/footer/Footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _notifications_Notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications/Notifications */ "./src/front/components/notifications/Notifications.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notifications", function() { return _notifications_Notifications__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications */ "./src/front/components/notifications/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationPanel", function() { return _notifications__WEBPACK_IMPORTED_MODULE_6__["NotificationPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _notifications__WEBPACK_IMPORTED_MODULE_6__["Notification"]; });

/* harmony import */ var _teamMates_TeamMatesDemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./teamMates/TeamMatesDemo */ "./src/front/components/teamMates/TeamMatesDemo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamMatesDemo", function() { return _teamMates_TeamMatesDemo__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _twitterFeed_TwitterFeed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./twitterFeed/TwitterFeed */ "./src/front/components/twitterFeed/TwitterFeed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TwitterFeed", function() { return _twitterFeed_TwitterFeed__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _workProgress_WorkProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./workProgress/WorkProgress */ "./src/front/components/workProgress/WorkProgress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkProgress", function() { return _workProgress_WorkProgress__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _statsCard_StatsCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./statsCard/StatsCard */ "./src/front/components/statsCard/StatsCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatsCard", function() { return _statsCard_StatsCard__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _jumbotron_Jumbotron__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./jumbotron/Jumbotron */ "./src/front/components/jumbotron/Jumbotron.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Jumbotron", function() { return _jumbotron_Jumbotron__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _basicForms_BasicForms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./basicForms/BasicForms */ "./src/front/components/basicForms/BasicForms.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicForms", function() { return _basicForms_BasicForms__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _panel_Panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./panel/Panel */ "./src/front/components/panel/Panel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return _panel_Panel__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _horloge_Horloge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./horloge/Horloge */ "./src/front/components/horloge/Horloge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Horloge", function() { return _horloge_Horloge__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./breadcrumb/Breadcrumb */ "./src/front/components/breadcrumb/Breadcrumb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return _breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _stat_Stat__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./stat/Stat */ "./src/front/components/stat/Stat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stat", function() { return _stat_Stat__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./table */ "./src/front/components/table/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _table__WEBPACK_IMPORTED_MODULE_17__["Table"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableHeader", function() { return _table__WEBPACK_IMPORTED_MODULE_17__["TableHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableBody", function() { return _table__WEBPACK_IMPORTED_MODULE_17__["TableBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableRow", function() { return _table__WEBPACK_IMPORTED_MODULE_17__["TableRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableCol", function() { return _table__WEBPACK_IMPORTED_MODULE_17__["TableCol"]; });

/* harmony import */ var _twitterFeed__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./twitterFeed */ "./src/front/components/twitterFeed/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tweet", function() { return _twitterFeed__WEBPACK_IMPORTED_MODULE_18__["Tweet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WriteNewTweet", function() { return _twitterFeed__WEBPACK_IMPORTED_MODULE_18__["WriteNewTweet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListTweetsContainer", function() { return _twitterFeed__WEBPACK_IMPORTED_MODULE_18__["ListTweetsContainer"]; });

/* harmony import */ var _teamMates__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./teamMates */ "./src/front/components/teamMates/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamMates", function() { return _teamMates__WEBPACK_IMPORTED_MODULE_19__["TeamMates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamMember", function() { return _teamMates__WEBPACK_IMPORTED_MODULE_19__["TeamMember"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamMateAddButton", function() { return _teamMates__WEBPACK_IMPORTED_MODULE_19__["TeamMateAddButton"]; });

/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./todoList */ "./src/front/components/todoList/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoList", function() { return _todoList__WEBPACK_IMPORTED_MODULE_20__["TodoList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoListItem", function() { return _todoList__WEBPACK_IMPORTED_MODULE_20__["TodoListItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoListCommands", function() { return _todoList__WEBPACK_IMPORTED_MODULE_20__["TodoListCommands"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoListAddTask", function() { return _todoList__WEBPACK_IMPORTED_MODULE_20__["TodoListAddTask"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoListSeeAllTask", function() { return _todoList__WEBPACK_IMPORTED_MODULE_20__["TodoListSeeAllTask"]; });

/* harmony import */ var _progressBar_ProgressBar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./progressBar/ProgressBar */ "./src/front/components/progressBar/ProgressBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return _progressBar_ProgressBar__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _toolTip_Tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./toolTip/Tooltip */ "./src/front/components/toolTip/Tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolTip", function() { return _toolTip_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _pagination_Pagination__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pagination/Pagination */ "./src/front/components/pagination/Pagination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return _pagination_Pagination__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _pager_Pager__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pager/Pager */ "./src/front/components/pager/Pager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pager", function() { return _pager_Pager__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _tabPanel__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tabPanel */ "./src/front/components/tabPanel/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPanel", function() { return _tabPanel__WEBPACK_IMPORTED_MODULE_25__["TabPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPanelHeader", function() { return _tabPanel__WEBPACK_IMPORTED_MODULE_25__["TabPanelHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPanelBody", function() { return _tabPanel__WEBPACK_IMPORTED_MODULE_25__["TabPanelBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPanelBodyContent", function() { return _tabPanel__WEBPACK_IMPORTED_MODULE_25__["TabPanelBodyContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPanelDemo", function() { return _tabPanel__WEBPACK_IMPORTED_MODULE_25__["TabPanelDemo"]; });

/* harmony import */ var _alert_Alert__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./alert/Alert */ "./src/front/components/alert/Alert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _alert_Alert__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./button/Button */ "./src/front/components/button/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button_Button__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _label_Label__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./label/Label */ "./src/front/components/label/Label.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _label_Label__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _animatedView_AnimatedView__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./animatedView/AnimatedView */ "./src/front/components/animatedView/AnimatedView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimatedView", function() { return _animatedView_AnimatedView__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _scrollToTop_ScrollToTop__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./scrollToTop/ScrollToTop */ "./src/front/components/scrollToTop/ScrollToTop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollTop", function() { return _scrollToTop_ScrollToTop__WEBPACK_IMPORTED_MODULE_30__["default"]; });

































/***/ }),

/***/ "./src/front/components/jumbotron/Jumbotron.js":
/*!*****************************************************!*\
  !*** ./src/front/components/jumbotron/Jumbotron.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function Jombotron(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "jumbotron"
  }, children);
}

Jombotron.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (Jombotron);

/***/ }),

/***/ "./src/front/components/label/Label.js":
/*!*********************************************!*\
  !*** ./src/front/components/label/Label.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




function Label(_ref) {
  var type = _ref.type,
      text = _ref.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      label: true,
      'label-default': type === 'default',
      'label-primary': type === 'primary',
      'label-success': type === 'success',
      'label-info': type === 'info',
      'label-warning': type === 'warning',
      'label-danger': type === 'danger',
      'label-inverse': type === 'inverse'
    })
  }, text);
}

Label.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['default', 'primary', 'success', 'info', 'inverse', 'warning', 'danger'])
};
Label.defaultProps = {
  text: '',
  type: 'default'
};
/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),

/***/ "./src/front/components/notifications/Notifications.js":
/*!*************************************************************!*\
  !*** ./src/front/components/notifications/Notifications.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _notificationPanel_NotificationPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notificationPanel/NotificationPanel */ "./src/front/components/notifications/notificationPanel/NotificationPanel.js");
/* harmony import */ var _notification_Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification/Notification */ "./src/front/components/notifications/notification/Notification.js");
/* eslint-disable react/no-unescaped-entities */




var Notifications = function Notifications() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_notificationPanel_NotificationPanel__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_notification_Notification__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: 'danger'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Oh snap!"), "Change a few things up and try submitting again.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_notification_Notification__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: 'success'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Well done!"), "You successfully read this important alert message.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_notification_Notification__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: 'info'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Heads up!"), "This alert needs your attention, but it's not super important.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_notification_Notification__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: 'warning'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Warning!"), "Best check yo self, you're not looking too good.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_notification_Notification__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: 'danger'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Oh snap!"), "Change a few things up and try submitting again.")));
};

Notifications.displayName = 'Notifications';
/* harmony default export */ __webpack_exports__["default"] = (Notifications);

/***/ }),

/***/ "./src/front/components/notifications/index.js":
/*!*****************************************************!*\
  !*** ./src/front/components/notifications/index.js ***!
  \*****************************************************/
/*! exports provided: NotificationPanel, Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notificationPanel_NotificationPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notificationPanel/NotificationPanel */ "./src/front/components/notifications/notificationPanel/NotificationPanel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationPanel", function() { return _notificationPanel_NotificationPanel__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _notification_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification/Notification */ "./src/front/components/notifications/notification/Notification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _notification_Notification__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/front/components/notifications/notification/Notification.js":
/*!*************************************************************************!*\
  !*** ./src/front/components/notifications/notification/Notification.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




var Notification = function Notification(_ref) {
  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'info' : _ref$type;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      alert: true,
      'alert-success': type === 'success',
      'alert-info': type === 'info',
      'alert-warning': type === 'warning',
      'alert-danger': type === 'danger'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "data-dismiss": "alert",
    className: "close close-sm",
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-times"
  })), children);
};

Notification.displayName = 'Notification';
Notification.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['danger', 'success', 'info', 'warning']),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./src/front/components/notifications/notificationPanel/NotificationPanel.js":
/*!***********************************************************************************!*\
  !*** ./src/front/components/notifications/notificationPanel/NotificationPanel.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;




var NotificationBody = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  height: 370px;\n  overflow-y: scroll;\n"])));

var NotificationPanel = function NotificationPanel(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Notifications' : _ref$title,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "panel-heading"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NotificationBody, {
    className: "panel-body",
    id: "noti-box"
  }, children));
};

NotificationPanel.displayName = 'NotificationPanel';
NotificationPanel.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (NotificationPanel);

/***/ }),

/***/ "./src/front/components/pager/Pager.js":
/*!*********************************************!*\
  !*** ./src/front/components/pager/Pager.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




var Pager = function Pager(_ref) {
  var _ref$aligned = _ref.aligned,
      aligned = _ref$aligned === void 0 ? false : _ref$aligned,
      previous = _ref.previous,
      next = _ref.next;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "pager"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      previous: aligned
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, previous)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      next: aligned
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, next))));
};

Pager.displayName = 'Pager';
Pager.propTypes = {
  aligned: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  previous: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  next: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Pager);

/***/ }),

/***/ "./src/front/components/pagination/Pagination.js":
/*!*******************************************************!*\
  !*** ./src/front/components/pagination/Pagination.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





var Pagination = function Pagination(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'default' : _ref$size,
      _ref$numberOfPaginati = _ref.numberOfPagination,
      numberOfPagination = _ref$numberOfPaginati === void 0 ? 5 : _ref$numberOfPaginati;

  var arrayOfPaginationIndexes = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Array(numberOfPagination)).map(function (_, y) {
    return y + 1;
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      pagination: true,
      'pagination-lg': size === 'large',
      'pagination-sm': size === 'small'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#"
  }, "\xAB")), arrayOfPaginationIndexes.map(function (index, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#"
    }, index));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#"
  }, "\xBB")));
};

Pagination.displayName = 'Pagination';
Pagination.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['large', 'default', 'small']),
  numberOfPagination: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./src/front/components/panel/Panel.js":
/*!*********************************************!*\
  !*** ./src/front/components/panel/Panel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Panel = function Panel(_ref) {
  var _ref$hasTitle = _ref.hasTitle,
      hasTitle = _ref$hasTitle === void 0 ? true : _ref$hasTitle,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'no title set' : _ref$title,
      _ref$bodyBackGndColor = _ref.bodyBackGndColor,
      bodyBackGndColor = _ref$bodyBackGndColor === void 0 ? '#FFF' : _ref$bodyBackGndColor,
      _ref$bodyCustomClass = _ref.bodyCustomClass,
      bodyCustomClass = _ref$bodyCustomClass === void 0 ? '' : _ref$bodyCustomClass,
      _ref$sectionCustomCla = _ref.sectionCustomClass,
      sectionCustomClass = _ref$sectionCustomCla === void 0 ? '' : _ref$sectionCustomCla,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "panel ".concat(sectionCustomClass)
  }, hasTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "panel-heading"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-body ".concat(bodyCustomClass),
    style: {
      backgroundColor: bodyBackGndColor
    }
  }, children));
};

Panel.displayName = 'Panel';
Panel.propTypes = {
  hasTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  bodyBackGndColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  bodyCustomClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  sectionCustomClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (Panel);

/***/ }),

/***/ "./src/front/components/privateRoute/PrivateRoute.js":
/*!***********************************************************!*\
  !*** ./src/front/components/privateRoute/PrivateRoute.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth */ "./src/front/services/auth/index.js");


var _excluded = ["component"];





function isAuthenticated() {
  var checkUserHasId = function checkUserHasId(user) {
    return user && user.id;
  };

  var user = _services_auth__WEBPACK_IMPORTED_MODULE_5__["default"].getUserInfo() ? _services_auth__WEBPACK_IMPORTED_MODULE_5__["default"].getUserInfo() : null;
  var authenticated = _services_auth__WEBPACK_IMPORTED_MODULE_5__["default"].getToken() && checkUserHasId(user);
  return authenticated;
}

function isExpired() {
  return _services_auth__WEBPACK_IMPORTED_MODULE_5__["default"].isExpiredToken(_services_auth__WEBPACK_IMPORTED_MODULE_5__["default"].getToken());
}

function PrivateRoute(props) {
  var InnerComponent = props.component,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(props, _excluded);

  var location = props.location;
  var isUserAuthenticated = isAuthenticated();
  var isTokenExpired = isExpired();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, {
    render: function render(p) {
      return !isTokenExpired && isUserAuthenticated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InnerComponent, p) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
        to: {
          pathname: '/login',
          state: {
            from: location
          }
        }
      });
    }
  }));
}

PrivateRoute.displayName = 'PrivateRoute';
PrivateRoute.propTypes = {
  // react-router 4:
  match: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired,
  path: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(PrivateRoute));

/***/ }),

/***/ "./src/front/components/progressBar/ProgressBar.js":
/*!*********************************************************!*\
  !*** ./src/front/components/progressBar/ProgressBar.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




var ProgressBar = function ProgressBar(_ref) {
  var _ref$barSize = _ref.barSize,
      barSize = _ref$barSize === void 0 ? 'progress' : _ref$barSize,
      _ref$barStriped = _ref.barStriped,
      barStriped = _ref$barStriped === void 0 ? false : _ref$barStriped,
      _ref$barStyle = _ref.barStyle,
      barStyle = _ref$barStyle === void 0 ? 'primary' : _ref$barStyle,
      _ref$active = _ref.active,
      active = _ref$active === void 0 ? false : _ref$active,
      _ref$valueNow = _ref.valueNow,
      valueNow = _ref$valueNow === void 0 ? 0 : _ref$valueNow,
      _ref$valueMin = _ref.valueMin,
      valueMin = _ref$valueMin === void 0 ? 0 : _ref$valueMin,
      _ref$valueMax = _ref.valueMax,
      valueMax = _ref$valueMax === void 0 ? 100 : _ref$valueMax,
      _ref$screenReadersTex = _ref.screenReadersText,
      screenReadersText = _ref$screenReadersTex === void 0 ? 'progress' : _ref$screenReadersTex;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      progress: true,
      'progress-xxs': barSize === 'xxs',
      'progress-xs': barSize === 'xs',
      'progress-sm': barSize === 'sm',
      active: active
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      'progress-bar': true,
      'progress-bar-striped': barStriped,
      'progress-bar-warning': barStyle === 'warning',
      'progress-bar-primary': barStyle === 'primary',
      'progress-bar-success': barStyle === 'success',
      'progress-bar-danger': barStyle === 'danger'
    }),
    role: "progressbar",
    "aria-valuenow": valueNow,
    "aria-valuemin": valueMin,
    "aria-valuemax": valueMax,
    style: {
      width: "".concat(valueNow, "%")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, screenReadersText)));
};

ProgressBar.displayName = 'ProgressBar';
ProgressBar.propTypes = {
  barSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['xxs', 'xs', 'sm', 'progress']),
  barStriped: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  barStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['primary', 'success', 'warning', 'danger']),
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  valueNow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  valueMin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  valueMax: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  screenReadersText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ }),

/***/ "./src/front/components/scrollToTop/ScrollToTop.js":
/*!*********************************************************!*\
  !*** ./src/front/components/scrollToTop/ScrollToTop.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
// #region imports

 // #endregion
// #region flow types

// #endregion
function useScrollToTopOnLocationChange(location) {
  var prevLocation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    prevLocation.current = location;
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (prevLocation.current !== location) {
      window && window.scrollTo(0, 0);
      prevLocation.current = location;
    }
  }, [location]);
}

function ScrollToTop(_ref) {
  var children = _ref.children,
      location = _ref.location;
  useScrollToTopOnLocationChange(location);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, children);
}

ScrollToTop.displayName = 'ScrollToTop';
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ScrollToTop));

/***/ }),

/***/ "./src/front/components/stat/Stat.js":
/*!*******************************************!*\
  !*** ./src/front/components/stat/Stat.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* eslint consistent-return: 0 */



var Stat = function Stat(_ref) {
  var _ref$statFaIconName = _ref.statFaIconName,
      statFaIconName = _ref$statFaIconName === void 0 ? '' : _ref$statFaIconName,
      _ref$statIconColor = _ref.statIconColor,
      statIconColor = _ref$statIconColor === void 0 ? '#F1F1F1' : _ref$statIconColor,
      _ref$statLabel = _ref.statLabel,
      statLabel = _ref$statLabel === void 0 ? '' : _ref$statLabel,
      _ref$statIconSpin = _ref.statIconSpin,
      statIconSpin = _ref$statIconSpin === void 0 ? false : _ref$statIconSpin;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fa-stack fa-lg fa-3x"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-circle fa-stack-2x",
    style: {
      color: '#FFFFFF'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa ".concat(statFaIconName, " ").concat(statIconSpin ? 'fa-spin' : '', " fa-stack-1x fa-inverse"),
    style: {
      color: statIconColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "stat-info"
  }, statLabel));
};

Stat.propTypes = {
  statFaIconName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  statIconColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  statLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  statIconSpin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Stat.displayName = 'Stat';
/* harmony default export */ __webpack_exports__["default"] = (Stat);

/***/ }),

/***/ "./src/front/components/statsCard/StatsCard.js":
/*!*****************************************************!*\
  !*** ./src/front/components/statsCard/StatsCard.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var StatsCard = function StatsCard(_ref) {
  var _ref$statValue = _ref.statValue,
      statValue = _ref$statValue === void 0 ? '0' : _ref$statValue,
      _ref$statLabel = _ref.statLabel,
      statLabel = _ref$statLabel === void 0 ? 'unknown' : _ref$statLabel,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-check-square-o"
  }) : _ref$icon,
      _ref$backColor = _ref.backColor,
      backColor = _ref$backColor === void 0 ? 'blue' : _ref$backColor;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sm-st clearfix"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sm-st-icon st-".concat(backColor)
  }, icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sm-st-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, statValue), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, statLabel)));
};

StatsCard.displayName = StatsCard;
StatsCard.propTypes = {
  statValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  statLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  backColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['red', 'blue', 'violet', 'green'])
};
/* harmony default export */ __webpack_exports__["default"] = (StatsCard);

/***/ }),

/***/ "./src/front/components/tabPanel/TabPanel/TabPanel.js":
/*!************************************************************!*\
  !*** ./src/front/components/tabPanel/TabPanel/TabPanel.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var TabPanel = function TabPanel(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "panel general"
  }, children);
};

TabPanel.displayName = 'TabPanel';
TabPanel.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TabPanel);

/***/ }),

/***/ "./src/front/components/tabPanel/TabPanelBodyContent/tabPanelBodyContent.js":
/*!**********************************************************************************!*\
  !*** ./src/front/components/tabPanel/TabPanelBodyContent/tabPanelBodyContent.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




var TabPanelBodyContent = function TabPanelBodyContent(_ref) {
  var id = _ref.id,
      _ref$isActive = _ref.isActive,
      isActive = _ref$isActive === void 0 ? false : _ref$isActive,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: id,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      'tab-pane': true,
      active: isActive
    })
  }, children);
};

TabPanelBodyContent.displayName = 'TabPanelBodyContent';
TabPanelBodyContent.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (TabPanelBodyContent);

/***/ }),

/***/ "./src/front/components/tabPanel/TabPanelDemo.js":
/*!*******************************************************!*\
  !*** ./src/front/components/tabPanel/TabPanelDemo.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TabPanel_TabPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabPanel/TabPanel */ "./src/front/components/tabPanel/TabPanel/TabPanel.js");
/* harmony import */ var _tabPanelHeader_TabPanelHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabPanelHeader/TabPanelHeader */ "./src/front/components/tabPanel/tabPanelHeader/TabPanelHeader.js");
/* harmony import */ var _tabPanelBody_TabPanelBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabPanelBody/TabPanelBody */ "./src/front/components/tabPanel/tabPanelBody/TabPanelBody.js");
/* harmony import */ var _TabPanelBodyContent_tabPanelBodyContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabPanelBodyContent/tabPanelBodyContent */ "./src/front/components/tabPanel/TabPanelBodyContent/tabPanelBodyContent.js");





var mockHeader = [{
  name: 'Home',
  tablink: 'home',
  isActive: true
}, {
  name: 'About',
  tablink: 'about',
  isActive: false
}, {
  name: 'Profile',
  tablink: 'profile',
  isActive: false
}, {
  name: 'Contact',
  tablink: 'contact',
  isActive: false
}];

var TabPanelDemo = function TabPanelDemo() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TabPanel_TabPanel__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tabPanelHeader_TabPanelHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tabItems: mockHeader
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tabPanelBody_TabPanelBody__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TabPanelBodyContent_tabPanelBodyContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "home"
  }, "\xA0Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TabPanelBodyContent_tabPanelBodyContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "about"
  }, "\xA0About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TabPanelBodyContent_tabPanelBodyContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "profile"
  }, "\xA0Profile")));
};

/* harmony default export */ __webpack_exports__["default"] = (TabPanelDemo);

/***/ }),

/***/ "./src/front/components/tabPanel/index.js":
/*!************************************************!*\
  !*** ./src/front/components/tabPanel/index.js ***!
  \************************************************/
/*! exports provided: TabPanel, TabPanelHeader, TabPanelBody, TabPanelBodyContent, TabPanelDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabPanel_TabPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabPanel/TabPanel */ "./src/front/components/tabPanel/TabPanel/TabPanel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPanel", function() { return _TabPanel_TabPanel__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _tabPanelHeader_TabPanelHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabPanelHeader/TabPanelHeader */ "./src/front/components/tabPanel/tabPanelHeader/TabPanelHeader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPanelHeader", function() { return _tabPanelHeader_TabPanelHeader__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _tabPanelBody_TabPanelBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabPanelBody/TabPanelBody */ "./src/front/components/tabPanel/tabPanelBody/TabPanelBody.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPanelBody", function() { return _tabPanelBody_TabPanelBody__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TabPanelBodyContent_tabPanelBodyContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabPanelBodyContent/tabPanelBodyContent */ "./src/front/components/tabPanel/TabPanelBodyContent/tabPanelBodyContent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPanelBodyContent", function() { return _TabPanelBodyContent_tabPanelBodyContent__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _TabPanelDemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabPanelDemo */ "./src/front/components/tabPanel/TabPanelDemo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPanelDemo", function() { return _TabPanelDemo__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./src/front/components/tabPanel/tabPanelBody/TabPanelBody.js":
/*!********************************************************************!*\
  !*** ./src/front/components/tabPanel/tabPanelBody/TabPanelBody.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var TabPanelBody = function TabPanelBody(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-content"
  }, children));
};

TabPanelBody.displayName = 'TabPanelBody';
TabPanelBody.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TabPanelBody);

/***/ }),

/***/ "./src/front/components/tabPanel/tabPanelHeader/TabPanelHeader.js":
/*!************************************************************************!*\
  !*** ./src/front/components/tabPanel/tabPanelHeader/TabPanelHeader.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var TabPanelHeader = function TabPanelHeader(_ref) {
  var _ref$tabItems = _ref.tabItems,
      tabItems = _ref$tabItems === void 0 ? [] : _ref$tabItems;
  var oneTabAtLeastIsActive = tabItems.some(function (item) {
    return item.isActive === true;
  });

  var tabItemsToDisplay = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(tabItems);

  if (!oneTabAtLeastIsActive) {
    tabItemsToDisplay = tabItems.map(function (item, itemIdx) {
      if (itemIdx === 0) {
        return _objectSpread(_objectSpread({}, item), {}, {
          isActive: true
        });
      }

      return item;
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", {
    className: "panel-heading tab-bg-dark-navy-blue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "nav nav-tabs"
  }, tabItemsToDisplay.map(function (item, itemIdx) {
    var name = item.name,
        tablink = item.tablink,
        isActive = item.isActive;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      id: "listitem",
      key: itemIdx,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
        active: isActive
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      "data-toggle": "tab",
      "aria-expanded": isActive === true ? 'true' : 'false',
      href: "#".concat(tablink)
    }, "\xA0", name));
  })));
};

TabPanelHeader.displayName = 'TabPanelHeader';
TabPanelHeader.propTypes = {
  tabItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
    tablink: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
    isActive: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired
  }).isRequired).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TabPanelHeader);

/***/ }),

/***/ "./src/front/components/table/Table.js":
/*!*********************************************!*\
  !*** ./src/front/components/table/Table.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Table = function Table(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-hover"
  }, children);
};

Table.displayName = 'Table';
Table.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./src/front/components/table/index.js":
/*!*********************************************!*\
  !*** ./src/front/components/table/index.js ***!
  \*********************************************/
/*! exports provided: Table, TableHeader, TableBody, TableRow, TableCol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table */ "./src/front/components/table/Table.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _Table__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _tableHeader_TableHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableHeader/TableHeader */ "./src/front/components/table/tableHeader/TableHeader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableHeader", function() { return _tableHeader_TableHeader__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _tableBody_TableBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableBody/TableBody */ "./src/front/components/table/tableBody/TableBody.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableBody", function() { return _tableBody_TableBody__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _tableRow_TableRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tableRow/TableRow */ "./src/front/components/table/tableRow/TableRow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableRow", function() { return _tableRow_TableRow__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _tableCol_TableCol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tableCol/TableCol */ "./src/front/components/table/tableCol/TableCol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableCol", function() { return _tableCol_TableCol__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./src/front/components/table/tableBody/TableBody.js":
/*!***********************************************************!*\
  !*** ./src/front/components/table/tableBody/TableBody.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var TableBody = function TableBody(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, children);
};

TableBody.displayName = 'TableBody';
TableBody.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TableBody);

/***/ }),

/***/ "./src/front/components/table/tableCol/TableCol.js":
/*!*********************************************************!*\
  !*** ./src/front/components/table/tableCol/TableCol.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var TableCol = function TableCol(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, children);
};

TableCol.displayName = 'TableCol';
TableCol.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TableCol);

/***/ }),

/***/ "./src/front/components/table/tableHeader/TableHeader.js":
/*!***************************************************************!*\
  !*** ./src/front/components/table/tableHeader/TableHeader.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var TableHeader = function TableHeader(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, children));
};

TableHeader.displayName = 'TableHeader';
TableHeader.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TableHeader);

/***/ }),

/***/ "./src/front/components/table/tableRow/TableRow.js":
/*!*********************************************************!*\
  !*** ./src/front/components/table/tableRow/TableRow.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var TableRow = function TableRow(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, children);
};

TableRow.displayName = 'TableRow';
TableRow.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TableRow);

/***/ }),

/***/ "./src/front/components/teamMates/TeamMatesDemo.js":
/*!*********************************************************!*\
  !*** ./src/front/components/teamMates/TeamMatesDemo.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _teamMates_TeamMates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teamMates/TeamMates */ "./src/front/components/teamMates/teamMates/TeamMates.js");
/* harmony import */ var _teamMember_TeamMember__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teamMember/TeamMember */ "./src/front/components/teamMates/teamMember/TeamMember.js");
/* harmony import */ var _teamMateAddButton_TeamMateAddButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teamMateAddButton/TeamMateAddButton */ "./src/front/components/teamMates/teamMateAddButton/TeamMateAddButton.js");
/* harmony import */ var _panel_Panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../panel/Panel */ "./src/front/components/panel/Panel.js");







var TeamMatesDemo = function TeamMatesDemo(_ref) {
  var _ref$members = _ref.members,
      members = _ref$members === void 0 ? [] : _ref$members;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_panel_Panel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    hasTitle: true,
    title: 'Teammates'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_teamMates_TeamMates__WEBPACK_IMPORTED_MODULE_2__["default"], null, members.map(function (member, memberIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_teamMember_TeamMember__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: memberIndex,
      picture: member.picture,
      firstname: member.firstname,
      lastname: member.lastname,
      profile: member.profile,
      profileColor: member.profileColor
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_teamMateAddButton_TeamMateAddButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onAdd: function onAdd() {
      return console.log('some add team mate event click');
    }
  }));
};

TeamMatesDemo.displayName = 'TeamMatesDemo';
TeamMatesDemo.propTypes = {
  members: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    firstname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    lastname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    profile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    profileColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['danger', 'warning', 'info', 'success'])
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (TeamMatesDemo);

/***/ }),

/***/ "./src/front/components/teamMates/index.js":
/*!*************************************************!*\
  !*** ./src/front/components/teamMates/index.js ***!
  \*************************************************/
/*! exports provided: TeamMates, TeamMember, TeamMateAddButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _teamMates_TeamMates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teamMates/TeamMates */ "./src/front/components/teamMates/teamMates/TeamMates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamMates", function() { return _teamMates_TeamMates__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _teamMember_TeamMember__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teamMember/TeamMember */ "./src/front/components/teamMates/teamMember/TeamMember.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamMember", function() { return _teamMember_TeamMember__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _teamMateAddButton_TeamMateAddButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teamMateAddButton/TeamMateAddButton */ "./src/front/components/teamMates/teamMateAddButton/TeamMateAddButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamMateAddButton", function() { return _teamMateAddButton_TeamMateAddButton__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/front/components/teamMates/teamMateAddButton/TeamMateAddButton.js":
/*!*******************************************************************************!*\
  !*** ./src/front/components/teamMates/teamMateAddButton/TeamMateAddButton.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var TeamMateAddButton = function TeamMateAddButton(_ref) {
  var _ref$onAdd = _ref.onAdd,
      onAdd = _ref$onAdd === void 0 ? function () {} : _ref$onAdd;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-footer bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary btn-addon btn-sm",
    onClick: onAdd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-plus"
  }), "Add Teammate"));
};

TeamMateAddButton.displayName = 'TeamMateAddButton';
TeamMateAddButton.propTypes = {
  onAdd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (TeamMateAddButton);

/***/ }),

/***/ "./src/front/components/teamMates/teamMates/TeamMates.js":
/*!***************************************************************!*\
  !*** ./src/front/components/teamMates/teamMates/TeamMates.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var TeamMates = function TeamMates(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group teammates"
  }, children);
};

TeamMates.displayName = 'TeamMates';
TeamMates.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (TeamMates);

/***/ }),

/***/ "./src/front/components/teamMates/teamMember/TeamMember.js":
/*!*****************************************************************!*\
  !*** ./src/front/components/teamMates/teamMember/TeamMember.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_Damon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/Damon.png */ "./src/front/img/Damon.png");
/* harmony import */ var _img_Damon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_Damon_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_Joe_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../img/Joe.png */ "./src/front/img/Joe.png");
/* harmony import */ var _img_Joe_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_Joe_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_Emma_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../img/Emma.png */ "./src/front/img/Emma.png");
/* harmony import */ var _img_Emma_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_Emma_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_Jannie_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../img/Jannie.png */ "./src/front/img/Jannie.png");
/* harmony import */ var _img_Jannie_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_Jannie_png__WEBPACK_IMPORTED_MODULE_5__);






var images = [{
  firstname: 'Damon',
  img: _img_Damon_png__WEBPACK_IMPORTED_MODULE_2___default.a
}, {
  firstname: 'Joe',
  img: _img_Joe_png__WEBPACK_IMPORTED_MODULE_3___default.a
}, {
  firstname: 'Emma',
  img: _img_Emma_png__WEBPACK_IMPORTED_MODULE_4___default.a
}, {
  firstname: 'Jannie',
  img: _img_Jannie_png__WEBPACK_IMPORTED_MODULE_5___default.a
}];

function getUserPicture() {
  var userFirstname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var user = images.find(function (_ref) {
    var firstname = _ref.firstname;
    return firstname === userFirstname;
  });
  return user ? user.img : '';
}

var TeamMember = function TeamMember(_ref2) {
  var _ref2$firstname = _ref2.firstname,
      firstname = _ref2$firstname === void 0 ? '' : _ref2$firstname,
      _ref2$lastname = _ref2.lastname,
      lastname = _ref2$lastname === void 0 ? '' : _ref2$lastname,
      _ref2$profile = _ref2.profile,
      profile = _ref2$profile === void 0 ? '' : _ref2$profile,
      _ref2$profileColor = _ref2.profileColor,
      profileColor = _ref2$profileColor === void 0 ? 'info' : _ref2$profileColor;
  var profileClass = "pull-right label label-".concat(profileColor, " inline m-t-15");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-group-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: getUserPicture(firstname),
    width: "50",
    height: "50"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: profileClass
  }, profile), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, "".concat(firstname, " ").concat(lastname)));
};

TeamMember.displayName = 'TeamMember';
TeamMember.propTypes = {
  picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  firstname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  lastname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  profile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  profileColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['danger', 'warning', 'info', 'success'])
};
/* harmony default export */ __webpack_exports__["default"] = (TeamMember);

/***/ }),

/***/ "./src/front/components/todoList/TodoListDemo.js":
/*!*******************************************************!*\
  !*** ./src/front/components/todoList/TodoListDemo.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _todoList_TodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList/TodoList */ "./src/front/components/todoList/todoList/TodoList.js");
/* harmony import */ var _todoListItem_TodoListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoListItem/TodoListItem */ "./src/front/components/todoList/todoListItem/TodoListItem.js");
/* harmony import */ var _todoListCommands_TodoListCommands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoListCommands/TodoListCommands */ "./src/front/components/todoList/todoListCommands/TodoListCommands.js");
/* harmony import */ var _todoListCommands_TodoListAddTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todoListCommands/TodoListAddTask */ "./src/front/components/todoList/todoListCommands/TodoListAddTask.js");
/* harmony import */ var _todoListCommands_TodoListSeeAllTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todoListCommands/TodoListSeeAllTask */ "./src/front/components/todoList/todoListCommands/TodoListSeeAllTask.js");
/* harmony import */ var _panel_Panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../panel/Panel */ "./src/front/components/panel/Panel.js");








function TodoListDemo() {
  var handlesOnListValidEdit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (id) {
    return function (isChecked) {
      console.log("item validated id: \"".concat(id, "\" is checked: "), isChecked ? 'yes' : 'no');
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_panel_Panel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    hasTitle: true,
    title: 'Todo list',
    sectionCustomClass: "tasks-widget"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todoList_TodoList__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todoListItem_TodoListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "1",
    label: "Director is Modern Dashboard",
    done: false,
    statusLabel: "2 days",
    statusLabelStyle: "label-success",
    onListValidEdit: handlesOnListValidEdit('1')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todoListItem_TodoListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "2",
    label: "Fully Responsive & Bootstrap 3.0.2 Compatible",
    done: false,
    statusLabel: "Done",
    statusLabelStyle: "label-danger",
    onListValidEdit: handlesOnListValidEdit('2')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todoListItem_TodoListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "3",
    label: "Latest Design Concept",
    done: false,
    statusLabel: "Company",
    statusLabelStyle: "label-warning",
    onListValidEdit: handlesOnListValidEdit('3')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todoListItem_TodoListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "4",
    label: "Write well documentation for this theme",
    done: false,
    statusLabel: "3 Days",
    statusLabelStyle: "label-primary",
    onListValidEdit: handlesOnListValidEdit('4')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todoListItem_TodoListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "5",
    label: "Don't bother to download this Dashbord",
    done: false,
    statusLabel: "Now",
    statusLabelStyle: "label-inverse",
    onListValidEdit: handlesOnListValidEdit('5')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todoListItem_TodoListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "6",
    label: "Give feedback for the template",
    done: false,
    statusLabel: "2 Days",
    statusLabelStyle: "label-success",
    onListValidEdit: handlesOnListValidEdit('6')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todoListItem_TodoListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "7",
    label: "Tell your friends about this admin template",
    done: false,
    statusLabel: "Now",
    statusLabelStyle: "label-danger",
    onListValidEdit: handlesOnListValidEdit('7')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todoListCommands_TodoListCommands__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todoListCommands_TodoListAddTask__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todoListCommands_TodoListSeeAllTask__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
}

TodoListDemo.displayName = 'TodoListDemo';
/* harmony default export */ __webpack_exports__["default"] = (TodoListDemo);

/***/ }),

/***/ "./src/front/components/todoList/index.js":
/*!************************************************!*\
  !*** ./src/front/components/todoList/index.js ***!
  \************************************************/
/*! exports provided: TodoList, TodoListItem, TodoListCommands, TodoListAddTask, TodoListSeeAllTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todoList_TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList/TodoList */ "./src/front/components/todoList/todoList/TodoList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoList", function() { return _todoList_TodoList__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _todoListItem_TodoListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoListItem/TodoListItem */ "./src/front/components/todoList/todoListItem/TodoListItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoListItem", function() { return _todoListItem_TodoListItem__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _todoListCommands_TodoListCommands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoListCommands/TodoListCommands */ "./src/front/components/todoList/todoListCommands/TodoListCommands.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoListCommands", function() { return _todoListCommands_TodoListCommands__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _todoListCommands_TodoListAddTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoListCommands/TodoListAddTask */ "./src/front/components/todoList/todoListCommands/TodoListAddTask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoListAddTask", function() { return _todoListCommands_TodoListAddTask__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _todoListCommands_TodoListSeeAllTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todoListCommands/TodoListSeeAllTask */ "./src/front/components/todoList/todoListCommands/TodoListSeeAllTask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoListSeeAllTask", function() { return _todoListCommands_TodoListSeeAllTask__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./src/front/components/todoList/todoList/TodoList.js":
/*!************************************************************!*\
  !*** ./src/front/components/todoList/todoList/TodoList.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var TodoList = function TodoList(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "task-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "task-list"
  }, children));
};

TodoList.displayName = 'TodoList';
TodoList.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TodoList);

/***/ }),

/***/ "./src/front/components/todoList/todoListCommands/TodoListAddTask.js":
/*!***************************************************************************!*\
  !*** ./src/front/components/todoList/todoListCommands/TodoListAddTask.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var TodoListAddTask = function TodoListAddTask() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-success btn-sm pull-left",
    href: "#"
  }, "Add New Tasks");
};

TodoListAddTask.displayName = 'TodoListAddTask';
/* harmony default export */ __webpack_exports__["default"] = (TodoListAddTask);

/***/ }),

/***/ "./src/front/components/todoList/todoListCommands/TodoListCommands.js":
/*!****************************************************************************!*\
  !*** ./src/front/components/todoList/todoListCommands/TodoListCommands.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var TodoListCommands = function TodoListCommands(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " add-task-row"
  }, children);
};

TodoListCommands.displayName = 'TodoListCommands';
TodoListCommands.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TodoListCommands);

/***/ }),

/***/ "./src/front/components/todoList/todoListCommands/TodoListSeeAllTask.js":
/*!******************************************************************************!*\
  !*** ./src/front/components/todoList/todoListCommands/TodoListSeeAllTask.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var TodoListSeeAllTask = function TodoListSeeAllTask() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-default btn-sm pull-right",
    href: "#"
  }, "See All Tasks");
};

TodoListSeeAllTask.displayName = 'TodoListSeeAllTask';
/* harmony default export */ __webpack_exports__["default"] = (TodoListSeeAllTask);

/***/ }),

/***/ "./src/front/components/todoList/todoListItem/TodoListItem.js":
/*!********************************************************************!*\
  !*** ./src/front/components/todoList/todoListItem/TodoListItem.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _todoListItemButtonEdit_TodoListItemButtonEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todoListItemButtonEdit/TodoListItemButtonEdit */ "./src/front/components/todoList/todoListItemButtonEdit/TodoListItemButtonEdit.js");
/* harmony import */ var _todoListItemButtonValid_TodoListItemButtonValid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../todoListItemButtonValid/TodoListItemButtonValid */ "./src/front/components/todoList/todoListItemButtonValid/TodoListItemButtonValid.js");
/* harmony import */ var _todoListItemButtonCancel_TodoListItemButtonCancel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../todoListItemButtonCancel/TodoListItemButtonCancel */ "./src/front/components/todoList/todoListItemButtonCancel/TodoListItemButtonCancel.js");


/* eslint no-console:0 */







function TodoListItem(_ref) {
  var id = _ref.id,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$done = _ref.done,
      done = _ref$done === void 0 ? false : _ref$done,
      _ref$statusLabel = _ref.statusLabel,
      statusLabel = _ref$statusLabel === void 0 ? '' : _ref$statusLabel,
      _ref$statusLabelStyle = _ref.statusLabelStyle,
      statusLabelStyle = _ref$statusLabelStyle === void 0 ? 'label-success' : _ref$statusLabelStyle,
      _ref$onListValidEdit = _ref.onListValidEdit,
      onListValidEdit = _ref$onListValidEdit === void 0 ? function () {} : _ref$onListValidEdit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isChecked = _useState2[0],
      setIsChecked = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      isEditing = _useState4[0],
      setIsEditing = _useState4[1];

  var prevDoneRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    prevDoneRef.current = done;
    setIsChecked(done);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var prevDone = prevDoneRef.current;

    if (done !== prevDone) {
      prevDoneRef.current = done;
      setIsChecked(done);
    }
  }, [done]);
  var setCheckedProp = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (checkedValue) {
    if (checkedValue !== isChecked) {
      setIsChecked(checkedValue);
    }
  }, [isChecked]);
  var handlesOnListEdit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setIsEditing(true);
  }, []);
  var handlesOnListCancelEdit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setIsEditing(false);
  }, []);
  var handlesOnListValidEdit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    onListValidEdit(isChecked);
    setIsEditing(false);
  }, [isChecked]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "task-checkbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    checked: isChecked,
    onChange: setCheckedProp,
    className: "flat-grey list-child"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "task-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "task-title-sp"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "label ".concat(statusLabelStyle)
  }, statusLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pull-right hidden-phone"
  }, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_todoListItemButtonValid_TodoListItemButtonValid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: handlesOnListValidEdit
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_todoListItemButtonCancel_TodoListItemButtonCancel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handlesOnListCancelEdit
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_todoListItemButtonEdit_TodoListItemButtonEdit__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handlesOnListEdit
  }))));
}

TodoListItem.displayName = 'TodoListItem';
TodoListItem.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  done: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  statusLabel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  statusLabelStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['label-success', 'label-danger', 'label-warning', 'label-primary', 'label-inverse']),
  onListValidEdit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (TodoListItem);

/***/ }),

/***/ "./src/front/components/todoList/todoListItemButtonCancel/TodoListItemButtonCancel.js":
/*!********************************************************************************************!*\
  !*** ./src/front/components/todoList/todoListItemButtonCancel/TodoListItemButtonCancel.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function TodoListItemButtonCancel(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-default btn-xs",
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-times"
  }));
}

TodoListItemButtonCancel.displayName = 'TodoListItemButtonCancel';
TodoListItemButtonCancel.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (TodoListItemButtonCancel);

/***/ }),

/***/ "./src/front/components/todoList/todoListItemButtonEdit/TodoListItemButtonEdit.js":
/*!****************************************************************************************!*\
  !*** ./src/front/components/todoList/todoListItemButtonEdit/TodoListItemButtonEdit.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function TodoListItemButtonEdit(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-default btn-xs",
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-pencil"
  }));
}

TodoListItemButtonEdit.displayName = 'TodoListItemButtonEdit';
TodoListItemButtonEdit.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (TodoListItemButtonEdit);

/***/ }),

/***/ "./src/front/components/todoList/todoListItemButtonValid/TodoListItemButtonValid.js":
/*!******************************************************************************************!*\
  !*** ./src/front/components/todoList/todoListItemButtonValid/TodoListItemButtonValid.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var TodoListItemButtonValid = function TodoListItemButtonValid(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-default btn-xs",
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-check"
  }));
};

TodoListItemButtonValid.displayName = 'TodoListItemButtonValid';
TodoListItemButtonValid.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (TodoListItemButtonValid);

/***/ }),

/***/ "./src/front/components/toolTip/Tooltip.js":
/*!*************************************************!*\
  !*** ./src/front/components/toolTip/Tooltip.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/OverlayTrigger */ "./node_modules/react-bootstrap/esm/OverlayTrigger.js");
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Tooltip */ "./node_modules/react-bootstrap/esm/Tooltip.js");




var ToolTip = function ToolTip(_ref) {
  var toolTipId = _ref.toolTipId,
      toolTipContent = _ref.toolTipContent,
      tooltipPlacement = _ref.tooltipPlacement,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_1__["default"], {
    placement: tooltipPlacement,
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: toolTipId
    }, toolTipContent)
  }, children);
};

ToolTip.displayName = 'ToolTip';
ToolTip.defaultProps = {
  tooltipPlacement: 'top'
};
/* harmony default export */ __webpack_exports__["default"] = (ToolTip);

/***/ }),

/***/ "./src/front/components/twitterFeed/TwitterFeed.js":
/*!*********************************************************!*\
  !*** ./src/front/components/twitterFeed/TwitterFeed.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _panel_Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../panel/Panel */ "./src/front/components/panel/Panel.js");
/* harmony import */ var _tweet_Tweet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tweet/Tweet */ "./src/front/components/twitterFeed/tweet/Tweet.js");
/* harmony import */ var _writeNewTweet_WriteNewTweet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./writeNewTweet/WriteNewTweet */ "./src/front/components/twitterFeed/writeNewTweet/WriteNewTweet.js");
/* harmony import */ var _listTweetsContainer_ListTweetsContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listTweetsContainer/ListTweetsContainer */ "./src/front/components/twitterFeed/listTweetsContainer/ListTweetsContainer.js");
/* harmony import */ var _img_Jannie_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/Jannie.png */ "./src/front/img/Jannie.png");
/* harmony import */ var _img_Jannie_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_Jannie_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_Emmet_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/Emmet.png */ "./src/front/img/Emmet.png");
/* harmony import */ var _img_Emmet_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_Emmet_png__WEBPACK_IMPORTED_MODULE_6__);








function DemoTweetMessage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "In hac", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "habitasse"), "platea dictumst. Proin ac nibh rutrum lectus rhoncus eleifend.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "#dev")));
}

DemoTweetMessage.displayName = 'DemoTweetMessage';

var TwitterFeed = function TwitterFeed() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_panel_Panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    hasTitle: true,
    title: 'Twitter Feed'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_writeNewTweet_WriteNewTweet__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_listTweetsContainer_ListTweetsContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tweet_Tweet__WEBPACK_IMPORTED_MODULE_2__["default"], {
    time: '30 min ago',
    author: 'Emmet',
    authorAvatar: _img_Emmet_png__WEBPACK_IMPORTED_MODULE_6___default.a
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DemoTweetMessage, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tweet_Tweet__WEBPACK_IMPORTED_MODULE_2__["default"], {
    time: '35 min ago',
    author: 'Jannie',
    authorAvatar: _img_Jannie_png__WEBPACK_IMPORTED_MODULE_5___default.a
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DemoTweetMessage, null))));
};

TwitterFeed.displayName = 'TwitterFeed';
/* harmony default export */ __webpack_exports__["default"] = (TwitterFeed);

/***/ }),

/***/ "./src/front/components/twitterFeed/index.js":
/*!***************************************************!*\
  !*** ./src/front/components/twitterFeed/index.js ***!
  \***************************************************/
/*! exports provided: Tweet, WriteNewTweet, ListTweetsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tweet_Tweet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tweet/Tweet */ "./src/front/components/twitterFeed/tweet/Tweet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tweet", function() { return _tweet_Tweet__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _writeNewTweet_WriteNewTweet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./writeNewTweet/WriteNewTweet */ "./src/front/components/twitterFeed/writeNewTweet/WriteNewTweet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WriteNewTweet", function() { return _writeNewTweet_WriteNewTweet__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _listTweetsContainer_ListTweetsContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listTweetsContainer/ListTweetsContainer */ "./src/front/components/twitterFeed/listTweetsContainer/ListTweetsContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListTweetsContainer", function() { return _listTweetsContainer_ListTweetsContainer__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/front/components/twitterFeed/listTweetsContainer/ListTweetsContainer.js":
/*!*************************************************************************************!*\
  !*** ./src/front/components/twitterFeed/listTweetsContainer/ListTweetsContainer.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var ListTweetsContainer = function ListTweetsContainer(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "media-list"
  }, children);
};

ListTweetsContainer.displayName = 'ListTweetsContainer';
ListTweetsContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ListTweetsContainer);

/***/ }),

/***/ "./src/front/components/twitterFeed/tweet/Tweet.js":
/*!*********************************************************!*\
  !*** ./src/front/components/twitterFeed/tweet/Tweet.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Tweet = function Tweet(_ref) {
  var time = _ref.time,
      author = _ref.author,
      authorAvatar = _ref.authorAvatar,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "media"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "pull-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: authorAvatar,
    alt: "Avatar",
    className: "img-circle",
    width: "64",
    height: "64"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "media-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-muted pull-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, time))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, author)), children));
};

Tweet.displayName = 'Tweet';
Tweet.propTypes = {
  time: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  author: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  authorAvatar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Tweet);

/***/ }),

/***/ "./src/front/components/twitterFeed/writeNewTweet/WriteNewTweet.js":
/*!*************************************************************************!*\
  !*** ./src/front/components/twitterFeed/writeNewTweet/WriteNewTweet.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function WriteNewTweet() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "twt-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "#",
    method: "post"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    className: "form-control",
    name: "profile-tweet",
    placeholder: "Share something on Twitter..",
    rows: "3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "clearfix"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-sm btn-primary pull-right",
    type: "submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-twitter"
  }), "Tweet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-link btn-icon fa fa-location-arrow",
    "data-original-title": "Add Location",
    "data-placement": "bottom",
    "data-toggle": "tooltip",
    href: "#",
    style: {
      textDecoration: 'none'
    },
    title: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-link btn-icon fa fa-camera",
    "data-original-title": "Add Photo",
    "data-placement": "bottom",
    "data-toggle": "tooltip",
    href: "#",
    style: {
      textDecoration: 'none'
    },
    title: ""
  }))));
}

WriteNewTweet.displayName = 'WriteNewTweet';
/* harmony default export */ __webpack_exports__["default"] = (WriteNewTweet);

/***/ }),

/***/ "./src/front/components/workProgress/WorkProgress.js":
/*!***********************************************************!*\
  !*** ./src/front/components/workProgress/WorkProgress.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _workProgressPanel_WorkProgressPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workProgressPanel/WorkProgressPanel */ "./src/front/components/workProgress/workProgressPanel/WorkProgressPanel.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./src/front/components/index.js");



/* eslint-disable react/jsx-key */

var headers = ['#', 'Project', 'Manager', 'Deadline', 'Status', 'Progress'];
var content = [['1', 'Facebook', 'Mark', '10/10/2014', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "label label-danger"
}, "in progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "badge badge-info"
}, "50%")], ['2', 'Twitter', 'Evan', '10/8/2014', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "label label-success"
}, "completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "badge badge-success"
}, "100%")], ['3', 'Google', 'Larry', '10/12/2014', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "label label-warning"
}, "in progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "badge badge-warning"
}, "75%")], ['4', 'LinkedIn', 'Allen', '10/01/2015', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "label label-info"
}, "in progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "badge badge-info"
}, "65%")], ['5', 'Tumblr', 'David', '01/11/2014', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "label label-warning"
}, "in progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "badge badge-danger"
}, "95%")], ['6', 'Tesla', 'Musk', '01/11/2014', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "label label-info"
}, "in progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "badge badge-success"
}, "95%")], ['7', 'Ghost', 'XXX', '01/11/2014', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "label label-info"
}, "in progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "badge badge-success"
}, "95%")]];
/* eslint-enable react/jsx-key */

var WorkProgress = function WorkProgress() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_workProgressPanel_WorkProgressPanel__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Table"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["TableHeader"], null, headers.map(function (header, headerIdx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["TableCol"], {
      key: headerIdx
    }, header);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["TableBody"], null, content.map(function (contentRow, contentRowIdx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["TableRow"], {
      key: contentRowIdx
    }, contentRow.map(function (contentColumn, contentColumnIdx) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["TableCol"], {
        key: contentColumnIdx
      }, contentColumn);
    }));
  }))));
};

WorkProgress.displayName = 'WorkProgress';
/* harmony default export */ __webpack_exports__["default"] = (WorkProgress);

/***/ }),

/***/ "./src/front/components/workProgress/workProgressPanel/WorkProgressPanel.js":
/*!**********************************************************************************!*\
  !*** ./src/front/components/workProgress/workProgressPanel/WorkProgressPanel.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var WorkProgressPanel = function WorkProgressPanel(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Work Progress' : _ref$title,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "panel-heading"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-body table-responsive"
  }, children));
};

WorkProgressPanel.displayName = 'WorkProgressPanel';
WorkProgressPanel.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (WorkProgressPanel);

/***/ }),

/***/ "./src/front/config/appConfig.js":
/*!***************************************!*\
  !*** ./src/front/config/appConfig.js ***!
  \***************************************/
/*! exports provided: appConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appConfig", function() { return appConfig; });
var appConfig = Object.freeze({
  APP_NAME: 'reactDirector',
  // dev mode to mock async data for instance
  DEV_MODE: true,
  // When you need some kind "console spam" to debug
  DEBUG_ENABLED: true,
  // fake delay to mock async
  FAKE_ASYNC_DELAY: 1000,
  CONNECTION_STATUS: {
    online: 'online',
    disconnected: 'disconnected'
  },
  // #region API configs
  earningGraph: {
    data: {
      API: 'api/earnigGraphData'
    }
  },
  teamMates: {
    data: {
      API: 'api/teamMates'
    }
  },
  userInfos: {
    data: {
      API: 'api/userInfos'
    }
  },
  // #endregion
  HELLO_WORD: 'Hello'
});

/***/ }),

/***/ "./src/front/config/index.js":
/*!***********************************!*\
  !*** ./src/front/config/index.js ***!
  \***********************************/
/*! exports provided: appConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appConfig */ "./src/front/config/appConfig.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appConfig", function() { return _appConfig__WEBPACK_IMPORTED_MODULE_0__["appConfig"]; });



/***/ }),

/***/ "./src/front/containers/app/App.js":
/*!*****************************************!*\
  !*** ./src/front/containers/app/App.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./src/front/components/index.js");
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views */ "./src/front/views/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./src/front/config/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./src/front/models/index.js");
/* harmony import */ var _routes_MainRoutes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../routes/MainRoutes */ "./src/front/routes/MainRoutes.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth */ "./src/front/services/auth/index.js");
/* harmony import */ var _img_user_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../img/user.jpg */ "./src/front/img/user.jpg");
/* harmony import */ var _img_user_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_user_jpg__WEBPACK_IMPORTED_MODULE_9__);

// #region imports








 // #endregion

function App(_ref) {
  var history = _ref.history,
      userInfos = _ref.userInfos,
      userIsConnected = _ref.userIsConnected,
      sideMenuIsCollapsed = _ref.sideMenuIsCollapsed,
      currentView = _ref.currentView,
      _ref$actions = _ref.actions,
      fetchUserInfoDataIfNeeded = _ref$actions.fetchUserInfoDataIfNeeded,
      getSideMenuCollpasedStateFromLocalStorage = _ref$actions.getSideMenuCollpasedStateFromLocalStorage,
      toggleSideMenu = _ref$actions.toggleSideMenu;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_config__WEBPACK_IMPORTED_MODULE_5__["appConfig"].APP_NAME),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 1),
      appName = _useState2[0];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_config__WEBPACK_IMPORTED_MODULE_5__["appConfig"].CONNECTION_STATUS),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 1),
      connectionStatus = _useState4[0];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_config__WEBPACK_IMPORTED_MODULE_5__["appConfig"].HELLO_WORD),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 1),
      helloWord = _useState6[0];
  /* elsin-disable */


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetchUserInfoDataIfNeeded();
    getSideMenuCollpasedStateFromLocalStorage();
  }, []);
  /* elsin-enable */

  var userFullName = "".concat(userInfos.firstname, " ").concat(userInfos.lastname.toUpperCase());
  var handlesMenuButtonClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
    event && event.preventDefault();
    toggleSideMenu();
  }, [toggleSideMenu]);
  var handlesOnLogout = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
    event && event.preventDefault();
    event && event.stopPropagation(); // clear all application storage

    _services_auth__WEBPACK_IMPORTED_MODULE_8__["default"].clearAllAppStorage(); // redirect to login

    history.push('/login');
  }, [history]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    appName: appName,
    userLogin: userInfos.login,
    userFirstname: userInfos.firstname,
    userLastname: userInfos.lastname,
    userPicture: _img_user_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    showPicture: userInfos.showPicture,
    currentView: currentView,
    toggleSideMenu: handlesMenuButtonClick,
    onLogout: handlesOnLogout
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "wrapper row-offcanvas row-offcanvas-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["AsideLeft"], {
    isAnimated: true,
    sideMenu: _models__WEBPACK_IMPORTED_MODULE_6__["navigation"].sideMenu,
    currentView: currentView,
    isCollapsed: sideMenuIsCollapsed,
    helloWord: helloWord,
    connectionStatus: connectionStatus,
    userIsConnected: userIsConnected,
    username: userFullName,
    userPicture: userInfos.picture,
    showPicture: userInfos.showPicture
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["AsideRight"], {
    isAnimated: true,
    isExpanded: sideMenuIsCollapsed
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes_MainRoutes__WEBPACK_IMPORTED_MODULE_7__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_views__WEBPACK_IMPORTED_MODULE_4__["Modals"], null));
}

App.displayName = 'App';
App.defaultProps = {
  actions: {
    fetchUserInfoDataIfNeeded: function fetchUserInfoDataIfNeeded() {},
    getSideMenuCollpasedStateFromLocalStorage: function getSideMenuCollpasedStateFromLocalStorage() {},
    toggleSideMenu: function toggleSideMenu() {}
  }
};
App.propTypes = {
  // react-router 4:
  match: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  sideMenuIsCollapsed: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  userInfos: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    login: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    firstname: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    lastname: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    picture: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    showPicture: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
  }),
  userIsConnected: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  currentView: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    enterHome: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    leaveHome: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    fetchEarningGraphDataIfNeeded: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    fetchUserInfoDataIfNeeded: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    openSideMenu: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    closeSideMenu: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    toggleSideMenu: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
  })
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/front/containers/app/index.js":
/*!*******************************************!*\
  !*** ./src/front/containers/app/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _redux_modules_views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/modules/views */ "./src/front/redux/modules/views.js");
/* harmony import */ var _redux_modules_userInfos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/modules/userInfos */ "./src/front/redux/modules/userInfos.js");
/* harmony import */ var _redux_modules_sideMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/modules/sideMenu */ "./src/front/redux/modules/sideMenu.js");
/* harmony import */ var _redux_modules_earningGraph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/modules/earningGraph */ "./src/front/redux/modules/earningGraph.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App */ "./src/front/containers/app/App.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView,
    sideMenuIsCollapsed: state.sideMenu.isCollapsed,
    userInfos: state.userInfos.data,
    userIsConnected: state.userInfos.isConnected
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _redux_modules_views__WEBPACK_IMPORTED_MODULE_4__), _redux_modules_userInfos__WEBPACK_IMPORTED_MODULE_5__), _redux_modules_sideMenu__WEBPACK_IMPORTED_MODULE_6__), _redux_modules_earningGraph__WEBPACK_IMPORTED_MODULE_7__), dispatch)
  };
}; // we use here compose (from redux) just for conveniance (since compose(f,h, g)(args) looks better than f(g(h(args))))


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"], // IMPORTANT: witRouter is "needed here" to avoid blocking routing:
Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps))(_App__WEBPACK_IMPORTED_MODULE_8__["default"]));

/***/ }),

/***/ "./src/front/img/Damon.png":
/*!*********************************!*\
  !*** ./src/front/img/Damon.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/front/img/Emma.png":
/*!********************************!*\
  !*** ./src/front/img/Emma.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/front/img/Emmet.png":
/*!*********************************!*\
  !*** ./src/front/img/Emmet.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/front/img/Jannie.png":
/*!**********************************!*\
  !*** ./src/front/img/Jannie.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/front/img/Joe.png":
/*!*******************************!*\
  !*** ./src/front/img/Joe.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/front/img/user.jpg":
/*!********************************!*\
  !*** ./src/front/img/user.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/front/index.js":
/*!****************************!*\
  !*** ./src/front/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_director_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style/director-style.css */ "./src/front/style/director-style.css");
/* harmony import */ var _style_director_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_director_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_highlight_darkula_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style/highlight/darkula.css */ "./src/front/style/highlight/darkula.css");
/* harmony import */ var _style_highlight_darkula_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_highlight_darkula_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_index_style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style/index.style.scss */ "./src/front/style/index.style.scss");
/* harmony import */ var _style_index_style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_index_style_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Root */ "./src/front/Root.js");
// flow
// #region imports










 // #endregion
// #region polyfills initializations
// smoothscroll polyfill

smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_5___default.a.polyfill(); // force polyfill (even if browser partially implements it)

window.__forceSmoothScrollPolyfill__ = true; // #endregion
// #region constants

var ELEMENT_TO_BOOTSTRAP = 'root';
var BootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP); // #endregion

function renderApp(RootComponent) {
  return Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_4__["AppContainer"], {
    warnings: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RootComponent, null)), BootstrapedElement);
}

renderApp(_Root__WEBPACK_IMPORTED_MODULE_10__["default"]);

if (false) {}

/***/ }),

/***/ "./src/front/models/earningGraphMockData.js":
/*!**************************************************!*\
  !*** ./src/front/models/earningGraphMockData.js ***!
  \**************************************************/
/*! exports provided: earningGraphMockData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "earningGraphMockData", function() { return earningGraphMockData; });
var earningGraphMockData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    fillColor: 'rgba(220,220,220,0.2)',
    strokeColor: 'rgba(220,220,220,1)',
    pointColor: 'rgba(220,220,220,1)',
    pointStrokeColor: '#fff',
    pointHighlightFill: '#fff',
    pointHighlightStroke: 'rgba(220,220,220,1)',
    data: [65, 59, 80, 81, 56, 55, 40]
  }, {
    label: 'My Second dataset',
    fillColor: 'rgba(151,187,205,0.2)',
    strokeColor: 'rgba(151,187,205,1)',
    pointColor: 'rgba(151,187,205,1)',
    pointStrokeColor: '#fff',
    pointHighlightFill: '#fff',
    pointHighlightStroke: 'rgba(151,187,205,1)',
    data: [28, 48, 40, 19, 86, 27, 90]
  }]
};

/***/ }),

/***/ "./src/front/models/index.js":
/*!***********************************!*\
  !*** ./src/front/models/index.js ***!
  \***********************************/
/*! exports provided: navigation, earningGraphMockData, userInfosMockData, teamMatesMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ "./src/front/models/navigation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigation", function() { return _navigation__WEBPACK_IMPORTED_MODULE_0__["navigation"]; });

/* harmony import */ var _earningGraphMockData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./earningGraphMockData */ "./src/front/models/earningGraphMockData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "earningGraphMockData", function() { return _earningGraphMockData__WEBPACK_IMPORTED_MODULE_1__["earningGraphMockData"]; });

/* harmony import */ var _userInfosMock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userInfosMock */ "./src/front/models/userInfosMock.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userInfosMockData", function() { return _userInfosMock__WEBPACK_IMPORTED_MODULE_2__["userInfosMockData"]; });

/* harmony import */ var _teamMatesMock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teamMatesMock */ "./src/front/models/teamMatesMock.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "teamMatesMock", function() { return _teamMatesMock__WEBPACK_IMPORTED_MODULE_3__["teamMatesMock"]; });







/***/ }),

/***/ "./src/front/models/navigation.js":
/*!****************************************!*\
  !*** ./src/front/models/navigation.js ***!
  \****************************************/
/*! exports provided: navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigation", function() { return navigation; });
var navigation = Object.freeze({
  brand: 'reactDirectorAdmin',
  leftLinks: [],
  rightLinks: [{
    label: 'Home',
    link: '/',
    view: 'home',
    isRouteBtn: true
  }, {
    label: 'About',
    link: '/about',
    view: 'about',
    isRouteBtn: true
  }],
  sideMenu: [// group menu #1
  {
    id: 1,
    group: 'Dashboard  ',
    menus: [{
      name: 'Dashboard preview',
      linkTo: '/',
      faIconName: 'fa-eye'
    }, {
      name: 'StatsCard',
      linkTo: '/Dashboard/statsCard',
      faIconName: 'fa-check-square-o'
    }, {
      name: 'EarningGraph',
      linkTo: '/Dashboard/earningGraph',
      faIconName: 'fa-area-chart'
    }, {
      name: 'Notifications',
      linkTo: '/Dashboard/notifications',
      faIconName: 'fa-bell'
    }, {
      name: 'Work progress',
      linkTo: '/Dashboard/workProgress',
      faIconName: 'fa-briefcase'
    }, {
      name: 'Twitter feed',
      linkTo: '/Dashboard/twitterFeed',
      faIconName: 'fa-twitter'
    }, {
      name: 'Team Mates',
      linkTo: '/Dashboard/teamMates',
      faIconName: 'fa-user'
    }, {
      name: 'Todo list',
      linkTo: '/Dashboard/todoList',
      faIconName: 'fa-check'
    }]
  }, // group menu #2
  {
    id: 2,
    group: 'General',
    menus: [{
      name: 'General preview',
      linkTo: '/general',
      faIconName: 'fa-eye'
    }, {
      name: 'Breadcrumb',
      linkTo: '/general/breadcrumb',
      faIconName: 'fa-bars'
    }, {
      name: 'Stat',
      linkTo: '/general/stat',
      faIconName: 'fa-bar-chart'
    }, {
      name: 'Basic progress bars',
      linkTo: '/general/basicProgressBars',
      faIconName: 'fa-tasks'
    }, {
      name: 'Tab panels',
      linkTo: '/general/tabPanels',
      faIconName: 'fa-columns'
    }, {
      name: 'Striped progress bar',
      linkTo: '/general/stripedProgressBars',
      faIconName: 'fa-tasks'
    }, {
      name: 'Alerts',
      linkTo: '/general/alerts',
      faIconName: 'fa-exclamation-triangle'
    }, {
      name: 'Pagination',
      linkTo: '/general/pagination',
      faIconName: 'fa-sort'
    }, {
      name: 'Default buttons',
      linkTo: '/general/defaultButtons',
      faIconName: 'fa-hand-o-up'
    }]
  }, // group menu #3
  {
    id: 3,
    group: 'BasicElements',
    menus: [{
      name: 'Basic Elements preview',
      linkTo: '/basicElements',
      faIconName: 'fa-eye'
    }]
  }, // group menu #4
  {
    id: 4,
    group: 'SimpleTables',
    menus: [{
      name: 'Simple tables preview',
      linkTo: '/simpleTables',
      faIconName: 'fa-eye'
    }]
  }]
});

/***/ }),

/***/ "./src/front/models/teamMatesMock.js":
/*!*******************************************!*\
  !*** ./src/front/models/teamMatesMock.js ***!
  \*******************************************/
/*! exports provided: teamMatesMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamMatesMock", function() { return teamMatesMock; });
var teamMatesMock = [{
  picture: '/public/img/26115.jpg',
  firstname: 'Damon',
  lastname: 'Parker',
  profile: 'Admin',
  profileColor: 'danger'
}, {
  picture: '/public/img/26115.jpg',
  firstname: 'Joe',
  lastname: 'Waston',
  profile: 'Member',
  profileColor: 'warning'
}, {
  picture: '/public/img/26115.jpg',
  firstname: 'Jannie',
  lastname: 'Davis',
  profile: 'Editor',
  profileColor: 'warning'
}, {
  picture: '/public/img/26115.jpg',
  firstname: 'Emma',
  lastname: 'Welson',
  profile: 'Editor',
  profileColor: 'success'
}, {
  picture: '/public/img/26115.jpg',
  firstname: 'Emma',
  lastname: 'Welson',
  profile: 'Editor',
  profileColor: 'info'
}];

/***/ }),

/***/ "./src/front/models/userInfosMock.js":
/*!*******************************************!*\
  !*** ./src/front/models/userInfosMock.js ***!
  \*******************************************/
/*! exports provided: userInfosMockData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userInfosMockData", function() { return userInfosMockData; });
var userInfosMockData = {
  login: 'johnDoeIsNotAffraid',
  firstname: 'John',
  lastname: 'Doe',
  picture: __webpack_require__(/*! ../img/user.jpg */ "./src/front/img/user.jpg"),
  // or from an url: 'https://placeimg.com/120/120/people', // or from a relative path (NOTE: this path like public/.. may not be availaible when in dev hot reload!) './public/img/user.jpg',
  showPicture: true,
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZW1vIiwiaWF0IjoxNTAyMzA3MzU0LCJleHAiOjE3MjMyMzIxNTQsImF1ZCI6ImRlbW8tZGVtbyIsInN1YiI6ImRlbW8iLCJHaXZlbk5hbWUiOiJKb2huIiwiU3VybmFtZSI6IkRvZSIsIkVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJSb2xlIjpbIlN1cGVyIGNvb2wgZGV2IiwibWFnaWMgbWFrZXIiXX0.6FjgLCypaqmRp4tDjg_idVKIzQw16e-z_rjA3R94IqQ'
};
/* harmony default export */ __webpack_exports__["default"] = (userInfosMockData);

/***/ }),

/***/ "./src/front/redux/middleware/fetchMiddleware.js":
/*!*******************************************************!*\
  !*** ./src/front/redux/middleware/fetchMiddleware.js ***!
  \*******************************************************/
/*! exports provided: FETCH_MOCK, FETCH, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MOCK", function() { return FETCH_MOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH", function() { return FETCH; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var FETCH_MOCK = 'FETCH_MOCK';
var FETCH = 'FETCH'; //
// FETCH_MOCK mode
// in any action just add fetch object like:
// {
//  fetch: {
//    type: 'FETCH_MOCK',
//    actionTypes: {
//      request: 'TYPE_FOR_REQUEST',
//      success: 'TYPE_FOR_RECEIVED',
//      fail: 'TYPE_FOR_ERROR',
//    },
//    mockResult: any
//  }
// }
//
// FETCH mode
// in any action just add fetch object like:
// {
//  fetch: {
//    type: 'FETCH',
//    actionTypes: {
//      request: 'TYPE_FOR_REQUEST',
//      success: 'TYPE_FOR_RECEIVED',
//      fail: 'TYPE_FOR_ERROR',
//    },
//    url: 'an url',
//    method: 'get',  // lower case, one of 'get', 'post'...
//    headers: {}     // OPTIONAL CONTENT like: data: { someprop: 'value ...}
//    options: {}     // OPTIONAL CONTENT like: Authorization: 'Bearer _A_TOKEN_'
//  }
// }
//
//
//
//

var fetchMiddleware = function fetchMiddleware(store) {
  return function (next) {
    return function (action) {
      if (!action.fetch) {
        return next(action);
      }

      if (!action.fetch.type || !action.fetch.type === FETCH_MOCK || !action.fetch.type === FETCH) {
        return next(action);
      }

      if (!action.fetch.actionTypes) {
        return next(action);
      }
      /**
       * fetch mock
       * @type {[type]}
       */


      if (action.fetch.type === FETCH_MOCK) {
        if (!action.fetch.mockResult) {
          throw new Error('Fetch middleware require a mockResult payload when type is "FETCH_MOCK"');
        }

        var _action$fetch = action.fetch,
            _action$fetch$actionT = _action$fetch.actionTypes,
            request = _action$fetch$actionT.request,
            success = _action$fetch$actionT.success,
            mockResult = _action$fetch.mockResult; // request

        store.dispatch({
          type: request
        }); // received successful for mock

        return Promise.resolve(store.dispatch({
          type: success,
          payload: mockResult
        }));
      }

      if (action.fetch.type === FETCH) {
        var _action$fetch2 = action.fetch,
            _action$fetch2$action = _action$fetch2.actionTypes,
            _request = _action$fetch2$action.request,
            _success = _action$fetch2$action.success,
            fail = _action$fetch2$action.fail,
            url = _action$fetch2.url,
            method = _action$fetch2.method,
            headers = _action$fetch2.headers,
            options = _action$fetch2.options; // request

        store.dispatch({
          type: _request
        }); // fetch server (success or fail)
        // returns a Promise

        return axios__WEBPACK_IMPORTED_MODULE_1___default.a.request(_objectSpread({
          method: method,
          url: url,
          withCredentials: true,
          headers: _objectSpread({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Acces-Control-Allow-Origin': '*'
          }, headers)
        }, options)).then(function (data) {
          return store.dispatch({
            type: _success,
            payload: data
          });
        }).catch(function (err) {
          store.dispatch({
            type: fail,
            error: err
          });
          return Promise.reject(err);
        });
      }

      return next(action);
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (fetchMiddleware);

/***/ }),

/***/ "./src/front/redux/modules/actions.js":
/*!********************************************!*\
  !*** ./src/front/redux/modules/actions.js ***!
  \********************************************/
/*! exports provided: fetchEarningGraphDataIfNeeded, openSideMenu, closeSideMenu, toggleSideMenu, getSideMenuCollpasedStateFromLocalStorage, fetchTeamMatesDataIfNeeded, fetchUserInfoDataIfNeeded, enterHome, leaveHome, enterSimpleTables, leaveSimpleTables, enterBasicElements, leaveBasicElements, enterGeneral, leaveGeneral, enterPageNotFound, leavePageNotFound, enterStatsCard, leaveStatsCard, enterEarningGraph, leaveEarningGraph, enterNotifications, leaveNotifications, enterWorkProgress, leaveWorkProgress, enterTwitterFeed, leaveTwitterFeed, enterTeamMatesView, leaveTeamMatesView, enterTodoListView, leaveTodoListView, enterBreadcrumb, leaveBreadcrumb, enterStat, leaveStat, enterBasicProgressBar, leaveBasicProgressBar, enterTabPanel, leaveTabPanel, enterStripedProgressBar, leaveStripedProgressBar, enterAlert, leaveAlert, enterPagination, leavePagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _earningGraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./earningGraph */ "./src/front/redux/modules/earningGraph.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchEarningGraphDataIfNeeded", function() { return _earningGraph__WEBPACK_IMPORTED_MODULE_0__["fetchEarningGraphDataIfNeeded"]; });

/* harmony import */ var _sideMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sideMenu */ "./src/front/redux/modules/sideMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openSideMenu", function() { return _sideMenu__WEBPACK_IMPORTED_MODULE_1__["openSideMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeSideMenu", function() { return _sideMenu__WEBPACK_IMPORTED_MODULE_1__["closeSideMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleSideMenu", function() { return _sideMenu__WEBPACK_IMPORTED_MODULE_1__["toggleSideMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSideMenuCollpasedStateFromLocalStorage", function() { return _sideMenu__WEBPACK_IMPORTED_MODULE_1__["getSideMenuCollpasedStateFromLocalStorage"]; });

/* harmony import */ var _teamMates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teamMates */ "./src/front/redux/modules/teamMates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchTeamMatesDataIfNeeded", function() { return _teamMates__WEBPACK_IMPORTED_MODULE_2__["fetchTeamMatesDataIfNeeded"]; });

/* harmony import */ var _userInfos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userInfos */ "./src/front/redux/modules/userInfos.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchUserInfoDataIfNeeded", function() { return _userInfos__WEBPACK_IMPORTED_MODULE_3__["fetchUserInfoDataIfNeeded"]; });

/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views */ "./src/front/redux/modules/views.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterHome", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["enterHome"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leaveHome", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["leaveHome"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterSimpleTables", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["enterSimpleTables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leaveSimpleTables", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["leaveSimpleTables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterBasicElements", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["enterBasicElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leaveBasicElements", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["leaveBasicElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterGeneral", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["enterGeneral"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leaveGeneral", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["leaveGeneral"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterPageNotFound", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["enterPageNotFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leavePageNotFound", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["leavePageNotFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterStatsCard", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["enterStatsCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leaveStatsCard", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["leaveStatsCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterEarningGraph", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["enterEarningGraph"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leaveEarningGraph", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["leaveEarningGraph"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterNotifications", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["enterNotifications"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leaveNotifications", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["leaveNotifications"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterWorkProgress", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["enterWorkProgress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leaveWorkProgress", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["leaveWorkProgress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterTwitterFeed", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["enterTwitterFeed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leaveTwitterFeed", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["leaveTwitterFeed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterTeamMatesView", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["enterTeamMatesView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leaveTeamMatesView", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["leaveTeamMatesView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterTodoListView", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["enterTodoListView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leaveTodoListView", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["leaveTodoListView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterBreadcrumb", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["enterBreadcrumb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leaveBreadcrumb", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["leaveBreadcrumb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterStat", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["enterStat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leaveStat", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["leaveStat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterBasicProgressBar", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["enterBasicProgressBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leaveBasicProgressBar", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["leaveBasicProgressBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterTabPanel", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["enterTabPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leaveTabPanel", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["leaveTabPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterStripedProgressBar", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["enterStripedProgressBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leaveStripedProgressBar", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["leaveStripedProgressBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterAlert", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["enterAlert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leaveAlert", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["leaveAlert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterPagination", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["enterPagination"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leavePagination", function() { return _views__WEBPACK_IMPORTED_MODULE_4__["leavePagination"]; });

// flow
// earningGraph:
 // sideMenu:

 // teamMates:

 // userInfos:

 // views:



/***/ }),

/***/ "./src/front/redux/modules/earningGraph.js":
/*!*************************************************!*\
  !*** ./src/front/redux/modules/earningGraph.js ***!
  \*************************************************/
/*! exports provided: default, fetchEarningGraphDataIfNeeded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return earningGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchEarningGraphDataIfNeeded", function() { return fetchEarningGraphDataIfNeeded; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./src/front/config/index.js");
/* harmony import */ var _services_API__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/API */ "./src/front/services/API/index.js");
/* harmony import */ var _services_fetchMocks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/fetchMocks */ "./src/front/services/fetchMocks/index.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// #region imports




// #endregion
// #region  constants
var REQUEST_EARNING_GRAPH_DATA = 'REQUEST_EARNING_GRAPH_DATA';
var RECEIVED_EARNING_GRAPH_DATA = 'RECEIVED_EARNING_GRAPH_DATA';
var ERROR_EARNING_GRAPH_DATA = 'ERROR_EARNING_GRAPH_DATA'; // #endregion
// #region flow types

// #endregion

/*
  reducer
 */
var initialState = {
  isFetching: false,
  labels: [],
  datasets: [],
  time: ''
};
function earningGraph() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_EARNING_GRAPH_DATA':
      {
        var time = action.time;
        return _objectSpread(_objectSpread({}, state), {}, {
          isFetching: true,
          time: time
        });
      }

    case 'RECEIVED_EARNING_GRAPH_DATA':
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        labels: action.labels,
        datasets: action.datasets,
        time: action.time
      });

    case 'ERROR_EARNING_GRAPH_DATA':
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        time: action.time
      });

    default:
      return state;
  }
}
/*
  action creators
 */

function fetchEarningGraphDataIfNeeded() {
  return function (dispatch, getState) {
    if (shouldFetchEarningData(getState())) {
      return dispatch(fetchEarningGraphData());
    }

    return Promise.resolve();
  };
}

function requestEarningGraphData() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date());
  return {
    type: REQUEST_EARNING_GRAPH_DATA,
    time: time
  };
}

function receivedEarningGraphData(data) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date());
  return {
    type: RECEIVED_EARNING_GRAPH_DATA,
    labels: _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(data.labels),
    datasets: _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(data.datasets),
    time: time
  };
}

function errorEarningGraphData(error) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date());
  return {
    type: ERROR_EARNING_GRAPH_DATA,
    error: error,
    time: time
  };
}

function fetchEarningGraphData() {
  return /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(dispatch) {
      var _data, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              dispatch(requestEarningGraphData());

              if (!_config__WEBPACK_IMPORTED_MODULE_5__["appConfig"].DEV_MODE) {
                _context.next = 7;
                break;
              }

              _context.next = 5;
              return Object(_services_fetchMocks__WEBPACK_IMPORTED_MODULE_7__["fetchMockEarningGraphData"])();

            case 5:
              _data = _context.sent;
              return _context.abrupt("return", dispatch(receivedEarningGraphData(_data)));

            case 7:
              _context.next = 9;
              return Object(_services_API__WEBPACK_IMPORTED_MODULE_6__["getEarningGraphData"])();

            case 9:
              data = _context.sent;
              return _context.abrupt("return", dispatch(receivedEarningGraphData(data)));

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              dispatch(errorEarningGraphData(_context.t0));
              return _context.abrupt("return", Promise.reject(_context.t0));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

function shouldFetchEarningData(state) {
  var isFetching = state.earningGraph.isFetching; // just check wether fetching (assuming data could be refreshed and should not persist in store)

  return !isFetching;
}

/***/ }),

/***/ "./src/front/redux/modules/reducers.js":
/*!*********************************************!*\
  !*** ./src/front/redux/modules/reducers.js ***!
  \*********************************************/
/*! exports provided: reducers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var _earningGraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./earningGraph */ "./src/front/redux/modules/earningGraph.js");
/* harmony import */ var _sideMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sideMenu */ "./src/front/redux/modules/sideMenu.js");
/* harmony import */ var _userInfos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userInfos */ "./src/front/redux/modules/userInfos.js");
/* harmony import */ var _teamMates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teamMates */ "./src/front/redux/modules/teamMates.js");
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views */ "./src/front/redux/modules/views.js");
/* harmony import */ var _userAuth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userAuth */ "./src/front/redux/modules/userAuth.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









var reducers = {
  earningGraph: _earningGraph__WEBPACK_IMPORTED_MODULE_3__["default"],
  sideMenu: _sideMenu__WEBPACK_IMPORTED_MODULE_4__["default"],
  userInfos: _userInfos__WEBPACK_IMPORTED_MODULE_5__["default"],
  teamMates: _teamMates__WEBPACK_IMPORTED_MODULE_6__["default"],
  views: _views__WEBPACK_IMPORTED_MODULE_7__["default"],
  userAuth: _userAuth__WEBPACK_IMPORTED_MODULE_8__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (function (history) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(_objectSpread({
    router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["connectRouter"])(history)
  }, reducers));
});

/***/ }),

/***/ "./src/front/redux/modules/sideMenu.js":
/*!*********************************************!*\
  !*** ./src/front/redux/modules/sideMenu.js ***!
  \*********************************************/
/*! exports provided: default, getSideMenuCollpasedStateFromLocalStorage, openSideMenu, closeSideMenu, toggleSideMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sideMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSideMenuCollpasedStateFromLocalStorage", function() { return getSideMenuCollpasedStateFromLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSideMenu", function() { return openSideMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSideMenu", function() { return closeSideMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleSideMenu", function() { return toggleSideMenu; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// #region imports

// #endregion
// #region constants
var SIDEMU_IS_COLLAPSED_KEY = 'SIDEMENU_IS_OPENED_KEY';
var SIDEMU_IS_COLLAPSED_VALUE = true;
var SIDEMU_IS_NOT_COLLAPSED_VALUE = false;
var READ_LOCALSTORAGE = false;
var WRITE_LOCALSTORAGE = true;
var OPEN_SIDE_MENU = 'OPEN_SIDE_MENU';
var CLOSE_SIDE_MENU = 'CLOSE_SIDE_MENU';
var GET_SIDE_MENU_TOGGLE_STATE_FROM_LOCALSTORAGE = 'GET_SIDE_MENU_TOGGLE_STATE_FROM_LOCALSTORAGE'; // #endregion
// #region flow types

// #endregion
var initialState = {
  isCollapsed: false,
  time: ''
};
function sideMenu() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_SIDE_MENU_TOGGLE_STATE_FROM_LOCALSTORAGE:
      {
        var _action$permanentStor = action.permanentStore,
            permanentStore = _action$permanentStor === void 0 ? {
          storeValue: false
        } : _action$permanentStor,
            time = action.time;
        return {
          isCollapsed: Boolean(permanentStore.storeValue),
          time: time
        };
      }

    case OPEN_SIDE_MENU:
      {
        var isCollapsed = action.isCollapsed,
            _time = action.time;
        return _objectSpread(_objectSpread({}, state), {}, {
          isCollapsed: isCollapsed,
          time: _time
        });
      }

    case CLOSE_SIDE_MENU:
      {
        var _isCollapsed = action.isCollapsed,
            _time2 = action.time;
        return _objectSpread(_objectSpread({}, state), {}, {
          isCollapsed: _isCollapsed,
          time: _time2
        });
      }

    default:
      return state;
  }
}
function getSideMenuCollpasedStateFromLocalStorage() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: GET_SIDE_MENU_TOGGLE_STATE_FROM_LOCALSTORAGE,
    time: time,
    // for localStorageManager middleware
    permanentStore: {
      required: true,
      storeKey: SIDEMU_IS_COLLAPSED_KEY,
      storeValue: false,
      // set default to false
      ReadOrWrite: READ_LOCALSTORAGE // write key / value to localStorage

    }
  };
}
function openSideMenu() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: OPEN_SIDE_MENU,
    isCollapsed: false,
    time: time,
    // for localStorageManager middleware
    permanentStore: {
      required: true,
      storeKey: SIDEMU_IS_COLLAPSED_KEY,
      storeValue: SIDEMU_IS_NOT_COLLAPSED_VALUE,
      ReadOrWrite: WRITE_LOCALSTORAGE // write key / value to localStorage

    }
  };
}
function closeSideMenu() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: CLOSE_SIDE_MENU,
    isCollapsed: true,
    time: time,
    // for localStorageManager middleware
    permanentStore: {
      required: true,
      storeKey: SIDEMU_IS_COLLAPSED_KEY,
      storeValue: SIDEMU_IS_COLLAPSED_VALUE,
      ReadOrWrite: WRITE_LOCALSTORAGE // write key / value to localStorage

    }
  };
}
function toggleSideMenu() {
  return function (dispatch, getState) {
    var state = getState();
    var sideMenuStore = state.sideMenu;

    if (sideMenuStore.isCollapsed) {
      return dispatch(openSideMenu());
    }

    dispatch(closeSideMenu());
  };
}

/***/ }),

/***/ "./src/front/redux/modules/teamMates.js":
/*!**********************************************!*\
  !*** ./src/front/redux/modules/teamMates.js ***!
  \**********************************************/
/*! exports provided: default, fetchTeamMatesDataIfNeeded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return teamMates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTeamMatesDataIfNeeded", function() { return fetchTeamMatesDataIfNeeded; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/front/config/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/front/services/index.js");
/* harmony import */ var _services_API__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/API */ "./src/front/services/API/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/* eslint no-console:0 */

/* eslint consistent-return:0 */




var REQUEST_TEAM_MATES_DATA = 'REQUEST_TEAM_MATES_DATA';
var RECEIVED_TEAM_MATES_DATA = 'RECEIVED_TEAM_MATES_DATA';
var ERROR_TEAM_MATES_DATA = 'ERROR_TEAM_MATES_DATA';
var initialState = {
  isFetching: false,
  data: [],
  time: null
};
function teamMates() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_TEAM_MATES_DATA':
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: action.isFetching,
        time: action.time
      });

    case 'RECEIVED_TEAM_MATES_DATA':
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: action.isFetching,
        data: _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(action.data),
        time: action.time
      });

    case 'ERROR_TEAM_MATES_DATA':
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: action.isFetching,
        time: action.time
      });

    default:
      return state;
  }
}
function fetchTeamMatesDataIfNeeded() {
  return function (dispatch, getState) {
    if (shouldFetchTeamMatesData(getState())) {
      return dispatch(fetchTeamMatesData());
    }
  };
}

function requestTeamMatesData() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : moment__WEBPACK_IMPORTED_MODULE_2___default()().format();
  return {
    type: REQUEST_TEAM_MATES_DATA,
    isFetching: true,
    time: time
  };
}

function receivedTeamMatesData(data) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : moment__WEBPACK_IMPORTED_MODULE_2___default()().format();
  return {
    type: RECEIVED_TEAM_MATES_DATA,
    isFetching: false,
    data: data,
    time: time
  };
}

function errorTeamMatesData() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : moment__WEBPACK_IMPORTED_MODULE_2___default()().format();
  return {
    type: ERROR_TEAM_MATES_DATA,
    isFetching: false,
    time: time
  };
}

function fetchTeamMatesData() {
  return function (dispatch) {
    dispatch(requestTeamMatesData());

    if (_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].DEV_MODE) {
      Object(_services__WEBPACK_IMPORTED_MODULE_4__["fetchMockTeamMatesData"])().then(function (data) {
        return dispatch(receivedTeamMatesData(data));
      });
    } else {
      Object(_services_API__WEBPACK_IMPORTED_MODULE_5__["getTeamMatesData"])().then(function (data) {
        return dispatch(receivedTeamMatesData(data));
      }).catch(function (error) {
        return dispatch(errorTeamMatesData(error));
      });
    }
  };
}

function shouldFetchTeamMatesData(state) {
  var teamMatesStore = state.teamMates; // just check wether fetching (assuming data could be refreshed and should not persist in store)

  if (teamMatesStore.isFetching) {
    return false;
  } else {
    return true;
  }
}

/***/ }),

/***/ "./src/front/redux/modules/userAuth.js":
/*!*********************************************!*\
  !*** ./src/front/redux/modules/userAuth.js ***!
  \*********************************************/
/*! exports provided: default, disconnectUser, checkUserIsConnected, logUserIfNeeded, fetchUserInfoDataIfNeeded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disconnectUser", function() { return disconnectUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUserIsConnected", function() { return checkUserIsConnected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logUserIfNeeded", function() { return logUserIfNeeded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserInfoDataIfNeeded", function() { return fetchUserInfoDataIfNeeded; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/front/config/index.js");
/* harmony import */ var _models_userInfosMock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/userInfosMock */ "./src/front/models/userInfosMock.js");
/* harmony import */ var _services_fetchTools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/fetchTools */ "./src/front/services/fetchTools.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth */ "./src/front/services/auth/index.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



 // from '../../models/userInfosMocks';

 // '../../services/utils';

 // --------------------------------
// CONSTANTS
// --------------------------------

var REQUEST_USER_INFOS_DATA = 'REQUEST_USER_INFOS_DATA';
var RECEIVED_USER_INFOS_DATA = 'RECEIVED_USER_INFOS_DATA';
var ERROR_USER_INFOS_DATA = 'ERROR_USER_INFOS_DATA';
var REQUEST_LOG_USER = 'REQUEST_LOG_USER';
var RECEIVED_LOG_USER = 'RECEIVED_LOG_USER';
var ERROR_LOG_USER = 'ERROR_LOG_USER';
var CHECK_IF_USER_IS_AUTHENTICATED = 'CHECK_IF_USER_IS_AUTHENTICATED';
var DISCONNECT_USER = 'DISCONNECT_USER'; // --------------------------------
// REDUCER
// --------------------------------

var initialState = {
  // actions details
  isFetching: false,
  isLogging: false,
  time: '',
  // userInfos
  id: '',
  login: '',
  firstname: '',
  lastname: '',
  token: null,
  isAuthenticated: false // authentication status (token based auth)

};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var currentTime = moment__WEBPACK_IMPORTED_MODULE_3___default()().format();

  switch (action.type) {
    case CHECK_IF_USER_IS_AUTHENTICATED:
      return _objectSpread(_objectSpread({}, state), {}, {
        actionTime: currentTime,
        isAuthenticated: action.isAuthenticated,
        token: action.token || initialState.token,
        id: action.user && action.user.id ? action.user.id : initialState.id,
        login: action.user && action.user.login ? action.user.login : initialState.login,
        firstname: action.user && action.user.firstname ? action.user.firstname : initialState.firstname,
        lastname: action.user && action.user.lastname ? action.user.lastname : initialState.firstname
      });

    case DISCONNECT_USER:
      return _objectSpread(_objectSpread({}, state), {}, {
        actionTime: currentTime,
        isAuthenticated: false,
        token: initialState.token,
        id: initialState.id,
        login: initialState.login,
        firstname: initialState.firstname,
        lastname: initialState.lastname
      });
    // user login (get token and userInfo)

    case REQUEST_LOG_USER:
      return _objectSpread(_objectSpread({}, state), {}, {
        actionTime: currentTime,
        isLogging: true
      });

    case RECEIVED_LOG_USER:
      {
        var userLogged = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          actionTime: currentTime,
          isAuthenticated: true,
          token: userLogged.token,
          id: userLogged.id,
          login: userLogged.login,
          firstname: userLogged.firstname,
          lastname: userLogged.lastname,
          isLogging: false
        });
      }

    case ERROR_LOG_USER:
      return _objectSpread(_objectSpread({}, state), {}, {
        actionTime: currentTime,
        isAuthenticated: false,
        isLogging: false
      });
    // not used right now:

    case REQUEST_USER_INFOS_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        actionTime: currentTime,
        isFetching: true
      });

    case RECEIVED_USER_INFOS_DATA:
      {
        var userInfos = action.userInfos;
        return _objectSpread(_objectSpread({}, state), {}, {
          actionTime: currentTime,
          isFetching: false,
          id: userInfos.id,
          login: userInfos.login,
          firstname: userInfos.firstname,
          lastname: userInfos.lastname
        });
      }

    case ERROR_USER_INFOS_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        actionTime: currentTime,
        isFetching: false
      });

    default:
      return state;
  }
}); // --------------------------------
// ACTIONS CREATORS
// --------------------------------
//

/**
 *
 * set user isAuthenticated to false and clear all app localstorage:
 *
 * @export
 * @returns {action} action
 */

function disconnectUser() {
  _services_auth__WEBPACK_IMPORTED_MODULE_7__["default"].clearAllAppStorage();
  return {
    type: DISCONNECT_USER
  };
}
/**
 *
 * check if user is connected by looking at locally stored
 * - token
 * - user fonrmation
 *
 * @export
 * @returns {action} action
 */

function checkUserIsConnected() {
  var token = _services_auth__WEBPACK_IMPORTED_MODULE_7__["default"].getToken();
  var user = _services_auth__WEBPACK_IMPORTED_MODULE_7__["default"].getUserInfo();

  var checkUserHasId = function checkUserHasId(obj) {
    return obj && obj._id;
  };

  var isAuthenticated = token && checkUserHasId(user) ? true : false;
  return _objectSpread(_objectSpread({
    type: CHECK_IF_USER_IS_AUTHENTICATED,
    token: token
  }, user), {}, {
    isAuthenticated: isAuthenticated
  });
}
/**
 *
 *  user login
 *
 * @param {string} login user login
 * @param {string} password usepasswordr
 * @returns {Promise<any>} promised action
 */

function logUser(login, password) {
  return /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(dispatch) {
      var FETCH_TYPE, __SOME_LOGIN_API__, mockResult, url, method, headers, options;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              FETCH_TYPE = _config__WEBPACK_IMPORTED_MODULE_4__["appConfig"].DEV_MODE ? 'FETCH_MOCK' : 'FETCH';
              __SOME_LOGIN_API__ = 'login';
              mockResult = {
                token: _models_userInfosMock__WEBPACK_IMPORTED_MODULE_5__["default"].token,
                data: _objectSpread({}, _models_userInfosMock__WEBPACK_IMPORTED_MODULE_5__["default"])
              }; // will be fetch_mock data returned (in case FETCH_TYPE = 'FETCH_MOCK', otherwise cata come from server)

              url = "".concat(Object(_services_fetchTools__WEBPACK_IMPORTED_MODULE_6__["getLocationOrigin"])(), "/").concat(__SOME_LOGIN_API__);
              method = 'post';
              headers = {};
              options = {
                credentials: 'same-origin',
                data: {
                  login: login,
                  password: password
                }
              }; // fetchMiddleware (does: fetch mock, real fetch, dispatch 3 actions... for a minimum code on action creator!)

              return _context.abrupt("return", dispatch({
                type: 'FETCH_MIDDLEWARE',
                fetch: {
                  // common props:
                  type: FETCH_TYPE,
                  actionTypes: {
                    request: REQUEST_LOG_USER,
                    success: RECEIVED_LOG_USER,
                    fail: ERROR_LOG_USER
                  },
                  // mock fetch props:
                  mockResult: mockResult,
                  // real fetch props:
                  url: url,
                  method: method,
                  headers: headers,
                  options: options
                }
              }));

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

function logUserIfNeeded(email, password) {
  return function (dispatch, getState) {
    if (shouldLogUser(getState())) {
      return dispatch(logUser(email, password));
    }

    return Promise.resolve('already loggin in...');
  };
}

function shouldLogUser(state) {
  var isLogging = state.userAuth.isLogging;

  if (isLogging) {
    return false;
  }

  return true;
}
/**
 * fetch user info
 *
 * NOTE: this shows a use-case of fetchMiddleware
 *@param {string} [id=''] user id
 * @returns {Promise<any>} returns fetch promise
 */


function fetchUserInfosData() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return function (dispatch) {
    var token = _services_auth__WEBPACK_IMPORTED_MODULE_7__["default"].getToken();
    var FETCH_TYPE = _config__WEBPACK_IMPORTED_MODULE_4__["appConfig"].DEV_MODE ? 'FETCH_MOCK' : 'FETCH';
    var mockResult = {
      token: _models_userInfosMock__WEBPACK_IMPORTED_MODULE_5__["default"].token,
      data: _objectSpread({}, _models_userInfosMock__WEBPACK_IMPORTED_MODULE_5__["default"])
    }; // will be fetch_mock data returned (in case FETCH_TYPE = 'FETCH_MOCK', otherwise cata come from server)

    var url = "".concat(Object(_services_fetchTools__WEBPACK_IMPORTED_MODULE_6__["getLocationOrigin"])(), "/").concat(_config__WEBPACK_IMPORTED_MODULE_4__["appConfig"].API.users, "/").concat(id);
    var method = 'get';
    var headers = {
      authorization: "Bearer ".concat(token || '')
    };
    var options = {
      credentials: 'same-origin'
    }; // put options here (see axios options)

    return dispatch({
      type: 'FETCH_MIDDLEWARE',
      fetch: {
        // common props:
        type: FETCH_TYPE,
        actionTypes: {
          request: REQUEST_USER_INFOS_DATA,
          success: RECEIVED_USER_INFOS_DATA,
          fail: ERROR_USER_INFOS_DATA
        },
        // mock fetch props:
        mockResult: mockResult,
        // real fetch props:
        url: url,
        method: method,
        headers: headers,
        options: options
      }
    });
  };
}

function fetchUserInfoDataIfNeeded() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return function (dispatch, getState) {
    if (shouldFetchUserInfoData(getState())) {
      return dispatch(fetchUserInfosData(id));
    }

    return Promise.resolve();
  };
}
/**
 *
 * determine wether fetching should occur
 *
 * rules:
 * - should not fetch twice when already fetching
 * - ...more rules can be added
 *
 * @param {Immutable.Map} state all redux state (immutable state)
 * @returns {boolean} flag
 */

function shouldFetchUserInfoData(state) {
  var userInfos = state.userAuth;

  if (userInfos.isFetching) {
    return false;
  }

  return true;
}

/***/ }),

/***/ "./src/front/redux/modules/userInfos.js":
/*!**********************************************!*\
  !*** ./src/front/redux/modules/userInfos.js ***!
  \**********************************************/
/*! exports provided: default, fetchUserInfoDataIfNeeded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userInfos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserInfoDataIfNeeded", function() { return fetchUserInfoDataIfNeeded; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/front/config/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services */ "./src/front/services/index.js");
/* harmony import */ var _services_API__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/API */ "./src/front/services/API/index.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var REQUEST_USER_INFOS_DATA = 'REQUEST_USER_INFOS_DATA';
var RECEIVED_USER_INFOS_DATA = 'RECEIVED_USER_INFOS_DATA';
var ERROR_USER_INFOS_DATA = 'ERROR_USER_INFOS_DATA';
var initialState = {
  isFetching: false,
  data: {
    login: null,
    firstname: '',
    lastname: '',
    picture: null,
    isAuthenticated: false
  },
  isConnected: false,
  time: null
};
function userInfos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_USER_INFOS_DATA':
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: action.isFetching,
        time: action.time
      });

    case 'RECEIVED_USER_INFOS_DATA':
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: action.isFetching,
        data: _objectSpread({}, action.userInfos.data),
        isConnected: true,
        // set user connected when retreiving userInfos
        time: action.time
      });

    case 'ERROR_USER_INFOS_DATA':
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: action.isFetching,
        time: action.time
      });

    default:
      return state;
  }
}
function fetchUserInfoDataIfNeeded() {
  return function (dispatch, getState) {
    if (shouldFetchUserInfoData(getState())) {
      return dispatch(fetchUserInfosData());
    }

    return false;
  };
}

function requestUserInfosData() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : moment__WEBPACK_IMPORTED_MODULE_3___default()().format();
  return {
    type: REQUEST_USER_INFOS_DATA,
    isFetching: true,
    time: time
  };
}

function receivedUserInfosData(data) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : moment__WEBPACK_IMPORTED_MODULE_3___default()().format();
  return {
    type: RECEIVED_USER_INFOS_DATA,
    isFetching: false,
    userInfos: data,
    time: time
  };
}

function errorUserInfosData() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : moment__WEBPACK_IMPORTED_MODULE_3___default()().format();
  return {
    type: ERROR_USER_INFOS_DATA,
    isFetching: false,
    time: time
  };
}

function fetchUserInfosData() {
  return /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(dispatch) {
      var data, _data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(requestUserInfosData());

              if (!_config__WEBPACK_IMPORTED_MODULE_4__["appConfig"].DEV_MODE) {
                _context.next = 8;
                break;
              }

              _context.next = 4;
              return Object(_services__WEBPACK_IMPORTED_MODULE_5__["fetchMockUserInfosData"])();

            case 4:
              data = _context.sent;
              return _context.abrupt("return", dispatch(receivedUserInfosData(data)));

            case 8:
              _context.prev = 8;
              _context.next = 11;
              return Object(_services_API__WEBPACK_IMPORTED_MODULE_6__["getUserInfoData"])();

            case 11:
              _data = _context.sent;
              return _context.abrupt("return", dispatch(receivedUserInfosData(_data)));

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](8);
              return _context.abrupt("return", dispatch(errorUserInfosData(_context.t0)));

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[8, 15]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

function shouldFetchUserInfoData(state) {
  var userInfosStore = state.userInfos;

  if (userInfosStore.isFetching) {
    return false;
  } else {
    return true;
  }
}

/***/ }),

/***/ "./src/front/redux/modules/views.js":
/*!******************************************!*\
  !*** ./src/front/redux/modules/views.js ***!
  \******************************************/
/*! exports provided: default, enterHome, leaveHome, enterSimpleTables, leaveSimpleTables, enterBasicElements, leaveBasicElements, enterGeneral, leaveGeneral, enterPageNotFound, leavePageNotFound, enterStatsCard, leaveStatsCard, enterEarningGraph, leaveEarningGraph, enterNotifications, leaveNotifications, enterWorkProgress, leaveWorkProgress, enterTwitterFeed, leaveTwitterFeed, enterTeamMatesView, leaveTeamMatesView, enterTodoListView, leaveTodoListView, enterBreadcrumb, leaveBreadcrumb, enterStat, leaveStat, enterBasicProgressBar, leaveBasicProgressBar, enterTabPanel, leaveTabPanel, enterStripedProgressBar, leaveStripedProgressBar, enterAlert, leaveAlert, enterPagination, leavePagination, enterLogin, leaveLogin, enterProtected, leaveProtected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return views; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterHome", function() { return enterHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveHome", function() { return leaveHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterSimpleTables", function() { return enterSimpleTables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveSimpleTables", function() { return leaveSimpleTables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterBasicElements", function() { return enterBasicElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveBasicElements", function() { return leaveBasicElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterGeneral", function() { return enterGeneral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveGeneral", function() { return leaveGeneral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterPageNotFound", function() { return enterPageNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leavePageNotFound", function() { return leavePageNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterStatsCard", function() { return enterStatsCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveStatsCard", function() { return leaveStatsCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterEarningGraph", function() { return enterEarningGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveEarningGraph", function() { return leaveEarningGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterNotifications", function() { return enterNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveNotifications", function() { return leaveNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterWorkProgress", function() { return enterWorkProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveWorkProgress", function() { return leaveWorkProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterTwitterFeed", function() { return enterTwitterFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveTwitterFeed", function() { return leaveTwitterFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterTeamMatesView", function() { return enterTeamMatesView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveTeamMatesView", function() { return leaveTeamMatesView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterTodoListView", function() { return enterTodoListView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveTodoListView", function() { return leaveTodoListView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterBreadcrumb", function() { return enterBreadcrumb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveBreadcrumb", function() { return leaveBreadcrumb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterStat", function() { return enterStat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveStat", function() { return leaveStat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterBasicProgressBar", function() { return enterBasicProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveBasicProgressBar", function() { return leaveBasicProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterTabPanel", function() { return enterTabPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveTabPanel", function() { return leaveTabPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterStripedProgressBar", function() { return enterStripedProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveStripedProgressBar", function() { return leaveStripedProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterAlert", function() { return enterAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveAlert", function() { return leaveAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterPagination", function() { return enterPagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leavePagination", function() { return leavePagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterLogin", function() { return enterLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveLogin", function() { return leaveLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterProtected", function() { return enterProtected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveProtected", function() { return leaveProtected; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var ENTER_LOGIN_VIEW = 'ENTER_LOGIN_VIEW';
var LEAVE_LOGIN_VIEW = 'LEAVE_LOGIN_VIEW';
var ENTER_HOME_VIEW = 'ENTER_HOME_VIEW';
var LEAVE_HOME_VIEW = 'LEAVE_HOME_VIEW';
var ENTER_SIMPLE_TABLES_VIEW = 'ENTER_SIMPLE_TABLES_VIEW';
var LEAVE_SIMPLE_TABLES_VIEW = 'LEAVE_SIMPLE_TABLES_VIEW';
var ENTER_BASIC_ELEMENTS_VIEW = 'ENTER_BASIC_ELEMENTS_VIEW';
var LEAVE_BASIC_ELEMENTS_VIEW = 'LEAVE_BASIC_ELEMENTS_VIEW';
var ENTER_GENERAL_VIEW = 'ENTER_GENERAL_VIEW';
var LEAVE_GENERAL_VIEW = 'LEAVE_GENERAL_VIEW';
var ENTER_PAGE_NOT_FOUND_VIEW = 'ENTER_PAGE_NOT_FOUND_VIEW';
var LEAVE_PAGE_NOT_FOUND_VIEW = 'LEAVE_PAGE_NOT_FOUND_VIEW';
var ENTER_STATS_CARD_VIEW = 'ENTER_STATS_CARD_VIEW';
var LEAVE_STATS_CARD_VIEW = 'LEAVE_STATS_CARD_VIEW';
var ENTER_EARNING_GRAPH_VIEW = 'ENTER_EARNING_GRAPH_VIEW';
var LEAVE_EARNING_GRAPH_VIEW = 'LEAVE_EARNING_GRAPH_VIEW';
var ENTER_NOTIFICATIONS_VIEW = 'ENTER_NOTIFICATIONS_VIEW';
var LEAVE_NOTIFICATIONS_VIEW = 'LEAVE_NOTIFICATIONS_VIEW';
var ENTER_WORK_PROGRESS_VIEW = 'ENTER_WORK_PROGRESS_VIEW';
var LEAVE_WORK_PROGRESS_VIEW = 'LEAVE_WORK_PROGRESS_VIEW';
var ENTER_TWITTER_FEED_VIEW = 'ENTER_TWITTER_FEED_VIEW';
var LEAVE_TWITTER_FEED_VIEW = 'LEAVE_TWITTER_FEED_VIEW';
var ENTER_TEAM_MATES_VIEW = 'ENTER_TEAM_MATES_VIEW';
var LEAVE_TEAM_MATES_VIEW = 'LEAVE_TEAM_MATES_VIEW';
var ENTER_TODO_LIST_VIEW = 'ENTER_TODO_LIST_VIEW';
var LEAVE_TODO_LIST_VIEW = 'LEAVE_TODO_LIST_VIEW';
var ENTER_BREADCRUMB_VIEW = 'ENTER_BREADCRUMB_VIEW';
var LEAVE_BREADCRUMB_VIEW = 'LEAVE_BREADCRUMB_VIEW';
var ENTER_STAT_VIEW = 'ENTER_STAT_VIEW';
var LEAVE_STAT_VIEW = 'LEAVE_STAT_VIEW';
var ENTER_BASIC_PROGRESS_BAR_VIEW = 'ENTER_BASIC_PROGRESS_BAR_VIEW';
var LEAVE_BASIC_PROGRESS_BAR_VIEW = 'LEAVE_BASIC_PROGRESS_BAR_VIEW';
var ENTER_TAB_PANEL_VIEW = 'ENTER_TAB_PANEL_VIEW';
var LEAVE_TAB_PANEL_VIEW = 'LEAVE_TAB_PANEL_VIEW';
var ENTER_STRIPED_PROGRESS_BAR_VIEW = 'ENTER_STRIPED_PROGRESS_BAR_VIEW';
var LEAVE_STRIPED_PROGRESS_BAR_VIEW = 'LEAVE_STRIPED_PROGRESS_BAR_VIEW';
var ENTER_ALERT_VIEW = 'ENTER_ALERT_VIEW';
var LEAVE_ALERT_VIEW = 'LEAVE_ALERT_VIEW';
var ENTER_PAGINATION_VIEW = 'ENTER_PAGINATION_VIEW';
var LEAVE_PAGINATION_VIEW = 'LEAVE_PAGINATION_VIEW';
var ENTER_PROTECTED_VIEW = 'ENTER_PROTECTED_VIEW';
var LEAVE_PROTECTED_VIEW = 'LEAVE_PROTECTED_VIEW';
var initialState = {
  currentView: 'home',
  enterTime: null,
  leaveTime: null
};
function views() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ENTER_HOME_VIEW:
    case ENTER_LOGIN_VIEW:
    case ENTER_SIMPLE_TABLES_VIEW:
    case ENTER_BASIC_ELEMENTS_VIEW:
    case ENTER_GENERAL_VIEW:
    case ENTER_PAGE_NOT_FOUND_VIEW:
    case ENTER_STATS_CARD_VIEW:
    case ENTER_EARNING_GRAPH_VIEW:
    case ENTER_NOTIFICATIONS_VIEW:
    case ENTER_WORK_PROGRESS_VIEW:
    case ENTER_TWITTER_FEED_VIEW:
    case ENTER_TEAM_MATES_VIEW:
    case ENTER_TODO_LIST_VIEW:
    case ENTER_BREADCRUMB_VIEW:
    case ENTER_STAT_VIEW:
    case ENTER_BASIC_PROGRESS_BAR_VIEW:
    case ENTER_TAB_PANEL_VIEW:
    case ENTER_STRIPED_PROGRESS_BAR_VIEW:
    case ENTER_ALERT_VIEW:
    case ENTER_PAGINATION_VIEW:
    case ENTER_PROTECTED_VIEW:
      // can't enter if you are already inside
      if (state.currentView !== action.currentView) {
        return _objectSpread(_objectSpread({}, state), {}, {
          currentView: action.currentView,
          enterTime: action.enterTime,
          leaveTime: action.leaveTime
        });
      }

      return state;

    case LEAVE_HOME_VIEW:
    case LEAVE_LOGIN_VIEW:
    case LEAVE_SIMPLE_TABLES_VIEW:
    case LEAVE_BASIC_ELEMENTS_VIEW:
    case LEAVE_GENERAL_VIEW:
    case LEAVE_PAGE_NOT_FOUND_VIEW:
    case LEAVE_STATS_CARD_VIEW:
    case LEAVE_EARNING_GRAPH_VIEW:
    case LEAVE_NOTIFICATIONS_VIEW:
    case LEAVE_WORK_PROGRESS_VIEW:
    case LEAVE_TWITTER_FEED_VIEW:
    case LEAVE_TEAM_MATES_VIEW:
    case LEAVE_TODO_LIST_VIEW:
    case LEAVE_BREADCRUMB_VIEW:
    case LEAVE_STAT_VIEW:
    case LEAVE_BASIC_PROGRESS_BAR_VIEW:
    case LEAVE_TAB_PANEL_VIEW:
    case LEAVE_STRIPED_PROGRESS_BAR_VIEW:
    case LEAVE_ALERT_VIEW:
    case LEAVE_PAGINATION_VIEW:
    case LEAVE_PROTECTED_VIEW:
      // can't leave if you aren't already inside
      if (state.currentView === action.currentView) {
        return _objectSpread(_objectSpread({}, state), {}, {
          currentView: action.currentView,
          enterTime: action.enterTime,
          leaveTime: action.leaveTime
        });
      }

      return state;

    default:
      return state;
  }
}
function enterHome() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: ENTER_HOME_VIEW,
    currentView: 'Home',
    enterTime: time,
    leaveTime: null
  };
}
function leaveHome() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: LEAVE_HOME_VIEW,
    currentView: 'Home',
    enterTime: null,
    leaveTime: time
  };
}
function enterSimpleTables() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: ENTER_SIMPLE_TABLES_VIEW,
    currentView: 'SimpleTables',
    enterTime: time,
    leaveTime: null
  };
}
function leaveSimpleTables() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: LEAVE_SIMPLE_TABLES_VIEW,
    currentView: 'SimpleTables',
    enterTime: null,
    leaveTime: time
  };
}
function enterBasicElements() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: ENTER_BASIC_ELEMENTS_VIEW,
    currentView: 'BasicElements',
    enterTime: time,
    leaveTime: null
  };
}
function leaveBasicElements() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: LEAVE_BASIC_ELEMENTS_VIEW,
    currentView: 'BasicElements',
    enterTime: null,
    leaveTime: time
  };
}
function enterGeneral() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: ENTER_GENERAL_VIEW,
    currentView: 'General',
    enterTime: time,
    leaveTime: null
  };
}
function leaveGeneral() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: LEAVE_GENERAL_VIEW,
    currentView: 'General',
    enterTime: null,
    leaveTime: time
  };
}
function enterPageNotFound() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: ENTER_PAGE_NOT_FOUND_VIEW,
    currentView: 'PageNotFound',
    enterTime: time,
    leaveTime: null
  };
}
function leavePageNotFound() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: LEAVE_PAGE_NOT_FOUND_VIEW,
    currentView: 'PageNotFound',
    enterTime: null,
    leaveTime: time
  };
}
function enterStatsCard() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: ENTER_STATS_CARD_VIEW,
    currentView: 'StatsCard',
    enterTime: time,
    leaveTime: null
  };
}
function leaveStatsCard() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: LEAVE_STATS_CARD_VIEW,
    currentView: 'StatsCard',
    enterTime: null,
    leaveTime: time
  };
}
function enterEarningGraph() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: ENTER_EARNING_GRAPH_VIEW,
    currentView: 'EarningGraph',
    enterTime: time,
    leaveTime: null
  };
}
function leaveEarningGraph() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: LEAVE_EARNING_GRAPH_VIEW,
    currentView: 'EarningGraph',
    enterTime: null,
    leaveTime: time
  };
}
function enterNotifications() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: ENTER_NOTIFICATIONS_VIEW,
    currentView: 'Notifications',
    enterTime: time,
    leaveTime: null
  };
}
function leaveNotifications() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: LEAVE_NOTIFICATIONS_VIEW,
    currentView: 'Notifications',
    enterTime: null,
    leaveTime: time
  };
}
function enterWorkProgress() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: ENTER_WORK_PROGRESS_VIEW,
    currentView: 'WorkProgress',
    enterTime: time,
    leaveTime: null
  };
}
function leaveWorkProgress() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: LEAVE_WORK_PROGRESS_VIEW,
    currentView: 'WorkProgress',
    enterTime: null,
    leaveTime: time
  };
}
function enterTwitterFeed() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: ENTER_TWITTER_FEED_VIEW,
    currentView: 'TwitterFeed',
    enterTime: time,
    leaveTime: null
  };
}
function leaveTwitterFeed() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: LEAVE_TWITTER_FEED_VIEW,
    currentView: 'TwitterFeed',
    enterTime: null,
    leaveTime: time
  };
}
function enterTeamMatesView() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: ENTER_TEAM_MATES_VIEW,
    currentView: 'TeamMatesView',
    enterTime: time,
    leaveTime: null
  };
}
function leaveTeamMatesView() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: LEAVE_TEAM_MATES_VIEW,
    currentView: 'TeamMatesView',
    enterTime: null,
    leaveTime: time
  };
}
function enterTodoListView() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: ENTER_TODO_LIST_VIEW,
    currentView: 'TodoListView',
    enterTime: time,
    leaveTime: null
  };
}
function leaveTodoListView() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: LEAVE_TODO_LIST_VIEW,
    currentView: 'TodoListView',
    enterTime: null,
    leaveTime: time
  };
}
function enterBreadcrumb() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: ENTER_BREADCRUMB_VIEW,
    currentView: 'BreadcrumbView',
    enterTime: time,
    leaveTime: null
  };
}
function leaveBreadcrumb() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: LEAVE_BREADCRUMB_VIEW,
    currentView: 'BreadcrumbView',
    enterTime: null,
    leaveTime: time
  };
}
function enterStat() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: ENTER_STAT_VIEW,
    currentView: 'StatView',
    enterTime: time,
    leaveTime: null
  };
}
function leaveStat() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: LEAVE_STAT_VIEW,
    currentView: 'StatView',
    enterTime: null,
    leaveTime: time
  };
}
function enterBasicProgressBar() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: ENTER_BASIC_PROGRESS_BAR_VIEW,
    currentView: 'BasicProgressBarView',
    enterTime: time,
    leaveTime: null
  };
}
function leaveBasicProgressBar() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: LEAVE_BASIC_PROGRESS_BAR_VIEW,
    currentView: 'BasicProgressBarView',
    enterTime: null,
    leaveTime: time
  };
}
function enterTabPanel() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: ENTER_TAB_PANEL_VIEW,
    currentView: 'TabPanel',
    enterTime: time,
    leaveTime: null
  };
}
function leaveTabPanel() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: LEAVE_TAB_PANEL_VIEW,
    currentView: 'TabPanel',
    enterTime: null,
    leaveTime: time
  };
}
function enterStripedProgressBar() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: ENTER_STRIPED_PROGRESS_BAR_VIEW,
    currentView: 'StripedProgressBarView',
    enterTime: time,
    leaveTime: null
  };
}
function leaveStripedProgressBar() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: LEAVE_STRIPED_PROGRESS_BAR_VIEW,
    currentView: 'StripedProgressBarView',
    enterTime: null,
    leaveTime: time
  };
}
function enterAlert() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: ENTER_ALERT_VIEW,
    currentView: 'AlertView',
    enterTime: time,
    leaveTime: null
  };
}
function leaveAlert() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: LEAVE_ALERT_VIEW,
    currentView: 'AlertView',
    enterTime: null,
    leaveTime: time
  };
}
function enterPagination() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: ENTER_PAGINATION_VIEW,
    currentView: 'PaginationView',
    enterTime: time,
    leaveTime: null
  };
}
function leavePagination() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: LEAVE_PAGINATION_VIEW,
    currentView: 'PaginationView',
    enterTime: null,
    leaveTime: time
  };
}
function enterLogin() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: ENTER_LOGIN_VIEW,
    currentView: 'Login',
    enterTime: time,
    leaveTime: null
  };
}
function leaveLogin() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: LEAVE_LOGIN_VIEW,
    currentView: 'Login',
    enterTime: null,
    leaveTime: time
  };
}
function enterProtected() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: ENTER_PROTECTED_VIEW,
    currentView: 'Protected',
    enterTime: time,
    leaveTime: null
  };
}
function leaveProtected() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date());
  return {
    type: LEAVE_PROTECTED_VIEW,
    currentView: 'Protected',
    enterTime: null,
    leaveTime: time
  };
}

/***/ }),

/***/ "./src/front/redux/store/configureStore.dev.js":
/*!*****************************************************!*\
  !*** ./src/front/redux/store/configureStore.dev.js ***!
  \*****************************************************/
/*! exports provided: history, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history/createBrowserHistory */ "./node_modules/history/createBrowserHistory.js");
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _modules_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/reducers */ "./src/front/redux/modules/reducers.js");
/* harmony import */ var _middleware_fetchMiddleware__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../middleware/fetchMiddleware */ "./src/front/redux/middleware/fetchMiddleware.js");
// #region imports

 // import { routerMiddleware } from 'react-router-redux'; // deprecated in favor of react-connected-router


 // #region import createHistory from hashHistory or BrowserHistory:
// import createHistory from 'history/createHashHistory';

 // #endregion


 // defaults to localStorage for web



 // #endregion
// #region constants

var history = history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4___default()(); // #endregion
// #region createStore : enhancer
// #region logger middleware (dev only)

var loggerMiddleware = Object(redux_logger__WEBPACK_IMPORTED_MODULE_1__["createLogger"])({
  level: 'info',
  collapsed: true
}); // #endregion

var enhancer = Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_7__["default"], Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(history), _middleware_fetchMiddleware__WEBPACK_IMPORTED_MODULE_9__["default"], loggerMiddleware // logger at the end
)); // #endregion
// #region persisted reducer

var persistConfig = {
  key: 'root',
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_6___default.a,
  blacklist: ['router'] // whitelist: ['userAuth'],

};
var persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_5__["persistReducer"])(persistConfig, Object(_modules_reducers__WEBPACK_IMPORTED_MODULE_8__["default"])(history)); // #endregion

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(persistedReducer, initialState, enhancer);

  if (false) {}

  return store;
}

/***/ }),

/***/ "./src/front/redux/store/configureStore.js":
/*!*************************************************!*\
  !*** ./src/front/redux/store/configureStore.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint no-process-env:0 */
if (false) {} else {
  module.exports = __webpack_require__(/*! ./configureStore.dev */ "./src/front/redux/store/configureStore.dev.js");
}

/***/ }),

/***/ "./src/front/routes/MainRoutes.js":
/*!****************************************!*\
  !*** ./src/front/routes/MainRoutes.js ***!
  \****************************************/
/*! exports provided: MainRoutes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutes", function() { return MainRoutes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_privateRoute_PrivateRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/privateRoute/PrivateRoute */ "./src/front/components/privateRoute/PrivateRoute.js");
/* harmony import */ var _views_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/home */ "./src/front/views/home/index.js");
/* harmony import */ var _views_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/alert */ "./src/front/views/alert/index.js");
/* harmony import */ var _views_basicElements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/basicElements */ "./src/front/views/basicElements/index.js");
/* harmony import */ var _views_basicProgressBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/basicProgressBar */ "./src/front/views/basicProgressBar/index.js");
/* harmony import */ var _views_breadcrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/breadcrumb */ "./src/front/views/breadcrumb/index.js");
/* harmony import */ var _views_earningGraph__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/earningGraph */ "./src/front/views/earningGraph/index.js");
/* harmony import */ var _views_general__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/general */ "./src/front/views/general/index.js");
/* harmony import */ var _views_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/notifications */ "./src/front/views/notifications/index.js");
/* harmony import */ var _views_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/pagination */ "./src/front/views/pagination/index.js");
/* harmony import */ var _views_simpleTables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../views/simpleTables */ "./src/front/views/simpleTables/index.js");
/* harmony import */ var _views_stat__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../views/stat */ "./src/front/views/stat/index.js");
/* harmony import */ var _views_statsCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../views/statsCard */ "./src/front/views/statsCard/index.js");
/* harmony import */ var _views_stripedProgressBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../views/stripedProgressBar */ "./src/front/views/stripedProgressBar/index.js");
/* harmony import */ var _views_tabPanel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../views/tabPanel */ "./src/front/views/tabPanel/index.js");
/* harmony import */ var _views_teamMates__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../views/teamMates */ "./src/front/views/teamMates/index.js");
/* harmony import */ var _views_todoList__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../views/todoList */ "./src/front/views/todoList/index.js");
/* harmony import */ var _views_twitterFeed__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../views/twitterFeed */ "./src/front/views/twitterFeed/index.js");
/* harmony import */ var _views_workProgress__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../views/workProgress */ "./src/front/views/workProgress/index.js");
/* harmony import */ var _views_protected__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../views/protected */ "./src/front/views/protected/index.js");
/* eslint no-process-env:0 */






















var MainRoutes = function MainRoutes() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _views_home__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/Dashboard/statsCard",
    component: _views_statsCard__WEBPACK_IMPORTED_MODULE_14__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/Dashboard/earningGraph",
    component: _views_earningGraph__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/Dashboard/notifications",
    component: _views_notifications__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/Dashboard/workProgress",
    component: _views_workProgress__WEBPACK_IMPORTED_MODULE_20__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/Dashboard/twitterFeed",
    component: _views_twitterFeed__WEBPACK_IMPORTED_MODULE_19__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/Dashboard/teamMates",
    component: _views_teamMates__WEBPACK_IMPORTED_MODULE_17__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/Dashboard/todoList",
    component: _views_todoList__WEBPACK_IMPORTED_MODULE_18__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/simpleTables",
    component: _views_simpleTables__WEBPACK_IMPORTED_MODULE_12__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/basicElements",
    component: _views_basicElements__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/general",
    component: _views_general__WEBPACK_IMPORTED_MODULE_9__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/general/breadcrumb",
    component: _views_breadcrumb__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/general/stat",
    component: _views_stat__WEBPACK_IMPORTED_MODULE_13__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/general/basicProgressBars",
    component: _views_basicProgressBar__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/general/tabPanels",
    component: _views_tabPanel__WEBPACK_IMPORTED_MODULE_16__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/general/stripedProgressBars",
    component: _views_stripedProgressBar__WEBPACK_IMPORTED_MODULE_15__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/general/alerts",
    component: _views_alert__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/general/pagination",
    component: _views_pagination__WEBPACK_IMPORTED_MODULE_11__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_privateRoute_PrivateRoute__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: "/protected",
    component: _views_protected__WEBPACK_IMPORTED_MODULE_21__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    component: _views_home__WEBPACK_IMPORTED_MODULE_3__["default"]
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (MainRoutes);

/***/ }),

/***/ "./src/front/services/API/earningGraph.js":
/*!************************************************!*\
  !*** ./src/front/services/API/earningGraph.js ***!
  \************************************************/
/*! exports provided: getEarningGraphData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEarningGraphData", function() { return getEarningGraphData; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/front/config/index.js");
/* harmony import */ var _fetchTools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetchTools */ "./src/front/services/fetchTools.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var getEarningGraphData = function getEarningGraphData() {
  var url = "".concat(Object(_fetchTools__WEBPACK_IMPORTED_MODULE_2__["getLocationOrigin"])(), "/").concat(_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"].earningGraph.data.API);

  var options = _objectSpread({}, _fetchTools__WEBPACK_IMPORTED_MODULE_2__["defaultOptions"]);

  return fetch(url, options).then(_fetchTools__WEBPACK_IMPORTED_MODULE_2__["checkStatus"]).then(_fetchTools__WEBPACK_IMPORTED_MODULE_2__["parseJSON"]).then(function (data) {
    return data;
  }).catch(function (error) {
    return error;
  });
};

/***/ }),

/***/ "./src/front/services/API/index.js":
/*!*****************************************!*\
  !*** ./src/front/services/API/index.js ***!
  \*****************************************/
/*! exports provided: getEarningGraphData, getTeamMatesData, getUserInfoData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _earningGraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./earningGraph */ "./src/front/services/API/earningGraph.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEarningGraphData", function() { return _earningGraph__WEBPACK_IMPORTED_MODULE_0__["getEarningGraphData"]; });

/* harmony import */ var _teamMates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teamMates */ "./src/front/services/API/teamMates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTeamMatesData", function() { return _teamMates__WEBPACK_IMPORTED_MODULE_1__["getTeamMatesData"]; });

/* harmony import */ var _userInfos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userInfos */ "./src/front/services/API/userInfos.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserInfoData", function() { return _userInfos__WEBPACK_IMPORTED_MODULE_2__["getUserInfoData"]; });





/***/ }),

/***/ "./src/front/services/API/teamMates.js":
/*!*********************************************!*\
  !*** ./src/front/services/API/teamMates.js ***!
  \*********************************************/
/*! exports provided: getTeamMatesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTeamMatesData", function() { return getTeamMatesData; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/front/config/index.js");
/* harmony import */ var _fetchTools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetchTools */ "./src/front/services/fetchTools.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var getTeamMatesData = function getTeamMatesData() {
  var url = "".concat(Object(_fetchTools__WEBPACK_IMPORTED_MODULE_2__["getLocationOrigin"])(), "/").concat(_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"].teamMates.data.API);

  var options = _objectSpread({}, _fetchTools__WEBPACK_IMPORTED_MODULE_2__["defaultOptions"]);

  fetch(url, options).then(_fetchTools__WEBPACK_IMPORTED_MODULE_2__["checkStatus"]).then(_fetchTools__WEBPACK_IMPORTED_MODULE_2__["parseJSON"]).then(function (data) {
    return data;
  }).catch(function (error) {
    return error;
  });
};

/***/ }),

/***/ "./src/front/services/API/userInfos.js":
/*!*********************************************!*\
  !*** ./src/front/services/API/userInfos.js ***!
  \*********************************************/
/*! exports provided: getUserInfoData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfoData", function() { return getUserInfoData; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/front/config/index.js");
/* harmony import */ var _fetchTools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetchTools */ "./src/front/services/fetchTools.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var getUserInfoData = function getUserInfoData() {
  var url = "".concat(Object(_fetchTools__WEBPACK_IMPORTED_MODULE_2__["getLocationOrigin"])(), "/").concat(_config__WEBPACK_IMPORTED_MODULE_1__["appConfig"].userInfos.data.API);

  var options = _objectSpread({}, _fetchTools__WEBPACK_IMPORTED_MODULE_2__["defaultOptions"]);

  fetch(url, options).then(_fetchTools__WEBPACK_IMPORTED_MODULE_2__["checkStatus"]).then(_fetchTools__WEBPACK_IMPORTED_MODULE_2__["parseJSON"]).then(function (data) {
    return data;
  }).catch(function (error) {
    return error;
  });
};

/***/ }),

/***/ "./src/front/services/auth/index.js":
/*!******************************************!*\
  !*** ./src/front/services/auth/index.js ***!
  \******************************************/
/*! exports provided: auth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_is_after__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/is_after */ "./node_modules/date-fns/is_after/index.js");
/* harmony import */ var date_fns_is_after__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_is_after__WEBPACK_IMPORTED_MODULE_1__);
// #region imports

 // #endregion
// #region constants

var TOKEN_KEY = 'token';
var USER_INFO = 'userInfo';
var APP_PERSIST_STORES_TYPES = ['localStorage', 'sessionStorage'];
var parse = JSON.parse;
var stringify = JSON.stringify; // #endregion

/*
  auth object
  -> store "TOKEN_KEY"
  - default storage is "localStorage"
  - default token key is 'token'
 */

var auth = {
  // /////////////////////////////////////////////////////////////
  // TOKEN
  // /////////////////////////////////////////////////////////////

  /**
   * get token from localstorage
   *
   * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
   * @param {any} [tokenKey=TOKEN_KEY]  optionnal parameter to specify a token key
   * @returns {string} token value
   */
  getToken: function getToken() {
    var fromStorage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TOKEN_KEY;

    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      return localStorage && localStorage.getItem(tokenKey) || null;
    } // sessionStorage:


    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      return sessionStorage && sessionStorage.getItem(tokenKey) || null;
    } // default:


    return null;
  },

  /**
   * set the token value into localstorage (managed by localforage)
   *
   * @param {string} [value=''] token value
   * @param {'localStorage' | 'sessionStorage'} [toStorage='localStorage'] specify storage
   * @param {any} [tokenKey='token'] token key
   * @returns {boolean} success/failure flag
   */
  setToken: function setToken() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var toStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : TOKEN_KEY;

    if (!value || value.length <= 0) {
      return;
    } // localStorage:


    if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (localStorage) {
        localStorage.setItem(tokenKey, value);
        return;
      }
    } // sessionStorage:


    if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (sessionStorage) {
        sessionStorage.setItem(tokenKey, value);
        return;
      }
    }
  },

  /**
   * check
   * - if token key contains a valid token value (defined and not an empty value)
   * - if the token expiration date is passed
   *
   *
   * Note: 'isAuthenticated' just checks 'tokenKey' on store (localStorage by default or sessionStorage)
   *
   * You may think: 'ok I just put an empty token key and I have access to protected routes?''
   *    -> answer is:  YES^^
   * BUT
   * -> : your backend will not recognize a wrong token so private data or safe and you protected view could be a bit ugly without any data.
   *
   * => ON CONCLUSION: this aim of 'isAuthenticated'
   *    -> is to help for a better "user experience"  (= better than displaying a view with no data since server did not accept the user).
   *    -> it is not a security purpose (security comes from backend, since frontend is easily hackable => user has access to all your frontend)
   *
   * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
   * @param {any} [tokenKey=TOKEN_KEY] token key
   * @returns {bool} is authenticed response
   */
  isAuthenticated: function isAuthenticated() {
    var fromStorage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TOKEN_KEY;

    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (localStorage && localStorage.getItem(tokenKey)) {
        return true;
      }

      return false;
    } // sessionStorage:


    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (sessionStorage && sessionStorage.getItem(tokenKey)) {
        return true;
      }

      return false;
    } // default:


    return false;
  },

  /**
   * delete token
   *
   * @param {any} [tokenKey='token'] token key
   * @returns {bool} success/failure flag
   */
  clearToken: function clearToken() {
    var storage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TOKEN_KEY;

    // localStorage:
    if (localStorage && localStorage[tokenKey]) {
      localStorage.removeItem(tokenKey);
      return true;
    } // sessionStorage:


    if (sessionStorage && sessionStorage[tokenKey]) {
      sessionStorage.removeItem(tokenKey);
      return true;
    }

    return false;
  },

  /**
   * return expiration date from token
   *
   * @param {string} encodedToken - base 64 token received from server and stored in local storage
   * @returns {date | null} returns expiration date or null id expired props not found in decoded token
   */
  getTokenExpirationDate: function getTokenExpirationDate(encodedToken) {
    if (!encodedToken) {
      return new Date(0); // is expired
    }

    var token = jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(encodedToken);

    if (!token.exp) {
      return new Date(0); // is expired
    }

    var expirationDate = new Date(token.exp * 1000);
    return expirationDate;
  },

  /**
   * tell is token is expired (compared to now)
   *
   * @param {string} encodedToken - base 64 token received from server and stored in local storage
   * @returns {bool} returns true if expired else false
   */
  isExpiredToken: function isExpiredToken(encodedToken) {
    var expirationDate = this.getTokenExpirationDate(encodedToken);
    var rightNow = new Date();
    var isExpiredToken = date_fns_is_after__WEBPACK_IMPORTED_MODULE_1___default()(rightNow, expirationDate);
    return isExpiredToken;
  },
  // /////////////////////////////////////////////////////////////
  // USER_INFO
  // /////////////////////////////////////////////////////////////

  /**
   * get user info from localstorage
   *
   * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
   * @param {any} [userInfoKey='userInfo']  optionnal parameter to specify a token key
   * @returns {string} token value
   */
  getUserInfo: function getUserInfo() {
    var fromStorage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var userInfoKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : USER_INFO;

    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      return localStorage && parse(localStorage.getItem(userInfoKey) || '') || null;
    } // sessionStorage:


    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      return sessionStorage && parse(sessionStorage.getItem(userInfoKey) || '') || null;
    } // default:


    return null;
  },

  /**
   * set the userInfo value into localstorage
   *
   * @param {object} [value=''] token value
   * @param {'localStorage' | 'sessionStorage'} [toStorage='localStorage'] specify storage
   * @param {any} [userInfoKey='userInfo'] token key
   * @returns {boolean} success/failure flag
   */
  setUserInfo: function setUserInfo() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var toStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : APP_PERSIST_STORES_TYPES[0];
    var userInfoKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : USER_INFO;

    if (!value || value.length <= 0) {
      return;
    } // localStorage:


    if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (localStorage) {
        localStorage.setItem(userInfoKey, stringify(value));
        return;
      }
    } // sessionStorage:


    if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (sessionStorage) {
        sessionStorage.setItem(userInfoKey, stringify(value));
        return;
      }
    }
  },

  /**
   * delete userInfo
   *
   * @param {string} [userInfoKey='userInfo'] token key
   * @returns {bool} success/failure flag
   */
  clearUserInfo: function clearUserInfo() {
    var userInfoKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_INFO;

    // localStorage:
    if (localStorage && localStorage[userInfoKey]) {
      localStorage.removeItem(userInfoKey);
      return;
    } // sessionStorage:


    if (sessionStorage && sessionStorage[userInfoKey]) {
      sessionStorage.removeItem(userInfoKey);
      return;
    }
  },
  // /////////////////////////////////////////////////////////////
  // COMMON
  // /////////////////////////////////////////////////////////////

  /**
   * forget me method: clear all
   * @returns {bool} success/failure flag
   */
  clearAllAppStorage: function clearAllAppStorage() {
    if (localStorage) {
      localStorage.clear();
      return;
    }

    if (sessionStorage) {
      sessionStorage.clear();
      return;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (auth);

/***/ }),

/***/ "./src/front/services/fetchMocks/index.js":
/*!************************************************!*\
  !*** ./src/front/services/fetchMocks/index.js ***!
  \************************************************/
/*! exports provided: fetchMockEarningGraphData, fetchMockUserInfosData, fetchMockTeamMatesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMockEarningGraphData", function() { return fetchMockEarningGraphData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMockUserInfosData", function() { return fetchMockUserInfosData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMockTeamMatesData", function() { return fetchMockTeamMatesData; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/front/config/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models */ "./src/front/models/index.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var fetchMockEarningGraphData = function fetchMockEarningGraphData() {
  var timeToWait = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _config__WEBPACK_IMPORTED_MODULE_4__["appConfig"].FAKE_ASYNC_DELAY;
  return new Promise(function (resolve) {
    setTimeout(function () {
      return resolve({
        labels: _models__WEBPACK_IMPORTED_MODULE_5__["earningGraphMockData"].labels,
        datasets: _models__WEBPACK_IMPORTED_MODULE_5__["earningGraphMockData"].datasets
      });
    }, timeToWait);
  });
};
var fetchMockUserInfosData = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
    var timeToWait,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            timeToWait = _args.length > 0 && _args[0] !== undefined ? _args[0] : _config__WEBPACK_IMPORTED_MODULE_4__["appConfig"].FAKE_ASYNC_DELAY;
            return _context.abrupt("return", new Promise(function (resolve) {
              setTimeout(function () {
                return resolve({
                  token: _models__WEBPACK_IMPORTED_MODULE_5__["userInfosMockData"].token,
                  data: _objectSpread({}, _models__WEBPACK_IMPORTED_MODULE_5__["userInfosMockData"])
                });
              }, // { token: userInfosMockData.token, data: {...userInfosMockData}}
              timeToWait);
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchMockUserInfosData() {
    return _ref.apply(this, arguments);
  };
}();
var fetchMockTeamMatesData = function fetchMockTeamMatesData() {
  var timeToWait = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _config__WEBPACK_IMPORTED_MODULE_4__["appConfig"].FAKE_ASYNC_DELAY;
  return new Promise(function (resolve) {
    setTimeout(function () {
      return resolve(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_models__WEBPACK_IMPORTED_MODULE_5__["teamMatesMock"]));
    }, timeToWait);
  });
};

/***/ }),

/***/ "./src/front/services/fetchTools.js":
/*!******************************************!*\
  !*** ./src/front/services/fetchTools.js ***!
  \******************************************/
/*! exports provided: getLocationOrigin, defaultOptions, postMethod, jsonHeader, checkStatus, parseJSON, encodeBase64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocationOrigin", function() { return getLocationOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postMethod", function() { return postMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonHeader", function() { return jsonHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkStatus", function() { return checkStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseJSON", function() { return parseJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeBase64", function() { return encodeBase64; });
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_0__);

/*
  window.location.origin polyfill
 */

var getLocationOrigin = function getLocationOrigin() {
  if (!window.location.origin) {
    window.location.origin = "".concat(window.location.protocol, "//").concat(window.location.hostname).concat(window.location.port ? ':' + window.location.port : '');
  }

  return window.location.origin;
};
/*
  query options:
 */

var defaultOptions = {
  credentials: 'same-origin'
};
var postMethod = {
  method: 'POST'
};
var jsonHeader = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
};
/*
  query response helpers:
 */

var checkStatus = function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  var error = new Error(response.statusText);
  return Promise.reject(error);
};
var parseJSON = function parseJSON(response) {
  return response.json();
};
/*
 general helpers
 */

var encodeBase64 = function encodeBase64(stringToEncode) {
  return js_base64__WEBPACK_IMPORTED_MODULE_0__["Base64"].encode(stringToEncode);
};

/***/ }),

/***/ "./src/front/services/index.js":
/*!*************************************!*\
  !*** ./src/front/services/index.js ***!
  \*************************************/
/*! exports provided: defaultOptions, checkStatus, parseJSON, getLocationOrigin, encodeBase64, fetchMockEarningGraphData, fetchMockUserInfosData, fetchMockTeamMatesData, getEarningGraphData, getTeamMatesData, getUserInfoData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetchTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchTools */ "./src/front/services/fetchTools.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return _fetchTools__WEBPACK_IMPORTED_MODULE_0__["defaultOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkStatus", function() { return _fetchTools__WEBPACK_IMPORTED_MODULE_0__["checkStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseJSON", function() { return _fetchTools__WEBPACK_IMPORTED_MODULE_0__["parseJSON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocationOrigin", function() { return _fetchTools__WEBPACK_IMPORTED_MODULE_0__["getLocationOrigin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encodeBase64", function() { return _fetchTools__WEBPACK_IMPORTED_MODULE_0__["encodeBase64"]; });

/* harmony import */ var _fetchMocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchMocks */ "./src/front/services/fetchMocks/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchMockEarningGraphData", function() { return _fetchMocks__WEBPACK_IMPORTED_MODULE_1__["fetchMockEarningGraphData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchMockUserInfosData", function() { return _fetchMocks__WEBPACK_IMPORTED_MODULE_1__["fetchMockUserInfosData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchMockTeamMatesData", function() { return _fetchMocks__WEBPACK_IMPORTED_MODULE_1__["fetchMockTeamMatesData"]; });

/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./API */ "./src/front/services/API/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEarningGraphData", function() { return _API__WEBPACK_IMPORTED_MODULE_2__["getEarningGraphData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTeamMatesData", function() { return _API__WEBPACK_IMPORTED_MODULE_2__["getTeamMatesData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserInfoData", function() { return _API__WEBPACK_IMPORTED_MODULE_2__["getUserInfoData"]; });

// fetchTools:
 // fetchMocks:

 // API:



/***/ }),

/***/ "./src/front/style/index.style.scss":
/*!******************************************!*\
  !*** ./src/front/style/index.style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./index.style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/front/style/index.style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/front/views/alert/Alert.js":
/*!****************************************!*\
  !*** ./src/front/views/alert/Alert.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-highlight */ "./node_modules/react-highlight/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_highlight__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./src/front/components/index.js");
/* eslint-disable react/no-unescaped-entities */




var source = "\n  // in render():\n  <div className=\"row\">\n    <div className=\"col-xs-12\">\n      <Panel\n        title=\"Alert\"\n        hasTitle={true}>\n        <Alert\n          type=\"danger\">\n          <strong>\n            Oh snap!\n          </strong>\n          Change a few things up and try submitting again.\n        </Alert>\n\n        <Alert\n          type=\"success\">\n          <strong>\n            Well done!\n          </strong>\n          You successfully read this important alert message.\n        </Alert>\n\n        <Alert\n          type=\"info\">\n          <strong>\n            Heads up!\n          </strong>\n          This alert needs your attention, but it's not super important.\n        </Alert>\n\n        <Alert\n          type=\"warning\">\n          <strong>\n            Warning!\n          </strong>\n          Best check yo self, you're not looking too good.\n        </Alert>\n      </Panel>\n    </div>\n  </div>\n";

function AlertView(_ref) {
  var _ref$actions = _ref.actions,
      enterAlert = _ref$actions.enterAlert,
      leaveAlert = _ref$actions.leaveAlert;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    enterAlert();
    return function () {
      return leaveAlert();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["AnimatedView"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Panel"], {
    title: "Basic Progress Bars",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    type: "danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Oh snap!"), "Change a few things up and try submitting again."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    type: "success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Well done!"), "You successfully read this important alert message."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    type: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Heads up!"), "This alert needs your attention, but it's not super important."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    type: "warning"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Warning!"), "Best check yo self, you're not looking too good.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Panel"], {
    title: "Source",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_highlight__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "javascript"
  }, source)))));
}

AlertView.displayName = 'AlertView';
AlertView.propTypes = {
  // react-router
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    enterAlert: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    leaveAlert: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (AlertView);

/***/ }),

/***/ "./src/front/views/alert/index.js":
/*!****************************************!*\
  !*** ./src/front/views/alert/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modules/actions */ "./src/front/redux/modules/actions.js");
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Alert */ "./src/front/views/alert/Alert.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      enterAlert: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["enterAlert"],
      leaveAlert: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["leaveAlert"]
    }, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_Alert__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/front/views/basicElements/BasicElements.js":
/*!********************************************************!*\
  !*** ./src/front/views/basicElements/BasicElements.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./src/front/components/index.js");
/* eslint-disable react/no-unescaped-entities */




function BasicElements(_ref) {
  var _ref$actions = _ref.actions,
      enterBasicElements = _ref$actions.enterBasicElements,
      leaveBasicElements = _ref$actions.leaveBasicElements;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    enterBasicElements();
    return function () {
      leaveBasicElements();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["AnimatedView"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["BasicForms"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "panel-heading"
  }, "Horizontal Forms"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form-horizontal",
    role: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "inputEmail1",
    className: "col-lg-2 col-sm-2 control-label"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    className: "form-control",
    id: "inputEmail1",
    placeholder: "Email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "help-block"
  }, "Example block-level help text here."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "inputPassword1",
    className: "col-lg-2 col-sm-2 control-label"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "password",
    className: "form-control",
    id: "inputPassword1",
    placeholder: "Password"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-offset-2 col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox"
  }), "Remember me")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-offset-2 col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-danger"
  }, "Sign in")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#myModalBasicElements",
    "data-toggle": "modal",
    className: "btn btn-xs btn-success"
  }, "Form in Modal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#myModalBasicElements-1",
    "data-toggle": "modal",
    className: "btn btn-xs btn-warning"
  }, "Form in Modal 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#myModalBasicElements-2",
    "data-toggle": "modal",
    className: "btn btn-xs btn-danger"
  }, "Form in Modal 3"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "panel-heading"
  }, "Inline form"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form-inline",
    role: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "exampleInputEmail2"
  }, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    className: "form-control",
    id: "exampleInputEmail2",
    placeholder: "Enter email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "exampleInputPassword2"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "password",
    className: "form-control",
    id: "exampleInputPassword2",
    placeholder: "Password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox"
  }), "Remember me")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-success"
  }, "Sign in")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "panel-heading"
  }, "Form Elements"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form-horizontal tasi-form",
    method: "get"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-sm-2 col-sm-2 control-label"
  }, "Default"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-sm-2 col-sm-2 control-label"
  }, "Help text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "help-block"
  }, "A block of help text that breaks onto a new line and may extend beyond one line."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-sm-2 col-sm-2 control-label"
  }, "Rounder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control round-input"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-sm-2 col-sm-2 control-label"
  }, "Input focus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    id: "focusedInput",
    type: "text",
    value: "This is focused..."
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-sm-2 col-sm-2 control-label"
  }, "Disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    id: "disabledInput",
    type: "text",
    placeholder: "Disabled input here...",
    disabled: ""
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-sm-2 col-sm-2 control-label"
  }, "Placeholder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "placeholder"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-sm-2 col-sm-2 control-label"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "password",
    className: "form-control",
    placeholder: ""
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-2 col-sm-2 control-label"
  }, "Static control"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "form-control-static"
  }, "email@example.com")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "panel-heading"
  }, "Form Elements"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form-horizontal tasi-form",
    method: "get"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group has-success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-sm-2 control-label col-lg-2",
    htmlFor: "inputSuccess"
  }, "Input with success"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: "inputSuccess"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group has-warning"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-sm-2 control-label col-lg-2",
    htmlFor: "inputWarning"
  }, "Input with warning"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: "inputWarning"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group has-error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-sm-2 control-label col-lg-2",
    htmlFor: "inputError"
  }, "Input with error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: "inputError"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "panel-heading"
  }, "Control sizing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form-horizontal tasi-form",
    method: "get"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-sm-2 control-label col-lg-2",
    htmlFor: "inputSuccess"
  }, "Control sizing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control input-lg m-b-10",
    type: "text",
    placeholder: ".input-lg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control m-b-10",
    type: "text",
    placeholder: "Default input"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control input-sm m-b-10",
    type: "text",
    placeholder: ".input-sm"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control input-lg m-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Option 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Option 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Option 3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control m-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Option 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Option 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Option 3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control input-sm m-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Option 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Option 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Option 3"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "panel-heading"
  }, "Form Elements"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form-horizontal tasi-form",
    method: "get"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-sm-2 control-label col-lg-2",
    htmlFor: "inputSuccess"
  }, "Checkboxes and radios"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    value: ""
  }), "Option one is this and that\u2014be sure to include why it's great")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    value: ""
  }), "Option one is this and that\u2014be sure to include why it's great option one")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "radio"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "radio",
    name: "optionsRadios",
    id: "optionsRadios1",
    value: "option1",
    checked: ""
  }), "Option one is this and that\u2014be sure to include why it's great")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "radio"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "radio",
    name: "optionsRadios",
    id: "optionsRadios2",
    value: "option2"
  }), "Option two can be something else and selecting it will deselect option one")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-sm-2 control-label col-lg-2",
    htmlFor: "inputSuccess"
  }, "Inline checkboxes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "checkbox-inline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    id: "inlineCheckbox1",
    value: "option1"
  }), "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "checkbox-inline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    id: "inlineCheckbox2",
    value: "option2"
  }), "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "checkbox-inline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    id: "inlineCheckbox3",
    value: "option3"
  }), "3"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-sm-2 control-label col-lg-2",
    htmlFor: "inputSuccess"
  }, "Selects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control m-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    multiple: "",
    className: "form-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "5")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-sm-2 control-label col-lg-2",
    htmlFor: "inputSuccess"
  }, "Column sizing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: ".col-lg-2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: ".col-lg-3"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: ".col-lg-4"
  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "panel-heading"
  }, "Input groups"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form-horizontal tasi-form",
    method: "get"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-sm-2 control-label col-lg-2"
  }, "Basic examples"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group m-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "input-group-addon"
  }, "@"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Username"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group m-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "input-group-addon"
  }, ".00")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group m-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "input-group-addon"
  }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "input-group-addon"
  }, ".00")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-sm-2 control-label col-lg-2"
  }, "Sizing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group input-group-lg m-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "input-group-addon"
  }, "@"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control input-lg",
    placeholder: "Username"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group m-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "input-group-addon"
  }, "@"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Username"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group input-group-sm m-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "input-group-addon"
  }, "@"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Username"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-sm-2 control-label col-lg-2"
  }, "Checkboxe and radio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group m-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "input-group-addon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group m-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "input-group-addon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "radio"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-sm-2 control-label col-lg-2"
  }, "Button addons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group m-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "input-group-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-white",
    type: "button"
  }, "Go!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group m-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "input-group-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-white",
    type: "button"
  }, "Go!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group m-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-white dropdown-toggle",
    "data-toggle": "dropdown"
  }, "Action", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caret"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "dropdown-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Action")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Another action")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Something else here")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "divider"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Separated link")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group m-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-white dropdown-toggle",
    "data-toggle": "dropdown"
  }, "Action", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caret"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "dropdown-menu pull-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Action")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Another action")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Something else here")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "divider"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Separated link"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-sm-2 control-label col-lg-2"
  }, "Segmented buttons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group m-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    tabIndex: "-1",
    className: "btn btn-white",
    type: "button"
  }, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    tabIndex: "-1",
    "data-toggle": "dropdown",
    className: "btn btn-white dropdown-toggle",
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caret"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    role: "menu",
    className: "dropdown-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Action")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Another action")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Something else here")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "divider"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Separated link")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group m-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    tabIndex: "-1",
    className: "btn btn-white",
    type: "button"
  }, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    tabIndex: "-1",
    "data-toggle": "dropdown",
    className: "btn btn-white dropdown-toggle",
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "caret"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    role: "menu",
    className: "dropdown-menu pull-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Action")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Another action")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Something else here")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "divider"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Separated link")))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "panel-heading"
  }, "Inline Grid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-12",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-6",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-6",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-4",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-4",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-4",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-3",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-3",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-3",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-3",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-2",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-2",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-2",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-2",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-2",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-2",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-1 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-1",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-1 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-1",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-1 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-1",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-1 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-1",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-1 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-1",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-1 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-1",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-1 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-1",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-1 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-1",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-1 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-1",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-1 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-1",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-1 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-1",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-1 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: ".col-md-1",
    className: "form-control"
  }))))))));
}

BasicElements.displayName = 'BasicElements';
BasicElements.propTypes = {
  // react-router
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    enterBasicElements: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    leaveBasicElements: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  })
};
/* harmony default export */ __webpack_exports__["default"] = (BasicElements);

/***/ }),

/***/ "./src/front/views/basicElements/index.js":
/*!************************************************!*\
  !*** ./src/front/views/basicElements/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modules/actions */ "./src/front/redux/modules/actions.js");
/* harmony import */ var _BasicElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BasicElements */ "./src/front/views/basicElements/BasicElements.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      enterBasicElements: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["enterBasicElements"],
      leaveBasicElements: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["leaveBasicElements"]
    }, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_BasicElements__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/front/views/basicProgressBar/BasicProgressBar.js":
/*!**************************************************************!*\
  !*** ./src/front/views/basicProgressBar/BasicProgressBar.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-highlight */ "./node_modules/react-highlight/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_highlight__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./src/front/components/index.js");




var source = "\n  // import\n  import { ProgressBar } from './_SOMEWHERE_/components';\n\n  // in render():\n  <div className=\"row\">\n    <div className=\"col-xs-12\">\n      <Panel\n        title=\"Basic Progress Bars\"\n        hasTitle={true}>\n        <p>\n          <code>\n            .progress\n          </code>\n        </p>\n        <ProgressBar\n          barSize=\"progress\"\n          barStriped={false}\n          barStyle=\"primary\"\n          active={false}\n          valueNow={40}\n          valueMin={0}\n          valueMax={100}\n          screenReadersText={'40% Complete (success)'}\n        />\n        <p>\n          Class:\n          <code>\n            .sm\n          </code>\n        </p>\n        <ProgressBar\n          barSize=\"sm\"\n          barStriped={false}\n          barStyle=\"success\"\n          active={true}\n          valueNow={20}\n          valueMin={0}\n          valueMax={100}\n          screenReadersText={'20% Complete'}\n        />\n        <p>\n          Class:\n          <code>\n            .xs\n          </code>\n        </p>\n        <ProgressBar\n          barSize=\"xs\"\n          barStriped={false}\n          barStyle=\"warning\"\n          active={false}\n          valueNow={60}\n          valueMin={0}\n          valueMax={100}\n          screenReadersText={'60% Complete (warning)'}\n        />\n        <p>\n          Class:\n          <code>\n            .xxs\n          </code>\n        </p>\n        <ProgressBar\n          barSize=\"xxs\"\n          barStriped={false}\n          barStyle=\"danger\"\n          active={false}\n          valueNow={60}\n          valueMin={0}\n          valueMax={100}\n          screenReadersText={'60% Complete (warning)'}\n        />\n      </Panel>\n    </div>\n  </div>\n";

function BasicProgressBar(_ref) {
  var _ref$actions = _ref.actions,
      enterBasicProgressBar = _ref$actions.enterBasicProgressBar,
      leaveBasicProgressBar = _ref$actions.leaveBasicProgressBar;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    enterBasicProgressBar();
    return function () {
      leaveBasicProgressBar();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["AnimatedView"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Panel"], {
    title: "Basic Progress Bars",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".progress")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["ProgressBar"], {
    barSize: "progress",
    barStriped: false,
    barStyle: "primary",
    active: false,
    valueNow: 40,
    valueMin: 0,
    valueMax: 100,
    screenReadersText: "".concat(40, "% Complete (success)")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Class:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".sm")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["ProgressBar"], {
    barSize: "sm",
    barStriped: false,
    barStyle: "success",
    active: true,
    valueNow: 20,
    valueMin: 0,
    valueMax: 100,
    screenReadersText: "".concat(20, "% Complete")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Class:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".xs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["ProgressBar"], {
    barSize: "xs",
    barStriped: false,
    barStyle: "warning",
    active: false,
    valueNow: 60,
    valueMin: 0,
    valueMax: 100,
    screenReadersText: "".concat(60, "% Complete (warning)")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Class:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".xxs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["ProgressBar"], {
    barSize: "xxs",
    barStriped: false,
    barStyle: "danger",
    active: false,
    valueNow: 60,
    valueMin: 0,
    valueMax: 100,
    screenReadersText: "".concat(60, "% Complete (warning)")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Panel"], {
    title: "Source",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_highlight__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "javascript"
  }, source)))));
}

BasicProgressBar.displayName = 'BasicProgressBar';
BasicProgressBar.propTypes = {
  // react-router
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    enterBasicProgressBar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    leaveBasicProgressBar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (BasicProgressBar);

/***/ }),

/***/ "./src/front/views/basicProgressBar/index.js":
/*!***************************************************!*\
  !*** ./src/front/views/basicProgressBar/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modules/actions */ "./src/front/redux/modules/actions.js");
/* harmony import */ var _BasicProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BasicProgressBar */ "./src/front/views/basicProgressBar/BasicProgressBar.js");
// @fow





var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      enterBasicProgressBar: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["enterBasicProgressBar"],
      leaveBasicProgressBar: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["leaveBasicProgressBar"]
    }, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_BasicProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/front/views/breadcrumb/Breadcrumb.js":
/*!**************************************************!*\
  !*** ./src/front/views/breadcrumb/Breadcrumb.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-highlight */ "./node_modules/react-highlight/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_highlight__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components */ "./src/front/components/index.js");





var source = "\n  // import\n  import { Breadcrumb } from './_SOMEWHERE_/components';\n\n  // path (in state for example):\n  state = {\n    path: ['home', 'breadcrumb']\n  };\n\n  // in render():\n  <BreadcrumbComponent\n    path={this.state.path}\n  />\n";

function Breadcrumb(_ref) {
  var _ref$actions = _ref.actions,
      enterBreadcrumb = _ref$actions.enterBreadcrumb,
      leaveBreadcrumb = _ref$actions.leaveBreadcrumb;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(['home', 'breadcrumb']),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 1),
      path = _useState2[0];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    enterBreadcrumb();
    return function () {
      leaveBreadcrumb();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["AnimatedView"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Panel"], {
    title: "Breadcrumb",
    hasTitle: true,
    bodyBackGndColor: '#F4F5F6'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Breadcrumb"], {
    path: path
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Panel"], {
    title: "Source",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_highlight__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "javascript"
  }, source)))));
}

Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.propTypes = {
  // react-router
  match: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    enterBreadcrumb: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    leaveBreadcrumb: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Breadcrumb);

/***/ }),

/***/ "./src/front/views/breadcrumb/index.js":
/*!*********************************************!*\
  !*** ./src/front/views/breadcrumb/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modules/actions */ "./src/front/redux/modules/actions.js");
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Breadcrumb */ "./src/front/views/breadcrumb/Breadcrumb.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      enterBreadcrumb: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["enterBreadcrumb"],
      leaveBreadcrumb: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["leaveBreadcrumb"]
    }, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/front/views/earningGraph/EarningGraph.js":
/*!******************************************************!*\
  !*** ./src/front/views/earningGraph/EarningGraph.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-highlight */ "./node_modules/react-highlight/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_highlight__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components */ "./src/front/components/index.js");





var source = "\n  // import\n  import { EarningGraph } from './_SOMEWHERE_/components';\n\n  // labels and data (in state for example):\n  state = {\n    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n    datasets: [\n      {\n        label: 'My First dataset',\n        fillColor: 'rgba(220,220,220,0.2)',\n        strokeColor: 'rgba(220,220,220,1)',\n        pointColor: 'rgba(220,220,220,1)',\n        pointStrokeColor: '#fff',\n        pointHighlightFill: '#fff',\n        pointHighlightStroke: 'rgba(220,220,220,1)',\n        data: [65, 59, 80, 81, 56, 55, 40]\n      },\n      {\n        label: 'My Second dataset',\n        fillColor: 'rgba(151,187,205,0.2)',\n        strokeColor: 'rgba(151,187,205,1)',\n        pointColor: 'rgba(151,187,205,1)',\n        pointStrokeColor: '#fff',\n        pointHighlightFill: '#fff',\n        pointHighlightStroke: 'rgba(151,187,205,1)',\n        data: [28, 48, 40, 19, 86, 27, 90]\n      }\n    ]\n  };\n\n  // in render():\n  <div className=\"row\">\n    <div className=\"col-md-8 col-md-offset-2\">\n      <EarningGraph\n        labels={this.state.labels}\n        datasets={this.state.datasets}\n      />\n    </div>\n  </div>\n";

function EarningGraph(_ref) {
  var _ref$actions = _ref.actions,
      enterEarningGraph = _ref$actions.enterEarningGraph,
      leaveEarningGraph = _ref$actions.leaveEarningGraph;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(['January', 'February', 'March', 'April', 'May', 'June', 'July']),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 1),
      labels = _useState2[0];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    label: 'My First dataset',
    fillColor: 'rgba(220,220,220,0.2)',
    strokeColor: 'rgba(220,220,220,1)',
    pointColor: 'rgba(220,220,220,1)',
    pointStrokeColor: '#fff',
    pointHighlightFill: '#fff',
    pointHighlightStroke: 'rgba(220,220,220,1)',
    data: [65, 59, 80, 81, 56, 55, 40]
  }, {
    label: 'My Second dataset',
    fillColor: 'rgba(151,187,205,0.2)',
    strokeColor: 'rgba(151,187,205,1)',
    pointColor: 'rgba(151,187,205,1)',
    pointStrokeColor: '#fff',
    pointHighlightFill: '#fff',
    pointHighlightStroke: 'rgba(151,187,205,1)',
    data: [28, 48, 40, 19, 86, 27, 90]
  }]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 1),
      datasets = _useState4[0];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    enterEarningGraph();
    return function () {
      leaveEarningGraph();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["AnimatedView"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Panel"], {
    title: "Earning graph",
    hasTitle: true,
    bodyBackGndColor: '#F4F5F6'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-md-8 col-md-offset-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["EarningGraph"], {
    labels: labels,
    datasets: datasets
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Panel"], {
    title: "Source",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_highlight__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "javascript"
  }, source)))));
}

EarningGraph.displayName = 'EarningGraph';
EarningGraph.propTypes = {
  // react-router
  match: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    enterEarningGraph: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    leaveEarningGraph: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (EarningGraph);

/***/ }),

/***/ "./src/front/views/earningGraph/index.js":
/*!***********************************************!*\
  !*** ./src/front/views/earningGraph/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modules/actions */ "./src/front/redux/modules/actions.js");
/* harmony import */ var _EarningGraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EarningGraph */ "./src/front/views/earningGraph/EarningGraph.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      enterEarningGraph: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["enterEarningGraph"],
      leaveEarningGraph: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["leaveEarningGraph"]
    }, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_EarningGraph__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/front/views/general/General.js":
/*!********************************************!*\
  !*** ./src/front/views/general/General.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./src/front/components/index.js");
/* eslint no-console:0 */

/* eslint-disable react/no-unescaped-entities */




function General(_ref) {
  var _ref$actions = _ref.actions,
      enterGeneral = _ref$actions.enterGeneral,
      leaveGeneral = _ref$actions.leaveGeneral;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    enterGeneral();
    return function () {
      leaveGeneral();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["AnimatedView"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"], {
    path: ['Home', 'Dashboard', 'Current page']
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Stat"], {
    statFaIconName: "fa-file-o",
    statIconColor: "#fa8564",
    statLabel: "999 Projects"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Stat"], {
    statFaIconName: "fa-paperclip",
    statIconColor: "#45cf95",
    statLabel: "999 Documents"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Stat"], {
    statFaIconName: "fa-envelope-o",
    statIconColor: "#AC75F0",
    statLabel: "999 Messages"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Stat"], {
    statFaIconName: "fa-check-square-o",
    statIconColor: "#45cf95",
    statLabel: "1000 Tasks"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Stat"], {
    statFaIconName: "fa-dollar",
    statIconColor: "#AC75F0",
    statLabel: "$99999 Earnings"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Stat"], {
    statFaIconName: "fa-refresh",
    statIconColor: "#fa8564",
    statIconSpin: true,
    statLabel: "Processing...."
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Panel"], {
    title: "Basic Progress Bars",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".progress")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ProgressBar"], {
    barSize: "progress",
    barStriped: true,
    barStyle: "primary",
    active: false,
    valueNow: 40,
    valueMin: 0,
    valueMax: 100,
    screenReadersText: "".concat(40, "% Complete (success)")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Class:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".sm")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ProgressBar"], {
    barSize: "sm",
    barStriped: true,
    barStyle: "success",
    active: true,
    valueNow: 20,
    valueMin: 0,
    valueMax: 100,
    screenReadersText: "".concat(20, "% Complete")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Class:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".xs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ProgressBar"], {
    barSize: "xs",
    barStriped: true,
    barStyle: "warning",
    active: false,
    valueNow: 60,
    valueMin: 0,
    valueMax: 100,
    screenReadersText: "".concat(60, "% Complete (warning)")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Class:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".xxs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ProgressBar"], {
    barSize: "xxs",
    barStriped: true,
    barStyle: "danger",
    active: false,
    valueNow: 60,
    valueMin: 0,
    valueMax: 100,
    screenReadersText: "".concat(60, "% Complete (warning)")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Panel"], {
    title: "Striped Progress Bars",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".progress")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ProgressBar"], {
    barSize: "progress",
    barStriped: true,
    barStyle: "primary",
    active: false,
    valueNow: 40,
    valueMin: 0,
    valueMax: 100,
    screenReadersText: "".concat(40, "% Complete (success)")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Class:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".sm")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ProgressBar"], {
    barSize: "sm",
    barStriped: true,
    barStyle: "success",
    active: true,
    valueNow: 20,
    valueMin: 0,
    valueMax: 100,
    screenReadersText: "".concat(20, "% Complete")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Class:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".xs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ProgressBar"], {
    barSize: "xs",
    barStriped: true,
    barStyle: "warning",
    active: false,
    valueNow: 60,
    valueMin: 0,
    valueMax: 100,
    screenReadersText: "".concat(60, "% Complete (warning)")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Class:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".xxs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ProgressBar"], {
    barSize: "xxs",
    barStriped: true,
    barStyle: "danger",
    active: false,
    valueNow: 60,
    valueMin: 0,
    valueMax: 100,
    screenReadersText: "".concat(60, "% Complete (warning)")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Panel"], {
    title: "Tooltips",
    hasTitle: false,
    bodyCustomClass: "btn-gap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ToolTip"], {
    toolTipId: 'tooltipTop',
    toolTipContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Tooltip on top"),
    tooltipPlacement: 'top'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    title: "",
    className: "btn btn-default tooltips",
    type: "button"
  }, "Tooltip on top")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ToolTip"], {
    toolTipId: 'tooltipLeft',
    toolTipContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Tooltip on left"),
    tooltipPlacement: 'left'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    title: "",
    className: "btn btn-default tooltips",
    type: "button"
  }, "left")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ToolTip"], {
    toolTipId: 'tooltipBottom',
    toolTipContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Tooltip on bottom"),
    tooltipPlacement: 'bottom'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    title: "",
    className: "btn btn-default tooltips",
    type: "button"
  }, "bottom")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ToolTip"], {
    toolTipId: 'tooltipRight',
    toolTipContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Tooltip on right"),
    tooltipPlacement: 'right'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    title: "",
    className: "btn btn-default tooltips",
    type: "button"
  }, "right"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Panel"], {
    title: "Pagination",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Pagination"], {
    size: "large",
    numberOfPagination: 5
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Pagination"], {
    numberOfPagination: 5
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Pagination"], {
    size: "small",
    numberOfPagination: 5
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Default Example"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Pager"], {
    aligned: false,
    previous: 'Previous',
    next: 'Next'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Aligned links"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Pager"], {
    aligned: true,
    previous: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      "aria-hidden": "true"
    }, "\u2190"), "Older"),
    next: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Newer", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      "aria-hidden": "true"
    }, "\u2192"))
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["TabPanelHeader"], {
    tabItems: [{
      name: 'Home',
      tablink: 'home1',
      isActive: true
    }, {
      name: 'About',
      tablink: 'about1',
      isActive: false
    }, {
      name: 'Profile',
      tablink: 'profile1',
      isActive: false
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["TabPanelBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["TabPanelBodyContent"], {
    id: "home1"
  }, "\xA0Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["TabPanelBodyContent"], {
    id: "about1"
  }, "\xA0About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["TabPanelBodyContent"], {
    id: "profile1"
  }, "\xA0Profile"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["TabPanelHeader"], {
    tabItems: [{
      name: 'Home',
      tablink: 'home2',
      isActive: true
    }, {
      name: 'About',
      tablink: 'about2',
      isActive: false
    }, {
      name: 'Contact',
      tablink: 'contact2',
      isActive: false
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["TabPanelBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["TabPanelBodyContent"], {
    id: "home2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-home"
  }), "\xA0Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["TabPanelBodyContent"], {
    id: "about2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-user"
  }), "\xA0About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["TabPanelBodyContent"], {
    id: "contact2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-envelope-o"
  }), "\xA0Contact"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "panel-heading tab-bg-dark-navy-blue tab-right "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav nav-tabs pull-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "active"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    "data-toggle": "tab",
    href: "#home-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-home"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    "data-toggle": "tab",
    href: "#about-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-user"
  }), "\xA0About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    "data-toggle": "tab",
    href: "#contact-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-envelope-o"
  }), "\xA0Contact")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "home-3",
    className: "tab-pane active"
  }, "\xA0Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "about-3",
    className: "tab-pane"
  }, "\xA0About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "contact-3",
    className: "tab-pane"
  }, "\xA0Contact")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Panel"], {
    title: "Alerts",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    type: "danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Oh snap!"), "Change a few things up and try submitting again."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    type: "success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Well done!"), "You successfully read this important alert message."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    type: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Heads up!"), "This alert needs your attention, but it's not super important."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    type: "warning"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Warning!"), "Best check yo self, you're not looking too good.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Panel"], {
    title: "Default Buttons",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "default",
    onClick: function onClick() {
      return console.log('it should handle onClick callback');
    }
  }, "Default"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    onClick: function onClick() {
      return console.log('it should handle onClick callback');
    }
  }, "Primary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "success",
    onClick: function onClick() {
      return console.log('it should handle onClick callback');
    }
  }, "Success"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "info",
    onClick: function onClick() {
      return console.log('it should handle onClick callback');
    }
  }, "Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "warning",
    onClick: function onClick() {
      return console.log('it should handle onClick callback');
    }
  }, "Warning"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "danger",
    onClick: function onClick() {
      return console.log('it should handle onClick callback');
    }
  }, "Danger"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted text-center"
  }, "Labels"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    type: "default",
    text: "label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    type: "primary",
    text: "Primary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    type: "success",
    text: "Success"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    type: "info",
    text: "Info"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    type: "inverse",
    text: "Inverse"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    type: "warning",
    text: "Warning"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    type: "danger",
    text: "Danger"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted text-center"
  }, "Badges"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "m-bot-none text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge"
  }, "5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-primary"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-success"
  }, "15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-info"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-inverse"
  }, "25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-warning"
  }, "30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-danger"
  }, "35")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Modals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-success",
    "data-toggle": "modal",
    href: "#myModalGeneral"
  }, "Dialog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-warning",
    "data-toggle": "modal",
    href: "#myModalGeneral2"
  }, "Confirm"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-danger",
    "data-toggle": "modal",
    href: "#myModalGeneral3"
  }, "Alert !")))))));
}

General.displayName = 'General';
General.propTypes = {
  // react-router
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    enterGeneral: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    leaveGeneral: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  })
};
/* harmony default export */ __webpack_exports__["default"] = (General);

/***/ }),

/***/ "./src/front/views/general/index.js":
/*!******************************************!*\
  !*** ./src/front/views/general/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modules/actions */ "./src/front/redux/modules/actions.js");
/* harmony import */ var _General__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./General */ "./src/front/views/general/General.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      enterGeneral: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["enterGeneral"],
      leaveGeneral: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["leaveGeneral"]
    }, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_General__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/front/views/home/Home.js":
/*!**************************************!*\
  !*** ./src/front/views/home/Home.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./src/front/components/index.js");




function Home(_ref) {
  var _ref$actions = _ref.actions,
      enterHome = _ref$actions.enterHome,
      leaveHome = _ref$actions.leaveHome,
      fetchEarningGraphDataIfNeeded = _ref$actions.fetchEarningGraphDataIfNeeded,
      fetchTeamMatesDataIfNeeded = _ref$actions.fetchTeamMatesDataIfNeeded,
      teamMates = _ref.teamMates,
      teamMatesIsFetching = _ref.teamMatesIsFetching,
      earningGraphLabels = _ref.earningGraphLabels,
      earningGraphDatasets = _ref.earningGraphDatasets;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    enterHome();
    fetchEarningGraphDataIfNeeded();
    fetchTeamMatesDataIfNeeded();
    return function () {
      leaveHome();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["AnimatedView"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    style: {
      marginBottom: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["StatsCard"], {
    statValue: '3200',
    statLabel: 'Total Tasks',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-check-square-o"
    }),
    backColor: 'red'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["StatsCard"], {
    statValue: '2200',
    statLabel: 'Total Messages',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-envelope-o"
    }),
    backColor: 'violet'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["StatsCard"], {
    statValue: '100,320',
    statLabel: 'Total Profit',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-dollar"
    }),
    backColor: 'blue'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["StatsCard"], {
    statValue: '4567',
    statLabel: 'Total Documents',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-paperclip"
    }),
    backColor: 'green'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["EarningGraph"], {
    labels: earningGraphLabels,
    datasets: earningGraphDatasets
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Notifications"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["WorkProgress"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["TwitterFeed"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["TeamMatesDemo"], {
    isFetching: teamMatesIsFetching,
    members: teamMates
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["TodoListDemo"], null))));
}

Home.displayName = 'Home';
Home.propTypes = {
  // react-router 4:
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  earningGraphLabels: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  earningGraphDatasets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  teamMatesIsFetching: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  teamMates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    firstname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    lastname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    profile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    profileColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['danger', 'warning', 'info', 'success'])
  })),
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    enterHome: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    leaveHome: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    fetchEarningGraphDataIfNeeded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    fetchTeamMatesDataIfNeeded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/front/views/home/index.js":
/*!***************************************!*\
  !*** ./src/front/views/home/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modules/actions */ "./src/front/redux/modules/actions.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home */ "./src/front/views/home/Home.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView,
    earningGraphIsFetching: state.earningGraph.isFetching,
    earningGraphLabels: state.earningGraph.labels,
    earningGraphDatasets: state.earningGraph.datasets,
    teamMatesIsFetching: state.teamMates.isFetching,
    teamMates: state.teamMates.data
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      enterHome: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["enterHome"],
      leaveHome: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["leaveHome"],
      fetchEarningGraphDataIfNeeded: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["fetchEarningGraphDataIfNeeded"],
      fetchTeamMatesDataIfNeeded: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["fetchTeamMatesDataIfNeeded"]
    }, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_Home__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/front/views/index.js":
/*!**********************************!*\
  !*** ./src/front/views/index.js ***!
  \**********************************/
/*! exports provided: Home, SimpleTables, BasicElements, General, Modals, PageNotFound, StatsCard, EarningGraph, Notifications, WorkProgress, TwitterFeed, TeamMatesView, TodoListView, Breadcrumb, Stat, BasicProgressBar, TabPanel, StripedProgressBar, AlertView, PaginationView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/front/views/home/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return _home__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _simpleTables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simpleTables */ "./src/front/views/simpleTables/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleTables", function() { return _simpleTables__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _basicElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basicElements */ "./src/front/views/basicElements/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicElements", function() { return _basicElements__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general */ "./src/front/views/general/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "General", function() { return _general__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _modals_Modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals/Modals */ "./src/front/views/modals/Modals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return _modals_Modals__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _pageNotFound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pageNotFound */ "./src/front/views/pageNotFound/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageNotFound", function() { return _pageNotFound__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _statsCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./statsCard */ "./src/front/views/statsCard/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatsCard", function() { return _statsCard__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _earningGraph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./earningGraph */ "./src/front/views/earningGraph/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EarningGraph", function() { return _earningGraph__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notifications */ "./src/front/views/notifications/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notifications", function() { return _notifications__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _workProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./workProgress */ "./src/front/views/workProgress/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkProgress", function() { return _workProgress__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _twitterFeed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./twitterFeed */ "./src/front/views/twitterFeed/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TwitterFeed", function() { return _twitterFeed__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _teamMates__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./teamMates */ "./src/front/views/teamMates/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamMatesView", function() { return _teamMates__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./todoList */ "./src/front/views/todoList/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoListView", function() { return _todoList__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _breadcrumb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./breadcrumb */ "./src/front/views/breadcrumb/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return _breadcrumb__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _stat__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stat */ "./src/front/views/stat/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stat", function() { return _stat__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _basicProgressBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./basicProgressBar */ "./src/front/views/basicProgressBar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicProgressBar", function() { return _basicProgressBar__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _tabPanel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tabPanel */ "./src/front/views/tabPanel/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPanel", function() { return _tabPanel__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _stripedProgressBar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./stripedProgressBar */ "./src/front/views/stripedProgressBar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StripedProgressBar", function() { return _stripedProgressBar__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./alert */ "./src/front/views/alert/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertView", function() { return _alert__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pagination */ "./src/front/views/pagination/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationView", function() { return _pagination__WEBPACK_IMPORTED_MODULE_19__["default"]; });






















/***/ }),

/***/ "./src/front/views/login/Login.js":
/*!****************************************!*\
  !*** ./src/front/views/login/Login.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth */ "./src/front/services/auth/index.js");



// #region imports





// #endregion
function Login(_ref) {
  var _ref$isFetching = _ref.isFetching,
      isFetching = _ref$isFetching === void 0 ? false : _ref$isFetching,
      _ref$isLogging = _ref.isLogging,
      isLogging = _ref$isLogging === void 0 ? false : _ref$isLogging,
      enterLogin = _ref.enterLogin,
      disconnectUser = _ref.disconnectUser,
      leaveLogin = _ref.leaveLogin,
      history = _ref.history,
      logUserIfNeeded = _ref.logUserIfNeeded;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1]; // #region on mount and unmount:


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    disconnectUser(); // diconnect user: remove token and user info

    enterLogin();
    return function () {
      leaveLogin();
    };
  }, []); // #region form inputs change callbacks

  var handlesOnEmailChange = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (event) {
    if (event) {
      event.preventDefault(); // should add some validator before setState in real use cases
      // $FlowIgnore

      setEmail({
        email: event.target.value.trim()
      });
    }
  }, []);
  var handlesOnPasswordChange = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (event) {
    if (event) {
      event.preventDefault(); // should add some validator before setState in real use cases
      // $FlowIgnore

      setPassword({
        password: event.target.value.trim()
      });
    }
  }, []); // #endregion
  // #region on login button click callback

  var handlesOnLogin = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])( /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(event) {
      var response, _response$payload$dat, token, login, firstname, lastname, picture, showPicture, user;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event && event.preventDefault();
              _context.prev = 1;
              _context.next = 4;
              return logUserIfNeeded(email, password);

            case 4:
              response = _context.sent;
              _response$payload$dat = response.payload.data, token = _response$payload$dat.token, login = _response$payload$dat.login, firstname = _response$payload$dat.firstname, lastname = _response$payload$dat.lastname, picture = _response$payload$dat.picture, showPicture = _response$payload$dat.showPicture;
              user = {
                login: login,
                firstname: firstname,
                lastname: lastname,
                picture: picture,
                showPicture: showPicture
              };
              _services_auth__WEBPACK_IMPORTED_MODULE_6__["default"].setToken(token);
              _services_auth__WEBPACK_IMPORTED_MODULE_6__["default"].setUserInfo(user);
              history.push({
                pathname: '/'
              }); // back to Home

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);

              /* eslint-disable no-console */
              console.log('login went wrong..., error: ', _context.t0);
              /* eslint-enable no-console */

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 12]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [email, password]); // #endregion
  // #region on go back home button click callback

  var goHome = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (event) {
    event && event.preventDefault();
    history.push({
      pathname: '/'
    });
  }, []); // #endregion

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: 4,
    mdOffset: 4,
    xs: 10,
    xsOffset: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    className: "form-horizontal",
    noValidate: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("legend", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "fa fa-3x fa-user-circle",
    "aria-hidden": "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    htmlFor: "inputEmail",
    className: "col-lg-2 control-label"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: "inputEmail",
    placeholder: "Email",
    value: email,
    onChange: handlesOnEmailChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    htmlFor: "inputPassword",
    className: "col-lg-2 control-label"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "password",
    className: "form-control",
    id: "inputPassword",
    placeholder: "Password",
    value: password,
    onChange: handlesOnPasswordChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: 10,
    lgOffset: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    className: "login-button btn-block",
    bsStyle: "primary",
    disabled: isLogging,
    onClick: handlesOnLogin
  }, isLogging ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "login in... \xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "fa fa-spinner fa-pulse fa-fw"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "Login")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: 4,
    mdOffset: 4,
    xs: 10,
    xsOffset: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "pull-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    bsStyle: "default",
    onClick: goHome
  }, "back to home")))));
}

Login.displayName = 'Login';
Login.propTypes = {
  // react-router 4:
  match: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  // views props:
  currentView: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  enterLogin: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  leaveLogin: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  // userAuth:
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  isFetching: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  isLogging: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  disconnectUser: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  logUserIfNeeded: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/front/views/login/index.js":
/*!****************************************!*\
  !*** ./src/front/views/login/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_modules_views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/modules/views */ "./src/front/redux/modules/views.js");
/* harmony import */ var _redux_modules_userAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/modules/userAuth */ "./src/front/redux/modules/userAuth.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Login */ "./src/front/views/login/Login.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView,
    isAuthenticated: state.userAuth.isAuthenticated,
    isFetching: state.userAuth.isFetching,
    isLogging: state.userAuth.isLogging
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])(_objectSpread(_objectSpread({}, _redux_modules_views__WEBPACK_IMPORTED_MODULE_3__), _redux_modules_userAuth__WEBPACK_IMPORTED_MODULE_4__), dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(_Login__WEBPACK_IMPORTED_MODULE_5__["default"]));

/***/ }),

/***/ "./src/front/views/modals/Modals.js":
/*!******************************************!*\
  !*** ./src/front/views/modals/Modals.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Modals = function Modals(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "generalViewModals"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal fade",
    id: "myModalGeneral",
    tabIndex: "-1",
    role: "dialog",
    "aria-labelledby": "myModalLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-hidden": "true"
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "modal-title"
  }, "Modal Tittle")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, "Body goes here..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "data-dismiss": "modal",
    className: "btn btn-default",
    type: "button"
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-success",
    type: "button"
  }, "Save changes"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal fade",
    id: "myModalGeneral2",
    tabIndex: "-1",
    role: "dialog",
    "aria-labelledby": "myModalLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-hidden": "true"
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "modal-title"
  }, "Modal Tittle")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, "Body goes here..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "data-dismiss": "modal",
    className: "btn btn-default",
    type: "button"
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-warning",
    type: "button"
  }, "Confirm"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal fade",
    id: "myModalGeneral3",
    tabIndex: "-1",
    role: "dialog",
    "aria-labelledby": "myModalLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-hidden": "true"
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "modal-title"
  }, "Modal Tittle")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, "Body goes here..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-danger",
    type: "button"
  }, "Ok")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "basicElementsModals"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "aria-hidden": "true",
    "aria-labelledby": "myModalLabel",
    role: "dialog",
    tabIndex: "-1",
    id: "myModalBasicElements",
    className: "modal fade"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "aria-hidden": "true",
    "data-dismiss": "modal",
    className: "close",
    type: "button"
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "modal-title"
  }, "Form Tittle")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    role: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "exampleInputEmail1"
  }, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    className: "form-control",
    id: "exampleInputEmail3",
    placeholder: "Enter email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "exampleInputPassword1"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "password",
    className: "form-control",
    id: "exampleInputPassword3",
    placeholder: "Password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "exampleInputFile"
  }, "File input"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    id: "exampleInputFile3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "help-block"
  }, "Example block-level help text here.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox"
  }), "Check me out")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-default"
  }, "Submit")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "aria-hidden": "true",
    "aria-labelledby": "myModalLabel",
    role: "dialog",
    tabIndex: "-1",
    id: "myModalBasicElements-1",
    className: "modal fade"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "aria-hidden": "true",
    "data-dismiss": "modal",
    className: "close",
    type: "button"
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "modal-title"
  }, "Form Tittle")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form-horizontal",
    role: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "inputEmail1",
    className: "col-lg-2 col-sm-2 control-label"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    className: "form-control",
    id: "inputEmail4",
    placeholder: "Email"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "inputPassword1",
    className: "col-lg-2 col-sm-2 control-label"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "password",
    className: "form-control",
    id: "inputPassword4",
    placeholder: "Password"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-offset-2 col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox"
  }), "Remember me")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-offset-2 col-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-default"
  }, "Sign in")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "aria-hidden": "true",
    "aria-labelledby": "myModalLabel",
    role: "dialog",
    tabIndex: "-1",
    id: "myModalBasicElements-2",
    className: "modal fade"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "aria-hidden": "true",
    "data-dismiss": "modal",
    className: "close",
    type: "button"
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "modal-title"
  }, "Form Tittle")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form-inline",
    role: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "exampleInputEmail2"
  }, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    className: "form-control sm-input",
    id: "exampleInputEmail5",
    placeholder: "Enter email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "exampleInputPassword2"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "password",
    className: "form-control sm-input",
    id: "exampleInputPassword5",
    placeholder: "Password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox"
  }), "Remember me")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-default"
  }, "Sign in"))))))));
};

Modals.displayName = 'Modals';
Modals.propTypes = {
  // react-router 4:
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Modals);

/***/ }),

/***/ "./src/front/views/notifications/Notifications.js":
/*!********************************************************!*\
  !*** ./src/front/views/notifications/Notifications.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-highlight */ "./node_modules/react-highlight/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_highlight__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./src/front/components/index.js");
/* eslint-disable react/no-unescaped-entities */




var source = "\n  // import\n  import { NotificationPanel, Notification } from './_SOMEWHERE_/components';\n\n  // in render():\n  <div className=\"row\">\n    <div className=\"col-md-4 col-md-offset-4\">\n      <NotificationPanel title=\"notifications\">\n          <Notification type={'danger'}>\n            <span>\n              <strong>\n                Oh snap!\n              </strong>\n              Change a few things up and try submitting again.\n            </span>\n          </Notification>\n\n          <Notification type={'success'}>\n            <span>\n              <strong>\n                Well done!\n              </strong>\n              You successfully read this important alert message.\n            </span>\n          </Notification>\n\n          <Notification type={'info'}>\n            <span>\n              <strong>\n                Heads up!\n              </strong>\n              This alert needs your attention, but it's not super important.\n            </span>\n          </Notification>\n\n          <Notification type={'warning'}>\n            <span>\n              <strong>\n                Warning!\n              </strong>\n              Best check yo self, you're not looking too good.\n            </span>\n          </Notification>\n\n          <Notification type={'danger'}>\n            <span>\n              <strong>\n                Oh snap!\n              </strong>\n              Change a few things up and try submitting again.\n            </span>\n          </Notification>\n\n      </NotificationPanel>\n    </div>\n  </div>\n";

function Notifications(_ref) {
  var _ref$actions = _ref.actions,
      enterNotifications = _ref$actions.enterNotifications,
      leaveNotifications = _ref$actions.leaveNotifications;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    enterNotifications();
    return function () {
      leaveNotifications();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["AnimatedView"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Panel"], {
    title: "Notifications",
    hasTitle: true,
    bodyBackGndColor: '#F4F5F6'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 col-md-offset-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["NotificationPanel"], {
    title: "notifications"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Notification"], {
    type: 'danger'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Oh snap!"), "Change a few things up and try submitting again.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Notification"], {
    type: 'success'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Well done!"), "You successfully read this important alert message.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Notification"], {
    type: 'info'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Heads up!"), "This alert needs your attention, but it's not super important.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Notification"], {
    type: 'warning'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Warning!"), "Best check yo self, you're not looking too good.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Notification"], {
    type: 'danger'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Oh snap!"), "Change a few things up and try submitting again.")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Panel"], {
    title: "Source",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_highlight__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "javascript"
  }, source)))));
}

Notifications.displayName = 'Notifications';
Notifications.propTypes = {
  // react-router 4:
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    enterNotifications: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    leaveNotifications: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Notifications);

/***/ }),

/***/ "./src/front/views/notifications/index.js":
/*!************************************************!*\
  !*** ./src/front/views/notifications/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modules/actions */ "./src/front/redux/modules/actions.js");
/* harmony import */ var _Notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Notifications */ "./src/front/views/notifications/Notifications.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      enterNotifications: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["enterNotifications"],
      leaveNotifications: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["leaveNotifications"]
    }, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_Notifications__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/front/views/pageNotFound/PageNotFound.js":
/*!******************************************************!*\
  !*** ./src/front/views/pageNotFound/PageNotFound.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_animatedView_AnimatedView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/animatedView/AnimatedView */ "./src/front/components/animatedView/AnimatedView.js");




function PageNotFound(_ref) {
  var _ref$actions = _ref.actions,
      enterPageNotFound = _ref$actions.enterPageNotFound,
      leavePageNotFound = _ref$actions.leavePageNotFound;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    enterPageNotFound();
    return function () {
      leavePageNotFound();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_animatedView_AnimatedView__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-frown-o",
    "aria-hidden": "true"
  }), "\xA0 Sorry... This page does not exist"))));
}

PageNotFound.displayName = 'PageNotFound';
PageNotFound.propTypes = {
  // react-router 4:
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    enterPageNotFound: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    leavePageNotFound: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (PageNotFound);

/***/ }),

/***/ "./src/front/views/pageNotFound/index.js":
/*!***********************************************!*\
  !*** ./src/front/views/pageNotFound/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_modules_views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/modules/views */ "./src/front/redux/modules/views.js");
/* harmony import */ var _PageNotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageNotFound */ "./src/front/views/pageNotFound/PageNotFound.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])(_objectSpread({}, _redux_modules_views__WEBPACK_IMPORTED_MODULE_3__), dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(_PageNotFound__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ }),

/***/ "./src/front/views/pagination/Pagination.js":
/*!**************************************************!*\
  !*** ./src/front/views/pagination/Pagination.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-highlight */ "./node_modules/react-highlight/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_highlight__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./src/front/components/index.js");




var source = "\n  // in render():\n  <div className=\"text-center\">\n    <Pagination\n      size=\"large\"\n      numberOfPagination={5}\n    />\n  </div>\n  <div className=\"text-center\">\n    <Pagination\n      numberOfPagination={5}\n    />\n  </div>\n  <div className=\"text-center\">\n    <Pagination\n      size=\"small\"\n      numberOfPagination={5}\n    />\n  </div>\n  <div>\n    <h3>Default Example</h3>\n    <Pager\n      aligned={false}\n      previous={'Previous'}\n      next={'Next'}\n    />\n  </div>\n  <div>\n    <h3>Aligned links</h3>\n    <Pager\n      aligned={true}\n      previous={\n        <div>\n          <span aria-hidden=\"true\">\n            &larr;\n          </span>\n          Older\n        </div>\n      }\n      next={(\n        <div>\n          Newer\n          <span aria-hidden=\"true\">\n            &rarr;\n          </span>\n        </div>\n      )}\n    />\n  </div>\n";

function PaginationView(_ref) {
  var _ref$actions = _ref.actions,
      enterPagination = _ref$actions.enterPagination,
      leavePagination = _ref$actions.leavePagination;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    enterPagination();
    return function () {
      leavePagination();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["AnimatedView"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Panel"], {
    title: "Pagination",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Pagination"], {
    size: "large",
    numberOfPagination: 5
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Pagination"], {
    numberOfPagination: 5
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Pagination"], {
    size: "small",
    numberOfPagination: 5
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Default Example"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Pager"], {
    aligned: false,
    previous: 'Previous',
    next: 'Next'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Aligned links"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Pager"], {
    aligned: true,
    previous: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      "aria-hidden": "true"
    }, "\u2190"), "Older"),
    next: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Newer", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      "aria-hidden": "true"
    }, "\u2192"))
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Panel"], {
    title: "Source",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_highlight__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "javascript"
  }, source)))));
}

PaginationView.displayName = 'PaginationView';
PaginationView.propTypes = {
  // react-router 4:
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    enterPagination: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    leavePagination: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (PaginationView);

/***/ }),

/***/ "./src/front/views/pagination/index.js":
/*!*********************************************!*\
  !*** ./src/front/views/pagination/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modules/actions */ "./src/front/redux/modules/actions.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pagination */ "./src/front/views/pagination/Pagination.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      enterPagination: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["enterPagination"],
      leavePagination: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["leavePagination"]
    }, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_Pagination__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/front/views/protected/Protected.js":
/*!************************************************!*\
  !*** ./src/front/views/protected/Protected.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_animatedView_AnimatedView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/animatedView/AnimatedView */ "./src/front/components/animatedView/AnimatedView.js");




function Protected(_ref) {
  var _ref$actions = _ref.actions,
      enterProtected = _ref$actions.enterProtected,
      leaveProtected = _ref$actions.leaveProtected;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    enterProtected();
    return function () {
      leaveProtected();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_animatedView_AnimatedView__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Protected view"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "If you can read, it means you are authenticated"));
}

Protected.displayName = 'Protected';
Protected.propTypes = {
  // react-router 4:
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  currentView: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    enterProtected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    leaveProtected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Protected);

/***/ }),

/***/ "./src/front/views/protected/index.js":
/*!********************************************!*\
  !*** ./src/front/views/protected/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_modules_views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modules/views */ "./src/front/redux/modules/views.js");
/* harmony import */ var _Protected__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Protected */ "./src/front/views/protected/Protected.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    // views
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      enterProtected: _redux_modules_views__WEBPACK_IMPORTED_MODULE_2__["enterProtected"],
      leaveProtected: _redux_modules_views__WEBPACK_IMPORTED_MODULE_2__["leaveProtected"]
    }, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_Protected__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/front/views/simpleTables/index.js":
/*!***********************************************!*\
  !*** ./src/front/views/simpleTables/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modules/actions */ "./src/front/redux/modules/actions.js");
/* harmony import */ var _simpleTables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simpleTables */ "./src/front/views/simpleTables/simpleTables.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      enterSimpleTables: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["enterSimpleTables"],
      leaveSimpleTables: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["leaveSimpleTables"]
    }, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_simpleTables__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/front/views/simpleTables/simpleTables.js":
/*!******************************************************!*\
  !*** ./src/front/views/simpleTables/simpleTables.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./src/front/components/index.js");




function SimpleTables(_ref) {
  var _ref$actions = _ref.actions,
      enterSimpleTables = _ref$actions.enterSimpleTables,
      leaveSimpleTables = _ref$actions.leaveSimpleTables;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    enterSimpleTables();
    return function () {
      leaveSimpleTables();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["AnimatedView"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "panel-heading"
  }, "Bordered Table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-bordered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    style: {
      width: '10px'
    }
  }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Task"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    style: {
      width: '40px'
    }
  }, "Label"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "1."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Update software"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bar progress-bar-danger",
    style: {
      width: '55%'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge bg-red"
  }, "55%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "2."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Clean database"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bar progress-bar-yellow",
    style: {
      width: '70%'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge bg-yellow"
  }, "70%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "3."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Cron job running"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress xs progress-striped active"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bar progress-bar-primary",
    style: {
      width: '30%'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge bg-light-blue"
  }, "30%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "4."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Fix and squish bugs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress xs progress-striped active"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bar progress-bar-success",
    style: {
      width: '90%'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge bg-green"
  }, "90%"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "table-foot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "pagination pagination-sm no-margin pull-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "\xAB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "\xBB")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "panel-heading"
  }, "Condensed Full Width Table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-body no-padding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-condensed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    style: {
      width: '10px'
    }
  }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Task"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    style: {
      width: '40px'
    }
  }, "Label"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "1."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Update software"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bar progress-bar-danger",
    style: {
      width: '55%'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge bg-red"
  }, "55%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "2."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Clean database"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bar progress-bar-yellow",
    style: {
      width: '70%'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge bg-yellow"
  }, "70%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "3."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Cron job running"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress xs progress-striped active"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bar progress-bar-primary",
    style: {
      width: '30%'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge bg-light-blue"
  }, "30%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "4."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Fix and squish bugs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress xs progress-striped active"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bar progress-bar-success",
    style: {
      width: '90%'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge bg-green"
  }, "90%")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "panel-heading"
  }, "Simple Full Width Table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box-tools"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "pagination pagination-sm m-b-10 m-t-10 pull-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "\xAB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "\xBB")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    style: {
      width: '10px'
    }
  }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Task"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    style: {
      width: '40px'
    }
  }, "Label"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "1."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Update software"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bar progress-bar-danger",
    style: {
      width: '55%'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge bg-red"
  }, "55%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "2."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Clean database"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bar progress-bar-yellow",
    style: {
      width: '70%'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge bg-yellow"
  }, "70%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "3."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Cron job running"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress xs progress-striped active"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bar progress-bar-primary",
    style: {
      width: '30%'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge bg-light-blue"
  }, "30%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "4."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Fix and squish bugs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress xs progress-striped active"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bar progress-bar-success",
    style: {
      width: '90%'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge bg-green"
  }, "90%"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "panel-heading"
  }, "Striped Full Width Table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-striped"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    style: {
      width: '10px'
    }
  }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Task"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    style: {
      width: '40px'
    }
  }, "Label"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "1."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Update software"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bar progress-bar-danger",
    style: {
      width: '55%'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge bg-red"
  }, "55%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "2."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Clean database"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bar progress-bar-yellow",
    style: {
      width: '70%'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge bg-yellow"
  }, "70%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "3."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Cron job running"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress xs progress-striped active"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bar progress-bar-primary",
    style: {
      width: '30%'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge bg-light-blue"
  }, "30%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "4."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Fix and squish bugs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress xs progress-striped active"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bar progress-bar-success",
    style: {
      width: '90%'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge bg-green"
  }, "90%"))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "panel-heading"
  }, "Responsive Hover Table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-body table-responsive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box-tools m-b-15"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "table_search",
    className: "form-control input-sm pull-right",
    style: {
      width: '150px'
    },
    placeholder: "Search"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-sm btn-default"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-search"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-hover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "User"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Reason"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "183"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "John Doe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "11-7-2014"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "label label-success"
  }, "Approved")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "219"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Jane Doe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "11-7-2014"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "label label-warning"
  }, "Pending")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "657"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Bob Doe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "11-7-2014"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "label label-primary"
  }, "Approved")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "175"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Mike Doe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "11-7-2014"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "label label-danger"
  }, "Denied")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.")))))))));
}

SimpleTables.displayName = 'SimpleTables';
SimpleTables.propTypes = {
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    enterSimpleTables: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    leaveSimpleTables: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  })
};
/* harmony default export */ __webpack_exports__["default"] = (SimpleTables);

/***/ }),

/***/ "./src/front/views/stat/Stat.js":
/*!**************************************!*\
  !*** ./src/front/views/stat/Stat.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./src/front/components/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-highlight */ "./node_modules/react-highlight/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_highlight__WEBPACK_IMPORTED_MODULE_3__);




var source = "\n  // import\n  import { Stat } from './_SOMEWHERE_/components';\n\n  // in render():\n  <div className=\"row\">\n    <div className=\"col-md-2\">\n      <Stat\n        statFaIconName=\"fa-file-o\"\n        statIconColor=\"#fa8564\"\n        statLabel=\"999 Projects\"\n      />\n    </div>\n    <div className=\"col-md-2\">\n      <Stat\n        statFaIconName=\"fa-paperclip\"\n        statIconColor=\"#45cf95\"\n        statLabel=\"999 Documents\"\n      />\n    </div>\n    <div className=\"col-md-2\">\n      <Stat\n        statFaIconName=\"fa-envelope-o\"\n        statIconColor=\"#AC75F0\"\n        statLabel=\"999 Messages\"\n      />\n    </div>\n    <div className=\"col-md-2\">\n      <Stat\n        statFaIconName=\"fa-check-square-o\"\n        statIconColor=\"#45cf95\"\n        statLabel=\"1000 Tasks\"\n      />\n    </div>\n    <div className=\"col-md-2\">\n      <Stat\n        statFaIconName=\"fa-dollar\"\n        statIconColor=\"#AC75F0\"\n        statLabel=\"$99999 Earnings\"\n      />\n    </div>\n    <div className=\"col-md-2\">\n      <Stat\n        statFaIconName=\"fa-refresh\"\n        statIconColor=\"#fa8564\"\n        statIconSpin={true}\n        statLabel=\"Processing....\"\n      />\n    </div>\n  </div>\n";

function Stat(_ref) {
  var _ref$actions = _ref.actions,
      enterStat = _ref$actions.enterStat,
      leaveStat = _ref$actions.leaveStat;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    enterStat();
    return function () {
      leaveStat();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["AnimatedView"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Panel"], {
    title: "Stat",
    hasTitle: true,
    bodyBackGndColor: '#F4F5F6'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Stat"], {
    statFaIconName: "fa-file-o",
    statIconColor: "#fa8564",
    statLabel: "999 Projects"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Stat"], {
    statFaIconName: "fa-paperclip",
    statIconColor: "#45cf95",
    statLabel: "999 Documents"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Stat"], {
    statFaIconName: "fa-envelope-o",
    statIconColor: "#AC75F0",
    statLabel: "999 Messages"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Stat"], {
    statFaIconName: "fa-check-square-o",
    statIconColor: "#45cf95",
    statLabel: "1000 Tasks"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Stat"], {
    statFaIconName: "fa-dollar",
    statIconColor: "#AC75F0",
    statLabel: "$99999 Earnings"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Stat"], {
    statFaIconName: "fa-refresh",
    statIconColor: "#fa8564",
    statIconSpin: true,
    statLabel: "Processing...."
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Panel"], {
    title: "Source",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_highlight__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "javascript"
  }, source)))));
}

Stat.displayName = 'Stat';
Stat.propTypes = {
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    enterStat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    leaveStat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Stat);

/***/ }),

/***/ "./src/front/views/stat/index.js":
/*!***************************************!*\
  !*** ./src/front/views/stat/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modules/actions */ "./src/front/redux/modules/actions.js");
/* harmony import */ var _Stat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Stat */ "./src/front/views/stat/Stat.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      enterStat: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["enterStat"],
      leaveStat: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["leaveStat"]
    }, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_Stat__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/front/views/statsCard/index.js":
/*!********************************************!*\
  !*** ./src/front/views/statsCard/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modules/actions */ "./src/front/redux/modules/actions.js");
/* harmony import */ var _statsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statsCard */ "./src/front/views/statsCard/statsCard.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      enterStatsCard: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["enterStatsCard"],
      leaveStatsCard: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["leaveStatsCard"]
    }, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_statsCard__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/front/views/statsCard/statsCard.js":
/*!************************************************!*\
  !*** ./src/front/views/statsCard/statsCard.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./src/front/components/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-highlight */ "./node_modules/react-highlight/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_highlight__WEBPACK_IMPORTED_MODULE_3__);




var source = "\n  // import\n  import { StatsCard } from './_SOMEWHERE_/components';\n\n  // in render():\n  <div className=\"col-md-3\">\n    <StatsCard\n      statValue={'3200'}\n      statLabel={'Total Tasks'}\n      icon={<i className=\"fa fa-check-square-o\"></i>}\n      backColor={'red'}\n    />\n  </div>\n  <div className=\"col-md-3\">\n    <StatsCard\n      statValue={'2200'}\n      statLabel={'Total Messages'}\n      icon={<i className=\"fa fa-envelope-o\"></i>}\n      backColor={'violet'}\n    />\n  </div>\n  <div className=\"col-md-3\">\n    <StatsCard\n      statValue={'100,320'}\n      statLabel={'Total Profit'}\n      icon={<i className=\"fa fa-dollar\"></i>}\n      backColor={'blue'}\n    />\n  </div>\n  <div className=\"col-md-3\">\n    <StatsCard\n      statValue={'4567'}\n      statLabel={'Total Documents'}\n      icon={<i className=\"fa fa-paperclip\"></i>}\n      backColor={'green'}\n    />\n  </div>\n";

function StatsCard(_ref) {
  var _ref$actions = _ref.actions,
      enterStatsCard = _ref$actions.enterStatsCard,
      leaveStatsCard = _ref$actions.leaveStatsCard;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    enterStatsCard();
    return function () {
      leaveStatsCard();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["AnimatedView"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Panel"], {
    title: "Stats cards",
    hasTitle: true,
    bodyBackGndColor: '#F4F5F6'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["StatsCard"], {
    statValue: '3200',
    statLabel: 'Total Tasks',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-check-square-o"
    }),
    backColor: 'red'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["StatsCard"], {
    statValue: '2200',
    statLabel: 'Total Messages',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-envelope-o"
    }),
    backColor: 'violet'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["StatsCard"], {
    statValue: '100,320',
    statLabel: 'Total Profit',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-dollar"
    }),
    backColor: 'blue'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["StatsCard"], {
    statValue: '4567',
    statLabel: 'Total Documents',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-paperclip"
    }),
    backColor: 'green'
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Panel"], {
    title: "Source",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_highlight__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "javascript"
  }, source)))));
}

StatsCard.displayName = 'StatsCard';
StatsCard.propTypes = {
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    enterStatsCard: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    leaveStatsCard: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (StatsCard);

/***/ }),

/***/ "./src/front/views/stripedProgressBar/StripedProgressBar.js":
/*!******************************************************************!*\
  !*** ./src/front/views/stripedProgressBar/StripedProgressBar.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./src/front/components/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-highlight */ "./node_modules/react-highlight/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_highlight__WEBPACK_IMPORTED_MODULE_3__);




var source = "\n  // import\n  import { ProgressBar } from './_SOMEWHERE_/components';\n\n  // in render():\n  <div className=\"row\">\n    <div className=\"col-xs-12\">\n      <Panel\n        title=\"Basic Progress Bars\"\n        hasTitle={true}>\n        <p>\n          <code>\n            .progress\n          </code>\n        </p>\n        <ProgressBar\n          barSize=\"progress\"\n          barStriped={true}\n          barStyle=\"primary\"\n          active={false}\n          valueNow={40}\n          valueMin={0}\n          valueMax={100}\n          screenReadersText={'40% Complete (success)'}\n        />\n        <p>\n          Class:\n          <code>\n            .sm\n          </code>\n        </p>\n        <ProgressBar\n          barSize=\"sm\"\n          barStriped={true}\n          barStyle=\"success\"\n          active={true}\n          valueNow={20}\n          valueMin={0}\n          valueMax={100}\n          screenReadersText={'20% Complete'}\n        />\n        <p>\n          Class:\n          <code>\n            .xs\n          </code>\n        </p>\n        <ProgressBar\n          barSize=\"xs\"\n          barStriped={true}\n          barStyle=\"warning\"\n          active={false}\n          valueNow={60}\n          valueMin={0}\n          valueMax={100}\n          screenReadersText={'60% Complete (warning)'}\n        />\n        <p>\n          Class:\n          <code>\n            .xxs\n          </code>\n        </p>\n        <ProgressBar\n          barSize=\"xxs\"\n          barStriped={true}\n          barStyle=\"danger\"\n          active={false}\n          valueNow={60}\n          valueMin={0}\n          valueMax={100}\n          screenReadersText={'60% Complete (warning)'}\n        />\n      </Panel>\n    </div>\n  </div>\n";

function StripedProgressBar(_ref) {
  var _ref$actions = _ref.actions,
      enterStripedProgressBar = _ref$actions.enterStripedProgressBar,
      leaveStripedProgressBar = _ref$actions.leaveStripedProgressBar;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    enterStripedProgressBar();
    return function () {
      leaveStripedProgressBar();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["AnimatedView"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Panel"], {
    title: "Striped Progress Bars",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".progress")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ProgressBar"], {
    barSize: "progress",
    barStriped: true,
    barStyle: "primary",
    active: false,
    valueNow: 40,
    valueMin: 0,
    valueMax: 100,
    screenReadersText: "".concat(40, "% Complete (success)")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Class:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".sm")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ProgressBar"], {
    barSize: "sm",
    barStriped: true,
    barStyle: "success",
    active: true,
    valueNow: 20,
    valueMin: 0,
    valueMax: 100,
    screenReadersText: "".concat(20, "% Complete")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Class:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".xs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ProgressBar"], {
    barSize: "xs",
    barStriped: true,
    barStyle: "warning",
    active: false,
    valueNow: 60,
    valueMin: 0,
    valueMax: 100,
    screenReadersText: "".concat(60, "% Complete (warning)")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Class:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, ".xxs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ProgressBar"], {
    barSize: "xxs",
    barStriped: true,
    barStyle: "danger",
    active: false,
    valueNow: 60,
    valueMin: 0,
    valueMax: 100,
    screenReadersText: "".concat(60, "% Complete (warning)")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Panel"], {
    title: "Source",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_highlight__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "javascript"
  }, source)))));
}

StripedProgressBar.displayName = 'StripedProgressBar';
StripedProgressBar.propTypes = {
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    enterStripedProgressBar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    leaveStripedProgressBar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (StripedProgressBar);

/***/ }),

/***/ "./src/front/views/stripedProgressBar/index.js":
/*!*****************************************************!*\
  !*** ./src/front/views/stripedProgressBar/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modules/actions */ "./src/front/redux/modules/actions.js");
/* harmony import */ var _StripedProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StripedProgressBar */ "./src/front/views/stripedProgressBar/StripedProgressBar.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      enterStripedProgressBar: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["enterStripedProgressBar"],
      leaveStripedProgressBar: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["leaveStripedProgressBar"]
    }, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_StripedProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/front/views/tabPanel/TabPanel.js":
/*!**********************************************!*\
  !*** ./src/front/views/tabPanel/TabPanel.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./src/front/components/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-highlight */ "./node_modules/react-highlight/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_highlight__WEBPACK_IMPORTED_MODULE_4__);





var source = "\n  // import\n  import {\n    TabPanel,\n    TabPanelHeader,\n    TabPanelBody,\n    TabPanelBodyContent\n  } from './_SOMEWHERE_/components';\n\n  // tab headers (in state for example):\n  state = {\n    headers: [\n      {name: 'Home', tablink: 'home', isActive: true},\n      {name: 'About', tablink: 'about', isActive: false},\n      {name: 'Profile', tablink: 'profile', isActive: false},\n      {name: 'Contact', tablink: 'contact', isActive: false}\n    ]\n  };\n\n  // in render():\n    <TabPanel>\n      <TabPanelHeader tabItems={this.state.headers}/>\n      <TabPanelBody>\n        <TabPanelBodyContent id=\"home\">\n          &nbsp;Home\n        </TabPanelBodyContent>\n        <TabPanelBodyContent id=\"about\">\n          &nbsp;About\n        </TabPanelBodyContent>\n        <TabPanelBodyContent id=\"profile\">\n          &nbsp;Profile\n        </TabPanelBodyContent>\n      </TabPanelBody>\n    </TabPanel>\n";

function TabPanel(_ref) {
  var _ref$actions = _ref.actions,
      enterTabPanel = _ref$actions.enterTabPanel,
      leaveTabPanel = _ref$actions.leaveTabPanel;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    name: 'Home',
    tablink: 'home',
    isActive: true
  }, {
    name: 'About',
    tablink: 'about',
    isActive: false
  }, {
    name: 'Profile',
    tablink: 'profile',
    isActive: false
  }, {
    name: 'Contact',
    tablink: 'contact',
    isActive: false
  }]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 1),
      mockHeader = _useState2[0];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    enterTabPanel();
    return function () {
      leaveTabPanel();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["AnimatedView"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-xs-6 col-xs-offset-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Panel"], {
    title: "TabPanel",
    hasTitle: true,
    bodyBackGndColor: '#F4F5F6'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["TabPanelHeader"], {
    tabItems: mockHeader
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["TabPanelBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["TabPanelBodyContent"], {
    id: "home",
    isActive: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["TabPanelBodyContent"], {
    id: "about"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["TabPanelBodyContent"], {
    id: "profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Profile"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Panel"], {
    title: "Source",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_highlight__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "javascript"
  }, source)))));
}

TabPanel.displayName = 'TabPanel';
TabPanel.propTypes = {
  actions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    enterTabPanel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    leaveTabPanel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (TabPanel);

/***/ }),

/***/ "./src/front/views/tabPanel/index.js":
/*!*******************************************!*\
  !*** ./src/front/views/tabPanel/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modules/actions */ "./src/front/redux/modules/actions.js");
/* harmony import */ var _TabPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabPanel */ "./src/front/views/tabPanel/TabPanel.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      enterTabPanel: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["enterTabPanel"],
      leaveTabPanel: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["leaveTabPanel"]
    }, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_TabPanel__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/front/views/teamMates/TeamMates.js":
/*!************************************************!*\
  !*** ./src/front/views/teamMates/TeamMates.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./src/front/components/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-highlight */ "./node_modules/react-highlight/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_highlight__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_Damon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/Damon.png */ "./src/front/img/Damon.png");
/* harmony import */ var _img_Damon_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_Damon_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_Joe_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/Joe.png */ "./src/front/img/Joe.png");
/* harmony import */ var _img_Joe_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_Joe_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_Emma_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/Emma.png */ "./src/front/img/Emma.png");
/* harmony import */ var _img_Emma_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_Emma_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_Jannie_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/Jannie.png */ "./src/front/img/Jannie.png");
/* harmony import */ var _img_Jannie_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_Jannie_png__WEBPACK_IMPORTED_MODULE_8__);









var source = "\n  // import\n  import {\n    Panel,\n    TeamMates,\n    TeamMember,\n    TeamMateAddButton\n  } from './_SOMEWHERE_/components';\n\n  // import images (or just set a string as a path)\n  // import DamonIMG           from '../../img/Damon.png';\n  // import JoeIMG             from '../../img/Joe.png';\n  // import EmmaIMG            from '../../img/Emma.png';\n  // import JannieIMG          from '../../img/Jannie.png';\n\n  // team members (in state for example):\n  state = {\n    members: [\n      {\n        picture:      DamonIMG,\n        firstname:    'Damon',\n        lastname:     'Parker',\n        profile:      'Admin',\n        profileColor: 'danger'\n      },\n      {\n        picture:      JoeIMG,\n        firstname:    'Joe',\n        lastname:     'Waston',\n        profile:      'Member',\n        profileColor: 'warning'\n      },\n      {\n        picture:      JannieIMG,\n        firstname:    'Jannie',\n        lastname:     'Davis',\n        profile:      'Editor',\n        profileColor: 'warning'\n      },\n      {\n        picture:      EmmaIMG,\n        firstname:    'Emma',\n        lastname:     'Welson',\n        profile:      'Editor',\n        profileColor: 'success'\n      }\n    ]\n  };\n\n  // in render():\n  <Panel\n    hasTitle\n    title={'Teammates'}>\n    <TeamMates>\n      {\n        members.map(\n          (member, memberIndex) => {\n            return (\n              <TeamMember\n                key={memberIndex}\n                picture={member.picture}\n                firstname={member.firstname}\n                lastname={member.lastname}\n                profile={member.profile}\n                profileColor={member.profileColor}\n              />\n            );\n          }\n        )\n      }\n    </TeamMates>\n    <TeamMateAddButton />\n  </Panel>\n";

function TeamMatesView(_ref) {
  var _ref$actions = _ref.actions,
      enterTeamMatesView = _ref$actions.enterTeamMatesView,
      leaveTeamMatesView = _ref$actions.leaveTeamMatesView;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    picture: _img_Damon_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    firstname: 'Damon',
    lastname: 'Parker',
    profile: 'Admin',
    profileColor: 'danger'
  }, {
    picture: _img_Joe_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    firstname: 'Joe',
    lastname: 'Waston',
    profile: 'Member',
    profileColor: 'warning'
  }, {
    picture: _img_Jannie_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    firstname: 'Jannie',
    lastname: 'Davis',
    profile: 'Editor',
    profileColor: 'warning'
  }, {
    picture: _img_Emma_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    firstname: 'Emma',
    lastname: 'Welson',
    profile: 'Editor',
    profileColor: 'success'
  }]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 1),
      members = _useState2[0];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    enterTeamMatesView();
    return function () {
      leaveTeamMatesView();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["AnimatedView"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Panel"], {
    hasTitle: true,
    title: 'Teammates'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["TeamMates"], null, members.map(function (member, memberIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["TeamMember"], {
      key: memberIndex,
      picture: member.picture,
      firstname: member.firstname,
      lastname: member.lastname,
      profile: member.profile,
      profileColor: member.profileColor
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["TeamMateAddButton"], {
    onAdd: function onAdd() {}
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Panel"], {
    title: "Source",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_highlight__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "javascript"
  }, source)))));
}

TeamMatesView.displayName = 'TeamMatesView';
TeamMatesView.propTypes = {
  actions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    enterTeamMatesView: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    leaveTeamMatesView: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (TeamMatesView);

/***/ }),

/***/ "./src/front/views/teamMates/index.js":
/*!********************************************!*\
  !*** ./src/front/views/teamMates/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modules/actions */ "./src/front/redux/modules/actions.js");
/* harmony import */ var _TeamMates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TeamMates */ "./src/front/views/teamMates/TeamMates.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      enterTeamMatesView: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["enterTeamMatesView"],
      leaveTeamMatesView: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["leaveTeamMatesView"]
    }, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_TeamMates__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/front/views/todoList/TodoListView.js":
/*!**************************************************!*\
  !*** ./src/front/views/todoList/TodoListView.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./src/front/components/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-highlight */ "./node_modules/react-highlight/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_highlight__WEBPACK_IMPORTED_MODULE_4__);





var source = "\n  // import\n  import {\n    Panel,\n    TodoList,\n    TodoListItem,\n    TodoListCommands,\n    TodoListAddTask,\n    TodoListSeeAllTask\n  } from './_SOMEWHERE_/components';\n\n  // todos (in state for example):\n  state = {\n    todos: [\n      {\n        label: 'Director is Modern Dashboard',\n        done: false,\n        statusLabel: '2 days',\n        statusLevel: 'label-success'\n      },\n      {\n        label: 'Fully Responsive & Bootstrap 3.0.2 Compatible',\n        done: false,\n        statusLabel: 'done',\n        statusLevel: 'label-danger'\n      },\n      {\n        label: 'Latest Design Concept',\n        done: false,\n        statusLabel: 'Company',\n        statusLevel: 'label-warning'\n      },\n      {\n        label: 'Director is Modern Dashboard',\n        done: false,\n        statusLabel: '2 days',\n        statusLevel: 'label-success'\n      },\n      {\n        label: 'Director is Modern Dashboard',\n        done: false,\n        statusLabel: '2 days',\n        statusLevel: 'label-success'\n      },\n      {\n        label: 'Director is Modern Dashboard',\n        done: false,\n        statusLabel: '2 days',\n        statusLevel: 'label-success'\n      },\n      {\n        label: 'Director is Modern Dashboard',\n        done: false,\n        statusLabel: '2 days',\n        statusLevel: 'label-success'\n      }\n    ]\n  };\n\n  // in render():\n  <Panel\n    hasTitle={true}\n    title={'Todo list'}\n    sectionCustomClass=\"tasks-widget\">\n    <TodoList>\n      {\n        todos.map(\n          ({label, done, statusLabel, statusLevel}, todoIdx) => {\n            return (\n              <TodoListItem\n                key={todoIdx}\n                label={label}\n                done={done}\n                statusLabel={statusLabel}\n                statusLabelStyle={statusLevel}\n              />\n            );\n          }\n        )\n      }\n    </TodoList>\n    <TodoListCommands>\n      <TodoListAddTask />\n      <TodoListSeeAllTask />\n    </TodoListCommands>\n  </Panel>\n ";

function TodoListView(_ref) {
  var _ref$actions = _ref.actions,
      enterTodoListView = _ref$actions.enterTodoListView,
      leaveTodoListView = _ref$actions.leaveTodoListView;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    label: 'Director is Modern Dashboard',
    done: false,
    statusLabel: '2 days',
    statusLevel: 'label-success'
  }, {
    label: 'Fully Responsive & Bootstrap 3.0.2 Compatible',
    done: false,
    statusLabel: 'done',
    statusLevel: 'label-danger'
  }, {
    label: 'Latest Design Concept',
    done: false,
    statusLabel: 'Company',
    statusLevel: 'label-warning'
  }, {
    label: 'Director is Modern Dashboard',
    done: false,
    statusLabel: '2 days',
    statusLevel: 'label-success'
  }, {
    label: 'Director is Modern Dashboard',
    done: false,
    statusLabel: '2 days',
    statusLevel: 'label-success'
  }, {
    label: 'Director is Modern Dashboard',
    done: false,
    statusLabel: '2 days',
    statusLevel: 'label-success'
  }, {
    label: 'Director is Modern Dashboard',
    done: false,
    statusLabel: '2 days',
    statusLevel: 'label-success'
  }]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 1),
      todos = _useState2[0];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    enterTodoListView();
    return function () {
      leaveTodoListView();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["AnimatedView"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-xs-8 col-xs-offset-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Panel"], {
    hasTitle: true,
    title: 'Todo list',
    sectionCustomClass: "tasks-widget"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["TodoList"], null, todos.map(function (_ref2, todoIdx) {
    var label = _ref2.label,
        done = _ref2.done,
        statusLabel = _ref2.statusLabel,
        statusLevel = _ref2.statusLevel;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["TodoListItem"], {
      key: todoIdx,
      id: todoIdx,
      label: label,
      done: done,
      statusLabel: statusLabel,
      statusLabelStyle: statusLevel,
      onListValidEdit: function onListValidEdit() {}
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["TodoListCommands"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["TodoListAddTask"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["TodoListSeeAllTask"], null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Panel"], {
    title: "Source",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_highlight__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "javascript"
  }, source)))));
}

TodoListView.displayName = 'TodoListView';
TodoListView.propTypes = {
  actions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    enterTodoListView: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    leaveTodoListView: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (TodoListView);

/***/ }),

/***/ "./src/front/views/todoList/index.js":
/*!*******************************************!*\
  !*** ./src/front/views/todoList/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modules/actions */ "./src/front/redux/modules/actions.js");
/* harmony import */ var _TodoListView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoListView */ "./src/front/views/todoList/TodoListView.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      enterTodoListView: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["enterTodoListView"],
      leaveTodoListView: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["leaveTwitterFeed"]
    }, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_TodoListView__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/front/views/twitterFeed/DemoTweetMessage.js":
/*!*********************************************************!*\
  !*** ./src/front/views/twitterFeed/DemoTweetMessage.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function DemoTweetMessage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "In hac", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "habitasse"), "platea dictumst. Proin ac nibh rutrum lectus rhoncus eleifend.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "#dev")));
}

DemoTweetMessage.displayName = 'DemoTweetMessage';
/* harmony default export */ __webpack_exports__["default"] = (DemoTweetMessage);

/***/ }),

/***/ "./src/front/views/twitterFeed/TwitterFeed.js":
/*!****************************************************!*\
  !*** ./src/front/views/twitterFeed/TwitterFeed.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-highlight */ "./node_modules/react-highlight/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_highlight__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./src/front/components/index.js");
/* harmony import */ var _img_Jannie_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/Jannie.png */ "./src/front/img/Jannie.png");
/* harmony import */ var _img_Jannie_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_Jannie_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_Emmet_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/Emmet.png */ "./src/front/img/Emmet.png");
/* harmony import */ var _img_Emmet_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_Emmet_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _DemoTweetMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DemoTweetMessage */ "./src/front/views/twitterFeed/DemoTweetMessage.js");







var source = "\n  // import\n  import {\n    Tweet,\n    WriteNewTweet,\n    ListTweetsContainer\n  } from './_SOMEWHERE_/components';\n\n  // import image or use relative path as src to image\n  // in this example, consider:\n  // import JannieIMG          from '../../../img/Jannie.png';\n  // import EmmetIMG           from '../../../img/Emmet.png';\n\n  // in render():\n  <Panel\n    title=\"Twitter feed\"\n    hasTitle={true}\n    bodyBackGndColor={'#FFF'}>\n    <WriteNewTweet />\n    <ListTweetsContainer>\n      <Tweet\n        time={'30 min ago'}\n        author={'Emmet'}\n        authorAvatar={EmmetIMG}>\n        <DemoTweetMessage />\n      </Tweet>\n      <Tweet\n        time={'35 min ago'}\n        author={'Jannie'}\n        authorAvatar={JannieIMG}>\n        <DemoTweetMessage />\n      </Tweet>\n    </ListTweetsContainer>\n  </Panel>\n";

function TwitterFeed(_ref) {
  var _ref$actions = _ref.actions,
      enterTwitterFeed = _ref$actions.enterTwitterFeed,
      leaveTwitterFeed = _ref$actions.leaveTwitterFeed;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    enterTwitterFeed();
    return function () {
      leaveTwitterFeed();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["AnimatedView"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-6 col-xs-offset-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Panel"], {
    title: "Twitter feed",
    hasTitle: true,
    bodyBackGndColor: '#FFF'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["WriteNewTweet"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["ListTweetsContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Tweet"], {
    time: '30 min ago',
    author: 'Emmet',
    authorAvatar: _img_Emmet_png__WEBPACK_IMPORTED_MODULE_5___default.a
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DemoTweetMessage__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Tweet"], {
    time: '35 min ago',
    author: 'Jannie',
    authorAvatar: _img_Jannie_png__WEBPACK_IMPORTED_MODULE_4___default.a
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DemoTweetMessage__WEBPACK_IMPORTED_MODULE_6__["default"], null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Panel"], {
    title: "Source",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_highlight__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "javascript"
  }, source)))));
}

TwitterFeed.displayName = 'twitterFeed';
TwitterFeed.propTypes = {
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    enterTwitterFeed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    leaveTwitterFeed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (TwitterFeed);

/***/ }),

/***/ "./src/front/views/twitterFeed/index.js":
/*!**********************************************!*\
  !*** ./src/front/views/twitterFeed/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modules/actions */ "./src/front/redux/modules/actions.js");
/* harmony import */ var _TwitterFeed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TwitterFeed */ "./src/front/views/twitterFeed/TwitterFeed.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      enterTwitterFeed: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["enterTwitterFeed"],
      leaveTwitterFeed: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["leaveTwitterFeed"]
    }, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_TwitterFeed__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/front/views/workProgress/WorkProgress.js":
/*!******************************************************!*\
  !*** ./src/front/views/workProgress/WorkProgress.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-highlight */ "./node_modules/react-highlight/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_highlight__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components */ "./src/front/components/index.js");





var source = "\n  // import\n  import { EarningGraph } from './_SOMEWHERE_/components';\n\n  // labels and data (in state for example):\n  state = {\n    headers: ['#', 'Project', 'Manager', 'Deadline', 'Status', 'Progress'],\n    content: [\n      ['1', 'Facebook', 'Mark', '10/10/2014', <span className=\"label label-danger\">in progress</span>, <span className=\"badge badge-info\">50%</span>],\n      ['2', 'Twitter', 'Evan', '10/8/2014', <span className=\"label label-success\">completed</span>, <span className=\"badge badge-success\">100%</span>],\n      ['3', 'Google', 'Larry', '10/12/2014', <span className=\"label label-warning\">in progress</span>, <span className=\"badge badge-warning\">75%</span>],\n      ['4', 'LinkedIn', 'Allen', '10/01/2015', <span className=\"label label-info\">in progress</span>, <span className=\"badge badge-info\">65%</span>],\n      ['5', 'Tumblr', 'David', '01/11/2014', <span className=\"label label-warning\">in progress</span>, <span className=\"badge badge-danger\">95%</span>],\n      ['6', 'Tesla', 'Musk', '01/11/2014', <span className=\"label label-info\">in progress</span>, <span className=\"badge badge-success\">95%</span>],\n      ['7', 'Ghost', 'XXX', '01/11/2014', <span className=\"label label-info\">in progress</span>, <span className=\"badge badge-success\">95%</span>]\n    ]\n  };\n\n  // in render():\n  <div className=\"row\">\n    <div className=\"col-md-8 col-md-offset-2\">\n      <EarningGraphComponent\n        labels={this.state.labels}\n        datasets={this.state.datasets}\n      />\n    </div>\n  </div>\n";

function WorkProgress(_ref) {
  var _ref$actions = _ref.actions,
      enterWorkProgress = _ref$actions.enterWorkProgress,
      leaveWorkProgress = _ref$actions.leaveWorkProgress;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(['#', 'Project', 'Manager', 'Deadline', 'Status', 'Progress']),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 1),
      headers = _useState2[0];
  /* eslint-disable react/jsx-key */


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([['1', 'Facebook', 'Mark', '10/10/2014', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "label label-danger"
  }, "in progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "badge badge-info"
  }, "50%")], ['2', 'Twitter', 'Evan', '10/8/2014', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "label label-success"
  }, "completed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "badge badge-success"
  }, "100%")], ['3', 'Google', 'Larry', '10/12/2014', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "label label-warning"
  }, "in progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "badge badge-warning"
  }, "75%")], ['4', 'LinkedIn', 'Allen', '10/01/2015', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "label label-info"
  }, "in progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "badge badge-info"
  }, "65%")], ['5', 'Tumblr', 'David', '01/11/2014', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "label label-warning"
  }, "in progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "badge badge-danger"
  }, "95%")], ['6', 'Tesla', 'Musk', '01/11/2014', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "label label-info"
  }, "in progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "badge badge-success"
  }, "95%")], ['7', 'Ghost', 'XXX', '01/11/2014', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "label label-info"
  }, "in progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "badge badge-success"
  }, "95%")]]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 1),
      content = _useState4[0];
  /* eslint-enable react/jsx-key */


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    enterWorkProgress();
    return function () {
      leaveWorkProgress();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["AnimatedView"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Panel"], {
    title: "Work Progress",
    hasTitle: true,
    bodyBackGndColor: '#F4F5F6',
    bodyCustomClass: "table-responsive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Table"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["TableHeader"], null, headers.map(function (header, headerIdx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["TableCol"], {
      key: headerIdx
    }, header);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["TableBody"], null, content.map(function (contentRow, contentRowIdx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["TableRow"], {
      key: contentRowIdx
    }, contentRow.map(function (contentColumn, contentColumnIdx) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["TableCol"], {
        key: contentColumnIdx
      }, contentColumn);
    }));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Panel"], {
    title: "Source",
    hasTitle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_highlight__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "javascript"
  }, source)))));
}

WorkProgress.displayName = 'WorkProgress';
WorkProgress.propTypes = {
  actions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    enterWorkProgress: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    leaveWorkProgress: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (WorkProgress);

/***/ }),

/***/ "./src/front/views/workProgress/index.js":
/*!***********************************************!*\
  !*** ./src/front/views/workProgress/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/modules/actions */ "./src/front/redux/modules/actions.js");
/* harmony import */ var _WorkProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorkProgress */ "./src/front/views/workProgress/WorkProgress.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
      enterWorkProgress: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["enterWorkProgress"],
      leaveWorkProgress: _redux_modules_actions__WEBPACK_IMPORTED_MODULE_2__["leaveWorkProgress"]
    }, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_WorkProgress__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ })

/******/ });
//# sourceMappingURL=app.238e97d6a42b2a3119d9.js.map