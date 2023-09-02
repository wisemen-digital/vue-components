<script setup lang="ts" generic="TModel extends string | number | undefined">
import { useClipboard } from '@vueuse/core'
import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import FormError from '@/components/form/error/FormError.vue'
import type { InputFieldProps } from '@/components/form/field/formInputField.style'
import { inputFieldExtraContentVariants, inputFieldVariants } from '@/components/form/field/formInputField.style'
import { generateUuid } from '@/utils/uuid/generateUuid'
import { useFormInputGroup } from '@/composables/form/group/useFormInputGroup'
import type { Icon } from '@/icons'
import AppIcon from '@/components/app/icon/AppIcon.vue'
import TransitionExpand from '@/components/app/transitions/TransitionExpand.vue'

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

const slots = defineSlots<{
  label?: () => any
  frontContent?: () => any
  backContent?: () => any
}>()
const model = defineModel<TModel>()
const uuid = generateUuid()
const element = ref<HTMLElement>()

const errorShown = computed(() => errors._errors.length > 0 && (isTouched || isDirty))

// Extra content logic
const hasFrontContent = computed(() => frontContent || slots.frontContent || frontIcon)
const hasBackContent = computed(() => backContent || slots.backContent || backIcon || isCopyable || type === 'password')
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
function togglePasswordShown(): void {
  passwordShown.value = !passwordShown.value
}
const inputType = computed<string>(() => (type === 'password' && passwordShown.value) ? 'text' : type)
</script>

<template>
  <div ref="element">
    <!-- Label -->
    <div class="flex items-center justify-between gap-4">
      <label :for="uuid">
        <slot name="label">
          {{ label }}
        </slot>
      </label>
      <p v-if="isOptional" class="text-caption text-muted-foreground">
        Optional
      </p>
    </div>

    <div class="flex">
      <!-- Content before the input -->
      <div
        v-if="hasFrontContent" :class="
          inputFieldExtraContentVariants(
            {
              extraContentType: 'front',
              status: currentStatus,
              extraContentBorder: hasExtraContentBorder,
            },
          )"
      >
        <slot name="frontContent">
          <AppIcon v-if="frontIcon" :icon="frontIcon" />
          <div v-else-if="frontContent">
            {{ frontContent }}
          </div>
        </slot>
      </div>

      <!-- Input -->
      <input
        :id="uuid" v-model="model" :disabled="isDisabled" :type="inputType" min="0"
        :class="inputFieldVariants({ status: currentStatus, extraContent: currentExtraContent })"
        :placeholder="placeholder" :readonly="isReadOnly" @blur="emits('blur')"
      >

      <!-- Content after the input -->
      <div
        v-if="hasBackContent" :class="
          inputFieldExtraContentVariants(
            {
              extraContentType: 'back',
              status: currentStatus,
              extraContentBorder: hasExtraContentBorder,
            },
          )"
      >
        <slot name="backContent">
          <button v-if="type === 'password'" @click="togglePasswordShown">
            <AppIcon v-if="passwordShown" icon="eyeSlash" />
            <AppIcon v-else icon="eye" />
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
