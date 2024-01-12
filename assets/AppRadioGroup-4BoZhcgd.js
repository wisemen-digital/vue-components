import { au as defineComponent, aK as mergeModels, aL as useModel, aQ as ref, bb as useFocusWithin, bc as watch, bd as ge, aw as openBlock, aG as createElementBlock, aI as createCommentVNode, az as createVNode, ay as withCtx, aH as renderSlot, aP as Fragment, be as Oe, ax as createBlock, bf as ke, aB as createBaseVNode, aJ as normalizeClass, aU as computed, bg as createSlots, aF as toDisplayString, aE as createTextVNode, bh as he, b3 as renderList } from "./vendor-q8C-Jnqr.js";
import { g as generateUuid, A as AppFormLabel } from "./AppFormLabel-ENSSOTUo.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
import { c as cva } from "./cva-S8v_gOEs.js";
import { A as AppTextDescription } from "./AppTextDescription-UY1ncTYW.js";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AppRadioGroupContainer",
  props: /* @__PURE__ */ mergeModels({
    by: { type: Function, required: false, skipCheck: true },
    items: { type: Array, required: true },
    isDisabled: { type: Boolean, required: false, default: false },
    isInvalid: { type: Boolean, required: false, default: false }
  }, {
    "modelValue": { required: true },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["blur"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emits = __emit;
    const model = useModel(__props, "modelValue");
    const group = ref(null);
    const hasBeenFocused = ref(false);
    const { focused } = useFocusWithin(group);
    function onBlur() {
      hasBeenFocused.value = true;
      emits("blur");
    }
    watch(
      () => focused.value,
      () => {
        if (focused.value)
          hasBeenFocused.value = true;
        else
          onBlur();
      }
    );
    const __returned__ = { emits, model, group, hasBeenFocused, focused, onBlur, get RadioGroup() {
      return ge;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" eslint-disable vue/valid-v-model "),
      createVNode($setup["RadioGroup"], {
        ref: "group",
        modelValue: $setup.model,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event),
        disabled: $props.isDisabled,
        by: $props.by
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {
            items: $props.items,
            isDisabled: $props.isDisabled,
            isInvalid: $props.isInvalid,
            selectedItem: $setup.model
          })
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["modelValue", "disabled", "by"])
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
_sfc_main$6.__file = "src/components/radio/AppRadioGroupContainer.vue";
const AppRadioGroupContainer = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "/home/runner/work/vue-components/vue-components/src/components/radio/AppRadioGroupContainer.vue"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AppRadioGroupLabel",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get RadioGroupLabel() {
      return Oe;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["RadioGroupLabel"], null, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$5.__file = "src/components/radio/AppRadioGroupLabel.vue";
const AppRadioGroupLabel = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/vue-components/vue-components/src/components/radio/AppRadioGroupLabel.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AppRadioGroupDescription",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get RadioGroupDescription() {
      return ke;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["RadioGroupDescription"], null, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$4.__file = "src/components/radio/AppRadioGroupDescription.vue";
const AppRadioGroupDescription = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/vue-components/vue-components/src/components/radio/AppRadioGroupDescription.vue"]]);
const radioGroupIndicatorContainerVariants = cva(
  {
    base: "relative flex h-6 w-6 flex-none cursor-pointer items-center justify-center rounded-full border bg-background",
    variants: {
      isInvalid: {
        true: "border-destructive",
        false: "border-border"
      }
    },
    defaultVariants: {
      isInvalid: false
    }
  }
);
const radioGroupIndicatorVariants = cva(
  {
    base: "absolute rounded-full bg-primary duration-200",
    variants: {
      isChecked: {
        true: "h-3 w-3",
        false: "h-0 w-0"
      }
    },
    defaultVariants: {
      isChecked: false
    }
  }
);
const radioGroupOptionText = cva(
  {
    base: "",
    variants: {
      isInvalid: {
        true: "text-destructive",
        false: "text-foreground"
      }
    },
    defaultVariants: {
      isInvalid: false
    }
  }
);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppRadioGroupIndicator",
  props: {
    isActive: { type: Boolean, required: false },
    isChecked: { type: Boolean, required: false, default: false },
    isDisabled: { type: Boolean, required: false },
    isInvalid: { type: Boolean, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get radioGroupIndicatorContainerVariants() {
      return radioGroupIndicatorContainerVariants;
    }, get radioGroupIndicatorVariants() {
      return radioGroupIndicatorVariants;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(
        $setup.radioGroupIndicatorContainerVariants({
          isInvalid: $props.isInvalid
        })
      )
    },
    [
      createBaseVNode(
        "div",
        {
          class: normalizeClass($setup.radioGroupIndicatorVariants({
            isChecked: $props.isChecked
          }))
        },
        null,
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
_sfc_main$3.__file = "src/components/radio/AppRadioGroupIndicator.vue";
const AppRadioGroupIndicator = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/vue-components/vue-components/src/components/radio/AppRadioGroupIndicator.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppRadioGroupOption",
  props: {
    isActive: { type: Boolean, required: false, default: false },
    isChecked: { type: Boolean, required: false, default: false },
    isDisabled: { type: Boolean, required: false, default: false },
    isInvalid: { type: Boolean, required: false, default: false },
    labelKey: { type: null, required: false },
    descriptionKey: { type: null, required: false },
    item: { type: null, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const label = computed(() => {
      if (__props.labelKey)
        return __props.item[__props.labelKey];
      return __props.item;
    });
    const description = computed(() => {
      if (__props.descriptionKey)
        return __props.item[__props.descriptionKey];
      return null;
    });
    const __returned__ = { label, description, AppRadioGroupDescription, AppRadioGroupIndicator, AppRadioGroupLabel, AppTextDescription, get radioGroupOptionText() {
      return radioGroupOptionText;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-row items-center gap-2" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode($setup["AppRadioGroupIndicator"], {
      "is-active": $props.isActive,
      "is-checked": $props.isChecked,
      "is-disabled": $props.isDisabled,
      "is-invalid": $props.isInvalid
    }, null, 8, ["is-active", "is-checked", "is-disabled", "is-invalid"]),
    createBaseVNode(
      "div",
      {
        class: normalizeClass({
          "opacity-50": $props.isDisabled
        })
      },
      [
        createVNode(
          $setup["AppTextDescription"],
          null,
          createSlots({
            default: withCtx(() => [
              createVNode($setup["AppRadioGroupLabel"], {
                class: normalizeClass($setup.radioGroupOptionText({
                  isInvalid: $props.isInvalid
                }))
              }, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString($setup.label),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["class"])
            ]),
            _: 2
            /* DYNAMIC */
          }, [
            $setup.description ? {
              name: "description",
              fn: withCtx(() => [
                createVNode($setup["AppRadioGroupDescription"], {
                  class: normalizeClass($setup.radioGroupOptionText({
                    isInvalid: $props.isInvalid
                  }))
                }, {
                  default: withCtx(() => [
                    createTextVNode(
                      toDisplayString($setup.description),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["class"])
              ]),
              key: "0"
            } : void 0
          ]),
          1024
          /* DYNAMIC_SLOTS */
        )
      ],
      2
      /* CLASS */
    )
  ]);
}
_sfc_main$2.__file = "src/components/radio/AppRadioGroupOption.vue";
const AppRadioGroupOption = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/vue-components/vue-components/src/components/radio/AppRadioGroupOption.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppRadioGroupOptions",
  props: {
    items: { type: Array, required: true },
    disabledKey: { type: null, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    function isDisabled(item) {
      if (__props.disabledKey)
        return !!item[__props.disabledKey];
      return false;
    }
    const __returned__ = { isDisabled, get RadioGroupOption() {
      return he;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($props.items, (item, index) => {
        return openBlock(), createBlock($setup["RadioGroupOption"], {
          key: index,
          disabled: $setup.isDisabled(item),
          value: item
        }, {
          default: withCtx(({ active, checked, disabled }) => [
            renderSlot(_ctx.$slots, "default", {
              item,
              isActive: active,
              isChecked: checked,
              isDisabled: disabled
            })
          ]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["disabled", "value"]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))
  ]);
}
_sfc_main$1.__file = "src/components/radio/AppRadioGroupOptions.vue";
const AppRadioGroupOptions = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/components/radio/AppRadioGroupOptions.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppRadioGroup",
  props: /* @__PURE__ */ mergeModels({
    label: { type: String, required: false },
    by: { type: Function, required: false, skipCheck: true },
    items: { type: Array, required: true },
    isDisabled: { type: Boolean, required: false },
    isInvalid: { type: Boolean, required: false },
    isRequired: { type: Boolean, required: false },
    labelKey: { type: null, required: false },
    descriptionKey: { type: null, required: false },
    disabledKey: { type: null, required: false }
  }, {
    "modelValue": { required: true },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["blur"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emits = __emit;
    const model = useModel(__props, "modelValue");
    const uuid = `form-radio-group-${generateUuid()}`;
    function onBlur() {
      emits("blur");
    }
    const __returned__ = { emits, model, uuid, onBlur, AppFormLabel, AppRadioGroupContainer, AppRadioGroupLabel, AppRadioGroupOption, AppRadioGroupOptions };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["AppRadioGroupContainer"], {
    id: $setup.uuid,
    modelValue: $setup.model,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event),
    "is-disabled": $props.isDisabled,
    "is-invalid": $props.isInvalid,
    items: $props.items,
    onBlur: $setup.onBlur
  }, {
    default: withCtx(({
      items: containerItems
    }) => [
      $props.label ? (openBlock(), createBlock($setup["AppRadioGroupLabel"], { key: 0 }, {
        default: withCtx(() => [
          createVNode($setup["AppFormLabel"], {
            id: $setup.uuid,
            "is-disabled": $props.isDisabled ?? false,
            "is-invalid": $props.isInvalid ?? false,
            "is-required": $props.isRequired ?? false,
            label: $props.label
          }, null, 8, ["is-disabled", "is-invalid", "is-required", "label"])
        ]),
        _: 1
        /* STABLE */
      })) : createCommentVNode("v-if", true),
      createVNode($setup["AppRadioGroupOptions"], {
        class: "flex flex-col gap-1",
        items: containerItems,
        "disabled-key": $props.disabledKey
      }, {
        default: withCtx(({
          isActive,
          isChecked,
          isDisabled: isItemDisabled,
          item
        }) => [
          createVNode($setup["AppRadioGroupOption"], {
            "is-active": isActive,
            "is-checked": isChecked,
            "is-disabled": isItemDisabled,
            "is-invalid": $props.isInvalid,
            "description-key": $props.descriptionKey,
            "label-key": $props.labelKey,
            item
          }, null, 8, ["is-active", "is-checked", "is-disabled", "is-invalid", "description-key", "label-key", "item"])
        ]),
        _: 2
        /* DYNAMIC */
      }, 1032, ["items", "disabled-key"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["modelValue", "is-disabled", "is-invalid", "items"]);
}
_sfc_main.__file = "src/components/radio/AppRadioGroup.vue";
const AppRadioGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/radio/AppRadioGroup.vue"]]);
export {
  AppRadioGroup as A
};
