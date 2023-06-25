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
      <div class="flex flex-col justify-start gap-20 py-20">
        <FormSelect2 v-model="selectedPerson" :items="people" class="w-80" />
        <FormSelect2
          v-model="selectedPeople"
          class="w-80"
          :items="people"
          :display-function="value => value"
        />
      </div>
    </Variant>
  </Story>
</template>
