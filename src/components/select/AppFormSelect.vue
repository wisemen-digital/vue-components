<script setup lang="ts" generic="T">
import type { z } from 'zod'
import { computed, ref, useAttrs } from 'vue'
import type { AppSelectProps } from '@/components/select/AppSelect.vue'
import { generateUuid } from '@/utils/uuid/generateUuid'
import AppFormLabel from '@/components/form-label/AppFormLabel.vue'
import AppSelect from '@/components/select/AppSelect.vue'
import AppText from '@/components/text/AppText.vue'
import AppFormError from '@/components/form-error/AppFormError.vue'

interface AppFormSelectProps extends AppSelectProps<T> {
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

const {
  errors = null,
  label = null,
  description = null,
  isRequired = false,
  items,
  displayFunction,
  isDisabled,
  isTouched,
  keyValue,
} = defineProps<AppFormSelectProps>()

const emits = defineEmits<{
  blur: []
}>()

const value = defineModel<T | T[]>({
  required: true,
})

const id = `app-form-select-${generateUuid()}`

/**
 * For some reason, props which are defined in AppInput are parsed as attributes instead of props
 * This is a workaround to get the props from AppInput.
 */
const attrs = useAttrs()

function onHide(): void {
  emits('blur')
}

const isInvalid = computed<boolean>(() => {
  return isTouched && errors != null
})
</script>

<template>
  <div :class="attrs.class">
    <AppFormLabel
      v-if="label !== null"
      :id="id"
      :is-disabled="isDisabled ?? false"
      :is-required="isRequired"
      :label="label"
    />

    <AppSelect
      :id="id"
      v-model="value"
      :items="items"
      :placeholder="placeholder"
      :is-filterable="isFilterable"
      :key-value="(keyValue as keyof T)"
      :is-disabled="isDisabled"
      :display-function="displayFunction"
      :is-touched="isTouched"
      :is-invalid="isInvalid"
      v-bind="{
        ...attrs,
        class: undefined,
      }"
      @hide="onHide"
    />

    <AppText
      v-if="description !== null"
      class="mt-1"
      variant="caption"
    >
      {{ description }}
    </AppText>

    <AppFormError
      :errors="errors"
      :is-touched="isTouched"
    />
  </div>
</template>
