import { au as defineComponent, aQ as ref, aA as reactive, av as resolveComponent, aw as openBlock, ax as createBlock, ay as withCtx, az as createVNode, aB as createBaseVNode, aR as mergeProps } from "./vendor-8jU5NZMr.js";
import { A as AppRadioGroup } from "./AppRadioGroup-l4iHaHgm.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
import "./AppFormLabel-3rZfdlnQ.js";
import "./cva-0tbEyAn9.js";
import "./AppTextDescription-TNsMQrLk.js";
import "./AppText-E-t-VtMs.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppRadioGroup.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const radioOptions = [
      {
        label: "Option 1",
        value: "option1",
        description: "Description 1",
        isDisabled: true
      },
      {
        label: "Option 2",
        value: "option2",
        description: "Description 2"
      },
      {
        label: "Option 3",
        value: "option3",
        description: "Description 3"
      }
    ];
    const radioOption = ref(null);
    const state = reactive({
      isDisabled: false,
      isInvalid: false,
      description: "Description",
      label: "Label"
    });
    const __returned__ = { radioOptions, radioOption, state, AppRadioGroup };
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
  return openBlock(), createBlock(_component_Story, { title: "Radio/AppRadioGroup" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
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
          createVNode(_component_HstText, {
            modelValue: $setup.state.label,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.label = $event),
            title: "Label"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["AppRadioGroup"], mergeProps({
              modelValue: $setup.radioOption,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.radioOption = $event)
            }, $setup.state, {
              items: $setup.radioOptions,
              "disabled-key": "isDisabled",
              "description-key": "description",
              "label-key": "label",
              by: "value"
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
_sfc_main.__file = "src/components/radio/AppRadioGroup.story.vue";
const AppRadioGroup_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/radio/AppRadioGroup.story.vue"]]);
export {
  AppRadioGroup_story as default
};
