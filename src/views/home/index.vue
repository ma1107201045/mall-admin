<script setup lang="ts">
  import { ref, Ref, UnwrapRef } from 'vue'
  import HomeApi from '@/api/home'
  import mallMenu from '@/views/menu-bar.vue'

  let data: Ref<UnwrapRef<object>> = ref({})
  let homeApi: HomeApi = HomeApi.getInstance()
  let getMenu: any = (): any => {
    homeApi.getMenu().then(res => {
      console.log(res.data)
      data.value = res.data
    })
  }
  getMenu()
  let updateUser: any = (body): any => {
    homeApi.updateUser(body).then(res => {
      console.log(res.data)
    })
  }
</script>

<template>
  <mall-menu />
  <div>{{ data }}</div>
</template>

<style scoped></style>
