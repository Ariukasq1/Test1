webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Partner.js":
/*!*******************************!*\
  !*** ./components/Partner.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! owl.carousel/dist/assets/owl.carousel.css */ "./node_modules/owl.carousel/dist/assets/owl.carousel.css");
/* harmony import */ var owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_6__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var Partner =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Partner, _Component);

  function Partner() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Partner);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Partner).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Partner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var logoslider = $('.partner-slider');

      if (logoslider.length) {
        logoslider.owlCarousel({
          loop: true,
          nav: false,
          dots: false,
          autoplay: true,
          autoplayTimeout: 4000,
          autoplaySpeed: 1000,
          lazyLoad: true,
          singleItem: true,
          center: true,
          responsive: {
            0: {
              items: 1
            },
            550: {
              items: 3
            },
            992: {
              items: 5
            }
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "trusted-partner"
      }, __jsx("div", {
        className: "container"
      }, __jsx("h6", {
        className: "title"
      }, "Trusted Over ", __jsx("span", null, "2300+"), " Companies"), __jsx("div", {
        className: "partner-slider "
      }, __jsx("div", {
        className: "item"
      }, __jsx("a", {
        href: "#"
      }, __jsx("img", {
        src: "images/logo/envato.svg",
        alt: ""
      }))), __jsx("div", {
        className: "item"
      }, __jsx("a", {
        href: "#"
      }, __jsx("img", {
        src: "images/logo/envato.svg",
        alt: ""
      }))), __jsx("div", {
        className: "item"
      }, __jsx("a", {
        href: "#"
      }, __jsx("img", {
        src: "images/logo/envato.svg",
        alt: ""
      }))), __jsx("div", {
        className: "item"
      }, __jsx("a", {
        href: "#"
      }, __jsx("img", {
        src: "images/logo/envato.svg",
        alt: ""
      }))), __jsx("div", {
        className: "item"
      }, __jsx("a", {
        href: "#"
      }, __jsx("img", {
        src: "images/logo/envato.svg",
        alt: ""
      }))))));
    }
  }]);

  return Partner;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Partner);

/***/ }),

/***/ "./node_modules/owl.carousel/dist/owl.carousel.js":
false

})
//# sourceMappingURL=index.js.238c565f0d75f641fe94.hot-update.js.map