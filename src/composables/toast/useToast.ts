import { toast } from 'vue-sonner'
import { h, markRaw } from 'vue'
import AppToast from '@/components/toast/AppToast.vue'
import type { Icon } from '@/icons'
import type { ToastProps } from '@/components/toast/appToast.style'

export interface ToastPromise<TPromise> {
  /**
   * The promise that the toast is waiting for.
   * The toast will be closed when the promise is resolved or rejected.
   * The toast will show the success message when the promise is resolved.
   * The toast will show the error message when the promise is rejected.
   * The toast will show the loading message when the promise is pending.
   */
  action: Promise<TPromise>
  /**
   * The message that the toast will show when the promise is pending.
   */
  loadingMessage: string
  /**
   * The message that the toast will show when the promise is resolved.
   */
  successMessage: (data: TPromise) => string
  /**
   * The message that the toast will show when the promise is rejected.
   */
  errorMessage: (error: string) => string
}
export interface ToastParams<TPromise> {
  /**
   * The title of the toast.
   */
  title: string

  /**
   * The description of the toast.
   */
  desciption?: string
  /**
   * The action of the toast.
   */
  action?: {
    /**
     * The callback that will be called when the action is clicked.
     */
    onClick: () => void
    /**
     * The label of the action.
     */
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
  /**
   * The duration of the toast.
   */
  duration?: number

  /**
   * The promise that the toast is waiting for.
   */
  promise?: ToastPromise<TPromise>
}
export type ToastParamsWithoutVariant<TPromise> = Omit<ToastParams<TPromise>, 'variant'>

export function useToast() {
  const renderToast = <TPromise>({ title, action, duration = Number.POSITIVE_INFINITY, icon, variant, promise }: ToastParams<TPromise>) => {
    const toastComponent = h(AppToast<TPromise>, { title, action, icon, variant, promise })
    toast.custom(markRaw(toastComponent), { duration })
  }

  const showToastError = <TPromise>(toastParams: ToastParamsWithoutVariant<TPromise>) => {
    renderToast({ variant: 'error', icon: 'warning', ...toastParams })
  }

  const showToastSuccess = <TPromise>(toastParams: ToastParamsWithoutVariant<TPromise>) => {
    renderToast({ variant: 'success', icon: 'checkmark', ...toastParams })
  }

  const showToastInfo = <TPromise>(toastParams: ToastParamsWithoutVariant<TPromise>) => {
    renderToast({ variant: 'info', icon: 'info', ...toastParams })
  }

  const showToastWarn = <TPromise>(toastParams: ToastParamsWithoutVariant<TPromise>) => {
    renderToast({ variant: 'warn', icon: 'warning', ...toastParams })
  }

  const showToast = <TPromise>(toastParams: ToastParams<TPromise>) => {
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
