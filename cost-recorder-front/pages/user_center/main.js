require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(49);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_36043e66_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(52);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(50)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_36043e66_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\user_center\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-36043e66", Component.options)
  } else {
    hotAPI.reload("data-v-36043e66", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 50:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      currentUser: {}
    };
  },
  mounted: function mounted() {
    if (wx.getStorageSync('userinfo')) {
      console.log('进入用户中心');
      this.currentUser = wx.getStorageSync('userinfo');
    } else {
      console.log('异常登录进入');
    }
  },
  onShow: function onShow() {
    this.$root.$mp.page.getTabBar().setData({
      selected: 3
    });
  },

  methods: {
    logout: function logout() {
      wx.removeStorage({
        key: 'userinfo',
        success: function success(res) {
          wx.showToast({
            title: '退出登录',
            icon: 'success',
            duration: 1000
          });
          wx.reLaunch({
            url: '/pages/index/main?logout=true'
          });
        }
      });
    },
    show: function show() {
      wx.showModal({
        content: '开发组\n汪博文、叶斯哈提、尹梓航、沈嘉絮',
        showCancel: false
      });
    },
    showNotice: function showNotice() {
      wx.showModal({
        content: '联系方式（请发邮件）\n汪博文-1254783510@qq.com',
        showCancel: false
      });
    }
  }
});

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "avatar-container"
  }, [_c('div', {
    staticClass: "col"
  }, [_c('img', {
    attrs: {
      "src": _vm.currentUser.avatarUrl,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.currentUser.nickName))])])]), _vm._v(" "), _c('div', {
    staticClass: "user-options",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.show
    }
  }, [_c('div', {
    staticClass: "left-msg"
  }, [_vm._v("联系我们")]), _vm._v(" "), _c('div', {
    staticClass: "right-msg"
  }, [_vm._v(" > ")])]), _vm._v(" "), _c('div', {
    staticClass: "user-options",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.showNotice
    }
  }, [_c('div', {
    staticClass: "left-msg"
  }, [_vm._v("使用说明")]), _vm._v(" "), _c('div', {
    staticClass: "right-msg"
  }, [_vm._v(" > ")])]), _vm._v(" "), _c('button', {
    staticClass: "logout",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.logout
    }
  }, [_vm._v("退出")]), _vm._v(" "), _c('div', {
    staticClass: "news-container"
  }, [_c('swiper', {
    attrs: {
      "indicator-dots": "true",
      "indicator-color": "#ffc83c",
      "autoplay": "true",
      "interval": "3000",
      "circular": "true"
    }
  }, [_c('swiper-item', {
    attrs: {
      "mpcomid": '0'
    }
  }, [_c('image', {
    staticClass: "news-logo",
    attrs: {
      "src": "../../static/images/微信图片_20220530222442.png",
      "mode": "widthFix"
    }
  })]), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('image', {
    staticClass: "news-logo",
    attrs: {
      "src": "../../static/images/微信图片_20220530222536.png",
      "mode": "widthFix"
    }
  })]), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_c('image', {
    staticClass: "news-logo",
    attrs: {
      "src": "../../static/images/微信图片_20220530222548.png",
      "mode": "widthFix"
    }
  })])], 1)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-36043e66", esExports)
  }
}

/***/ })

},[48]);