<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { twMerge } from 'tailwind-merge'
import { computed } from 'vue'
import AppButton from '@/components/app/button/AppButton.vue'
import AppText from '@/components/app/text/AppText.vue'
import AppIcon from '@/components/app/icon/AppIcon.vue'
import type { ModalProps } from '@/components/app/modal/appModal.style'
import { modalVariants } from '@/components/app/modal/appModal.style'
import type { Icon } from '@/icons'
import { modalBackgroundTransition, modalTransition } from '@/transitions'

interface Props {
  hasHiddenCloseButton?: boolean
  isNotDismissable?: boolean
  size?: ModalProps['size']
  title?: string
  icon?: Icon
}

const {
  hasHiddenCloseButton = false,
  isNotDismissable = false,
  title,
  icon,
  size = 'default',
} = defineProps<Props>()

const slots = defineSlots<{
  icon?: () => any
  title?: () => any
  default?: () => any
  footer?: () => any
}>()

const isOpen = defineModel<boolean>('isOpen', {
  required: true,
})

const handleClickOutside = (): void => {
  if (!isNotDismissable)
    isOpen.value = false
}

const handleClickCloseButton = (): void => {
  if (!hasHiddenCloseButton)
    isOpen.value = false
}

const hasHeader = computed<boolean>(() => !!(slots.icon || slots.title || title || icon))
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog class="relative z-[999]" @close="handleClickOutside">
      <TransitionChild
        as="template"
        v-bind="modalBackgroundTransition"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 flex min-h-full items-center justify-center overflow-y-auto p-4">
        <TransitionChild
          as="template"
          v-bind="modalTransition"
        >
          <DialogPanel :class="twMerge(modalVariants({ size }))">
            <div v-if="hasHeader" class="flex justify-between gap-4">
              <DialogTitle class="flex flex-col items-start justify-start gap-8">
                <slot name="icon">
                  <AppButton v-if="icon" :prefix-icon="icon" size="icon" variant="outline" is-rounded />
                </slot>
                <slot name="title">
                  <AppText variant="heading">
                    {{ title }}
                  </AppText>
                </slot>
              </DialogTitle>
              <button v-if="!hasHiddenCloseButton" class="flex" @click="handleClickCloseButton">
                <AppIcon icon="close" />
              </button>
            </div>

            <div>
              <slot />
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
