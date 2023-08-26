import { as as defineComponent, a_ as computed, av as openBlock, aT as createElementBlock, aD as toDisplayString, aM as normalizeClass, aF as mergeModels, b8 as useI18n, aG as useModel, a$ as ref, b9 as Je, ba as Ge, bb as Qe, bc as Ye, bd as Xe, aP as Ie, aO as createCommentVNode, az as createBaseVNode, ay as createVNode, ax as withCtx, aE as mergeProps, aN as renderSlot, aw as createBlock, aC as createTextVNode, aU as Fragment, aV as renderList, aA as normalizeProps, aB as guardReactiveProps, au as resolveComponent } from "./vendor-ee86d98a.js";
import { c as cva, _ as _export_sfc } from "./cva-fdca8842.js";
import { T as TransitionExpand } from "./TransitionExpand-b826a509.js";
const scaleBounceTransition = {
  enterFromClass: "scale-0 opacity-0",
  enterActiveClass: "transition-scale-bounce",
  enterToClass: "scale-100 opacity-100",
  leaveFromClass: "scale-100 opacity-100",
  leaveActiveClass: "transition-scale-bounce",
  leaveToClass: "scale-0 opacity-0",
  enterFrom: "scale-0 opacity-0",
  enter: "transition-scale-bounce",
  enterTo: "scale-100 opacity-100",
  leaveFrom: "scale-100 opacity-100",
  leave: "transition-scale-bounce",
  leaveTo: "scale-0 opacity-0"
};
const variantOptions = {
  default: "bg-background text-foreground",
  disabled: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-focus-destructive"
};
const active = {
  true: "bg-secondary text-secondary-foreground bg-secondary/80",
  false: null
};
const selected = {
  true: "text-primary underline-offset-4 underline hover:bg-secondary/80",
  false: null
};
const formSelectOptionVariants = cva(
  {
    base: "flex w-full gap-2 rounded border border-transparent bg-white px-2 py-1 text-left text-black transition-all",
    variants: {
      variant: variantOptions,
      active,
      selected
    },
    defaultVariants: {
      variant: "default",
      active: false,
      selected: false
    }
  }
);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FormSelectOption",
  props: {
    value: { type: null, required: true },
    isActive: { type: Boolean, required: false, default: false },
    isSelected: { type: Boolean, required: false, default: false },
    isDisabled: { type: Boolean, required: false, default: false },
    displayFunction: { type: Function, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const optionStatus = computed(() => {
      if (__props.isDisabled)
        return "disabled";
      else
        return "default";
    });
    const __returned__ = { optionStatus, get formSelectOptionVariants() {
      return formSelectOptionVariants;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "button",
    {
      class: normalizeClass($setup.formSelectOptionVariants({ variant: $setup.optionStatus, selected: $props.isSelected, active: $props.isActive }))
    },
    toDisplayString($props.displayFunction($props.value)),
    3
    /* TEXT, CLASS */
  );
}
_sfc_main$2.__file = "src/components/form/select/FormSelectOption.vue";
const FormSelectOption = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/vue-components/vue-components/src/components/form/select/FormSelectOption.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormSelect",
  props: mergeModels({
    hasSearch: { type: Boolean, required: false, default: false },
    isDisabled: { type: Boolean, required: false, default: false },
    isLoading: { type: Boolean, required: false, default: false },
    displayFunction: { type: Function, required: false, default: (value) => {
      return String(value);
    } },
    keyValue: { type: null, required: false },
    items: { type: Array, required: true }
  }, {
    "modelValue": { required: true }
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const { t } = useI18n();
    const model = useModel(__props, "modelValue");
    const isMultiple = computed(() => Array.isArray(model.value));
    const search = ref("");
    const getKeyValue = (value) => {
      if (__props.keyValue)
        return String(value[__props.keyValue]);
      else
        return String(value);
    };
    const hasValue = computed(() => {
      if (Array.isArray(model.value))
        return model.value.length > 0;
      else
        return model.value !== null && model.value !== void 0 && model.value !== "";
    });
    const getDisplayValue = (value) => {
      if (value === void 0)
        return "";
      else if (Array.isArray(value))
        return value.map((value2) => __props.displayFunction(value2)).join(", ");
      else
        return __props.displayFunction(value);
    };
    const filteredItems = computed(() => {
      return __props.items.filter((item) => {
        var _a;
        return (_a = getDisplayValue(item)) == null ? void 0 : _a.toLowerCase().includes(search.value.toLowerCase());
      });
    });
    const handleSearchChange = (event) => {
      search.value = event.target.value;
    };
    const isEmpty = computed(() => {
      return filteredItems.value.length === 0;
    });
    const __returned__ = { t, model, isMultiple, search, getKeyValue, hasValue, getDisplayValue, filteredItems, handleSearchChange, isEmpty, get Combobox() {
      return Je;
    }, get ComboboxButton() {
      return Ge;
    }, get ComboboxInput() {
      return Qe;
    }, get ComboboxOption() {
      return Ye;
    }, get ComboboxOptions() {
      return Xe;
    }, get Float() {
      return Ie;
    }, FormSelectOption, get scaleBounceTransition() {
      return scaleBounceTransition;
    }, TransitionExpand };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "text-left" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { key: 2 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" eslint-disable vue/no-extra-parens "),
      createCommentVNode(" eslint-disable vue/valid-v-model "),
      createBaseVNode("div", _hoisted_1$1, [
        createVNode($setup["Combobox"], {
          modelValue: $setup.model,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event),
          multiple: $setup.isMultiple
        }, {
          default: withCtx(() => [
            createVNode(
              $setup["Float"],
              mergeProps({
                placement: "bottom-start",
                "adaptive-width": "",
                offset: 4,
                flip: ""
              }, $setup.scaleBounceTransition),
              {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "input", {
                    displayFunction: $setup.getDisplayValue,
                    placeholder: $setup.hasValue ? $setup.getDisplayValue($setup.model) : "select",
                    value: $setup.model
                  }, () => [
                    $props.hasSearch ? (openBlock(), createBlock($setup["ComboboxButton"], {
                      key: "input",
                      as: "template",
                      disabled: $props.isDisabled
                    }, {
                      default: withCtx(() => [
                        createVNode($setup["ComboboxInput"], {
                          class: "relative w-full rounded border border-border bg-input px-4 py-2 text-left placeholder:transition-all placeholder:duration-300 focus:placeholder:translate-x-1 focus:placeholder:opacity-0",
                          "display-value": (item) => $setup.getDisplayValue(item),
                          placeholder: $setup.hasValue ? $setup.getDisplayValue($setup.model) : $setup.t("labels.select"),
                          disabled: $props.isDisabled,
                          onChange: $setup.handleSearchChange
                        }, null, 8, ["display-value", "placeholder", "disabled"])
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["disabled"])) : (openBlock(), createBlock($setup["ComboboxButton"], {
                      key: "button",
                      disabled: $props.isDisabled,
                      class: "relative w-full overflow-hidden truncate whitespace-nowrap rounded border border-border bg-input px-4 py-2 text-left placeholder:transition-all placeholder:duration-300 focus:placeholder:translate-x-1 focus:placeholder:opacity-0"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(
                          toDisplayString($setup.hasValue ? $setup.getDisplayValue($setup.model) : $setup.t("labels.select")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["disabled"]))
                  ]),
                  createVNode($setup["ComboboxOptions"], { class: "rounded bg-card p-2" }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "items", {
                        items: $props.items,
                        isEmpty: $setup.isEmpty
                      }, () => [
                        createVNode($setup["TransitionExpand"], null, {
                          default: withCtx(() => [
                            $props.isLoading ? (openBlock(), createElementBlock(
                              "div",
                              _hoisted_2,
                              toDisplayString($setup.t("labels.loading")),
                              1
                              /* TEXT */
                            )) : $setup.isEmpty ? (openBlock(), createElementBlock(
                              "div",
                              _hoisted_3,
                              toDisplayString($setup.t("labels.no_results")),
                              1
                              /* TEXT */
                            )) : (openBlock(), createElementBlock("div", _hoisted_4, [
                              (openBlock(true), createElementBlock(
                                Fragment,
                                null,
                                renderList($setup.filteredItems, (item) => {
                                  return openBlock(), createBlock($setup["ComboboxOption"], {
                                    key: $setup.getKeyValue(item),
                                    value: item
                                  }, {
                                    default: withCtx(({ active: active2, selected: selected2, disabled }) => [
                                      renderSlot(_ctx.$slots, "item", {
                                        item,
                                        displayFunction: $setup.getDisplayValue,
                                        active: active2,
                                        selected: selected2,
                                        disabled
                                      }, () => [
                                        createVNode(
                                          $setup["FormSelectOption"],
                                          normalizeProps(guardReactiveProps({
                                            value: item,
                                            isActive: active2,
                                            isSelected: selected2,
                                            isDisabled: disabled,
                                            displayFunction: $setup.getDisplayValue
                                          })),
                                          null,
                                          16
                                          /* FULL_PROPS */
                                        )
                                      ])
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  }, 1032, ["value"]);
                                }),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ]))
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
              },
              16
              /* FULL_PROPS */
            )
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["modelValue", "multiple"])
      ])
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
_sfc_main$1.__file = "src/components/form/select/FormSelect.vue";
const FormSelect = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/components/form/select/FormSelect.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormSelect.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const people = [
      "Durward Reynolds",
      "Kenton Towne",
      "Therese Wunsch",
      "Benedict Kessler",
      "Katelyn Rohan"
    ];
    const selectedPerson = ref();
    const selectedPeople = ref([]);
    const state = {
      hasSearch: true,
      isDisabled: false,
      isLoading: false
    };
    const __returned__ = { people, selectedPerson, selectedPeople, state, FormSelect };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col justify-start gap-20 py-20" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Forms/Input/Select" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.hasSearch,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.hasSearch = $event),
            title: "Search"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isDisabled,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.isDisabled = $event),
            title: "Disabled"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isLoading,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.isLoading = $event),
            title: "Loading"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["FormSelect"], mergeProps({
              modelValue: $setup.selectedPerson,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.selectedPerson = $event),
              items: $setup.people,
              class: "w-80"
            }, $setup.state), null, 16, ["modelValue"]),
            createVNode($setup["FormSelect"], mergeProps($setup.state, {
              modelValue: $setup.selectedPeople,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.selectedPeople = $event),
              class: "w-80",
              items: $setup.people,
              "display-function": (value) => value
            }), null, 16, ["modelValue", "display-function"])
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
_sfc_main.__file = "src/components/form/select/FormSelect.story.vue";
const FormSelect_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/form/select/FormSelect.story.vue"]]);
export {
  FormSelect_story as default
};
