<script setup lang="ts">
  import AdminApi from '@/api/auth/admin'
  import router from '@/router'

  let adminApi: AdminApi = AdminApi.getInstance()
  let logout: any = (): any => {
    adminApi.logout().then(res => {
      console.log(res)
      router.push('/auth/admin')
    })
  }
</script>

<template>
  <el-button type="primary" @click="logout">退出登录</el-button>
</template>

<style scoped></style>