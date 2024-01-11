<script setup lang="ts" generic="T">
import { computed, ref, watch } from 'vue'
import AppRadioGroupDescription from '@/components/radio/AppRadioGroupDescription.vue'
import AppRadioGroupIndicator from '@/components/radio/AppRadioGroupIndicator.vue'
import AppRadioGroupLabel from '@/components/radio/AppRadioGroupLabel.vue'
import AppTextDescription from '@/components/text/AppTextDescription.vue'
import { radioGroupOptionText } from '@/components/radio/appRadioGroup.style'

interface Props {
  isActive?: boolean
  isChecked?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  labelKey?: keyof NonNullable<T>
  descriptionKey?: keyof NonNullable<T>
  item: NonNullable<T>
}

const {
  isActive = false,
  isChecked = false,
  isDisabled = false,
  isInvalid = false,
  item,
  descriptionKey,
  labelKey,
} = defineProps<Props>()

const label = computed(() => {
  if (labelKey)
    return item[labelKey]

  return item
})

const description = computed(() => {
  if (descriptionKey)
    return item[descriptionKey]

  return null
})
</script>

<template>
  <div class="flex flex-row items-center gap-2">
    <AppRadioGroupIndicator
      :is-active="isActive"
      :is-checked="isChecked"
      :is-disabled="isDisabled"
      :is-invalid="isInvalid"
    />
    <div
      :class="{
        'opacity-50': isDisabled,
      }"
    >
      <AppTextDescription>
        <AppRadioGroupLabel
          :class="radioGroupOptionText({
            isInvalid,
          })"
        >
          {{ label }}
        </AppRadioGroupLabel>
        <template v-if="description" #description>
          <AppRadioGroupDescription
            :class="radioGroupOptionText({
              isInvalid,
            })"
          >
            {{ description }}
          </AppRadioGroupDescription>
        </template>
      </AppTextDescription>
    </div>
  </div>
</template>
