import { au as defineComponent, aK as mergeModels, aL as useModel, aU as computed, aQ as ref, aS as useAttrs, aw as openBlock, aG as createElementBlock, aH as renderSlot, aW as withDirectives, bL as vModelDynamic, aB as createBaseVNode, aR as mergeProps, aJ as normalizeClass, ax as createBlock, aI as createCommentVNode } from "./vendor-SzL31LEx.js";
import { b as inputWrapper, i as input, a as inputIcon } from "./appInput.style-6wm4Enpg.js";
import { A as AppIcon } from "./AppIcon-9br4U6Dr.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppInput",
  props: /* @__PURE__ */ mergeModels({
    type: { type: null, required: false, default: "text" },
    isDisabled: { type: Boolean, required: false, default: false },
    isInvalid: { type: Boolean, required: false, default: false },
    isReadonly: { type: Boolean, required: false, default: false },
    iconLeft: { type: null, required: false, default: null },
    iconRight: { type: null, required: false, default: null },
    isCompact: { type: Boolean, required: false, default: false },
    isOutsideFocused: { type: Boolean, required: false, default: false }
  }, {
    "modelValue": {
      required: true
    },
    "modelModifiers": {}
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
        isFocused: isFocused.value || props.isOutsideFocused,
        class: attrs.class
      });
    });
    const inputClasses = computed(() => input({ isReadonly: props.isReadonly }));
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
const _hoisted_1 = ["readonly", "disabled", "type"];
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
        readonly: $props.isReadonly,
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
