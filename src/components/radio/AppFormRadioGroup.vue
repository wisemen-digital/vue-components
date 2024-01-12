<script setup lang="ts" generic="T">
import type { z } from 'zod'
import { computed, useAttrs } from 'vue'
import AppFormError from '@/components/form-error/AppFormError.vue'
import type { AppRadioGroupProps } from '@/components/radio/AppRadioGroup.vue'
import AppRadioGroup from '@/components/radio/AppRadioGroup.vue'
import AppTextFormDescription from '@/components/text/AppTextFormDescription.vue'

interface AppFormRadioGroup extends AppRadioGroupProps<T> {
  /**
   * The error messages associated with the component, if any.
   * It should be an object with an "_errors" property containing an array of strings.
   */
  errors?: z.ZodFormattedError<string> | undefined | null

  /**
   * Extra information to be displayed below the input.
   */
  description?: string | null

  /**
   * Determines if the component has emitted a `blur` event.
   */
  isTouched: boolean

  /**
   * Determines if the input is required.
   */
  isRequired?: boolean
}

const {
  errors = null,
  description = null,
  items,
  isDisabled,
  isTouched,
} = defineProps<AppFormRadioGroup>()

const emits = defineEmits<{
  blur: []
}>()

const value = defineModel<T>({
  required: true,
})

/**
 * For some reason, props which are defined in AppInput are parsed as attributes instead of props
 * This is a workaround to get the props from AppInput.
 */
const attrs = useAttrs()

function onBlur(): void {
  emits('blur')
}

const isInvalid = computed<boolean>(() => {
  return isTouched && errors != null
})
</script>

<template>
  <div :class="attrs.class">
    <AppRadioGroup
      v-model="value"
      :label="label"
      :items="items"
      :disabled-key="(disabledKey as unknown as keyof NonNullable<T>)"
      :description-key="(descriptionKey as unknown as keyof NonNullable<T>)"
      :label-key="(labelKey as unknown as keyof NonNullable<T>)"
      :by="(by as unknown as keyof NonNullable<T>)"
      :is-disabled="isDisabled"
      :is-required="isRequired"
      :is-touched="isTouched"
      :is-invalid="isInvalid"
      v-bind="{
        ...attrs,
        class: undefined,
      }"
      @blur="onBlur"
    />

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
