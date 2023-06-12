<script setup lang="ts">
  import UserApi from '@/api/system/user'
  let userApi: UserApi = UserApi.getInstance()
</script>

<template>
  <el-button type="success">按钮</el-button>
</template>

<style scoped></style>
