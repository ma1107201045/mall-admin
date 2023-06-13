<script setup lang="ts">
  import router from '@/router'
</script>

<template>
  <div>
    <el-row>
      <el-text size="large">服务器错误</el-text>
    </el-row>
    <el-row>
      <el-button @click="router.go(-1)" type="primary">返回上一页</el-button>
    </el-row>
  </div>
</template>

<style scoped></style>
