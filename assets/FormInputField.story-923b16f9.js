import { as as defineComponent, av as openBlock, aT as createElementBlock, aN as renderSlot, aC as createTextVNode, aD as toDisplayString, aZ as inject, a_ as computed, a$ as ref, b0 as watch, b1 as onMounted, b2 as onUnmounted, aF as mergeModels, b3 as useSlots, aG as useModel, b4 as useClipboard, aO as createCommentVNode, az as createBaseVNode, aM as normalizeClass, b5 as withDirectives, b6 as vModelDynamic, ay as createVNode, ax as withCtx, aw as createBlock, at as reactive, au as resolveComponent, aE as mergeProps } from "./vendor-3589f703.js";
import { _ as _export_sfc, c as cva } from "./cva-94ab58b2.js";
import { A as AppIcon, i as iconNames } from "./AppIcon-773d861c.js";
import { T as TransitionExpand } from "./TransitionExpand-cc0485f9.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FormError",
  props: {
    errorMessage: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "text-subtext text-destructive" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("p", _hoisted_1$1, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createTextVNode(
        toDisplayString($props.errorMessage),
        1
        /* TEXT */
      )
    ])
  ]);
}
_sfc_main$2.__file = "src/components/form/error/FormError.vue";
const FormError = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/vue-components/vue-components/src/components/form/error/FormError.vue"]]);
const statusOptions = {
  default: "border-border",
  error: "border-destructive",
  success: "border-success",
  readonly: "bg-muted text-muted-foreground",
  disabled: "opacity-60"
};
const extraContentOptions = {
  default: "",
  back: "rounded-r-none border-r-0",
  front: "rounded-l-none border-l-0",
  both: "rounded-l-none border-l-0 rounded-r-none border-r-0"
};
const inputFieldVariants = cva(
  {
    base: "relative w-full rounded border border-border bg-input px-4 py-2 placeholder:transition-all placeholder:duration-300 focus:placeholder:translate-x-1 focus:placeholder:opacity-0",
    variants: {
      status: statusOptions,
      extraContent: extraContentOptions
    },
    defaultVariants: {
      status: "default",
      extraContent: "default"
    }
  }
);
const extraContentTypes = {
  back: "rounded-l-none border-l-0",
  front: "rounded-r-none border-r-0"
};
const extraContentBorderOptions = {
  true: "",
  false: ""
};
const inputFieldExtraContentVariants = cva(
  {
    base: "flex items-center justify-center rounded border border-border bg-input px-4",
    variants: {
      status: statusOptions,
      extraContentType: extraContentTypes,
      extraContentBorder: extraContentBorderOptions
    },
    compoundVariants: [
      {
        extraContentBorder: true,
        extraContentType: "front",
        class: "border-r"
      },
      {
        extraContentBorder: true,
        extraContentType: "back",
        class: "border-l"
      }
    ],
    defaultVariants: {
      extraContentType: "back"
    }
  }
);
function generateUuid() {
  let d = (/* @__PURE__ */ new Date()).getTime();
  let d2 = typeof performance !== "undefined" && performance.now && performance.now() * 1e3 || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : r & 3 | 8).toString(16);
  });
}
const FormInputGroupContext = Symbol("FormGroupContext");
function useFormInputGroupContext() {
  const context = inject(FormInputGroupContext, null);
  return context;
}
function useFormInputGroup({ model, uuid, isDisabled, element }) {
  const context = useFormInputGroupContext();
  const propsRef = computed(() => ({
    value: typeof model.value === "number" ? model.value : 0,
    disabled: isDisabled == null ? void 0 : isDisabled.value
  }));
  const option = ref({ id: uuid, element: element.value, propsRef: propsRef.value });
  const change = (value) => {
    if ((isDisabled == null ? void 0 : isDisabled.value) || !context)
      return;
    const newValue = context.change(option, value);
    model.value = newValue;
  };
  watch(
    () => model.value,
    (value) => {
      if (!value)
        return;
      change(value);
    }
  );
  onMounted(() => {
    if (context)
      context.registerOption(option);
  });
  onUnmounted(() => {
    if (context)
      context.unregisterOption(uuid);
  });
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormInputField",
  props: mergeModels({
    isSuccess: { type: Boolean, required: false, default: false },
    isReadOnly: { type: Boolean, required: false, default: false },
    isDisabled: { type: Boolean, required: false, default: false },
    isTouched: { type: Boolean, required: false, default: false },
    isDirty: { type: Boolean, required: false, default: false },
    isCopyable: { type: Boolean, required: false, default: false },
    isOptional: { type: Boolean, required: false },
    hasExtraContentBorder: { type: Boolean, required: false },
    placeholder: { type: String, required: false },
    type: { type: null, required: false, default: "text" },
    label: { type: String, required: false },
    errors: { type: Object, required: false, default: () => ({ _errors: [] }) },
    backContent: { type: String, required: false },
    frontContent: { type: String, required: false },
    backIcon: { type: null, required: false },
    frontIcon: { type: null, required: false }
  }, {
    "modelValue": {}
  }),
  emits: mergeModels(["blur"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: emits }) {
    __expose();
    const slots = useSlots();
    const model = useModel(__props, "modelValue");
    const uuid = generateUuid();
    const element = ref();
    const errorShown = computed(() => __props.errors._errors.length > 0 && (__props.isTouched || __props.isDirty));
    const hasFrontContent = computed(() => __props.frontContent || slots.frontContent || __props.frontIcon);
    const hasBackContent = computed(() => __props.backContent || slots.backContent || __props.backIcon || __props.isCopyable || __props.type === "password");
    const currentExtraContent = computed(() => {
      if (hasFrontContent.value && hasBackContent.value)
        return "both";
      if (hasFrontContent.value)
        return "front";
      if (hasBackContent.value)
        return "back";
      return "default";
    });
    const currentStatus = computed(() => {
      if (errorShown.value)
        return "error";
      if (__props.isSuccess)
        return "success";
      if (__props.isReadOnly)
        return "readonly";
      if (__props.isDisabled)
        return "disabled";
      return "default";
    });
    const copyModel = computed(() => {
      var _a;
      return ((_a = model.value) == null ? void 0 : _a.toString()) ?? "";
    });
    const { copy } = useClipboard();
    if (__props.type === "number")
      useFormInputGroup({ model, element, uuid, isDisabled: computed(() => __props.isDisabled) });
    const passwordShown = ref(false);
    function togglePasswordShown() {
      passwordShown.value = !passwordShown.value;
    }
    const inputType = computed(() => __props.type === "password" && passwordShown.value ? "text" : __props.type);
    const __returned__ = { emits, slots, model, uuid, element, errorShown, hasFrontContent, hasBackContent, currentExtraContent, currentStatus, copyModel, copy, passwordShown, togglePasswordShown, inputType, FormError, get inputFieldExtraContentVariants() {
      return inputFieldExtraContentVariants;
    }, get inputFieldVariants() {
      return inputFieldVariants;
    }, AppIcon, TransitionExpand };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { ref: "element" };
const _hoisted_2 = { class: "flex items-center justify-between gap-4" };
const _hoisted_3 = ["for"];
const _hoisted_4 = {
  key: 0,
  class: "text-caption text-muted-foreground"
};
const _hoisted_5 = { class: "flex" };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = ["id", "disabled", "type", "placeholder", "readonly"];
const _hoisted_8 = { key: 3 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    _hoisted_1,
    [
      createCommentVNode(" Label "),
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("label", { for: $setup.uuid }, [
          renderSlot(_ctx.$slots, "label", {}, () => [
            createTextVNode(
              toDisplayString($props.label),
              1
              /* TEXT */
            )
          ])
        ], 8, _hoisted_3),
        $props.isOptional ? (openBlock(), createElementBlock("p", _hoisted_4, " Optional ")) : createCommentVNode("v-if", true)
      ]),
      createBaseVNode("div", _hoisted_5, [
        createCommentVNode(" Content before the input "),
        $setup.hasFrontContent ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            class: normalizeClass(
              $setup.inputFieldExtraContentVariants(
                {
                  extraContentType: "front",
                  status: $setup.currentStatus,
                  extraContentBorder: $props.hasExtraContentBorder
                }
              )
            )
          },
          [
            renderSlot(_ctx.$slots, "frontContent", {}, () => [
              $props.frontIcon ? (openBlock(), createBlock($setup["AppIcon"], {
                key: 0,
                icon: $props.frontIcon
              }, null, 8, ["icon"])) : $props.frontContent ? (openBlock(), createElementBlock(
                "div",
                _hoisted_6,
                toDisplayString($props.frontContent),
                1
                /* TEXT */
              )) : createCommentVNode("v-if", true)
            ])
          ],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true),
        createCommentVNode(" Input "),
        withDirectives(createBaseVNode("input", {
          id: $setup.uuid,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event),
          disabled: $props.isDisabled,
          type: $setup.inputType,
          min: "0",
          class: normalizeClass($setup.inputFieldVariants({ status: $setup.currentStatus, extraContent: $setup.currentExtraContent })),
          placeholder: $props.placeholder,
          readonly: $props.isReadOnly,
          onBlur: _cache[1] || (_cache[1] = ($event) => $setup.emits("blur"))
        }, null, 42, _hoisted_7), [
          [vModelDynamic, $setup.model]
        ]),
        createCommentVNode(" Content after the input "),
        $setup.hasBackContent ? (openBlock(), createElementBlock(
          "div",
          {
            key: 1,
            class: normalizeClass(
              $setup.inputFieldExtraContentVariants(
                {
                  extraContentType: "back",
                  status: $setup.currentStatus,
                  extraContentBorder: $props.hasExtraContentBorder
                }
              )
            )
          },
          [
            renderSlot(_ctx.$slots, "backContent", {}, () => [
              $props.type === "password" ? (openBlock(), createElementBlock("button", {
                key: 0,
                onClick: $setup.togglePasswordShown
              }, [
                $setup.passwordShown ? (openBlock(), createBlock($setup["AppIcon"], {
                  key: 0,
                  icon: "eyeSlash"
                })) : (openBlock(), createBlock($setup["AppIcon"], {
                  key: 1,
                  icon: "eye"
                }))
              ])) : $props.isCopyable ? (openBlock(), createElementBlock("button", {
                key: 1,
                onClick: _cache[2] || (_cache[2] = ($event) => $setup.copy($setup.copyModel))
              }, " Copy ")) : $props.backIcon ? (openBlock(), createBlock($setup["AppIcon"], {
                key: 2,
                icon: $props.backIcon
              }, null, 8, ["icon"])) : $props.backContent ? (openBlock(), createElementBlock(
                "div",
                _hoisted_8,
                toDisplayString($props.backContent),
                1
                /* TEXT */
              )) : createCommentVNode("v-if", true)
            ])
          ],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true)
      ]),
      createCommentVNode(" Error "),
      createVNode($setup["TransitionExpand"], { duration: 0.2 }, {
        default: withCtx(() => [
          $setup.errorShown ? (openBlock(), createBlock($setup["FormError"], {
            key: 0,
            "error-message": $props.errors._errors[0]
          }, null, 8, ["error-message"])) : createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      })
    ],
    512
    /* NEED_PATCH */
  );
}
_sfc_main$1.__file = "src/components/form/field/FormInputField.vue";
const FormInputField = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-components/vue-components/src/components/form/field/FormInputField.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormInputField.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const inputTypes = ["text", "password", "email", "tel", "url", "search"];
    const state = reactive({
      isDisabled: false,
      isLoading: false,
      isDirty: false,
      isTouched: false,
      isReadOnly: false,
      isCopyable: false,
      isOptional: false,
      hasExtraContentBorder: false,
      label: "Label",
      content: "",
      errors: { _errors: [] },
      placeholder: "Placeholder",
      frontIcon: void 0,
      backIcon: void 0,
      frontContent: void 0,
      backContent: void 0,
      type: "text"
    });
    const number = ref(0);
    const __returned__ = { inputTypes, state, number, FormInputField, get iconNames() {
      return iconNames;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstText = resolveComponent("HstText");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Forms/Input/Field" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Default",
        "auto-props-disabled": ""
      }, {
        controls: withCtx(() => [
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.type,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.type = $event),
            title: "Input type",
            options: [...$setup.inputTypes]
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isDisabled,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.isDisabled = $event),
            title: "Disabled"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isLoading,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.isLoading = $event),
            title: "Loading"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isDirty,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.state.isDirty = $event),
            title: "Dirty"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isReadOnly,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.state.isReadOnly = $event),
            title: "Readonly"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isTouched,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.state.isTouched = $event),
            title: "Touched"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isCopyable,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.state.isCopyable = $event),
            title: "Copyable"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.isOptional,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.state.isOptional = $event),
            title: "Optional"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.state.hasExtraContentBorder,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.state.hasExtraContentBorder = $event),
            title: "Extra content border"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.placeholder,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.state.placeholder = $event),
            title: "Placeholder"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.content,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.state.content = $event),
            title: "Text"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.errors._errors[0],
            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.state.errors._errors[0] = $event),
            title: "Error message"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.frontIcon,
            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.state.frontIcon = $event),
            title: "Front Icon",
            options: ["none", ...$setup.iconNames]
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.backIcon,
            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.state.backIcon = $event),
            title: "Back Icon",
            options: ["none", ...$setup.iconNames]
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.frontContent,
            "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.state.frontContent = $event),
            title: "Front Content"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.state.backContent,
            "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $setup.state.backContent = $event),
            title: "Back Content"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode($setup["FormInputField"], mergeProps({
            modelValue: $setup.state.content,
            "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $setup.state.content = $event)
          }, $setup.state), null, 16, ["modelValue"]),
          createVNode($setup["FormInputField"], mergeProps({
            modelValue: $setup.number,
            "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $setup.number = $event)
          }, $setup.state, { type: "number" }), null, 16, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/form/field/FormInputField.story.vue";
const FormInputField_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-components/vue-components/src/components/form/field/FormInputField.story.vue"]]);
export {
  FormInputField_story as default
};
