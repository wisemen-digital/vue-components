<script setup lang="ts">
import { convertCssIntoVariables } from '../utils/convertCssIntoVariables'
import { hexToCssVar } from '../utils/colors'
import GlobalConfigJson from '@/../public/api/globalConfig.json'

const globalsCss = GlobalConfigJson
  ?.find((item: any) => item.name === 'TailwindConfig')
  ?.files
  ?.find((item: any) => item.name === 'globals.css')
  ?.content

const defaultValues = convertCssIntoVariables(globalsCss)

const hslCssVariables = ref<{
  name: string
  value: string
}[]>(defaultValues.hslCssVariables)
const otherValues = ref<{
  name: string
  value: string
}[]>(defaultValues.otherValues)
const useColorInput = ref(false)

const generateCss = (): string => {
  const cssVariables = [...hslCssVariables.value.map(hsl => ({
    name: hsl.name,
    value: hexToCssVar(hsl.value),
  })), ...otherValues.value]

  return cssVariables.reduce((acc, cssVariable) => {
    return `${acc}\n${cssVariable.name}: ${cssVariable.value};`
  }, '')
}

const handleDownloadCss = (): void => {
  const css = generateCss()
  const element = document.createElement('a')
  element.setAttribute('href', `data:text/css;charset=utf-8,${encodeURIComponent(css)}`)
  element.setAttribute('download', 'globalConfig.css')

  element.style.display = 'none'
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}

const handleCssUpload = (event: Event): void => {
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
  <div class="container mx-auto flex flex-col gap-4 py-12">
    <div>
      <h1 class="text-title font-bold">
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

    <div class="grid grid-cols-6 gap-4">
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
</template>
