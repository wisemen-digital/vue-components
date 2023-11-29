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
}

const {
  items,
  displayFunction = (value: T): string => {
    return String(value)
  },
} = defineProps<AppSelectProps<T>>()

const emits = defineEmits<{
  hide: []
  show: []
}>()

const model = defineModel<T | T[]>('modelValue')

function onHide(): void {
  emits('hide')
}

function onShow(): void {
  emits('show')
}
</script>

<template>
  <AppSelectContainer
    v-slot="{ items: slotItems }"
    v-model="model"
    :items="items"
    :is-disabled="isDisabled"
    :display-function="displayFunction"
    @hide="onHide"
    @show="onShow"
  >
    <AppSelectInput />
    <AppSelectOptions v-slot="{ item, active, disabled, selected }" :items="slotItems">
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
