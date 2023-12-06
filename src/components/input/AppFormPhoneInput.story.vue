<script setup lang="ts">
import countries from 'i18n-iso-countries'
import type { CountryCode } from 'libphonenumber-js'
import { reactive, ref } from 'vue'
import type { ZodFormattedError } from 'zod'
import AppFormPhoneInput from '@/components/input/AppFormPhoneInput.vue'

interface State {
  isInvalid: boolean
  isDisabled: boolean
  isRequired: boolean
  errors: ZodFormattedError<string>
  description: string
  label: string
  placeholder: string
  defaultCountry?: CountryCode
  isTouched: boolean
}

const state = reactive<State>({
  isDisabled: false,
  isInvalid: false,
  isRequired: false,
  isTouched: false,
  errors: {
    _errors: ['This is an error'],
  },
  description: 'Description',
  label: 'Phone number',
  placeholder: 'Enter your phone number',
  defaultCountry: 'US',
})

const phoneNumber = ref<string>('(555) 555-5555')
</script>

<template>
  <Story title="Input/AppFormPhoneInput">
    <Variant title="Default">
      <template #controls>
        <HstText v-model="phoneNumber" title="Phone number" />
        <HstCheckbox v-model="state.isDisabled" title="Disabled" />
        <HstCheckbox v-model="state.isInvalid" title="Invalid" />
        <HstCheckbox v-model="state.isRequired" title="Required" />
        <HstCheckbox v-model="state.isTouched" title="Is Touched" />
        <HstText v-model="state.label" title="Label" />
        <HstText v-model="state.placeholder" title="Placeholder" />
        <HstText v-model="state.description" title="Description" />
        <HstSelect
          v-model="state.defaultCountry"
          :options="countries.getAlpha2Codes()"
          title="Default country"
        />
        <HstButton
          v-if="state.defaultCountry"
          @click="state.defaultCountry = undefined"
        >
          Clear default country
        </HstButton>
      </template>
      <AppFormPhoneInput v-model="phoneNumber" v-bind="state" @blur="state.isTouched" />
    </Variant>
  </Story>
</template>
