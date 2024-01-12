import { au as defineComponent, aV as computed, aw as openBlock, aG as createElementBlock, aF as toDisplayString, aJ as normalizeClass, aI as createCommentVNode } from "./vendor-8jU5NZMr.js";
import { c as cva } from "./cva-0tbEyAn9.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
function generateUuid() {
  let d = (/* @__PURE__ */ new Date()).getTime();
  let d2 = typeof performance !== "undefined" && performance.now && performance.now() * 1e3 || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : r & 3 | 8).toString(16);
  });
}
const formLabel = cva({
  base: "text-subtext text-muted-foreground",
  variants: {
    isInvalid: {
      true: "text-destructive"
    },
    isDisabled: {
      true: "opacity-50"
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppFormLabel",
  props: {
    label: { type: String, required: true },
    id: { type: String, required: true },
    isDisabled: { type: Boolean, required: true },
    isInvalid: { type: Boolean, required: false, default: false },
    isRequired: { type: Boolean, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const formLabelClasses = computed(
      () => formLabel({
        isInvalid: __props.isInvalid,
        isDisabled: __props.isDisabled
      })
    );
    const computedLabel = computed(() => {
      if (__props.label == null)
        return null;
      return __props.isRequired ? `${__props.label} *` : __props.label;
    });
    const __returned__ = { formLabelClasses, computedLabel };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["for"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.label !== null ? (openBlock(), createElementBlock("label", {
    key: 0,
    class: normalizeClass($setup.formLabelClasses),
    for: $props.id
  }, toDisplayString($setup.computedLabel), 11, _hoisted_1)) : createCommentVNode("v-if", true);
}
_sfc_main.__file = "src/components/form-label/AppFormLabel.vue";
const AppFormLabel = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/form-label/AppFormLabel.vue"]]);
export {
  AppFormLabel as A,
  generateUuid as g
};
