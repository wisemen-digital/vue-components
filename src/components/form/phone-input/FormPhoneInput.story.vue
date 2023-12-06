<script setup lang="ts">
import countries from 'i18n-iso-countries'
import type { CountryCode } from 'libphonenumber-js'
import { reactive, ref } from 'vue'
import FormPhoneInput from '@/components/form/phone-input/FormPhoneInput.vue'

interface State {
  isDisabled: boolean
  placeholder: string
  label: string
  defaultCountry?: CountryCode
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
      <FormPhoneInput v-model="phoneNumber" v-bind="state" />
    </Variant>
  </Story>
</template>
