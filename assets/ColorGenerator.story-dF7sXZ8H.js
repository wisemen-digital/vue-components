import { au as defineComponent, av as resolveComponent, aw as openBlock, ax as createBlock, ay as withCtx, az as createVNode } from "./vendor-1ZSCwqXN.js";
import ColorGeneratorView from "./ColorGeneratorView-rGzgfAHG.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
import "./AppInput-FRh_zW6e.js";
import "./appInput.style-MZPmqGwc.js";
import "./cva-06WGKu1x.js";
import "./AppIcon-RVR3zNXg.js";
import "./AppButton-nZ_dH1xq.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ColorGenerator.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { ColorGeneratorView };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Color Generator" }, {
    controls: withCtx(() => []),
    default: withCtx(() => [
      createVNode($setup["ColorGeneratorView"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/color-generator/views/ColorGenerator.story.vue";
const ColorGenerator_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/color-generator/views/ColorGenerator.story.vue"]]);
export {
  ColorGenerator_story as default
};
