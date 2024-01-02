import { au as defineComponent, bn as me, aw as openBlock, aI as createBlock, aE as withCtx, aN as renderSlot, bo as pe, aU as computed, bp as xe, b7 as RouterLink, bl as Transition, aM as guardReactiveProps, aL as normalizeProps, ax as createElementBlock, aO as createCommentVNode, aD as createVNode, aP as normalizeClass, b8 as resolveDynamicComponent, bq as Ie, br as useRouteQuery, b9 as watch, aR as mergeModels, aS as useModel, bs as useRoute, bt as RouterView, aB as Fragment, aG as toDisplayString, ay as createBaseVNode, aC as renderList, bu as ye, av as ref, aJ as resolveComponent } from "./vendor-bOGXa7yX.js";
import { A as AppIcon } from "./AppIcon-1-KgX5a1.js";
import { _ as _export_sfc, c as cva } from "./_plugin-vue_export-helper-jppdBqxl.js";
const fadeTransition = {
  enterActiveClass: "transition-opacity ease duration-300",
  leaveActiveClass: "transition-opacity ease duration-300",
  enterFromClass: "opacity-0",
  leaveToClass: "opacity-0"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AppTabsGroup",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get TabGroup() {
      return me;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["TabGroup"], null, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$6.__file = "src/components/tabs/AppTabsGroup.vue";
const AppTabsGroup = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "/home/runner/work/vue-components/vue-components/src/components/tabs/AppTabsGroup.vue"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AppTabsList",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get TabList() {
      return pe;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["TabList"], { class: "flex w-full flex-wrap justify-stretch" }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$5.__file = "src/components/tabs/AppTabsList.vue";
const AppTabsList = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/vue-components/vue-components/src/components/tabs/AppTabsList.vue"]]);
const tabVariants = cva(
  {
    base: "rounded-t-button border border-transparent border-b-neutral-200  px-4 py-2 text-foreground outline-none duration-100 first-letter:rounded-t-button focus-visible:border-primary",
    variants: {}
  }
);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AppTabsTab",
  props: {
    isActive: { type: Boolean, required: true },
    to: { type: [String, Object], required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const isRouter = computed(() => !!__props.to);
    const __returned__ = { isRouter, get Tab() {
      return xe;
    }, get RouterLink() {
      return RouterLink;
    }, get tabVariants() {
      return tabVariants;
    }, get fadeTransition() {
      return fadeTransition;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = {
  key: 0,
  class: "absolute bottom-0 left-0 h-0.5 w-full translate-y-px bg-primary"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($setup.isRouter ? $setup.RouterLink : $setup.Tab), {
    to: $props.to,
    class: normalizeClass(["relative flex flex-1", $setup.tabVariants()])
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default"),
      createVNode(
        Transition,
        normalizeProps(guardReactiveProps($setup.fadeTransition)),
        {
          default: withCtx(() => [
            $props.isActive ? (openBlock(), createElementBlock("div", _hoisted_1$2)) : createCommentVNode("v-if", true)
          ]),
          _: 1
          /* STABLE */
        },
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["to", "class"]);
}
_sfc_main$4.__file = "src/components/tabs/AppTabsTab.vue";
const AppTabsTab = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/vue-components/vue-components/src/components/tabs/AppTabsTab.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppTabsPanels",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get TabPanels() {
      return Ie;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["TabPanels"], null, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$3.__file = "src/components/tabs/AppTabsPanels.vue";
const AppTabsPanels = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/vue-components/vue-components/src/components/tabs/AppTabsPanels.vue"]]);
function useTabQuery({ tabId = null, selectedTab }) {
  const query = useRouteQuery(`tab-${tabId ?? "default"}`);
  let isInitialized = false;
  if (query !== null)
    selectedTab.value = Number(query.value);
  const setTabQuery = (value) => {
    query.value = (value == null ? void 0 : value.toString()) ?? "";
  };
  watch(query, (value) => {
    if (value === null)
      return;
    isInitialized = true;
    selectedTab.value = Number(value);
  }, { immediate: true });
  watch(selectedTab, (value) => {
    if (!isInitialized)
      return;
    setTabQuery(value);
  });
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppTabs",
  props: mergeModels({
    isRouter: { type: null, required: false, default: false },
    tabs: { type: null, required: true },
    tabId: { type: String, required: false, default: "default" }
  }, {
    "modelValue": { type: Number, ...{
      local: true,
      default: 0
    } }
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const selectedTab = useModel(__props, "modelValue", { local: true });
    const allTabs = computed(() => {
      return __props.tabs;
    });
    const isUsingRouter = computed(() => {
      return !!__props.isRouter || __props.isRouter === "";
    });
    function changeTab(index) {
      selectedTab.value = index;
    }
    function isActive(index) {
      return selectedTab.value === index;
    }
    const tabComponent = computed(() => {
      return isUsingRouter.value ? RouterLink : "button";
    });
    const route = useRoute();
    watch(() => route.path, () => {
      if (!isUsingRouter.value)
        return;
      const tab = allTabs.value.find((tab2) => {
        return route.matched.find((route2) => {
          return tab2.to === route2.path;
        });
      });
      if (tab)
        selectedTab.value = allTabs.value.indexOf(tab);
    });
    if (!isUsingRouter.value)
      useTabQuery({ selectedTab, tabId: __props.tabId });
    const __returned__ = { selectedTab, allTabs, isUsingRouter, changeTab, isActive, tabComponent, route, get RouterView() {
      return RouterView;
    }, AppIcon, AppTabsGroup, AppTabsList, AppTabsTab, AppTabsPanels };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "flex w-full min-w-max items-center justify-center space-x-2 text-center" };
const _hoisted_2$1 = { class: "flex-none" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["AppTabsGroup"], {
    "selected-index": $setup.selectedTab,
    as: "div",
    onChange: $setup.changeTab
  }, {
    default: withCtx(() => [
      createVNode($setup["AppTabsList"], null, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($setup.allTabs, (tab, index) => {
              return openBlock(), createBlock($setup["AppTabsTab"], {
                is: $setup.tabComponent,
                key: index,
                to: (tab == null ? void 0 : tab.to) ?? void 0,
                "is-active": $setup.isActive(index)
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1$1, [
                    createBaseVNode(
                      "span",
                      _hoisted_2$1,
                      toDisplayString(tab.label),
                      1
                      /* TEXT */
                    ),
                    tab.icon ? (openBlock(), createBlock($setup["AppIcon"], {
                      key: 0,
                      class: "flex-none",
                      icon: tab.icon
                    }, null, 8, ["icon"])) : createCommentVNode("v-if", true)
                  ])
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["is", "to", "is-active"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode($setup["AppTabsPanels"], null, {
        default: withCtx(() => [
          !$setup.isUsingRouter ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock($setup["RouterView"], { key: 1 }))
        ]),
        _: 3
        /* FORWARDED */
      })
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["selected-index"]);
}
_sfc_main$2.__file = "src/components/tabs/AppTabs.vue";
const AppTabs = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/vue-components/vue-components/src/components/tabs/AppTabs.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppTabsPanel",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get TabPanel() {
      return ye;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["TabPanel"], { class: "text-foreground" }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$1.__file = "src/components/tabs/AppTabsPanel.vue";
const AppTabsPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/components/tabs/AppTabsPanel.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppTabs.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const selectedTab = ref(2);
    const tabs = computed(() => [
      {
        label: "Tab 1",
        icon: "eye",
        to: "/tab1"
      },
      {
        label: "Tab 2",
        icon: "eye",
        to: "/tab1"
      },
      {
        label: "Tab 3",
        icon: "eye",
        to: "/tab1"
      }
    ]);
    const __returned__ = { selectedTab, tabs, AppTabs, AppTabsPanel };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "p-8" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "p-4" },
  " Tab 1 ",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "p-4" },
  " Tab 2 ",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "p-4" },
  " Tab 2 ",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Tabs/AppTabs" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Default",
        "auto-props-disabled": ""
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["AppTabs"], {
              modelValue: $setup.selectedTab,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selectedTab = $event),
              "is-router": "",
              tabs: $setup.tabs
            }, {
              default: withCtx(() => [
                createVNode($setup["AppTabsPanel"], null, {
                  default: withCtx(() => [
                    _hoisted_2
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode($setup["AppTabsPanel"], null, {
                  default: withCtx(() => [
                    _hoisted_3
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode($setup["AppTabsPanel"], null, {
                  default: withCtx(() => [
                    _hoisted_4
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "tabs"])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/tabs/AppTabs.story.vue";
const AppTabs_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/tabs/AppTabs.story.vue"]]);
export {
  AppTabs_story as default
};
