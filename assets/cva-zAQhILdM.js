import { bP as extendTailwindMerge, bQ as defineConfig } from "./vendor-SzL31LEx.js";
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
export {
  cva as c,
  twMerge as t
};
