import { bo as extendTailwindMerge, bp as defineConfig } from "./vendor-KTSXO9NW.js";
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["subtext", "caption", "hero", "title", "subtitle", "heading", "body"] }]
    }
  }
});
const { cva, cx, compose } = defineConfig({
  hooks: {
    onComplete: (css) => {
      return twMerge(css);
    }
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
export {
  _export_sfc as _,
  cva as c,
  twMerge as t
};
