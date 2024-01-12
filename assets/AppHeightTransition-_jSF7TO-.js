import { au as defineComponent, bt as useCssVars, aU as computed, aw as openBlock, ax as createBlock, ay as withCtx, aH as renderSlot, aN as Transition } from "./vendor-q8C-Jnqr.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppHeightTransition",
  props: {
    duration: { type: Number, required: false, default: 0.5 }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    useCssVars((_ctx) => ({
      "756b8e16-durationString": durationString.value
    }));
    const props = __props;
    const durationString = computed(() => `${props.duration}s`);
    function enter(element) {
      const htmlElement = element;
      const width = getComputedStyle(htmlElement).width;
      htmlElement.style.width = width;
      htmlElement.style.position = "absolute";
      htmlElement.style.visibility = "hidden";
      htmlElement.style.height = "auto";
      const height = getComputedStyle(htmlElement).height;
      htmlElement.style.width = "";
      htmlElement.style.position = "";
      htmlElement.style.visibility = "";
      htmlElement.style.height = "";
      getComputedStyle(htmlElement);
      requestAnimationFrame(() => {
        htmlElement.style.height = height;
      });
    }
    function afterEnter(element) {
      const htmlElement = element;
      htmlElement.style.height = "auto";
    }
    function leave(element) {
      const htmlElement = element;
      const height = getComputedStyle(htmlElement).height;
      htmlElement.style.height = height;
      getComputedStyle(htmlElement);
      requestAnimationFrame(() => {
        htmlElement.style.height = "0";
      });
    }
    const __returned__ = { props, durationString, enter, afterEnter, leave };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "expand",
    onAfterEnter: $setup.afterEnter,
    onEnter: $setup.enter,
    onLeave: $setup.leave
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main.__file = "src/components/transitions/AppHeightTransition.vue";
const AppHeightTransition = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-756b8e16"], ["__file", "/home/runner/work/vue-components/vue-components/src/components/transitions/AppHeightTransition.vue"]]);
export {
  AppHeightTransition as A
};
