<script setup lang="ts">
import { reactive } from 'vue'
import AppModal from '@/components/app/modal/AppModal.vue'
import AppText from '@/components/app/text/AppText.vue'
import AppButton from '@/components/app/button/AppButton.vue'
import type { ModalProps } from '@/components/app/modal/appModal.style'
import { modalSizeOptions } from '@/components/app/modal/appModal.style'
import type { Icon } from '@/icons'
import { iconNames } from '@/icons'

interface State {
  isOpen: boolean
  hasNoCloseButton?: boolean
  hasNoCloseOutside?: boolean
  title?: string
  content?: string
  icon?: Icon
  size?: ModalProps['size']
}

const state = reactive<State>({
  isOpen: false,
  hasNoCloseButton: false,
  hasNoCloseOutside: false,
  title: 'Modal title',
  icon: undefined,
  content: 'Content here Lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus nulla ab eius enim similique atque officia? Porro consectetur, ea iusto perspiciatis ullam nisi minus, inventore iste quisquam placeat nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem ullam ipsam minima, vitae commodi expedita corporis aliquid illum quis laudantium adipisci laboriosam est maxime quae enim aliquam sed ipsa.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam iste, adipisci sapiente odit beatae architecto aspernatur perferendis quis. Esse dicta, minima non aperiam sunt ad veniam ab velit officiis magni.',
})

function handleClick(): void {
  state.isOpen = true
}
</script>

<template>
  <Story
    title="App/Modals/AppModal"
  >
    <Variant title="Default" auto-props-disabled>
      <template #controls>
        <HstCheckbox v-model="state.isOpen" title="Open" />
        <HstCheckbox v-model="state.hasNoCloseButton" title="No close button" />
        <HstCheckbox v-model="state.hasNoCloseOutside" title="No close outside" />
        <HstSelect v-model="state.icon" title="Icon" :options="['none', ...iconNames]" />
        <HstSelect v-model="state.size" title="Size" :options="modalSizeOptions" />

        <HstText v-model="state.title" title="Title" />
        <HstTextarea v-model="state.content" title="Content" />
      </template>

      <AppButton @component:click="handleClick">
        Click me
      </AppButton>
      <AppModal
        v-bind="state"
        v-model:is-open="state.isOpen"
      >
        <template #content>
          <AppText variant="subtext">
            {{ state.content }}
          </AppText>
        </template>
        <template #footer>
          <div class="flex gap-2">
            <AppButton variant="outline" @component:click="handleClick">
              Cancel
            </AppButton>
            <AppButton @component:click="handleClick">
              Confirm
            </AppButton>
          </div>
        </template>
      </AppModal>
    </Variant>
  </Story>
</template>
