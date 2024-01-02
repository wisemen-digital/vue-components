import { aW as inject, aX as provide, au as defineComponent, aR as mergeModels, aS as useModel, aU as computed, av as ref, b9 as watch, ba as Ue, bb as Ie, b1 as $e, aw as openBlock, ax as createElementBlock, aO as createCommentVNode, ay as createBaseVNode, aI as createBlock, aE as withCtx, aQ as mergeProps, aN as renderSlot, aD as createVNode, aB as Fragment, bc as useI18n, bd as _e, be as Je, bf as je, aP as normalizeClass, aG as toDisplayString, aF as createTextVNode, bg as Ge, bh as We, bi as Fe, bj as Ae, aC as renderList } from "./vendor-1dywJ39j.js";
import { p as popoverTransition } from "./popover.transition-z0jVcmyM.js";
import { _ as _export_sfc, c as cva } from "./_plugin-vue_export-helper-slJWkzW1.js";
import { A as AppIcon } from "./AppIcon-xwNDGklI.js";
import { a as input, b as inputIcon, i as inputWrapper } from "./appInput.style-s-HgGmHs.js";
import { A as AppHeightTransition } from "./AppHeightTransition-bqnTh3G1.js";
const appSelectContext = Symbol("AppSelectContext");
function useAppSelectContext() {
  const context = inject(appSelectContext, null);
  if (!context)
    throw new Error("AppSelectContext not provided");
  return context;
}
function useProvideAppSelectContext(context) {
  provide(appSelectContext, context);
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AppSelectContainer",
  props: /* @__PURE__ */ mergeModels({
    displayFunction: { type: Function, required: false, default: (value) => {
      return String(value);
    } },
    keyValue: { type: null, required: false },
    items: { type: Array, required: true },
    isDisabled: { type: Boolean, required: false, default: false },
    placeholder: { type: String, required: false },
    isFilterable: { type: Boolean, required: false, default: false },
    isInvalid: { type: Boolean, required: false, default: false }
  }, {
    "modelValue": { required: true },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["hide", "show", "update:search"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emits = __emit;
    const model = useModel(__props, "modelValue");
    const isMultiple = computed(() => Array.isArray(model.value));
    const search = ref("");
    function getDisplayValue(value) {
      if (value == null)
        return "";
      else if (Array.isArray(value))
        return value.map((value2) => __props.displayFunction(value2)).join(", ");
      else
        return __props.displayFunction(value);
    }
    const filteredItems = computed(() => {
      if (!__props.isFilterable)
        return __props.items;
      return __props.items.filter((item) => {
        var _a;
        return (_a = getDisplayValue(item)) == null ? void 0 : _a.toLowerCase().includes(search.value.toLowerCase());
      });
    });
    useProvideAppSelectContext({
      value: model,
      search,
      getDisplayValue,
      isFilterable: computed(() => __props.isFilterable),
      isInvalid: computed(() => __props.isInvalid),
      isDisabled: computed(() => __props.isDisabled)
    });
    watch(search, () => {
      onSearchChange(search.value);
    });
    function onSearchChange(search2) {
      emits("update:search", search2);
    }
    function onHide() {
      emits("hide");
    }
    function onShow() {
      emits("show");
    }
    const __returned__ = { emits, model, isMultiple, search, getDisplayValue, filteredItems, onSearchChange, onHide, onShow, get Combobox() {
      return Ue;
    }, get Listbox() {
      return Ie;
    }, get Float() {
      return $e;
    }, get popoverTransition() {
      return popoverTransition;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "text-left" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" eslint-disable vue/valid-v-model "),
      createBaseVNode("div", _hoisted_1$1, [
        $props.isFilterable ? (openBlock(), createBlock($setup["Combobox"], {
          key: 0,
          modelValue: $setup.model,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event),
          disabled: $props.isDisabled,
          immediate: "",
          multiple: $setup.isMultiple
        }, {
          default: withCtx(({ open }) => [
            createVNode(
              $setup["Float"],
              mergeProps({
                placement: "bottom-start",
                "adaptive-width": "",
                offset: 4,
                flip: ""
              }, $setup.popoverTransition, {
                onHide: $setup.onHide,
                onShow: $setup.onShow
              }),
              {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {
                    items: $setup.filteredItems,
                    isOpen: open
                  })
                ]),
                _: 2
                /* DYNAMIC */
              },
              1040
              /* FULL_PROPS, DYNAMIC_SLOTS */
            )
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["modelValue", "disabled", "multiple"])) : (openBlock(), createBlock($setup["Listbox"], {
          key: 1,
          modelValue: $setup.model,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.model = $event),
          disabled: $props.isDisabled,
          immediate: "",
          multiple: $setup.isMultiple
        }, {
          default: withCtx(({ open }) => [
            createVNode(
              $setup["Float"],
              mergeProps({
                placement: "bottom-start",
                "adaptive-width": "",
                offset: 4,
                flip: ""
              }, $setup.popoverTransition, {
                onHide: $setup.onHide,
                onShow: $setup.onShow
              }),
              {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {
                    items: $setup.filteredItems,
                    isOpen: open
                  })
                ]),
                _: 2
                /* DYNAMIC */
              },
              1040
              /* FULL_PROPS, DYNAMIC_SLOTS */
            )
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["modelValue", "disabled", "multiple"]))
      ])
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
_sfc_main$4.__file = "src/components/select/AppSelectContainer.vue";
const AppSelectContainer = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/vue-components/vue-components/src/components/select/AppSelectContainer.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppSelectInput",
  props: {
    placeholder: { type: String, required: false },
    iconLeft: { type: null, required: false },
    isOpen: { type: Boolean, required: true }
  },
  emits: ["blur"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emits = __emit;
    const { t } = useI18n();
    const {
      getDisplayValue,
      search,
      value,
      isFilterable,
      isDisabled,
      isInvalid
    } = useAppSelectContext();
    const isFocused = ref(false);
    const hasValue = computed(() => {
      if (Array.isArray(value.value))
        return value.value.length > 0;
      else
        return value.value !== null && value.value !== void 0 && value.value !== "";
    });
    function handleSearchChange(event) {
      search.value = event.target.value;
    }
    function onFocus() {
      isFocused.value = true;
    }
    function onBlur() {
      isFocused.value = false;
      if (!__props.isOpen)
        emits("blur");
    }
    const __returned__ = { emits, t, getDisplayValue, search, value, isFilterable, isDisabled, isInvalid, isFocused, hasValue, handleSearchChange, onFocus, onBlur, get ComboboxButton() {
      return _e;
    }, get ComboboxInput() {
      return Je;
    }, get ListboxButton() {
      return je;
    }, AppIcon, get input() {
      return input;
    }, get inputIcon() {
      return inputIcon;
    }, get inputWrapper() {
      return inputWrapper;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { class: "truncate" };
const _hoisted_4 = {
  key: 1,
  class: "text-input-foreground/50"
};
const _hoisted_5 = { class: "inset-y-0 right-0 flex items-center pr-2" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.isFilterable ? (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode(
      "div",
      {
        class: normalizeClass(
          $setup.inputWrapper({
            isDisabled: $setup.isDisabled,
            isFocused: $setup.isFocused || $props.isOpen,
            isInvalid: $setup.isInvalid
          })
        )
      },
      [
        renderSlot(_ctx.$slots, "left", {}, () => [
          $props.iconLeft != null ? (openBlock(), createBlock($setup["AppIcon"], {
            key: 0,
            class: normalizeClass(["ml-3", $setup.inputIcon()]),
            icon: $props.iconLeft
          }, null, 8, ["icon", "class"])) : createCommentVNode("v-if", true)
        ]),
        createVNode($setup["ComboboxInput"], {
          class: normalizeClass($setup.input({ isSelect: true })),
          "display-value": $setup.hasValue && !$props.isOpen ? $setup.getDisplayValue : () => void 0,
          placeholder: $setup.hasValue ? $setup.getDisplayValue($setup.value) : $props.placeholder ?? $setup.t("label.select"),
          disabled: $setup.isDisabled,
          onChange: $setup.handleSearchChange,
          onBlur: $setup.onBlur,
          onFocus: $setup.onFocus
        }, null, 8, ["class", "display-value", "placeholder", "disabled"]),
        createVNode($setup["ComboboxButton"], { class: "inset-y-0 right-0 flex items-center pr-2" }, {
          default: withCtx(({ open }) => [
            createVNode($setup["AppIcon"], {
              class: normalizeClass(["h-3 w-3 shrink-0 transition-transform duration-200", [{
                "rotate-180": open
              }, $setup.inputIcon()]]),
              icon: "chevronDown",
              "aria-hidden": "true"
            }, null, 8, ["class"])
          ]),
          _: 1
          /* STABLE */
        })
      ],
      2
      /* CLASS */
    )
  ])) : (openBlock(), createElementBlock("div", _hoisted_2, [
    createVNode($setup["ListboxButton"], {
      class: normalizeClass(
        $setup.inputWrapper({
          isFocused: $setup.isFocused || $props.isOpen,
          isDisabled: $setup.isDisabled,
          isInvalid: $setup.isInvalid
        })
      ),
      onBlur: $setup.onBlur,
      onFocus: $setup.onFocus
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "left", {}, () => [
          $props.iconLeft != null ? (openBlock(), createBlock($setup["AppIcon"], {
            key: 0,
            class: normalizeClass(["ml-3", $setup.inputIcon()]),
            icon: $props.iconLeft
          }, null, 8, ["icon", "class"])) : createCommentVNode("v-if", true)
        ]),
        createBaseVNode(
          "div",
          {
            class: normalizeClass(["flex w-full items-center justify-between", $setup.input({ isSelect: true })])
          },
          [
            createBaseVNode("span", _hoisted_3, [
              $setup.hasValue ? (openBlock(), createElementBlock(
                Fragment,
                { key: 0 },
                [
                  createTextVNode(
                    toDisplayString($setup.getDisplayValue($setup.value)),
                    1
                    /* TEXT */
                  )
                ],
                64
                /* STABLE_FRAGMENT */
              )) : $props.placeholder != null ? (openBlock(), createElementBlock(
                "span",
                _hoisted_4,
                toDisplayString($props.placeholder),
                1
                /* TEXT */
              )) : createCommentVNode("v-if", true)
            ])
          ],
          2
          /* CLASS */
        ),
        createBaseVNode("div", _hoisted_5, [
          createVNode($setup["AppIcon"], {
            class: normalizeClass(["h-3 w-3 shrink-0 transition-transform duration-200", [{
              "rotate-180": $props.isOpen
            }, $setup.inputIcon()]]),
            icon: "chevronDown",
            "aria-hidden": "true"
          }, null, 8, ["class"])
        ])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class"])
  ]));
}
_sfc_main$3.__file = "src/components/select/AppSelectInput.vue";
const AppSelectInput = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/vue-components/vue-components/src/components/select/AppSelectInput.vue"]]);
const variantOptions = {
  default: "bg-background text-foreground",
  disabled: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-focus-destructive"
};
const active = {
  true: "bg-secondary text-secondary-foreground bg-secondary/80"
};
const selected = {
  true: "text-primary underline-offset-4 underline hover:bg-secondary/80"
};
const appSelectOptionVariants = cva(
  {
    base: "flex w-full gap-2 rounded border border-transparent bg-white px-2 py-1 text-left text-black transition-all",
    variants: {
      variant: variantOptions,
      active,
      selected
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppSelectOption",
  props: {
    value: { type: null, required: true },
    isActive: { type: Boolean, required: false, default: false },
    isSelected: { type: Boolean, required: false, default: false },
    isDisabled: { type: Boolean, required: false, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const optionStatus = computed(() => {
      if (__props.isDisabled)
        return "disabled";
      else
        return "default";
    });
    const { getDisplayValue } = useAppSelectContext();
    const __returned__ = { optionStatus, getDisplayValue, get appSelectOptionVariants() {
      return appSelectOptionVariants;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "button",
    {
      class: normalizeClass($setup.appSelectOptionVariants({ variant: $setup.optionStatus, selected: $props.isSelected, active: $props.isActive }))
    },
    toDisplayString($setup.getDisplayValue($props.value)),
    3
    /* TEXT, CLASS */
  );
}
_sfc_main$2.__file = "src/components/select/AppSelectOption.vue";
const AppSelectOption = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/vue-components/vue-components/src/components/select/AppSelectOption.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppSelectOptions",
  props: {
    items: { type: Array, required: true },
    isOpen: { type: Boolean, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const {
      isFilterable
    } = useAppSelectContext();
    const __returned__ = { isFilterable, get ComboboxOption() {
      return Ge;
    }, get ComboboxOptions() {
      return We;
    }, get ListboxOption() {
      return Fe;
    }, get ListboxOptions() {
      return Ae;
    }, AppHeightTransition };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.isFilterable ? (openBlock(), createBlock($setup["ComboboxOptions"], {
    key: 0,
    class: "rounded bg-card p-2"
  }, {
    default: withCtx(() => [
      createVNode($setup["AppHeightTransition"], null, {
        default: withCtx(() => [
          createBaseVNode("div", null, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($props.items, (item, index) => {
                return openBlock(), createBlock($setup["ComboboxOption"], {
                  key: index,
                  value: item
                }, {
                  default: withCtx(({ active: active2, selected: selected2, disabled }) => [
                    renderSlot(_ctx.$slots, "default", {
                      item,
                      active: active2,
                      selected: selected2,
                      disabled,
                      isOpen: $props.isOpen
                    })
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["value"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        _: 3
        /* FORWARDED */
      })
    ]),
    _: 3
    /* FORWARDED */
  })) : (openBlock(), createBlock($setup["ListboxOptions"], {
    key: 1,
    class: "rounded bg-card p-2"
  }, {
    default: withCtx(() => [
      createVNode($setup["AppHeightTransition"], null, {
        default: withCtx(() => [
          createBaseVNode("div", null, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($props.items, (item, index) => {
                return openBlock(), createBlock($setup["ListboxOption"], {
                  key: index,
                  value: item
                }, {
                  default: withCtx(({ active: active2, selected: selected2, disabled }) => [
                    renderSlot(_ctx.$slots, "default", {
                      item,
                      active: active2,
                      selected: selected2,
                      disabled,
                      isOpen: $props.isOpen
                    })
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["value"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        _: 3
        /* FORWARDED */
      })
    ]),
    _: 3
    /* FORWARDED */
  }));
}
_sfc_main$1.__file = "src/components/select/AppSelectOptions.vue";
const AppSelectOptions = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/components/select/AppSelectOptions.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppSelect",
  props: /* @__PURE__ */ mergeModels({
    displayFunction: { type: Function, required: false, default: (value) => {
      return String(value);
    } },
    keyValue: { type: null, required: false },
    items: { type: Array, required: true },
    isDisabled: { type: Boolean, required: false },
    placeholder: { type: String, required: false },
    isFilterable: { type: Boolean, required: false, default: false },
    isInvalid: { type: Boolean, required: false, default: false }
  }, {
    "modelValue": { type: Array, skipCheck: true, ...{
      required: true
    } },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["hide", "show", "update:search"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emits = __emit;
    const model = useModel(__props, "modelValue");
    function onHide() {
      emits("hide");
    }
    function onShow() {
      emits("show");
    }
    function onUpdateSearch(search) {
      emits("update:search", search);
    }
    const __returned__ = { emits, model, onHide, onShow, onUpdateSearch, AppSelectContainer, AppSelectInput, AppSelectOption, AppSelectOptions };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["AppSelectContainer"], {
    modelValue: $setup.model,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event),
    items: $props.items,
    "is-disabled": $props.isDisabled,
    "display-function": $props.displayFunction,
    "is-filterable": $props.isFilterable,
    "is-invalid": $props.isInvalid,
    onHide: $setup.onHide,
    onShow: $setup.onShow,
    "onUpdate:search": $setup.onUpdateSearch
  }, {
    default: withCtx(({ items: slotItems, isOpen }) => [
      createVNode($setup["AppSelectInput"], {
        placeholder: $props.placeholder,
        "is-open": isOpen
      }, null, 8, ["placeholder", "is-open"]),
      createVNode($setup["AppSelectOptions"], {
        items: slotItems,
        "is-open": isOpen
      }, {
        default: withCtx(({ item, active: active2, disabled, selected: selected2 }) => [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createVNode($setup["AppSelectOption"], {
              value: item,
              "is-active": active2,
              "is-disabled": disabled,
              "is-selected": selected2
            }, null, 8, ["value", "is-active", "is-disabled", "is-selected"])
          ])
        ]),
        _: 2
        /* DYNAMIC */
      }, 1032, ["items", "is-open"])
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["modelValue", "items", "is-disabled", "display-function", "is-filterable", "is-invalid"]);
}
_sfc_main.__file = "src/components/select/AppSelect.vue";
const AppSelect = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/select/AppSelect.vue"]]);
export {
  AppSelect as A
};
