export function mapCssVariableToHsl({ name, value }: { name: string; value: string }): { name: string; value: string } {
  const cssVariableArray = value.split(' ')
  const hue = cssVariableArray[0]
  const saturation = cssVariableArray[1]
  const lightness = cssVariableArray[2]
  const hsl = `hsl(${hue}, ${saturation}, ${lightness})`
  return {
    name,
    value: hsl,
  }
}

function hslToHex(h: number, s: number, l: number): string {
  l /= 100
  const a = s * Math.min(l, 1 - l) / 100
  const f = (n: number): string => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color).toString(16).padStart(2, '0') // convert to Hex and prefix "0" if needed
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

function getHslValues(hsl: string): {
  h: number
  s: number
  l: number
} {
  // hsl looks like this hsl(0, 0%, 0%)
  const hslArray = hsl.split(',')
  const hue = hslArray[0]
  const saturation = hslArray[1]
  const lightness = hslArray[2]
  const hueValue = hue.replace('hsl(', '').trim()
  const saturationValue = saturation.replace('%', '').trim()
  const lightnessValue = lightness.replace('%', '').replace(')', '').trim()
  return {
    h: Number(hueValue),
    s: Number(saturationValue),
    l: Number(lightnessValue),
  }
}

export function mapHslToHex({ name, value }: { name: string; value: string }): { name: string; value: string } {
  const { h, s, l } = getHslValues(value)
  const hex = hslToHex(h, s, l)
  return {
    name,
    value: hex,
  }
}

function hexToHSL(H: string): string {
  // Convert hex to RGB first
  let r = 0
  let g = 0
  let b = 0
  if (H.length === 4) {
    r = Number(`0x${H[1]}${H[1]}`)
    g = Number(`0x${H[2]}${H[2]}`)
    b = Number(`0x${H[3]}${H[3]}`)
  }
  else if (H.length === 7) {
    r = Number(`0x${H[1]}${H[2]}`)
    g = Number(`0x${H[3]}${H[4]}`)
    b = Number(`0x${H[5]}${H[6]}`)
  }
  // Then to HSL
  r /= 255
  g /= 255
  b /= 255
  const cmin = Math.min(r, g, b)
  const cmax = Math.max(r, g, b)
  const delta = cmax - cmin
  let h = 0
  let s = 0
  let l = 0

  if (delta === 0)
    h = 0
  else if (cmax === r)
    h = ((g - b) / delta) % 6
  else if (cmax === g)
    h = (b - r) / delta + 2
  else h = (r - g) / delta + 4

  h = Math.round(h * 60)

  if (h < 0)
    h += 360

  l = (cmax + cmin) / 2
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
  s = +(s * 100).toFixed(1)
  l = +(l * 100).toFixed(1)

  return `hsl(${h},${s}%,${l}%)`
}

export function hexToCssVar(hex: string): string {
  const hsl = hexToHSL(hex)
  const hslArray = hsl.split(',')
  const hue = hslArray[0]
  const saturation = hslArray[1]
  const lightness = hslArray[2]
  const hueValue = hue.replace('hsl(', '').trim()
  const saturationValue = saturation.replace('%', '').trim()
  const lightnessValue = lightness.replace('%', '').replace(')', '').trim()
  return `${hueValue} ${saturationValue}% ${lightnessValue}%`
}
