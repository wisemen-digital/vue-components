<script setup lang="ts" generic="T, TModel extends T[] | T | undefined">
import { computed, ref } from 'vue'
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue'
import { Float } from '@headlessui-float/vue'
import FormSelectOption2 from './FormSelectOption2.vue'

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

const getDisplayValue = (value: T | T[] | undefined): string => {
  if (value === undefined)
    return ''
  else
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
</script>

<template>
  <!-- eslint-disable vue/no-extra-parens -->
  <!-- eslint-disable vue/valid-v-model -->

  <div class="text-left">
    <Combobox
      v-model="(model as any)"
      :multiple="isMultiple"
    >
      <Float placement="bottom-start" adaptive-width :offset="4" flip>
        <slot
          name="input"
          :display-function="getDisplayValue"
          :placeholder="hasValue ? getDisplayValue(model) : 'select'"
          :value="model"
        >
          <ComboboxButton v-if="hasSearch" as="template">
            <ComboboxInput
              class="relative w-full rounded border border-border bg-input px-4 py-2 text-left placeholder:transition-all placeholder:duration-300 focus:placeholder:translate-x-1 focus:placeholder:opacity-0"
              :display-value="(item) => getDisplayValue(item as any)"
              :placeholder="hasValue ? getDisplayValue(model) : 'select'"
              @change="handleSearchChange"
            />
          </ComboboxButton>
          <ComboboxButton
            v-else
            class="relative w-full overflow-hidden truncate whitespace-nowrap rounded border border-border bg-input px-4 py-2 text-left placeholder:transition-all placeholder:duration-300 focus:placeholder:translate-x-1 focus:placeholder:opacity-0"
          >
            {{ hasValue ? getDisplayValue(model) : 'select' }}
          </ComboboxButton>
        </slot>

        <ComboboxOptions>
          <slot :items="items">
            <ComboboxOption
              v-for="item in filteredItems"
              v-slot="{ active, selected, disabled }"
              :key="getKeyValue(item)"
              :value="(item as any)"
            >
              <slot
                name="item"
                :item="item"
                :display-function="getDisplayValue"
                :active="active"
                :selected="selected"
                :disabled="disabled"
              >
                <FormSelectOption2
                  v-bind="{
                    value: item,
                    isActive: active,
                    isSelected: selected,
                    isDisabled: disabled,
                    displayFunction: getDisplayValue,
                  }"
                />
              </slot>
            </ComboboxOption>
          </slot>
        </ComboboxOptions>
      </Float>
    </Combobox>
  </div>
</template>
