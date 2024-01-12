<script setup lang="ts" generic="TValue">
import type { z } from 'zod'

import { computed } from 'vue'
import { generateUuid } from '@/utils/uuid/generateUuid'
import AppText from '@/components/text/AppText.vue'
import AppFormError from '@/components/form-error/AppFormError.vue'
import AppFormLabel from '@/components/form-label/AppFormLabel.vue'
import type { AppSwitchProps } from '@/components/switch/AppSwitch.vue'
import AppSwitch from '@/components/switch/AppSwitch.vue'
import AppTextDescription from '@/components/text/AppTextDescription.vue'

export interface Props<T> extends Omit<AppSwitchProps<T>, 'isInvalid'> {
  /**
   * The error messages associated with the component, if any.
   * It should be an object with an "_errors" property containing an array of strings.
   */
  errors?: z.ZodFormattedError<string> | undefined | null

  /**
   * The label to be displayed above the component.
   */
  label?: string | null

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

const props = withDefaults(defineProps<Props<TValue>>(), {
  errors: null,
  label: null,
  description: null,
  isRequired: false,
})

const emits = defineEmits<{
  blur: []
  focus: []
}>()

const value = defineModel<TValue | null>({
  required: true,
})

const id = `app-form-switch-${generateUuid()}`

const isInvalid = computed<boolean>(() => {
  const { errors, isTouched } = props

  return isTouched && errors != null
})

function onBlur(): void {
  emits('blur')
}

function onFocus(): void {
  emits('focus')
}
</script>

<template>
  <div class="flex flex-col">
    <AppFormLabel
      v-if="label !== null"
      :id="id"
      :is-disabled="isDisabled ?? false"
      :is-invalid="isInvalid"
      :is-required="isRequired"
      :label="label"
    />

    <AppSwitch
      :id="id"
      v-model="value"
      v-bind="props"
      :is-invalid="isInvalid"
      @blur="onBlur"
      @focus="onFocus"
    />

    <AppTextDescription
      v-if="description !== null"
      class="mt-1"
    >
      {{ description }}
    </AppTextDescription>

    <AppFormError
      :errors="errors"
      :is-touched="isTouched"
    />
  </div>
</template>
