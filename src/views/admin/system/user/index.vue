<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import UserApi from '@/api/admin/system/user'
  import Option from '@/option/admin/system/user'

  let form = reactive({

  })
  let page = reactive({})
  let option = reactive(Option())
  let data = reactive([
    {
      name: 'zs',
      value: '1',
      code: '1001',
      node: 'remark'
    },
    {
      name: 'ls',
      value: '1',
      code: '1',
      node: 'remark'
    }
  ])
  let loading = ref(false)
  let userApi: UserApi = UserApi.getInstance()
  let param = reactive({})
  let save = (row, done, loading) => {}
  let deleteByIds = row => {}
  let updateById = (row, index, done, loading) => {}
  let getListByPageAndQuery = (params, done) => {
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
    @on-load="getListByPageAndQuery"
    @search-change="getListByPageAndQuery"
    @search-reset="getListByPageAndQuery"
    @refresh-change="getListByPageAndQuery"
  />
</template>

<style scoped></style>