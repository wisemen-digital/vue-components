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
import { useI18n } from 'vue-i18n'
import FormSelectOption from '@/components/form/select/FormSelectOption.vue'
import { scaleBounceTransition } from '@/transitions'
import TransitionExpand from '@/components/app/transitions/TransitionExpand.vue'

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

const { t } = useI18n()
const model = defineModel<TModel>('modelValue', { required: true })
const isMultiple = computed<boolean>(() => Array.isArray(model.value))
const search = ref<string>('')

function getKeyValue(value: T): string {
  if (keyValue)
    return String(value[keyValue])
  else
    return String(value)
}

const hasValue = computed<boolean>(() => {
  if (Array.isArray(model.value))
    return model.value.length > 0
  else
    return model.value !== null && model.value !== undefined && model.value !== ''
})

function getDisplayValue(value: T | T[] | undefined): string {
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

function handleSearchChange(event: Event): void {
  search.value = (event.target as HTMLInputElement).value
}

const isEmpty = computed<boolean>(() => {
  return filteredItems.value.length === 0
})
</script>

<template>
  <!-- eslint-disable vue/no-extra-parens -->
  <!-- eslint-disable vue/valid-v-model -->

  <div class="text-left">
    <Combobox
      v-model="(model as any)"
      :multiple="isMultiple"
    >
      <Float placement="bottom-start" adaptive-width :offset="4" flip v-bind="scaleBounceTransition">
        <slot
          name="input"
          :display-function="getDisplayValue"
          :placeholder="hasValue ? getDisplayValue(model) : 'select'"
          :value="model"
        >
          <ComboboxButton v-if="hasSearch" key="input" as="template" :disabled="isDisabled">
            <ComboboxInput
              class="relative w-full rounded border border-border bg-input px-4 py-2 text-left placeholder:transition-all placeholder:duration-300 focus:placeholder:translate-x-1 focus:placeholder:opacity-0"
              :display-value="(item) => getDisplayValue(item as any)"
              :placeholder="hasValue ? getDisplayValue(model) : t('labels.select') "
              :disabled="isDisabled"
              @change="handleSearchChange"
            />
          </ComboboxButton>
          <ComboboxButton
            v-else
            key="button"
            :disabled="isDisabled"
            class="relative w-full overflow-hidden truncate whitespace-nowrap rounded border border-border bg-input px-4 py-2 text-left placeholder:transition-all placeholder:duration-300 focus:placeholder:translate-x-1 focus:placeholder:opacity-0"
          >
            {{ hasValue ? getDisplayValue(model) : t('labels.select') }}
          </ComboboxButton>
        </slot>

        <ComboboxOptions class="rounded bg-card p-2">
          <slot name="items" :items="items" :is-empty="isEmpty">
            <TransitionExpand>
              <div v-if="isLoading">
                {{ t('labels.loading') }}
              </div>
              <div v-else-if="isEmpty">
                {{ t('labels.no_results') }}
              </div>

              <div v-else>
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
                    <FormSelectOption
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
              </div>
            </TransitionExpand>
          </slot>
        </ComboboxOptions>
      </Float>
    </Combobox>
  </div>
</template>
