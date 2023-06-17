<script setup lang="ts">
  import router from '@/router'
</script>

<template>
  <el-row>
    <el-button @click="router.go(-1)" type="primary">返回上一页</el-button>
  </el-row>
</template>

<style scoped></style>
