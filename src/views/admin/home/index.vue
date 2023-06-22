<script setup lang="ts">
  import option from '@/option/admin/home'
</script>

<template>
  <avue-data-progress :option="option"></avue-data-progress>
  <avue-data-tabs :option="option"></avue-data-tabs>
  <avue-data-box :option="option"></avue-data-box>
  <avue-data-rotate :option="option"></avue-data-rotate>
</template>

<style scoped></style>
