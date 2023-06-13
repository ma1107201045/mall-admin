<script setup lang="ts">
  import { ref, reactive, Ref, UnwrapRef } from 'vue'
  import BaseApi from '@/api/admin/base/base'

  let data: Ref<UnwrapRef<object>> = ref({})
  let baseApi: BaseApi = BaseApi.getInstance()
  let getMenu: any = (): any => {
    baseApi.getMenu().then(res => {
      console.log(res.data)
      data.value = res.data
    })
  }
  getMenu()
  let updateUser: any = (body): any => {
    baseApi.updateUser(body).then(res => {
      console.log(res.data)
    })
  }
</script>

<template>
  <h1>主页</h1>
  <div>{{ data }}</div>
</template>

<style scoped></style>
