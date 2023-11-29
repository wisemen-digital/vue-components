import { au as defineComponent, aU as $e, aV as ye, aW as Ge, aX as je, ax as openBlock, ay as createBlock, az as withCtx, aG as mergeProps, aQ as renderSlot, aA as createVNode, av as reactive, aw as resolveComponent, aB as createBaseVNode, aC as normalizeProps, aD as guardReactiveProps, aE as createTextVNode } from "./vendor-1hHDFphO.js";
import { _ as _export_sfc } from "./cva-Sxt47TAL.js";
import { A as AppButton } from "./AppButton-VPAm-nDb.js";
import "./AppIcon-ZgRrgXUw.js";
const popoverTransition = {
  enterFromClass: "opacity-0 shadow-none -translate-y-2",
  enterActiveClass: "ease-native duration-200",
  enterToClass: "opacity-100",
  leaveFromClass: "opacity-100",
  leaveActiveClass: "ease-native duration-200",
  leaveToClass: "opacity-0 shadow-none -translate-y-2",
  enterFrom: "opacity-0 shadow-none -translate-y-2",
  enter: "ease-native duration-200",
  enterTo: "opacity-100",
  leaveFrom: "opacity-100",
  leave: "ease-native duration-200",
  leaveTo: "opacity-0 shadow-none -translate-y-2"
};
const SHIFT_VALUE = 8;
const OFFSET_VALUE = 4;
const FLIP_VALUE = 8;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppPopover",
  props: {
    placement: { type: null, required: false, default: "bottom" },
    hasAdaptiveWidth: { type: Boolean, required: false, default: false },
    hasNoOffset: { type: Boolean, required: false, default: false },
    hasNoShift: { type: Boolean, required: false, default: false },
    hasNoFlip: { type: Boolean, required: false, default: false },
    hasAutoPlacement: { type: Boolean, required: false, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { SHIFT_VALUE, OFFSET_VALUE, FLIP_VALUE, get Float() {
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
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
            as: "div",
            class: "max-w-max"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "activator")
            ]),
            _: 3
            /* FORWARDED */
          }),
          createVNode($setup["PopoverPanel"], { class: "rounded-popover border border-border bg-popover px-4 py-3 text-popover-foreground shadow-popover-shadow" }, {
            default: withCtx(({ close }) => [
              renderSlot(_ctx.$slots, "panel", { close })
            ]),
            _: 3
            /* FORWARDED */
          })
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["placement", "adaptive-width", "auto-placement", "flip", "shift", "offset"])
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$1.__file = "src/components/app/popover/AppPopover.vue";
const AppPopover = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/components/app/popover/AppPopover.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppPopover.story",
  props: {
    placement: { type: null, required: false },
    hasAdaptiveWidth: { type: Boolean, required: false },
    hasNoOffset: { type: Boolean, required: false },
    hasNoShift: { type: Boolean, required: false },
    hasNoFlip: { type: Boolean, required: false },
    hasAutoPlacement: { type: Boolean, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const state = reactive({
      hasAdaptiveWidth: false,
      hasNoOffset: false,
      hasNoShift: false,
      hasAutoPlacement: false,
      hasNoFlip: false,
      placement: "bottom"
    });
    const placementOptions = [
      "bottom",
      "bottom-start",
      "bottom-end",
      "top",
      "top-start",
      "top-end",
      "left",
      "left-start",
      "left-end",
      "right",
      "right-start",
      "right-end"
    ];
    const __returned__ = { state, placementOptions, AppPopover, AppButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "max-w-[60ch]" },
  " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit quo cumque soluta, repudiandae impedit at vitae culpa iste ad placeat quaerat nihil? Velit, eligendi ullam molestiae eum ipsum totam? ",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "App/Popover/AppPopover" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Default",
        "auto-props-disabled": ""
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.hasAdaptiveWidth,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.hasAdaptiveWidth = $event),
            title: "Adaptive width"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.hasAutoPlacement,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.hasAutoPlacement = $event),
            title: "Auto placement"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.hasNoFlip,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.hasNoFlip = $event),
            title: "No flip"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.hasNoShift,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.state.hasNoShift = $event),
            title: "No shift"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.hasNoOffset,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.state.hasNoOffset = $event),
            title: "No offset"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.placement,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.state.placement = $event),
            title: "Placement",
            options: $setup.placementOptions
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", null, [
            createVNode(
              $setup["AppPopover"],
              normalizeProps(guardReactiveProps($setup.state)),
              {
                activator: withCtx(() => [
                  createVNode($setup["AppButton"], { variant: "default" }, {
                    default: withCtx(() => [
                      createTextVNode(" Button ")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                panel: withCtx(() => [
                  _hoisted_1
                ]),
                _: 1
                /* STABLE */
              },
              16
              /* FULL_PROPS */
            )
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/app/popover/AppPopover.story.vue";
const AppPopover_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/app/popover/AppPopover.story.vue"]]);
export {
  AppPopover_story as default
};
