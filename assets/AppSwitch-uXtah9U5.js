import { au as defineComponent, aR as mergeModels, aS as useModel, aU as computed, bm as ie, aw as openBlock, ax as createElementBlock, aO as createCommentVNode, aD as createVNode, aE as withCtx, aP as normalizeClass, aI as createBlock, aB as Fragment } from "./vendor-KTSXO9NW.js";
import { c as cva, _ as _export_sfc } from "./_plugin-vue_export-helper-vAs4t3X_.js";
import { A as AppIcon } from "./AppIcon-JFrWzaqr.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppSwitch",
  props: mergeModels({
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
    } }
  }),
  emits: mergeModels(["focus", "blur"], ["update:modelValue"]),
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
    const wrapperClasses = computed(() => {
      return isSelected.value ? __props.selectedBackgroundClass : "bg-neutral-200";
    });
    function onFocus() {
      emits("focus");
    }
    function onBlur() {
      emits("blur");
    }
    const __returned__ = { emits, model, isSelected, wrapperClasses, onFocus, onBlur, get Switch() {
      return ie;
    }, get switchWrapper() {
      return switchWrapper;
    }, AppIcon };
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
        value: $props.value,
        name: $props.name,
        disabled: $props.isDisabled,
        class: normalizeClass($setup.switchWrapper({ isCheckbox: $props.isCheckbox, isInvalid: $props.isInvalid, isDisabled: $props.isDisabled, class: $setup.wrapperClasses })),
        onBlur: $setup.onBlur,
        onFocus: $setup.onFocus
      }, {
        default: withCtx(() => [
          $props.isCheckbox ? (openBlock(), createBlock($setup["AppIcon"], {
            key: 0,
            size: "full",
            icon: "checkmark",
            class: normalizeClass(["p-0.5 text-white duration-200", {
              "opacity-100": $setup.isSelected,
              "opacity-0": !$setup.isSelected
            }])
          }, null, 8, ["class"])) : (openBlock(), createElementBlock(
            "span",
            {
              key: 1,
              class: normalizeClass(["inline-block h-5 w-5 rounded-full bg-white duration-100", $setup.isSelected ? "translate-x-[1.15rem]" : "translate-x-0.5"])
            },
            null,
            2
            /* CLASS */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "value", "name", "disabled", "class"])
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
_sfc_main.__file = "src/components/switch/AppSwitch.vue";
const AppSwitch = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/switch/AppSwitch.vue"]]);
export {
  AppSwitch as A
};
