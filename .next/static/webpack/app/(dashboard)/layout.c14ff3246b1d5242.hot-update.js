"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/layout",{

/***/ "(app-pages-browser)/./src/app/(dashboard)/sidebar-routes.tsx":
/*!************************************************!*\
  !*** ./src/app/(dashboard)/sidebar-routes.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SidebarRoutes: function() { return /* binding */ SidebarRoutes; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Home_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Home!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/house.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _features_subscriptions_hooks_use_paywall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/features/subscriptions/hooks/use-paywall */ \"(app-pages-browser)/./src/features/subscriptions/hooks/use-paywall.ts\");\n/* harmony import */ var _features_subscriptions_api_use_checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/features/subscriptions/api/use-checkout */ \"(app-pages-browser)/./src/features/subscriptions/api/use-checkout.ts\");\n/* harmony import */ var _features_subscriptions_api_use_billing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/features/subscriptions/api/use-billing */ \"(app-pages-browser)/./src/features/subscriptions/api/use-billing.ts\");\n/* harmony import */ var _components_ui_separator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/separator */ \"(app-pages-browser)/./src/components/ui/separator.tsx\");\n/* harmony import */ var _sidebar_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar-item */ \"(app-pages-browser)/./src/app/(dashboard)/sidebar-item.tsx\");\n/* __next_internal_client_entry_do_not_use__ SidebarRoutes auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst SidebarRoutes = ()=>{\n    _s();\n    const mutation = (0,_features_subscriptions_api_use_checkout__WEBPACK_IMPORTED_MODULE_3__.useCheckout)();\n    const billingMutation = (0,_features_subscriptions_api_use_billing__WEBPACK_IMPORTED_MODULE_4__.useBilling)();\n    const { shouldBlock, isLoading, triggerPaywall } = (0,_features_subscriptions_hooks_use_paywall__WEBPACK_IMPORTED_MODULE_2__.usePaywall)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    const onClick = ()=>{\n        if (shouldBlock) {\n            triggerPaywall();\n            return;\n        }\n        billingMutation.mutate();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-y-4 flex-1\",\n        children: [\n            shouldBlock && !isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-3\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\RHBcanva\\\\image-ai-master\\\\src\\\\app\\\\(dashboard)\\\\sidebar-routes.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-col gap-y-1 px-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sidebar_item__WEBPACK_IMPORTED_MODULE_6__.SidebarItem, {\n                    href: \"/\",\n                    icon: _barrel_optimize_names_Home_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                    label: \"Home\",\n                    isActive: pathname === \"/\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\RHBcanva\\\\image-ai-master\\\\src\\\\app\\\\(dashboard)\\\\sidebar-routes.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\RHBcanva\\\\image-ai-master\\\\src\\\\app\\\\(dashboard)\\\\sidebar-routes.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_separator__WEBPACK_IMPORTED_MODULE_5__.Separator, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\RHBcanva\\\\image-ai-master\\\\src\\\\app\\\\(dashboard)\\\\sidebar-routes.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\RHBcanva\\\\image-ai-master\\\\src\\\\app\\\\(dashboard)\\\\sidebar-routes.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-col gap-y-1 px-3\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\RHBcanva\\\\image-ai-master\\\\src\\\\app\\\\(dashboard)\\\\sidebar-routes.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\RHBcanva\\\\image-ai-master\\\\src\\\\app\\\\(dashboard)\\\\sidebar-routes.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SidebarRoutes, \"9ue21mRrsvUMgMFEROLdnnJh1t4=\", false, function() {\n    return [\n        _features_subscriptions_api_use_checkout__WEBPACK_IMPORTED_MODULE_3__.useCheckout,\n        _features_subscriptions_api_use_billing__WEBPACK_IMPORTED_MODULE_4__.useBilling,\n        _features_subscriptions_hooks_use_paywall__WEBPACK_IMPORTED_MODULE_2__.usePaywall,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname\n    ];\n});\n_c = SidebarRoutes;\nvar _c;\n$RefreshReg$(_c, \"SidebarRoutes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGRhc2hib2FyZCkvc2lkZWJhci1yb3V0ZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBT3NCO0FBQ3dCO0FBRTBCO0FBQ0E7QUFDRjtBQUdoQjtBQUVUO0FBRXRDLE1BQU1PLGdCQUFnQjs7SUFDM0IsTUFBTUMsV0FBV0wscUZBQVdBO0lBQzVCLE1BQU1NLGtCQUFrQkwsbUZBQVVBO0lBQ2xDLE1BQU0sRUFBRU0sV0FBVyxFQUFFQyxTQUFTLEVBQUVDLGNBQWMsRUFBRSxHQUFHVixxRkFBVUE7SUFFN0QsTUFBTVcsV0FBV1osNERBQVdBO0lBRTVCLE1BQU1hLFVBQVU7UUFDZCxJQUFJSixhQUFhO1lBQ2ZFO1lBQ0E7UUFDRjtRQUVBSCxnQkFBZ0JNLE1BQU07SUFDeEI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7WUFDWlAsZUFBZSxDQUFDQywyQkFDZjswQkFDRSw0RUFBQ0s7b0JBQUlDLFdBQVU7Ozs7Ozs7MEJBaUJuQiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQ1osNEVBQUNYLHNEQUFXQTtvQkFDVmEsTUFBSztvQkFDTEMsTUFBTXBCLGdGQUFJQTtvQkFDVnFCLE9BQU07b0JBQ05DLFVBQVVULGFBQWE7Ozs7Ozs7Ozs7OzBCQUczQiw4REFBQ0c7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNaLCtEQUFTQTs7Ozs7Ozs7OzswQkFFWiw4REFBQ2E7Z0JBQUdELFdBQVU7Ozs7Ozs7Ozs7OztBQWVwQixFQUFFO0dBL0RXVjs7UUFDTUosaUZBQVdBO1FBQ0pDLCtFQUFVQTtRQUNpQkYsaUZBQVVBO1FBRTVDRCx3REFBV0E7OztLQUxqQk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC8oZGFzaGJvYXJkKS9zaWRlYmFyLXJvdXRlcy50c3g/ZWQ2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgXG4gIENyZWRpdENhcmQsIFxuICBDcm93biwgXG4gIEhvbWUsIFxuICBNZXNzYWdlQ2lyY2xlUXVlc3Rpb25cbn0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmltcG9ydCB7IHVzZVBheXdhbGwgfSBmcm9tIFwiQC9mZWF0dXJlcy9zdWJzY3JpcHRpb25zL2hvb2tzL3VzZS1wYXl3YWxsXCI7XG5pbXBvcnQgeyB1c2VDaGVja291dCB9IGZyb20gXCJAL2ZlYXR1cmVzL3N1YnNjcmlwdGlvbnMvYXBpL3VzZS1jaGVja291dFwiO1xuaW1wb3J0IHsgdXNlQmlsbGluZyB9IGZyb20gXCJAL2ZlYXR1cmVzL3N1YnNjcmlwdGlvbnMvYXBpL3VzZS1iaWxsaW5nXCI7XG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBTZXBhcmF0b3IgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3NlcGFyYXRvclwiO1xuXG5pbXBvcnQgeyBTaWRlYmFySXRlbSB9IGZyb20gXCIuL3NpZGViYXItaXRlbVwiO1xuXG5leHBvcnQgY29uc3QgU2lkZWJhclJvdXRlcyA9ICgpID0+IHtcbiAgY29uc3QgbXV0YXRpb24gPSB1c2VDaGVja291dCgpO1xuICBjb25zdCBiaWxsaW5nTXV0YXRpb24gPSB1c2VCaWxsaW5nKCk7XG4gIGNvbnN0IHsgc2hvdWxkQmxvY2ssIGlzTG9hZGluZywgdHJpZ2dlclBheXdhbGwgfSA9IHVzZVBheXdhbGwoKTtcblxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG5cbiAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICBpZiAoc2hvdWxkQmxvY2spIHtcbiAgICAgIHRyaWdnZXJQYXl3YWxsKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYmlsbGluZ011dGF0aW9uLm11dGF0ZSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC15LTQgZmxleC0xXCI+XG4gICAgICB7c2hvdWxkQmxvY2sgJiYgIWlzTG9hZGluZyAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0zXCI+XG4gICAgICAgICAgICB7LyogPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtdXRhdGlvbi5tdXRhdGUoKX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e211dGF0aW9uLmlzUGVuZGluZ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQteGwgYm9yZGVyLW5vbmUgaG92ZXI6Ymctd2hpdGUgaG92ZXI6b3BhY2l0eS03NSB0cmFuc2l0aW9uXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q3Jvd24gY2xhc3NOYW1lPVwibXItMiBzaXplLTQgZmlsbC15ZWxsb3ctNTAwIHRleHQteWVsbG93LTUwMFwiIC8+XG4gICAgICAgICAgICAgIFVwZ3JhZGUgdG8gSW1hZ2UgQUkgUHJvXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTNcIj5cbiAgICAgICAgICAgIDxTZXBhcmF0b3IgLz4gKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC15LTEgcHgtM1wiPlxuICAgICAgICA8U2lkZWJhckl0ZW1cbiAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgaWNvbj17SG9tZX1cbiAgICAgICAgICBsYWJlbD1cIkhvbWVcIlxuICAgICAgICAgIGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gXCIvXCJ9XG4gICAgICAgIC8+XG4gICAgICA8L3VsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0zXCI+XG4gICAgICAgIDxTZXBhcmF0b3IgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLXktMSBweC0zXCI+XG4gICAgICAgIHsvKiA8U2lkZWJhckl0ZW1cbiAgICAgICAgICBocmVmPXtwYXRobmFtZX1cbiAgICAgICAgICBpY29uPXtDcmVkaXRDYXJkfVxuICAgICAgICAgIGxhYmVsPVwiQmlsbGluZ1wiXG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgLz5cbiAgICAgICAgPFNpZGViYXJJdGVtXG4gICAgICAgICAgaHJlZj1cIm1haWx0bzpzdXBwb3J0QGNvZGV3aXRoYW50b25pby5jb21cIlxuICAgICAgICAgIGljb249e01lc3NhZ2VDaXJjbGVRdWVzdGlvbn1cbiAgICAgICAgICBsYWJlbD1cIkdldCBIZWxwXCJcbiAgICAgICAgLz4gKi99XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJIb21lIiwidXNlUGF0aG5hbWUiLCJ1c2VQYXl3YWxsIiwidXNlQ2hlY2tvdXQiLCJ1c2VCaWxsaW5nIiwiU2VwYXJhdG9yIiwiU2lkZWJhckl0ZW0iLCJTaWRlYmFyUm91dGVzIiwibXV0YXRpb24iLCJiaWxsaW5nTXV0YXRpb24iLCJzaG91bGRCbG9jayIsImlzTG9hZGluZyIsInRyaWdnZXJQYXl3YWxsIiwicGF0aG5hbWUiLCJvbkNsaWNrIiwibXV0YXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwidWwiLCJocmVmIiwiaWNvbiIsImxhYmVsIiwiaXNBY3RpdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(dashboard)/sidebar-routes.tsx\n"));

/***/ })

});