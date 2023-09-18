<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import FormSelectContainer from './components/form/select/FormSelectContainer.vue'
import FormSelectInput from './components/form/select/FormSelectInput.vue'
import FormSelectOption from './components/form/select/FormSelectOption.vue'
import FormSelectOptions from './components/form/select/FormSelectOptions.vue'

interface Item {
  name: string
  path: string
}

const options: Item[] = [{
  name: 'Home',
  path: '/',
}, {
  name: 'About',
  path: '/about',
}, {
  name: 'Contact',
  path: '/contact',
}]

const selectedItem = ref<Item>()
const displayFunction = (item: Item): string => item.name
</script>

<template>
  <div class="p-40">
    <div class="w-80">
      <FormSelectContainer
        v-slot="{ items }"
        v-model="selectedItem"
        :items="options"
        :display-function="displayFunction"
      >
        <FormSelectInput />
        <FormSelectOptions v-slot="{ item, active, disabled, selected }" :items="items">
          <FormSelectOption
            :value="item"
            :is-active="active"
            :is-disabled="disabled"
            :is-selected="selected"
          />
        </FormSelectOptions>
      </FormSelectContainer>
    </div>
  </div>
</template>
