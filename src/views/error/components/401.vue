<script setup lang="ts">
  import { ElMessage } from 'element-plus'
  import router from '@/router'
  ElMessage.info('3秒后自定跳转登录页面')
  setTimeout(() => {
    router.push('/auth/admin')
  }, 3000)
</script>

<template>
  <div>
    <el-row>
      <el-text size="large">尚未登录</el-text>
    </el-row>
    <el-row>
      <el-button @click="router.push('/auth/admin')" type="primary">跳转登录界面</el-button>
    </el-row>
  </div>
</template>

<style scoped></style>
