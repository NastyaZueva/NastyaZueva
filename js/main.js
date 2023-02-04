/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("\r\n\r\nconst clog = console.log;\r\n\r\n\r\nconst isMobile = {\r\n   Android: function () {\r\n      return navigator.userAgent.match(/Android/i);\r\n   },\r\n   BlackBerry: function () {\r\n      return navigator.userAgent.match(/BlackBerry/i);\r\n   },\r\n   iOS: function () {\r\n      return navigator.userAgent.match(/iPhone|iPad|iPod/i);\r\n   },\r\n   Opera: function () {\r\n      return navigator.userAgent.match(/Opera Mini/i);\r\n   },\r\n   Windows: function () {\r\n      return navigator.userAgent.match(/IEMobile/i);\r\n   },\r\n   any: function () {\r\n      return (\r\n         isMobile.Android() ||\r\n         isMobile.BlackBerry() ||\r\n         isMobile.iOS() ||\r\n         isMobile.Opera() ||\r\n         isMobile.Windows()\r\n      );\r\n   }\r\n};\r\n\r\n\r\nif (isMobile.any()) {\r\n   document.body.classList.add('_touch');\r\n   clog(\"phone\");\r\n   // let menuArrows = document.querySelectorAll('.menu__arrow');\r\n   // if (menuArrows.length > 0) {\r\n   //    for (let index = 0; index < menuArrows.length; index++) {\r\n   //       const menuArrow = menuArrows[index];\r\n   //       menuArrow.addEventListener(\"click\", function (e) {\r\n   //          menuArrow.parentElement.classList.toggle('_active');\r\n   //       });\r\n   //    }\r\n   // }\r\n\r\n} else {\r\n   document.body.classList.add('_pc');\r\n   clog(\"pc\");\r\n};\r\n\r\n//меню бурегер\r\nconst iconMenu = document.querySelector('.header__icon');\r\nconst menuBody = document.querySelector('.header__info');\r\nif (iconMenu) {\r\n   iconMenu.addEventListener(\"click\", function (e) {\r\n      document.body.classList.toggle('_lock');\r\n      iconMenu.classList.toggle('_active');\r\n      menuBody.classList.toggle('_active');\r\n   });\r\n}\r\n\r\nlet lastScroll = 0;\r\nconst defaultOffset = 200;\r\nconst header = document.querySelector('.header');\r\n\r\nconst scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;\r\nconst containHide = () => header.classList.contains('_hide');\r\n\r\nwindow.addEventListener('scroll', () => {\r\n   if (scrollPosition() > lastScroll && !containHide() && scrollPosition()>defaultOffset) {\r\n      //scroll down\r\n      header.classList.add('_hide');\r\n      clog(\"down\");\r\n   } else if (scrollPosition() < lastScroll && containHide()) {\r\n      //scroll up\r\n      header.classList.remove('_hide');\r\n      clog(\"up\");\r\n   }\r\n   lastScroll = scrollPosition();\r\n})\n\n//# sourceURL=webpack://gulp-secondtry/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;