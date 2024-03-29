<script setup lang="ts" generic="T">
import { computed } from 'vue'
import AppRadioGroupDescription from '@/components/radio/AppRadioGroupDescription.vue'
import AppRadioGroupIndicator from '@/components/radio/AppRadioGroupIndicator.vue'
import AppRadioGroupLabel from '@/components/radio/AppRadioGroupLabel.vue'
import AppTextDescription from '@/components/text/AppTextDescription.vue'
import { radioGroupOptionText } from '@/components/radio/appRadioGroup.style'

interface Props {
  /**
   * Whether the radio group option is active.
   */
  isActive?: boolean
  /**
   * Whether the radio group option is checked.
   */
  isChecked?: boolean
  /**
   * Whether the radio group option is disabled.
   */
  isDisabled?: boolean
  /**
   * Whether the radio group option is invalid.
   */
  isInvalid?: boolean
  /**
   * Key of the value for label.
   */
  labelKey?: keyof NonNullable<T>
  /**
   * Key of the value for description.
   */
  descriptionKey?: keyof NonNullable<T>
  /**
   * The item.
   */
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
