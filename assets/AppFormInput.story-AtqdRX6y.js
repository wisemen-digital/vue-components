import { au as defineComponent, aR as mergeModels, aS as useModel, av as ref, aT as useAttrs, aU as computed, aw as openBlock, ax as createElementBlock, aI as createBlock, aO as createCommentVNode, aD as createVNode, aE as withCtx, aN as renderSlot, aQ as mergeProps, aG as toDisplayString, aF as createTextVNode, aP as normalizeClass, aK as reactive, aJ as resolveComponent, ay as createBaseVNode } from "./vendor-rN0rsCKm.js";
import { i as iconNames } from "./AppIcon-qeCugtLx.js";
import { g as generateUuid, A as AppFormError, a as AppFormLabel } from "./AppFormLabel-2f8XORnu.js";
import { A as AppInput } from "./AppInput-menQvoQ0.js";
import { A as AppButton } from "./AppButton-qVgcc3l3.js";
import { A as AppText } from "./AppText-DATFf_rU.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-n3C_4ylN.js";
import "./AppHeightTransition-FcqAOq9j.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFormInput",
  props: mergeModels({
    errors: { type: null, required: false, default: null },
    label: { type: [String, null], required: false, default: null },
    description: { type: [String, null], required: false, default: null },
    isTouched: { type: Boolean, required: true },
    isRequired: { type: Boolean, required: false, default: false },
    type: { type: null, required: false },
    isDisabled: { type: Boolean, required: false },
    iconLeft: { type: null, required: false },
    iconRight: { type: null, required: false },
    isCompact: { type: Boolean, required: false },
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
    const id = `app-form-input-${generateUuid()}`;
    const isPasswordVisible = ref(false);
    const attrs = useAttrs();
    const isInvalid = computed(() => {
      const { errors, isTouched } = props;
      return isTouched && errors != null;
    });
    const computedValue = computed({
      get: () => value.value,
      set: (newValue) => {
        if (props.type === "number")
          value.value = newValue === "" ? "" : Number(newValue);
        else
          value.value = newValue;
      }
    });
    const computedType = computed(() => {
      const { type } = props;
      if (type === "password" && isPasswordVisible.value)
        return "text";
      return type ?? "text";
    });
    function onTogglePassword() {
      isPasswordVisible.value = !isPasswordVisible.value;
    }
    const __returned__ = { props, value, id, isPasswordVisible, attrs, isInvalid, computedValue, computedType, onTogglePassword, AppInput, AppButton, AppText, AppFormError, AppFormLabel };
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
      $props.label !== null ? (openBlock(), createBlock($setup["AppFormLabel"], {
        key: 0,
        id: $setup.id,
        "is-disabled": $props.isDisabled ?? false,
        "is-invalid": $setup.isInvalid,
        "is-required": $props.isRequired,
        label: $props.label
      }, null, 8, ["is-disabled", "is-invalid", "is-required", "label"])) : createCommentVNode("v-if", true),
      createVNode($setup["AppInput"], mergeProps({
        id: $setup.id,
        modelValue: $setup.computedValue,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.computedValue = $event)
      }, {
        ...$setup.props,
        ...$setup.attrs,
        class: void 0
      }, {
        "is-invalid": $setup.isInvalid,
        type: $setup.computedType
      }), {
        left: withCtx(() => [
          renderSlot(_ctx.$slots, "left")
        ]),
        right: withCtx(() => [
          renderSlot(_ctx.$slots, "right", {}, () => [
            $props.type === "password" ? (openBlock(), createBlock($setup["AppButton"], {
              key: 0,
              class: "scale-[85%]",
              "icon-left": $setup.isPasswordVisible ? "eyeSlash" : "eye",
              size: "icon",
              variant: "ghost",
              onClick: $setup.onTogglePassword
            }, null, 8, ["icon-left"])) : createCommentVNode("v-if", true)
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["modelValue", "is-invalid", "type"]),
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
    ],
    2
    /* CLASS */
  );
}
_sfc_main$1.__file = "src/components/input/AppFormInput.vue";
const AppFormInput = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/components/input/AppFormInput.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppFormInput.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const state = reactive({
      isDisabled: false,
      isInvalid: false,
      type: "text",
      iconLeft: void 0,
      iconRight: void 0,
      placeholder: "Placeholder",
      description: "Description",
      label: "Label",
      isTouched: false,
      isRequired: false,
      errors: {
        _errors: ["This is an error"]
      }
    });
    const value = ref("hey");
    const __returned__ = { state, value, get iconNames() {
      return iconNames;
    }, AppFormInput };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "grid w-full place-items-center" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_HstText = resolveComponent("HstText");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Input/AppFormInput" }, {
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
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.type,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.state.type = $event),
            title: "type",
            options: ["number", "date", "datetime-local", "email", "password", "text", "time"]
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.iconLeft,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.state.iconLeft = $event),
            title: "Front Icon",
            options: ["none", ...$setup.iconNames]
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.iconRight,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.state.iconRight = $event),
            title: "Back Icon",
            options: ["none", ...$setup.iconNames]
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.placeholder,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.state.placeholder = $event),
            title: "Placeholder"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.description,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.state.description = $event),
            title: "Description"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.label,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.state.label = $event),
            title: "Label"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["AppFormInput"], mergeProps($setup.state, {
              modelValue: $setup.value,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.value = $event),
              class: "w-full"
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
_sfc_main.__file = "src/components/input/AppFormInput.story.vue";
const AppFormInput_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/input/AppFormInput.story.vue"]]);
export {
  AppFormInput_story as default
};
