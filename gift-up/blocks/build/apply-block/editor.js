/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@woocommerce/blocks-components":
/*!******************************************!*\
  !*** external ["wc","blocksComponents"] ***!
  \******************************************/
/***/ ((module) => {

module.exports = window["wc"]["blocksComponents"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/apply-block/block.json":
/*!************************************!*\
  !*** ./src/apply-block/block.json ***!
  \************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"name":"giftup/apply-gift-cards","version":"2.0.0","title":"Enter a Gift Up gift card code","category":"woocommerce","description":"Adds a way for your customers to enter a Gift Up gift card during checkout.","supports":{"html":false,"align":false,"multiple":false,"reusable":false},"parent":["woocommerce/checkout-order-summary-block","woocommerce/cart-order-summary-block"],"attributes":{"lock":{"type":"object","default":{"remove":true,"move":false}},"text":{"type":"string","source":"html","selector":".wp-block-giftup-block-checkout-newsletter-subscription","default":""}},"textdomain":"gift-up","editorScript":"giftup-apply-block-editor","viewScript":"giftup-apply-block-frontend"}');

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
/******/ 			// no module.id needed
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************************!*\
  !*** ./src/apply-block/editor.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Edit: () => (/* binding */ Edit),
/* harmony export */   Save: () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_blocks_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @woocommerce/blocks-components */ "@woocommerce/blocks-components");
/* harmony import */ var _woocommerce_blocks_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/apply-block/block.json");

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */

const Edit = ({
  attributes,
  setAttributes
}) => {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
					.giftup-apply-panel {
						position: relative;
    					pointer-events: none;
					}
				`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "giftup-apply-panel components-disabled wc-block-components-totals-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_blocks_components__WEBPACK_IMPORTED_MODULE_4__.Panel, {
    className: "wc-block-components-totals-coupon",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Have a gift card?', 'gift-up'),
    titleTag: "div",
    disabled: true
  }))));
};
const Save = ({
  attributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save()
  });
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  icon: {
    src: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      id: "Layer_1",
      "data-name": "Layer 1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 205 205"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "Mark Yellow Black"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("polygon", {
      points: "92.95 25.13 65.61 25.13 75.29 10.63 79.28 4.66 82.14 8.95 92.95 25.13"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
      fill: "#000",
      cx: "102.54",
      cy: "105.17",
      r: "97.41"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "#fc0",
      d: "M124.65,81.23H112.84v21.25h12.11c7.64,0,12.11-4.57,12.11-10.52v-.2C137.06,84.9,132.3,81.23,124.65,81.23Z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "#fc0",
      d: "M102.54,6.72A99.29,99.29,0,0,0,87.76,7.84L76.32.37,92.71,25h0l-.21-.61H86.93v82.3c0,21-11.81,31.37-30.48,31.37s-30.08-10.42-30.08-30.87V67.43H41.66v39.31c0,11.32,5.66,17.17,15,17.17s15-5.66,15-16.68V24.34H66.28l9.23-13.85a98.93,98.93,0,1,0,27-3.77Zm50,84.93c0,16.08-12.51,24.42-28.09,24.42H112.84v20.85H97.55V67.43h28.39c16.58,0,26.61,9.83,26.61,24Zm22.13,45.27H158.6V121h16.08Zm-3.87-23.63h-8.34l-4.67-43.88v-2h17.67v2Z"
    })),
    foreground: '#873FB9'
  },
  edit: Edit,
  save: Save
});
})();

/******/ })()
;
//# sourceMappingURL=apply-block\editor.js.map