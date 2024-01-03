// get a list of css variables => [{ name: '--color-primary', value: '#fff' }, ...]
// and set them on the body element

import { convertCssIntoVariables } from '@/color-generator/utils/convertCssIntoVariables'

export function setBodyCssVariables(cssVariables: { name: string, value: string }[]) {
  const body = document.querySelector('body')

  if (body) {
    cssVariables.forEach((value) => {
      body.style.setProperty(value.name, value.value)
    })
  }
}

// Read the body css variables that are currently on it
// and return them as an object
export function getBodyCssVariables() {
  const body = document.querySelector('body')

  if (body) {
    const bodyStyles = convertCssIntoVariables(body.style.cssText, true)
    return bodyStyles
  }
}
