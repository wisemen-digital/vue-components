import { au as defineComponent, aK as reactive, av as ref, aJ as resolveComponent, aw as openBlock, aI as createBlock, aE as withCtx, aD as createVNode, ay as createBaseVNode, aQ as mergeProps } from "./vendor-KTSXO9NW.js";
import { A as AppSwitch } from "./AppSwitch-uXtah9U5.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-vAs4t3X_.js";
import "./AppIcon-JFrWzaqr.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppSwitch.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const state = reactive({
      isInvalid: false,
      isDisabled: false,
      isCheckbox: false,
      selectedBackgroundClass: "bg-primary"
    });
    const model = ref(false);
    const __returned__ = { state, model, AppSwitch };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "grid h-20 w-20 place-items-center" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstText = resolveComponent("HstText");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Switch/AppSwitch" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Default",
        "auto-props-disabled": ""
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isCheckbox,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.isCheckbox = $event),
            title: "Is Checkbox"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isDisabled,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.isDisabled = $event),
            title: "Disabled"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isInvalid,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.isInvalid = $event),
            title: "Invalid"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.selectedBackgroundClass,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.state.selectedBackgroundClass = $event),
            title: "Selected Background Class"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["AppSwitch"], mergeProps({
              modelValue: $setup.model,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.model = $event)
            }, $setup.state), null, 16, ["modelValue"])
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
_sfc_main.__file = "src/components/switch/AppSwitch.story.vue";
const AppSwitch_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/switch/AppSwitch.story.vue"]]);
export {
  AppSwitch_story as default
};
