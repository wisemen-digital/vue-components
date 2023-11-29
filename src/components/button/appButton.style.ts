import type { VariantProps } from '@/utils/tailwind/cva'
import { cva } from '@/utils/tailwind/cva'

export const variantOptions = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-focus-destructive',
  outline: 'border border-primary hover:bg-secondary text-secondary-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-secondary text-secondary-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
}

export const sizeOptions = {
  icon: 'h-10 p-3 w-10',
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded px-3',
  lg: 'h-11 rounded px-8',
}

export const button = cva({
  base: 'relative inline-flex flex-shrink-0 items-center justify-center gap-x-2 rounded-button border border-solid text-subtext font-medium ring-offset-background duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    variant: variantOptions,
    size: sizeOptions,
    isLoading: {
      true: 'opacity-100',
    },
    isRounded: {
      true: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export const buttonIcon = cva({
  variants: {
    size: {
      default: 'h-3.5 w-3.5',
      sm: 'h-3.5 w-3.5',
      lg: 'h-4 w-4',
      icon: 'h-3.5 w-3.5',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

export const buttonVariantOptions = Object.keys(variantOptions)
export const buttonSizeOptions = Object.keys(sizeOptions)
export type ButtonProps = VariantProps<typeof button>
