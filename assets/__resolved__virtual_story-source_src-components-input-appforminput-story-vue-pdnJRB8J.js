const __resolved__virtual_storySource_srcComponentsInputAppforminputStoryVue = `<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ZodFormattedError } from 'zod'
import { iconNames } from '@/icons'
import type { Icon } from '@/icons'
import type { InputType } from '@/types/input.type'
import AppFormInput from '@/components/input/AppFormInput.vue'

interface State {
  isInvalid: boolean
  isDisabled: boolean
  type: InputType
  iconLeft?: Icon
  iconRight?: Icon
  placeholder: string
  description: string
  label: string
  isTouched: boolean
  isRequired: boolean
  errors: ZodFormattedError<string>
}

const state: State = reactive({
  isDisabled: false,
  isInvalid: false,
  type: 'text',
  iconLeft: undefined,
  iconRight: undefined,
  placeholder: 'Placeholder',
  description: 'Description',
  label: 'Label',
  isTouched: false,
  isRequired: false,
  errors: {
    _errors: ['This is an error'],
  },
})

const value = ref('hey')
<\/script>

<template>
  <Story
    title="Input/AppFormInput"
  >
    <Variant title="Default" auto-props-disabled>
      <template #controls>
        <HstCheckbox v-model="state.isDisabled" title="Disabled" />
        <HstCheckbox v-model="state.isInvalid" title="Invalid" />
        <HstCheckbox v-model="state.isRequired" title="Required" />
        <HstCheckbox v-model="state.isTouched" title="Is Touched" />
        <HstSelect v-model="state.type" title="type" :options="['number', 'date', 'datetime-local', 'email', 'password', 'text', 'time']" />
        <HstSelect v-model="state.iconLeft" title="Front Icon" :options="['none', ...iconNames]" />
        <HstSelect v-model="state.iconRight" title="Back Icon" :options="['none', ...iconNames]" />
        <HstText v-model="state.placeholder" title="Placeholder" />
        <HstText v-model="state.description" title="Description" />
        <HstText v-model="state.label" title="Label" />
      </template>

      <div class="grid w-full place-items-center">
        <AppFormInput v-bind="state" v-model="value" class="w-full" />
      </div>
    </Variant>
  </Story>
</template>
`;
export {
  __resolved__virtual_storySource_srcComponentsInputAppforminputStoryVue as default
};
