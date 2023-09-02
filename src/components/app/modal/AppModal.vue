<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import AppButton from '@/components/app/button/AppButton.vue'
import AppText from '@/components/app/text/AppText.vue'
import AppIcon from '@/components/app/icon/AppIcon.vue'
import type { ModalProps } from '@/components/app/modal/appModal.style'
import { modalVariants } from '@/components/app/modal/appModal.style'
import type { Icon } from '@/icons'
import { modalBackgroundTransition, modalTransition } from '@/transitions'

interface Props {
  hideCloseButton?: boolean
  hasIrremovableMask?: boolean
  size?: ModalProps['size']
  title?: string
  icon?: Icon
}

const {
  hideCloseButton = false,
  hasIrremovableMask = false,
  title,
  icon,
  size = 'default',
} = defineProps<Props>()

defineSlots<{
  default?: (props: { close: () => void }) => any
  footer?: (props: { close: () => void }) => any
}>()

const isOpen = defineModel<boolean>('isOpen', {
  required: true,
})

function handleCloseModal(): void {
  isOpen.value = false
}

function handleClickOutside(): void {
  if (!hasIrremovableMask)
    handleCloseModal()
}

function handleClickCloseButton(): void {
  if (!hideCloseButton)
    handleCloseModal()
}
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
          <DialogPanel :class="modalVariants({ size })">
            <div v-if="title || icon" class="flex justify-between gap-4">
              <DialogTitle class="flex flex-col items-start justify-start gap-8">
                <AppButton v-if="icon" :prefix-icon="icon" size="icon" variant="outline" is-rounded />
                <AppText variant="heading">
                  {{ title }}
                </AppText>
              </DialogTitle>
              <button v-if="!hideCloseButton" class="flex" @click="handleClickCloseButton">
                <AppIcon icon="close" />
              </button>
            </div>

            <slot :close="handleCloseModal" />
            <slot name="footer" :close="handleCloseModal" />
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
