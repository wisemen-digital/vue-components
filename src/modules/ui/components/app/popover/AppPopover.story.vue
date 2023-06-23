<script setup lang="ts">
const list = [
  {
    value: '1',
    label: 'Item 1',
  },
  {
    value: '2',
    label: 'Item 2',
  },
  {
    value: '3',
    label: 'Item 3',
  },
]
</script>

<template>
  <Story
    title="App/Popover/AppPopover"
  >
    <Variant title="Default">
      <AppPopover>
        <template #element>
          <AppButton>
            Dropdown
          </AppButton>
        </template>
        <template #panel="{ close }">
          <AppButton @component:click="close">
            Close panel
          </AppButton>
        </template>
      </AppPopover>
    </Variant>
  </Story>
</template>
