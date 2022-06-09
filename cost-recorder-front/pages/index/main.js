require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var server = 'http://localhost:8510';

var config = {
  server: server,
  loginUrl: 'https://cost-recorder-back-1930956-1311933639.ap-shanghai.run.tcloudbase.com/api/login',
  accountUrl: 'https://cost-recorder-back-1930956-1311933639.ap-shanghai.run.tcloudbase.com/api/account',
  deleteUrl: 'https://cost-recorder-back-1930956-1311933639.ap-shanghai.run.tcloudbase.com/api/account/delete'
};

/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(17);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7af411d6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(32);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(18)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7af411d6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7af411d6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7af411d6", Component.options)
  } else {
    hotAPI.reload("data-v-7af411d6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_index_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_index_accounts__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(2);
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
  components: {
    login: __WEBPACK_IMPORTED_MODULE_0__components_index_login__["a" /* default */],
    accounts: __WEBPACK_IMPORTED_MODULE_1__components_index_accounts__["a" /* default */]
  },
  data: function data() {
    return {
      notLogin: true,
      selectType: '',
      showCalculator: false,
      showSelector: false,
      record_item: {
        id: 0,
        record_type: 0,
        category: '',
        note: '',
        amount: 0,
        record_date: '',
        userid: ''
      },
      currentUser: {},
      select: 0
    };
  },
  onLoad: function onLoad(option) {
    if (option.logout === 'true') {
      this.notLogin = true;
    }
  },
  onShow: function onShow() {
    this.$root.$mp.page.getTabBar().setData({
      select: 0
    });
  },
  mounted: function mounted() {
    if (wx.getStorageSync('userinfo')) {
      this.notLogin = false;
      this.$root.$mp.page.getTabBar().setData({
        show_tabbar: true
      });
      this.record_item.userid = wx.getStorageSync('userinfo').openid;
      this.getRecord();
    }
    else {
        this.$root.$mp.page.getTabBar().setData({
            show_tabbar: false
        })
    } 
  },

  methods: {
    loginSuccess: function loginSuccess() {
      this.notLogin = false;
      this.$root.$mp.page.getTabBar().setData({
        show_tabbar: true
      });
      wx.showToast({
        title: '登陆成功',
        icon: 'success',
        duration: 1000
      });
      this.currentUser = wx.getStorageSync('userinfo');
      console.log(wx.getStorageSync('userinfo').openid);
      this.record_item.userid = wx.getStorageSync('userinfo').openid;
      this.getRecord();
    },
    getRecord: function getRecord() {
      var _this = this;
      wx.request({
        url: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].accountUrl + '/all',
        data: _this.record_item,
        method: 'GET',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function success(res) {
          console.log('get record success');
          console.log(res.data);
          _this.$refs.accounts.items = res.data.reverse();
          console.log(_this.$refs.accounts.items);
          _this.$refs.accounts.processItemInfo();
        }
      });
    },
    callDateSelector: function callDateSelector() {
      if (this.showSelector) {
        // 关闭唤醒
        this.showSelector = false;
        this.$refs.selector.close();
      } else {
        // 唤醒
        this.showSelector = true;
        this.showCalculator = false;
        this.selectType = 'date';
        this.$refs.selector.dateMode(this.accountItem.date.split('/'));
        this.$refs.selector.open();
      }
    }
  }

});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_login_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7bac8952_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_login_vue__ = __webpack_require__(23);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(21)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7bac8952_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_login_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\index\\login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7bac8952", Component.options)
  } else {
    hotAPI.reload("data-v-7bac8952", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(2);
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
  methods: {
    getUserProfile: function getUserProfile(e) {
      var _this = this;
      wx.getUserProfile({
        desc: '获取头像和昵称',
        success: function success(res) {
          console.log(res);
          var currentUser = res.userInfo;
          var loginUrl = __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].loginUrl;
          wx.login({
            success: function success(res) {
              if (res.code) {
                wx.request({
                  url: loginUrl,
                  data: {
                    code: res.code
                  },
                  method: 'GET',
                  success: function success(loginRes) {
                    currentUser['openid'] = JSON.parse(loginRes.data.msg)['openid'];
                    wx.setStorage({
                      key: 'userinfo',
                      data: currentUser
                    });
                    _this.$emit('loginsuccess');
                  }
                });
              }
            }
          });
        },
        fail: function fail(res) {
          console.log(res);
        }
      });
    }
  }
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login-container"
  }, [_c('div', [_c('div', {
    staticClass: "login-welcome"
  }, [_vm._v("热爱生活，不断向上")]), _vm._v(" "), _c('button', {
    staticClass: "login-btn",
    attrs: {
      "open-type": "getUserProfile",
      "eventid": '0'
    },
    on: {
      "click": _vm.getUserProfile
    }
  }, [_vm._v("授权登录")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7bac8952", esExports)
  }
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_accounts_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5c943de8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_accounts_vue__ = __webpack_require__(31);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(25)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5c943de8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_accounts_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5c943de8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_accounts_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\index\\accounts.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] accounts.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c943de8", Component.options)
  } else {
    hotAPI.reload("data-v-5c943de8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_scrollSelector__ = __webpack_require__(27);
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
      currentUser: {},
      items: [],
      processedItems: [],
      showSelector: false
    };
  },

  components: {
    scrollSelector: __WEBPACK_IMPORTED_MODULE_1__add_scrollSelector__["a" /* default */]
  },
  mounted: function mounted() {
    this.processItemInfo();
  },
  onShow: function onShow() {},

  methods: {
    callDateSelector: function callDateSelector() {
      if (this.showSelector) {
        // 关闭唤醒
        this.showSelector = false;
        this.$refs.selector.close();
      } else {
        // 唤醒
        this.showSelector = true;
        this.selectType = 'date';
        this.$refs.selector.dateMode(this.accountItem.date.split('/'));
        this.$refs.selector.open();
      }
    },
    getSelectRes: function getSelectRes(res, type) {
      if (this.selectType === 'date' && type === 'date') {
        this.accountItem.date = 2010 + res[0] + '/' + (1 + res[1]) + '/' + (1 + res[2]);
      }
    },
    touchStart: function touchStart(e) {
      this.touchStartX = e.pageX;
    },
    touchEnd: function touchEnd(e) {
      if (Math.abs(e.mp.changedTouches[0].pageX - this.touchStartX) > 50) {
        this.accountItem.type = 1 - this.accountItem.type;
      }
    },
    deactivateTools: function deactivateTools() {
      if (this.showSelector) {
        this.showSelector = false;
        this.$refs.selector.close();
      }
    },
    processItemInfo: function processItemInfo() {
      this.processedItems = [];
      for (var i = 0; i < this.items.length; i++) {
        var newItem = {};
        for (var attr in this.items[i]) {
          if (attr === 'category') {
            newItem[attr] = this.items[i].category;
          } else {
            newItem[attr] = this.items[i][attr];
          }
        }
        newItem.opacity = 1;
        this.processedItems.push(newItem);
      }
    },
    exitStyle: function exitStyle(position) {
      var index = Math.floor(position / 400);
      var opacity = position / 400 - index;
      for (var i = 0; i < index + 2; i++) {
        if (i < index + 1) {
          this.processedItems[i].opacity = 1 - opacity;
        } else {
          this.processedItems[i].opacity = 1;
        }
      }
    },
    scrolltolower: function scrolltolower() {},
    scroll: function scroll(e) {
      this.exitStyle(e.target.scrollTop);
    },
    selectDelete: function selectDelete(id) {
      console.log(id);
      wx.showModal({
        content: '是否确认删除此账单',
        success: function success(res) {
          if (res.confirm) {
            console.log('用户点击确定');
            // 根据账单id删除数据库中该条账单,后端需要定义一下删除接口
            wx.request({
              url: __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].deleteUrl, // 该接口需要定义或者调用其他接口
              method: 'POST',
              data: {
                'id': id
              },
              header: {
                'content-type': 'application/x-www-form-urlencoded' },
              success: function success(res) {
                console.log(res.data);
                // 删除后通过wx.reLaunch()重新跳转到首页，并查看账单
                wx.reLaunch({
                  url: '../../pages/index/main',
                  success: function success(res) {
                    console.log(res);
                  }
                });
              },

              fail: function fail() {
                wx.showToast({
                  icon: 'none',
                  mask: true,
                  title: '接口调用失败，请稍后再试。'
                });
              }
            });
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
    },
    changeDate: function changeDate(item) {
      var newItem = item;
      wx.showModal({
        title: '更改记账日期',
        content: item.date,
        editable: true,
        placeholderText: '输入日期',
        success: function success(res) {
          console.log(res.content);
          var content = res.content;
          console.log(res);
          console.log(item.id);
          if (res.confirm) {
            wx.request({
              url: __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].deleteUrl, // 该接口需要定义或者调用其他接口
              method: 'POST',
              data: {
                'id': item.id
              },
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              success: function success(res) {
                console.log(res.data);
              },

              fail: function fail() {
                wx.showToast({
                  icon: 'none',
                  mask: true,
                  title: '接口调用失败，请稍后再试。'
                });
              }
            });
            wx.request({
              url: __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].accountUrl + '/add',
              data: {
                'type': newItem.type,
                'category': newItem.category,
                'note': newItem.note,
                'amount': newItem.amount,
                'date': content,
                'userid': newItem.userid
              },
              method: 'POST',
              success: function success(res) {
                // success
                console.log(res.data.msg);
                if (res.data.msg === 'Success!') {
                  wx.reLaunch({
                    url: '../../pages/index/main',
                    success: function success(res) {
                      console.log(res);
                    }
                  });
                }
              },
              fail: function fail(res) {
                // fail
                console.log('toRed fail:');
              }
            });
          }
        }
      });
    },
    changeDesc: function changeDesc(item) {
      var newItem = item;
      wx.showModal({
        title: '更改详细描述',
        editable: true,
        content: item.note,
        placeholderText: '输入描述',
        success: function success(res) {
          console.log(res.content);
          var content = res.content;
          console.log(res);
          console.log(item.id);
          if (res.confirm) {
            wx.request({
              url: __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].deleteUrl, // 该接口需要定义或者调用其他接口
              method: 'POST',
              data: {
                'id': item.id
              },
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              success: function success(res) {
                console.log(res.data);
              },

              fail: function fail() {
                wx.showToast({
                  icon: 'none',
                  mask: true,
                  title: '接口调用失败，请稍后再试。'
                });
              }
            });
            wx.request({
              url: __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].accountUrl + '/add',
              data: {
                'type': newItem.type,
                'category': newItem.category,
                'note': content,
                'amount': newItem.amount,
                'date': newItem.date,
                'userid': newItem.userid
              },
              method: 'POST',
              success: function success(res) {
                // success
                console.log(res.data.msg);
                if (res.data.msg === 'Success!') {
                  wx.reLaunch({
                    url: '../../pages/index/main',
                    success: function success(res) {
                      console.log(res);
                    }
                  });
                }
              },
              fail: function fail(res) {
                // fail
                console.log('toRed fail:');
              }
            });
          }
        }
      });
    },
    changeAmount: function changeAmount(item) {
      var newItem = item;
      wx.showModal({
        title: '更改账单金额',
        content: item.amount + '',
        editable: true,
        placeholderText: '输入金额',
        success: function success(res) {
          console.log(res.content);
          var content = Number(res.content);
          console.log(res);
          console.log(item.id);
          if (res.confirm) {
            wx.request({
              url: __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].deleteUrl, // 该接口需要定义或者调用其他接口
              method: 'POST',
              data: {
                'id': item.id
              },
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              success: function success(res) {
                console.log(res.data);
              },

              fail: function fail() {
                wx.showToast({
                  icon: 'none',
                  mask: true,
                  title: '接口调用失败，请稍后再试。'
                });
              }
            });
            wx.request({
              url: __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].accountUrl + '/add',
              data: {
                'type': newItem.type,
                'category': newItem.category,
                'note': newItem.note,
                'amount': content,
                'date': newItem.date,
                'userid': newItem.userid
              },
              method: 'POST',
              success: function success(res) {
                // success
                console.log(res.data.msg);
                if (res.data.msg === 'Success!') {
                  wx.reLaunch({
                    url: '../../pages/index/main',
                    success: function success(res) {
                      console.log(res);
                    }
                  });
                }
              },
              fail: function fail(res) {
                // fail
                console.log('toRed fail:');
              }
            });
          }
        }
      });
    }
  }
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_scrollSelector_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3775305f_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_scrollSelector_vue__ = __webpack_require__(30);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(28)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_scrollSelector_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3775305f_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_scrollSelector_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\add\\scrollSelector.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] scrollSelector.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3775305f", Component.options)
  } else {
    hotAPI.reload("data-v-3775305f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      value: [0, 0],
      colCount: 2,
      cols: [],
      type: 'custom',
      closeFlag: true // true:不接受change事件
    };
  },


  methods: {
    open: function open() {
      this.closeFlag = false;
      this.$emit('res', this.value, this.type);
    },
    close: function close() {
      this.closeFlag = true;
    },
    dateMode: function dateMode(defaultDate) {
      this.type = 'date';
      var yearLimit = defaultDate === null ? 2050 : Number(defaultDate[0]);
      var monthLimit = defaultDate === null ? 12 : Number(defaultDate[1]);
      var dayLimit = defaultDate === null ? 31 : Number(defaultDate[2]);

      var years = [];
      var yearNum = [];
      for (var i = 2010; i < yearLimit + 1; i++) {
        yearNum.push(i);
        years.push({ name: i });
      }

      var months = [];
      var monthNum = [];
      for (var _i = 0; _i < monthLimit; _i++) {
        monthNum.push(_i + 1);
        months.push({ name: _i + 1 });
      }

      var days = [];
      var dayNum = [];
      for (var _i2 = 0; _i2 < dayLimit; _i2++) {
        dayNum.push(_i2 + 1);
        days.push({ name: _i2 + 1 });
      }
      this.colCount = 3;
      this.cols = [years, months, days];

      if (defaultDate === null) {
        var today = new Date();
        this.value = [yearNum.indexOf(today.getFullYear()), monthNum.indexOf(today.getMonth() + 1), dayNum.indexOf(today.getDate())];
      } else {
        this.value = [yearNum.indexOf(parseInt(defaultDate[0])), monthNum.indexOf(parseInt(defaultDate[1])), dayNum.indexOf(parseInt(defaultDate[2]))];
      }
    },
    dateSelect: function dateSelect(dateIndex) {
      var today = new Date();
      var bigMonth = [1, 3, 5, 7, 8, 10, 12];
      var smallMonth = [4, 6, 9, 11];

      // 根据是否为当前年份，对可选的月份进行限制，不允许选择当前年当前月份之后的日期
      var months = [];
      for (var i = 0; i < 12; i++) {
        months.push({ name: i + 1 });
      }
      if (dateIndex[0] === this.cols[0].length - 1) {
        var currentMonth = today.getMonth() + 1;
        this.cols.splice(1, 1, months.slice(0, currentMonth));
      } else {
        this.cols.splice(1, 1, months.slice(0, 12));
      }

      var days = [];
      for (var _i3 = 0; _i3 < 31; _i3++) {
        days.push({ name: _i3 + 1 });
      }

      // 数据的处理，防止索引超出可选长度
      for (var _i4 = 0; _i4 < this.cols.length; _i4++) {
        if (dateIndex[_i4] > this.cols[_i4].length - 1) {
          dateIndex[_i4] = this.cols[_i4].length - 1;
        }
      }
      // array.splice(indexOfItem, 1, newValue)
      // 当前月为小月， 日选择列切成30
      if (smallMonth.indexOf(this.cols[1][dateIndex[1]].name) !== -1) {
        this.cols.splice(2, 1, days.slice(0, 30));
      } else if (bigMonth.indexOf(this.cols[1][dateIndex[1]].name) !== -1) {
        this.cols.splice(2, 1, days);
      } else {
        if (this.cols[0][dateIndex[0]].name % 4 === 0) {
          this.cols.splice(2, 1, days.slice(0, 29));
        } else {
          this.cols.splice(2, 1, days.slice(0, 28));
        }
      }
      // if (dateIndex[1] === this.cols[1].length - 1) { // 当前选择月份为实际当前月份，对日期进行限制
      if (dateIndex[0] === this.cols[0].length - 1 && dateIndex[1] === this.cols[1].length - 1) {
        this.cols.splice(2, 1, days.slice(0, today.getDate()));
      }
    },
    bindChange: function bindChange(e) {
      if (!this.closeFlag) {
        var indexArray = e.target.value;
        // value 的 赋值逻辑
        for (var col = 0; col < indexArray.length; col++) {
          if (this.value[col] !== e.target.value[col]) {
            // 当前列产生变化，其他后续列，重置为0索引,value结束
            this.value[col] = indexArray[col];
            for (var i = col + 1; i < indexArray.length; i++) {
              this.value[i] = 0;
            }
            break;
          }
        }

        // value的提交逻辑
        if (this.type === 'date') {
          this.dateSelect(indexArray);
          this.$emit('res', this.value, this.type);
        } else if (this.type === 'custom') {
          this.$emit('res', this.value, this.type);
        }
      }
    }
  }
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('picker-view', {
    staticClass: "picker-view",
    attrs: {
      "value": _vm.value,
      "indicator-style": "height: 50px;",
      "indicator-class": "picker-view-indicator",
      "eventid": '0'
    },
    on: {
      "change": _vm.bindChange
    }
  }, _vm._l((_vm.cols), function(col, colIndex) {
    return _c('picker-view-column', {
      key: colIndex,
      staticClass: "picker-view-col",
      attrs: {
        "mpcomid": '0_' + colIndex
      }
    }, _vm._l((col), function(item, index) {
      return _c('view', {
        key: index
      }, [_vm._v(_vm._s(item.name))])
    }))
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3775305f", esExports)
  }
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.items !== []) ? _c('div', [_c('scroll-view', {
    staticClass: "account-area",
    attrs: {
      "scroll-y": true,
      "eventid": '4'
    },
    on: {
      "scrolltolower": _vm.scrolltolower,
      "scroll": _vm.scroll
    }
  }, [_c('div', {
    staticClass: "item"
  }, [(_vm.items === []) ? _c('div', [_c('div', [_vm._v("目前无记录")])]) : _c('div', _vm._l((_vm.processedItems), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item-details",
      style: ('opacity:' + item.opacity)
    }, [_c('div', {
      staticClass: "item-details-left"
    }, [_c('div', {
      staticClass: "item-details-category"
    }, [_c('span', [_vm._v(_vm._s(item.category))])])]), _vm._v(" "), _c('div', {
      staticClass: "item-details-middle"
    }, [_c('div', {
      staticClass: "details-top"
    }, [_c('div', {
      staticClass: "item-details-date",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.changeDate(item)
        }
      }
    }, [_c('span', [_vm._v(_vm._s(item.date))])])]), _vm._v(" "), _c('div', {
      staticClass: "details-bottom"
    }, [_c('div', {
      staticClass: "item-details-desc",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.changeDesc(item)
        }
      }
    }, [_c('span', [_vm._v(_vm._s(item.note))])])])]), _vm._v(" "), _c('div', {
      staticClass: "item-details-right"
    }, [_c('div', {
      staticClass: "item-details-bottom",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.changeAmount(item)
        }
      }
    }, [_c('span', {
      class: item.type === 0 ? 'out' : 'in'
    }, [_vm._v(_vm._s(item.amount))])]), _vm._v(" "), _c('div', {
      staticClass: "item-details-top",
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "tap": function($event) {
          _vm.selectDelete(item.id)
        }
      }
    }, [_c('span', [_vm._v("x")])])])])
  }))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showSelector),
      expression: "showSelector"
    }],
    staticClass: "cal-root"
  }, [_c('scroll-selector', {
    ref: "selector",
    attrs: {
      "eventid": '5',
      "mpcomid": '0'
    },
    on: {
      "res": _vm.getSelectRes
    }
  })], 1)], 1) : _c('div', [_vm._v("\n  暂无记账记录\n")])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5c943de8", esExports)
  }
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.notLogin) ? _c('div', [_c('login', {
    attrs: {
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "loginsuccess": _vm.loginSuccess
    }
  })], 1) : _c('div', [_c('div', {
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
      "mpcomid": '1'
    }
  }, [_c('image', {
    staticClass: "news-logo",
    attrs: {
      "src": "../../static/images/微信图片_20220530222442.png",
      "mode": "widthFix"
    }
  })]), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_c('image', {
    staticClass: "news-logo",
    attrs: {
      "src": "../../static/images/微信图片_20220530222536.png",
      "mode": "widthFix"
    }
  })]), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('image', {
    staticClass: "news-logo",
    attrs: {
      "src": "../../static/images/微信图片_20220530222548.png",
      "mode": "widthFix"
    }
  })])], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "border-radius": "10px"
    }
  }, [_c('accounts', {
    ref: "accounts",
    attrs: {
      "mpcomid": '4'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "edit-item-cat",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.callDateSelector($event)
      }
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.record_item.date))])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7af411d6", esExports)
  }
}

/***/ })
],[16]);