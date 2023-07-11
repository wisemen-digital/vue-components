<script setup lang="ts">
import type { CountryCode } from 'libphonenumber-js'

interface State {
  isDisabled: boolean
  placeholder: string
  label: string
  defaultCountry: CountryCode
}

const state = reactive<State>({
  isDisabled: false,
  label: 'Phone number',
  placeholder: 'Enter your phone number',
  defaultCountry: 'US',
})

const phoneNumber = ref<string>('(555) 555-5555')
</script>

<template>
  <Story title="Forms/Input/Phone">
    <Variant title="Default">
      <template #controls>
        <HstText v-model="phoneNumber" title="Phone number" />
        <HstCheckbox v-model="state.isDisabled" title="Disabled" />
        <HstText v-model="state.label" title="Label" />
        <HstText v-model="state.placeholder" title="Placeholder" />
      </template>
      <FormPhoneInput v-model="phoneNumber" v-bind="state" />
    </Variant>
  </Story>
</template>
