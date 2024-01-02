import { toast } from 'vue-sonner'
import { h, markRaw } from 'vue'
import AppToast from '@/components/toast/AppToast.vue'
import type { Icon } from '@/icons'
import type { ToastProps } from '@/components/toast/appToast.style'

export interface ToastParams {
  /**
   * The title of the toast.
   */
  title: string
  /**
   * The action of the toast.
   */
  action?: {
    onClick: () => void
    label: string
  }
  /**
   * The icon shown in front of the toast.
   */
  icon?: Icon
  /**
   * The variant of the toast that decides the styling.
   */
  variant?: ToastProps['variant']
}

export type ToastParamsWithoutVariant = Omit<ToastParams, 'variant'>
export function useToast() {
  const renderToast = (toastParams: ToastParams) => {
    const toastComponent = h(AppToast, toastParams)
    toast.custom(toastComponent)
  }

  const showToastError = (toastParams: ToastParamsWithoutVariant) => {
    renderToast({ variant: 'error', icon: 'warning', ...toastParams })
  }

  const showToastSuccess = (toastParams: ToastParamsWithoutVariant) => {
    renderToast({ variant: 'success', icon: 'checkmark', ...toastParams })
  }

  const showToastInfo = (toastParams: ToastParamsWithoutVariant) => {
    renderToast({ variant: 'info', icon: 'info', ...toastParams })
  }

  const showToastWarn = (toastParams: ToastParamsWithoutVariant) => {
    renderToast({ variant: 'warn', icon: 'warning', ...toastParams })
  }

  const showToast = (toastParams: ToastParams) => {
    renderToast({ variant: 'default', ...toastParams })
  }

  return {
    showToastError,
    showToastSuccess,
    showToastInfo,
    showToastWarn,
    showToast,
  }
}
