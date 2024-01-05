<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ZodFormattedError } from 'zod'
import AppDatePicker from '@/components/datepicker/AppDatePicker.vue'

const date = ref<Date | null>(null)

interface State {
  isInvalid: boolean
  isDisabled: boolean
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
  <Story
    title="DatePicker/AppDatepicker"
  >
    <Variant title="Default" auto-props-disabled>
      <template #controls>
        <HstText v-model="state.placeholder" title="Placeholder" />
      </template>

      <div class="grid place-items-center">
        <AppDatePicker
          v-bind="state"
          v-model="date"
          @blur="state.isTouched = true"
        />
      </div>
    </Variant>
  </Story>
</template>
