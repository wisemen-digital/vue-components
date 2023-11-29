<script setup lang="ts">
import AppButton from '@/components/button/AppButton.vue'
import AppModalContent from '@/components/modal/AppModalContent.vue'
import AppModalFooter from '@/components/modal/AppModalFooter.vue'
import AppModalHeader from '@/components/modal/AppModalHeader.vue'
import AppModal from '@/components/modal/AppModal.vue'
import AppModalTitle from '@/components/modal/AppModalTitle.vue'
import AppModalDescription from '@/components/modal/AppModalDescription.vue'

const { name } = defineProps<{ name: string }>()

const emits = defineEmits<{
  clickedName: [string]
  cancel: []
  confirm: []
}>()

const isOpen = defineModel<boolean>('isOpen', { required: true })
</script>

<template>
  <AppModal v-slot="{ close }" v-model:is-open="isOpen">
    <AppModalHeader :close="close">
      <AppModalTitle>
        Modal Title
      </AppModalTitle>
      <AppModalDescription>
        Modal Description
      </AppModalDescription>
    </AppModalHeader>
    <AppModalContent>
      <div @click="emits('clickedName', name)">
        {{ name }}
      </div>
    </AppModalContent>
    <AppModalFooter>
      <div class="flex justify-end gap-2">
        <AppButton variant="ghost" @click="emits('cancel')">
          Cancel
        </AppButton>
        <AppButton @click="emits('confirm')">
          Confirm
        </AppButton>
      </div>
    </AppModalFooter>
  </AppModal>
</template>
