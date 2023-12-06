<script lang="ts" setup>
import type { CountryCode, PhoneNumber } from 'libphonenumber-js'
import { AsYouType } from 'libphonenumber-js'
import { computed } from 'vue'
import countries from 'i18n-iso-countries'
import { useI18n } from 'vue-i18n'
import FormInputField from '@/components/form/field/FormInputField.vue'

interface Props {
  modelValue: string
  isDisabled?: boolean
  label?: string
  placeholder?: string
  defaultCountry?: CountryCode
}

const { isDisabled = false, defaultCountry } = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [string]
  'update:phoneNumber': [PhoneNumber | undefined]
}>()

const { locale } = useI18n()

const model = defineModel<string>()

const phoneNumber = computed<AsYouType>(() => new AsYouType(defaultCountry))

const input = computed({
  get: () => String(model.value),
  set: (value: string) => {
    phoneNumber.value.reset()
    phoneNumber.value.input(value)
    const currentPhoneNumber = phoneNumber.value.getNumber()
    emit('update:modelValue', currentPhoneNumber?.formatInternational() ?? value)
    emit('update:phoneNumber', currentPhoneNumber)
  },
})

const currentCountryName = computed<string | undefined>(() => {
  if (!phoneNumber.value.country)
    return

  return getCountryName(phoneNumber.value.country)
})

const currentCountryFlagUrl = computed<string | undefined>(() => {
  if (!phoneNumber.value.country)
    return

  return getCountryFlagUrl(phoneNumber.value.country)
})

function getCountryName(iso2: string): string {
  return countries.getName(iso2, locale.value) ?? iso2
}

function getCountryFlagUrl(iso2: CountryCode): string {
  return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${iso2}.svg`
}
</script>

<template>
  <FormInputField v-model="input" :is-disabled="isDisabled" :label="label" :placeholder="placeholder">
    <template #frontContent>
      <img v-if="currentCountryFlagUrl" class="w-6" :src="currentCountryFlagUrl" :alt="currentCountryName">
      <p v-else class="w-6 text-center text-input-placeholder">
        ?
      </p>
    </template>
  </FormInputField>
</template>
