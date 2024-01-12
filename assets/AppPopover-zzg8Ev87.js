import { au as defineComponent, aK as mergeModels, aL as useModel, aZ as $e, bM as ye, bN as Ge, bO as je, aw as openBlock, ax as createBlock, ay as withCtx, aR as mergeProps, aH as renderSlot, az as createVNode, bP as vShow, aW as withDirectives } from "./vendor-q8C-Jnqr.js";
import { p as popoverTransition } from "./popover.transition-z0jVcmyM.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
const SHIFT_VALUE = 8;
const OFFSET_VALUE = 4;
const FLIP_VALUE = 8;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppPopover",
  props: /* @__PURE__ */ mergeModels({
    isManual: { type: Boolean, required: false, default: false },
    isDiv: { type: Boolean, required: false, default: false },
    placement: { type: null, required: false, default: "bottom" },
    hasAdaptiveWidth: { type: Boolean, required: false, default: false },
    hasNoOffset: { type: Boolean, required: false, default: false },
    hasNoShift: { type: Boolean, required: false, default: false },
    hasNoFlip: { type: Boolean, required: false, default: false },
    hasAutoPlacement: { type: Boolean, required: false, default: false }
  }, {
    "modelValue": { type: Boolean, ...{
      default: false
    } },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const isOpen = useModel(__props, "modelValue");
    function closeManual() {
      isOpen.value = false;
    }
    const __returned__ = { SHIFT_VALUE, OFFSET_VALUE, FLIP_VALUE, isOpen, closeManual, get Float() {
      return $e;
    }, get Popover() {
      return ye;
    }, get PopoverButton() {
      return Ge;
    }, get PopoverPanel() {
      return je;
    }, get popoverTransition() {
      return popoverTransition;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Popover"], null, {
    default: withCtx(() => [
      createVNode($setup["Float"], mergeProps({
        placement: $props.placement,
        "adaptive-width": $props.hasAdaptiveWidth,
        "auto-placement": $props.hasAutoPlacement,
        flip: $props.hasNoFlip ? void 0 : $setup.FLIP_VALUE,
        shift: $props.hasNoShift ? void 0 : $setup.SHIFT_VALUE,
        offset: $props.hasNoOffset ? void 0 : $setup.OFFSET_VALUE,
        portal: ""
      }, $setup.popoverTransition, { "tailwindcss-origin-class": "" }), {
        default: withCtx(() => [
          createVNode($setup["PopoverButton"], {
            as: $props.isDiv ? "div" : "button",
            class: "max-w-max rounded-button"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "element")
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["as"]),
          !$props.isManual ? (openBlock(), createBlock($setup["PopoverPanel"], {
            key: 0,
            focus: true,
            class: "rounded-popover border border-border bg-popover px-4 py-3 text-popover-foreground shadow-popover-shadow"
          }, {
            default: withCtx(({ close }) => [
              renderSlot(_ctx.$slots, "panel", { close })
            ]),
            _: 3
            /* FORWARDED */
          })) : withDirectives((openBlock(), createBlock(
            $setup["PopoverPanel"],
            {
              key: 1,
              focus: true,
              static: "",
              class: "rounded-popover border border-border bg-popover px-4 py-3 text-popover-foreground shadow-popover-shadow"
            },
            {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "panel", { close: $setup.closeManual })
              ]),
              _: 3
              /* FORWARDED */
            },
            512
            /* NEED_PATCH */
          )), [
            [vShow, $setup.isOpen]
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["placement", "adaptive-width", "auto-placement", "flip", "shift", "offset"])
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main.__file = "src/components/popover/AppPopover.vue";
const AppPopover = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/popover/AppPopover.vue"]]);
export {
  AppPopover as A
};
