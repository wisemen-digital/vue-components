import { inject, provide } from 'vue'
import type { ComputedRef, InjectionKey, Ref } from 'vue'

export interface AppSelectContext<T> {
  getDisplayValue: (value: T) => string
  value: Ref<T>
  search: Ref<string>
  isFilterable: ComputedRef<boolean>
  isInvalid: ComputedRef<boolean>
  isDisabled: ComputedRef<boolean>
}

export const appSelectContext = Symbol('AppSelectContext') as InjectionKey<AppSelectContext<any>>

export function useAppSelectContext<T>(): AppSelectContext<T> {
  const context = inject(appSelectContext, null)
  if (!context)
    throw new Error('AppSelectContext not provided')

  return context
}

export function useProvideAppSelectContext<T>(context: AppSelectContext<T>): void {
  provide(appSelectContext, context)
}
