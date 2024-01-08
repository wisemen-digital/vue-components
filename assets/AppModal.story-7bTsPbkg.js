import { aY as inject, aZ as provide, au as defineComponent, aK as mergeModels, aL as useModel, a_ as _e, a$ as Ye, b0 as he, b1 as Se, aw as openBlock, ax as createBlock, ay as withCtx, aR as mergeProps, az as createVNode, aJ as normalizeClass, aH as renderSlot, aB as createBaseVNode, b2 as ze, aG as createElementBlock, aI as createCommentVNode, aA as reactive, av as resolveComponent, aE as createTextVNode, aF as toDisplayString } from "./vendor-tldIp9D4.js";
import { c as cva, t as twMerge } from "./cva-Uo0_UCxF.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
import { A as AppButton } from "./AppButton-XxfeGAJO.js";
import { A as AppIcon } from "./AppIcon-iXg__cZe.js";
import { A as AppText } from "./AppText-OQ1-HhkX.js";
const modalTransition = {
  enterFromClass: "md:scale-95 opacity-0 translate-y-20 md:translate-y-0",
  enterActiveClass: "duration-200 md:transition-scale-bounce",
  enterToClass: "scale-100 opacity-100",
  leaveFromClass: "scale-100 opacity-100",
  leaveActiveClass: "duration-200 md:transition-scale-bounce",
  leaveToClass: "md:scale-95 opacity-0 translate-y-20 md:translate-y-0",
  enterFrom: "md:scale-95 opacity-0 translate-y-20 md:translate-y-0",
  enter: "duration-200 md:transition-scale-bounce",
  enterTo: "scale-100 opacity-100",
  leaveFrom: "scale-100 opacity-100",
  leave: "duration-200 md:transition-scale-bounce",
  leaveTo: "md:scale-95 opacity-0 translate-y-20 md:translate-y-0"
};
const modalBackgroundTransition = {
  enter: "duration-300 ease-out",
  enterFrom: "opacity-0",
  enterTo: "opacity-100",
  leave: "duration-200 ease-in",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0",
  enterActiveClass: "duration-300 ease-out",
  enterFromClass: "opacity-0",
  enterToClass: "opacity-100",
  leaveActiveClass: "duration-200 ease-in",
  leaveFromClass: "opacity-100",
  leaveToClass: "opacity-0"
};
const sizeOptions = {
  default: "w-[80ch] ",
  sm: "w-[60ch]",
  full: "w-full",
  lg: "w-[120ch]"
};
const modalVariants = cva(
  {
    base: "flex flex-col rounded-modal bg-popover text-left text-popover-foreground shadow-modal-shadow",
    variants: {
      size: sizeOptions
    },
    defaultVariants: {
      size: "default"
    }
  }
);
const modalSizeOptions = Object.keys(sizeOptions);
const modalContext = Symbol("ModalContext");
function useModalContext() {
  const context = inject(modalContext, null);
  if (context === null) {
    const err = new Error("Component is missing a parent <AppModal /> component.");
    throw err;
  }
  return context;
}
function useProvideModalContext(context) {
  provide(modalContext, context);
}
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AppModal",
  props: /* @__PURE__ */ mergeModels({
    hasIrremovableMask: { type: Boolean, required: false, default: false },
    size: { type: null, required: false, default: "default" }
  }, {
    "isOpen": { type: Boolean, ...{
      required: true
    } },
    "isOpenModifiers": {}
  }),
  emits: ["update:isOpen"],
  setup(__props, { expose: __expose }) {
    __expose();
    useProvideModalContext({
      close: handleCloseModal
    });
    const isOpen = useModel(__props, "isOpen");
    function handleCloseModal() {
      isOpen.value = false;
    }
    function handleClickOutside() {
      if (!__props.hasIrremovableMask)
        handleCloseModal();
    }
    const __returned__ = { isOpen, handleCloseModal, handleClickOutside, get Dialog() {
      return _e;
    }, get DialogPanel() {
      return Ye;
    }, get TransitionChild() {
      return he;
    }, get TransitionRoot() {
      return Se;
    }, get modalVariants() {
      return modalVariants;
    }, get modalBackgroundTransition() {
      return modalBackgroundTransition;
    }, get modalTransition() {
      return modalTransition;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "fixed inset-0 bg-black/25" },
  null,
  -1
  /* HOISTED */
);
const _hoisted_2 = { class: "fixed inset-0 flex min-h-full items-center justify-center overflow-y-auto" };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["TransitionRoot"], {
    appear: "",
    show: $setup.isOpen,
    as: "template"
  }, {
    default: withCtx(() => [
      createVNode($setup["Dialog"], {
        class: "relative z-[999]",
        onClose: $setup.handleClickOutside
      }, {
        default: withCtx(() => [
          createVNode(
            $setup["TransitionChild"],
            mergeProps({ as: "template" }, $setup.modalBackgroundTransition),
            {
              default: withCtx(() => [
                _hoisted_1$2
              ]),
              _: 1
              /* STABLE */
            },
            16
            /* FULL_PROPS */
          ),
          createBaseVNode("div", _hoisted_2, [
            createVNode(
              $setup["TransitionChild"],
              mergeProps({ as: "template" }, $setup.modalTransition),
              {
                default: withCtx(() => [
                  createVNode($setup["DialogPanel"], {
                    class: normalizeClass($setup.modalVariants({ size: $props.size }))
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default", { close: $setup.handleCloseModal })
                    ]),
                    _: 3
                    /* FORWARDED */
                  }, 8, ["class"])
                ]),
                _: 3
                /* FORWARDED */
              },
              16
              /* FULL_PROPS */
            )
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
_sfc_main$6.__file = "src/components/modal/AppModal.vue";
const AppModal = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "/home/runner/work/vue-components/vue-components/src/components/modal/AppModal.vue"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AppModalHeader",
  props: {
    hideCloseButton: { type: Boolean, required: false },
    class: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { close } = useModalContext();
    function handleClickCloseButton() {
      close();
    }
    const __returned__ = { props, close, handleClickCloseButton, get DialogTitle() {
      return ze;
    }, AppIcon, get twMerge() {
      return twMerge;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { key: 0 };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass($setup.twMerge("flex p-4 justify-between gap-4", $setup.props.class))
    },
    [
      createVNode($setup["DialogTitle"], null, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      }),
      !$props.hideCloseButton ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("button", { onClick: $setup.handleClickCloseButton }, [
          createVNode($setup["AppIcon"], { icon: "close" })
        ])
      ])) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
_sfc_main$5.__file = "src/components/modal/AppModalHeader.vue";
const AppModalHeader = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/vue-components/vue-components/src/components/modal/AppModalHeader.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AppModalTitle",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { AppText };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["AppText"], { variant: "heading" }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$4.__file = "src/components/modal/AppModalTitle.vue";
const AppModalTitle = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/vue-components/vue-components/src/components/modal/AppModalTitle.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppModalDescription",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { AppText };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["AppText"], {
    variant: "body",
    class: "text-muted-foreground"
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$3.__file = "src/components/modal/AppModalDescription.vue";
const AppModalDescription = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/vue-components/vue-components/src/components/modal/AppModalDescription.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppModalContent",
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
_sfc_main$2.__file = "src/components/modal/AppModalContent.vue";
const AppModalContent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/vue-components/vue-components/src/components/modal/AppModalContent.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppModalFooter",
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
_sfc_main$1.__file = "src/components/modal/AppModalFooter.vue";
const AppModalFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/components/modal/AppModalFooter.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppModal.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const state = reactive({
      isOpen: false,
      hideCloseButton: false,
      hasIrremovableMask: false,
      title: "Modal title",
      description: "Description here",
      content: "Content here Lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus nulla ab eius enim similique atque officia? Porro consectetur, ea iusto perspiciatis ullam nisi minus, inventore iste quisquam placeat nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem ullam ipsam minima, vitae commodi expedita corporis aliquid illum quis laudantium adipisci laboriosam est maxime quae enim aliquam sed ipsa.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam iste, adipisci sapiente odit beatae architecto aspernatur perferendis quis. Esse dicta, minima non aperiam sunt ad veniam ab velit officiis magni."
    });
    function handleClick() {
      state.isOpen = true;
    }
    const __returned__ = { state, handleClick, AppModal, AppButton, get modalSizeOptions() {
      return modalSizeOptions;
    }, AppModalHeader, AppModalTitle, AppModalDescription, AppModalContent, AppModalFooter };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex justify-end gap-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_HstText = resolveComponent("HstText");
  const _component_HstTextarea = resolveComponent("HstTextarea");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Modals/AppModal" }, {
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
            modelValue: $setup.state.hideCloseButton,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.hideCloseButton = $event),
            title: "No close button"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.hasIrremovableMask,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.hasIrremovableMask = $event),
            title: "Not dismissable"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.size,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.state.size = $event),
            title: "Size",
            options: $setup.modalSizeOptions
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.title,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.state.title = $event),
            title: "Title"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.description,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.state.description = $event),
            title: "Description"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstTextarea, {
            modelValue: $setup.state.content,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.state.content = $event),
            title: "Content"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode($setup["AppButton"], { onClick: $setup.handleClick }, {
            default: withCtx(() => [
              createTextVNode(" Click me ")
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode($setup["AppModal"], {
            "is-open": $setup.state.isOpen,
            "onUpdate:isOpen": _cache[7] || (_cache[7] = ($event) => $setup.state.isOpen = $event),
            size: $setup.state.size,
            "has-irremovable-mask": $setup.state.hasIrremovableMask
          }, {
            default: withCtx(({ close }) => [
              createVNode($setup["AppModalHeader"], {
                close,
                "hide-close-button": $setup.state.hideCloseButton
              }, {
                default: withCtx(() => [
                  createVNode($setup["AppModalTitle"], null, {
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
                  createVNode($setup["AppModalDescription"], null, {
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
                _: 2
                /* DYNAMIC */
              }, 1032, ["close", "hide-close-button"]),
              createVNode($setup["AppModalContent"], null, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString($setup.state.content),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(
                $setup["AppModalFooter"],
                null,
                {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1, [
                      createVNode($setup["AppButton"], {
                        variant: "ghost",
                        onClick: close
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["onClick"]),
                      createVNode($setup["AppButton"], { onClick: close }, {
                        default: withCtx(() => [
                          createTextVNode(" Confirm ")
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["onClick"])
                    ])
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1024
                /* DYNAMIC_SLOTS */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["is-open", "size", "has-irremovable-mask"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/modal/AppModal.story.vue";
const AppModal_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/modal/AppModal.story.vue"]]);
export {
  AppModal_story as default
};
