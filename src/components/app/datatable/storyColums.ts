import { type ColumnDef, createColumnHelper } from '@tanstack/vue-table'
import AppTableSpecialRender from './AppTableSpecialRender.vue'
import type { RandomData } from '@/utils/example-data/tableData'

const columnHelper = createColumnHelper<RandomData>()

export const columns: ColumnDef<RandomData, string>[] = [
  columnHelper.accessor('email', {
    header: 'Status',
    footer: props => props.column.id,
    cell: props => h(AppTableSpecialRender, { value: props.getValue() }),
  }),
]
