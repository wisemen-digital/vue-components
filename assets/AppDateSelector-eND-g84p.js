import { au as defineComponent, aK as mergeModels, aL as useModel, aT as ja, aw as openBlock, aG as createElementBlock, aI as createCommentVNode, az as createVNode, ay as withCtx, aH as renderSlot, aP as Fragment } from "./vendor-tldIp9D4.js";
import { A as AppIcon } from "./AppIcon-iXg__cZe.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppDateSelector",
  props: /* @__PURE__ */ mergeModels({
    isRange: { type: null, required: false, default: false },
    isTimePicker: { type: Boolean, required: false, default: false },
    isMonthPicker: { type: Boolean, required: false, default: false },
    isYearPicker: { type: Boolean, required: false, default: false },
    isWeekPicker: { type: Boolean, required: false, default: false },
    hasTimePicker: { type: Boolean, required: false, default: false },
    isInput: { type: Boolean, required: false, default: false },
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
  emits: /* @__PURE__ */ mergeModels(["close"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emits = __emit;
    const date = useModel(__props, "modelValue");
    function handleClose() {
      emits("close");
    }
    const __returned__ = { emits, date, handleClose, get VueDatePicker() {
      return ja;
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
      createVNode($setup["VueDatePicker"], {
        modelValue: $setup.date,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.date = $event),
        "time-picker": $props.isTimePicker,
        "month-picker": $props.isMonthPicker,
        "year-picker": $props.isYearPicker,
        "week-picker": $props.isWeekPicker,
        range: $props.isRange,
        inline: !$props.isInput,
        "allowed-dates": $props.allowedDates,
        "auto-range": $props.autoRange,
        "disabled-dates": $props.disabledDates,
        "disabled-week-days": $props.disabledWeekDays,
        filters: $props.filters,
        flow: $props.flow,
        "enable-time-picker": $props.hasTimePicker,
        "min-range": $props.minRange,
        "max-range": $props.maxRange,
        "min-date": $props.minDate,
        "max-date": $props.maxDate,
        "start-date": $props.startDate,
        "end-date": $props.endDate,
        "year-range": $props.yearRange,
        clearable: false,
        teleport: "body",
        "is-24": "",
        "auto-apply": "",
        "no-disabled-range": "",
        "ignore-time-validation": !$props.hasTimePicker,
        "hide-input-icon": true,
        transitions: {
          // @ts-expect-error - This works but the library typing is wrong
          menuAppearTop: "popover",
          menuAppearBottom: "popover"
        },
        onClosed: $setup.handleClose
      }, {
        "dp-input": withCtx(({
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
          renderSlot(_ctx.$slots, "input", {
            value,
            onInput,
            onEnter,
            onTab,
            onBlur,
            onKeypress,
            onPaste,
            onClear,
            isMenuOpen
          })
        ]),
        "calendar-icon": withCtx(() => [
          createVNode($setup["AppIcon"], { icon: "calendar" })
        ]),
        "input-icon": withCtx(() => [
          createVNode($setup["AppIcon"], { icon: "calendar" })
        ]),
        "clear-icon": withCtx(() => [
          createVNode($setup["AppIcon"], { icon: "close" })
        ]),
        "arrow-left": withCtx(() => [
          createVNode($setup["AppIcon"], { icon: "chevronLeft" })
        ]),
        "arrow-right": withCtx(() => [
          createVNode($setup["AppIcon"], { icon: "chevronRight" })
        ]),
        "arrow-up": withCtx(() => [
          createVNode($setup["AppIcon"], { icon: "chevronUp" })
        ]),
        "arrow-down": withCtx(() => [
          createVNode($setup["AppIcon"], { icon: "chevronDown" })
        ]),
        "clock-icon": withCtx(() => [
          createVNode($setup["AppIcon"], { icon: "clock" })
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["modelValue", "time-picker", "month-picker", "year-picker", "week-picker", "range", "inline", "allowed-dates", "auto-range", "disabled-dates", "disabled-week-days", "filters", "flow", "enable-time-picker", "min-range", "max-range", "min-date", "max-date", "start-date", "end-date", "year-range", "ignore-time-validation"])
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
_sfc_main.__file = "src/components/datepicker/AppDateSelector.vue";
const AppDateSelector = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/datepicker/AppDateSelector.vue"]]);
export {
  AppDateSelector as A
};
