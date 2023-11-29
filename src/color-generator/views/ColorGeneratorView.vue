<script setup lang="ts">
import { ref } from 'vue'
import { convertCssIntoVariables } from '../utils/convertCssIntoVariables'
import { hexToCssVar } from '../utils/colors'

import FormInputField from '@/components/form/field/FormInputField.vue'
import AppButton from '@/components/app/button/AppButton.vue'

async function getGlobalConfig(): Promise<any> {
  const response = await fetch('https://wisemen-digital.github.io/vue-components/api/globalConfig.json')
  const json = await response.json()
  return json
}

const globalsCss = ref<string>()
const defaultValues = ref<{
  hslCssVariables: {
    name: string
    value: string
  }[]
  otherValues: {
    name: string
    value: string
  }[]
}>()

const hslCssVariables = ref<{
  name: string
  value: string
}[]>()
const otherValues = ref<{
  name: string
  value: string
}[]>()

async function init(): Promise<void> {
  const response = await getGlobalConfig()
  globalsCss.value = response
    ?.find((item: any) => item.name === 'TailwindConfig')
    ?.files
    ?.find((item: any) => item.name === 'globals.css')
    ?.content
  defaultValues.value = convertCssIntoVariables(globalsCss.value)
  hslCssVariables.value = defaultValues.value.hslCssVariables
  otherValues.value = defaultValues.value.otherValues
}

init()

const useColorInput = ref(false)

function generateCss(): string {
  if (!hslCssVariables.value || !otherValues.value)
    return ''
  const cssVariables = [...hslCssVariables.value.map(hsl => ({
    name: hsl.name,
    value: hexToCssVar(hsl.value),
  })), ...otherValues.value]

  return cssVariables.reduce((acc, cssVariable) => {
    return `${acc}\n${cssVariable.name}: ${cssVariable.value};`
  }, '')
}

function handleDownloadCss(): void {
  const css = generateCss()
  const element = document.createElement('a')
  element.setAttribute('href', `data:text/css;charset=utf-8,${encodeURIComponent(css)}`)
  element.setAttribute('download', 'globalConfig.css')

  element.style.display = 'none'
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}

function handleCssUpload(event: Event): void {
  const file = (event?.target as HTMLInputElement)?.files?.[0]
  const reader = new FileReader()
  reader.onload = (event): void => {
    const css = event.target?.result
    const newValues = convertCssIntoVariables(css)
    hslCssVariables.value = newValues.hslCssVariables
    otherValues.value = newValues.otherValues
  }
  if (file)
    reader.readAsText(file)
}
</script>

<template>
  <div class="min-h-screen bg-muted text-muted-foreground">
    <div class="container mx-auto flex h-full w-full flex-col gap-4 py-12">
      <div>
        <h1 class="text-title font-bold text-black">
          Color generator
        </h1>
        <p class="text-muted-foreground">
          Generate CSS variables from a CSS file
        </p>
        <input type="file" accept=".css" @change="handleCssUpload">
      </div>
      <div class="flex items-center gap-2">
        <label for="useColorInput">Use color selectors</label>

        <input id="useColorInput" v-model="useColorInput" type="checkbox" name="useColorInput">
      </div>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        <div v-for="cssVariable in hslCssVariables" :key="cssVariable.name">
          {{ cssVariable.name }}:
          <input v-if="useColorInput" v-model="cssVariable.value" type="color" class="w-full rounded px-2 py-1">
          <FormInputField v-else v-model="cssVariable.value" />
        </div>
        <div v-for="cssVariable in otherValues" :key="cssVariable.name">
          {{ cssVariable.name }}:
          <FormInputField v-model="cssVariable.value" />
        </div>
      </div>
      <AppButton @component:click="handleDownloadCss">
        Download CSS
      </AppButton>
    </div>
  </div>
</template>
