import { mapCssVariableToHsl, mapHslToHex } from './colors'
import { mapCssVariablesIntoArray } from './mapCssVariablesIntoArray'

export function convertCssIntoVariables(globalsCss: any): {
  hslCssVariables: {
    name: string
    value: string
  }[]
  otherValues: {
    name: string
    value: string
  }[]
} {
  const keyValueCssVariables = mapCssVariablesIntoArray(globalsCss ?? '')

  const colorValues = keyValueCssVariables.filter(item => item.value.includes('%'))
  const hslCssVariables = colorValues
    .map(mapCssVariableToHsl)
    .map(mapHslToHex)

  const otherValues = keyValueCssVariables
    .filter(item => !item.value.includes('%'))

  return {
    hslCssVariables,
    otherValues,
  }
}
