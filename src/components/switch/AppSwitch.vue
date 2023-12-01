<script setup lang="ts" generic="TValue">
import { Switch } from '@headlessui/vue'
import { computed } from 'vue'
import { switchWrapper } from './appSwitch.style'
import AppIcon from '@/components/icon/AppIcon.vue'

export interface AppSwitchProps<TValue> {
  /**
   * The value if the switch is checked.
   */
  value?: TValue

  /**
   * Determines if the switch is a checkbox.
   */
  isCheckbox?: boolean

  /**
   * Determines if the switch is disabled.
   */
  isDisabled?: boolean

  /**
   * Determines if the switch is invalid.
   */
  isInvalid?: boolean

  /**
   * The class to apply when the switch is selected.
   */
  selectedBackgroundClass?: string

  /**
   * The name of the switch.
   */
  name?: string
}

const {
  value = true as TValue,
  isDisabled = false,
  isCheckbox = false,
  selectedBackgroundClass = 'bg-primary',
} = defineProps<AppSwitchProps<TValue>>()

const emits = defineEmits<{
  'focus': []
  'blur': []
}>()

const model = defineModel<TValue | null>({
  required: true,
  default: null,
})

const isSelected = computed<boolean>({
  get() {
    return model.value === value
  },
  set(isSelectedValue: boolean) {
    if (isSelectedValue)
      model.value = value
    else
      model.value = null
  },
})

const wrapperClasses = computed<string>(() => {
  return isSelected.value ? selectedBackgroundClass : 'bg-neutral-200'
})

function onFocus(): void {
  emits('focus')
}

function onBlur(): void {
  emits('blur')
}
</script>

<template>
  <!-- eslint-disable vue/valid-v-model -->
  <Switch
    v-model="isSelected"
    :value="(value as any)"
    :name="name"
    :disabled="isDisabled"
    :class="switchWrapper({ isCheckbox, isInvalid, isDisabled, class: wrapperClasses })"
    @blur="onBlur"
    @focus="onFocus"
  >
    <AppIcon
      v-if="isCheckbox"
      size="full"
      icon="checkmark" class="p-0.5 text-white duration-200" :class="{
        'opacity-100': isSelected,
        'opacity-0': !isSelected,
      }"
    />
    <span
      v-else
      class="inline-block h-5 w-5 rounded-full bg-white duration-100"
      :class="isSelected ? 'translate-x-[1.15rem]' : 'translate-x-0.5'"
    />
  </Switch>
</template>
