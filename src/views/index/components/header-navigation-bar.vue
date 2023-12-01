<script setup lang="ts">
  import AdminApi from '@/api/auth/admin'
  import router from '@/router'
  import { ElMessage } from 'element-plus'

  let adminApi: AdminApi = AdminApi.getInstance()

  async function logout(): Promise<any> {
    try {
      await adminApi.logout()
      await router.push('/auth/admin')
    } catch (e) {
      ElMessage.error('退出登录失败')
    }
  }
</script>

<template>
  <el-button type="primary" @click="logout" style="position: absolute; left: 1400px">
    退出登录
  </el-button>
</template>

<style scoped></style>
