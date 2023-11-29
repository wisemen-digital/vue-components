<script setup lang="ts">
import { reactive } from 'vue'
import AppButton from '@/components/button/AppButton.vue'
import { buttonSizeOptions, buttonVariantOptions } from '@/components/button/appButton.style'
import type { ButtonProps } from '@/components/button/appButton.style'
import { iconNames } from '@/icons'
import type { Icon } from '@/icons'

interface State {
  isDisabled: boolean
  isLoading: boolean
  size: ButtonProps['size']
  variant: ButtonProps['variant']
  iconLeft?: Icon
  iconRight?: Icon
  content: string
}

const state: State = reactive({
  isDisabled: false,
  isLoading: false,
  size: 'default',
  variant: 'default',
  iconLeft: undefined,
  iconRight: undefined,
  content: 'Click me',
})
</script>

<template>
  <Story
    title="Buttons/AppButton"
  >
    <Variant title="Default" auto-props-disabled>
      <template #controls>
        <HstCheckbox v-model="state.isDisabled" title="Disabled" />
        <HstCheckbox v-model="state.isLoading" title="Loading" />
        <HstSelect v-model="state.size" title="Size" :options="buttonSizeOptions" />
        <HstSelect v-model="state.variant" title="Variant" :options="buttonVariantOptions" />
        <HstSelect v-model="state.iconLeft" title="Front Icon" :options="['none', ...iconNames]" />
        <HstSelect v-model="state.iconRight" title="Back Icon" :options="['none', ...iconNames]" />
        <HstText v-model="state.content" title="Text" />
      </template>

      <div class="grid h-20 w-20 place-items-center">
        <AppButton v-bind="state">
          {{ state.content }}
        </AppButton>
      </div>
    </Variant>
  </Story>
</template>
