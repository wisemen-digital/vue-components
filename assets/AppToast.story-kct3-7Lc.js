import { aU as computed, aQ as ref, bv as useSwipe, au as defineComponent, aw as openBlock, aG as createElementBlock, aB as createBaseVNode, aJ as normalizeClass, aI as createCommentVNode, ax as createBlock, ay as withCtx, aR as mergeProps, aN as Transition, aF as toDisplayString, aP as Fragment, aE as createTextVNode, az as createVNode, bw as normalizeStyle, bx as h, by as $t, bz as markRaw, bA as bt, av as resolveComponent } from "./vendor-1ZSCwqXN.js";
import { A as AppButton, c as AppLoader } from "./AppButton-nZ_dH1xq.js";
import { A as AppIcon } from "./AppIcon-RVR3zNXg.js";
import { c as cva } from "./cva-06WGKu1x.js";
import { f as fadeTransition } from "./fade.transition-rZvlSn0c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
const variantOptions = {
  warn: "bg-warn/20 text-warn",
  error: "bg-destructive/20 text-destructive",
  info: "bg-info/20 text-info",
  success: "bg-success/20 text-success",
  default: "bg-background text-foreground"
};
const containerVariantOptions = {
  warn: "border-warn",
  error: "border-destructive",
  info: "border-info",
  success: "border-success",
  default: "border-border"
};
const toast = cva({
  base: "flex items-center justify-between gap-2 px-2 py-1",
  variants: {
    variant: variantOptions
  },
  defaultVariants: {
    variant: "default"
  }
});
const toastContainer = cva({
  base: "w-full overflow-hidden rounded border bg-white shadow-card-shadow lg:w-80",
  variants: {
    variant: containerVariantOptions
  },
  defaultVariants: {
    variant: "default"
  }
});
function useToastSwipe({
  toastElement,
  toastContainerElement,
  onClose
}) {
  const toastContainerWidth = computed(() => {
    var _a;
    return (_a = toastContainerElement.value) == null ? void 0 : _a.offsetWidth;
  });
  const toastContainerHeight = computed(() => {
    var _a;
    return (_a = toastElement.value) == null ? void 0 : _a.offsetHeight;
  });
  const left = ref("0");
  const bottom = ref("0");
  const opacity = ref(1);
  const lockedDirection = ref(null);
  const { direction, lengthX, lengthY } = useSwipe(toastElement, {
    passive: false,
    threshold: 0,
    onSwipe() {
      if (direction.value === "right" && (!lockedDirection.value || lockedDirection.value === "right")) {
        if (!toastContainerWidth.value)
          return;
        lockedDirection.value = "right";
        if (lengthX.value < 0) {
          const length = Math.abs(lengthX.value);
          left.value = `${length}px`;
          opacity.value = 1.1 - length / toastContainerWidth.value;
        } else {
          left.value = "0";
          opacity.value = 1;
        }
      }
      if (direction.value === "down" && (!lockedDirection.value || lockedDirection.value === "down")) {
        if (!toastContainerHeight.value)
          return;
        lockedDirection.value = "down";
        if (lengthY.value < 0) {
          const length = Math.abs(lengthY.value);
          bottom.value = `${length}px`;
          opacity.value = 1.1 - length / toastContainerHeight.value;
        } else {
          bottom.value = "0";
          opacity.value = 1;
        }
      }
    },
    onSwipeEnd() {
      if (lockedDirection.value === "down") {
        if (lengthY.value < 0 && toastContainerHeight.value && Math.abs(lengthY.value) / toastContainerHeight.value >= 0.2) {
          bottom.value = "100%";
          opacity.value = 0;
          setTimeout(() => {
            onClose();
          }, 200);
        } else {
          bottom.value = "0px";
          opacity.value = 1;
        }
      }
      if (lockedDirection.value === "right") {
        if (lengthX.value < 0 && toastContainerWidth.value && Math.abs(lengthX.value) / toastContainerWidth.value >= 0.3) {
          left.value = "100%";
          opacity.value = 0;
          setTimeout(() => {
            onClose();
          }, 200);
        } else {
          left.value = "0px";
          opacity.value = 1;
        }
      }
      lockedDirection.value = null;
    }
  });
  return {
    left,
    bottom,
    opacity
  };
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppToast",
  props: {
    title: { type: String, required: true },
    desciption: { type: String, required: false },
    action: { type: Object, required: false },
    icon: { type: null, required: false },
    variant: { type: null, required: false },
    duration: { type: Number, required: false },
    promise: { type: Object, required: false }
  },
  emits: ["closeToast"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emits = __emit;
    function handleClose() {
      emits("closeToast");
    }
    function handleAction() {
      if (!__props.action)
        return;
      __props.action.onClick();
      handleClose();
    }
    const isPromiseToast = computed(() => {
      return !!__props.promise;
    });
    const promiseStatus = ref("pending");
    const promiseData = ref(null);
    const promiseError = ref(null);
    async function handleToast() {
      var _a;
      promiseStatus.value = "pending";
      try {
        promiseData.value = await ((_a = __props.promise) == null ? void 0 : _a.action);
        promiseStatus.value = "resolved";
      } catch (e) {
        promiseStatus.value = "rejected";
        promiseError.value = e.message;
      } finally {
        setTimeout(() => {
          handleClose();
        }, 2e3);
      }
    }
    if (isPromiseToast.value)
      handleToast();
    const toastElement = ref(null);
    const toastContainerElement = ref(null);
    const { bottom, left, opacity } = useToastSwipe({
      toastElement,
      toastContainerElement,
      onClose: handleClose
    });
    const __returned__ = { emits, handleClose, handleAction, isPromiseToast, promiseStatus, promiseData, promiseError, handleToast, toastElement, toastContainerElement, bottom, left, opacity, AppButton, AppIcon, get toast() {
      return toast;
    }, get toastContainer() {
      return toastContainer;
    }, AppLoader, get fadeTransition() {
      return fadeTransition;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  ref: "toastContainerElement",
  class: "relative"
};
const _hoisted_2 = { class: "flex items-center gap-2" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { class: "text-subtext" };
const _hoisted_5 = { class: "text-caption" };
const _hoisted_6 = { key: 0 };
const _hoisted_7 = { key: 0 };
const _hoisted_8 = { key: 1 };
const _hoisted_9 = { key: 2 };
const _hoisted_10 = { class: "flex items-center gap-1" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    _hoisted_1$1,
    [
      createBaseVNode(
        "div",
        {
          ref: "toastElement",
          style: normalizeStyle(`transform: translate(${$setup.left}, ${$setup.bottom}); opacity: ${$setup.opacity}`),
          class: normalizeClass(["transition-all ease-linear", [
            $setup.toastContainer({
              variant: $props.variant
            })
          ]])
        },
        [
          createBaseVNode(
            "div",
            {
              class: normalizeClass($setup.toast({
                variant: $props.variant
              }))
            },
            [
              createBaseVNode("div", _hoisted_2, [
                createCommentVNode(" Icon that is showing "),
                !$setup.isPromiseToast ? (openBlock(), createElementBlock("div", _hoisted_3, [
                  $props.icon ? (openBlock(), createBlock($setup["AppIcon"], {
                    key: 0,
                    class: "h-4",
                    icon: $props.icon
                  }, null, 8, ["icon"])) : createCommentVNode("v-if", true)
                ])) : (openBlock(), createBlock(
                  Transition,
                  mergeProps({ key: 1 }, $setup.fadeTransition, { mode: "out-in" }),
                  {
                    default: withCtx(() => [
                      $setup.promiseStatus === "pending" ? (openBlock(), createBlock($setup["AppLoader"], {
                        key: 0,
                        class: "h-4"
                      })) : $setup.promiseStatus === "resolved" ? (openBlock(), createBlock($setup["AppIcon"], {
                        key: 1,
                        class: "h-4",
                        icon: "checkmark"
                      })) : $setup.promiseStatus === "rejected" ? (openBlock(), createBlock($setup["AppIcon"], {
                        key: 2,
                        class: "h-4",
                        icon: "warning"
                      })) : createCommentVNode("v-if", true)
                    ]),
                    _: 1
                    /* STABLE */
                  },
                  16
                  /* FULL_PROPS */
                )),
                createCommentVNode(" Text that is showing "),
                createBaseVNode("div", null, [
                  createBaseVNode(
                    "p",
                    _hoisted_4,
                    toDisplayString($props.title),
                    1
                    /* TEXT */
                  ),
                  createBaseVNode("div", _hoisted_5, [
                    !$setup.isPromiseToast ? (openBlock(), createElementBlock(
                      Fragment,
                      { key: 0 },
                      [
                        $props.desciption ? (openBlock(), createElementBlock(
                          "p",
                          _hoisted_6,
                          toDisplayString($props.desciption),
                          1
                          /* TEXT */
                        )) : createCommentVNode("v-if", true)
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : (openBlock(), createBlock(
                      Transition,
                      mergeProps({ key: 1 }, $setup.fadeTransition, { mode: "out-in" }),
                      {
                        default: withCtx(() => {
                          var _a, _b, _c;
                          return [
                            $setup.promiseStatus === "pending" ? (openBlock(), createElementBlock(
                              "p",
                              _hoisted_7,
                              toDisplayString((_a = $props.promise) == null ? void 0 : _a.loadingMessage),
                              1
                              /* TEXT */
                            )) : $setup.promiseStatus === "resolved" && $setup.promiseData ? (openBlock(), createElementBlock(
                              "p",
                              _hoisted_8,
                              toDisplayString((_b = $props.promise) == null ? void 0 : _b.successMessage($setup.promiseData)),
                              1
                              /* TEXT */
                            )) : $setup.promiseStatus === "rejected" && $setup.promiseError ? (openBlock(), createElementBlock(
                              "p",
                              _hoisted_9,
                              toDisplayString((_c = $props.promise) == null ? void 0 : _c.errorMessage($setup.promiseError)),
                              1
                              /* TEXT */
                            )) : createCommentVNode("v-if", true)
                          ];
                        }),
                        _: 1
                        /* STABLE */
                      },
                      16
                      /* FULL_PROPS */
                    ))
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_10, [
                $props.action ? (openBlock(), createBlock($setup["AppButton"], {
                  key: 0,
                  size: "xs",
                  variant: "ghost",
                  onClick: $setup.handleAction
                }, {
                  default: withCtx(() => [
                    createTextVNode(
                      toDisplayString($props.action.label),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : createCommentVNode("v-if", true),
                createVNode($setup["AppButton"], {
                  size: "icon",
                  variant: "ghost",
                  onTouchstart: $setup.handleClose,
                  onClick: $setup.handleClose
                }, {
                  default: withCtx(() => [
                    createVNode($setup["AppIcon"], {
                      class: "h-4",
                      icon: "close"
                    })
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    512
    /* NEED_PATCH */
  );
}
_sfc_main$2.__file = "src/components/toast/AppToast.vue";
const AppToast = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/vue-components/vue-components/src/components/toast/AppToast.vue"]]);
function useToast() {
  const renderToast = ({ title, action, duration = Number.POSITIVE_INFINITY, icon, variant, promise }) => {
    const toastComponent = h(AppToast, { title, action, icon, variant, promise });
    $t.custom(markRaw(toastComponent), { duration });
  };
  const showToastError = (toastParams) => {
    renderToast({ variant: "error", icon: "warning", ...toastParams });
  };
  const showToastSuccess = (toastParams) => {
    renderToast({ variant: "success", icon: "checkmark", ...toastParams });
  };
  const showToastInfo = (toastParams) => {
    renderToast({ variant: "info", icon: "info", ...toastParams });
  };
  const showToastWarn = (toastParams) => {
    renderToast({ variant: "warn", icon: "warning", ...toastParams });
  };
  const showToast = (toastParams) => {
    renderToast({ variant: "default", ...toastParams });
  };
  return {
    showToastError,
    showToastSuccess,
    showToastInfo,
    showToastWarn,
    showToast
  };
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppToastContainer",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get Toaster() {
      return bt;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Toaster"]);
}
_sfc_main$1.__file = "src/components/toast/AppToastContainer.vue";
const AppToastContainer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/components/toast/AppToastContainer.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppToast.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const {
      showToast,
      showToastSuccess,
      showToastError,
      showToastInfo,
      showToastWarn
    } = useToast();
    function onWarn() {
      showToastWarn({
        title: "Warning",
        desciption: "This is a warning"
      });
    }
    function onInfo() {
      showToastInfo({
        title: "Info",
        desciption: "This is an info"
      });
    }
    function onError() {
      showToastError({
        title: "Error",
        desciption: "This is an error"
      });
    }
    function onSuccess() {
      showToastSuccess({
        title: "Success",
        desciption: "This is a success"
      });
    }
    function onToast() {
      showToast({
        title: "Toast",
        desciption: "This is a toast"
      });
    }
    function onToastWithAction() {
      showToast({
        title: "Toast",
        desciption: "This is a toast with an action",
        action: {
          label: "Undo",
          onClick: () => {
            console.warn("undo");
          }
        }
      });
    }
    function onToastWithPromise() {
      showToast({
        title: "Toast",
        desciption: "This is a toast with a promise",
        promise: {
          action: new Promise((resolve) => {
            setTimeout(() => {
              resolve("It worked!");
            }, 2e3);
          }),
          loadingMessage: "Saving...",
          successMessage: (test) => `Success! ${test}`,
          errorMessage: (test) => `Error! ${test}`
        }
      });
    }
    const __returned__ = { showToast, showToastSuccess, showToastError, showToastInfo, showToastWarn, onWarn, onInfo, onError, onSuccess, onToast, onToastWithAction, onToastWithPromise, AppButton, AppToastContainer };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-wrap gap-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Toast/AppToast" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Default",
        "auto-props-disabled": ""
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["AppButton"], { onClick: $setup.onWarn }, {
              default: withCtx(() => [
                createTextVNode(" Warning ")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode($setup["AppButton"], { onClick: $setup.onInfo }, {
              default: withCtx(() => [
                createTextVNode(" Info ")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode($setup["AppButton"], { onClick: $setup.onError }, {
              default: withCtx(() => [
                createTextVNode(" Error ")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode($setup["AppButton"], { onClick: $setup.onSuccess }, {
              default: withCtx(() => [
                createTextVNode(" Success ")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode($setup["AppButton"], { onClick: $setup.onToast }, {
              default: withCtx(() => [
                createTextVNode(" Toast ")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode($setup["AppButton"], { onClick: $setup.onToastWithAction }, {
              default: withCtx(() => [
                createTextVNode(" Toast with action ")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode($setup["AppButton"], { onClick: $setup.onToastWithPromise }, {
              default: withCtx(() => [
                createTextVNode(" Toast with promise ")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createVNode($setup["AppToastContainer"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/toast/AppToast.story.vue";
const AppToast_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/toast/AppToast.story.vue"]]);
export {
  AppToast_story as default
};
