<script setup lang="ts">
  import router from '@/router'
</script>

<template>
  <el-row>
    <el-text size="large">暂无权限</el-text>
  </el-row>
  <el-row>
    <el-button @click="router.go(-1)" type="primary">点击返回</el-button>
  </el-row>
</template>

<style scoped></style>
