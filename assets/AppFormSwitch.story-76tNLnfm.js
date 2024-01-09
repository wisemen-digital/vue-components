import { au as defineComponent, aK as mergeModels, aL as useModel, aU as computed, aw as openBlock, aG as createElementBlock, ax as createBlock, aI as createCommentVNode, az as createVNode, aR as mergeProps, ay as withCtx, aF as toDisplayString, aE as createTextVNode, aA as reactive, aQ as ref, av as resolveComponent, aB as createBaseVNode } from "./vendor-SzL31LEx.js";
import { g as generateUuid, a as AppFormError, A as AppFormLabel } from "./AppFormError-1vfrMiaD.js";
import { A as AppText } from "./AppText-_h4M5YsZ.js";
import { A as AppSwitch } from "./AppSwitch-HwJbaiwv.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
import "./cva-zAQhILdM.js";
import "./AppIcon-9br4U6Dr.js";
import "./AppHeightTransition-BelAtwKa.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFormSwitch",
  props: /* @__PURE__ */ mergeModels({
    errors: { type: null, required: false, default: null },
    label: { type: [String, null], required: false, default: null },
    description: { type: [String, null], required: false, default: null },
    isTouched: { type: Boolean, required: true },
    isRequired: { type: Boolean, required: false, default: false },
    value: { type: null, required: false },
    isCheckbox: { type: Boolean, required: false },
    isDisabled: { type: Boolean, required: false },
    selectedBackgroundClass: { type: String, required: false },
    name: { type: String, required: false }
  }, {
    "modelValue": { type: null, skipCheck: true, ...{
      required: true
    } },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["blur", "focus"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emits = __emit;
    const value = useModel(__props, "modelValue");
    const id = `app-form-switch-${generateUuid()}`;
    const isInvalid = computed(() => {
      const { errors, isTouched } = props;
      return isTouched && errors != null;
    });
    function onBlur() {
      emits("blur");
    }
    function onFocus() {
      emits("focus");
    }
    const __returned__ = { props, emits, value, id, isInvalid, onBlur, onFocus, AppText, AppFormError, AppFormLabel, AppSwitch };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "flex flex-col" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    $props.label !== null ? (openBlock(), createBlock($setup["AppFormLabel"], {
      key: 0,
      id: $setup.id,
      "is-disabled": $props.isDisabled ?? false,
      "is-invalid": $setup.isInvalid,
      "is-required": $props.isRequired,
      label: $props.label
    }, null, 8, ["is-disabled", "is-invalid", "is-required", "label"])) : createCommentVNode("v-if", true),
    createVNode($setup["AppSwitch"], mergeProps({
      id: $setup.id,
      modelValue: $setup.value,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value = $event)
    }, $setup.props, {
      "is-invalid": $setup.isInvalid,
      onBlur: $setup.onBlur,
      onFocus: $setup.onFocus
    }), null, 16, ["modelValue", "is-invalid"]),
    $props.description !== null ? (openBlock(), createBlock($setup["AppText"], {
      key: 1,
      class: "mt-1",
      variant: "caption"
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
  ]);
}
_sfc_main$1.__file = "src/components/switch/AppFormSwitch.vue";
const AppFormSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/components/switch/AppFormSwitch.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppFormSwitch.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const state = reactive({
      isDisabled: false,
      description: "Description",
      label: "Label",
      isTouched: false,
      isRequired: false,
      errors: {
        _errors: ["This is an error"]
      },
      isCheckbox: false,
      selectedBackgroundClass: "bg-primary"
    });
    const value = ref("hey");
    const __returned__ = { state, value, AppFormSwitch };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "grid w-full max-w-max place-items-center" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstText = resolveComponent("HstText");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Switch/AppFormSwitch" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Default",
        "auto-props-disabled": ""
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isDisabled,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.isDisabled = $event),
            title: "Disabled"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isRequired,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.isRequired = $event),
            title: "Required"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isTouched,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.isTouched = $event),
            title: "Is Touched"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isCheckbox,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.state.isCheckbox = $event),
            title: "Is Checkbox"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.selectedBackgroundClass,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.state.selectedBackgroundClass = $event),
            title: "Selected Background Class"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.description,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.state.description = $event),
            title: "Description"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.label,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.state.label = $event),
            title: "Label"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["AppFormSwitch"], mergeProps($setup.state, {
              modelValue: $setup.value,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.value = $event),
              class: "w-full",
              onBlur: _cache[8] || (_cache[8] = ($event) => $setup.state.isTouched = true)
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
_sfc_main.__file = "src/components/switch/AppFormSwitch.story.vue";
const AppFormSwitch_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/switch/AppFormSwitch.story.vue"]]);
export {
  AppFormSwitch_story as default
};
