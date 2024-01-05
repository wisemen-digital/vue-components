import { au as defineComponent, aU as computed, aw as openBlock, aG as createElementBlock, aF as toDisplayString, aJ as normalizeClass, aI as createCommentVNode, ax as createBlock, ay as withCtx, az as createVNode, aE as createTextVNode, aB as createBaseVNode } from "./vendor-1ZSCwqXN.js";
import { c as cva } from "./cva-06WGKu1x.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
import { A as AppIcon } from "./AppIcon-RVR3zNXg.js";
import { A as AppText } from "./AppText-3Z5ilxnp.js";
import { A as AppHeightTransition } from "./AppHeightTransition-MQ6ZUvP5.js";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
const _hoisted_1$1 = ["for"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.label !== null ? (openBlock(), createElementBlock("label", {
    key: 0,
    class: normalizeClass($setup.formLabelClasses),
    for: $props.id
  }, toDisplayString($setup.computedLabel), 11, _hoisted_1$1)) : createCommentVNode("v-if", true);
}
_sfc_main$1.__file = "src/components/form-label/AppFormLabel.vue";
const AppFormLabel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/components/form-label/AppFormLabel.vue"]]);
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
  AppFormLabel as A,
  AppFormError as a,
  generateUuid as g
};
