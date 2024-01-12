import { au as defineComponent, aK as mergeModels, aL as useModel, aS as useAttrs, aU as computed, aw as openBlock, aG as createElementBlock, az as createVNode, aR as mergeProps, ax as createBlock, ay as withCtx, aF as toDisplayString, aE as createTextVNode, aI as createCommentVNode, aJ as normalizeClass, aQ as ref, aA as reactive, av as resolveComponent, aB as createBaseVNode } from "./vendor-q8C-Jnqr.js";
import { A as AppFormError } from "./AppFormError-6O5IOoWq.js";
import { A as AppRadioGroup } from "./AppRadioGroup-4BoZhcgd.js";
import { A as AppTextFormDescription } from "./AppTextFormDescription-n0OEZKnG.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
import "./AppIcon-7T_ar3O5.js";
import "./cva-S8v_gOEs.js";
import "./AppText-WOB7mnxh.js";
import "./AppHeightTransition-_jSF7TO-.js";
import "./AppFormLabel-ENSSOTUo.js";
import "./AppTextDescription-UY1ncTYW.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFormRadioGroup",
  props: /* @__PURE__ */ mergeModels({
    errors: { type: null, required: false, default: null },
    description: { type: [String, null], required: false, default: null },
    isTouched: { type: Boolean, required: true },
    isRequired: { type: Boolean, required: false },
    label: { type: String, required: false },
    by: { type: Function, required: false, skipCheck: true },
    items: { type: Array, required: true },
    isDisabled: { type: Boolean, required: false },
    isInvalid: { type: Boolean, required: false },
    labelKey: { type: null, required: false },
    descriptionKey: { type: null, required: false },
    disabledKey: { type: null, required: false }
  }, {
    "modelValue": {
      required: true
    },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["blur"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emits = __emit;
    const value = useModel(__props, "modelValue");
    const attrs = useAttrs();
    function onBlur() {
      emits("blur");
    }
    const isInvalid = computed(() => {
      return __props.isTouched && __props.errors != null;
    });
    const __returned__ = { emits, value, attrs, onBlur, isInvalid, AppFormError, AppRadioGroup, AppTextFormDescription };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass($setup.attrs.class)
    },
    [
      createVNode($setup["AppRadioGroup"], mergeProps({
        modelValue: $setup.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value = $event),
        label: $props.label,
        items: $props.items,
        "disabled-key": $props.disabledKey,
        "description-key": $props.descriptionKey,
        "label-key": $props.labelKey,
        by: $props.by,
        "is-disabled": $props.isDisabled,
        "is-required": $props.isRequired,
        "is-touched": $props.isTouched,
        "is-invalid": $setup.isInvalid
      }, {
        ...$setup.attrs,
        class: void 0
      }, { onBlur: $setup.onBlur }), null, 16, ["modelValue", "label", "items", "disabled-key", "description-key", "label-key", "by", "is-disabled", "is-required", "is-touched", "is-invalid"]),
      $props.description !== null ? (openBlock(), createBlock($setup["AppTextFormDescription"], {
        key: 0,
        class: "mt-1"
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
      })) : createCommentVNode("v-if", true),
      createVNode($setup["AppFormError"], {
        errors: $props.errors,
        "is-touched": $props.isTouched
      }, null, 8, ["errors", "is-touched"])
    ],
    2
    /* CLASS */
  );
}
_sfc_main$1.__file = "src/components/radio/AppFormRadioGroup.vue";
const AppFormRadioGroup = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/components/radio/AppFormRadioGroup.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppFormRadioGroup.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const radioOptions = [
      {
        label: "Option 1",
        value: "option1",
        description: "Description 1",
        isDisabled: true
      },
      {
        label: "Option 2",
        value: "option2",
        description: "Description 2"
      },
      {
        label: "Option 3",
        value: "option3",
        description: "Description 3"
      }
    ];
    const radioOption = ref(null);
    const state = reactive({
      isDisabled: false,
      isInvalid: false,
      description: "Description",
      label: "Label",
      isTouched: false,
      isRequired: false,
      errors: {
        _errors: ["This is an error"]
      }
    });
    function onBlur() {
      state.isTouched = true;
    }
    const __returned__ = { radioOptions, radioOption, state, onBlur, AppFormRadioGroup };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col justify-start gap-20 py-20" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstText = resolveComponent("HstText");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Radio/AppFormRadioGroup" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isDisabled,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.isDisabled = $event),
            title: "Disabled"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isInvalid,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.isInvalid = $event),
            title: "Invalid"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isRequired,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.isRequired = $event),
            title: "Required"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isTouched,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.state.isTouched = $event),
            title: "Is Touched"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.label,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.state.label = $event),
            title: "Label"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["AppFormRadioGroup"], mergeProps({
              modelValue: $setup.radioOption,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.radioOption = $event)
            }, $setup.state, {
              items: $setup.radioOptions,
              "disabled-key": "isDisabled",
              "description-key": "description",
              "label-key": "label",
              by: "value",
              onBlur: $setup.onBlur
            }), null, 16, ["modelValue"])
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
_sfc_main.__file = "src/components/radio/AppFormRadioGroup.story.vue";
const AppFormRadioGroup_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/radio/AppFormRadioGroup.story.vue"]]);
export {
  AppFormRadioGroup_story as default
};
