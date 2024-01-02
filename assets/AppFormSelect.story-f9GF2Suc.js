import { au as defineComponent, aR as mergeModels, aS as useModel, aT as useAttrs, aU as computed, aw as openBlock, ax as createElementBlock, aI as createBlock, aO as createCommentVNode, aD as createVNode, aQ as mergeProps, aE as withCtx, aG as toDisplayString, aF as createTextVNode, aP as normalizeClass, av as ref, aK as reactive, aJ as resolveComponent, ay as createBaseVNode } from "./vendor-1dywJ39j.js";
import { g as generateUuid, a as AppFormLabel, A as AppFormError } from "./AppFormLabel-blFwKsTK.js";
import { A as AppSelect } from "./AppSelect-wAYeZxY8.js";
import { A as AppText } from "./AppText-WepcGFA0.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-slJWkzW1.js";
import "./AppIcon-xwNDGklI.js";
import "./AppHeightTransition-bqnTh3G1.js";
import "./popover.transition-z0jVcmyM.js";
import "./appInput.style-s-HgGmHs.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFormSelect",
  props: /* @__PURE__ */ mergeModels({
    errors: { type: null, required: false, default: null },
    label: { type: [String, null], required: false, default: null },
    description: { type: [String, null], required: false, default: null },
    isTouched: { type: Boolean, required: true },
    isRequired: { type: Boolean, required: false, default: false },
    displayFunction: { type: Function, required: false },
    keyValue: { type: null, required: false },
    items: { type: Array, required: true },
    isDisabled: { type: Boolean, required: false },
    placeholder: { type: String, required: false },
    isFilterable: { type: Boolean, required: false },
    isInvalid: { type: Boolean, required: false }
  }, {
    "modelValue": { type: Array, skipCheck: true, ...{
      required: true
    } },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["blur"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emits = __emit;
    const value = useModel(__props, "modelValue");
    const id = `app-form-select-${generateUuid()}`;
    const attrs = useAttrs();
    function onHide() {
      emits("blur");
    }
    const isInvalid = computed(() => {
      return __props.isTouched && __props.errors != null;
    });
    const __returned__ = { emits, value, id, attrs, onHide, isInvalid, AppFormLabel, AppSelect, AppText, AppFormError };
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
        "is-required": $props.isRequired,
        label: $props.label
      }, null, 8, ["is-disabled", "is-required", "label"])) : createCommentVNode("v-if", true),
      createVNode($setup["AppSelect"], mergeProps({
        id: $setup.id,
        modelValue: $setup.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value = $event),
        items: $props.items,
        placeholder: $props.placeholder,
        "is-filterable": $props.isFilterable,
        "key-value": $props.keyValue,
        "is-disabled": $props.isDisabled,
        "display-function": $props.displayFunction,
        "is-touched": $props.isTouched,
        "is-invalid": $setup.isInvalid
      }, {
        ...$setup.attrs,
        class: void 0
      }, { onHide: $setup.onHide }), null, 16, ["modelValue", "items", "placeholder", "is-filterable", "key-value", "is-disabled", "display-function", "is-touched", "is-invalid"]),
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
_sfc_main$1.__file = "src/components/select/AppFormSelect.vue";
const AppFormSelect = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/components/select/AppFormSelect.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppFormSelect.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const people = [
      "Durward Reynolds",
      "Kenton Towne",
      "Therese Wunsch",
      "Benedict Kessler",
      "Katelyn Rohan"
    ];
    const selectedPerson = ref("");
    const selectedPersons = ref([]);
    const state = reactive({
      isFilterable: false,
      isDisabled: false,
      hasMultiple: false,
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
    function onBlur() {
      state.isTouched = true;
    }
    const __returned__ = { people, selectedPerson, selectedPersons, state, onBlur, AppFormSelect };
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
  return openBlock(), createBlock(_component_Story, { title: "Select/AppFormSelect" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.hasMultiple,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.hasMultiple = $event),
            title: "Has Multiple"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isFilterable,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.isFilterable = $event),
            title: "Filterable"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isDisabled,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.isDisabled = $event),
            title: "Disabled"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isInvalid,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.state.isInvalid = $event),
            title: "Invalid"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isRequired,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.state.isRequired = $event),
            title: "Required"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isTouched,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.state.isTouched = $event),
            title: "Is Touched"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.placeholder,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.state.placeholder = $event),
            title: "Placeholder"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.description,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.state.description = $event),
            title: "Description"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.label,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.state.label = $event),
            title: "Label"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            !$setup.state.hasMultiple ? (openBlock(), createBlock($setup["AppFormSelect"], mergeProps({
              key: 0,
              modelValue: $setup.selectedPerson,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.selectedPerson = $event),
              items: $setup.people
            }, $setup.state, {
              "display-function": (person) => person,
              class: "w-80",
              onBlur: $setup.onBlur
            }), null, 16, ["modelValue", "display-function"])) : (openBlock(), createBlock($setup["AppFormSelect"], mergeProps({
              key: 1,
              modelValue: $setup.selectedPersons,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.selectedPersons = $event),
              items: $setup.people
            }, $setup.state, {
              "display-function": (person) => person,
              class: "w-80",
              onBlur: $setup.onBlur
            }), null, 16, ["modelValue", "display-function"]))
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
_sfc_main.__file = "src/components/select/AppFormSelect.story.vue";
const AppFormSelect_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/select/AppFormSelect.story.vue"]]);
export {
  AppFormSelect_story as default
};
