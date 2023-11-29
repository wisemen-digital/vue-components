import { au as defineComponent, aH as mergeModels, aI as useModel, aJ as _e, aK as Ye, aL as ze, aM as he, aN as Se, ax as openBlock, ay as createBlock, az as withCtx, aA as createVNode, aO as normalizeClass, aP as createCommentVNode, aQ as renderSlot, aF as toDisplayString, aE as createTextVNode, aB as createBaseVNode, av as reactive, aw as resolveComponent, aG as mergeProps } from "./vendor-dC_up0ZP.js";
import { A as AppButton } from "./AppButton-aX8bNIjx.js";
import { A as AppText } from "./AppText-ZY8J2na1.js";
import { A as AppIcon, i as iconNames } from "./AppIcon-wqAnmqIA.js";
import { c as cva, _ as _export_sfc } from "./cva-buL8-oqa.js";
const sizeOptions = {
  default: "w-[80ch] ",
  sm: "w-[60ch]",
  full: "w-full",
  lg: "w-[120ch]"
};
const modalVariants = cva(
  {
    base: "flex flex-col gap-4 rounded-modal bg-white p-6 text-left",
    variants: {
      size: sizeOptions
    },
    defaultVariants: {
      size: "default"
    }
  }
);
const modalSizeOptions = Object.keys(sizeOptions);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppModal",
  props: mergeModels({
    hasNoCloseButton: { type: Boolean, required: false, default: false },
    hasNoCloseOutside: { type: Boolean, required: false, default: false },
    size: { type: null, required: false, default: "default" },
    title: { type: String, required: false },
    icon: { type: null, required: false }
  }, {
    "isOpen": { type: Boolean, ...{
      required: true
    } }
  }),
  emits: ["update:isOpen"],
  setup(__props, { expose: __expose }) {
    __expose();
    const isOpen = useModel(__props, "isOpen");
    function handleClickOutside() {
      if (!__props.hasNoCloseOutside)
        isOpen.value = false;
    }
    function handleClickCloseButton() {
      if (!__props.hasNoCloseButton)
        isOpen.value = false;
    }
    const __returned__ = { isOpen, handleClickOutside, handleClickCloseButton, get Dialog() {
      return _e;
    }, get DialogPanel() {
      return Ye;
    }, get DialogTitle() {
      return ze;
    }, get TransitionChild() {
      return he;
    }, get TransitionRoot() {
      return Se;
    }, AppButton, AppText, AppIcon, get modalVariants() {
      return modalVariants;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "fixed inset-0 bg-black/25" },
  null,
  -1
  /* HOISTED */
);
const _hoisted_2 = { class: "fixed inset-0 flex min-h-full items-center justify-center overflow-y-auto p-4" };
const _hoisted_3 = { class: "flex justify-between gap-4" };
const _hoisted_4 = { class: "flex" };
const _hoisted_5 = { class: "mt-4" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["TransitionRoot"], {
    appear: "",
    show: $setup.isOpen,
    as: "template"
  }, {
    default: withCtx(() => [
      createVNode($setup["Dialog"], {
        as: "div",
        class: "relative z-[999]",
        onClose: $setup.handleClickOutside
      }, {
        default: withCtx(() => [
          createVNode($setup["TransitionChild"], {
            as: "template",
            class: "ease-[cubic-bezier(.8,_.16,_0,_1.3)]",
            enter: "duration-300 ease-out ",
            "enter-from": "opacity-0",
            "enter-to": "opacity-100",
            leave: "duration-200 ease-in",
            "leave-from": "opacity-100",
            "leave-to": "opacity-0"
          }, {
            default: withCtx(() => [
              _hoisted_1$1
            ]),
            _: 1
            /* STABLE */
          }),
          createBaseVNode("div", _hoisted_2, [
            createVNode($setup["TransitionChild"], {
              as: "template",
              class: "ease-[cubic-bezier(.8,_.16,_0,_1.3)]",
              enter: "duration-300 ease-out ",
              "enter-from": "opacity-0 scale-0",
              "enter-to": "opacity-100 scale-100",
              leave: "duration-200 ease-in",
              "leave-from": "opacity-100 scale-100",
              "leave-to": "opacity-0 scale-0"
            }, {
              default: withCtx(() => [
                createVNode($setup["DialogPanel"], {
                  class: normalizeClass($setup.modalVariants({ size: $props.size }))
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_3, [
                      createVNode($setup["DialogTitle"], { class: "flex flex-col items-start justify-start gap-8" }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "icon", {}, () => [
                            $props.icon ? (openBlock(), createBlock($setup["AppButton"], {
                              key: 0,
                              "front-icon": $props.icon,
                              size: "icon",
                              variant: "outline",
                              "is-rounded": ""
                            }, null, 8, ["front-icon"])) : createCommentVNode("v-if", true)
                          ]),
                          renderSlot(_ctx.$slots, "title", {}, () => [
                            createVNode($setup["AppText"], { variant: "heading" }, {
                              default: withCtx(() => [
                                createTextVNode(
                                  toDisplayString($props.title),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 1
                              /* STABLE */
                            })
                          ])
                        ]),
                        _: 3
                        /* FORWARDED */
                      }),
                      createBaseVNode("button", _hoisted_4, [
                        !$props.hasNoCloseButton ? (openBlock(), createBlock($setup["AppIcon"], {
                          key: 0,
                          icon: "close",
                          onClick: $setup.handleClickCloseButton
                        })) : createCommentVNode("v-if", true)
                      ])
                    ]),
                    createBaseVNode("div", null, [
                      renderSlot(_ctx.$slots, "content")
                    ]),
                    createBaseVNode("div", _hoisted_5, [
                      renderSlot(_ctx.$slots, "footer")
                    ])
                  ]),
                  _: 3
                  /* FORWARDED */
                }, 8, ["class"])
              ]),
              _: 3
              /* FORWARDED */
            })
          ])
        ]),
        _: 3
        /* FORWARDED */
      })
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["show"]);
}
_sfc_main$1.__file = "src/components/app/modal/AppModal.vue";
const AppModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/components/app/modal/AppModal.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppModal.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const state = reactive({
      isOpen: false,
      hasNoCloseButton: false,
      hasNoCloseOutside: false,
      title: "Modal title",
      icon: void 0,
      content: "Content here Lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus nulla ab eius enim similique atque officia? Porro consectetur, ea iusto perspiciatis ullam nisi minus, inventore iste quisquam placeat nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem ullam ipsam minima, vitae commodi expedita corporis aliquid illum quis laudantium adipisci laboriosam est maxime quae enim aliquam sed ipsa.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam iste, adipisci sapiente odit beatae architecto aspernatur perferendis quis. Esse dicta, minima non aperiam sunt ad veniam ab velit officiis magni."
    });
    function handleClick() {
      state.isOpen = true;
    }
    const __returned__ = { state, handleClick, AppModal, AppText, AppButton, get modalSizeOptions() {
      return modalSizeOptions;
    }, get iconNames() {
      return iconNames;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex gap-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_HstText = resolveComponent("HstText");
  const _component_HstTextarea = resolveComponent("HstTextarea");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "App/Modals/AppModal" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Default",
        "auto-props-disabled": ""
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isOpen,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.isOpen = $event),
            title: "Open"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.hasNoCloseButton,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.hasNoCloseButton = $event),
            title: "No close button"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.hasNoCloseOutside,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.hasNoCloseOutside = $event),
            title: "No close outside"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.icon,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.state.icon = $event),
            title: "Icon",
            options: ["none", ...$setup.iconNames]
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.size,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.state.size = $event),
            title: "Size",
            options: $setup.modalSizeOptions
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.title,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.state.title = $event),
            title: "Title"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstTextarea, {
            modelValue: $setup.state.content,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.state.content = $event),
            title: "Content"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode($setup["AppButton"], { "onComponent:click": $setup.handleClick }, {
            default: withCtx(() => [
              createTextVNode(" Click me ")
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode($setup["AppModal"], mergeProps($setup.state, {
            "is-open": $setup.state.isOpen,
            "onUpdate:isOpen": _cache[7] || (_cache[7] = ($event) => $setup.state.isOpen = $event)
          }), {
            content: withCtx(() => [
              createVNode($setup["AppText"], { variant: "subtext" }, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString($setup.state.content),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            footer: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode($setup["AppButton"], {
                  variant: "outline",
                  "onComponent:click": $setup.handleClick
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Cancel ")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode($setup["AppButton"], { "onComponent:click": $setup.handleClick }, {
                  default: withCtx(() => [
                    createTextVNode(" Confirm ")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            _: 1
            /* STABLE */
          }, 16, ["is-open"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/app/modal/AppModal.story.vue";
const AppModal_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/app/modal/AppModal.story.vue"]]);
export {
  AppModal_story as default
};
