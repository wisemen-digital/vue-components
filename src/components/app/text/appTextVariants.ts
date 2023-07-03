import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const variantOptions = {
  p: 'text-base',
  h1: 'font-bold text-5xl',
  h2: 'font-semibold text-3xl',
  h3: 'font-semibold text-2xl',
  h4: 'font-semibold text-xl',
  quote: 'italic',
  large: 'text-lg font-semibold',
  small: 'text-sm',
  subtle: 'text-sm text-muted-foreground',
}

export const boldnessOptions = {
  bold: 'font-bold',
  normal: 'font-normal',
  light: 'font-light',
  thin: 'font-thin',
  extrabold: 'font-extrabold',
  semibold: 'font-semibold',
  none: '',
}

export const truncateOptions = {
  1: 'line-clamp-1',
  2: 'line-clamp-2',
  3: 'line-clamp-3',
  4: 'line-clamp-4',
  5: 'line-clamp-5',
  6: 'line-clamp-6',

}

export const textVariants = cva(
  '',
  {
    variants: {
      variant: variantOptions,
      boldness: boldnessOptions,
      truncate: truncateOptions,
    },
    defaultVariants: {
      variant: 'p',
      boldness: 'none',
      truncate: undefined,
    },
  },
)

export type TextProps = VariantProps<typeof textVariants>

export const textVariantOptions = Object.keys(variantOptions)
export const textBoldnessOptions = Object.keys(boldnessOptions)
export const textTruncateOptions = Object.keys(truncateOptions)
