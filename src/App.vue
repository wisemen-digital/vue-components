<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ZodFormattedError } from 'zod'
import type { InputType } from '@/types/input.type'
import type { Icon } from '@/icons'
import AppDatePicker from '@/components/datepicker/AppDatePicker.vue'

const date = ref<Date | null>(null)

interface State {
  isInvalid: boolean
  isDisabled: boolean
  type: InputType
  iconLeft?: Icon
  iconRight?: Icon
  placeholder: string
  description: string
  label: string
  isTouched: boolean
  isRequired: boolean
  errors: ZodFormattedError<string>
}

const state: State = reactive({
  isDisabled: false,
  isInvalid: false,
  type: 'text',
  iconLeft: undefined,
  iconRight: undefined,
  placeholder: 'Placeholder',
  description: 'Description',
  label: 'Label',
  isTouched: false,
  isRequired: false,
  errors: {
    _errors: ['This is an error'],
  },
})
</script>

<template>
  <AppDatePicker
    v-bind="state"
    v-model="date"
    @blur="state.isTouched = true"
  />
  {{ date }}
  <!-- <RouterView /> -->
</template>
