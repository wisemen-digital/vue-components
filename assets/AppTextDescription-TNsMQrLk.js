import { au as defineComponent, bj as useSlots, aw as openBlock, aG as createElementBlock, az as createVNode, ay as withCtx, aF as toDisplayString, aE as createTextVNode, aH as renderSlot, ax as createBlock, aI as createCommentVNode } from "./vendor-8jU5NZMr.js";
import { A as AppText } from "./AppText-E-t-VtMs.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppTextDescription",
  props: {
    text: { type: String, required: false },
    description: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const slots = useSlots();
    const __returned__ = { slots, AppText };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "text-left" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode($setup["AppText"], { variant: "subtext" }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(
            toDisplayString($props.text),
            1
            /* TEXT */
          )
        ])
      ]),
      _: 3
      /* FORWARDED */
    }),
    $props.description || $setup.slots.default ? (openBlock(), createBlock($setup["AppText"], {
      key: 0,
      variant: "caption",
      class: "text-muted-foreground"
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "description", {}, () => [
          createTextVNode(
            toDisplayString($props.description),
            1
            /* TEXT */
          )
        ])
      ]),
      _: 3
      /* FORWARDED */
    })) : createCommentVNode("v-if", true)
  ]);
}
_sfc_main.__file = "src/components/text/AppTextDescription.vue";
const AppTextDescription = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/text/AppTextDescription.vue"]]);
export {
  AppTextDescription as A
};
