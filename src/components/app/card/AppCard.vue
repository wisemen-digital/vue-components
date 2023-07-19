<script setup lang="ts">
interface Props {
  content?: string
  title?: string
  subtitle?: string
  footer?: string
  headerImage?: string
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
    rounded-card border bg-card
    text-card-foreground shadow-card-shadow
    transition-shadow duration-300
    hover:shadow-card-hover-shadow
    focus:shadow-card-hover-shadow"
  >
    <slot>
      <slot name="headerImage">
        <img
          v-if="headerImage"
          :src="headerImage"
          class="h-48 w-full object-cover"
        >
      </slot>
      <div class="flex flex-col gap-4 p-4">
        <slot name="header">
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
        </slot>
        <slot name="content">
          <AppText v-if="content">
            {{ content }}
          </AppText>
        </slot>
        <slot name="footer">
          <AppText v-if="footer">
            {{ footer }}
          </AppText>
        </slot>
      </div>
    </slot>
  </section>
</template>
