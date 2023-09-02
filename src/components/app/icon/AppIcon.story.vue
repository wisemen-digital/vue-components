<script setup lang="ts">
import { reactive } from 'vue'
import { iconNames } from '@/icons'
import type { Icon } from '@/icons'
import { iconSizeOptions } from '@/components/app/icon/appIcon.style'
import type { IconProps } from '@/components/app/icon/appIcon.style'
import AppIcon from '@/components/app/icon/AppIcon.vue'

interface State {
  size: IconProps['size']
  icon: Icon
  customClasses: string
}

const state: State = reactive({
  size: 'default',
  icon: 'checkmark',
  customClasses: '',
})
</script>

<template>
  <Story
    title="App/Icon/AppIcon"
  >
    <Variant title="Default" auto-props-disabled>
      <template #controls>
        <HstSelect v-model="state.size" title="Size" :options="iconSizeOptions" />
        <HstSelect v-model="state.icon" title="Variant" :options="iconNames" />
        <HstText v-model="state.customClasses" title="Custom Classes" />
      </template>

      <div class="grid h-20 w-20 place-items-center">
        <AppIcon v-bind="state" :class="state.customClasses" />
      </div>
    </Variant>
  </Story>
</template>
