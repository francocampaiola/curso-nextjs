"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./components/layouts/MainLayout.jsx":
/*!*******************************************!*\
  !*** ./components/layouts/MainLayout.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainLayout\": function() { return /* binding */ MainLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MainLayout_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainLayout.module.css */ \"./components/layouts/MainLayout.module.css\");\n/* harmony import */ var _MainLayout_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MainLayout_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Navbar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navbar.jsx */ \"./components/Navbar.jsx\");\n/* harmony import */ var _helpers_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/capitalizeFirstLetter */ \"./helpers/capitalizeFirstLetter.js\");\n/* harmony import */ var _helpers_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helpers_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\nvar MainLayout = function(param) {\n    var pagina = param.pagina, href = param.href;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_MainLayout_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Sitio - Franco\"\n                        }, void 0, false, {\n                            fileName: \"/Users/francocampaiola/Desktop/repos/curso-nextjs/01-initial-demo/components/layouts/MainLayout.jsx\",\n                            lineNumber: 12,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"{pagina} Page\"\n                        }, void 0, false, {\n                            fileName: \"/Users/francocampaiola/Desktop/repos/curso-nextjs/01-initial-demo/components/layouts/MainLayout.jsx\",\n                            lineNumber: 13,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/favicon.ico\"\n                        }, void 0, false, {\n                            fileName: \"/Users/francocampaiola/Desktop/repos/curso-nextjs/01-initial-demo/components/layouts/MainLayout.jsx\",\n                            lineNumber: 14,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/francocampaiola/Desktop/repos/curso-nextjs/01-initial-demo/components/layouts/MainLayout.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar_jsx__WEBPACK_IMPORTED_MODULE_3__.Navbar, {}, void 0, false, {\n                    fileName: \"/Users/francocampaiola/Desktop/repos/curso-nextjs/01-initial-demo/components/layouts/MainLayout.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: (_MainLayout_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_MainLayout_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                            children: [\n                                \"Ir a \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: href.toLowerCase(),\n                                    children: (0,_helpers_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_4__.capitalizeFirstLetter)(href)\n                                }, void 0, false, {\n                                    fileName: \"/Users/francocampaiola/Desktop/repos/curso-nextjs/01-initial-demo/components/layouts/MainLayout.jsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 18\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/francocampaiola/Desktop/repos/curso-nextjs/01-initial-demo/components/layouts/MainLayout.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_MainLayout_module_css__WEBPACK_IMPORTED_MODULE_5___default().description),\n                            children: [\n                                \"Get started by editing\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                    className: (_MainLayout_module_css__WEBPACK_IMPORTED_MODULE_5___default().code),\n                                    children: [\n                                        \"pages/\",\n                                        pagina.toLowerCase(),\n                                        \".js\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/francocampaiola/Desktop/repos/curso-nextjs/01-initial-demo/components/layouts/MainLayout.jsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/francocampaiola/Desktop/repos/curso-nextjs/01-initial-demo/components/layouts/MainLayout.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/francocampaiola/Desktop/repos/curso-nextjs/01-initial-demo/components/layouts/MainLayout.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/francocampaiola/Desktop/repos/curso-nextjs/01-initial-demo/components/layouts/MainLayout.jsx\",\n            lineNumber: 10,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/francocampaiola/Desktop/repos/curso-nextjs/01-initial-demo/components/layouts/MainLayout.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this);\n};\n_c = MainLayout;\nvar _c;\n$RefreshReg$(_c, \"MainLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvTWFpbkxheW91dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTRCO0FBQ0E7QUFDZ0I7QUFDTDtBQUNvQztBQUVwRSxJQUFNSyxVQUFVLEdBQUcsZ0JBQW9CO1FBQWxCQyxNQUFNLFNBQU5BLE1BQU0sRUFBRUMsSUFBSSxTQUFKQSxJQUFJO0lBQ3RDLHFCQUNFLDhEQUFDQyxLQUFHO2tCQUNBLDRFQUFDQSxLQUFHO1lBQUNDLFNBQVMsRUFBRVAseUVBQWdCOzs4QkFDaEMsOERBQUNGLGtEQUFJOztzQ0FDRCw4REFBQ1csT0FBSztzQ0FBQyxnQkFBYzs7Ozs7aUNBQVE7c0NBQzdCLDhEQUFDQyxNQUFJOzRCQUFDQyxJQUFJLEVBQUMsYUFBYTs0QkFBQ0MsT0FBTyxFQUFDLGVBQWU7Ozs7O2lDQUFHO3NDQUNuRCw4REFBQ0MsTUFBSTs0QkFBQ0MsR0FBRyxFQUFDLE1BQU07NEJBQUNULElBQUksRUFBQyxjQUFjOzs7OztpQ0FBRzs7Ozs7O3lCQUNwQzs4QkFFUCw4REFBQ0osK0NBQU07Ozs7eUJBQUc7OEJBRVYsOERBQUNjLE1BQUk7b0JBQUNSLFNBQVMsRUFBRVAsb0VBQVc7O3NDQUN4Qiw4REFBQ2dCLElBQUU7NEJBQUNULFNBQVMsRUFBRVAscUVBQVk7O2dDQUFFLE9BQ3hCOzhDQUFBLDhEQUFDRCxrREFBSTtvQ0FBQ00sSUFBSSxFQUFFQSxJQUFJLENBQUNZLFdBQVcsRUFBRTs4Q0FBR2YscUZBQXFCLENBQUNHLElBQUksQ0FBQzs7Ozs7eUNBQVE7Ozs7OztpQ0FDcEU7c0NBRUwsOERBQUNhLEdBQUM7NEJBQUNYLFNBQVMsRUFBRVAsMkVBQWtCOztnQ0FBRSx3QkFDWjtnQ0FBQyxHQUFHOzhDQUMxQiw4REFBQ29CLE1BQUk7b0NBQUNiLFNBQVMsRUFBRVAsb0VBQVc7O3dDQUFFLFFBQU07d0NBQUNJLE1BQU0sQ0FBQ2EsV0FBVyxFQUFFO3dDQUFDLEtBQUc7Ozs7Ozt5Q0FBTzs7Ozs7O2lDQUNoRTs7Ozs7O3lCQUVEOzs7Ozs7aUJBQ0Q7Ozs7O2FBQ0osQ0FDUDtDQUNGO0FBMUJZZCxLQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0cy9NYWluTGF5b3V0LmpzeD9jOTA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NYWluTGF5b3V0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBOYXZiYXIgfSAgZnJvbSAnLi4vTmF2YmFyLmpzeCdcbmltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciB9IGZyb20gJy4uLy4uL2hlbHBlcnMvY2FwaXRhbGl6ZUZpcnN0TGV0dGVyJ1xuXG5leHBvcnQgY29uc3QgTWFpbkxheW91dCA9ICh7cGFnaW5hLCBocmVmfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+U2l0aW8gLSBGcmFuY288L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIntwYWdpbmF9IFBhZ2VcIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPE5hdmJhciAvPlxuXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICAgIElyIGEgPExpbmsgaHJlZj17aHJlZi50b0xvd2VyQ2FzZSgpfT57Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGhyZWYpfTwvTGluaz5cbiAgICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIEdldCBzdGFydGVkIGJ5IGVkaXRpbmd7JyAnfVxuICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPXtzdHlsZXMuY29kZX0+cGFnZXMve3BhZ2luYS50b0xvd2VyQ2FzZSgpfS5qczwvY29kZT5cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkxpbmsiLCJzdHlsZXMiLCJOYXZiYXIiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJNYWluTGF5b3V0IiwicGFnaW5hIiwiaHJlZiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsIm1haW4iLCJoMSIsInRvTG93ZXJDYXNlIiwicCIsImRlc2NyaXB0aW9uIiwiY29kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layouts/MainLayout.jsx\n");

/***/ })

});