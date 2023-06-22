import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const variantOptions = {
  default: 'text-current',
  destructive: 'text-secondary',
  black: 'text-black',
  white: 'text-white',
}

export const sizeOptions = {
  default: 'h-4',
  sm: 'h-3',
  lg: 'h-6',
}

export const iconVariants = cva(
  'flex-none rounded',
  {
    variants: {
      variant: variantOptions,
      size: sizeOptions,
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type IconProps = VariantProps<typeof iconVariants>

export const iconVariantOptions = Object.keys(variantOptions)
export const iconSizeOptions = Object.keys(sizeOptions)
