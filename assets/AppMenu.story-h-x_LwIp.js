import { au as defineComponent, aY as ge, aw as openBlock, ax as createBlock, ay as withCtx, aD as guardReactiveProps, aC as normalizeProps, aH as renderSlot, aJ as normalizeClass, az as createVNode, aB as createBaseVNode, aZ as $e, a_ as Ie, aR as mergeProps, aG as createElementBlock, a$ as be, b0 as RouterLink, b1 as resolveDynamicComponent, aI as createCommentVNode, aF as toDisplayString, aE as createTextVNode, b2 as Se, aP as Fragment, b3 as renderList, av as resolveComponent } from "./vendor-SzL31LEx.js";
import { A as AppButton } from "./AppButton-3AH1zsJ6.js";
import { A as AppIcon } from "./AppIcon-9br4U6Dr.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
import { p as popoverTransition } from "./popover.transition-z0jVcmyM.js";
import { c as cva } from "./cva-zAQhILdM.js";
import { A as AppText } from "./AppText-_h4M5YsZ.js";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AppMenuButton",
  props: {
    isDisabled: { type: Boolean, required: false },
    isLoading: { type: Boolean, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    iconLeft: { type: null, required: false },
    iconRight: { type: null, required: false },
    to: { type: [Object, null], required: false },
    href: { type: [String, null], required: false },
    type: { type: String, required: false },
    as: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get MenuButton() {
      return ge;
    }, AppButton, AppIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = { class: "flex items-center gap-2" };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["MenuButton"], {
    as: "div",
    class: "max-w-max"
  }, {
    default: withCtx(({ open }) => [
      renderSlot(_ctx.$slots, "element", { open }, () => [
        createVNode(
          $setup["AppButton"],
          normalizeProps(guardReactiveProps($setup.props)),
          {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$3, [
                renderSlot(_ctx.$slots, "default", { open }),
                createVNode($setup["AppIcon"], {
                  size: "sm",
                  icon: "chevronDown",
                  class: normalizeClass(["transition", {
                    "rotate-180": open
                  }])
                }, null, 8, ["class"])
              ])
            ]),
            _: 2
            /* DYNAMIC */
          },
          1040
          /* FULL_PROPS, DYNAMIC_SLOTS */
        )
      ])
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$6.__file = "src/components/menu/AppMenuButton.vue";
const AppMenuButton = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "/home/runner/work/vue-components/vue-components/src/components/menu/AppMenuButton.vue"]]);
const SHIFT_VALUE = 8;
const OFFSET_VALUE = 4;
const FLIP_VALUE = 8;
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AppMenuContainer",
  props: {
    placement: { type: null, required: false, default: "bottom-end" },
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
    }, get Menu() {
      return Ie;
    }, get popoverTransition() {
      return popoverTransition;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Menu"], null, {
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
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["placement", "adaptive-width", "auto-placement", "flip", "shift", "offset"])
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$5.__file = "src/components/menu/AppMenuContainer.vue";
const AppMenuContainer = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/vue-components/vue-components/src/components/menu/AppMenuContainer.vue"]]);
const _sfc_main$4 = {};
const _hoisted_1$2 = { class: "h-px w-full bg-neutral-300" };
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$2);
}
_sfc_main$4.__file = "src/components/menu/AppMenuDivider.vue";
const AppMenuDivider = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/vue-components/vue-components/src/components/menu/AppMenuDivider.vue"]]);
const menuItemVariants = cva(
  {
    base: "flex min-w-40 max-w-max items-center justify-between gap-2 px-4 py-2",
    variants: {
      isActive: {
        true: "bg-neutral-100"
      },
      isDisabled: {
        true: "cursor-not-allowed text-neutral-400"
      }
    },
    defaultVariants: {
      isActive: false,
      isDisabled: false
    }
  }
);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppMenuItem",
  props: {
    type: { type: String, required: true },
    iconLeft: { type: null, required: false },
    isDisabled: { type: Boolean, required: false },
    text: { type: String, required: true },
    description: { type: String, required: false },
    onSelect: { type: Function, required: false },
    to: { type: Object, required: false }
  },
  emits: ["click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emits = __emit;
    function handleClick() {
      var _a;
      if (__props.isDisabled)
        return;
      (_a = __props.onSelect) == null ? void 0 : _a.call(__props);
      emits("click");
    }
    const __returned__ = { emits, handleClick, get MenuItem() {
      return be;
    }, get RouterLink() {
      return RouterLink;
    }, get menuItemVariants() {
      return menuItemVariants;
    }, AppText, AppIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "flex items-center gap-2" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["MenuItem"], { disabled: $props.isDisabled }, {
    default: withCtx(({ active, disabled, close }) => [
      (openBlock(), createBlock(resolveDynamicComponent($props.to ? $setup.RouterLink : "button"), {
        to: $props.to,
        disabled: "",
        class: normalizeClass($setup.menuItemVariants({
          isDisabled: $props.isDisabled,
          isActive: active
        })),
        onClick: $setup.handleClick
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "element", {
            isDisabled: $props.isDisabled,
            active,
            close
          }, () => [
            renderSlot(_ctx.$slots, "left"),
            createBaseVNode("div", _hoisted_1$1, [
              renderSlot(_ctx.$slots, "icon-left", {}, () => [
                $props.iconLeft ? (openBlock(), createBlock($setup["AppIcon"], {
                  key: 0,
                  icon: $props.iconLeft,
                  size: "sm",
                  class: "mr-2"
                }, null, 8, ["icon"])) : createCommentVNode("v-if", true)
              ]),
              renderSlot(_ctx.$slots, "default", {
                isActive: active,
                isDisabled: disabled || $props.isDisabled,
                close
              }, () => [
                createVNode($setup["AppText"], null, {
                  default: withCtx(() => [
                    createTextVNode(
                      toDisplayString($props.text),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode($setup["AppText"], {
                  variant: "subtext",
                  class: "text-muted"
                }, {
                  default: withCtx(() => [
                    createTextVNode(
                      toDisplayString($props.description),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            renderSlot(_ctx.$slots, "right")
          ])
        ]),
        _: 2
        /* DYNAMIC */
      }, 1032, ["to", "class"]))
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["disabled"]);
}
_sfc_main$3.__file = "src/components/menu/AppMenuItem.vue";
const AppMenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/vue-components/vue-components/src/components/menu/AppMenuItem.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppMenuPanel",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get MenuItems() {
      return Se;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["MenuItems"], { class: "max-w-max overflow-hidden rounded-popover border border-border bg-popover text-popover-foreground shadow-popover-shadow" }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$2.__file = "src/components/menu/AppMenuPanel.vue";
const AppMenuPanel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/vue-components/vue-components/src/components/menu/AppMenuPanel.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppMenu",
  props: {
    menuConfiguration: { type: Array, required: true },
    buttonProps: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    function getMenuConfigurationItem(type) {
      switch (type) {
        case "divider":
          return AppMenuDivider;
        case "item":
          return AppMenuItem;
      }
    }
    const __returned__ = { getMenuConfigurationItem, AppMenuButton, AppMenuContainer, AppMenuPanel };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["AppMenuContainer"], null, {
    default: withCtx(() => [
      createVNode(
        $setup["AppMenuButton"],
        normalizeProps(guardReactiveProps($props.buttonProps)),
        {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
          /* FORWARDED */
        },
        16
        /* FULL_PROPS */
      ),
      createVNode($setup["AppMenuPanel"], null, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "panel-top"),
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($props.menuConfiguration, (menuItem, index) => {
              return openBlock(), createBlock(
                resolveDynamicComponent($setup.getMenuConfigurationItem(menuItem.type)),
                mergeProps({ key: index }, menuItem),
                null,
                16
                /* FULL_PROPS */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 3
        /* FORWARDED */
      }),
      renderSlot(_ctx.$slots, "panel-bottom")
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$1.__file = "src/components/menu/AppMenu.vue";
const AppMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/components/menu/AppMenu.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppMenu.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const menuConfiguration = [
      {
        type: "item",
        text: "Item 1",
        onSelect: () => {
          console.warn("Item 1 clicked");
        },
        isDisabled: true
      },
      {
        type: "item",
        text: "Item 2",
        onSelect: () => {
          console.warn("Item 2 clicked");
        }
      },
      {
        type: "divider"
      },
      {
        type: "item",
        text: "Item 3"
      },
      {
        type: "item",
        text: "Item 4"
      }
    ];
    const __returned__ = { menuConfiguration, AppMenu };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "p-20" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstJson = resolveComponent("HstJson");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Menu/AppMenu" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Default",
        "auto-props-disabled": ""
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstJson, {
            modelValue: $setup.menuConfiguration,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.menuConfiguration = $event),
            title: "Menu configuration"
          })
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["AppMenu"], { "menu-configuration": $setup.menuConfiguration }, {
              default: withCtx(() => [
                createTextVNode(" Im a menu ")
              ]),
              _: 1
              /* STABLE */
            })
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
_sfc_main.__file = "src/components/menu/AppMenu.story.vue";
const AppMenu_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/menu/AppMenu.story.vue"]]);
export {
  AppMenu_story as default
};
