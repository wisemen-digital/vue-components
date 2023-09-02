<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AppModal from '@/components/app/modal/AppModal.vue'
import { useModalContainer } from '@/composables/app/modal/useModal'

const { modals } = useModalContainer()

const isMounted = ref(false)
onMounted(() => {
  isMounted.value = true
})
</script>

<template>
  <Teleport v-if="isMounted" to="body">
    <template
      v-for="modal in modals"
      :key="modal.id"
    >
      <AppModal
        v-model:is-open="modal.isOpen"
        :title="modal.title"
      >
        <Component :is="{ ...modal.component }" v-if="modal.component" v-bind="modal.attrs" />
      </AppModal>
    </template>
  </Teleport>
</template>
