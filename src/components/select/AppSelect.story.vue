<script setup lang="ts">
import { reactive, ref } from 'vue'
import AppSelect from '@/components/select/AppSelect.vue'
import AppInput from '@/components/input/AppInput.vue'

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
  isFilterable?: boolean
  isInvalid?: boolean
  isDisabled?: boolean
  hasMultiple?: boolean
  placeholder?: string
}

const state: State = reactive({
  isFilterable: false,
  hasMultiple: false,
  isDisabled: false,
  isInvalid: false,
  placeholder: 'Placeholder',
})
</script>

<template>
  <Story title="Select/AppSelect">
    <Variant title="Default">
      <template #controls>
        <HstCheckbox v-model="state.isFilterable" title="Filterable" />
        <HstCheckbox v-model="state.hasMultiple" title="Has Multiple" />
        <HstCheckbox v-model="state.isDisabled" title="Disabled" />
        <HstCheckbox v-model="state.isInvalid" title="Invalid" />
        <HstText v-model="state.placeholder" title="Placeholder" />
      </template>
      <div class="flex flex-row justify-start gap-2 py-20">
        <AppSelect v-if="!state.hasMultiple" v-model="selectedPerson" :items="people" :display-function="(person: string) => person" class="w-80" v-bind="state" />
        <AppSelect v-else v-model="selectedPersons" :items="people" :display-function="(person: string) => person" class="w-80" v-bind="state" />
      </div>
    </Variant>
  </Story>
</template>
