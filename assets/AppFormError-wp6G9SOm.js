import { au as defineComponent, aw as openBlock, ax as createBlock, ay as withCtx, az as createVNode, aF as toDisplayString, aE as createTextVNode, aI as createCommentVNode, aB as createBaseVNode, aG as createElementBlock } from "./vendor-8jU5NZMr.js";
import { A as AppIcon } from "./AppIcon-RPJ4Te2g.js";
import { A as AppText } from "./AppText-E-t-VtMs.js";
import { A as AppHeightTransition } from "./AppHeightTransition-rfYEML_g.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppFormError",
  props: {
    errors: { type: null, required: false },
    isTouched: { type: Boolean, required: false, default: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { AppIcon, AppText, AppHeightTransition };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "flex items-center gap-x-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["AppHeightTransition"], { duration: 0.2 }, {
    default: withCtx(() => [
      $props.errors != null && $props.isTouched ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode($setup["AppIcon"], {
            class: "w-3.5 shrink-0 text-destructive",
            icon: "warning"
          }),
          $props.errors != null ? (openBlock(), createBlock($setup["AppText"], {
            key: 0,
            class: "text-destructive",
            variant: "subtext"
          }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString($props.errors._errors[0]),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true)
        ])
      ])) : createCommentVNode("v-if", true)
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/form-error/AppFormError.vue";
const AppFormError = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/form-error/AppFormError.vue"]]);
export {
  AppFormError as A
};
