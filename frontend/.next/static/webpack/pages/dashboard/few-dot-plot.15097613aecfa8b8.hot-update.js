"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard/few-dot-plot",{

/***/ "./src/__mocks__/vacancy-plot-data-2.js":
/*!**********************************************!*\
  !*** ./src/__mocks__/vacancy-plot-data-2.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"vacancyPlotData\": function() { return /* binding */ vacancyPlotData; }\n/* harmony export */ });\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ \"./node_modules/faker/index.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar randomVacanciesCountWithLabels = function() {\n    var numberOfData = faker__WEBPACK_IMPORTED_MODULE_0___default().datatype.number({\n        min: 300,\n        max: 300\n    });\n    return {\n        labels: Array(numberOfData).fill(0).map(function(val, index) {\n            var currDate = new Date();\n            currDate.setDate(currDate.getDate() + index);\n            return currDate.toISOString().split('T')[0];\n        }),\n        datasets: [\n            {\n                data: Array(numberOfData).fill(0).map(function() {\n                    return faker__WEBPACK_IMPORTED_MODULE_0___default().random.number();\n                }),\n                borderColor: faker__WEBPACK_IMPORTED_MODULE_0___default().commerce.color(),\n                backgroundColor: faker__WEBPACK_IMPORTED_MODULE_0___default().commerce.color(),\n                label: faker__WEBPACK_IMPORTED_MODULE_0___default().random.word()\n            }\n        ]\n    };\n};\nvar vacancyPlotData = [\n    _objectSpread({\n        trackId: 1\n    }, randomVacanciesCountWithLabels()),\n    _objectSpread({\n        trackId: 2\n    }, randomVacanciesCountWithLabels()),\n    _objectSpread({\n        trackId: 3\n    }, randomVacanciesCountWithLabels()), \n];\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvX19tb2Nrc19fL3ZhY2FuY3ktcGxvdC1kYXRhLTIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLEdBQUssQ0FBQ0MsOEJBQThCLEdBQUcsUUFDdkMsR0FENkMsQ0FBQztJQUMxQyxHQUFLLENBQUNDLFlBQVksR0FBR0YsNERBQXFCLENBQUMsQ0FBQ0s7UUFBQUEsR0FBRyxFQUFFLEdBQUc7UUFBRUMsR0FBRyxFQUFFLEdBQUc7SUFBQSxDQUFDO0lBRS9ELE1BQU0sQ0FBQyxDQUFDO1FBQ0pDLE1BQU0sRUFBRUMsS0FBSyxDQUFDTixZQUFZLEVBQUVPLElBQUksQ0FBQyxDQUFDLEVBQUVDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEdBQUcsRUFBRUMsS0FBSyxFQUFLLENBQUM7WUFDckQsR0FBSyxDQUFDQyxRQUFRLEdBQUcsR0FBRyxDQUFDQyxJQUFJO1lBRXpCRCxRQUFRLENBQUNFLE9BQU8sQ0FBQ0YsUUFBUSxDQUFDRyxPQUFPLEtBQUtKLEtBQUs7WUFFM0MsTUFBTSxDQUFDQyxRQUFRLENBQUNJLFdBQVcsR0FBR0MsS0FBSyxDQUFDLENBQUcsSUFBRSxDQUFDO1FBQzlDLENBQUM7UUFDREMsUUFBUSxFQUFFLENBQUM7WUFDUCxDQUFDO2dCQUNHQyxJQUFJLEVBQUVaLEtBQUssQ0FBQ04sWUFBWSxFQUFFTyxJQUFJLENBQUMsQ0FBQyxFQUFFQyxHQUFHLENBQUMsUUFBUTtvQkFBRlYsTUFBTXFCLENBQU5yQiwwREFBbUI7O2dCQUMvRHNCLFdBQVcsRUFBRXRCLDJEQUFvQjtnQkFDakN5QixlQUFlLEVBQUV6QiwyREFBb0I7Z0JBQ3JDMEIsS0FBSyxFQUFFMUIsd0RBQWlCO1lBQzVCLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFFTSxHQUFLLENBQUM0QixlQUFlLEdBQUcsQ0FBQzs7UUFFeEJDLE9BQU8sRUFBRSxDQUFDO09BQ1A1Qiw4QkFBOEI7O1FBR2pDNEIsT0FBTyxFQUFFLENBQUM7T0FDUDVCLDhCQUE4Qjs7UUFHakM0QixPQUFPLEVBQUUsQ0FBQztPQUNQNUIsOEJBQThCO0FBRXpDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL19fbW9ja3NfXy92YWNhbmN5LXBsb3QtZGF0YS0yLmpzPzkwYjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcblxuY29uc3QgcmFuZG9tVmFjYW5jaWVzQ291bnRXaXRoTGFiZWxzID0gKCkgPT4ge1xuICAgIGNvbnN0IG51bWJlck9mRGF0YSA9IGZha2VyLmRhdGF0eXBlLm51bWJlcih7bWluOiAzMDAsIG1heDogMzAwfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsYWJlbHM6IEFycmF5KG51bWJlck9mRGF0YSkuZmlsbCgwKS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJEYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICAgICAgY3VyckRhdGUuc2V0RGF0ZShjdXJyRGF0ZS5nZXREYXRlKCkgKyBpbmRleCk7XG5cbiAgICAgICAgICAgIHJldHVybiBjdXJyRGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gICAgICAgIH0pLFxuICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGE6IEFycmF5KG51bWJlck9mRGF0YSkuZmlsbCgwKS5tYXAoKCkgPT4gZmFrZXIucmFuZG9tLm51bWJlcigpKSxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogZmFrZXIuY29tbWVyY2UuY29sb3IoKSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZha2VyLmNvbW1lcmNlLmNvbG9yKCksXG4gICAgICAgICAgICAgICAgbGFiZWw6IGZha2VyLnJhbmRvbS53b3JkKCksXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB2YWNhbmN5UGxvdERhdGEgPSBbXG4gICAge1xuICAgICAgICB0cmFja0lkOiAxLFxuICAgICAgICAuLi5yYW5kb21WYWNhbmNpZXNDb3VudFdpdGhMYWJlbHMoKVxuICAgIH0sXG4gICAge1xuICAgICAgICB0cmFja0lkOiAyLFxuICAgICAgICAuLi5yYW5kb21WYWNhbmNpZXNDb3VudFdpdGhMYWJlbHMoKVxuICAgIH0sXG4gICAge1xuICAgICAgICB0cmFja0lkOiAzLFxuICAgICAgICAuLi5yYW5kb21WYWNhbmNpZXNDb3VudFdpdGhMYWJlbHMoKVxuICAgIH0sXG5dO1xuIl0sIm5hbWVzIjpbImZha2VyIiwicmFuZG9tVmFjYW5jaWVzQ291bnRXaXRoTGFiZWxzIiwibnVtYmVyT2ZEYXRhIiwiZGF0YXR5cGUiLCJudW1iZXIiLCJtaW4iLCJtYXgiLCJsYWJlbHMiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJ2YWwiLCJpbmRleCIsImN1cnJEYXRlIiwiRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwidG9JU09TdHJpbmciLCJzcGxpdCIsImRhdGFzZXRzIiwiZGF0YSIsInJhbmRvbSIsImJvcmRlckNvbG9yIiwiY29tbWVyY2UiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImxhYmVsIiwid29yZCIsInZhY2FuY3lQbG90RGF0YSIsInRyYWNrSWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/__mocks__/vacancy-plot-data-2.js\n");

/***/ })

});