"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account",{

/***/ "./src/components/account/account-profile.js":
/*!***************************************************!*\
  !*** ./src/components/account/account-profile.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AccountProfile\": function() { return /* binding */ AccountProfile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar user = {\n    avatar: '/static/images/avatars/c.jpeg',\n    city: 'Москва',\n    country: 'Россия',\n    jobTitle: 'Senior Developer',\n    name: 'Иван Иванов'\n};\nvar AccountProfile = function(props) {\n    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, _objectSpread({\n    }, props, {\n        __source: {\n            fileName: \"/usr/src/app/src/components/account/account-profile.js\",\n            lineNumber: 21,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent, {\n                __source: {\n                    fileName: \"/usr/src/app/src/components/account/account-profile.js\",\n                    lineNumber: 22,\n                    columnNumber: 5\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    sx: {\n                        alignItems: 'center',\n                        display: 'flex',\n                        flexDirection: 'column'\n                    },\n                    __source: {\n                        fileName: \"/usr/src/app/src/components/account/account-profile.js\",\n                        lineNumber: 23,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n                            src: user.avatar,\n                            sx: {\n                                height: 64,\n                                mb: 2,\n                                width: 64\n                            },\n                            __source: {\n                                fileName: \"/usr/src/app/src/components/account/account-profile.js\",\n                                lineNumber: 30,\n                                columnNumber: 9\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n                            color: \"textPrimary\",\n                            gutterBottom: true,\n                            variant: \"h5\",\n                            __source: {\n                                fileName: \"/usr/src/app/src/components/account/account-profile.js\",\n                                lineNumber: 38,\n                                columnNumber: 9\n                            },\n                            __self: _this,\n                            children: user.name\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n                            color: \"textSecondary\",\n                            variant: \"body2\",\n                            __source: {\n                                fileName: \"/usr/src/app/src/components/account/account-profile.js\",\n                                lineNumber: 45,\n                                columnNumber: 9\n                            },\n                            __self: _this,\n                            children: [\n                                user.country,\n                                \", \",\n                                user.city\n                            ]\n                        })\n                    ]\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {\n                __source: {\n                    fileName: \"/usr/src/app/src/components/account/account-profile.js\",\n                    lineNumber: 53,\n                    columnNumber: 5\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardActions, {\n                __source: {\n                    fileName: \"/usr/src/app/src/components/account/account-profile.js\",\n                    lineNumber: 54,\n                    columnNumber: 5\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    color: \"primary\",\n                    fullWidth: true,\n                    variant: \"text\",\n                    __source: {\n                        fileName: \"/usr/src/app/src/components/account/account-profile.js\",\n                        lineNumber: 55,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: \"Загрузить фото\"\n                })\n            })\n        ]\n    }));\n};\n_c = AccountProfile;\nvar _c;\n$RefreshReg$(_c, \"AccountProfile\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hY2NvdW50L2FjY291bnQtcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFTc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsR0FBSyxDQUFDUSxJQUFJLEdBQUcsQ0FBQztJQUNaQyxNQUFNLEVBQUUsQ0FBK0I7SUFDdkNDLElBQUksRUFBRSxDQUFRO0lBQ1JDLE9BQUMsRUFBRSxDQUFRO0lBQ1hDLFFBQUUsRUFBRSxDQUFrQjtJQUM1QkMsSUFBSSxFQUFFLENBQWE7QUFDWCxDQUFUO0FBRU0sR0FBSyxDQUFDQyxjQUFjLEdBQUcsUUFBUSxDQUFQQyxLQUFLO2tCQUNsQyxNQUFNLHlEQUFMWiwrQ0FBSTtPQUFLWSxLQUFLOzs7Ozs7OztpRkFDWlYsc0RBQVc7Ozs7Ozs7Z0dBQ1RKLDhDQUFHO29CQUNGZSxFQUFFLEVBQUUsQ0FBQzt3QkFDSEMsVUFBVSxFQUFFLENBQVE7d0JBQ3BCQyxPQUFPLEVBQUUsQ0FBTTt3QkFDZkMsYUFBYSxFQUFFLENBQVE7b0JBQ3pCLENBQUM7Ozs7Ozs7OzZGQUVBbkIsaURBQU07NEJBQ0xvQixHQUFHLEVBQUVaLElBQUksQ0FBQ0MsTUFBTTs0QkFDaEJPLEVBQUUsRUFBRSxDQUFDO2dDQUNISyxNQUFNLEVBQUUsRUFBRTtnQ0FDVkMsRUFBRSxFQUFFLENBQUM7Z0NBQ0xDLEtBQUssRUFBRSxFQUFFOzRCQUNYLENBQUM7Ozs7Ozs7OzZGQUVGaEIscURBQVU7NEJBQ1RpQixLQUFLLEVBQUMsQ0FBYTs0QkFDbkJDLFlBQVk7NEJBQ1pDLE9BQU8sRUFBQyxDQUFJOzs7Ozs7O3NDQUVYbEIsSUFBSSxDQUFDSyxJQUFJOzs4RkFFWE4scURBQVU7NEJBQ1RpQixLQUFLLEVBQUMsQ0FBZTs0QkFDckJFLE9BQU8sRUFBQyxDQUFPOzs7Ozs7OztnQ0FFZGxCLElBQUksQ0FBQ0csT0FBTztnQ0FBQyxDQUFFO2dDQUFDSCxJQUFJLENBQUNFLElBQUk7Ozs7OztpRkFJL0JKLGtEQUFPOzs7Ozs7OztpRkFDUEYsc0RBQVc7Ozs7Ozs7K0ZBQ1RGLGlEQUFNO29CQUNMc0IsS0FBSyxFQUFDLENBQVM7b0JBQ2ZHLFNBQVM7b0JBQ1RELE9BQU8sRUFBQyxDQUFNOzs7Ozs7OzhCQUNmLENBRUQ7Ozs7OztLQXpDT1osY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hY2NvdW50L2FjY291bnQtcHJvZmlsZS5qcz9mZTkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEF2YXRhcixcbiAgQm94LFxuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcmRBY3Rpb25zLFxuICBDYXJkQ29udGVudCxcbiAgRGl2aWRlcixcbiAgVHlwb2dyYXBoeVxufSBmcm9tICdAbXVpL21hdGVyaWFsJztcblxuY29uc3QgdXNlciA9IHtcbiAgYXZhdGFyOiAnL3N0YXRpYy9pbWFnZXMvYXZhdGFycy9jLmpwZWcnLFxuICBjaXR5OiAn0JzQvtGB0LrQstCwJyxcbiAgY291bnRyeTogJ9Cg0L7RgdGB0LjRjycsXG4gIGpvYlRpdGxlOiAnU2VuaW9yIERldmVsb3BlcicsXG4gIG5hbWU6ICfQmNCy0LDQvSDQmNCy0LDQvdC+0LInLFxufTtcblxuZXhwb3J0IGNvbnN0IEFjY291bnRQcm9maWxlID0gKHByb3BzKSA9PiAoXG4gIDxDYXJkIHsuLi5wcm9wc30+XG4gICAgPENhcmRDb250ZW50PlxuICAgICAgPEJveFxuICAgICAgICBzeD17e1xuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgc3JjPXt1c2VyLmF2YXRhcn1cbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgaGVpZ2h0OiA2NCxcbiAgICAgICAgICAgIG1iOiAyLFxuICAgICAgICAgICAgd2lkdGg6IDY0XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICA+XG4gICAgICAgICAge3VzZXIubmFtZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXG4gICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt1c2VyLmNvdW50cnl9LCB7dXNlci5jaXR5fVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0JveD5cbiAgICA8L0NhcmRDb250ZW50PlxuICAgIDxEaXZpZGVyIC8+XG4gICAgPENhcmRBY3Rpb25zPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgPlxuICAgICAgICDQl9Cw0LPRgNGD0LfQuNGC0Ywg0YTQvtGC0L5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvQ2FyZEFjdGlvbnM+XG4gIDwvQ2FyZD5cbik7XG4iXSwibmFtZXMiOlsiQXZhdGFyIiwiQm94IiwiQnV0dG9uIiwiQ2FyZCIsIkNhcmRBY3Rpb25zIiwiQ2FyZENvbnRlbnQiLCJEaXZpZGVyIiwiVHlwb2dyYXBoeSIsInVzZXIiLCJhdmF0YXIiLCJjaXR5IiwiY291bnRyeSIsImpvYlRpdGxlIiwibmFtZSIsIkFjY291bnRQcm9maWxlIiwicHJvcHMiLCJzeCIsImFsaWduSXRlbXMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInNyYyIsImhlaWdodCIsIm1iIiwid2lkdGgiLCJjb2xvciIsImd1dHRlckJvdHRvbSIsInZhcmlhbnQiLCJmdWxsV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/account/account-profile.js\n");

/***/ })

});