<script setup lang="ts">
import { ComboboxButton, ComboboxInput } from '@headlessui/vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAppSelectContext } from '@/composables/select/useAppSelectContext'
import AppIcon from '@/components/icon/AppIcon.vue'

interface Props {
  isDisabled?: boolean
}

defineProps<Props>()
const { t } = useI18n()

const {
  getDisplayValue,
  search,
  value,
} = useAppSelectContext()

const hasValue = computed<boolean>(() => {
  if (Array.isArray(value.value))
    return value.value.length > 0
  else
    return value.value !== null && value.value !== undefined && value.value !== ''
})

function handleSearchChange(event: Event): void {
  search.value = (event.target as HTMLInputElement).value
}
</script>

<template>
  <div
    class="relative text-input-foreground"
  >
    <ComboboxInput
      :display-value="(item: any) => getDisplayValue(item as any)"
      :placeholder="hasValue ? getDisplayValue(value) : t('labels.select') "
      :disabled="isDisabled"
      class="w-full rounded border border-border bg-input px-4 py-2 text-left placeholder:text-input-foreground/50 placeholder:transition-all placeholder:duration-300 focus:placeholder:translate-x-1 focus:placeholder:opacity-0"
      @change="handleSearchChange"
    />
    <ComboboxButton
      v-slot="{ open }"
      class="absolute inset-y-0 right-0 flex items-center pr-2"
    >
      <AppIcon
        class="transition-transform duration-200"
        :class="{
          'rotate-180': open,
        }"

        icon="chevronDown"
        aria-hidden="true"
      />
    </ComboboxButton>
  </div>
</template>
