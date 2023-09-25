<script setup lang="ts">
  import { reactive } from 'vue'
  //获取api实例
  import AttributeApi from '@/api/admin/product/attribute'
  import option from '@/option/admin/product/category/components/attribute.ts'

  let data = reactive({
    option: option,
    page: {
      currentPage: 1,
      pageSize: 10,
      sortField: 'id',
      sortDirection: 'DESC',
      total: ''
    },
    search: {},
    data: [],
    loading: false,
    selectionData: []
  })
  const attributeApi = AttributeApi.getInstance()

  function getList(page, done) {
    data.loading = true
    let newPage = {
      currentPage: data.page.currentPage,
      pageSize: data.page.pageSize,
      sortField: data.page.sortField,
      sortDirection: data.page.sortDirection
    }
    attributeApi
      .getListByPageAndParam(Object.assign(newPage, data.search))
      .then(res => {
        data.page.total = res.data.total
        data.data = res.data.data
        data.loading = false
        if (done) {
          done()
        }
      })
      .catch(() => {
        data.loading = false
        if (done) {
          done()
        }
      })
  }
</script>

<template>
  <avue-crud
    ref="crud"
    v-model:page="data.page"
    v-model:search="data.search"
    :data="data.data"
    :table-loading="data.loading"
    :option="data.option"
    @on-load="getList"
    @search-change="getList"
    @search-reset="getList"
    @refresh-change="getList"
    @selection-change="selection => (data.selectionData = selection)"
  ></avue-crud>
</template>

<style scoped></style>
