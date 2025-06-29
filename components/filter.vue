<template>
  <div>
    <UInput
      :model-value="
        props.table?.tableApi?.getColumn('email')?.getFilterValue() as string
      "
      class="max-w-sm"
      placeholder="Filter emails..."
      @update:model-value="
        props.table?.tableApi?.getColumn('email')?.setFilterValue($event)
      "
    />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  table: any;
}>();
</script>
