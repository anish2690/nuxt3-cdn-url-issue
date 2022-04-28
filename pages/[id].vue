<template>
  <div>ID Page</div>
</template>
<script setup lang="ts">
import { TAG_NAME,list } from "~~/util/test.ts";
import { currency as currency1 } from "~~/util/currency_helper1.ts";
import { currency as currency2 } from "~~/util/currency_helper2.ts";
import { currency as currency3 } from "~~/util/currency_helper3.ts";
onMounted(async() => {
  console.log(TAG_NAME.COLUMN.toLowerCase());
  console.log(currency1, currency2, currency3,await list());
});
</script>
