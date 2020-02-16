module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/style.scss */ "./public/style.scss");
/* harmony import */ var _public_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/evohc/Files/projects/100-simple-projects-frontend/personal-home-page-with-nextjs/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ProfileInformation = () => {
  return __jsx("div", {
    className: _public_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.profile__info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("p", {
    className: _public_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.profile__info__name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "(str \"Matheus Francisco\", \"nickname : Xico\")"), __jsx("p", {
    className: _public_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.profile__info__work,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, " Software Engineer, Functional lover,  Python,  Clojure, Typescript, Artificianl Intelligence,", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), "Machine Learning."), __jsx("div", {
    className: _public_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.profile__info__contact,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("dl", {
    className: _public_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.contacts__list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("dt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Email:"), __jsx("dd", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "m AT matheusfrancisco DOT com DOT br")), __jsx("dt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Address:"), " ", __jsx("dd", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Brazil, S\xE3o Paulo, SP"))), __jsx("p", {
    className: _public_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.profile__info__social,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://github.com/matheusfrancisco",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, " ", __jsx("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaGithub"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }))), __jsx("a", {
    href: "https://www.linkedin.com/in/matheus-francisco/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, " ", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaLinkedin"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  })), __jsx("a", {
    href: "youtube.com.br",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, " ", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaYoutube"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })), __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, " ", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaTelegram"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }))));
};

const ProfileImage = () => {
  return __jsx("div", {
    className: _public_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.profile__img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("img", {
    src: "images/foto-perfil.jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }));
};

const Profile = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _public_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.profile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(ProfileImage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), __jsx(ProfileInformation, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  })));
};

const BodyInformation = () => {
  return __jsx("div", {
    className: _public_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.descriptions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("div", {
    className: _public_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.descriptions__informations,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, " ( println \"Hello\" )"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "(println \u201CI\u2019m a ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "Software Engineer"), " at Gupy and ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "Computer Engineer"), " at ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "UFSC."), "\u201D  \u201C"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "Love study about paradigms, design principals, software architecture and good practices about testing software."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "I belive that through technology we can impact and improve lives. \u201D  )")));
};

const Content = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _public_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx(Profile, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }), __jsx(BodyInformation, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  })));
};

const Nav = () => {
  return __jsx("div", {
    className: _public_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx("a", {
    href: "#hello",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, "Home")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx("a", {
    href: "/blog/index.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, "Blog")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx("a", {
    href: "#projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, "Projects")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("a", {
    href: "#ideas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, "Ideas")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx("a", {
    href: "#contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, "Contact")))));
};

const Home = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Nav, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108
  },
  __self: undefined
}), __jsx(Content, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./public/style.scss":
/*!***************************!*\
  !*** ./public/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"menu": "_3tEXlnKSDpLpIC3nw4dbK6",
	"content": "dzegZBCA49Ovugkh6uS5X",
	"profile": "_2lTfRWYyRhr6BDVt-Rn4kt",
	"profile__img": "_3R481pkwHVsy4PI2kT2SEQ",
	"profile__info": "_1Sqd5RGUFdYsNurH1cPMpJ",
	"profile__info__name": "_2uej0MSrozM8yPQvgK4WbF",
	"profile__info__work": "_1LqukoY5v6YrLxZnnLR5x3",
	"profile__info__contact": "_32hUQOqQAzoZEJZHUYveKi",
	"profile__info__social": "_34BHFA2gkVTFhKaZUgfrfo",
	"contacts__list": "_1KmP8XwVMyNjLDluanvsVx",
	"descriptions": "djZESp1HgwO5ufo3Ty9ze",
	"descriptions__informations": "_3tpMTOQrusnY2fvbvir5M_"
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/evohc/Files/projects/100-simple-projects-frontend/personal-home-page-with-nextjs/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map