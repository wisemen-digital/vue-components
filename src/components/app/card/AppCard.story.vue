<script setup lang="ts">
import { reactive } from 'vue'
import Image from '@/assets/test-image.jpg'
import AppCard from '@/components/app/card/AppCard.vue'
import AppButton from '@/components/app/button/AppButton.vue'

interface State {
  title?: string
  subtitle?: string
  content?: string
  footer?: string
  headerImage?: string

  hasFooterButton?: boolean
  hasHeaderImage?: boolean
  hasHeader?: boolean
  hasFooter?: boolean
  hasContent?: boolean
  isCustom?: boolean
}

const state = reactive<State>({
  title: 'Modal title',
  subtitle: 'Modal subtitle',
  content: 'Modal content',
  headerImage: Image,
  hasHeaderImage: true,
  hasContent: true,
  hasFooter: true,
  hasHeader: true,
  isCustom: false,
})
</script>

<template>
  <Story
    title="App/Card/AppCard"
  >
    <Variant title="Default" auto-props-disabled>
      <template #controls>
        <HstText v-model="state.title" title="Title" />
        <HstText v-model="state.subtitle" title="Subtitle" />
        <HstText v-model="state.footer" title="Footer" />
        <HstTextarea v-model="state.content" title="Content" />

        <HstCheckbox v-model="state.hasHeader" title="Has header" />
        <HstCheckbox v-model="state.hasHeaderImage" title="Has header image" />
        <HstCheckbox v-model="state.hasContent" title="Has content" />
        <HstCheckbox v-model="state.hasFooter" title="Has footer" />
        <HstCheckbox v-model="state.isCustom" title="Is custom" />
      </template>

      <div class="w-96 p-12">
        <AppCard
          :header-image-src="state.hasHeaderImage ? state.headerImage : undefined"
          :title="state.hasHeader ? state.title : undefined"
          :subtitle="state.hasHeader ? state.subtitle : undefined"
        >
          <template v-if="state.hasContent" #content>
            {{ state.content }}
          </template>
          <template v-if="state.hasFooter" #footer>
            <AppButton class="w-full">
              Button
            </AppButton>
          </template>

          <p v-if="state.isCustom">
            This is a custom card slot
          </p>
        </AppCard>
      </div>
    </Variant>
  </Story>
</template>
