<script setup lang="ts">
  import router from '@/router'
</script>

<template>
  <div>
    <el-row>
      <el-text size="large">页面找不到了</el-text>
    </el-row>
    <el-row>
      <el-button @click="router.back()" type="primary">点击返回</el-button>
    </el-row>
  </div>
</template>

<style scoped></style>
