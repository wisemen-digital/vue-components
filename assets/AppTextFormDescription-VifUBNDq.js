import { au as defineComponent, aw as openBlock, ax as createBlock, ay as withCtx, aH as renderSlot } from "./vendor-8jU5NZMr.js";
import { A as AppText } from "./AppText-E-t-VtMs.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppTextFormDescription",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { AppText };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["AppText"], {
    variant: "subtext",
    class: "text-muted-foreground"
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main.__file = "src/components/text/AppTextFormDescription.vue";
const AppTextFormDescription = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/text/AppTextFormDescription.vue"]]);
export {
  AppTextFormDescription as A
};
