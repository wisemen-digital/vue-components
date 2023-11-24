import type { VariantProps } from '@/utils/tailwind/cva'
import { cva } from '@/utils/tailwind/cva'

export const sizeOptions = {
  default: 'w-[80ch] ',
  sm: 'w-[60ch]',
  full: 'w-full',
  lg: 'w-[120ch]',
}

export const loaderVariantOptions = {
  white: 'bg-white',
  primary: 'bg-primary',
}

export const modalVariants = cva(
  {
    base: 'flex flex-col gap-4 rounded-modal bg-white p-6 text-left',
    variants: {
      size: sizeOptions,
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

export type ModalProps = VariantProps<typeof modalVariants>
export const modalSizeOptions = Object.keys(sizeOptions)
