import { bV as extendTailwindMerge, bW as defineConfig } from "./vendor-q8C-Jnqr.js";
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
