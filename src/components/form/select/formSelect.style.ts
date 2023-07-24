import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const variantOptions = {
  default: 'bg-background text-foreground',
  disabled: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-focus-destructive',
}

export const active = {
  true: 'bg-secondary text-secondary-foreground bg-secondary/80',
  false: '',
}

export const selected = {
  true: 'text-primary underline-offset-4 underline hover:bg-secondary/80',
  false: '',
}

export const formSelectOptionVariants = cva(
  'flex w-full gap-2 rounded border border-transparent bg-white px-2 py-1 text-left text-black transition-all',
  {
    variants: {
      variant: variantOptions,
      active,
      selected,

    },
    defaultVariants: {
      variant: 'default',
      active: undefined,
      selected: undefined,
    },
  },
)

export type FormSelectOptionProps = VariantProps<typeof formSelectOptionVariants>

export const formSelectOptionVariantOptions = Object.keys(variantOptions)
