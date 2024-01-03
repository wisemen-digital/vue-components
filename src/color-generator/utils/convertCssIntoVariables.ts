import { mapCssVariableToHsl, mapHslToHex } from './colors'
import { mapCssVariablesBodyIntoArray, mapCssVariablesIntoArray } from './mapCssVariablesIntoArray'

export interface CssVariable {
  name: string
  value: string
}

export interface CssVariables {
  hslCssVariables: CssVariable[]
  otherValues: CssVariable[]
}

export function convertCssIntoVariables(globalsCss: any, isBody = false): CssVariables {
  const keyValueCssVariables = isBody ? mapCssVariablesBodyIntoArray(globalsCss ?? '') : mapCssVariablesIntoArray(globalsCss ?? '')

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

export function convertBodyVariablesIntoVariables(globalsCss: CssVariable[]): CssVariables {
  const colorValues = globalsCss.filter(item => item.value.includes('%'))
  const hslCssVariables = colorValues
    .map(mapCssVariableToHsl)
    .map(mapHslToHex)

  const otherValues = globalsCss
    .filter(item => !item.value.includes('%'))

  return {
    hslCssVariables,
    otherValues,
  }
}

export function combineStyles(firstCss: CssVariables, secondCss: CssVariables): CssVariables {
  // Combinte with no duplicates
  const allHsl: CssVariable[] = []
  const allOther: CssVariable[] = []

  secondCss.hslCssVariables.forEach((item) => {
    if (!allHsl.find(item2 => item2.name === item.name))
      allHsl.push(item)
  })

  firstCss.hslCssVariables.forEach((item) => {
    if (!allHsl.find(item2 => item2.name === item.name))
      allHsl.push(item)
  })

  secondCss.otherValues.forEach((item) => {
    if (!allOther.find(item2 => item2.name === item.name))
      allOther.push(item)
  })

  firstCss.otherValues.forEach((item) => {
    if (!allOther.find(item2 => item2.name === item.name))
      allOther.push(item)
  })

  return {
    hslCssVariables: allHsl,
    otherValues: allOther,
  }
}
