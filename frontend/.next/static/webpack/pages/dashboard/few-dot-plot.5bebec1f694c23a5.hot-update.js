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

/***/ "./src/utils/chart-service.js":
/*!************************************!*\
  !*** ./src/utils/chart-service.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialChart\": function() { return /* binding */ initialChart; },\n/* harmony export */   \"addLabel\": function() { return /* binding */ addLabel; },\n/* harmony export */   \"addDataset\": function() { return /* binding */ addDataset; },\n/* harmony export */   \"changeLabels\": function() { return /* binding */ changeLabels; },\n/* harmony export */   \"createChart\": function() { return /* binding */ createChart; }\n/* harmony export */ });\n/* harmony import */ var _usr_src_app_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _usr_src_app_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_src_app_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar initialChart = function() {\n    return {\n        labels: [],\n        datasets: []\n    };\n};\nvar addLabel = function(chart, label) {\n    chart.labels = chart.labels ? _toConsumableArray(chart.labels).concat([\n        label\n    ]) : [\n        label\n    ];\n    return chart;\n};\nvar addDataset = function(chart, dataset) {\n    var label = dataset.label, data = dataset.data, borderColor = dataset.borderColor, backgroundColor = dataset.backgroundColor;\n    var addedDataset = {\n        label: label !== null && label !== void 0 ? label : '',\n        data: data !== null && data !== void 0 ? data : [],\n        borderColor: borderColor !== null && borderColor !== void 0 ? borderColor : 'rgb(255, 99, 132)',\n        backgroundColor: backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : 'rgba(255, 255, 255)'\n    };\n    chart.datasets = chart.datasets ? _toConsumableArray(chart.datasets).concat([\n        addedDataset\n    ]) : [\n        addedDataset\n    ];\n    return chart;\n};\nvar changeLabels = function(chart, labels) {\n    chart.labels = labels;\n    return chart;\n};\nvar createChart = _asyncToGenerator(_usr_src_app_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n    var callback, labels, data, chart;\n    return _usr_src_app_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                callback = param.callback, labels = param.labels;\n                _ctx.next = 3;\n                return callback();\n            case 3:\n                data = _ctx.sent;\n                chart = initialChart();\n                addDataset(chart, data);\n                faker.colo;\n            case 7:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvY2hhcnQtc2VydmljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sR0FBSyxDQUFDQSxZQUFZLEdBQUcsUUFDNUIsR0FEa0MsQ0FBQztJQUMvQixNQUFNLENBQUMsQ0FBQztRQUNKQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ1ZDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDaEIsQ0FBQztBQUNMLENBQUM7QUFFTSxHQUFLLENBQUNDLFFBQVEsR0FBRyxRQUFRQyxDQUFQQyxLQUFLLEVBQUVELEtBQUssRUFBSyxDQUFDO0lBQ3ZDQyxLQUFLLENBQUNKLE1BQU0sR0FBR0ksS0FBSyxDQUFDSixNQUFNLHNCQUFPSSxLQUFLLENBQUNKLE1BQU0sU0FBaEIsQ0FBQztRQUFpQkcsS0FBSztJQUFBLENBQUMsSUFBRyxDQUFDQTtRQUFBQSxLQUFLO0lBQUEsQ0FBQztJQUVoRSxNQUFNLENBQUNDLEtBQUs7QUFDaEIsQ0FBQztBQUVNLEdBQUssQ0FBQ0MsVUFBVSxHQUFHLFFBQVFDLENBQVBGLEtBQUssRUFBRUUsT0FBTyxFQUFLLENBQUM7SUFDM0MsR0FBSyxDQUFFSCxLQUFLLEdBQXdDRyxPQUFPLENBQXBESCxLQUFLLEVBQUVJLElBQUksR0FBa0NELE9BQU8sQ0FBN0NDLElBQUksRUFBRUMsV0FBVyxHQUFxQkYsT0FBTyxDQUF2Q0UsV0FBVyxFQUFFQyxlQUFlLEdBQUlILE9BQU8sQ0FBMUJHLGVBQWU7SUFFaEQsR0FBSyxDQUFDQyxZQUFZLEdBQUcsQ0FBQztRQUNsQlAsS0FBSyxFQUFFQSxLQUFLLGFBQUxBLEtBQUssY0FBTEEsS0FBSyxHQUFJLENBQUU7UUFDbEJJLElBQUksRUFBRUEsSUFBSSxhQUFKQSxJQUFJLGNBQUpBLElBQUksR0FBSSxDQUFDLENBQUM7UUFDaEJDLFdBQVcsRUFBRUEsV0FBVyxhQUFYQSxXQUFXLGNBQVhBLFdBQVcsR0FBSSxDQUFtQjtRQUMvQ0MsZUFBZSxFQUFFQSxlQUFlLGFBQWZBLGVBQWUsY0FBZkEsZUFBZSxHQUFJLENBQXFCO0lBQzdELENBQUM7SUFFREwsS0FBSyxDQUFDSCxRQUFRLEdBQUdHLEtBQUssQ0FBQ0gsUUFBUSxzQkFBT0csS0FBSyxDQUFDSCxRQUFRLFNBQWxCLENBQUM7UUFBbUJTLFlBQVk7SUFBQSxDQUFDLElBQUcsQ0FBQ0E7UUFBQUEsWUFBWTtJQUFBLENBQUM7SUFFcEYsTUFBTSxDQUFDTixLQUFLO0FBQ2hCLENBQUM7QUFFTSxHQUFLLENBQUNPLFlBQVksR0FBRyxRQUFRWCxDQUFQSSxLQUFLLEVBQUVKLE1BQU0sRUFBSyxDQUFDO0lBQzVDSSxLQUFLLENBQUNKLE1BQU0sR0FBR0EsTUFBTTtJQUVyQixNQUFNLENBQUNJLEtBQUs7QUFDaEIsQ0FBQztBQUVNLEdBQUssQ0FBQ1EsV0FBVyw0SUFBRyxRQUFRQyxnQkFBc0IsQ0FBQztRQUF2QkEsUUFBUSxFQUFFYixNQUFNLEVBQ3pDTyxJQUFJLEVBRUpILEtBQUs7Ozs7Z0JBSG9CUyxRQUFRLFNBQVJBLFFBQVEsRUFBRWIsTUFBTSxTQUFOQSxNQUFNOzt1QkFDNUJhLFFBQVE7O2dCQUFyQk4sSUFBSTtnQkFFSkgsS0FBSyxHQUFHTCxZQUFZO2dCQUMxQk0sVUFBVSxDQUFDRCxLQUFLLEVBQUVHLElBQUk7Z0JBRXRCTyxLQUFLLENBQUNDLElBQUk7Ozs7OztBQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NoYXJ0LXNlcnZpY2UuanM/MzJlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbENoYXJ0ID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxhYmVsczogW10sXG4gICAgICAgIGRhdGFzZXRzOiBbXVxuICAgIH07XG59XG5cbmV4cG9ydCBjb25zdCBhZGRMYWJlbCA9IChjaGFydCwgbGFiZWwpID0+IHtcbiAgICBjaGFydC5sYWJlbHMgPSBjaGFydC5sYWJlbHMgPyBbLi4uY2hhcnQubGFiZWxzLCBsYWJlbF0gOiBbbGFiZWxdO1xuXG4gICAgcmV0dXJuIGNoYXJ0O1xufVxuXG5leHBvcnQgY29uc3QgYWRkRGF0YXNldCA9IChjaGFydCwgZGF0YXNldCkgPT4ge1xuICAgIGNvbnN0IHtsYWJlbCwgZGF0YSwgYm9yZGVyQ29sb3IsIGJhY2tncm91bmRDb2xvcn0gPSBkYXRhc2V0O1xuXG4gICAgY29uc3QgYWRkZWREYXRhc2V0ID0ge1xuICAgICAgICBsYWJlbDogbGFiZWwgPz8gJycsXG4gICAgICAgIGRhdGE6IGRhdGEgPz8gW10sXG4gICAgICAgIGJvcmRlckNvbG9yOiBib3JkZXJDb2xvciA/PyAncmdiKDI1NSwgOTksIDEzMiknLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvciA/PyAncmdiYSgyNTUsIDI1NSwgMjU1KScsXG4gICAgfVxuXG4gICAgY2hhcnQuZGF0YXNldHMgPSBjaGFydC5kYXRhc2V0cyA/IFsuLi5jaGFydC5kYXRhc2V0cywgYWRkZWREYXRhc2V0XSA6IFthZGRlZERhdGFzZXRdO1xuXG4gICAgcmV0dXJuIGNoYXJ0O1xufVxuXG5leHBvcnQgY29uc3QgY2hhbmdlTGFiZWxzID0gKGNoYXJ0LCBsYWJlbHMpID0+IHtcbiAgICBjaGFydC5sYWJlbHMgPSBsYWJlbHM7XG5cbiAgICByZXR1cm4gY2hhcnQ7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDaGFydCA9IGFzeW5jICh7Y2FsbGJhY2ssIGxhYmVsc30pID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgY2FsbGJhY2soKTtcblxuICAgIGNvbnN0IGNoYXJ0ID0gaW5pdGlhbENoYXJ0KCk7XG4gICAgYWRkRGF0YXNldChjaGFydCwgZGF0YSk7XG5cbiAgICBmYWtlci5jb2xvXG59XG4iXSwibmFtZXMiOlsiaW5pdGlhbENoYXJ0IiwibGFiZWxzIiwiZGF0YXNldHMiLCJhZGRMYWJlbCIsImxhYmVsIiwiY2hhcnQiLCJhZGREYXRhc2V0IiwiZGF0YXNldCIsImRhdGEiLCJib3JkZXJDb2xvciIsImJhY2tncm91bmRDb2xvciIsImFkZGVkRGF0YXNldCIsImNoYW5nZUxhYmVscyIsImNyZWF0ZUNoYXJ0IiwiY2FsbGJhY2siLCJmYWtlciIsImNvbG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/chart-service.js\n");

/***/ })

});