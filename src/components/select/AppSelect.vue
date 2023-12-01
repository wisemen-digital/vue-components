<script setup lang="ts" generic="T">
import AppSelectContainer from '@/components/select/AppSelectContainer.vue'
import AppSelectInput from '@/components/select/AppSelectInput.vue'
import AppSelectOption from '@/components/select/AppSelectOption.vue'
import AppSelectOptions from '@/components/select/AppSelectOptions.vue'

export interface AppSelectProps<T> {
  displayFunction?: (value: T) => string
  keyValue?: keyof T
  items: T[]
  isDisabled?: boolean
  placeholder?: string
  isFilterable?: boolean
  isInvalid?: boolean
}

const {
  items,
  displayFunction = (value: T): string => {
    return String(value)
  },
  isFilterable = false,
  isInvalid = false,
} = defineProps<AppSelectProps<T>>()

const emits = defineEmits<{
  hide: []
  show: []
  'update:search': [string]
}>()

const model = defineModel<T | T[]>({
  required: true,
})

function onHide(): void {
  emits('hide')
}

function onShow(): void {
  emits('show')
}

function onUpdateSearch(search: string): void {
  emits('update:search', search)
}
</script>

<template>
  <AppSelectContainer
    v-slot="{ items: slotItems, isOpen }"
    v-model="model"
    :items="items"
    :is-disabled="isDisabled"
    :display-function="displayFunction"
    :is-filterable="isFilterable"
    :is-invalid="isInvalid"
    @hide="onHide"
    @show="onShow"
    @update:search="onUpdateSearch"
  >
    <AppSelectInput
      :placeholder="placeholder"
      :is-open="isOpen"
    />
    <AppSelectOptions
      v-slot="{ item, active, disabled, selected }"
      :items="slotItems"
      :is-open="isOpen"
    >
      <slot>
        <AppSelectOption
          :value="item"
          :is-active="active"
          :is-disabled="disabled"
          :is-selected="selected"
        />
      </slot>
    </AppSelectOptions>
  </AppSelectContainer>
</template>
