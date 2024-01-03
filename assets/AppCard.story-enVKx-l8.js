import { au as defineComponent, aw as openBlock, aG as createElementBlock, aH as renderSlot, aI as createCommentVNode, aB as createBaseVNode, ax as createBlock, ay as withCtx, aF as toDisplayString, aE as createTextVNode, aJ as normalizeClass, aA as reactive, av as resolveComponent, az as createVNode } from "./vendor-5mYyaorD.js";
import { A as AppText } from "./AppText-WPrqcTmT.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
import { A as AppButton } from "./AppButton-LbLqc5DB.js";
import { t as twMerge } from "./cva-hiejvMAh.js";
import "./AppIcon-UzxNt55x.js";
const Image = "/vue-components/assets/test-image-zZDbv3ky.jpg";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "AppCard",
  props: {
    content: { type: String, required: false },
    title: { type: String, required: false },
    subtitle: { type: String, required: false },
    footer: { type: String, required: false },
    headerImage: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { AppText };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = { class: "flex flex-col overflow-hidden rounded-card border bg-card text-card-foreground shadow-card-shadow transition-shadow duration-300 hover:shadow-card-hover-shadow focus:shadow-card-hover-shadow" };
const _hoisted_2 = ["src"];
const _hoisted_3 = { class: "flex flex-col gap-4 p-4" };
const _hoisted_4 = { key: 0 };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", _hoisted_1$2, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      renderSlot(_ctx.$slots, "headerImage", {}, () => [
        $props.headerImage ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: $props.headerImage,
          class: "h-48 w-full object-cover"
        }, null, 8, _hoisted_2)) : createCommentVNode("v-if", true)
      ]),
      createBaseVNode("div", _hoisted_3, [
        renderSlot(_ctx.$slots, "header", {}, () => [
          $props.title || $props.subtitle ? (openBlock(), createElementBlock("div", _hoisted_4, [
            $props.title ? (openBlock(), createBlock($setup["AppText"], {
              key: 0,
              boldness: "semibold",
              variant: "heading"
            }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString($props.title),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })) : createCommentVNode("v-if", true),
            $props.subtitle ? (openBlock(), createBlock($setup["AppText"], {
              key: 1,
              class: "text-muted-foreground"
            }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString($props.subtitle),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })) : createCommentVNode("v-if", true)
          ])) : createCommentVNode("v-if", true)
        ]),
        renderSlot(_ctx.$slots, "content", {}, () => [
          $props.content ? (openBlock(), createBlock($setup["AppText"], { key: 0 }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString($props.content),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true)
        ]),
        renderSlot(_ctx.$slots, "footer", {}, () => [
          $props.footer ? (openBlock(), createBlock($setup["AppText"], { key: 0 }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString($props.footer),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true)
        ])
      ])
    ])
  ]);
}
_sfc_main$7.__file = "src/components/card/AppCard.vue";
const AppCard = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__file", "/home/runner/work/vue-components/vue-components/src/components/card/AppCard.vue"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AppCardHeaderImage",
  props: {
    src: { type: String, required: true },
    class: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get twMerge() {
      return twMerge;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = ["src"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("img", {
    src: $props.src,
    class: normalizeClass($setup.twMerge("h-48 w-full object-cover", $setup.props.class))
  }, null, 10, _hoisted_1$1);
}
_sfc_main$6.__file = "src/components/card/AppCardHeaderImage.vue";
const AppCardHeaderImage = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "/home/runner/work/vue-components/vue-components/src/components/card/AppCardHeaderImage.vue"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AppCardHeader",
  props: {
    class: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get twMerge() {
      return twMerge;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass($setup.twMerge("flex flex-col p-4", $setup.props.class))
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
_sfc_main$5.__file = "src/components/card/AppCardHeader.vue";
const AppCardHeader = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/vue-components/vue-components/src/components/card/AppCardHeader.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AppCardTitle",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { AppText };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["AppText"], {
    boldness: "semibold",
    variant: "heading"
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$4.__file = "src/components/card/AppCardTitle.vue";
const AppCardTitle = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/vue-components/vue-components/src/components/card/AppCardTitle.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppCardDescription",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { AppText };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["AppText"], { class: "text-muted-foreground" }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$3.__file = "src/components/card/AppCardDescription.vue";
const AppCardDescription = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/vue-components/vue-components/src/components/card/AppCardDescription.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppCardContent",
  props: {
    class: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get twMerge() {
      return twMerge;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass($setup.twMerge("flex flex-col gap-1 p-4 pt-0", $setup.props.class))
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
_sfc_main$2.__file = "src/components/card/AppCardContent.vue";
const AppCardContent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/vue-components/vue-components/src/components/card/AppCardContent.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppCardFooter",
  props: {
    class: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get twMerge() {
      return twMerge;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass($setup.twMerge("flex flex-col gap-1 p-4 pt-0", $setup.props.class))
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
_sfc_main$1.__file = "src/components/card/AppCardFooter.vue";
const AppCardFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/components/card/AppCardFooter.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppCard.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const state = reactive({
      title: "Modal title",
      subtitle: "Modal subtitle",
      content: "Modal content",
      headerImage: Image,
      hasHeaderImage: true,
      hasContent: true,
      hasFooter: true,
      hasHeader: true,
      isCustom: false
    });
    const __returned__ = { state, AppCard, AppButton, AppCardHeaderImage, AppCardHeader, AppCardTitle, AppCardDescription, AppCardContent, AppCardFooter };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "w-96 p-12" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstText = resolveComponent("HstText");
  const _component_HstTextarea = resolveComponent("HstTextarea");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Card/AppCard" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Default",
        "auto-props-disabled": ""
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.state.title,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.title = $event),
            title: "Title"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.subtitle,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.subtitle = $event),
            title: "Subtitle"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.footer,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.footer = $event),
            title: "Footer"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstTextarea, {
            modelValue: $setup.state.content,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.state.content = $event),
            title: "Content"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.hasHeader,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.state.hasHeader = $event),
            title: "Has header"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.hasHeaderImage,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.state.hasHeaderImage = $event),
            title: "Has header image"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.hasContent,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.state.hasContent = $event),
            title: "Has content"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.hasFooter,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.state.hasFooter = $event),
            title: "Has footer"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["AppCard"], null, {
              default: withCtx(() => [
                $setup.state.hasHeaderImage ? (openBlock(), createBlock($setup["AppCardHeaderImage"], {
                  key: 0,
                  src: $setup.state.headerImage
                }, null, 8, ["src"])) : createCommentVNode("v-if", true),
                $setup.state.hasHeader ? (openBlock(), createBlock($setup["AppCardHeader"], { key: 1 }, {
                  default: withCtx(() => [
                    createVNode($setup["AppCardTitle"], null, {
                      default: withCtx(() => [
                        createTextVNode(
                          toDisplayString($setup.state.title),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode($setup["AppCardDescription"], null, {
                      default: withCtx(() => [
                        createTextVNode(
                          toDisplayString($setup.state.subtitle),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                })) : createCommentVNode("v-if", true),
                $setup.state.hasContent ? (openBlock(), createBlock($setup["AppCardContent"], { key: 2 }, {
                  default: withCtx(() => [
                    createBaseVNode(
                      "p",
                      null,
                      toDisplayString($setup.state.content),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : createCommentVNode("v-if", true),
                $setup.state.hasFooter ? (openBlock(), createBlock($setup["AppCardFooter"], { key: 3 }, {
                  default: withCtx(() => [
                    createVNode($setup["AppButton"], { class: "w-full" }, {
                      default: withCtx(() => [
                        createTextVNode(" Button ")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                })) : createCommentVNode("v-if", true)
              ]),
              _: 1
              /* STABLE */
            })
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
_sfc_main.__file = "src/components/card/AppCard.story.vue";
const AppCard_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/card/AppCard.story.vue"]]);
export {
  AppCard_story as default
};
