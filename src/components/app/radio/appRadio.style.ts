import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const variantOptions = {
  default: 'bg-background text-foreground hover:bg-secondary border-border',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent',
  ghost: 'hover:bg-secondary text-foreground border-transparent',
}

export const radioVariants = cva(
  'relative flex cursor-pointer items-center justify-between gap-6 rounded border-2 px-5 py-4 transition focus:outline-none',
  {
    variants: {
      variant: variantOptions,
      isChecked: {
        true: 'border-primary',
        false: '',
      },
      isActive: {
        true: 'border-primary',
        false: '',
      },
      isDisabled: {
        true: 'pointer-events-none opacity-50',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
export const radioButtonVariants = cva(
  'rounded-full border-2 border-border bg-transparent text-transparent',
  {
    variants: {
      isChecked: {
        true: 'border-primary bg-primary text-white',
        false: '',
      },
      isActive: {
        true: 'border-primary bg-primary/10 text-transparent',
        false: '',
      },
    },
  },
)

export type RadioProps = VariantProps<typeof radioVariants>

export const radioVariantOptions = Object.keys(variantOptions)
