<script setup lang="ts">
import { type ButtonLoaderProps, type ButtonProps, buttonLoaderVariants } from './appButtonVariants'
import { fadeTransition } from '@/transitions'

interface Props {
  isLoading: boolean
  variant: ButtonProps['variant']
}
const {
  isLoading,
  variant,
} = defineProps<Props>()

const loaderVariant = computed<ButtonLoaderProps['variant']>(() => {
  if ((['primary', 'destructive', 'ghost', 'secondary', 'link', 'outline'] as ButtonProps['variant'][]).includes(variant))
    return 'primary'
  return 'white'
})
</script>

<template>
  <!-- eslint-disable tailwindcss/no-custom-classname -->

  <Transition v-bind="fadeTransition">
    <div v-if="isLoading" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="relative inline-block h-2.5 w-10">
        <div
          v-for="i in 4" :key="i" class="orb" :class="buttonLoaderVariants({ variant: loaderVariant })"
        />
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.orb:nth-child(1) {
  left: 4px;
  animation: lds-ellipsis1 0.6s infinite;
}

.orb:nth-child(2) {
  left: 4px;
  animation: lds-ellipsis2 0.6s infinite;
}

.orb:nth-child(3) {
  left: 16px;
  animation: lds-ellipsis2 0.6s infinite;
}

.orb:nth-child(4) {
  left: 28px;
  animation: lds-ellipsis3 0.6s infinite;
}

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
}

@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(12px, 0);
  }
}
</style>
