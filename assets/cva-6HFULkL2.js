import { bG as extendTailwindMerge, bH as defineConfig } from "./vendor-Ltpks1HC.js";
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
