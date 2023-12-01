const __resolved__virtual_storySource_srcComponentsSelectAppformselectStoryVue = `<script setup lang="ts">
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
const selectedPersons = ref<string[]>([])

interface State {
  isFilterable: boolean
  isInvalid: boolean
  isDisabled: boolean
  hasMultiple: boolean
  placeholder: string
  description: string
  label: string
  isTouched: boolean
  isRequired: boolean
  errors: ZodFormattedError<string>
}

const state: State = reactive({
  isFilterable: false,
  isDisabled: false,
  hasMultiple: false,
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
<\/script>

<template>
  <Story title="Select/AppFormSelect">
    <Variant title="Default">
      <template #controls>
        <HstCheckbox v-model="state.hasMultiple" title="Has Multiple" />
        <HstCheckbox v-model="state.isFilterable" title="Filterable" />
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
          v-if="!state.hasMultiple"
          v-model="selectedPerson"
          :items="people"
          v-bind="state"
          :display-function="(person: string) => person"
          class="w-80"
          @blur="onBlur"
        />
        <AppFormSelect
          v-else
          v-model="selectedPersons"
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
`;
export {
  __resolved__virtual_storySource_srcComponentsSelectAppformselectStoryVue as default
};
