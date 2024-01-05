import { au as defineComponent, aK as mergeModels, aL as useModel, av as resolveComponent, aw as openBlock, aG as createElementBlock, aI as createCommentVNode, az as createVNode, ay as withCtx, aM as withKeys, aN as Transition, aD as guardReactiveProps, aC as normalizeProps, aO as withModifiers, aP as Fragment, aQ as ref, aA as reactive, ax as createBlock, aB as createBaseVNode, aR as mergeProps } from "./vendor-1ZSCwqXN.js";
import { A as AppDateSelector } from "./AppDateSelector-0RvFNl3w.js";
import { A as AppInput } from "./AppInput-FRh_zW6e.js";
import { f as fadeTransition } from "./fade.transition-rZvlSn0c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
import "./AppIcon-RVR3zNXg.js";
import "./cva-06WGKu1x.js";
import "./appInput.style-MZPmqGwc.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppDatePicker",
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
    disabledWeekDays: { type: Array, required: false }
  }, {
    "modelValue": {
      default: null
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const date = useModel(__props, "modelValue");
    const __returned__ = { date, AppDateSelector, AppInput, get fadeTransition() {
      return fadeTransition;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { key: 0 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppIcon = resolveComponent("AppIcon");
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
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
        "is-input": ""
      }, {
        input: withCtx(({
          value,
          onInput,
          onEnter,
          onTab,
          onBlur,
          onKeypress,
          onPaste,
          onClear,
          isMenuOpen
        }) => [
          createVNode($setup["AppInput"], {
            "icon-left": "calendar",
            "model-value": value,
            "is-readonly": "",
            "is-outside-focused": isMenuOpen,
            onInput,
            onKeydown: [
              withKeys(onEnter, ["enter"]),
              withKeys(onTab, ["tab"])
            ],
            onBlur,
            onKeypress,
            onPaste
          }, {
            right: withCtx(() => [
              createVNode(
                Transition,
                normalizeProps(guardReactiveProps($setup.fadeTransition)),
                {
                  default: withCtx(() => [
                    value ? (openBlock(), createElementBlock("button", _hoisted_1$1, [
                      createVNode(_component_AppIcon, {
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
          }, 1032, ["model-value", "is-outside-focused", "onInput", "onKeydown", "onBlur", "onKeypress", "onPaste"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "has-time-picker", "is-month-picker", "is-range", "is-time-picker", "is-week-picker", "is-year-picker", "allowed-dates", "auto-range", "disabled-dates", "disabled-week-days", "end-date", "filters", "flow", "max-date", "max-range", "min-date", "min-range", "start-date", "year-range"])
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
_sfc_main$1.__file = "src/components/datepicker/AppDatePicker.vue";
const AppDatePicker = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/components/datepicker/AppDatePicker.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppDatePicker.story",
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
    const __returned__ = { date, state, AppDatePicker };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "grid place-items-center" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstText = resolveComponent("HstText");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "DatePicker/AppDatepicker" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Default",
        "auto-props-disabled": ""
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.state.placeholder,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.placeholder = $event),
            title: "Placeholder"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["AppDatePicker"], mergeProps($setup.state, {
              modelValue: $setup.date,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.date = $event),
              onBlur: _cache[2] || (_cache[2] = ($event) => $setup.state.isTouched = true)
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
_sfc_main.__file = "src/components/datepicker/AppDatePicker.story.vue";
const AppDatePicker_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/datepicker/AppDatePicker.story.vue"]]);
export {
  AppDatePicker_story as default
};
