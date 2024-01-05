<script setup lang="ts" generic="TRange extends boolean">
import type { DateSelectorProps, ModelDate } from '@/components/datepicker/AppDateSelector.vue'
import AppDateSelector from '@/components/datepicker/AppDateSelector.vue'
import AppInput from '@/components/input/AppInput.vue'
import { fadeTransition } from '@/transitions'

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
} = defineProps<Omit<DateSelectorProps<TRange>, 'isInput'>>()

const date = defineModel<ModelDate<TRange>>({
  default: null,
})
</script>

<template>
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
  >
    <template
      #input="{
        value,
        onInput,
        onEnter,
        onTab,
        onBlur,
        onKeypress,
        onPaste,
        onClear,
        isMenuOpen,
      }"
    >
      <AppInput
        icon-left="calendar"
        :model-value="value"
        is-readonly
        :is-outside-focused="isMenuOpen"
        @input="onInput"
        @keydown.enter="onEnter"
        @keydown.tab="onTab"
        @blur="onBlur"
        @keypress="onKeypress"
        @paste="onPaste"
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
</template>
