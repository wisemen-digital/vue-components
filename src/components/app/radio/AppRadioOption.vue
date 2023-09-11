<!-- eslint-disable vue/valid-v-model -->
<script setup lang="ts" generic="T, TValue extends T">
import {
  RadioGroupDescription,
  RadioGroupLabel,
} from '@headlessui/vue'
import type { Icon } from '@/icons'
import type { IconProps } from '@/components/app/icon/appIcon.style'
import type { RadioProps } from '@/components/app/radio/appRadio.style'
import { radioButtonVariants, radioVariants } from '@/components/app/radio/appRadio.style'
import AppIcon from '@/components/app/icon/AppIcon.vue'

interface Props {
  icon: Icon
  iconSize: IconProps['size']
  option: T
  optionLabel?: TValue
  optionValue?: TValue
  optionDescription?: TValue
  optionDisabled?: TValue
  variant?: RadioProps['variant']
  checked: boolean
  active: boolean
  disabled: boolean
}

const {
  option = {},
  variant = 'default',
} = defineProps<Props>()
</script>

<template>
  <div
    :class="radioVariants({ variant, isChecked: checked, isActive: active, isDisabled: disabled })"
  >
    <div class="flex items-center gap-4">
      <AppIcon
        v-if="icon"
        :size="iconSize"
        :icon="icon"
      />
      <div>
        <RadioGroupLabel class="text-body font-medium">
          {{ (option as any)[optionLabel] }}
        </RadioGroupLabel>

        <RadioGroupDescription class="text-subtext">
          {{ (option as any)[optionDescription] }}
        </RadioGroupDescription>
      </div>
    </div>
    <div
      :class="radioButtonVariants({ isChecked: checked, isActive: active && !checked })"
    >
      <AppIcon
        size="default"
        icon="cirlcedCheckmark"
      />
    </div>
  </div>
</template>
