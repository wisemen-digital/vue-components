export function mapCssVariablesIntoArray(globalsCss: string): {
  name: string
  value: string
}[] {
  const globalsCssArray = globalsCss.split('\n')
  const globalsCssArrayFiltered = globalsCssArray
    .filter((item: string) => item.includes('--'))
    .map((item: string) => item
      .trim()
      .replace(';', '')
      .split(':'))
    .map((item: string[]) => {
      return {
        name: item[0].trim(),
        value: item[1].trim(),
      }
    })
  return globalsCssArrayFiltered
}
