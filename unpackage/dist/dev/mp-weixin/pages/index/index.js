"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
  },
  methods: {
    goGrower() {
      common_vendor.index.navigateTo({ url: "/pages/grower/grower" });
    },
    goSeller() {
      common_vendor.index.navigateTo({ url: "/pages/seller/seller" });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_assets._imports_0,
    c: common_vendor.o((...args) => $options.goGrower && $options.goGrower(...args)),
    d: common_assets._imports_1,
    e: common_vendor.o((...args) => $options.goSeller && $options.goSeller(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
