<script lang="ts" setup>
import { debouncedRef, onKeyDown, useFocusWithin } from '@vueuse/core'
import { onMounted, ref, watch } from 'vue'
import type { PopoverProps } from '@/components/popover/AppPopover.vue'
import AppPopover from '@/components/popover/AppPopover.vue'

interface Props extends Omit<PopoverProps, 'isManual'> {
  hasManualElementBinding?: boolean
  hasManualPanelBinding?: boolean
  delay?: number
}

const {
  hasAdaptiveWidth,
  hasAutoPlacement,
  hasNoFlip,
  hasNoShift,
  hasNoOffset,
  placement,
  isDiv = true,
  delay = 300,
  hasManualElementBinding = false,
  hasManualPanelBinding = false,
} = defineProps<Props>()

const isPopoverShown = defineModel<boolean>({
  default: false,
})

const isPopoverShownDebounced = debouncedRef(isPopoverShown, delay)
const panelElement = ref<HTMLElement | null>(null)
const elementElement = ref<HTMLElement | null>(null)
const { focused: isFocusWithinPanel } = useFocusWithin(panelElement)

const isInPanel = ref<boolean>(false)
const isInElement = ref<boolean>(false)

watch(() => isFocusWithinPanel.value, (value) => {
  if (value)
    handleOpen()
  else
    handleClose()
})

function handleOpen(): void {
  if (!isInPanel.value && !isInElement.value && !isFocusWithinPanel.value)
    return
  isPopoverShown.value = true
}

function handleClose(): void {
  if (isInPanel.value || isInElement.value || isFocusWithinPanel.value)
    return
  isPopoverShown.value = false
}

function handleForceClose(): void {
  isPopoverShown.value = false
}

function onElementFocus(): void {
  isInElement.value = true
  handleOpen()
}

function onElementBlur(): void {
  isInElement.value = false
  handleClose()
}

function onElementMouseOver(): void {
  isInElement.value = true
  handleOpen()
}

function onElementMouseLeave(): void {
  isInElement.value = false
  handleClose()
}

onKeyDown('Escape', handleForceClose)

const elementEvents = {
  onFocus: onElementFocus,
  onBlur: onElementBlur,
  onmouseover: onElementMouseOver,
  onmouseleave: onElementMouseLeave,
}

const panelEvents = {
  onmouseover: onPanelMouseOver,
  onmouseleave: onPanelMouseLeave,
}

function onPanelMouseOver(): void {
  isInPanel.value = true
  handleOpen()
}

function onPanelMouseLeave(): void {
  isInPanel.value = false
  handleClose()
}

function addPanelEvents(): void {
  if (hasManualPanelBinding)
    return
  panelElement.value?.addEventListener('mouseover', onPanelMouseOver)
  panelElement.value?.addEventListener('mouseleave', onPanelMouseLeave)
}

watch(() => panelElement.value, () => {
  if (!panelElement.value)
    return
  panelElement.value.addEventListener('mouseover', onPanelMouseOver)
  panelElement.value.addEventListener('mouseleave', onPanelMouseLeave)
})

function addElementEvents(): void {
  if (hasManualElementBinding)
    return
  elementElement.value?.children[0]?.addEventListener('focus', onElementFocus)
  elementElement.value?.children[0]?.addEventListener('blur', onElementBlur)
  elementElement.value?.children[0]?.addEventListener('mouseover', onElementMouseOver)
  elementElement.value?.children[0]?.addEventListener('mouseleave', onElementMouseLeave)
}

onMounted(() => {
  addPanelEvents()
  addElementEvents()
})
</script>

<template>
  <AppPopover
    v-model="isPopoverShownDebounced"
    is-manual
    class="max-w-max"
    v-bind="{
      hasAdaptiveWidth,
      hasAutoPlacement,
      hasNoFlip,
      hasNoShift,
      hasNoOffset,
      placement,
      isDiv,
    }"
  >
    <template #element>
      <div ref="elementElement">
        <slot
          name="element"
          :events="elementEvents"
          :close="handleClose"
          :force-close="handleForceClose"
        />
      </div>
    </template>
    <template #panel>
      <div ref="panelElement">
        <slot
          name="panel"
          :close="handleClose"
          :force-close="handleForceClose"
          :events="panelEvents"
        />
      </div>
    </template>
  </AppPopover>
</template>
