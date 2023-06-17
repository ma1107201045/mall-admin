<script setup lang="ts">
  import { LogApi } from '@/api/admin/system/log'
  import { reactive, ref } from 'vue'
  import Option from '@/option/admin/system/log'

  let option = reactive(Option())
  let form = reactive({})
  let page = reactive({
    currentPage: 1,
    pageSize: 10,
    sortField: 'id',
    sortDirection: 'DESC',
    total: ''
  })
  let params = reactive({})
  let data = ref([])
  let loading = ref(false)
  let logApi = LogApi.getInstance()

  function getListByPageAndParam(pageOrParams, done) {
    loading.value = true
    let newPage = {
      currentPage: page.currentPage,
      pageSize: page.pageSize,
      sortField: page.sortField,
      sortDirection: page.sortDirection
    }
    logApi.getListByPageAndParam(Object.assign(newPage, params)).then(res => {
      page.total = res.data.total
      data.value = res.data.data
      loading.value = false
      if (done) {
        done()
      }
    })
  }
</script>
<template>
  <avue-crud
    ref="crud"
    :option="option"
    v-model="form"
    v-model:page="page"
    v-model:search="params"
    :data="data"
    :table-loading="loading"
    @on-load="getListByPageAndParam"
    @refresh-change="getListByPageAndParam"
    @search-change="getListByPageAndParam"
    @search-reset="getListByPageAndParam"
  />
</template>

<style scoped></style>