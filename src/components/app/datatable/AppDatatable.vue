<script setup lang="ts" generic="TData, TValue">
import { FlexRender, getCoreRowModel, useVueTable } from '@tanstack/vue-table'
import type { ColumnDef, ColumnFiltersState, SortingState, VisibilityState } from '@tanstack/vue-table'

interface DataTableProps {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

const {
  columns,
  data,
} = defineProps<DataTableProps>()

const rowSelection = ref<Record<string, boolean>>({})
const visibilityState = ref<VisibilityState>({})
const columnFilters = ref<ColumnFiltersState>([])
const sorting = ref<SortingState>([])

const table = useVueTable({
  data,
  columns,
  state: {
    sorting: sorting.value,
    columnVisibility: visibilityState.value,
    rowSelection: rowSelection.value,
    columnFilters: columnFilters.value,
  },
  // state: {
  //   sorting,
  //   columnVisibility,
  //   rowSelection,
  //   columnFilters,
  // },
  // enableRowSelection: true,
  // onRowSelectionChange: setRowSelection,
  // onSortingChange: setSorting,
  // onColumnFiltersChange: setColumnFilters,
  // onColumnVisibilityChange: setColumnVisibility,
  getCoreRowModel: getCoreRowModel(),
  // getFilteredRowModel: getFilteredRowModel(),
  // getPaginationRowModel: getPaginationRowModel(),
  // getSortedRowModel: getSortedRowModel(),
  // getFacetedRowModel: getFacetedRowModel(),
  // getFacetedUniqueValues: getFacetedUniqueValues(),
})
</script>

<template>
  <div>
    <AppTable>
      <AppTableHeader>
        <AppTableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
          <AppTableHead v-for="header in headerGroup.headers" :key="header.id">
            <FlexRender :render="header.column.columnDef.header" />
          </AppTableHead>
        </AppTableRow>
      </AppTableHeader>
      <AppTableBody v-for="row in table.getRowModel().rows" :key="row.id">
        <AppTableRow v-for="cell in row.getVisibleCells()" :key="cell.id">
          <AppTableCell>
            <FlexRender
              :render="cell.column.columnDef.cell"
              :props="cell.getContext()"
            />
          </AppTableCell>
        </AppTableRow>
      </AppTableBody>
    </AppTable>
  </div>
</template>
