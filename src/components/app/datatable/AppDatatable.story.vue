<script setup lang="ts">
import { columns } from '@/components/app/datatable/storyColums'
import type { RandomData } from '@/utils/example-data/tableData'
import { dataFactory } from '@/utils/example-data/tableData'

interface State {
}

const data = ref<RandomData[]>(dataFactory(100))
</script>

<template>
  <Story
    title="App/Datatable/AppDatatable"
  >
    <Variant title="Default" auto-props-disabled>
      <AppDatatable :data="data" :columns="columns" />
    </Variant>
  </Story>
</template>
