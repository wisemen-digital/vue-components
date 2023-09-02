<script setup lang="ts">
import { reactive, ref } from 'vue'
import FormInputField from '@/components/form/field/FormInputField.vue'
import { iconNames } from '@/icons'
import type { Icon } from '@/icons'

interface State {
  isDisabled: boolean
  isLoading: boolean
  isReadOnly: boolean
  isDirty: boolean
  isTouched: boolean
  isCopyable: boolean
  isOptional: boolean
  hasExtraContentBorder: boolean

  errors: { _errors: string[] }
  content: string
  placeholder: string
  label: string

  frontIcon?: Icon
  backIcon?: Icon
  frontContent?: string
  backContent?: string
  type: 'text' | 'password' | 'email' | 'tel' | 'url' | 'search'
}

const inputTypes = ['text', 'password', 'email', 'tel', 'url', 'search'] as const
const state = reactive<State>({
  isDisabled: false,
  isLoading: false,
  isDirty: false,
  isTouched: false,
  isReadOnly: false,
  isCopyable: false,
  isOptional: false,
  hasExtraContentBorder: false,

  label: 'Label',
  content: '',
  errors: { _errors: [] },
  placeholder: 'Placeholder',

  frontIcon: undefined,
  backIcon: undefined,
  frontContent: undefined,
  backContent: undefined,

  type: 'text',
})

const number = ref(0)
</script>

<template>
  <Story title="Forms/Input/Field">
    <Variant title="Default" auto-props-disabled>
      <template #controls>
        <HstSelect v-model="state.type" title="Input type" :options="[...inputTypes]" />
        <HstCheckbox v-model="state.isDisabled" title="Disabled" />
        <HstCheckbox v-model="state.isLoading" title="Loading" />
        <HstCheckbox v-model="state.isDirty" title="Dirty" />
        <HstCheckbox v-model="state.isReadOnly" title="Readonly" />
        <HstCheckbox v-model="state.isTouched" title="Touched" />
        <HstCheckbox v-model="state.isCopyable" title="Copyable" />
        <HstCheckbox v-model="state.isOptional" title="Optional" />
        <HstCheckbox v-model="state.hasExtraContentBorder" title="Extra content border" />

        <HstText v-model="state.placeholder" title="Placeholder" />
        <HstText v-model="state.content" title="Text" />
        <HstText v-model="state.errors._errors[0]" title="Error message" />

        <HstSelect v-model="state.frontIcon" title="Front Icon" :options="['none', ...iconNames]" />

        <HstSelect v-model="state.backIcon" title="Back Icon" :options="['none', ...iconNames]" />
        <HstText v-model="state.frontContent" title="Front Content" />
        <HstText v-model="state.backContent" title="Back Content" />
      </template>
      <FormInputField v-model="state.content" v-bind="state" />
      <FormInputField v-model="number" v-bind="state" type="number" />
    </Variant>
  </Story>
</template>
