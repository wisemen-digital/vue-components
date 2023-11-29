import { au as defineComponent, ax as openBlock, aV as createElementBlock, aP as createCommentVNode, aA as createVNode, az as withCtx, aW as Fragment, aB as createBaseVNode, aX as renderList, aC as normalizeProps, aD as guardReactiveProps, aY as Transition, aQ as renderSlot, aO as normalizeClass, ay as createBlock } from "./vendor-dC_up0ZP.js";
import { A as AppIcon } from "./AppIcon-wqAnmqIA.js";
import { _ as _export_sfc, c as cva } from "./cva-buL8-oqa.js";
const fadeTransition = {
  enterActiveClass: "transition-opacity ease duration-300",
  leaveActiveClass: "transition-opacity ease duration-300",
  enterFromClass: "opacity-0",
  leaveToClass: "opacity-0"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppButtonLoader",
  props: {
    isLoading: { type: Boolean, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get fadeTransition() {
      return fadeTransition;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 0,
  class: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
};
const _hoisted_2 = { class: "relative inline-block h-2.5 w-10" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" eslint-disable tailwindcss/no-custom-classname "),
      createVNode(
        Transition,
        normalizeProps(guardReactiveProps($setup.fadeTransition)),
        {
          default: withCtx(() => [
            $props.isLoading ? (openBlock(), createElementBlock("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                (openBlock(), createElementBlock(
                  Fragment,
                  null,
                  renderList(4, (i) => {
                    return createBaseVNode("div", {
                      key: i,
                      class: "orb bg-current shadow-focus absolute top-[1px] h-2 w-2 rounded-full"
                    });
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ])) : createCommentVNode("v-if", true)
          ]),
          _: 1
          /* STABLE */
        },
        16
        /* FULL_PROPS */
      )
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
_sfc_main$1.__file = "src/components/app/button/AppButtonLoader.vue";
const AppButtonLoader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-9d806c6b"], ["__file", "/home/runner/work/vue-components/vue-components/src/components/app/button/AppButtonLoader.vue"]]);
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
const buttonVariants = cva(
  {
    base: "relative inline-flex items-center justify-center rounded text-subtext font-medium text-destructive-foreground transition-colors disabled:pointer-events-none disabled:opacity-50",
    variants: {
      variant: variantOptions,
      size: sizeOptions,
      isRounded: {
        true: "rounded-full",
        false: null
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const buttonVariantOptions = Object.keys(variantOptions);
const buttonSizeOptions = Object.keys(sizeOptions);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppButton",
  props: {
    isDisabled: { type: Boolean, required: false, default: false },
    isLoading: { type: Boolean, required: false, default: false },
    isRounded: { type: Boolean, required: false },
    variant: { type: null, required: false, default: "default" },
    size: { type: null, required: false, default: "default" },
    prefixIcon: { type: null, required: false },
    suffixIcon: { type: null, required: false }
  },
  emits: ["component:click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emits = __emit;
    function handleClick() {
      if (!__props.isDisabled && !__props.isLoading)
        emits("component:click");
    }
    const __returned__ = { emits, handleClick, AppIcon, AppButtonLoader, get buttonVariants() {
      return buttonVariants;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "button",
    {
      class: normalizeClass($setup.buttonVariants({ variant: $props.variant, size: $props.size, isRounded: $props.isRounded })),
      onClick: $setup.handleClick
    },
    [
      createBaseVNode(
        "div",
        {
          class: normalizeClass([{ "opacity-30": $props.isLoading }, "flex items-center gap-2 whitespace-nowrap transition-opacity"])
        },
        [
          renderSlot(_ctx.$slots, "prefix", {}, () => [
            $props.prefixIcon ? (openBlock(), createBlock($setup["AppIcon"], {
              key: 0,
              icon: $props.prefixIcon
            }, null, 8, ["icon"])) : createCommentVNode("v-if", true)
          ]),
          renderSlot(_ctx.$slots, "default"),
          renderSlot(_ctx.$slots, "suffix", {}, () => [
            $props.suffixIcon ? (openBlock(), createBlock($setup["AppIcon"], {
              key: 0,
              icon: $props.suffixIcon
            }, null, 8, ["icon"])) : createCommentVNode("v-if", true)
          ])
        ],
        2
        /* CLASS */
      ),
      createVNode($setup["AppButtonLoader"], { "is-loading": $props.isLoading }, null, 8, ["is-loading"])
    ],
    2
    /* CLASS */
  );
}
_sfc_main.__file = "src/components/app/button/AppButton.vue";
const AppButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/app/button/AppButton.vue"]]);
export {
  AppButton as A,
  buttonVariantOptions as a,
  buttonSizeOptions as b
};
