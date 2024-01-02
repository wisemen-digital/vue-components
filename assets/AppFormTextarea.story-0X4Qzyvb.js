import { au as defineComponent, aR as mergeModels, aS as useModel, aT as useAttrs, aU as computed, aw as openBlock, ax as createElementBlock, aI as createBlock, aO as createCommentVNode, az as withDirectives, aH as vModelText, ay as createBaseVNode, aQ as mergeProps, aD as createVNode, aK as reactive, av as ref, aJ as resolveComponent, aE as withCtx } from "./vendor-1dywJ39j.js";
import { i as iconNames } from "./AppIcon-xwNDGklI.js";
import { c as cva, _ as _export_sfc } from "./_plugin-vue_export-helper-slJWkzW1.js";
import { g as generateUuid, A as AppFormError, a as AppFormLabel } from "./AppFormLabel-blFwKsTK.js";
import "./AppText-WepcGFA0.js";
import "./AppHeightTransition-bqnTh3G1.js";
const textarea = cva({
  base: "w-full rounded-input border border-solid border-input-border bg-background p-3 text-subtext text-input-foreground shadow-input-shadow ring-offset-background transition duration-100 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed",
  variants: {
    isDisabled: {
      true: "bg-input-disabled opacity-50"
    },
    isInvalid: {
      true: "!border-destructive text-destructive focus-visible:ring-destructive"
    }
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFormTextarea",
  props: /* @__PURE__ */ mergeModels({
    errors: { type: null, required: false },
    label: { type: [String, null], required: false, default: null },
    isTouched: { type: Boolean, required: true },
    isRequired: { type: Boolean, required: false, default: false },
    isDisabled: { type: Boolean, required: false, default: false },
    resize: { type: String, required: false, default: "none" },
    heightClass: { type: String, required: false }
  }, {
    "modelValue": { type: String, skipCheck: true, ...{
      required: true
    } },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const value = useModel(__props, "modelValue");
    const id = `app-form-input-${generateUuid()}`;
    const attrs = useAttrs();
    const isInvalid = computed(() => {
      const { errors, isTouched } = props;
      return isTouched && errors != null;
    });
    const textareaAttrs = computed(() => ({
      ...props,
      ...attrs,
      class: void 0
    }));
    const textareaClasses = computed(() => {
      const { isDisabled } = props;
      return textarea({
        isDisabled,
        isInvalid: isInvalid.value
      });
    });
    const __returned__ = { props, value, id, attrs, isInvalid, textareaAttrs, textareaClasses, AppFormError, AppFormLabel };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = ["disabled"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    $props.label !== null ? (openBlock(), createBlock($setup["AppFormLabel"], {
      key: 0,
      id: $setup.id,
      "is-disabled": $props.isDisabled ?? false,
      "is-invalid": $setup.isInvalid,
      "is-required": $props.isRequired,
      label: $props.label
    }, null, 8, ["is-disabled", "is-invalid", "is-required", "label"])) : createCommentVNode("v-if", true),
    withDirectives(createBaseVNode("textarea", mergeProps({
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value = $event)
    }, $setup.textareaAttrs, {
      class: [
        $setup.textareaClasses,
        $props.heightClass,
        {
          "resize-none": $props.resize === "none",
          "resize-vertical": $props.resize === "vertical",
          "resize-horizontal": $props.resize === "horizontal",
          "resize-both": $props.resize === "both"
        }
      ],
      disabled: $props.isDisabled
    }), null, 16, _hoisted_1$1), [
      [vModelText, $setup.value]
    ]),
    createVNode($setup["AppFormError"], {
      errors: $props.errors,
      "is-touched": $props.isTouched
    }, null, 8, ["errors", "is-touched"])
  ]);
}
_sfc_main$1.__file = "src/components/input/AppFormTextarea.vue";
const AppFormTextarea = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/components/input/AppFormTextarea.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppFormTextarea.story",
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
    }, AppFormTextarea };
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
  return openBlock(), createBlock(_component_Story, { title: "Input/AppFormTextarea" }, {
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
            createVNode($setup["AppFormTextarea"], mergeProps($setup.state, {
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
_sfc_main.__file = "src/components/input/AppFormTextarea.story.vue";
const AppFormTextarea_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/input/AppFormTextarea.story.vue"]]);
export {
  AppFormTextarea_story as default
};
