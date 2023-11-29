const __resolved__virtual_storySource_srcComponentsAppCardAppcardStoryVue = `<script setup lang="ts">
import { reactive } from 'vue'
import Image from '@/assets/test-image.jpg'
import AppCard from '@/components/app/card/AppCard.vue'
import AppButton from '@/components/app/button/AppButton.vue'
import AppCardHeaderImage from '@/components/app/card/AppCardHeaderImage.vue'
import AppCardHeader from '@/components/app/card/AppCardHeader.vue'
import AppCardTitle from '@/components/app/card/AppCardTitle.vue'
import AppCardDescription from '@/components/app/card/AppCardDescription.vue'
import AppCardContent from '@/components/app/card/AppCardContent.vue'
import AppCardFooter from '@/components/app/card/AppCardFooter.vue'

interface State {
  title?: string
  subtitle?: string
  content?: string
  footer?: string
  headerImage: string

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
<\/script>

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
      </template>

      <div class="w-96 p-12">
        <AppCard>
          <AppCardHeaderImage v-if="state.hasHeaderImage" :src="state.headerImage" />
          <AppCardHeader v-if="state.hasHeader">
            <AppCardTitle>
              {{ state.title }}
            </AppCardTitle>
            <AppCardDescription>
              {{ state.subtitle }}
            </AppCardDescription>
          </AppCardHeader>
          <AppCardContent v-if="state.hasContent">
            <p>{{ state.content }}</p>
          </AppCardContent>
          <AppCardFooter v-if="state.hasFooter">
            <AppButton class="w-full">
              Button
            </AppButton>
          </AppCardFooter>
        </AppCard>
      </div>
    </Variant>
  </Story>
</template>
`;
export {
  __resolved__virtual_storySource_srcComponentsAppCardAppcardStoryVue as default
};
