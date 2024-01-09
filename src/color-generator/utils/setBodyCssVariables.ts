// get a list of css variables => [{ name: '--color-primary', value: '#fff' }, ...]
// and set them on the body element

import type { CssVariables } from '@/color-generator/utils/convertCssIntoVariables'
import { convertCssIntoVariables } from '@/color-generator/utils/convertCssIntoVariables'

export function setBodyCssVariables(cssVariables: { name: string, value: string }[]): void {
  const body = document.querySelector('body')

  if (body) {
    cssVariables.forEach((value) => {
      body.style.setProperty(value.name, value.value)
    })
  }
}

// Read the body css variables that are currently on it
// and return them as an object
export function getBodyCssVariables(): CssVariables | undefined {
  const body = document.querySelector('body')

  if (body) {
    const bodyStyles = convertCssIntoVariables(body.style.cssText, true)
    return bodyStyles
  }
}
