<script setup lang="ts" generic="TModel extends string | number | undefined">
import { generateUuid } from '@/helpers/uuid/generateUuid'
import { useFormInputGroup } from '@/modules/ui/composables/forms/group/useFormInputGroup'

interface Props {
  hasSuccess?: boolean
  isReadOnly?: boolean
  isDisabled?: boolean
  isTouched?: boolean
  isDirty?: boolean
  placeholder?: string
  unit?: string
  type?: TModel extends number ? 'number' : 'text' | 'password' | 'email' | 'tel' | 'url' | 'search'
  label?: string
  errors?: { _errors: string[] }
}

const {
  hasSuccess = false,
  isReadOnly = false,
  isDisabled = false,
  isTouched = false,
  isDirty = false,
  placeholder,
  unit,
  label,
  errors = { _errors: [] },
  type = 'text',
} = defineProps<Props>()
const emits = defineEmits<{
  change: [value: TModel]
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

const borderColor = computed(() => {
  if (errorShown.value)
    return 'border-danger-500'
  if (hasSuccess)
    return 'border-success-500'
  if (isReadOnly)
    return 'border-gray-300'
  return 'border-primary-500'
})

// Adds grouping logic if a wrapped in FormGroup component
if (type === 'number')
  useFormInputGroup({ model: model as Ref<number>, element, uuid, isDisabled: computed(() => isDisabled) })
</script>

<template>
  <!-- eslint-disable vue/no-extra-parens -->
  <div ref="element">
    <!-- Label -->
    <FormLabel :for="uuid">
      <slot name="label">
        {{ label }}
      </slot>
    </FormLabel>
    <div class="flex ">
      <!-- Content before the input -->
      <div v-if="slots['front-content']" class="flex rounded rounded-r-none border bg-gray-200 px-4" :class="borderColor">
        <slot name="front-content" />
      </div>

      <!-- Input -->
      <div
        class="flex h-full rounded border"
        :class="[
          borderColor,
          {
            'rounded-l-none border-l-0': slots['front-content'],
            'rounded-r-none border-r-0': slots['back-content'],
          },
        ]"
      >
        <input
          :id="uuid" v-model="model" :disabled="isDisabled" :type="(type as string)" min="0"
          class="relative w-full rounded px-4 py-2 placeholder:transition-all placeholder:duration-300 focus:placeholder:translate-x-1 focus:placeholder:opacity-0"
          :placeholder="placeholder" :readonly="isReadOnly" @blur="emits('blur')"
        >

        <div
          v-if="unit" :class="[borderColor, {
            'rounded-r-none border-r-0': slots['back-content'],
          }]" class="flex min-w-max items-center rounded rounded-l-none border-l bg-white px-3 text-primary-500"
        >
          {{ unit }}
        </div>
      </div>

      <!-- Content after the input -->
      <div v-if="slots['back-content']" class="flex rounded rounded-l-none border bg-gray-200 px-4" :class="borderColor">
        <slot name="back-content" />
      </div>
    </div>

    <!-- Error -->
    <TransitionExpand :duration="0.2">
      <p v-if="errorShown">
        <span class="text-sm text-danger-500">{{ errors._errors[0] }}</span>
      </p>
    </TransitionExpand>
  </div>
</template>
