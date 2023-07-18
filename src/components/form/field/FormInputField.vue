<script setup lang="ts" generic="TModel extends string | number | undefined">
import { twMerge } from 'tailwind-merge'
import { useClipboard } from '@vueuse/core'
import type { InputFieldProps } from '@/components/form/field/formInputFieldVariants'
import { inputFieldExtraContentVariants, inputFieldVariants } from '@/components/form/field/formInputFieldVariants'
import { generateUuid } from '@/utils/uuid/generateUuid'
import { useFormInputGroup } from '@/composables/form/group/useFormInputGroup'
import type { Icon } from '@/icons'

interface Props {
  isSuccess?: boolean
  isReadOnly?: boolean
  isDisabled?: boolean
  isTouched?: boolean
  isDirty?: boolean
  isCopyable?: boolean
  isOptional?: boolean
  hasExtraContentBorder?: boolean
  placeholder?: string
  type?: TModel extends number ? 'number' : 'text' | 'password' | 'email' | 'tel' | 'url' | 'search'
  label?: string
  errors?: { _errors: string[] }
  backContent?: string
  frontContent?: string
  backIcon?: Icon
  frontIcon?: Icon
}

const {
  isSuccess = false,
  isReadOnly = false,
  isDisabled = false,
  isTouched = false,
  isDirty = false,
  isCopyable = false,
  placeholder,
  backContent,
  frontContent,
  backIcon,
  frontIcon,
  label,
  errors = { _errors: [] },
  type = 'text',
} = defineProps<Props>()

const emits = defineEmits<{
  blur: []
}>()

const model = defineModel<TModel>()
const uuid = generateUuid()
const element = ref<HTMLElement>()

const slots = defineSlots<{
  label?: (props: {}) => any
  'front-content'?: (props: {}) => any
  'back-content'?: (props: {}) => any
}>()

const errorShown = computed(() => errors._errors.length > 0 && (isTouched || isDirty))

// Extra content logic
const hasFrontContent = computed(() => frontContent || slots['front-content'] || frontIcon)
const hasBackContent = computed(() => backContent || slots['back-content'] || backIcon || isCopyable || type === 'password')
const currentExtraContent = computed<InputFieldProps['extraContent']>(() => {
  if (hasFrontContent.value && hasBackContent.value)
    return 'both'
  if (hasFrontContent.value)
    return 'front'
  if (hasBackContent.value)
    return 'back'
  return 'default'
})

// Input status logic
const currentStatus = computed<InputFieldProps['status']>(() => {
  if (errorShown.value)
    return 'error'
  if (isSuccess)
    return 'success'
  if (isReadOnly)
    return 'readonly'
  if (isDisabled)
    return 'disabled'
  return 'default'
})

// Copy logic
const copyModel = computed(() => model.value?.toString() ?? '')
const { copy } = useClipboard()

// Adds grouping logic if a wrapped in FormGroup component
if (type === 'number')
  useFormInputGroup({ model: model as Ref<number>, element, uuid, isDisabled: computed(() => isDisabled) })

// Password logic
const passwordShown = ref(false)
const togglePasswordShown = (): void => {
  passwordShown.value = !passwordShown.value
}
const inputType = computed<string>(() => (type === 'password' && passwordShown.value) ? 'text' : type)
</script>

<template>
  <div ref="element">
    <!-- Label -->
    <div class="flex items-center justify-between gap-4">
      <FormLabel :for="uuid">
        <slot name="label">
          {{ label }}
        </slot>
      </FormLabel>
      <p v-if="isOptional" class="text-caption text-muted-foreground">
        Optional
      </p>
    </div>

    <div class="flex">
      <!-- Content before the input -->
      <div
        v-if="hasFrontContent" :class="
          twMerge(inputFieldExtraContentVariants(
            {
              extraContentType: 'front',
              status: currentStatus,
              extraContentBorder: hasExtraContentBorder,
            },
          ))"
      >
        <slot name="front-content">
          <AppIcon v-if="frontIcon" :icon="frontIcon" />
          <div v-else-if="frontContent">
            {{ frontContent }}
          </div>
        </slot>
      </div>

      <!-- Input -->
      <input
        :id="uuid" v-model="model" :disabled="isDisabled" :type="inputType" min="0"
        :class="twMerge(inputFieldVariants({ status: currentStatus, extraContent: currentExtraContent }))"
        :placeholder="placeholder" :readonly="isReadOnly" @blur="emits('blur')"
      >

      <!-- Content after the input -->
      <div
        v-if="hasBackContent" :class="
          twMerge(inputFieldExtraContentVariants(
            {
              extraContentType: 'back',
              status: currentStatus,
              extraContentBorder: hasExtraContentBorder,
            },
          ))"
      >
        <slot name="back-content">
          <button v-if="type === 'password'" @click="togglePasswordShown">
            <AppIcon v-if="passwordShown" icon="eyeClosed" />
            <AppIcon v-else icon="eyeOpen" />
          </button>
          <button v-else-if="isCopyable" @click="copy(copyModel)">
            Copy
          </button>
          <AppIcon v-else-if="backIcon" :icon="backIcon" />
          <div v-else-if="backContent">
            {{ backContent }}
          </div>
        </slot>
      </div>
    </div>
    <!-- Error -->
    <TransitionExpand :duration="0.2">
      <FormError v-if="errorShown" :error-message="errors._errors[0]" />
    </TransitionExpand>
  </div>
</template>
@/utils/uuid/generateUuid
