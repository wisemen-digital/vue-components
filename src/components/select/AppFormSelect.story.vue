<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ZodFormattedError } from 'zod'
import AppFormSelect from '@/components/select/AppFormSelect.vue'

const people = [
  'Durward Reynolds',
  'Kenton Towne',
  'Therese Wunsch',
  'Benedict Kessler',
  'Katelyn Rohan',
]

const selectedPerson = ref<string>('')

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

function onBlur(): void {
  state.isTouched = true
}
</script>

<template>
  <Story title="Select/AppFormSelect">
    <Variant title="Default">
      <template #controls>
        <HstCheckbox v-model="state.isDisabled" title="Disabled" />
        <HstCheckbox v-model="state.isInvalid" title="Invalid" />
        <HstCheckbox v-model="state.isRequired" title="Required" />
        <HstCheckbox v-model="state.isTouched" title="Is Touched" />
        <HstText v-model="state.placeholder" title="Placeholder" />
        <HstText v-model="state.description" title="Description" />
        <HstText v-model="state.label" title="Label" />
      </template>

      <div class="flex flex-col justify-start gap-20 py-20">
        <AppFormSelect
          v-model="selectedPerson"
          :items="people"
          v-bind="state"
          :display-function="(person: string) => person"
          class="w-80"
          @blur="onBlur"
        />
      </div>
    </Variant>
  </Story>
</template>
