<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AppModal from '@/components/app/modal/AppModal.vue'
import { useModalContainer } from '@/components/app/modal/useModal'

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
        v-if="(modal.modalComponent as any)?.__name === 'AppModal' "
        v-model:is-open="modal.isOpen"
        :title="modal.title"
      >
        {{ modal.modalComponent?.name }}

        <Component :is="{ ...modal.component }" v-if="modal.component" v-bind="modal.attrs" />
      </AppModal>
      <Component
        :is="{ ...modal.modalComponent }"
        v-else
        v-model:is-open="modal.isOpen"
        :title="modal.title"
      >
        <Component :is="{ ...modal.component }" v-if="modal.component" v-bind="modal.attrs" />
      </Component>
    </template>
  </Teleport>
</template>
