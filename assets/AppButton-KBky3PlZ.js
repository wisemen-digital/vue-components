import { aw as openBlock, ax as createElementBlock, b5 as pushScopeId, b6 as popScopeId, ay as createBaseVNode, au as defineComponent, aU as computed, aD as createVNode, aP as normalizeClass, aI as createBlock, aT as useAttrs, b7 as RouterLink, aO as createCommentVNode, aE as withCtx, aN as renderSlot, aL as normalizeProps, aM as guardReactiveProps, b8 as resolveDynamicComponent, aB as Fragment } from "./vendor-GqWTPufq.js";
import { c as cva, _ as _export_sfc } from "./_plugin-vue_export-helper-TBXr_UqE.js";
import { A as AppIcon } from "./AppIcon-jlNoBaV0.js";
const variantOptions = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-focus-destructive",
  outline: "border border-primary hover:bg-secondary text-secondary-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-secondary text-secondary-foreground",
  link: "text-primary underline-offset-4 hover:underline"
};
const sizeOptions = {
  icon: "h-10 p-3 w-10",
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded px-3",
  lg: "h-11 rounded px-8"
};
const button = cva({
  base: "relative inline-flex flex-shrink-0 items-center justify-center gap-x-2 rounded-button border border-solid text-subtext font-medium ring-offset-background duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    variant: variantOptions,
    size: sizeOptions,
    isLoading: {
      true: "opacity-100"
    },
    isRounded: {
      true: "rounded-full"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
const buttonIcon = cva({
  variants: {
    size: {
      default: "h-3.5 w-3.5",
      sm: "h-3.5 w-3.5",
      lg: "h-4 w-4",
      icon: "h-3.5 w-3.5"
    }
  },
  defaultVariants: {
    size: "default"
  }
});
const buttonVariantOptions = Object.keys(variantOptions);
const buttonSizeOptions = Object.keys(sizeOptions);
const _sfc_main$2 = {};
const _withScopeId = (n) => (pushScopeId("data-v-25add791"), n = n(), popScopeId(), n);
const _hoisted_1$2 = { viewBox: "25 25 50 50" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "circle",
  {
    class: "h-full w-full",
    cx: "100%",
    cy: "100%",
    fill: "none",
    r: "20",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "2"
  },
  null,
  -1
  /* HOISTED */
));
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._hoisted_3]);
}
_sfc_main$2.__file = "src/components/loader/AppLoader.vue";
const AppLoader = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-25add791"], ["__file", "/home/runner/work/vue-components/vue-components/src/components/loader/AppLoader.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppButtonIconOrLoader",
  props: {
    icon: { type: null, required: true },
    isLoading: { type: Boolean, required: true },
    size: { type: null, required: true },
    variant: { type: null, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const buttonIconClasses = computed(
      () => buttonIcon({
        size: __props.size
      })
    );
    const __returned__ = { buttonIconClasses, AppLoader, AppIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.isLoading ? (openBlock(), createElementBlock(
    "div",
    {
      key: 0,
      class: normalizeClass(["relative", $setup.buttonIconClasses])
    },
    [
      createBaseVNode("div", _hoisted_1$1, [
        createVNode($setup["AppLoader"], { class: "h-4 w-4" })
      ])
    ],
    2
    /* CLASS */
  )) : (openBlock(), createBlock($setup["AppIcon"], {
    key: 1,
    class: normalizeClass($setup.buttonIconClasses),
    icon: $props.icon
  }, null, 8, ["class", "icon"]));
}
_sfc_main$1.__file = "src/components/button/AppButtonIconOrLoader.vue";
const AppButtonIconOrLoader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/components/button/AppButtonIconOrLoader.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppButton",
  props: {
    isDisabled: { type: Boolean, required: false, default: false },
    isLoading: { type: Boolean, required: false, default: false },
    variant: { type: null, required: false, default: "default" },
    size: { type: null, required: false, default: "default" },
    iconLeft: { type: null, required: false, default: null },
    iconRight: { type: null, required: false, default: null },
    to: { type: [Object, null], required: false, default: null },
    href: { type: [String, null], required: false, default: null },
    type: { type: String, required: false, default: "button" },
    as: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const attrs = useAttrs();
    const buttonClasses = computed(
      () => button({
        size: __props.size,
        variant: __props.variant,
        isLoading: __props.isLoading,
        class: attrs.class
      })
    );
    const componentType = computed(() => {
      if (__props.as !== void 0)
        return __props.as;
      if (__props.to !== null)
        return RouterLink;
      else if (__props.href !== null)
        return "a";
      return "button";
    });
    const componentProps = computed(() => {
      if (componentType.value === "a") {
        return {
          href: __props.href,
          target: "_blank",
          rel: "noopener noreferrer",
          class: buttonClasses.value
        };
      }
      if (componentType.value === RouterLink) {
        return {
          to: __props.to,
          class: buttonClasses.value
        };
      }
      return {
        type: __props.type,
        disabled: __props.isDisabled || __props.isLoading,
        class: buttonClasses.value
      };
    });
    const __returned__ = { attrs, buttonClasses, componentType, componentProps, AppButtonIconOrLoader, AppLoader };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 1,
  class: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" Not casting `componentProps` to `any` throws a ts error on build "),
      (openBlock(), createBlock(
        resolveDynamicComponent($setup.componentType),
        normalizeProps(guardReactiveProps($setup.componentProps)),
        {
          default: withCtx(() => [
            $props.iconLeft !== null ? (openBlock(), createBlock($setup["AppButtonIconOrLoader"], {
              key: 0,
              icon: $props.iconLeft,
              "is-loading": $props.isLoading,
              size: $props.size,
              variant: $props.variant
            }, null, 8, ["icon", "is-loading", "size", "variant"])) : createCommentVNode("v-if", true),
            createBaseVNode(
              "span",
              {
                class: normalizeClass(["whitespace-nowrap", {
                  "opacity-0": $props.isLoading && $props.iconLeft === null && $props.iconRight === null
                }])
              },
              [
                renderSlot(_ctx.$slots, "default")
              ],
              2
              /* CLASS */
            ),
            $props.isLoading && $props.iconLeft === null && $props.iconRight === null ? (openBlock(), createElementBlock("div", _hoisted_1, [
              createVNode($setup["AppLoader"], { class: "h-5 w-5" })
            ])) : createCommentVNode("v-if", true),
            $props.iconRight !== null ? (openBlock(), createBlock($setup["AppButtonIconOrLoader"], {
              key: 2,
              icon: $props.iconRight,
              "is-loading": $props.isLoading,
              size: $props.size,
              variant: $props.variant
            }, null, 8, ["icon", "is-loading", "size", "variant"])) : createCommentVNode("v-if", true)
          ]),
          _: 3
          /* FORWARDED */
        },
        16
        /* FULL_PROPS */
      ))
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
_sfc_main.__file = "src/components/button/AppButton.vue";
const AppButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/button/AppButton.vue"]]);
export {
  AppButton as A,
  buttonVariantOptions as a,
  buttonSizeOptions as b
};
