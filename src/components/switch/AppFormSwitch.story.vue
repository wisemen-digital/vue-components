<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ZodFormattedError } from 'zod'
import AppFormSwitch from '@/components/switch/AppFormSwitch.vue'

interface State {
  isDisabled: boolean
  description: string
  label: string
  isTouched: boolean
  isRequired: boolean
  isCheckbox: boolean
  selectedBackgroundClass: string
  errors: ZodFormattedError<string>
}

const state: State = reactive({
  isDisabled: false,
  description: 'Description',
  label: 'Label',
  isTouched: false,
  isRequired: false,
  errors: {
    _errors: ['This is an error'],
  },
  isCheckbox: false,
  selectedBackgroundClass: 'bg-primary',
})

const value = ref('hey')
</script>

<template>
  <Story
    title="Switch/AppFormSwitch"
  >
    <Variant title="Default" auto-props-disabled>
      <template #controls>
        <HstCheckbox v-model="state.isDisabled" title="Disabled" />
        <HstCheckbox v-model="state.isRequired" title="Required" />
        <HstCheckbox v-model="state.isTouched" title="Is Touched" />
        <HstCheckbox v-model="state.isCheckbox" title="Is Checkbox" />
        <HstText v-model="state.selectedBackgroundClass" title="Selected Background Class" />

        <HstText v-model="state.description" title="Description" />
        <HstText v-model="state.label" title="Label" />
      </template>

      <div class="grid w-full max-w-max place-items-center">
        <AppFormSwitch v-bind="state" v-model="value" class="w-full" @blur="state.isTouched = true" />
      </div>
    </Variant>
  </Story>
</template>
