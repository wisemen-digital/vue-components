import { au as defineComponent, aU as computed, aw as openBlock, aG as createElementBlock, ax as createBlock, aJ as normalizeClass, aK as mergeModels, aL as useModel, bn as ie, aI as createCommentVNode, az as createVNode, ay as withCtx, aH as renderSlot, aP as Fragment } from "./vendor-SzL31LEx.js";
import { A as AppIcon } from "./AppIcon-9br4U6Dr.js";
import { c as cva } from "./cva-zAQhILdM.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
const switchWrapper = cva({
  base: "transition duration-200",
  variants: {
    isCheckbox: {
      true: "flex h-6 w-6 items-center justify-center rounded-input border border-border bg-neutral-200",
      false: "relative inline-flex h-6 w-10 items-center rounded-full border bg-white ring-primary ring-offset-background duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    },
    isDisabled: {
      true: "cursor-not-allowed bg-input-disabled opacity-50"
    },
    isInvalid: {
      true: "border-destructive text-destructive focus-visible:ring-destructive"
    }
  }
});
cva({
  base: "h-4 w-4 rounded-full bg-input-disabled",
  variants: {
    isCheckbox: {
      true: "h-4 w-4",
      false: "bg-input-disabled opacity-50"
    },
    isInvalid: {
      true: "!border-destructive text-destructive focus-visible:ring-destructive"
    }
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppSwitchIndicator",
  props: {
    isSelected: { type: Boolean, required: true },
    isCheckbox: { type: Boolean, required: false, default: false },
    isDisabled: { type: Boolean, required: false, default: false },
    isInvalid: { type: Boolean, required: false, default: false },
    selectedBackgroundClass: { type: String, required: false, default: "bg-primary" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const wrapperClasses = computed(() => {
      return __props.isSelected ? __props.selectedBackgroundClass : "bg-neutral-200";
    });
    const __returned__ = { wrapperClasses, AppIcon, get switchWrapper() {
      return switchWrapper;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass($setup.switchWrapper({ isCheckbox: $props.isCheckbox, isInvalid: $props.isInvalid, isDisabled: $props.isDisabled, class: $setup.wrapperClasses }))
    },
    [
      $props.isCheckbox ? (openBlock(), createBlock($setup["AppIcon"], {
        key: 0,
        size: "full",
        icon: "checkmark",
        class: normalizeClass(["p-0.5 text-white duration-200", {
          "opacity-100": $props.isSelected,
          "opacity-0": !$props.isSelected
        }])
      }, null, 8, ["class"])) : (openBlock(), createElementBlock(
        "span",
        {
          key: 1,
          class: normalizeClass(["inline-block h-5 w-5 rounded-full bg-white duration-100", $props.isSelected ? "translate-x-[1.15rem]" : "translate-x-0.5"])
        },
        null,
        2
        /* CLASS */
      ))
    ],
    2
    /* CLASS */
  );
}
_sfc_main$1.__file = "src/components/switch/AppSwitchIndicator.vue";
const AppSwitchIndicator = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/components/switch/AppSwitchIndicator.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppSwitch",
  props: /* @__PURE__ */ mergeModels({
    value: { type: null, required: false, default: true },
    isCheckbox: { type: Boolean, required: false, default: false },
    isDisabled: { type: Boolean, required: false, default: false },
    isInvalid: { type: Boolean, required: false },
    selectedBackgroundClass: { type: String, required: false, default: "bg-primary" },
    name: { type: String, required: false }
  }, {
    "modelValue": { type: null, skipCheck: true, ...{
      required: true,
      default: null
    } },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["focus", "blur"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emits = __emit;
    const model = useModel(__props, "modelValue");
    const isSelected = computed({
      get() {
        return model.value === __props.value;
      },
      set(isSelectedValue) {
        if (isSelectedValue)
          model.value = __props.value;
        else
          model.value = null;
      }
    });
    function onFocus() {
      emits("focus");
    }
    function onBlur() {
      emits("blur");
    }
    const __returned__ = { emits, model, isSelected, onFocus, onBlur, get Switch() {
      return ie;
    }, AppSwitchIndicator };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" eslint-disable vue/valid-v-model "),
      createVNode($setup["Switch"], {
        modelValue: $setup.isSelected,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.isSelected = $event),
        value: typeof $props.value === "string" ? $props.value : void 0,
        name: $props.name,
        disabled: $props.isDisabled,
        class: "flex justify-start",
        onBlur: $setup.onBlur,
        onFocus: $setup.onFocus
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {
            isSelected: $setup.isSelected,
            isCheckbox: $props.isCheckbox,
            isDisabled: $props.isDisabled,
            selectedBackgroundClass: $props.selectedBackgroundClass
          }, () => [
            createVNode($setup["AppSwitchIndicator"], {
              "is-selected": $setup.isSelected,
              "is-checkbox": $props.isCheckbox,
              "is-disabled": $props.isDisabled,
              "selected-background-class": $props.selectedBackgroundClass
            }, null, 8, ["is-selected", "is-checkbox", "is-disabled", "selected-background-class"])
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["modelValue", "value", "name", "disabled"])
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
_sfc_main.__file = "src/components/switch/AppSwitch.vue";
const AppSwitch = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/switch/AppSwitch.vue"]]);
export {
  AppSwitch as A,
  AppSwitchIndicator as a
};
