import { au as defineComponent, av as ref, aw as openBlock, ax as createElementBlock, ay as createBaseVNode, az as withDirectives, aA as vModelCheckbox, aB as Fragment, aC as renderList, aD as createVNode, aE as withCtx, aF as createTextVNode, aG as toDisplayString, aH as vModelText, aI as createBlock, aJ as resolveComponent } from "./vendor-rN0rsCKm.js";
import { A as AppInput } from "./AppInput-menQvoQ0.js";
import { A as AppButton } from "./AppButton-qVgcc3l3.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-n3C_4ylN.js";
import "./AppIcon-qeCugtLx.js";
function mapCssVariableToHsl({ name, value }) {
  const cssVariableArray = value.split(" ");
  const hue = cssVariableArray[0];
  const saturation = cssVariableArray[1];
  const lightness = cssVariableArray[2];
  const hsl = `hsl(${hue}, ${saturation}, ${lightness})`;
  return {
    name,
    value: hsl
  };
}
function hslToHex(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
function getHslValues(hsl) {
  const hslArray = hsl.split(",");
  const hue = hslArray[0];
  const saturation = hslArray[1];
  const lightness = hslArray[2];
  const hueValue = hue.replace("hsl(", "").trim();
  const saturationValue = saturation.replace("%", "").trim();
  const lightnessValue = lightness.replace("%", "").replace(")", "").trim();
  return {
    h: Number(hueValue),
    s: Number(saturationValue),
    l: Number(lightnessValue)
  };
}
function mapHslToHex({ name, value }) {
  const { h, s, l } = getHslValues(value);
  const hex = hslToHex(h, s, l);
  return {
    name,
    value: hex
  };
}
function hexToHSL(H) {
  let r = 0;
  let g = 0;
  let b = 0;
  if (H.length === 4) {
    r = Number(`0x${H[1]}${H[1]}`);
    g = Number(`0x${H[2]}${H[2]}`);
    b = Number(`0x${H[3]}${H[3]}`);
  } else if (H.length === 7) {
    r = Number(`0x${H[1]}${H[2]}`);
    g = Number(`0x${H[3]}${H[4]}`);
    b = Number(`0x${H[5]}${H[6]}`);
  }
  r /= 255;
  g /= 255;
  b /= 255;
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;
  if (delta === 0)
    h = 0;
  else if (cmax === r)
    h = (g - b) / delta % 6;
  else if (cmax === g)
    h = (b - r) / delta + 2;
  else
    h = (r - g) / delta + 4;
  h = Math.round(h * 60);
  if (h < 0)
    h += 360;
  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);
  return `hsl(${h},${s}%,${l}%)`;
}
function hexToCssVar(hex) {
  const hsl = hexToHSL(hex);
  const hslArray = hsl.split(",");
  const hue = hslArray[0];
  const saturation = hslArray[1];
  const lightness = hslArray[2];
  const hueValue = hue.replace("hsl(", "").trim();
  const saturationValue = saturation.replace("%", "").trim();
  const lightnessValue = lightness.replace("%", "").replace(")", "").trim();
  return `${hueValue} ${saturationValue}% ${lightnessValue}%`;
}
function mapCssVariablesIntoArray(globalsCss) {
  const globalsCssArray = globalsCss.split("\n");
  const globalsCssArrayFiltered = globalsCssArray.filter((item) => item.includes("--")).map((item) => item.trim().replace(";", "").split(":")).map((item) => {
    return {
      name: item[0].trim(),
      value: item[1].trim()
    };
  });
  return globalsCssArrayFiltered;
}
function convertCssIntoVariables(globalsCss) {
  const keyValueCssVariables = mapCssVariablesIntoArray(globalsCss ?? "");
  const colorValues = keyValueCssVariables.filter((item) => item.value.includes("%"));
  const hslCssVariables = colorValues.map(mapCssVariableToHsl).map(mapHslToHex);
  const otherValues = keyValueCssVariables.filter((item) => !item.value.includes("%"));
  return {
    hslCssVariables,
    otherValues
  };
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ColorGeneratorView",
  setup(__props, { expose: __expose }) {
    __expose();
    async function getGlobalConfig() {
      const response = await fetch("https://wisemen-digital.github.io/vue-components/api/globalConfig.json");
      const json = await response.json();
      return json;
    }
    const globalsCss = ref();
    const defaultValues = ref();
    const hslCssVariables = ref();
    const otherValues = ref();
    async function init() {
      var _a, _b, _c;
      const response = await getGlobalConfig();
      globalsCss.value = (_c = (_b = (_a = response == null ? void 0 : response.find((item) => item.name === "TailwindConfig")) == null ? void 0 : _a.files) == null ? void 0 : _b.find((item) => item.name === "globals.css")) == null ? void 0 : _c.content;
      defaultValues.value = convertCssIntoVariables(globalsCss.value);
      hslCssVariables.value = defaultValues.value.hslCssVariables;
      otherValues.value = defaultValues.value.otherValues;
    }
    init();
    const useColorInput = ref(false);
    function generateCss() {
      if (!hslCssVariables.value || !otherValues.value)
        return "";
      const cssVariables = [...hslCssVariables.value.map((hsl) => ({
        name: hsl.name,
        value: hexToCssVar(hsl.value)
      })), ...otherValues.value];
      return cssVariables.reduce((acc, cssVariable) => {
        return `${acc}
${cssVariable.name}: ${cssVariable.value};`;
      }, "");
    }
    function handleDownloadCss() {
      const css = generateCss();
      const element = document.createElement("a");
      element.setAttribute("href", `data:text/css;charset=utf-8,${encodeURIComponent(css)}`);
      element.setAttribute("download", "globalConfig.css");
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
    function handleCssUpload(event) {
      var _a, _b;
      const file = (_b = (_a = event == null ? void 0 : event.target) == null ? void 0 : _a.files) == null ? void 0 : _b[0];
      const reader = new FileReader();
      reader.onload = (event2) => {
        var _a2;
        const css = (_a2 = event2.target) == null ? void 0 : _a2.result;
        const newValues = convertCssIntoVariables(css);
        hslCssVariables.value = newValues.hslCssVariables;
        otherValues.value = newValues.otherValues;
      };
      if (file)
        reader.readAsText(file);
    }
    const __returned__ = { getGlobalConfig, globalsCss, defaultValues, hslCssVariables, otherValues, init, useColorInput, generateCss, handleDownloadCss, handleCssUpload, FormInputField: AppInput, AppButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "min-h-screen bg-muted text-muted-foreground" };
const _hoisted_2 = { class: "container mx-auto flex h-full w-full flex-col gap-4 py-12" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "h1",
  { class: "text-title font-bold text-black" },
  " Color generator ",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "text-muted-foreground" },
  " Generate CSS variables from a CSS file ",
  -1
  /* HOISTED */
);
const _hoisted_5 = { class: "flex items-center gap-2" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "label",
  { for: "useColorInput" },
  "Use color selectors",
  -1
  /* HOISTED */
);
const _hoisted_7 = { class: "grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6" };
const _hoisted_8 = ["onUpdate:modelValue"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", null, [
        _hoisted_3,
        _hoisted_4,
        createBaseVNode(
          "input",
          {
            type: "file",
            accept: ".css",
            onChange: $setup.handleCssUpload
          },
          null,
          32
          /* NEED_HYDRATION */
        )
      ]),
      createBaseVNode("div", _hoisted_5, [
        _hoisted_6,
        withDirectives(createBaseVNode(
          "input",
          {
            id: "useColorInput",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.useColorInput = $event),
            type: "checkbox",
            name: "useColorInput"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vModelCheckbox, $setup.useColorInput]
        ])
      ]),
      createBaseVNode("div", _hoisted_7, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($setup.hslCssVariables, (cssVariable) => {
            return openBlock(), createElementBlock("div", {
              key: cssVariable.name
            }, [
              createTextVNode(
                toDisplayString(cssVariable.name) + ": ",
                1
                /* TEXT */
              ),
              $setup.useColorInput ? withDirectives((openBlock(), createElementBlock("input", {
                key: 0,
                "onUpdate:modelValue": ($event) => cssVariable.value = $event,
                type: "color",
                class: "w-full rounded px-2 py-1"
              }, null, 8, _hoisted_8)), [
                [vModelText, cssVariable.value]
              ]) : (openBlock(), createBlock($setup["FormInputField"], {
                key: 1,
                modelValue: cssVariable.value,
                "onUpdate:modelValue": ($event) => cssVariable.value = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"]))
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($setup.otherValues, (cssVariable) => {
            return openBlock(), createElementBlock("div", {
              key: cssVariable.name
            }, [
              createTextVNode(
                toDisplayString(cssVariable.name) + ": ",
                1
                /* TEXT */
              ),
              createVNode($setup["FormInputField"], {
                modelValue: cssVariable.value,
                "onUpdate:modelValue": ($event) => cssVariable.value = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      createVNode($setup["AppButton"], { onClick: $setup.handleDownloadCss }, {
        default: withCtx(() => [
          createTextVNode(" Download CSS ")
        ]),
        _: 1
        /* STABLE */
      })
    ])
  ]);
}
_sfc_main$1.__file = "src/color-generator/views/ColorGeneratorView.vue";
const ColorGeneratorView = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/color-generator/views/ColorGeneratorView.vue"]]);
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
