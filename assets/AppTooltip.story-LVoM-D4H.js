import { au as defineComponent, aK as mergeModels, aL as useModel, by as refDebounced, aQ as ref, bz as useFocusWithin, b3 as watch, bA as onKeyDown, bB as onMounted, aw as openBlock, ax as createBlock, ay as withCtx, aH as renderSlot, aB as createBaseVNode, aR as mergeProps, aA as reactive, av as resolveComponent, az as createVNode, aC as normalizeProps, aD as guardReactiveProps, aE as createTextVNode } from "./vendor-tldIp9D4.js";
import { A as AppButton } from "./AppButton-XxfeGAJO.js";
import { A as AppPopover } from "./AppPopover-B8WWb0yU.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
import "./cva-Uo0_UCxF.js";
import "./AppIcon-iXg__cZe.js";
import "./popover.transition-z0jVcmyM.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppTooltip",
  props: /* @__PURE__ */ mergeModels({
    hasManualElementBinding: { type: Boolean, required: false, default: false },
    hasManualPanelBinding: { type: Boolean, required: false, default: false },
    delay: { type: Number, required: false, default: 300 },
    placement: { type: null, required: false },
    hasAdaptiveWidth: { type: Boolean, required: false },
    hasNoOffset: { type: Boolean, required: false },
    hasNoShift: { type: Boolean, required: false },
    hasNoFlip: { type: Boolean, required: false },
    hasAutoPlacement: { type: Boolean, required: false },
    isDiv: { type: Boolean, required: false, default: true }
  }, {
    "modelValue": { type: Boolean, ...{
      default: false
    } },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const isPopoverShown = useModel(__props, "modelValue");
    const isPopoverShownDebounced = refDebounced(isPopoverShown, __props.delay);
    const panelElement = ref(null);
    const elementElement = ref(null);
    const { focused: isFocusWithinPanel } = useFocusWithin(panelElement);
    const isInPanel = ref(false);
    const isInElement = ref(false);
    watch(() => isFocusWithinPanel.value, (value) => {
      if (value)
        handleOpen();
      else
        handleClose();
    });
    function handleOpen() {
      if (!isInPanel.value && !isInElement.value && !isFocusWithinPanel.value)
        return;
      isPopoverShown.value = true;
    }
    function handleClose() {
      if (isInPanel.value || isInElement.value || isFocusWithinPanel.value)
        return;
      isPopoverShown.value = false;
    }
    function handleForceClose() {
      isPopoverShown.value = false;
    }
    function onElementFocus() {
      isInElement.value = true;
      handleOpen();
    }
    function onElementBlur() {
      isInElement.value = false;
      handleClose();
    }
    function onElementMouseOver() {
      isInElement.value = true;
      handleOpen();
    }
    function onElementMouseLeave() {
      isInElement.value = false;
      handleClose();
    }
    onKeyDown("Escape", handleForceClose);
    const elementEvents = {
      onFocus: onElementFocus,
      onBlur: onElementBlur,
      onmouseover: onElementMouseOver,
      onmouseleave: onElementMouseLeave
    };
    const panelEvents = {
      onmouseover: onPanelMouseOver,
      onmouseleave: onPanelMouseLeave
    };
    function onPanelMouseOver() {
      isInPanel.value = true;
      handleOpen();
    }
    function onPanelMouseLeave() {
      isInPanel.value = false;
      handleClose();
    }
    function addPanelEvents() {
      var _a, _b;
      if (__props.hasManualPanelBinding)
        return;
      (_a = panelElement.value) == null ? void 0 : _a.addEventListener("mouseover", onPanelMouseOver);
      (_b = panelElement.value) == null ? void 0 : _b.addEventListener("mouseleave", onPanelMouseLeave);
    }
    watch(() => panelElement.value, () => {
      if (!panelElement.value)
        return;
      panelElement.value.addEventListener("mouseover", onPanelMouseOver);
      panelElement.value.addEventListener("mouseleave", onPanelMouseLeave);
    });
    function addElementEvents() {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      if (__props.hasManualElementBinding)
        return;
      (_b = (_a = elementElement.value) == null ? void 0 : _a.children[0]) == null ? void 0 : _b.addEventListener("focus", onElementFocus);
      (_d = (_c = elementElement.value) == null ? void 0 : _c.children[0]) == null ? void 0 : _d.addEventListener("blur", onElementBlur);
      (_f = (_e = elementElement.value) == null ? void 0 : _e.children[0]) == null ? void 0 : _f.addEventListener("mouseover", onElementMouseOver);
      (_h = (_g = elementElement.value) == null ? void 0 : _g.children[0]) == null ? void 0 : _h.addEventListener("mouseleave", onElementMouseLeave);
    }
    onMounted(() => {
      addPanelEvents();
      addElementEvents();
    });
    const __returned__ = { isPopoverShown, isPopoverShownDebounced, panelElement, elementElement, isFocusWithinPanel, isInPanel, isInElement, handleOpen, handleClose, handleForceClose, onElementFocus, onElementBlur, onElementMouseOver, onElementMouseLeave, elementEvents, panelEvents, onPanelMouseOver, onPanelMouseLeave, addPanelEvents, addElementEvents, AppPopover };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { ref: "elementElement" };
const _hoisted_2 = { ref: "panelElement" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["AppPopover"], mergeProps({
    modelValue: $setup.isPopoverShownDebounced,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.isPopoverShownDebounced = $event),
    "is-manual": "",
    class: "max-w-max"
  }, {
    hasAdaptiveWidth: $props.hasAdaptiveWidth,
    hasAutoPlacement: $props.hasAutoPlacement,
    hasNoFlip: $props.hasNoFlip,
    hasNoShift: $props.hasNoShift,
    hasNoOffset: $props.hasNoOffset,
    placement: $props.placement,
    isDiv: $props.isDiv
  }), {
    element: withCtx(() => [
      createBaseVNode(
        "div",
        _hoisted_1$1,
        [
          renderSlot(_ctx.$slots, "element", {
            events: $setup.elementEvents,
            close: $setup.handleClose,
            forceClose: $setup.handleForceClose
          })
        ],
        512
        /* NEED_PATCH */
      )
    ]),
    panel: withCtx(() => [
      createBaseVNode(
        "div",
        _hoisted_2,
        [
          renderSlot(_ctx.$slots, "panel", {
            close: $setup.handleClose,
            forceClose: $setup.handleForceClose,
            events: $setup.panelEvents
          })
        ],
        512
        /* NEED_PATCH */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["modelValue"]);
}
_sfc_main$1.__file = "src/components/tooltip/AppTooltip.vue";
const AppTooltip = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/components/tooltip/AppTooltip.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppTooltip.story",
  props: {
    placement: { type: null, required: false },
    hasAdaptiveWidth: { type: Boolean, required: false },
    hasNoOffset: { type: Boolean, required: false },
    hasNoShift: { type: Boolean, required: false },
    hasNoFlip: { type: Boolean, required: false },
    hasAutoPlacement: { type: Boolean, required: false },
    isManual: { type: Boolean, required: false },
    isDiv: { type: Boolean, required: false }
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
    const __returned__ = { state, placementOptions, AppButton, AppTooltip };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "max-w-60" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Tooltip/AppTooltip" }, {
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
              $setup["AppTooltip"],
              normalizeProps(guardReactiveProps($setup.state)),
              {
                element: withCtx(() => [
                  createVNode($setup["AppButton"], { variant: "default" }, {
                    default: withCtx(() => [
                      createTextVNode(" Button ")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                panel: withCtx(() => [
                  createBaseVNode("div", _hoisted_1, [
                    createVNode($setup["AppButton"], null, {
                      default: withCtx(() => [
                        createTextVNode(" Interactable element ")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloribus, saepe excepturi dolor maiores ut molestias sapiente enim corporis animi praesentium dolore ducimus ipsa suscipit, nihil laboriosam autem quam deleniti? ")
                  ])
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
_sfc_main.__file = "src/components/tooltip/AppTooltip.story.vue";
const AppTooltip_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/tooltip/AppTooltip.story.vue"]]);
export {
  AppTooltip_story as default
};
