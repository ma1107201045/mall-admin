<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import UserApi from '@/api/admin/system/user'
  import Option from '@/option/admin/system/user'

  let form = reactive({})
  let page = reactive({})
  let option = reactive(Option())
  let data = ref([])
  let loading = ref(false)

  let param = reactive({})
  let userApi: UserApi = UserApi.getInstance()
  let save = (row, done, loading) => {}
  let deleteByIds = row => {}
  let updateById = (row, index, done, loading) => {}
  let getListByPageAndParam = (params, done) => {
    userApi.getListByPageAndParam(params).then(res => {
      data.value = res.data.data
    })
    if (done) {
      done()
    }
  }
</script>
<template>
  <avue-crud
    ref="crud"
    v-model="form"
    v-model:page="page"
    :option="option"
    :data="data"
    :table-loading="loading"
    @row-save="save"
    @row-del="deleteByIds"
    @row-update="updateById"
    @on-load="getListByPageAndParam"
    @search-change="getListByPageAndParam"
    @search-reset="getListByPageAndParam"
    @refresh-change="getListByPageAndParam"
  />
</template>

<style scoped></style>