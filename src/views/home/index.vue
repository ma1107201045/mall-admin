<script setup lang="ts">
  import BaseApi from '@/api/admin/base/base'
  import router from '@/router'

  let baseApi: BaseApi = BaseApi.getInstance()
  let getMenu: any = (): any => {
    baseApi.getMenu().then(axiosResponse => {
      console.log(axiosResponse.data)
    })
  }
  let updateUser: any = (): any => {
    baseApi.updateUser({}).then(axiosResponse => {
      console.log(axiosResponse.data)
    })
  }
</script>

<template>
  <h1 @click="getMenu">主页</h1>
</template>

<style scoped></style>
