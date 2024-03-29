<script setup lang="ts" generic="TInputType extends InputType">
import { ref, toRefs, useAttrs } from 'vue'
import type { InputFormProps, InputType, InputValue } from '@/types/input.type'
import AppInput from '@/components/input/AppInput.vue'
import AppButton from '@/components/button/AppButton.vue'
import AppFormError from '@/components/form-error/AppFormError.vue'
import AppFormLabel from '@/components/form-label/AppFormLabel.vue'
import { useFormInput } from '@/composables/form/useFormInput'
import AppTextFormDescription from '@/components/text/AppTextFormDescription.vue'

const props = withDefaults(defineProps<InputFormProps<TInputType>>(), {
  errors: null,
  label: null,
  description: null,
  isRequired: false,
})

const value = defineModel<InputValue<TInputType>>({
  required: true,
})

const { errors, isTouched, type } = toRefs(props)

const isPasswordVisible = ref<boolean>(false)

/**
 * For some reason, props which are defined in AppInput are parsed as attributes instead of props
 * This is a workaround to get the props from AppInput.
 */
const attrs = useAttrs()

const { computedValue, id, isInvalid, computedType } = useFormInput({
  isTouched,
  errors,
  type: type.value ?? 'text',
  isPasswordVisible,
  value,
})

function onTogglePassword(): void {
  isPasswordVisible.value = !isPasswordVisible.value
}
</script>

<template>
  <div :class="attrs.class">
    <AppFormLabel
      v-if="label !== null"
      :id="id"
      :is-disabled="isDisabled ?? false"
      :is-invalid="isInvalid"
      :is-required="isRequired"
      :label="label"
    />

    <AppInput
      :id="id"
      v-model="computedValue"
      v-bind="{
        ...(props as Record<string, unknown>),
        ...attrs,
        class: undefined,
      }"
      :is-invalid="isInvalid"
      :type="computedType"
    >
      <template #left>
        <slot name="left" />
      </template>

      <template #right>
        <slot name="right">
          <AppButton
            v-if="type === 'password'"
            class="scale-[85%]"
            :icon-left="isPasswordVisible ? 'eyeSlash' : 'eye'"
            size="icon"
            variant="ghost"
            @click="onTogglePassword"
          />
        </slot>
      </template>
    </AppInput>
    <AppTextFormDescription
      v-if="description !== null"
      class="mt-1"
    >
      {{ description }}
    </AppTextFormDescription>

    <AppFormError
      :errors="errors"
      :is-touched="isTouched"
    />
  </div>
</template>
