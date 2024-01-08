import { au as defineComponent, aS as useAttrs, aw as openBlock, ax as createBlock, ay as withCtx, aH as renderSlot, aJ as normalizeClass, bp as resolveDynamicComponent } from "./vendor-Ltpks1HC.js";
import { c as cva } from "./cva-6HFULkL2.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
const variantOptions = {
  hero: "text-hero",
  title: "text-title",
  subtitle: "text-subtitle",
  heading: "text-heading",
  body: "text-body",
  subtext: "text-subtext",
  caption: "text-caption"
};
const boldnessOptions = {
  bold: "font-bold",
  normal: "font-normal",
  light: "font-light",
  thin: "font-thin",
  extrabold: "font-extrabold",
  semibold: "font-semibold",
  none: null
};
const truncateOptions = {
  1: "line-clamp-1",
  2: "line-clamp-2",
  3: "line-clamp-3",
  4: "line-clamp-4",
  5: "line-clamp-5",
  6: "line-clamp-6"
};
const textVariants = cva(
  {
    base: null,
    variants: {
      variant: variantOptions,
      boldness: boldnessOptions,
      truncate: truncateOptions
    },
    defaultVariants: {
      variant: "body",
      boldness: "none",
      truncate: void 0
    }
  }
);
const textVariantOptions = Object.keys(variantOptions);
const textBoldnessOptions = Object.keys(boldnessOptions);
const textTruncateOptions = Object.keys(truncateOptions);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppText",
  props: {
    variant: { type: null, required: false, default: "body" },
    boldness: { type: null, required: false },
    numberOfLines: { type: null, required: false },
    as: { type: String, required: false, default: "p" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const attrs = useAttrs();
    const __returned__ = { attrs, get textVariants() {
      return textVariants;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return openBlock(), createBlock(resolveDynamicComponent($props.as), {
    class: normalizeClass($setup.textVariants({ variant: $props.variant, boldness: $props.boldness, truncate: $props.numberOfLines, class: (_a = $setup.attrs) == null ? void 0 : _a.class }))
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
_sfc_main.__file = "src/components/text/AppText.vue";
const AppText = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/text/AppText.vue"]]);
export {
  AppText as A,
  textTruncateOptions as a,
  textVariantOptions as b,
  textBoldnessOptions as t
};