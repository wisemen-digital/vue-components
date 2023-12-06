<script lang="ts" setup>
import type { CountryCode, PhoneNumber } from 'libphonenumber-js'
import { AsYouType } from 'libphonenumber-js'
import { computed, ref, watch } from 'vue'
import countries from 'i18n-iso-countries'
import { useI18n } from 'vue-i18n'
import type { z } from 'zod'
import AppFormInput from '@/components/input/AppFormInput.vue'

interface Props {
  modelValue: string
  isDisabled?: boolean
  isRequired?: boolean
  errors?: z.ZodFormattedError<string> | undefined | null
  description?: string | null
  label?: string | null
  placeholder?: string
  defaultCountry?: CountryCode
  isTouched: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [string]
  'update:phoneNumber': [PhoneNumber | undefined]
}>()

const { locale } = useI18n()

const model = defineModel<string>()

const phoneNumber = ref<AsYouType>(new AsYouType(props.defaultCountry))

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

const currentCountry = computed<CountryCode | undefined>(() => {
  if (!phoneNumber.value.country)
    return

  return phoneNumber.value.country
})

const currentCountryName = computed<string | undefined>(() => {
  if (!currentCountry.value)
    return

  return getCountryName(currentCountry.value)
})

const currentCountryFlagUrl = computed<string | undefined>(() => {
  if (!currentCountry.value)
    return

  return getCountryFlagUrl(currentCountry.value)
})

function getCountryName(iso2: string): string {
  return countries.getName(iso2, locale.value) ?? iso2
}

function getCountryFlagUrl(iso2: CountryCode): string {
  return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${iso2}.svg`
}

watch(() => props.defaultCountry, (newDefaultCountry) => {
  phoneNumber.value = new AsYouType(newDefaultCountry)
})
</script>

<template>
  <AppFormInput v-model="input" :is-touched="isTouched" :errors="errors" :description="description" :is-required="isRequired" :is-disabled="isDisabled" :label="label" :placeholder="placeholder">
    <template #left>
      <div class="pl-4">
        <img v-if="currentCountryFlagUrl" class="w-6" :src="currentCountryFlagUrl" :alt="currentCountryName">
        <p v-else class="w-6 text-center text-input-placeholder">
          ?
        </p>
      </div>
    </template>
  </AppFormInput>
</template>
