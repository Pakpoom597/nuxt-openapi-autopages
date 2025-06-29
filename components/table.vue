<template>
  <div class="w-full space-y-4 pb-4">
    <UTable
      ref="table"
      v-model:column-filters="columnFilters"
      v-model:pagination="pagination"
      :data="props.data"
      :columns="props.columns"
      :pagination-options="{
        getPaginationRowModel: getPaginationRowModel(),
      }"
      class="flex-1"
      @select="onSelect"
    />

    <div class="flex justify-center border-t border-default pt-4">
      <UPagination
        :default-page="
          (table?.tableApi?.getState().pagination.pageIndex || 0) + 1
        "
        :items-per-page="table?.tableApi?.getState().pagination.pageSize"
        :total="table?.tableApi?.getFilteredRowModel().rows.length"
        @update:page="(p: number) => table?.tableApi?.setPageIndex(p - 1)"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { getPaginationRowModel } from "@tanstack/vue-table";
import type { TableColumn, TableData, TableRow } from "@nuxt/ui";

const props = defineProps<{
  data: any[];
  columns: TableColumn<any>[];
  defaultFilters?: any[];
}>();

const columnFilters = ref(props.defaultFilters ?? []);

const table = useTemplateRef<{
  tableRef: Ref<HTMLTableElement | undefined, HTMLTableElement | undefined>;
  tableApi: import("@tanstack/table-core").Table<TableData>;
}>("table");

const pagination = ref({
  pageIndex: 0,
  pageSize: 5,
});

const route = useRoute();
const onSelect = (row: TableRow<any>, _e?: Event) => {
  navigateTo(`${route.fullPath.replace(/\/$/, "")}/edit/${row.id}`);
};

defineExpose(table);
</script>
