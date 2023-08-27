/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/OthersUni/RegisterProgramme",{

/***/ "./pages/OthersUni/RegisterProgramme.js":
/*!**********************************************!*\
  !*** ./pages/OthersUni/RegisterProgramme.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst ProgramRegistration = (param)=>{\n    let { universities } = param;\n    _s();\n    const [selectedUniversity, setSelectedUniversity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [programData, setProgramData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        OfferedProgramName: \"\",\n        Duration: \"\",\n        TutionFee: \"\",\n        DepartmentName: \"\",\n        IsActive: \"1\"\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleUniversityChange = (e)=>{\n        setSelectedUniversity(e.target.value);\n        setProgramData({\n            ...programData,\n            OfferedProgramID: e.target.value\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Perform the POST request to submit the program data\n        try {\n            const response = await fetch(\"http://localhost:3002/University/create/Programme\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(programData)\n            });\n            if (response.ok) {\n                router.push(\"/success\"); // Redirect to a success page\n            } else {\n                // Handle errors\n                console.error(\"Program registration failed\");\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Program Registration\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"university\",\n                                children: \"Select University:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                id: \"university\",\n                                name: \"university\",\n                                value: selectedUniversity,\n                                onChange: handleUniversityChange,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"Select University\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    universities.map((uni)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: uni.IdUniversity,\n                                            children: uni.UniversityName\n                                        }, uni.IdUniversity, false, {\n                                            fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 15\n                                        }, undefined))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"programName\",\n                                children: \"Program Name:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"programName\",\n                                name: \"programName\",\n                                value: programData.OfferedProgramName,\n                                onChange: (e)=>setProgramData({\n                                        ...programData,\n                                        OfferedProgramName: e.target.value\n                                    }),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"duration\",\n                                children: \"Duration:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"duration\",\n                                name: \"duration\",\n                                value: programData.Duration,\n                                onChange: (e)=>setProgramData({\n                                        ...programData,\n                                        Duration: e.target.value\n                                    }),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"tutionFee\",\n                                children: \"Tution Fee:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"tutionFee\",\n                                name: \"tutionFee\",\n                                value: programData.TutionFee,\n                                onChange: (e)=>setProgramData({\n                                        ...programData,\n                                        TutionFee: e.target.value\n                                    }),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"department\",\n                                children: \"Department:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"department\",\n                                name: \"department\",\n                                value: programData.DepartmentName,\n                                onChange: (e)=>setProgramData({\n                                        ...programData,\n                                        DepartmentName: e.target.value\n                                    }),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProgramRegistration, \"mEBCB3faqQkxDlipAKptfZWZ15c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProgramRegistration;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProgramRegistration);\nvar _c;\n$RefreshReg$(_c, \"ProgramRegistration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MUIsSUFDVFIsZUFBZTt3Q0FBRSxHQUFHRCxXQUFXO3dDQUFFSSxXQUFXSyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7b0NBQUM7Z0NBRTdEZ0MsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDakI7OzBDQUNDLDhEQUFDSTtnQ0FBTUMsU0FBUTswQ0FBYTs7Ozs7OzBDQUM1Qiw4REFBQ1U7Z0NBQ0NDLE1BQUs7Z0NBQ0xULElBQUc7Z0NBQ0hDLE1BQUs7Z0NBQ0x2QixPQUFPWCxZQUFZSyxjQUFjO2dDQUNqQzhCLFVBQVUsQ0FBQzFCLElBQ1RSLGVBQWU7d0NBQUUsR0FBR0QsV0FBVzt3Q0FBRUssZ0JBQWdCSSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7b0NBQUM7Z0NBRWxFZ0MsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDQzt3QkFBT0YsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCO0dBckhNOUM7O1FBVVdELGtEQUFTQTs7O0tBVnBCQzs7QUFpSU4sK0RBQWVBLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9PdGhlcnNVbmkvUmVnaXN0ZXJQcm9ncmFtbWUuanM/NTJlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgUHJvZ3JhbVJlZ2lzdHJhdGlvbiA9ICh7IHVuaXZlcnNpdGllcyB9KSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdGVkVW5pdmVyc2l0eSwgc2V0U2VsZWN0ZWRVbml2ZXJzaXR5XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcHJvZ3JhbURhdGEsIHNldFByb2dyYW1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIE9mZmVyZWRQcm9ncmFtTmFtZTogJycsXHJcbiAgICBEdXJhdGlvbjogJycsXHJcbiAgICBUdXRpb25GZWU6ICcnLFxyXG4gICAgRGVwYXJ0bWVudE5hbWU6ICcnLFxyXG4gICAgSXNBY3RpdmU6ICcxJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVuaXZlcnNpdHlDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRVbml2ZXJzaXR5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIHNldFByb2dyYW1EYXRhKHsgLi4ucHJvZ3JhbURhdGEsIE9mZmVyZWRQcm9ncmFtSUQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgIC8vIFBlcmZvcm0gdGhlIFBPU1QgcmVxdWVzdCB0byBzdWJtaXQgdGhlIHByb2dyYW0gZGF0YVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAyL1VuaXZlcnNpdHkvY3JlYXRlL1Byb2dyYW1tZScsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocHJvZ3JhbURhdGEpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvc3VjY2VzcycpOyAvLyBSZWRpcmVjdCB0byBhIHN1Y2Nlc3MgcGFnZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEhhbmRsZSBlcnJvcnNcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdQcm9ncmFtIHJlZ2lzdHJhdGlvbiBmYWlsZWQnKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+UHJvZ3JhbSBSZWdpc3RyYXRpb248L2gxPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1bml2ZXJzaXR5XCI+U2VsZWN0IFVuaXZlcnNpdHk6PC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgaWQ9XCJ1bml2ZXJzaXR5XCJcclxuICAgICAgICAgICAgbmFtZT1cInVuaXZlcnNpdHlcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRVbml2ZXJzaXR5fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVW5pdmVyc2l0eUNoYW5nZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBVbml2ZXJzaXR5PC9vcHRpb24+XHJcbiAgICAgICAgICAgIHt1bml2ZXJzaXRpZXMubWFwKCh1bmkpID0+IChcclxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17dW5pLklkVW5pdmVyc2l0eX0gdmFsdWU9e3VuaS5JZFVuaXZlcnNpdHl9PlxyXG4gICAgICAgICAgICAgICAge3VuaS5Vbml2ZXJzaXR5TmFtZX1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcm9ncmFtTmFtZVwiPlByb2dyYW0gTmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJwcm9ncmFtTmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwcm9ncmFtTmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9ncmFtRGF0YS5PZmZlcmVkUHJvZ3JhbU5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICBzZXRQcm9ncmFtRGF0YSh7IC4uLnByb2dyYW1EYXRhLCBPZmZlcmVkUHJvZ3JhbU5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZHVyYXRpb25cIj5EdXJhdGlvbjo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJkdXJhdGlvblwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJkdXJhdGlvblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9ncmFtRGF0YS5EdXJhdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgIHNldFByb2dyYW1EYXRhKHsgLi4ucHJvZ3JhbURhdGEsIER1cmF0aW9uOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInR1dGlvbkZlZVwiPlR1dGlvbiBGZWU6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwidHV0aW9uRmVlXCJcclxuICAgICAgICAgICAgbmFtZT1cInR1dGlvbkZlZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9ncmFtRGF0YS5UdXRpb25GZWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICBzZXRQcm9ncmFtRGF0YSh7IC4uLnByb2dyYW1EYXRhLCBUdXRpb25GZWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVwYXJ0bWVudFwiPkRlcGFydG1lbnQ6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwiZGVwYXJ0bWVudFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJkZXBhcnRtZW50XCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb2dyYW1EYXRhLkRlcGFydG1lbnROYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgc2V0UHJvZ3JhbURhdGEoeyAuLi5wcm9ncmFtRGF0YSwgRGVwYXJ0bWVudE5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIC8vIEZldGNoIHRoZSBsaXN0IG9mIHVuaXZlcnNpdGllcyBmcm9tIHlvdXIgQVBJXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAyL1VuaXZlcnNpdHkvVW5pdmVyc2l0eUREbCcpO1xyXG4gIGNvbnN0IHVuaXZlcnNpdGllcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHVuaXZlcnNpdGllcyB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2dyYW1SZWdpc3RyYXRpb247XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlByb2dyYW1SZWdpc3RyYXRpb24iLCJ1bml2ZXJzaXRpZXMiLCJzZWxlY3RlZFVuaXZlcnNpdHkiLCJzZXRTZWxlY3RlZFVuaXZlcnNpdHkiLCJwcm9ncmFtRGF0YSIsInNldFByb2dyYW1EYXRhIiwiT2ZmZXJlZFByb2dyYW1OYW1lIiwiRHVyYXRpb24iLCJUdXRpb25GZWUiLCJEZXBhcnRtZW50TmFtZSIsIklzQWN0aXZlIiwicm91dGVyIiwiaGFuZGxlVW5pdmVyc2l0eUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk9mZmVyZWRQcm9ncmFtSUQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsInB1c2giLCJjb25zb2xlIiwiZXJyb3IiLCJkaXYiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsInNlbGVjdCIsImlkIiwibmFtZSIsIm9uQ2hhbmdlIiwib3B0aW9uIiwibWFwIiwidW5pIiwiSWRVbml2ZXJzaXR5IiwiVW5pdmVyc2l0eU5hbWUiLCJpbnB1dCIsInR5cGUiLCJyZXF1aXJlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/OthersUni/RegisterProgramme.js\n"));

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcz8xYmI2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n"));

/***/ })

});