<script setup lang="ts">
  import { ref } from 'vue'
  let dialogVisible = ref(false)
  function initData() {
    dialogVisible.value = true
  }

  function closeDialog() {
    dialogVisible.value = false
  }

  initData()
</script>

<template>
  <el-dialog v-model="dialogVisible" :before-close="closeDialog">
    <span>This is a message</span>
  </el-dialog>
</template>

<style scoped></style>
