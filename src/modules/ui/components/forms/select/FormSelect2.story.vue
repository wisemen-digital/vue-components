<script setup lang="ts">
const people = [
  'Durward Reynolds',
  'Kenton Towne',
  'Therese Wunsch',
  'Benedict Kessler',
  'Katelyn Rohan',
]

const selectedPerson = ref<string>()
const selectedPeople = ref<string[]>([])
</script>

<template>
  <Story title="Forms/Input/Select2">
    <Variant title="Default">
      <!-- <FormSelect2 v-model="selectedPerson" :items="people" /> -->
      <FormSelect2
        v-model="selectedPeople"
        :items="people"
        :display-function="value => value"
      />
    </Variant>
  </Story>
</template>
