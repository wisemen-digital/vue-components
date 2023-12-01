import { au as defineComponent, av as ref, aK as reactive, aJ as resolveComponent, aw as openBlock, aI as createBlock, aE as withCtx, aD as createVNode, ay as createBaseVNode, aQ as mergeProps } from "./vendor-KTSXO9NW.js";
import { A as AppSelect } from "./AppSelect-1kqRjc0C.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-vAs4t3X_.js";
import "./popover.transition-z0jVcmyM.js";
import "./AppIcon-JFrWzaqr.js";
import "./appInput.style-c2zkxsVN.js";
import "./AppHeightTransition-nJ1Xozk9.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppSelect.story",
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
      hasMultiple: false,
      isDisabled: false,
      isInvalid: false,
      placeholder: "Placeholder"
    });
    const __returned__ = { people, selectedPerson, selectedPersons, state, AppSelect };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-row justify-start gap-2 py-20" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstText = resolveComponent("HstText");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Select/AppSelect" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isFilterable,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.isFilterable = $event),
            title: "Filterable"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.hasMultiple,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.hasMultiple = $event),
            title: "Has Multiple"
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
          createVNode(_component_HstText, {
            modelValue: $setup.state.placeholder,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.state.placeholder = $event),
            title: "Placeholder"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            !$setup.state.hasMultiple ? (openBlock(), createBlock($setup["AppSelect"], mergeProps({
              key: 0,
              modelValue: $setup.selectedPerson,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.selectedPerson = $event),
              items: $setup.people,
              "display-function": (person) => person,
              class: "w-80"
            }, $setup.state), null, 16, ["modelValue", "display-function"])) : (openBlock(), createBlock($setup["AppSelect"], mergeProps({
              key: 1,
              modelValue: $setup.selectedPersons,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.selectedPersons = $event),
              items: $setup.people,
              "display-function": (person) => person,
              class: "w-80"
            }, $setup.state), null, 16, ["modelValue", "display-function"]))
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
_sfc_main.__file = "src/components/select/AppSelect.story.vue";
const AppSelect_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/select/AppSelect.story.vue"]]);
export {
  AppSelect_story as default
};
