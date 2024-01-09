<script setup lang="ts" generic="TRange extends boolean">
import type { VueDatePickerProps } from '@vuepic/vue-datepicker'
import VueDatePicker from '@vuepic/vue-datepicker'

import '@vuepic/vue-datepicker/dist/main.css'
import AppIcon from '@/components/icon/AppIcon.vue'
import type { DateSelectorProps } from '@/types/datePicker.type'

export type ModelDate<TRange> = TRange extends true ? [Date | null, Date | null] : Date | null

const {
  hasTimePicker = false,
  isMonthPicker = false,
  isRange = false,
  isTimePicker = false,
  isWeekPicker = false,
  isYearPicker = false,
  isInput = false,

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
} = defineProps<DateSelectorProps<TRange>>()

const emits = defineEmits<{
  close: []
}>()

const date = defineModel<ModelDate<TRange>>({
  default: null,
})

function handleClose(): void {
  emits('close')
}
</script>

<template>
  <!-- eslint-disable vue/valid-v-model -->
  <VueDatePicker
    v-model="(date as any)"

    :time-picker="isTimePicker"
    :month-picker="isMonthPicker"
    :year-picker="isYearPicker"
    :week-picker="isWeekPicker"
    :range="isRange"
    :inline="!isInput"

    :allowed-dates="allowedDates"
    :auto-range="autoRange"
    :disabled-dates="disabledDates"
    :disabled-week-days="disabledWeekDays"
    :filters="filters"
    :flow="flow"
    :enable-time-picker="hasTimePicker"
    :min-range="minRange"
    :max-range="maxRange"
    :min-date="minDate"
    :max-date="maxDate"
    :start-date="startDate"
    :end-date="endDate"
    :year-range="yearRange"
    :clearable="false"

    teleport="body"
    is-24
    auto-apply
    no-disabled-range
    :ignore-time-validation="!hasTimePicker"
    :hide-input-icon="true"

    :transitions="{
      // @ts-expect-error - This works but the library typing is wrong
      menuAppearTop: 'popover',
      menuAppearBottom: 'popover',
    }"
    @closed="handleClose"
  >
    <template
      #dp-input="{
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
      <slot
        name="input"
        :value="value"
        :on-input="onInput"
        :on-enter="onEnter"
        :on-tab="onTab"
        :on-blur="onBlur"
        :on-keypress="onKeypress"
        :on-paste="onPaste"
        :on-clear="onClear"
        :is-menu-open="isMenuOpen"
      />
    </template>
    <template #calendar-icon>
      <AppIcon icon="calendar" />
    </template>
    <template #input-icon>
      <AppIcon icon="calendar" />
    </template>
    <template #clear-icon>
      <AppIcon icon="close" />
    </template>
    <template #arrow-left>
      <AppIcon icon="chevronLeft" />
    </template>
    <template #arrow-right>
      <AppIcon icon="chevronRight" />
    </template>
    <template #arrow-up>
      <AppIcon icon="chevronUp" />
    </template>
    <template #arrow-down>
      <AppIcon icon="chevronDown" />
    </template>
    <template #clock-icon>
      <AppIcon icon="clock" />
    </template>
  </VueDatePicker>
</template>

<style lang="scss">
.dp__arrow_top {
  @apply hidden;
}

.dp__menu {
  @apply rounded-card border-border bg-popover text-popover-foreground;
}

.dp__calendar_item {
  @apply rounded-button;
}

.dp__cell_inner {
  @apply rounded-button hover:bg-neutral-100;
}

.dp__active_date, .dp__overlay_cell_active, .dp__range_start, .dp__range_end {
  @apply bg-primary text-primary-foreground hover:bg-primary;
}

.dp__range_between {
  @apply bg-primary/20 text-black rounded-button;
}

.dp__today {
  @apply border-primary;
}

.dp__btn, .dp__inner_nav {
  @apply hover:bg-neutral-100 text-black rounded-button;
}

.dp__cell_offset {
  @apply hover:bg-neutral-100 text-neutral-300;
}

.dp__overlay {
  @apply rounded-card border-border bg-popover text-popover-foreground;
}
</style>
