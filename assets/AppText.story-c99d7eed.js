import { as as defineComponent, at as reactive, au as resolveComponent, av as openBlock, aw as createBlock, ax as withCtx, ay as createVNode, aA as normalizeProps, aB as guardReactiveProps, aC as createTextVNode, aD as toDisplayString } from "./vendor-6eb796c9.js";
import { t as textBoldnessOptions, a as textTruncateOptions, b as textVariantOptions, A as AppText } from "./AppText-6715e87f.js";
import { _ as _export_sfc } from "./cva-7b83de9c.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppText.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const state = reactive({
      variant: "body",
      boldness: void 0,
      numberOfLines: void 0,
      text: "Text"
    });
    const __returned__ = { state, get textBoldnessOptions() {
      return textBoldnessOptions;
    }, get textTruncateOptions() {
      return textTruncateOptions;
    }, get textVariantOptions() {
      return textVariantOptions;
    }, AppText };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_HstTextarea = resolveComponent("HstTextarea");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "App/Text/AppText" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Default",
        "auto-props-disabled": ""
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.variant,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.variant = $event),
            title: "Variant",
            options: $setup.textVariantOptions
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.boldness,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.boldness = $event),
            title: "Boldness",
            options: ["none", ...$setup.textBoldnessOptions]
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.numberOfLines,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.numberOfLines = $event),
            title: "Number of lines",
            options: ["none", ...$setup.textTruncateOptions]
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstTextarea, {
            modelValue: $setup.state.text,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.state.text = $event),
            title: "Text"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode(
            $setup["AppText"],
            normalizeProps(guardReactiveProps($setup.state)),
            {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString($setup.state.text),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            },
            16
            /* FULL_PROPS */
          )
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/app/text/AppText.story.vue";
const AppText_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/app/text/AppText.story.vue"]]);
export {
  AppText_story as default
};
