<template>
  <div>
      <Test />
      <slot />
  </div>
</template>
<script setup lang="ts">
import Test from '../components/Test.vue'
</script>