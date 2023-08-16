import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const sizeOptions = {
  default: 'h-6',
  sm: 'h-4',
  lg: 'h-8',
}

export const iconVariants = cva(
  '',
  {
    variants: {
      size: sizeOptions,
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

export type IconProps = VariantProps<typeof iconVariants>

export const iconSizeOptions = Object.keys(sizeOptions)
