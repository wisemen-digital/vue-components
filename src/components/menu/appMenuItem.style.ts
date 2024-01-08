import type { VariantProps } from '@/utils/tailwind/cva'
import { cva } from '@/utils/tailwind/cva'

export const menuItemVariants = cva(
  {
    base: 'flex min-w-40 max-w-max items-center justify-between gap-2 px-4 py-2',
    variants: {
      active: {
        true: 'bg-neutral-100',
      },
    },
    defaultVariants: {
      active: false,
    },
  },
)

export type MenuItemProps = VariantProps<typeof menuItemVariants>
