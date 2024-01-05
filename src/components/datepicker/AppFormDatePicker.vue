<script setup lang="ts" generic="TInputType extends InputType, TRange extends boolean = false">
import { useAttrs } from 'vue'
import type { DateSelectorProps, ModelDate } from '@/components/datepicker/AppDateSelector.vue'
import AppDateSelector from '@/components/datepicker/AppDateSelector.vue'
import { fadeTransition } from '@/transitions'
import AppIcon from '@/components/icon/AppIcon.vue'
import type { InputFormProps, InputType } from '@/types/input.type'
import { useFormInput } from '@/composables/form/useFormInput'
import AppInput from '@/components/input/AppInput.vue'
import AppFormLabel from '@/components/form-label/AppFormLabel.vue'
import AppText from '@/components/text/AppText.vue'
import AppFormError from '@/components/form-error/AppFormError.vue'

export type DateProps<TRange extends boolean> = Omit<DateSelectorProps<TRange>, 'isInput'>
type Props = DateProps<TRange> & Omit<InputFormProps<TInputType>, 'onBlur'>
const {
  hasTimePicker = false,
  isMonthPicker = false,
  isRange = false,
  isTimePicker = false,
  isWeekPicker = false,
  isYearPicker = false,

  allowedDates,
  autoRange,
  disabledDates,
  disabledWeekDays,
  endDate,
  filters,
  flow,
  maxDate,
  maxRange,
  minDate,
  minRange,
  startDate,
  yearRange,

  errors = null,
  label = null,
  description = null,
  isRequired = false,
  isTouched,
  type,

} = defineProps<Props>()

const emits = defineEmits<{
  blur: []
}>()
const attrs = useAttrs()

const date = defineModel<ModelDate<TRange>>({
  default: null,
})

const { id, isInvalid } = useFormInput({
  isTouched: () => isTouched,
  errors: () => errors,
  type: type ?? 'text',
  value: date,
})

function handleBlur(isOpen: boolean): void {
  if (!isOpen)
    emits('blur')
}

function handleClose(): void {
  emits('blur')
}
</script>

<template>
  <div :class="attrs.class">
    <AppFormLabel
      v-if="label !== null"
      :id="id"
      :is-disabled="isDisabled ?? false"
      :is-invalid="isInvalid"
      :is-required="isRequired"
      :label="label"
    />
    <!-- eslint-disable vue/valid-v-model -->
    <AppDateSelector
      v-model="(date as any)"
      :has-time-picker="hasTimePicker"
      :is-month-picker="isMonthPicker"
      :is-range="isRange"
      :is-time-picker="isTimePicker"
      :is-week-picker="isWeekPicker"
      :is-year-picker="isYearPicker"

      :allowed-dates="allowedDates"
      :auto-range="autoRange"
      :disabled-dates="disabledDates"
      :disabled-week-days="disabledWeekDays"
      :end-date="endDate"
      :filters="filters"
      :flow="flow"
      :max-date="maxDate"
      :max-range="maxRange"
      :min-date="minDate"
      :min-range="minRange"
      :start-date="startDate"
      :year-range="yearRange"

      is-input
      @close="handleClose"
    >
      <template
        #input="{
          value,
          onInput,
          onEnter,
          onTab,
          onKeypress,
          onPaste,
          onClear,
          isMenuOpen,
        }"
      >
        <AppInput
          v-bind="{
            ...attrs,
            onBlur: undefined,
          }"

          icon-left="calendar"
          :model-value="value"
          :is-invalid="isInvalid"
          is-readonly
          :is-outside-focused="isMenuOpen"
          type="text"
          @input="onInput"
          @keydown.enter="onEnter"
          @keydown.tab="onTab"
          @keypress="onKeypress"
          @paste="onPaste"
          @blur="handleBlur(isMenuOpen)"
        >
          <template #right>
            <Transition v-bind="fadeTransition">
              <button v-if="value">
                <AppIcon icon="close" class="h-4 px-2" @click.stop="onClear" />
              </button>
            </Transition>
          </template>
        </AppInput>
      </template>
    </AppDateSelector>
    <AppText
      v-if="description !== null"
      class="mt-1"
      variant="caption"
    >
      {{ description }}
    </AppText>

    <AppFormError
      :errors="errors"
      :is-touched="isTouched"
    />
  </div>
</template>
