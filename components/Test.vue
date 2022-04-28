<template>
  <div>
      Import Test component
  </div>
</template>
<script setup lang="ts">
import { TAG_NAME } from "../util/test.ts";
onMounted(() => {
  console.log(TAG_NAME.COLUMN.toLowerCase());
});
</script>
