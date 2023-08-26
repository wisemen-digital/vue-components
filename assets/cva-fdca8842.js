import { bf as extendTailwindMerge, bg as defineConfig } from "./vendor-ee86d98a.js";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const twMerge = extendTailwindMerge({
  classGroups: {
    "font-size": [{ text: ["subtext", "caption", "hero", "title", "subtitle", "heading", "body"] }]
  }
});
const { cva, cx, compose } = defineConfig({
  hooks: {
    onComplete: (css) => {
      return twMerge(css);
    }
  }
});
export {
  _export_sfc as _,
  cva as c
};
