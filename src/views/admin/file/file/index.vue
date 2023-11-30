<script setup lang="ts">
  import { ref } from 'vue'

  let src = ref('http://36.137.103.166:9001')
</script>

<template>
  <iframe :src="src"></iframe>
</template>

<style scoped></style>
