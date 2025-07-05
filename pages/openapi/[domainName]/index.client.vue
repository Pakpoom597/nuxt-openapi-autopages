<template>
  <div>
    <Filter :table="table" />
    <Table
      ref="table"
      :data="data"
      :columns="columns"
      :default-filters="defaultFilters"
    />
  </div>
</template>
<script setup lang="ts">
import type { TableColumn } from "@nuxt/ui";
const domainName = useRoute().params.domainName as string;
const { data: response } = await useOpenApis(domainName);
const fetchOpenapi = response.value?.data;
const url = fetchOpenapi?.servers?.at(0)?.url ?? "";
const path = `/${domainName}`;
const method = "get";
const { data: responseApi } = await useCallApis({
  method,
  url,
  path,
});
const data = computed(() => responseApi.value ?? []);
const responseSpec200: any =
  fetchOpenapi?.paths?.[path]?.[method]?.responses?.[200];
const responseSchema = responseSpec200?.content?.["application/json"]?.schema;
const responseSchemaItems = responseSchema?.items;
const responseSchemaItemsProperties = responseSchemaItems?.properties;
const columns: TableColumn<any>[] = Object.keys(
  responseSchemaItemsProperties,
).map((key) => ({
  accessorKey: key,
  header: key,
}));
const defaultFilters = ref([
  {
    id: "email",
    value: "",
  },
]);
const table = useTemplateRef("table");
</script>
