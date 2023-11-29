import { au as defineComponent, aR as mergeModels, aS as useModel, aU as computed, av as ref, aT as useAttrs, aw as openBlock, ax as createElementBlock, aN as renderSlot, az as withDirectives, aV as vModelDynamic, ay as createBaseVNode, aQ as mergeProps, aP as normalizeClass, aI as createBlock, aO as createCommentVNode } from "./vendor-rN0rsCKm.js";
import { c as cva, _ as _export_sfc } from "./_plugin-vue_export-helper-n3C_4ylN.js";
import { A as AppIcon } from "./AppIcon-qeCugtLx.js";
const inputWrapper = cva({
  base: "relative flex w-full items-center rounded-input border border-solid border-input-border bg-background shadow-input-shadow ring-offset-background duration-100",
  variants: {
    isDisabled: {
      true: "cursor-not-allowed bg-input-disabled opacity-50"
    },
    isFocused: {
      true: "border-primary ring-2 ring-primary ring-offset-2"
    },
    isInvalid: {
      true: "border-destructive text-destructive ring-destructive"
    },
    isCompact: {
      true: "h-8",
      false: "h-10"
    }
  }
});
const input = cva({
  base: "h-full w-full truncate bg-transparent px-3 py-2 text-subtext text-input-foreground outline-none placeholder:text-input-foreground/50 disabled:cursor-not-allowed"
});
const inputIcon = cva({
  base: "h-3.5 w-3.5 text-input-foreground",
  variants: {
    isInvalid: {
      true: "text-destructive"
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppInput",
  props: mergeModels({
    type: { type: null, required: false, default: "text" },
    isDisabled: { type: Boolean, required: false, default: false },
    isInvalid: { type: Boolean, required: false, default: false },
    iconLeft: { type: null, required: false, default: null },
    iconRight: { type: null, required: false, default: null },
    isCompact: { type: Boolean, required: false, default: false },
    dataMaska: { type: [String, null], required: false }
  }, {
    "modelValue": { type: null, skipCheck: true, ...{
      required: true
    } }
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const value = useModel(__props, "modelValue");
    const computedValue = computed({
      get: () => value.value,
      set: (newValue) => {
        const { type } = props;
        if (type === "number")
          value.value = newValue === "" ? "" : Number(newValue);
        else
          value.value = newValue;
      }
    });
    const isFocused = ref(false);
    const attrs = useAttrs();
    const inputWrapperClasses = computed(() => {
      const { isDisabled, isInvalid, isCompact } = props;
      return inputWrapper({
        isDisabled,
        isInvalid,
        isCompact,
        isFocused: isFocused.value,
        class: attrs.class
      });
    });
    const inputClasses = computed(() => input());
    const inputIconClasses = computed(() => {
      const { isInvalid } = props;
      return inputIcon({
        isInvalid
      });
    });
    const inputAttrs = computed(() => ({
      ...props,
      ...attrs,
      class: void 0
    }));
    function onFocus() {
      isFocused.value = true;
    }
    function onBlur() {
      isFocused.value = false;
    }
    const __returned__ = { props, value, computedValue, isFocused, attrs, inputWrapperClasses, inputClasses, inputIconClasses, inputAttrs, onFocus, onBlur, AppIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["disabled", "type"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass($setup.inputWrapperClasses)
    },
    [
      renderSlot(_ctx.$slots, "left", {}, () => [
        $props.iconLeft !== null ? (openBlock(), createBlock($setup["AppIcon"], {
          key: 0,
          class: normalizeClass(["ml-3", $setup.inputIconClasses]),
          icon: $props.iconLeft
        }, null, 8, ["class", "icon"])) : createCommentVNode("v-if", true)
      ]),
      withDirectives(createBaseVNode("input", mergeProps({
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.computedValue = $event)
      }, $setup.inputAttrs, {
        class: $setup.inputClasses,
        disabled: $props.isDisabled,
        type: $props.type,
        onBlur: $setup.onBlur,
        onFocus: $setup.onFocus
      }), null, 16, _hoisted_1), [
        [vModelDynamic, $setup.computedValue]
      ]),
      renderSlot(_ctx.$slots, "right", {}, () => [
        $props.iconRight !== null ? (openBlock(), createBlock($setup["AppIcon"], {
          key: 0,
          class: normalizeClass(["mr-3", $setup.inputIconClasses]),
          icon: $props.iconRight
        }, null, 8, ["class", "icon"])) : createCommentVNode("v-if", true)
      ])
    ],
    2
    /* CLASS */
  );
}
_sfc_main.__file = "src/components/input/AppInput.vue";
const AppInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/input/AppInput.vue"]]);
export {
  AppInput as A
};
