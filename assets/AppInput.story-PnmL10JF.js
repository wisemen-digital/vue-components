import { au as defineComponent, aA as reactive, aQ as ref, av as resolveComponent, aw as openBlock, ax as createBlock, ay as withCtx, az as createVNode, aB as createBaseVNode, aR as mergeProps } from "./vendor-8jU5NZMr.js";
import { i as iconNames } from "./AppIcon-RPJ4Te2g.js";
import { A as AppInput } from "./AppInput-xu4pygkv.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
import "./cva-0tbEyAn9.js";
import "./appInput.style-3H_5CmOH.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppInput.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const state = reactive({
      isDisabled: false,
      isInvalid: false,
      type: "text",
      iconLeft: void 0,
      iconRight: void 0,
      placeholder: "Placeholder"
    });
    const value = ref("hey");
    const __returned__ = { state, value, get iconNames() {
      return iconNames;
    }, AppInput };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "grid place-items-center" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Input/AppInput" }, {
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
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.type,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.type = $event),
            title: "type",
            options: ["number", "date", "datetime-local", "email", "password", "text", "time"]
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.iconLeft,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.state.iconLeft = $event),
            title: "Front Icon",
            options: ["none", ...$setup.iconNames]
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.iconRight,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.state.iconRight = $event),
            title: "Back Icon",
            options: ["none", ...$setup.iconNames]
          }, null, 8, ["modelValue", "options"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["AppInput"], mergeProps($setup.state, {
              modelValue: $setup.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.value = $event)
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
_sfc_main.__file = "src/components/input/AppInput.story.vue";
const AppInput_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/input/AppInput.story.vue"]]);
export {
  AppInput_story as default
};
