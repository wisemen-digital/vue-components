<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  content?: string
  title?: string
  subtitle?: string
  footer?: string
}
const props = defineProps<Props>()

const slots = defineSlots<{
  header?: () => any
  default?: () => any
  footer?: () => any
}>()

const hasHeader = computed(() => !!slots.header || !!props.title || !!props.subtitle)
const hasFooter = computed(() => !!slots.footer || !!props.footer)
const hasContent = computed(() => !!slots.default || !!props.content)
</script>

<template>
  <section>
    <slot name="header">
      <p v-if="props.title">
        {{ props.title }}
      </p>
      <p v-if="props.subtitle">
        {{ props.subtitle }}
      </p>
    </slot>
    <slot>
      <p>
        {{ props.content }}
      </p>
    </slot>
    <slot name="footer" />
  </section>
</template>
