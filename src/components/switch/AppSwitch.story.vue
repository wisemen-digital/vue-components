<script setup lang="ts">
import { reactive, ref } from 'vue'
import AppSwitch from './AppSwitch.vue'
import AppSwitchIndicator from '@/components/switch/AppSwitchIndicator.vue'

interface State {
  isInvalid: boolean
  isDisabled: boolean
  isCheckbox: boolean
  selectedBackgroundClass: string
}

const state: State = reactive({
  isInvalid: false,
  isDisabled: false,
  isCheckbox: false,
  selectedBackgroundClass: 'bg-primary',
})

const model = ref<boolean>(false)
</script>

<template>
  <Story
    title="Switch/AppSwitch"
  >
    <Variant title="Default" auto-props-disabled>
      <template #controls>
        <HstCheckbox v-model="state.isCheckbox" title="Is Checkbox" />
        <HstCheckbox v-model="state.isDisabled" title="Disabled" />
        <HstCheckbox v-model="state.isInvalid" title="Invalid" />
        <HstText v-model="state.selectedBackgroundClass" title="Selected Background Class" />
      </template>

      <div class="grid">
        <AppSwitch v-model="model" v-bind="state" />
      </div>
    </Variant>
    <Variant title="Custom" auto-props-disabled>
      <template #controls>
        <HstCheckbox v-model="state.isCheckbox" title="Is Checkbox" />
        <HstCheckbox v-model="state.isDisabled" title="Disabled" />
        <HstCheckbox v-model="state.isInvalid" title="Invalid" />
        <HstText v-model="state.selectedBackgroundClass" title="Selected Background Class" />
      </template>

      <div class="grid ">
        <AppSwitch v-slot="{ isSelected, isCheckbox, isDisabled }" v-model="model" v-bind="state">
          <div
            class="flex items-center gap-4 rounded border bg-primary/10 p-4 transition-colors" :class="{
              'border-primary': isSelected,
              'border-muted-foreground': !isSelected,
            }"
          >
            <AppSwitchIndicator v-bind="state" :is-checkbox="isCheckbox" :is-selected="isSelected" :is-disabled="isDisabled" />
            <p>
              This is a custom select
            </p>
          </div>
        </AppSwitch>
      </div>
    </Variant>
  </Story>
</template>
