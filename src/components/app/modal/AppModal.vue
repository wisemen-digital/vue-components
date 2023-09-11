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

interface Props {
  hasNoCloseButton?: boolean
  hasNoCloseOutside?: boolean
  size?: ModalProps['size']
  title?: string
  icon?: Icon
}

const {
  hasNoCloseButton = false,
  hasNoCloseOutside = false,
  size = 'default',
} = defineProps<Props>()

const isOpen = defineModel<boolean>('isOpen', {
  required: true,
})

function handleClickOutside(): void {
  if (!hasNoCloseOutside)
    isOpen.value = false
}

function handleClickCloseButton(): void {
  if (!hasNoCloseButton)
    isOpen.value = false
}
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-[999]" @close="handleClickOutside">
      <TransitionChild
        as="template"
        class="ease-[cubic-bezier(.8,_.16,_0,_1.3)]"
        enter="duration-300 ease-out "
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 flex min-h-full items-center justify-center overflow-y-auto p-4">
        <TransitionChild
          as="template"
          class="ease-[cubic-bezier(.8,_.16,_0,_1.3)]"
          enter="duration-300 ease-out "
          enter-from="opacity-0 scale-0"
          enter-to="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-0"
        >
          <DialogPanel :class="modalVariants({ size })">
            <div class="flex justify-between gap-4">
              <DialogTitle class="flex flex-col items-start justify-start gap-8">
                <slot name="icon">
                  <AppButton v-if="icon" :front-icon="icon" size="icon" variant="outline" is-rounded />
                </slot>
                <slot name="title">
                  <AppText variant="heading">
                    {{ title }}
                  </AppText>
                </slot>
              </DialogTitle>
              <button class="flex ">
                <AppIcon v-if="!hasNoCloseButton" icon="close" @click="handleClickCloseButton" />
              </button>
            </div>

            <div>
              <slot name="content" />
            </div>

            <div class="mt-4">
              <slot name="footer" />
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
