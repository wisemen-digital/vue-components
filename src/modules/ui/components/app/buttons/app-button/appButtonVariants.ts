import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const variantOptions = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
}

export const sizeOptions = {
  icon: 'h-10 p-3 w-10',
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-8',
}

export const loaderVariantOptions = {
  white: 'bg-white',
  primary: 'bg-primary',
}

export const buttonLoaderVariants = cva(
  'absolute top-[1px] h-2 w-2 rounded-full',
  {
    variants: {
      variant: loaderVariantOptions,
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

export const buttonVariants = cva(
  'relative inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
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

export type ButtonProps = VariantProps<typeof buttonVariants>
export type ButtonLoaderProps = VariantProps<typeof buttonLoaderVariants>

export const buttonVariantOptions = Object.keys(variantOptions)
export const buttonSizeOptions = Object.keys(sizeOptions)
export const buttonLoaderVariantOptions = Object.keys(loaderVariantOptions)
