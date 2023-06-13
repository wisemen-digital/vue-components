<script setup lang="ts">
import componentInfo from '../../public/api/components.json'

const componentName = useRoute().params.componentName
const foundComponent = componentInfo.find(component => component.component === componentName)
</script>

<template>
  <div>
    {{ foundComponent?.files[0].content }}
  </div>
</template>
