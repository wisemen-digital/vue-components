<script setup lang="ts">
import AppButton from '@/components/app/button/AppButton.vue'
import AppModalContent from '@/components/app/modal/AppModalContent.vue'
import AppModalDescription from '@/components/app/modal/AppModalDescription.vue'
import AppModalFooter from '@/components/app/modal/AppModalFooter.vue'
import AppModalHeader from '@/components/app/modal/AppModalHeader.vue'
import AppModal from '@/components/app/modal/AppModal.vue'
import AppModalTitle from '@/components/app/modal/AppModalTitle.vue'

const { name } = defineProps<{ name: string }>()

const emits = defineEmits<{
  clickedName: [string]
  cancel: []
  confirm: []
}>()

const isOpen = defineModel('isOpen')
</script>

<template>
  <AppModal v-model:is-open="isOpen">
    <template #default="{ close }">
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
    </template>
  </AppModal>
</template>
