import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const variantOptions = {
  default: 'bg-background text-foreground hover:bg-primary/90',
  disabled: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-focus-destructive',
  active: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  selected: 'text-primary underline-offset-4 underline hover:bg-secondary/80',
}

export const formSelectOptionVariants = cva(
  'flex w-full gap-2 rounded border border-transparent bg-white px-2 py-1 text-left text-black transition-all',
  {
    variants: {
      variant: variantOptions,
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type FormSelectOptionProps = VariantProps<typeof formSelectOptionVariants>

export const formSelectOptionVariantOptions = Object.keys(variantOptions)
