<script setup lang="ts">
import AppText from '@/components/app/text/AppText.vue'

interface Props {
  title?: string
  subtitle?: string
  headerImageSrc?: string
}

defineProps<Props>()

defineSlots<{
  content?: () => any
  header?: () => any
  default?: () => any
  footer?: () => any
  headerImage?: () => any
}>()
</script>

<template>
  <section
    class="
    flex flex-col overflow-hidden
    rounded-card border border-border bg-card
    text-card-foreground shadow-card-shadow
    transition-shadow duration-300
    hover:shadow-card-hover-shadow
    focus:shadow-card-hover-shadow"
  >
    <slot>
      <slot name="headerImage">
        <img
          v-if="headerImageSrc"
          :src="headerImageSrc"
          class="h-48 w-full object-cover"
        >
      </slot>
      <div class="flex flex-col gap-4 p-4">
        <div v-if="title || subtitle">
          <AppText
            v-if="title"
            boldness="semibold"
            variant="heading"
          >
            {{ title }}
          </AppText>
          <AppText
            v-if="subtitle"
            class="text-muted-foreground"
          >
            {{ subtitle }}
          </AppText>
        </div>
        <slot name="content" />
        <slot name="footer" />
      </div>
    </slot>
  </section>
</template>
