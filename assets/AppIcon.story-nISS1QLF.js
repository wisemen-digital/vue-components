import { au as defineComponent, aA as reactive, av as resolveComponent, aw as openBlock, ax as createBlock, ay as withCtx, az as createVNode, aB as createBaseVNode, aR as mergeProps } from "./vendor-tldIp9D4.js";
import { i as iconNames, a as iconSizeOptions, A as AppIcon } from "./AppIcon-iXg__cZe.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
import "./cva-Uo0_UCxF.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppIcon.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const state = reactive({
      size: "default",
      icon: "checkmark",
      customClasses: ""
    });
    const __returned__ = { state, get iconNames() {
      return iconNames;
    }, get iconSizeOptions() {
      return iconSizeOptions;
    }, AppIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "grid h-20 w-20 place-items-center" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_HstText = resolveComponent("HstText");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Icon/AppIcon" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Default",
        "auto-props-disabled": ""
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.size,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.size = $event),
            title: "Size",
            options: $setup.iconSizeOptions
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.icon,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.icon = $event),
            title: "Variant",
            options: $setup.iconNames
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.customClasses,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.customClasses = $event),
            title: "Custom Classes"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["AppIcon"], mergeProps($setup.state, {
              class: $setup.state.customClasses
            }), null, 16, ["class"])
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
_sfc_main.__file = "src/components/icon/AppIcon.story.vue";
const AppIcon_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/icon/AppIcon.story.vue"]]);
export {
  AppIcon_story as default
};
