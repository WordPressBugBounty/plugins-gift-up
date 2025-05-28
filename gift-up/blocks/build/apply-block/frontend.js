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

/***/ "@woocommerce/blocks-checkout":
/*!****************************************!*\
  !*** external ["wc","blocksCheckout"] ***!
  \****************************************/
/***/ ((module) => {

module.exports = window["wc"]["blocksCheckout"];

/***/ }),

/***/ "@woocommerce/blocks-components":
/*!******************************************!*\
  !*** external ["wc","blocksComponents"] ***!
  \******************************************/
/***/ ((module) => {

module.exports = window["wc"]["blocksComponents"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
/*!*************************************!*\
  !*** ./src/apply-block/frontend.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @woocommerce/blocks-checkout */ "@woocommerce/blocks-checkout");
/* harmony import */ var _woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_blocks_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @woocommerce/blocks-components */ "@woocommerce/blocks-components");
/* harmony import */ var _woocommerce_blocks_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block.json */ "./src/apply-block/block.json");

/**
 * External dependencies
 */







/**
 * Internal dependencies
 */

const FrontendBlock = ({
  children,
  checkoutExtensionData
}) => {
  const [giftCardCode, setGiftCardCode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const [submittingCode, setSubmittingCode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    extensionCartUpdate
  } = window.wc.blocksCheckout;
  const {
    setValidationErrors,
    clearValidationError
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useDispatch)('wc/store/validation');
  const cartData = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => {
    const store = select('wc/store/cart');
    return store.getCartData();
  });
  let total = Number(cartData.totals.total_price);
  let giftupData = cartData.extensions['giftup-apply-block'];
  let appliedBalance = 0;
  if (giftupData) {
    appliedBalance = giftupData.giftcard_applied_balance * 100;
    if (submittingCode && giftCardCode && giftupData.giftcard_not_found) {
      // show error
      setError((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Gift card not found', 'gift-up'));
      setSubmittingCode(false);
    }
  }
  const applyCode = () => {
    giftupData.giftcard_code = null;
    giftupData.giftcard_not_found = null;
    let data = {
      giftCardCode
    };
    setError('');
    setSubmittingCode(true);
    extensionCartUpdate({
      'namespace': 'giftup-apply-code',
      data
    });
  };
  const removeCode = () => {
    extensionCartUpdate({
      'namespace': 'giftup-remove-code'
    });
    setError('');
    setGiftCardCode('');
    setSubmittingCode(false);
  };
  const handleKeyPress = event => {
    setError('');
    if (event.key === 'Enter') {
      applyCode();
    }
  };
  let errorContent;
  if (error) {
    errorContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wc-block-components-validation-error giftup-apply-error"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "-2 -2 24 24",
      width: "24",
      height: "24",
      "aria-hidden": "true",
      focusable: "false"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"
    })), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, error));
  }
  let buttonText;
  if (submittingCode) {
    buttonText = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Spinner, null);
  } else {
    buttonText = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "wc-block-components-button__text"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Apply', 'gift-up'));
  }
  let content;
  if (!(giftupData && giftupData.giftcard_code)) {
    content = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_blocks_components__WEBPACK_IMPORTED_MODULE_4__.Panel, {
      className: `giftup-apply-panel wc-block-components-totals-coupon ${!!error ? 'has-error' : ''}`,
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Have a gift card?', 'gift-up'),
      titleTag: "div"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "giftup-apply-panel-form"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "giftup-apply-input"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_blocks_components__WEBPACK_IMPORTED_MODULE_4__.ValidatedTextInput, {
      autoFocus: true,
      id: "giftcard-code",
      value: giftCardCode,
      onKeyPress: handleKeyPress,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Gift card code', 'gift-up'),
      customValidation: () => !error,
      className: !!error ? 'has-error' : '',
      onChange: value => setGiftCardCode(value)
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_blocks_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      className: "giftup-apply-button",
      disabled: giftCardCode.length < 1,
      onClick: applyCode,
      type: "button"
    }, buttonText)), errorContent));
  } else {
    // content =
    // 	<>
    // 	<TotalsItem
    // 	value={total + appliedBalance}
    // 	label={__('Total', 'gift-up')}
    // 	description={__('(before gift cards)', 'gift-up')}
    // 	className="wc-block-components-totals-footer-item"
    // 	></TotalsItem>
    // 	</>;
  }
  content = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_blocks_components__WEBPACK_IMPORTED_MODULE_4__.TotalsWrapper, null, content);
  let balanceContent;
  if (appliedBalance) {
    balanceContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_blocks_components__WEBPACK_IMPORTED_MODULE_4__.TotalsWrapper, {
      className: "giftup-apply-panel"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_blocks_components__WEBPACK_IMPORTED_MODULE_4__.TotalsItem, {
      value: -appliedBalance,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Gift card', 'gift-up') + ":",
      className: "wc-block-components-totals-discount",
      description: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "wc-block-components-chip wc-block-components-chip--radius-large"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "wc-block-components-chip__text"
      }, giftupData.giftcard_code), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "giftup-remove-button wc-block-components-chip__remove",
        onClick: removeCode,
        type: "button"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "16",
        height: "16",
        className: "wc-block-components-chip__remove-icon",
        "aria-hidden": "true",
        focusable: "false"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
      })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Available balance', 'gift-up'), ":"), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, giftupData.giftcard_balance)))
    }));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
					.giftup-apply-panel {
						
						.wc-block-components-panel__content {
							.giftup-apply-panel-form {
								margin-bottom:0;
								padding-bottom: 0;
								display: flex;
								flex-wrap: wrap;
								gap: 8px;
								width: 100%;

								.giftup-apply-input{
									margin-top:0;
									flex: 3 1 140px;

									.wc-block-components-text-input {
										margin-top: 0;
									}
								}

								.giftup-apply-button {
									flex: 1 1 auto;
									padding-left: 16px;
									padding-right: 16px;
									white-space: nowrap;
								}
							}
						}

						.giftup-apply-error {
							align-items: center;
							display: flex;
							gap: 2px;
							line-height: 1;
							margin: 0;
						}

						.wc-block-components-chip__text {
							padding-right: 0.5em;
						}
					}
				`), content, balanceContent);
};
let x = (0,_woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_1__.registerCheckoutBlock)({
  metadata: _block_json__WEBPACK_IMPORTED_MODULE_7__,
  component: FrontendBlock
});
})();

/******/ })()
;
//# sourceMappingURL=apply-block\frontend.js.map