<script setup lang="ts">
const options1 = ['one', 'two', 'three', 'four', 'five']
const selectedOption1 = ref<string>('one')
const search1 = ref<string>('')

interface Option {
  label: string
  value: string
}
const selectedMultiple = ref<Option[]>([])

const options2: Option[] = [
  { label: 'one', value: 'one123' },
  { label: 'two', value: 'two12312312' },
  { label: 'three', value: 'thre3123e' },
  { label: 'four', value: 'four3123' },
  { label: 'five', value: 'f123123ve' },
]

const displayFunction = (value: Option | Option[]): string => {
  if (Array.isArray(value))
    return value.map(value => value.label).join(', ')

  return value.label
}
</script>

<template>
  <FormSelect2
    v-model="selectedMultiple"
    :items="options2"
    :display-function="value => value.label"
  />
</template>

<style></style>
