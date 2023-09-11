import { _ as __vitePreload, Q as Comp11, R as defineAsyncComponent, S as createRouter, U as createWebHistory, V as createWebHashHistory, W as useDark, X as useToggle, k as watch, Y as markRaw, E as reactive, d as defineComponent, r as ref, Z as watchEffect, o as openBlock, q as createBlock, $ as mergeProps, a0 as resolveDynamicComponent, h as createCommentVNode } from "./vendor-d13bc8dc.js";
const Comp7 = { "icon": "carbon:information", "group": "top", "docsOnly": true, "variants": [] };
const Comp8 = { "title": "Changeset", "icon": "carbon:commit", "group": "contributing", "docsOnly": true, "variants": [] };
const Comp9 = { "title": "Making Components", "icon": "carbon:document-add", "group": "contributing", "docsOnly": true, "variants": [] };
const Comp10 = { "title": "Registering Components", "icon": "carbon:task-add", "group": "contributing", "docsOnly": true, "variants": [] };
const Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./AppButton.story-24d9cd79.js"), true ? ["assets/AppButton.story-24d9cd79.js","assets/vendor-d13bc8dc.js","assets/AppButton-9c2affdf.js","assets/AppIcon-5b9b744d.js","assets/cva-cc64827e.js"] : void 0));
const Comp1 = defineAsyncComponent(() => __vitePreload(() => import("./AppIcon.story-e533ff80.js"), true ? ["assets/AppIcon.story-e533ff80.js","assets/vendor-d13bc8dc.js","assets/AppIcon-5b9b744d.js","assets/cva-cc64827e.js"] : void 0));
const Comp2 = defineAsyncComponent(() => __vitePreload(() => import("./AppModal.story-b2ea7493.js"), true ? ["assets/AppModal.story-b2ea7493.js","assets/vendor-d13bc8dc.js","assets/AppButton-9c2affdf.js","assets/AppIcon-5b9b744d.js","assets/cva-cc64827e.js","assets/AppText-42e2f3da.js"] : void 0));
const Comp3 = defineAsyncComponent(() => __vitePreload(() => import("./AppPopover.story-184b034d.js"), true ? ["assets/AppPopover.story-184b034d.js","assets/vendor-d13bc8dc.js","assets/cva-cc64827e.js","assets/AppButton-9c2affdf.js","assets/AppIcon-5b9b744d.js"] : void 0));
const Comp4 = defineAsyncComponent(() => __vitePreload(() => import("./AppText.story-e7c8a5c3.js"), true ? ["assets/AppText.story-e7c8a5c3.js","assets/vendor-d13bc8dc.js","assets/AppText-42e2f3da.js","assets/cva-cc64827e.js"] : void 0));
const Comp5 = defineAsyncComponent(() => __vitePreload(() => import("./FormInputField.story-a6eede8c.js"), true ? ["assets/FormInputField.story-a6eede8c.js","assets/vendor-d13bc8dc.js","assets/cva-cc64827e.js","assets/AppIcon-5b9b744d.js","assets/TransitionExpand-65d49bc4.js"] : void 0));
const Comp6 = defineAsyncComponent(() => __vitePreload(() => import("./FormSelect.story-f7b88278.js"), true ? ["assets/FormSelect.story-f7b88278.js","assets/vendor-d13bc8dc.js","assets/cva-cc64827e.js","assets/TransitionExpand-65d49bc4.js"] : void 0));
let files = [
  { "id": "src-components-app-button-appbutton-story-vue", "path": ["App", "Buttons", "AppButton"], "filePath": "src/components/app/button/AppButton.story.vue", "story": { "id": "src-components-app-button-appbutton-story-vue", "title": "AppButton", "layout": { "type": "grid", "width": "100%" }, "docsOnly": false, "variants": [{ "id": "src-components-app-button-appbutton-story-vue-0", "title": "Default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 0, component: Comp0, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-app-button-appbutton-story-vue-5d130aa7.js"), true ? [] : void 0) },
  { "id": "src-components-app-icon-appicon-story-vue", "path": ["App", "Icon", "AppIcon"], "filePath": "src/components/app/icon/AppIcon.story.vue", "story": { "id": "src-components-app-icon-appicon-story-vue", "title": "AppIcon", "layout": { "type": "grid", "width": "100%" }, "docsOnly": false, "variants": [{ "id": "src-components-app-icon-appicon-story-vue-0", "title": "Default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 1, component: Comp1, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-app-icon-appicon-story-vue-e8db0aa1.js"), true ? [] : void 0) },
  { "id": "src-components-app-modal-appmodal-story-vue", "path": ["App", "Modals", "AppModal"], "filePath": "src/components/app/modal/AppModal.story.vue", "story": { "id": "src-components-app-modal-appmodal-story-vue", "title": "AppModal", "layout": { "type": "grid", "width": "100%" }, "docsOnly": false, "variants": [{ "id": "src-components-app-modal-appmodal-story-vue-0", "title": "Default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 2, component: Comp2, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-app-modal-appmodal-story-vue-2653cafa.js"), true ? [] : void 0) },
  { "id": "src-components-app-popover-apppopover-story-vue", "path": ["App", "Popover", "AppPopover"], "filePath": "src/components/app/popover/AppPopover.story.vue", "story": { "id": "src-components-app-popover-apppopover-story-vue", "title": "AppPopover", "layout": { "type": "grid", "width": "100%" }, "docsOnly": false, "variants": [{ "id": "src-components-app-popover-apppopover-story-vue-0", "title": "Default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 3, component: Comp3, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-app-popover-apppopover-story-vue-bed3c8be.js"), true ? [] : void 0) },
  { "id": "src-components-app-text-apptext-story-vue", "path": ["App", "Text", "AppText"], "filePath": "src/components/app/text/AppText.story.vue", "story": { "id": "src-components-app-text-apptext-story-vue", "title": "AppText", "layout": { "type": "grid", "width": "100%" }, "docsOnly": false, "variants": [{ "id": "src-components-app-text-apptext-story-vue-0", "title": "Default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 4, component: Comp4, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-app-text-apptext-story-vue-a213841a.js"), true ? [] : void 0) },
  { "id": "src-components-form-field-forminputfield-story-vue", "path": ["Forms", "Input", "Field"], "filePath": "src/components/form/field/FormInputField.story.vue", "story": { "id": "src-components-form-field-forminputfield-story-vue", "title": "Field", "layout": { "type": "grid", "width": "100%" }, "docsOnly": false, "variants": [{ "id": "src-components-form-field-forminputfield-story-vue-0", "title": "Default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 5, component: Comp5, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-form-field-forminputfield-story-vue-65f78368.js"), true ? [] : void 0) },
  { "id": "src-components-form-select-formselect-story-vue", "path": ["Forms", "Input", "Select"], "filePath": "src/components/form/select/FormSelect.story.vue", "story": { "id": "src-components-form-select-formselect-story-vue", "title": "Select", "layout": { "type": "grid", "width": "100%" }, "docsOnly": false, "variants": [{ "id": "src-components-form-select-formselect-story-vue-0", "title": "Default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 6, component: Comp6, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-form-select-formselect-story-vue-65d638be.js"), true ? [] : void 0) },
  { "id": "docs-introduction-story-js", "path": ["Introduction"], "filePath": "docs/Introduction.story.js", "story": { "id": "docs-introduction-story-js", "title": "Introduction", "group": "top", "layout": { "type": "single", "iframe": true }, "icon": "carbon:information", "docsOnly": true, "variants": [], "autoPropsDisabled": true }, "supportPluginId": "vanilla", "docsFilePath": "docs/Introduction.story.md", "index": 7, component: Comp7, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_docs-introduction-story-js-6059d728.js"), true ? [] : void 0) },
  { "id": "docs-contributing-changeset-story-js", "path": ["Changeset"], "filePath": "docs/contributing/Changeset.story.js", "story": { "id": "docs-contributing-changeset-story-js", "title": "Changeset", "group": "contributing", "layout": { "type": "single", "iframe": true }, "icon": "carbon:commit", "docsOnly": true, "variants": [], "autoPropsDisabled": true }, "supportPluginId": "vanilla", "docsFilePath": "docs/contributing/Changeset.story.md", "index": 8, component: Comp8, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_docs-contributing-changeset-story-js-513df461.js"), true ? [] : void 0) },
  { "id": "docs-contributing-components-story-js", "path": ["Making Components"], "filePath": "docs/contributing/Components.story.js", "story": { "id": "docs-contributing-components-story-js", "title": "Making Components", "group": "contributing", "layout": { "type": "single", "iframe": true }, "icon": "carbon:document-add", "docsOnly": true, "variants": [], "autoPropsDisabled": true }, "supportPluginId": "vanilla", "docsFilePath": "docs/contributing/Components.story.md", "index": 9, component: Comp9, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_docs-contributing-components-story-js-7acdf44f.js"), true ? [] : void 0) },
  { "id": "docs-contributing-registering-story-js", "path": ["Registering Components"], "filePath": "docs/contributing/Registering.story.js", "story": { "id": "docs-contributing-registering-story-js", "title": "Registering Components", "group": "contributing", "layout": { "type": "single", "iframe": true }, "icon": "carbon:task-add", "docsOnly": true, "variants": [], "autoPropsDisabled": true }, "supportPluginId": "vanilla", "docsFilePath": "docs/contributing/Registering.story.md", "index": 10, component: Comp10, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_docs-contributing-registering-story-js-4a83c7dc.js"), true ? [] : void 0) },
  { "id": "tailwind", "path": ["Tailwind"], "filePath": "/home/runner/work/vue-components/vue-components/node_modules/.histoire/plugins/builtin_tailwind-tokens/Tailwind.story.js", "story": { "id": "tailwind", "title": "Tailwind", "group": "design-system", "layout": { "type": "single", "iframe": false }, "icon": "mdi:tailwind", "docsOnly": false, "variants": [{ "id": "background-color", "title": "Background Color", "icon": "carbon:color-palette" }, { "id": "text-color", "title": "Text Color", "icon": "carbon:text-color" }, { "id": "border-color", "title": "Border Color", "icon": "carbon:color-palette" }, { "id": "padding", "title": "Padding", "icon": "carbon:area" }, { "id": "margin", "title": "Margin", "icon": "carbon:area" }, { "id": "font-size", "title": "Font Size", "icon": "carbon:text-font" }, { "id": "font-weight", "title": "Font Weight", "icon": "carbon:text-font" }, { "id": "font-family", "title": "Font Family", "icon": "carbon:text-font" }, { "id": "letter-spacing", "title": "Letter Spacing", "icon": "carbon:text-font" }, { "id": "line-height", "title": "Line Height", "icon": "carbon:text-font" }, { "id": "drop-shadow", "title": "Drop Shadow", "icon": "carbon:shape-except" }, { "id": "border-radius", "title": "Border Radius", "icon": "carbon:condition-wait-point" }, { "id": "border-width", "title": "Border Width", "icon": "carbon:checkbox" }, { "id": "width", "title": "Width", "icon": "carbon:pan-horizontal" }, { "id": "height", "title": "Height", "icon": "carbon:pan-vertical" }, { "id": "full-config", "title": "Full Config", "icon": "carbon:code" }], "autoPropsDisabled": true }, "supportPluginId": "vanilla", "index": 11, component: Comp11, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_tailwind-94c3db5e.js"), true ? [] : void 0) }
];
let tree = [{ "group": true, "id": "top", "title": "", "children": [{ "title": "Introduction", "index": 7 }] }, { "group": true, "id": "design-system", "title": "Design System", "children": [{ "title": "Tailwind", "index": 11 }] }, { "group": true, "id": "contributing", "title": "Contributing", "children": [{ "title": "Changeset", "index": 8 }, { "title": "Making Components", "index": 9 }, { "title": "Registering Components", "index": 10 }] }, { "group": true, "title": "Components", "children": [{ "title": "App", "children": [{ "title": "Buttons", "children": [{ "title": "AppButton", "index": 0 }] }, { "title": "Icon", "children": [{ "title": "AppIcon", "index": 1 }] }, { "title": "Modals", "children": [{ "title": "AppModal", "index": 2 }] }, { "title": "Popover", "children": [{ "title": "AppPopover", "index": 3 }] }, { "title": "Text", "children": [{ "title": "AppText", "index": 4 }] }] }, { "title": "Forms", "children": [{ "title": "Input", "children": [{ "title": "Field", "index": 5 }, { "title": "Select", "index": 6 }] }] }] }];
const Logo_square = "/vue-components/logo-square.svg";
const Logo_light = "/vue-components/logo-light.svg";
const Logo_dark = "/vue-components/logo-dark.svg";
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/home/runner/work/vue-components/vue-components/node_modules/.pnpm/histoire@0.17.0_@types+node@20.6.0_sass@1.66.1_vite@4.4.9/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-vue", "supportPlugin": { "id": "vue3", "moduleName": "@histoire/plugin-vue", "setupFn": "setupVue3", "importStoriesPrepend": "import { defineAsyncComponent as defineAsyncComponentVue3 } from 'vue'" }, "commands": [{ "id": "histoire:plugin-vue:generate-story", "label": "Generate Vue 3 story from component", "icon": "https://vuejs.org/logo.svg", "searchText": "generate create", "clientSetupFile": "@histoire/plugin-vue/dist/commands/generate-story.client.js" }] }], "outDir": "/home/runner/work/vue-components/vue-components/.histoire/dist", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "vue", "patterns": ["**/*.vue"], "pluginIds": ["vue3"] }], "tree": { "file": "title", "order": "asc", "groups": [{ "id": "top", "title": "" }, { "id": "design-system", "title": "Design System" }, { "id": "contributing", "title": "Contributing" }, { "title": "Components" }] }, "theme": { "title": "Wisemen Components", "colors": { "primary": { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "defaultColorScheme": "auto", "storeColorScheme": true, "darkClass": "dark", "logo": { "square": "/logo-square.svg", "light": "/logo-light.svg", "dark": "/logo-dark.svg" } }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent", "contrastColor": "#333" }, { "label": "White", "color": "#fff", "contrastColor": "#333" }, { "label": "Light gray", "color": "#aaa", "contrastColor": "#000" }, { "label": "Dark gray", "color": "#333", "contrastColor": "#fff" }, { "label": "Black", "color": "#000", "contrastColor": "#eee" }], "sandboxDarkClass": "dark", "routerMode": "history", "build": { "excludeFromVendorsChunk": [] }, "viteIgnorePlugins": [], "defaultStoryProps": { "layout": { "type": "grid", "width": "100%" }, "autoPropsDisabled": true }, "setupFile": "./histoire.setup.ts" };
const logos = { square: Logo_square, light: Logo_light, dark: Logo_dark };
const histoireConfig = config;
const customLogos = logos;
const base = "/vue-components/";
function createRouterHistory() {
  switch (histoireConfig.routerMode) {
    case "hash":
      return createWebHashHistory(base);
    case "history":
    default:
      return createWebHistory(base);
  }
}
const router = createRouter({
  history: createRouterHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.vue-8d837db5.js"), true ? ["assets/HomeView.vue-8d837db5.js","assets/vendor-d13bc8dc.js"] : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-00e9d3d5.js"), true ? ["assets/StoryView.vue-00e9d3d5.js","assets/vendor-d13bc8dc.js","assets/MobileOverlay.vue2-278413cb.js","assets/BaseEmpty.vue-5a3cf4ca.js","assets/state-65fc7219.js"] : void 0)
    }
  ]
});
const isDark = useDark({
  valueDark: "htw-dark",
  initialValue: histoireConfig.theme.defaultColorScheme,
  storageKey: "histoire-color-scheme",
  storage: histoireConfig.theme.storeColorScheme ? localStorage : sessionStorage
});
const toggleDark = useToggle(isDark);
function applyDarkToControls() {
  var _a;
  (_a = window.__hst_controls_dark) == null ? void 0 : _a.forEach((ref2) => {
    ref2.value = isDark.value;
  });
}
watch(isDark, () => {
  applyDarkToControls();
}, {
  immediate: true
});
window.__hst_controls_dark_ready = () => {
  applyDarkToControls();
};
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file) {
      if (key === "story") {
        result.story = {
          ...result.story,
          ...file.story,
          file: markRaw(result),
          variants: file.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        };
      } else if (key !== "component") {
        result[key] = file[key];
      }
    }
  } else {
    result = {
      ...file,
      component: markRaw(file.component),
      story: {
        ...file.story,
        title: file.story.title,
        file: markRaw(file),
        variants: file.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor-d13bc8dc.js").then((n) => n.bk), true ? [] : void 0),
  "vue3": () => __vitePreload(() => import("./vendor-d13bc8dc.js").then((n) => n.bl), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: {}
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-mount-story",
        story: _ctx.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as _,
  tree as a,
  clientSupportPlugins as b,
  customLogos as c,
  base as d,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  router as r,
  toggleDark as t
};