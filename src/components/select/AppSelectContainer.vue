<script setup lang="ts" generic="T, TModel extends T[] | T | undefined">
import { computed, ref, watch } from 'vue'
import {
  Combobox,
  Listbox,
} from '@headlessui/vue'
import { Float } from '@headlessui-float/vue'
import { popoverTransition } from '@/transitions'
import { useProvideAppSelectContext } from '@/composables/select/useAppSelectContext'

interface Props {
  displayFunction?: (value: T) => string
  keyValue?: keyof T
  items: T[]
  isDisabled?: boolean
  isFilterable?: boolean
  isInvalid?: boolean
}

const {
  items,
  displayFunction = (value: T): string => {
    return String(value)
  },
  isDisabled = false,
  isFilterable = false,
  isInvalid = false,
} = defineProps<Props>()

const emits = defineEmits<{
  hide: []
  show: []
  'update:search': [string]
}>()

const model = defineModel<TModel>('modelValue', { required: true })
const isMultiple = computed<boolean>(() => Array.isArray(model.value))
const search = ref<string>('')

function getDisplayValue(value: T | T[] | undefined): string {
  if (value == null)
    return ''
  else
    if (Array.isArray(value))
      return value.map(value => displayFunction(value)).join(', ')
    else
      return displayFunction(value)
}

const filteredItems = computed(() => {
  if (!isFilterable)
    return items

  return items.filter((item) => {
    return getDisplayValue(item)?.toLowerCase().includes(search.value.toLowerCase())
  })
})

useProvideAppSelectContext({
  value: model,
  search,
  getDisplayValue,
  isFilterable: computed(() => isFilterable),
  isInvalid: computed(() => isInvalid),
  isDisabled: computed(() => isDisabled),
})
watch(search, () => {
  onSearchChange(search.value)
})

function onSearchChange(search: string): void {
  emits('update:search', search)
}

function onHide(): void {
  emits('hide')
}

function onShow(): void {
  emits('show')
}
</script>

<template>
  <!-- eslint-disable vue/valid-v-model -->
  <div class="text-left">
    <Combobox
      v-if="isFilterable"
      v-slot="{ open }"
      v-model="(model as any)"
      :disabled="isDisabled"
      immediate
      :multiple="isMultiple"
    >
      <Float
        placement="bottom-start"
        adaptive-width
        :offset="4"
        flip
        v-bind="popoverTransition"
        @hide="onHide"
        @show="onShow"
      >
        <slot :items="filteredItems" :is-open="open" />
      </Float>
    </Combobox>
    <Listbox
      v-else
      v-slot="{ open }"
      v-model="(model as any)"
      :disabled="isDisabled"
      immediate
      :multiple="isMultiple"
    >
      <Float
        placement="bottom-start"
        adaptive-width
        :offset="4"
        flip
        v-bind="popoverTransition"
        @hide="onHide"
        @show="onShow"
      >
        <slot :items="filteredItems" :is-open="open" />
      </Float>
    </ListBox>
  </div>
</template>
