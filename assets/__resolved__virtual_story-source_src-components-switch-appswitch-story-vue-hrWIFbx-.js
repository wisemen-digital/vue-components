const __resolved__virtual_storySource_srcComponentsSwitchAppswitchStoryVue = `<script setup lang="ts">
import { reactive, ref } from 'vue'
import AppSwitch from './AppSwitch.vue'

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
<\/script>

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

      <div class="grid h-20 w-20 place-items-center">
        <AppSwitch v-model="model" v-bind="state" />
      </div>
    </Variant>
  </Story>
</template>
`;
export {
  __resolved__virtual_storySource_srcComponentsSwitchAppswitchStoryVue as default
};
