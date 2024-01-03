<script setup lang="ts">
import AppButton from '@/components/button/AppButton.vue'

import { useToast } from '@/composables/toast/useToast'
import AppToastContainer from '@/components/toast/AppToastContainer.vue'

const {
  showToast,
  showToastSuccess,
  showToastError,
  showToastInfo,
  showToastWarn,
} = useToast()

function onWarn() {
  showToastWarn({
    title: 'Warning',
    desciption: 'This is a warning',
  })
}

function onInfo() {
  showToastInfo({
    title: 'Info',
    desciption: 'This is an info',
  })
}

function onError() {
  showToastError({
    title: 'Error',
    desciption: 'This is an error',
  })
}

function onSuccess() {
  showToastSuccess({
    title: 'Success',
    desciption: 'This is a success',
  })
}

function onToast() {
  showToast({
    title: 'Toast',
    desciption: 'This is a toast',
  })
}

function onToastWithAction() {
  showToast({
    title: 'Toast',
    desciption: 'This is a toast with an action',
    action: {
      label: 'Undo',
      onClick: () => {
        console.warn('undo')
      },
    },
  })
}

function onToastWithPromise() {
  showToast({
    title: 'Toast',
    desciption: 'This is a toast with a promise',
    promise: {
      action: new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve('It worked!')
        }, 2000)
      }),
      loadingMessage: 'Saving...',
      successMessage: test => `Success! ${test}`,
      errorMessage: test => `Error! ${test}`,
    },
  })
}
</script>

<template>
  <Story
    title="Toast/AppToast"
  >
    <Variant title="Default" auto-props-disabled>
      <div class="flex flex-wrap gap-2">
        <AppButton @click="onWarn">
          Warning
        </AppButton>
        <AppButton @click="onInfo">
          Info
        </AppButton>
        <AppButton @click="onError">
          Error
        </AppButton>
        <AppButton @click="onSuccess">
          Success
        </AppButton>
        <AppButton @click="onToast">
          Toast
        </AppButton>
        <AppButton @click="onToastWithAction">
          Toast with action
        </AppButton>
        <AppButton @click="onToastWithPromise">
          Toast with promise
        </AppButton>
      </div>
      <AppToastContainer />
    </Variant>
  </Story>
</template>
