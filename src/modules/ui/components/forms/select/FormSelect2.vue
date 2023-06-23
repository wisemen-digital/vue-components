<script setup lang="ts" generic="T, TModel extends T[] | T ">
import { computed, ref } from 'vue'
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue'

interface Props {
  hasSearch?: boolean
  isDisabled?: boolean
  isLoading?: boolean
  displayFunction?: (value: T) => string
  keyValue?: keyof T
  items: T[]
}

const {
  items,
  hasSearch = false,
  isDisabled = false,
  isLoading = false,
  keyValue,
  displayFunction = (value: T): string => {
    return String(value)
  },
} = defineProps<Props>()

const model = defineModel<TModel>('modelValue', { required: true })
const isMultiple = computed<boolean>(() => Array.isArray(model.value))
const search = ref<string>('')

const getKeyValue = (value: T): string => {
  if (keyValue)
    return String(value[keyValue])
  else
    return String(value)
}

const hasValue = computed<boolean>(() => {
  if (Array.isArray(model.value))
    return model.value.length > 0
  else
    return model.value !== null
})

const getDisplayValue = (value: T | T[]): string => {
  if (Array.isArray(value))
    return value.map(value => displayFunction(value)).join(', ')
  else
    return displayFunction(value)
}

const filteredItems = computed(() => {
  return items.filter((item) => {
    return getDisplayValue(item)?.toLowerCase().includes(search.value.toLowerCase())
  })
})

const handleSearchChange = (event: Event): void => {
  search.value = (event.target as HTMLInputElement).value
}

const handleFocusChange = (event: Event): void => {
  search.value = ''
}
</script>

<template>
  <!-- eslint-disable vue/no-extra-parens -->
  <!-- eslint-disable vue/valid-v-model -->
  <Combobox v-model="(model as any)" :multiple="isMultiple">
    <ComboboxButton as="template">
      <ComboboxInput

        class="bg-red-500"
        :display-value="(item) => getDisplayValue(item as any)"
        :placeholder="hasValue ? getDisplayValue(model) : 'select'"
        @change="handleSearchChange"
        @focus="handleFocusChange"
      />
    </ComboboxButton>

    <ComboboxOptions>
      <ComboboxOption
        v-for="item in filteredItems"
        :key="getKeyValue(item)"
        :value="(item as any)"
      >
        <slot
          name="item"
          :item="item"
          :display-function="getDisplayValue"
        >
          {{ getDisplayValue(item) }}
        </slot>
      </ComboboxOption>
    </ComboboxOptions>
  </Combobox>
</template>
