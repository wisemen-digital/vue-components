<script setup lang="ts" generic="T">
import {
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue'
import AppHeightTransition from '@/components/transitions/AppHeightTransition.vue'

interface Props {
  items: T[]
}
defineProps<Props>()
</script>

<template>
  <!-- eslint-disable vue/no-extra-parens -->
  <ComboboxOptions class="rounded bg-card p-2">
    <AppHeightTransition>
      <div>
        <ComboboxOption
          v-for="(item, index) in items" v-slot="{ active, selected, disabled }" :key="index"
          :value="(item as any)"
        >
          <slot :item="item" :active="active" :selected="selected" :disabled="disabled" />
        </ComboboxOption>
      </div>
    </AppHeightTransition>
  </ComboboxOptions>
</template>
