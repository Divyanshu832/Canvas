"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/editor/[projectId]/[jsonId]/page",{

/***/ "(app-pages-browser)/./src/features/editor/components/sidebar.tsx":
/*!****************************************************!*\
  !*** ./src/features/editor/components/sidebar.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sidebar: function() { return /* binding */ Sidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_DramaIcon_ImageIcon_Pencil_Settings_Type_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=DramaIcon,ImageIcon,Pencil,Settings,Type!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/image.js\");\n/* harmony import */ var _barrel_optimize_names_DramaIcon_ImageIcon_Pencil_Settings_Type_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=DramaIcon,ImageIcon,Pencil,Settings,Type!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/type.js\");\n/* harmony import */ var _barrel_optimize_names_DramaIcon_ImageIcon_Pencil_Settings_Type_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=DramaIcon,ImageIcon,Pencil,Settings,Type!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/pencil.js\");\n/* harmony import */ var _barrel_optimize_names_DramaIcon_ImageIcon_Pencil_Settings_Type_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=DramaIcon,ImageIcon,Pencil,Settings,Type!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/settings.js\");\n/* harmony import */ var _barrel_optimize_names_DramaIcon_ImageIcon_Pencil_Settings_Type_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=DramaIcon,ImageIcon,Pencil,Settings,Type!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/drama.js\");\n/* harmony import */ var _features_editor_components_sidebar_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/features/editor/components/sidebar-item */ \"(app-pages-browser)/./src/features/editor/components/sidebar-item.tsx\");\n/* __next_internal_client_entry_do_not_use__ Sidebar auto */ \n\n\nconst Sidebar = (param)=>{\n    let { activeTool, onChangeActiveTool } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"bg-white flex flex-col w-[100px] h-full border-r overflow-y-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_features_editor_components_sidebar_item__WEBPACK_IMPORTED_MODULE_1__.SidebarItem, {\n                    icon: _barrel_optimize_names_DramaIcon_ImageIcon_Pencil_Settings_Type_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                    label: \"Image\",\n                    isActive: activeTool === \"images\",\n                    onClick: ()=>onChangeActiveTool(\"images\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\RHBcanva\\\\image-ai-master\\\\src\\\\features\\\\editor\\\\components\\\\sidebar.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_features_editor_components_sidebar_item__WEBPACK_IMPORTED_MODULE_1__.SidebarItem, {\n                    icon: _barrel_optimize_names_DramaIcon_ImageIcon_Pencil_Settings_Type_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    label: \"Text\",\n                    isActive: activeTool === \"text\",\n                    onClick: ()=>onChangeActiveTool(\"text\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\RHBcanva\\\\image-ai-master\\\\src\\\\features\\\\editor\\\\components\\\\sidebar.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_features_editor_components_sidebar_item__WEBPACK_IMPORTED_MODULE_1__.SidebarItem, {\n                    icon: _barrel_optimize_names_DramaIcon_ImageIcon_Pencil_Settings_Type_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    label: \"Draw\",\n                    isActive: activeTool === \"draw\",\n                    onClick: ()=>onChangeActiveTool(\"draw\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\RHBcanva\\\\image-ai-master\\\\src\\\\features\\\\editor\\\\components\\\\sidebar.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_features_editor_components_sidebar_item__WEBPACK_IMPORTED_MODULE_1__.SidebarItem, {\n                    icon: _barrel_optimize_names_DramaIcon_ImageIcon_Pencil_Settings_Type_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    label: \"Settings\",\n                    isActive: activeTool === \"settings\",\n                    onClick: ()=>onChangeActiveTool(\"settings\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\RHBcanva\\\\image-ai-master\\\\src\\\\features\\\\editor\\\\components\\\\sidebar.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_features_editor_components_sidebar_item__WEBPACK_IMPORTED_MODULE_1__.SidebarItem, {\n                    icon: _barrel_optimize_names_DramaIcon_ImageIcon_Pencil_Settings_Type_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                    label: \"Canvas\",\n                    isActive: activeTool === \"canvas\",\n                    onClick: ()=>onChangeActiveTool(\"canvas\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\RHBcanva\\\\image-ai-master\\\\src\\\\features\\\\editor\\\\components\\\\sidebar.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\RHBcanva\\\\image-ai-master\\\\src\\\\features\\\\editor\\\\components\\\\sidebar.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\RHBcanva\\\\image-ai-master\\\\src\\\\features\\\\editor\\\\components\\\\sidebar.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9mZWF0dXJlcy9lZGl0b3IvY29tcG9uZW50cy9zaWRlYmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFXc0I7QUFHa0Q7QUFPakUsTUFBTU0sVUFBVTtRQUFDLEVBQ3RCQyxVQUFVLEVBQ1ZDLGtCQUFrQixFQUNMO0lBQ2IscUJBQ0UsOERBQUNDO1FBQU1DLFdBQVU7a0JBQ2YsNEVBQUNDO1lBQUdELFdBQVU7OzhCQU9aLDhEQUFDTCxpRkFBV0E7b0JBQ1ZPLE1BQU1aLG9IQUFTQTtvQkFDZmEsT0FBTTtvQkFDTkMsVUFBVVAsZUFBZTtvQkFDekJRLFNBQVMsSUFBTVAsbUJBQW1COzs7Ozs7OEJBRXBDLDhEQUFDSCxpRkFBV0E7b0JBQ1ZPLE1BQU1ULG9IQUFJQTtvQkFDVlUsT0FBTTtvQkFDTkMsVUFBVVAsZUFBZTtvQkFDekJRLFNBQVMsSUFBTVAsbUJBQW1COzs7Ozs7OEJBUXBDLDhEQUFDSCxpRkFBV0E7b0JBQ1ZPLE1BQU1YLG9IQUFNQTtvQkFDWlksT0FBTTtvQkFDTkMsVUFBVVAsZUFBZTtvQkFDekJRLFNBQVMsSUFBTVAsbUJBQW1COzs7Ozs7OEJBUXBDLDhEQUFDSCxpRkFBV0E7b0JBQ1ZPLE1BQU1WLG9IQUFRQTtvQkFDZFcsT0FBTTtvQkFDTkMsVUFBVVAsZUFBZTtvQkFDekJRLFNBQVMsSUFBTVAsbUJBQW1COzs7Ozs7OEJBRXBDLDhEQUFDSCxpRkFBV0E7b0JBQ1ZPLE1BQU1SLG9IQUFTQTtvQkFDZlMsT0FBTTtvQkFDTkMsVUFBVVAsZUFBZTtvQkFDekJRLFNBQVMsSUFBTVAsbUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQUs1QyxFQUFFO0tBMURXRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvZWRpdG9yL2NvbXBvbmVudHMvc2lkZWJhci50c3g/ZTAyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgXG4gIExheW91dFRlbXBsYXRlLFxuICBJbWFnZUljb24sXG4gIFBlbmNpbCxcbiAgU2V0dGluZ3MsXG4gIFNoYXBlcyxcbiAgU3BhcmtsZXMsXG4gIFR5cGUsXG4gIERyYW1hSWNvblxufSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmltcG9ydCB7IEFjdGl2ZVRvb2wgfSBmcm9tIFwiQC9mZWF0dXJlcy9lZGl0b3IvdHlwZXNcIjtcbmltcG9ydCB7IFNpZGViYXJJdGVtIH0gZnJvbSBcIkAvZmVhdHVyZXMvZWRpdG9yL2NvbXBvbmVudHMvc2lkZWJhci1pdGVtXCI7XG5cbmludGVyZmFjZSBTaWRlYmFyUHJvcHMge1xuICBhY3RpdmVUb29sOiBBY3RpdmVUb29sO1xuICBvbkNoYW5nZUFjdGl2ZVRvb2w6ICh0b29sOiBBY3RpdmVUb29sKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGNvbnN0IFNpZGViYXIgPSAoe1xuICBhY3RpdmVUb29sLFxuICBvbkNoYW5nZUFjdGl2ZVRvb2wsXG59OiBTaWRlYmFyUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPVwiYmctd2hpdGUgZmxleCBmbGV4LWNvbCB3LVsxMDBweF0gaC1mdWxsIGJvcmRlci1yIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgey8qIDxTaWRlYmFySXRlbVxuICAgICAgICAgIGljb249e0xheW91dFRlbXBsYXRlfVxuICAgICAgICAgIGxhYmVsPVwiRGVzaWduXCJcbiAgICAgICAgICBpc0FjdGl2ZT17YWN0aXZlVG9vbCA9PT0gXCJ0ZW1wbGF0ZXNcIn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZUFjdGl2ZVRvb2woXCJ0ZW1wbGF0ZXNcIil9XG4gICAgICAgIC8+ICovfVxuICAgICAgICA8U2lkZWJhckl0ZW1cbiAgICAgICAgICBpY29uPXtJbWFnZUljb259XG4gICAgICAgICAgbGFiZWw9XCJJbWFnZVwiXG4gICAgICAgICAgaXNBY3RpdmU9e2FjdGl2ZVRvb2wgPT09IFwiaW1hZ2VzXCJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2VBY3RpdmVUb29sKFwiaW1hZ2VzXCIpfVxuICAgICAgICAvPlxuICAgICAgICA8U2lkZWJhckl0ZW1cbiAgICAgICAgICBpY29uPXtUeXBlfVxuICAgICAgICAgIGxhYmVsPVwiVGV4dFwiXG4gICAgICAgICAgaXNBY3RpdmU9e2FjdGl2ZVRvb2wgPT09IFwidGV4dFwifVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlQWN0aXZlVG9vbChcInRleHRcIil9XG4gICAgICAgIC8+XG4gICAgICAgIHsvKiA8U2lkZWJhckl0ZW1cbiAgICAgICAgICBpY29uPXtTaGFwZXN9XG4gICAgICAgICAgbGFiZWw9XCJTaGFwZXNcIlxuICAgICAgICAgIGlzQWN0aXZlPXthY3RpdmVUb29sID09PSBcInNoYXBlc1wifVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlQWN0aXZlVG9vbChcInNoYXBlc1wiKX1cbiAgICAgICAgLz4gKi99XG4gICAgICAgIDxTaWRlYmFySXRlbVxuICAgICAgICAgIGljb249e1BlbmNpbH1cbiAgICAgICAgICBsYWJlbD1cIkRyYXdcIlxuICAgICAgICAgIGlzQWN0aXZlPXthY3RpdmVUb29sID09PSBcImRyYXdcIn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZUFjdGl2ZVRvb2woXCJkcmF3XCIpfVxuICAgICAgICAvPlxuICAgICAgICB7LyogPFNpZGViYXJJdGVtXG4gICAgICAgICAgaWNvbj17U3BhcmtsZXN9XG4gICAgICAgICAgbGFiZWw9XCJBSVwiXG4gICAgICAgICAgaXNBY3RpdmU9e2FjdGl2ZVRvb2wgPT09IFwiYWlcIn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZUFjdGl2ZVRvb2woXCJhaVwiKX1cbiAgICAgICAgLz4gKi99XG4gICAgICAgIDxTaWRlYmFySXRlbVxuICAgICAgICAgIGljb249e1NldHRpbmdzfVxuICAgICAgICAgIGxhYmVsPVwiU2V0dGluZ3NcIlxuICAgICAgICAgIGlzQWN0aXZlPXthY3RpdmVUb29sID09PSBcInNldHRpbmdzXCJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2VBY3RpdmVUb29sKFwic2V0dGluZ3NcIil9XG4gICAgICAgIC8+XG4gICAgICAgIDxTaWRlYmFySXRlbVxuICAgICAgICAgIGljb249e0RyYW1hSWNvbn1cbiAgICAgICAgICBsYWJlbD1cIkNhbnZhc1wiXG4gICAgICAgICAgaXNBY3RpdmU9e2FjdGl2ZVRvb2wgPT09IFwiY2FudmFzXCJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2VBY3RpdmVUb29sKFwiY2FudmFzXCIpfVxuICAgICAgICAvPlxuICAgICAgPC91bD5cbiAgICA8L2FzaWRlPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJJbWFnZUljb24iLCJQZW5jaWwiLCJTZXR0aW5ncyIsIlR5cGUiLCJEcmFtYUljb24iLCJTaWRlYmFySXRlbSIsIlNpZGViYXIiLCJhY3RpdmVUb29sIiwib25DaGFuZ2VBY3RpdmVUb29sIiwiYXNpZGUiLCJjbGFzc05hbWUiLCJ1bCIsImljb24iLCJsYWJlbCIsImlzQWN0aXZlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/features/editor/components/sidebar.tsx\n"));

/***/ })

});