import type { ZodFormattedError } from 'zod'
import type { InputHTMLAttributes } from 'vue'
import type { Icon } from '@/icons'
import type { ModelDate } from '@/types/datePicker.type'

export type InputType =
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'number'
  | 'password'
  | 'text'
  | 'time'
export type InputValue<T> = (T extends 'number' ? number : string) | null | ModelDate<any>
export interface InputFormProps<T extends InputType> extends Omit<InputProps<T>, 'isInvalid'> {
  /**
   * The error messages associated with the component, if any.
   * It should be an object with an "_errors" property containing an array of strings.
   */
  errors?: ZodFormattedError<string> | undefined | null

  /**
   * The label to be displayed above the component.
   */
  label?: string | null

  /**
   * Extra information to be displayed below the input.
   */
  description?: string | null

  /**
   * Determines if the component has emitted a `blur` event.
   */
  isTouched: boolean

  /**
   * Determines if the input is required.
   */
  isRequired?: boolean
}

export interface InputProps<T extends InputType>
  extends /* @vue-ignore */ Omit<InputHTMLAttributes, 'disabled'> {
  /**
   * The type of input for the component. Can be one of:
   * 'date', 'email', 'number', 'password', 'text', 'time', 'datetime-local'
   * Defaults to 'text'.
   */
  type?: T

  /**
   * Whether the input is disabled or not.
   * If true, the input is disabled and cannot be focused.
   */
  isDisabled?: boolean

  /**
   * Whether the input border should be red.
   */
  isInvalid?: boolean

  /**
   *  Whether the input is uneditable.
   */
  isReadonly?: boolean

  /**
   * The icon to display on the left side of the input.
   */
  iconLeft?: Icon | null

  /**
   * The icon to display on the right side of the input.
   */
  iconRight?: Icon | null

  /**
   *  Whether the input is compact or not.
   */
  isCompact?: boolean

  /**
   * Whether the input is focussed from the outside (e.g. a dropdown that is open).
   */
  isOutsideFocused?: boolean
}
