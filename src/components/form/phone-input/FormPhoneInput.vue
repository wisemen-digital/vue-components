<script lang="ts" setup>
import type { CountryCode, PhoneNumber } from 'libphonenumber-js'
import { AsYouType } from 'libphonenumber-js'
import { computed } from 'vue'
import countries from 'i18n-iso-countries'
import { useI18n } from 'vue-i18n'

interface Props {
  modelValue: string
  isDisabled?: boolean
  label?: string
  placeholder?: string
  defaultCountry?: CountryCode
}

const { isDisabled = false, defaultCountry = 'BE' as CountryCode } = defineProps<Props>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
  (event: 'update:phoneNumber', value: PhoneNumber | undefined): void
}>()

const { locale } = useI18n()

const model = defineModel<string>()

const phoneNumber = ref<AsYouType>(new AsYouType(defaultCountry))

const input = computed({
  get: () => model.value,
  set: (value: string) => {
    phoneNumber.value.reset()
    phoneNumber.value.input(value)
    const currentPhoneNumber = phoneNumber.value.getNumber()
    emit('update:modelValue', currentPhoneNumber?.formatInternational() ?? value)
    emit('update:phoneNumber', currentPhoneNumber)
  },
})

const getCountryName = (iso2: string): string => {
  return countries.getName(iso2, locale.value)
}

const getCountryFlagUrl = (iso2: CountryCode): string => {
  return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${iso2}.svg`
}
</script>

<template>
  <FormInputField v-model="input" :is-disabled="isDisabled" :label="label" :placeholder="placeholder">
    <template #front-content>
      <img v-if="phoneNumber.country" class="w-6" :src="getCountryFlagUrl(phoneNumber.country)" :alt="getCountryName(phoneNumber.country)">
      <p v-else class="w-6 text-center text-gray-400">
        ?
      </p>
    </template>
  </FormInputField>
</template>
