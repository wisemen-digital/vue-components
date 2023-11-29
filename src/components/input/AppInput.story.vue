<script setup lang="ts">
import { reactive, ref } from 'vue'
import { iconNames } from '@/icons'
import type { Icon } from '@/icons'
import AppInput from '@/components/input/AppInput.vue'
import type { InputType } from '@/types/input.type'

interface State {
  isInvalid: boolean
  isDisabled: boolean
  type: InputType
  iconLeft?: Icon
  iconRight?: Icon
  placeholder: string
}

const state: State = reactive({
  isDisabled: false,
  isInvalid: false,
  type: 'text',
  iconLeft: undefined,
  iconRight: undefined,
  placeholder: 'Placeholder',
})

const value = ref('hey')
</script>

<template>
  <Story
    title="Input/AppInput"
  >
    <Variant title="Default" auto-props-disabled>
      <template #controls>
        <HstCheckbox v-model="state.isDisabled" title="Disabled" />
        <HstCheckbox v-model="state.isInvalid" title="Invalid" />
        <HstSelect v-model="state.type" title="type" :options="['number', 'date', 'datetime-local', 'email', 'password', 'text', 'time']" />
        <HstSelect v-model="state.iconLeft" title="Front Icon" :options="['none', ...iconNames]" />
        <HstSelect v-model="state.iconRight" title="Back Icon" :options="['none', ...iconNames]" />
      </template>

      <div class="grid place-items-center">
        <AppInput v-bind="state" v-model="value" />
      </div>
    </Variant>
  </Story>
</template>
