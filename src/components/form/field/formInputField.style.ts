import type { VariantProps } from '@/utils/tailwind/cva'
import { cva } from '@/utils/tailwind/cva'

export const statusOptions = {
  default: 'border-border',
  error: 'border-destructive',
  success: 'border-success',
  readonly: 'bg-muted text-muted-foreground',
  disabled: 'opacity-60',
}

export const extraContentOptions = {
  default: '',
  back: 'rounded-r-none border-r-0',
  front: 'rounded-l-none border-l-0',
  both: 'rounded-l-none border-l-0 rounded-r-none border-r-0',
}

export const inputFieldVariants = cva(
  {
    base: 'relative w-full rounded border border-border bg-input px-4 py-2 placeholder:transition-all placeholder:duration-300 focus:placeholder:translate-x-1 focus:placeholder:opacity-0',
    variants: {
      status: statusOptions,
      extraContent: extraContentOptions,
    },
    defaultVariants: {
      status: 'default',
      extraContent: 'default',
    },
  },
)

export const extraContentTypes = {
  back: 'rounded-l-none border-l-0',
  front: 'rounded-r-none border-r-0',
}

export const extraContentBorderOptions = {
  true: '',
  false: '',
}

export const inputFieldExtraContentVariants = cva(
  {
    base: 'flex items-center justify-center rounded border border-border bg-input px-4',
    variants: {
      status: statusOptions,
      extraContentType: extraContentTypes,
      extraContentBorder: extraContentBorderOptions,
    },
    compoundVariants: [
      {
        extraContentBorder: true,
        extraContentType: 'front',
        class: 'border-r',
      },
      {
        extraContentBorder: true,
        extraContentType: 'back',
        class: 'border-l',
      },
    ],
    defaultVariants: {
      extraContentType: 'back',
    },
  },
)

export type InputFieldProps = VariantProps<typeof inputFieldVariants>
export const inputFieldStatusOptions = Object.keys(statusOptions)
