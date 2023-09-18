<script setup lang="ts" generic="T, TModel extends T[] | T | undefined">
import FormSelectContainer from './FormSelectContainer.vue'
import FormSelectInput from './FormSelectInput.vue'
import FormSelectOption from './FormSelectOption.vue'
import FormSelectOptions from './FormSelectOptions.vue'

interface Props {
  displayFunction?: (value: T) => string
  keyValue?: keyof T
  items: T[]
}

const {
  items,
  displayFunction = (value: T): string => {
    return String(value)
  },
} = defineProps<Props>()

const model = defineModel<TModel>('modelValue', { required: true })
</script>

<template>
  <FormSelectContainer
    v-slot="{ items: slotItems }"
    v-model="model"
    :items="items"
    :display-function="displayFunction"
  >
    <FormSelectInput />
    <FormSelectOptions v-slot="{ item, active, disabled, selected }" :items="slotItems">
      <slot>
        <FormSelectOption
          :value="item"
          :is-active="active"
          :is-disabled="disabled"
          :is-selected="selected"
        />
      </slot>
    </FormSelectOptions>
  </FormSelectContainer>
</template>
