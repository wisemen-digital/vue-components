const __resolved__virtual_storySource_srcComponentsDatepickerAppdateselectorStoryVue = `<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { VueDatePickerProps } from '@vuepic/vue-datepicker'
import AppDateSelector from '@/components/datepicker/AppDateSelector.vue'

const date = ref<Date | null>(null)
const dateRange = ref<[Date | null, Date | null]>([null, null])
interface State {
  // App props from date selector
  isRange?: boolean
  isTimePicker?: boolean
  isMonthPicker?: boolean
  isYearPicker?: boolean
  isWeekPicker?: boolean
  hasTimePicker?: boolean
  isInput?: boolean

  minRange?: number
  maxRange?: number
  autoRange?: number
  minDate?: Date
  maxDate?: Date
  flow?: ('month' | 'year' | 'calendar' | 'time' | 'minutes' | 'hours' | 'seconds')[]
  startDate?: Date
  endDate?: Date
  filters?: VueDatePickerProps['filters']
  yearRange?: [number, number]
  allowedDates?: Date[]
  disabledDates?: Date[]
  disabledWeekDays?: number[]

}

const state: State = reactive({
  isRange: false,
  isTimePicker: false,
  isMonthPicker: false,
  isYearPicker: false,
  isWeekPicker: false,
  hasTimePicker: false,
  isInput: false,

  minRange: undefined,
  maxRange: undefined,
  autoRange: undefined,
  minDate: undefined,
  maxDate: undefined,
  flow: undefined,
  startDate: undefined,
  endDate: undefined,
  filters: undefined,
  yearRange: undefined,
  allowedDates: undefined,
  disabledDates: undefined,
  disabledWeekDays: undefined,
})
<\/script>

<template>
  <Story
    title="DatePicker/AppDateSelector"
  >
    <Variant title="Default" auto-props-disabled>
      <template #controls>
        <!-- Contraols for the state -->
        <HstCheckbox v-model="state.isRange" title="Is Range" />
        <HstCheckbox v-model="state.isTimePicker" title="Is Time Picker" />
        <HstCheckbox v-model="state.isMonthPicker" title="Is Month Picker" />
        <HstCheckbox v-model="state.isYearPicker" title="Is Year Picker" />
        <HstCheckbox v-model="state.isWeekPicker" title="Is Week Picker" />
        <HstCheckbox v-model="state.hasTimePicker" title="Has Time Picker" />

        <HstNumber v-model="state.minRange" title="Min Range" />
        <HstNumber v-model="state.maxRange" title="Max Range" />
        <HstNumber v-model="state.autoRange" title="Auto Range" />
        <HstDate v-model="state.minDate" title="Min Date" />
        <HstDate v-model="state.maxDate" title="Max Date" />
        <HstSelect v-model="state.flow" title="Flow" :options="['month', 'year', 'calendar', 'time', 'minutes', 'hours', 'seconds']" />
        <HstDate v-model="state.startDate" title="Start Date" />
        <HstDate v-model="state.endDate" title="End Date" />
        <HstJson v-model="state.yearRange" title="Year Range" />
        <HstJson v-model="state.allowedDates" title="Allowed Dates" />
        <HstJson v-model="state.disabledDates" title="Disabled Dates" />
        <HstJson v-model="state.disabledWeekDays" title="Disabled Week Days" />
      </template>

      <div class="grid place-items-center">
        <AppDateSelector
          v-if="!state.isRange"
          v-bind="state"
          v-model="date"
        />
        <AppDateSelector
          v-else
          v-bind="state"
          v-model="dateRange"
          is-range
        />
      </div>
    </Variant>
  </Story>
</template>
`;
export {
  __resolved__virtual_storySource_srcComponentsDatepickerAppdateselectorStoryVue as default
};
