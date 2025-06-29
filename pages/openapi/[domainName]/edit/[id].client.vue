<template>
  <div>test openapi {{ domainName }} edit {{ id }}</div>
</template>
<script setup lang="ts">
const domainName = useRoute().params.domainName as string;
const id = useRoute().params.id as string;
</script>
