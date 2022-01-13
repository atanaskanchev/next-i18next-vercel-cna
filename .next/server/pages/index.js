"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next-i18next/serverSideTranslations"
const serverSideTranslations_namespaceObject = require("next-i18next/serverSideTranslations");
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(377);
;// CONCATENATED MODULE: ./components/hello.jsx


const Hello = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)('common');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Welcome to Next.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: t('app_name')
            })
        ]
    }));
};
/* harmony default export */ const hello = (Hello);

;// CONCATENATED MODULE: ./pages/index.js



/* harmony default export */ const pages = (()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Welcome to Next.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(hello, {})
        ]
    }));
async function getServerSideProps({ locale  }) {
    return {
        props: {
            ...await (0,serverSideTranslations_namespaceObject.serverSideTranslations)(locale, [
                'common'
            ])
        }
    };
}


/***/ }),

/***/ 377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(668));
module.exports = __webpack_exports__;

})();