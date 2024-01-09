import type { VariantProps } from '@/utils/tailwind/cva'
import { cva } from '@/utils/tailwind/cva'

export const menuItemVariants = cva(
  {
    base: 'flex min-w-40 max-w-max items-center justify-between gap-2 px-4 py-2',
    variants: {
      isActive: {
        true: 'bg-neutral-100',
      },
      isDisabled: {
        true: 'cursor-not-allowed text-neutral-400',
      },
    },
    defaultVariants: {
      isActive: false,
      isDisabled: false,
    },
  },
)

export type MenuItemProps = VariantProps<typeof menuItemVariants>
