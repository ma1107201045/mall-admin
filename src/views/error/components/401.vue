<script setup lang="ts">
  import router from '@/router'
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
