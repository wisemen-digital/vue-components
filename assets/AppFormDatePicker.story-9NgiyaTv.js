import { au as defineComponent, aK as mergeModels, aS as useAttrs, aL as useModel, aw as openBlock, aG as createElementBlock, ax as createBlock, aI as createCommentVNode, az as createVNode, ay as withCtx, aM as withKeys, aR as mergeProps, aN as Transition, aD as guardReactiveProps, aC as normalizeProps, aO as withModifiers, aF as toDisplayString, aE as createTextVNode, aJ as normalizeClass, aQ as ref, aA as reactive, av as resolveComponent, aB as createBaseVNode } from "./vendor-q8C-Jnqr.js";
import { A as AppDateSelector } from "./AppDateSelector-EpTdyqG2.js";
import { f as fadeTransition } from "./fade.transition-rZvlSn0c.js";
import { A as AppIcon } from "./AppIcon-7T_ar3O5.js";
import { u as useFormInput } from "./useFormInput-_Cf0VQIW.js";
import { A as AppInput } from "./AppInput-86zZxJlb.js";
import { A as AppFormLabel } from "./AppFormLabel-ENSSOTUo.js";
import { A as AppFormError } from "./AppFormError-6O5IOoWq.js";
import { A as AppTextFormDescription } from "./AppTextFormDescription-n0OEZKnG.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
import "./cva-S8v_gOEs.js";
import "./appInput.style-fKX4bcrM.js";
import "./AppText-WOB7mnxh.js";
import "./AppHeightTransition-_jSF7TO-.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFormDatePicker",
  props: /* @__PURE__ */ mergeModels({
    isRange: { type: null, required: false, default: false },
    isTimePicker: { type: Boolean, required: false, default: false },
    isMonthPicker: { type: Boolean, required: false, default: false },
    isYearPicker: { type: Boolean, required: false, default: false },
    isWeekPicker: { type: Boolean, required: false, default: false },
    hasTimePicker: { type: Boolean, required: false, default: false },
    minRange: { type: Number, required: false },
    maxRange: { type: Number, required: false },
    autoRange: { type: Number, required: false },
    minDate: { type: Date, required: false },
    maxDate: { type: Date, required: false },
    flow: { type: Array, required: false },
    startDate: { type: Date, required: false },
    endDate: { type: Date, required: false },
    filters: { type: Object, required: false },
    yearRange: { type: Array, required: false },
    allowedDates: { type: Array, required: false },
    disabledDates: { type: Array, required: false },
    disabledWeekDays: { type: Array, required: false },
    errors: { type: null, required: false, default: null },
    label: { type: [String, null], required: false, default: null },
    description: { type: [String, null], required: false, default: null },
    isTouched: { type: Boolean, required: true },
    isRequired: { type: Boolean, required: false, default: false },
    type: { type: null, required: false },
    isDisabled: { type: Boolean, required: false },
    isReadonly: { type: Boolean, required: false },
    iconLeft: { type: null, required: false },
    iconRight: { type: null, required: false },
    isCompact: { type: Boolean, required: false },
    isOutsideFocused: { type: Boolean, required: false }
  }, {
    "modelValue": {
      default: null
    },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["blur"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emits = __emit;
    const attrs = useAttrs();
    const date = useModel(__props, "modelValue");
    const { id, isInvalid } = useFormInput({
      isTouched: () => __props.isTouched,
      errors: () => __props.errors,
      type: __props.type ?? "text",
      value: date
    });
    function handleBlur(isOpen) {
      if (!isOpen)
        emits("blur");
    }
    function handleClose() {
      emits("blur");
    }
    const __returned__ = { emits, attrs, date, id, isInvalid, handleBlur, handleClose, AppDateSelector, get fadeTransition() {
      return fadeTransition;
    }, AppIcon, AppInput, AppFormLabel, AppFormError, AppTextFormDescription };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { key: 0 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["w-full", $setup.attrs.class])
    },
    [
      $props.label !== null ? (openBlock(), createBlock($setup["AppFormLabel"], {
        key: 0,
        id: $setup.id,
        "is-disabled": $props.isDisabled ?? false,
        "is-invalid": $setup.isInvalid,
        "is-required": $props.isRequired,
        label: $props.label
      }, null, 8, ["id", "is-disabled", "is-invalid", "is-required", "label"])) : createCommentVNode("v-if", true),
      createCommentVNode(" eslint-disable vue/valid-v-model "),
      createVNode($setup["AppDateSelector"], {
        modelValue: $setup.date,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.date = $event),
        "has-time-picker": $props.hasTimePicker,
        "is-month-picker": $props.isMonthPicker,
        "is-range": $props.isRange,
        "is-time-picker": $props.isTimePicker,
        "is-week-picker": $props.isWeekPicker,
        "is-year-picker": $props.isYearPicker,
        "allowed-dates": $props.allowedDates,
        "auto-range": $props.autoRange,
        "disabled-dates": $props.disabledDates,
        "disabled-week-days": $props.disabledWeekDays,
        "end-date": $props.endDate,
        filters: $props.filters,
        flow: $props.flow,
        "max-date": $props.maxDate,
        "max-range": $props.maxRange,
        "min-date": $props.minDate,
        "min-range": $props.minRange,
        "start-date": $props.startDate,
        "year-range": $props.yearRange,
        "is-input": "",
        onClose: $setup.handleClose
      }, {
        input: withCtx(({
          value,
          onInput,
          onEnter,
          onTab,
          onKeypress,
          onPaste,
          onClear,
          isMenuOpen
        }) => [
          createVNode($setup["AppInput"], mergeProps({
            ...$setup.attrs,
            onBlur: void 0
          }, {
            "icon-left": "calendar",
            "model-value": value,
            "is-invalid": $setup.isInvalid,
            "is-readonly": "",
            "is-outside-focused": isMenuOpen,
            type: "text",
            onInput,
            onKeydown: [
              withKeys(onEnter, ["enter"]),
              withKeys(onTab, ["tab"])
            ],
            onKeypress,
            onPaste,
            onBlur: ($event) => $setup.handleBlur(isMenuOpen)
          }), {
            right: withCtx(() => [
              createVNode(
                Transition,
                normalizeProps(guardReactiveProps($setup.fadeTransition)),
                {
                  default: withCtx(() => [
                    value ? (openBlock(), createElementBlock("button", _hoisted_1$1, [
                      createVNode($setup["AppIcon"], {
                        icon: "close",
                        class: "h-4 px-2",
                        onClick: withModifiers(onClear, ["stop"])
                      }, null, 8, ["onClick"])
                    ])) : createCommentVNode("v-if", true)
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1040
                /* FULL_PROPS, DYNAMIC_SLOTS */
              )
            ]),
            _: 2
            /* DYNAMIC */
          }, 1040, ["model-value", "is-invalid", "is-outside-focused", "onInput", "onKeydown", "onKeypress", "onPaste", "onBlur"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "has-time-picker", "is-month-picker", "is-range", "is-time-picker", "is-week-picker", "is-year-picker", "allowed-dates", "auto-range", "disabled-dates", "disabled-week-days", "end-date", "filters", "flow", "max-date", "max-range", "min-date", "min-range", "start-date", "year-range"]),
      $props.description !== null ? (openBlock(), createBlock($setup["AppTextFormDescription"], {
        key: 1,
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
_sfc_main$1.__file = "src/components/datepicker/AppFormDatePicker.vue";
const AppFormDatePicker = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/components/datepicker/AppFormDatePicker.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppFormDatePicker.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const date = ref(null);
    const state = reactive({
      isDisabled: false,
      isInvalid: false,
      placeholder: "Placeholder",
      description: "Description",
      label: "Label",
      isTouched: false,
      isRequired: false,
      errors: {
        _errors: ["This is an error"]
      }
    });
    const __returned__ = { date, state, AppFormDatePicker };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "grid place-items-center" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstText = resolveComponent("HstText");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "DatePicker/AppFormDatePicker" }, {
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
          createVNode(_component_HstText, {
            modelValue: $setup.state.placeholder,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.state.placeholder = $event),
            title: "Placeholder"
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
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.placeholder,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.state.placeholder = $event),
            title: "Placeholder"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["AppFormDatePicker"], mergeProps($setup.state, {
              modelValue: $setup.date,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.date = $event),
              onBlur: _cache[9] || (_cache[9] = ($event) => $setup.state.isTouched = true)
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
_sfc_main.__file = "src/components/datepicker/AppFormDatePicker.story.vue";
const AppFormDatePicker_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/datepicker/AppFormDatePicker.story.vue"]]);
export {
  AppFormDatePicker_story as default
};
