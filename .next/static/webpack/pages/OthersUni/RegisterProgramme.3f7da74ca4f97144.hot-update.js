"use strict";
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst ProgramRegistration = (param)=>{\n    let { universities } = param;\n    _s();\n    const [selectedUniversity, setSelectedUniversity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [programData, setProgramData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        OfferedProgramName: \"\",\n        Duration: \"\",\n        TutionFee: \"\",\n        DepartmentName: \"\",\n        IsActive: \"1\"\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleUniversityChange = (e)=>{\n        setSelectedUniversity(e.target.value);\n        setProgramData({\n            ...programData,\n            OfferedProgramID: e.target.value\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Perform the POST request to submit the program data\n        try {\n            const response = await fetch(\"http://localhost:3002/University/create/Programme\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(programData)\n            });\n            if (response.ok) {\n                router.push(\"/Create\"); // Redirect to a success page\n            } else {\n                // Handle errors\n                console.error(\"Program registration failed\");\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto py-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-5 text-center animate-glow text-blue-900 hover:text-blue-600\",\n                children: \"Program Registration\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                lineNumber: 47,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"max-w-md mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"university\",\n                                className: \"block text-gray-600\",\n                                children: \"Select University:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                id: \"university\",\n                                name: \"university\",\n                                value: selectedUniversity,\n                                onChange: handleUniversityChange,\n                                className: \"mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"Select University\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    universities.map((uni)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: uni.IdUniversity,\n                                            children: uni.UniversityName\n                                        }, uni.IdUniversity, false, {\n                                            fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 15\n                                        }, undefined))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"programName\",\n                                className: \"block text-gray-600\",\n                                children: \"Program Name:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"programName\",\n                                name: \"programName\",\n                                value: programData.OfferedProgramName,\n                                onChange: (e)=>setProgramData({\n                                        ...programData,\n                                        OfferedProgramName: e.target.value\n                                    }),\n                                className: \"mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"duration\",\n                                className: \"block text-gray-600\",\n                                children: \"Duration:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"duration\",\n                                name: \"duration\",\n                                value: programData.Duration,\n                                onChange: (e)=>setProgramData({\n                                        ...programData,\n                                        Duration: e.target.value\n                                    }),\n                                className: \"mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"tutionFee\",\n                                className: \"block text-gray-600\",\n                                children: \"Tuition Fee:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"tutionFee\",\n                                name: \"tutionFee\",\n                                value: programData.TutionFee,\n                                onChange: (e)=>setProgramData({\n                                        ...programData,\n                                        TutionFee: e.target.value\n                                    }),\n                                className: \"mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"department\",\n                                className: \"block text-gray-600\",\n                                children: \"Department:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"department\",\n                                name: \"department\",\n                                value: programData.DepartmentName,\n                                onChange: (e)=>setProgramData({\n                                        ...programData,\n                                        DepartmentName: e.target.value\n                                    }),\n                                className: \"mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300 transform hover:scale-105\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\TRIFO\\\\Desktop\\\\Abroad_Study_Consulting_Next\\\\pages\\\\OthersUni\\\\RegisterProgramme.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProgramRegistration, \"mEBCB3faqQkxDlipAKptfZWZ15c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProgramRegistration;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProgramRegistration);\nvar _c;\n$RefreshReg$(_c, \"ProgramRegistration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O2tDQUdaLDhEQUFDbEI7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDSTtnQ0FBTUMsU0FBUTtnQ0FBWUwsV0FBVTswQ0FBc0I7Ozs7OzswQ0FDM0QsOERBQUNlO2dDQUNDQyxNQUFLO2dDQUNMVCxJQUFHO2dDQUNIQyxNQUFLO2dDQUNMeEIsT0FBT1gsWUFBWUksU0FBUztnQ0FDNUJnQyxVQUFVLENBQUMzQixJQUNUUixlQUFlO3dDQUFFLEdBQUdELFdBQVc7d0NBQUVJLFdBQVdLLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztvQ0FBQztnQ0FFN0RnQixXQUFVO2dDQUNWaUIsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDbEI7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDSTtnQ0FBTUMsU0FBUTtnQ0FBYUwsV0FBVTswQ0FBc0I7Ozs7OzswQ0FDNUQsOERBQUNlO2dDQUNDQyxNQUFLO2dDQUNMVCxJQUFHO2dDQUNIQyxNQUFLO2dDQUNMeEIsT0FBT1gsWUFBWUssY0FBYztnQ0FDakMrQixVQUFVLENBQUMzQixJQUNUUixlQUFlO3dDQUFFLEdBQUdELFdBQVc7d0NBQUVLLGdCQUFnQkksRUFBRUMsTUFBTSxDQUFDQyxLQUFLO29DQUFDO2dDQUVsRWdCLFdBQVU7Z0NBQ1ZpQixRQUFROzs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNDO3dCQUNDRixNQUFLO3dCQUNMaEIsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0FqSU0vQjs7UUFVV0Qsa0RBQVNBOzs7S0FWcEJDOztBQTZJTiwrREFBZUEsbUJBQW1CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL090aGVyc1VuaS9SZWdpc3RlclByb2dyYW1tZS5qcz81MmUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBQcm9ncmFtUmVnaXN0cmF0aW9uID0gKHsgdW5pdmVyc2l0aWVzIH0pID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRVbml2ZXJzaXR5LCBzZXRTZWxlY3RlZFVuaXZlcnNpdHldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwcm9ncmFtRGF0YSwgc2V0UHJvZ3JhbURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgT2ZmZXJlZFByb2dyYW1OYW1lOiAnJyxcclxuICAgIER1cmF0aW9uOiAnJyxcclxuICAgIFR1dGlvbkZlZTogJycsXHJcbiAgICBEZXBhcnRtZW50TmFtZTogJycsXHJcbiAgICBJc0FjdGl2ZTogJzEnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVW5pdmVyc2l0eUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFVuaXZlcnNpdHkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0UHJvZ3JhbURhdGEoeyAuLi5wcm9ncmFtRGF0YSwgT2ZmZXJlZFByb2dyYW1JRDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBQZXJmb3JtIHRoZSBQT1NUIHJlcXVlc3QgdG8gc3VibWl0IHRoZSBwcm9ncmFtIGRhdGFcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9Vbml2ZXJzaXR5L2NyZWF0ZS9Qcm9ncmFtbWUnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHByb2dyYW1EYXRhKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL0NyZWF0ZScpOyAvLyBSZWRpcmVjdCB0byBhIHN1Y2Nlc3MgcGFnZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEhhbmRsZSBlcnJvcnNcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdQcm9ncmFtIHJlZ2lzdHJhdGlvbiBmYWlsZWQnKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB5LTEwXCI+XHJcbiAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTUgdGV4dC1jZW50ZXIgYW5pbWF0ZS1nbG93IHRleHQtYmx1ZS05MDAgaG92ZXI6dGV4dC1ibHVlLTYwMFwiPlByb2dyYW0gUmVnaXN0cmF0aW9uPC9oMT5cclxuXHJcblxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVuaXZlcnNpdHlcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNjAwXCI+U2VsZWN0IFVuaXZlcnNpdHk6PC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgaWQ9XCJ1bml2ZXJzaXR5XCJcclxuICAgICAgICAgICAgbmFtZT1cInVuaXZlcnNpdHlcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRVbml2ZXJzaXR5fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVW5pdmVyc2l0eUNoYW5nZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBwLTIgYm9yZGVyIHJvdW5kZWQtbWQgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nIGZvY3VzOmJvcmRlci1ibHVlLTMwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgVW5pdmVyc2l0eTwvb3B0aW9uPlxyXG4gICAgICAgICAgICB7dW5pdmVyc2l0aWVzLm1hcCgodW5pKSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3VuaS5JZFVuaXZlcnNpdHl9IHZhbHVlPXt1bmkuSWRVbml2ZXJzaXR5fT5cclxuICAgICAgICAgICAgICAgIHt1bmkuVW5pdmVyc2l0eU5hbWV9XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByb2dyYW1OYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTYwMFwiPlByb2dyYW0gTmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJwcm9ncmFtTmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwcm9ncmFtTmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9ncmFtRGF0YS5PZmZlcmVkUHJvZ3JhbU5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICBzZXRQcm9ncmFtRGF0YSh7IC4uLnByb2dyYW1EYXRhLCBPZmZlcmVkUHJvZ3JhbU5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBwLTIgYm9yZGVyIHJvdW5kZWQtbWQgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nIGZvY3VzOmJvcmRlci1ibHVlLTMwMFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkdXJhdGlvblwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS02MDBcIj5EdXJhdGlvbjo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJkdXJhdGlvblwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJkdXJhdGlvblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9ncmFtRGF0YS5EdXJhdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgIHNldFByb2dyYW1EYXRhKHsgLi4ucHJvZ3JhbURhdGEsIER1cmF0aW9uOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgcC0yIGJvcmRlciByb3VuZGVkLW1kIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyBmb2N1czpib3JkZXItYmx1ZS0zMDBcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidHV0aW9uRmVlXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTYwMFwiPlR1aXRpb24gRmVlOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cInR1dGlvbkZlZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0dXRpb25GZWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvZ3JhbURhdGEuVHV0aW9uRmVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgc2V0UHJvZ3JhbURhdGEoeyAuLi5wcm9ncmFtRGF0YSwgVHV0aW9uRmVlOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgcC0yIGJvcmRlciByb3VuZGVkLW1kIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyBmb2N1czpib3JkZXItYmx1ZS0zMDBcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVwYXJ0bWVudFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS02MDBcIj5EZXBhcnRtZW50OjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cImRlcGFydG1lbnRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZGVwYXJ0bWVudFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9ncmFtRGF0YS5EZXBhcnRtZW50TmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgIHNldFByb2dyYW1EYXRhKHsgLi4ucHJvZ3JhbURhdGEsIERlcGFydG1lbnROYW1lOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgcC0yIGJvcmRlciByb3VuZGVkLW1kIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyBmb2N1czpib3JkZXItYmx1ZS0zMDBcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBTdWJtaXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgLy8gRmV0Y2ggdGhlIGxpc3Qgb2YgdW5pdmVyc2l0aWVzIGZyb20geW91ciBBUElcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDIvVW5pdmVyc2l0eS9Vbml2ZXJzaXR5RERsJyk7XHJcbiAgY29uc3QgdW5pdmVyc2l0aWVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgdW5pdmVyc2l0aWVzIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3JhbVJlZ2lzdHJhdGlvbjtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiUHJvZ3JhbVJlZ2lzdHJhdGlvbiIsInVuaXZlcnNpdGllcyIsInNlbGVjdGVkVW5pdmVyc2l0eSIsInNldFNlbGVjdGVkVW5pdmVyc2l0eSIsInByb2dyYW1EYXRhIiwic2V0UHJvZ3JhbURhdGEiLCJPZmZlcmVkUHJvZ3JhbU5hbWUiLCJEdXJhdGlvbiIsIlR1dGlvbkZlZSIsIkRlcGFydG1lbnROYW1lIiwiSXNBY3RpdmUiLCJyb3V0ZXIiLCJoYW5kbGVVbml2ZXJzaXR5Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiT2ZmZXJlZFByb2dyYW1JRCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwicHVzaCIsImNvbnNvbGUiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwic2VsZWN0IiwiaWQiLCJuYW1lIiwib25DaGFuZ2UiLCJvcHRpb24iLCJtYXAiLCJ1bmkiLCJJZFVuaXZlcnNpdHkiLCJVbml2ZXJzaXR5TmFtZSIsImlucHV0IiwidHlwZSIsInJlcXVpcmVkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/OthersUni/RegisterProgramme.js\n"));

/***/ })

});