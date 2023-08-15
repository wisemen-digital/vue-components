import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const sizeOptions = {
  default: 'w-[80ch] ',
  sm: 'w-[60ch]',
  full: 'w-full',
  lg: 'w-[120ch]',
}

export const modalVariants = cva(
  'flex flex-col gap-4 rounded-modal bg-popover p-6 text-left text-popover-foreground shadow-modal-shadow',
  {
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
