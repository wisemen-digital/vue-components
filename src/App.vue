<script setup lang="ts">
import ModalUserExample from './ModalUserExample.vue'

const modalUserRendered = ref(true)
</script>

<template>
  <div>
    <div>
      <AppModalContainer />
    </div>
    <ModalUserExample v-if="modalUserRendered" @close-stuff="modalUserRendered = false" />
  </div>
</template>
