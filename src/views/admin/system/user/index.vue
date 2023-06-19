<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import UserApi from '@/api/admin/system/user'
  import crudOption from '@/option/admin/system/user'
  import { ElMessage, ElMessageBox } from 'element-plus'

  let form = reactive({})
  let page = reactive({
    currentPage: 1,
    pageSize: 10,
    sortField: 'id',
    sortDirection: 'DESC',
    total: ''
  })
  let params = reactive({})
  let option = reactive(crudOption)
  let data = ref([])
  let loading = ref(false)
  let selectionData = ref([])
  let userApi = UserApi.getInstance()

  function save() {}

  function simpleOrBatchDelete(data) {
    ElMessageBox.confirm('确认删除/批量删除吗？', '警告', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        let body = data ? [data.id] : selectionData.value.map(item => item.id)
        userApi.deleteByIds(body).then(() => {
          getList(null, null)
          ElMessage({
            type: 'success',
            message: '删除/批量删除成功'
          })
        })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '删除/批量删除取消'
        })
      })
  }

  function updateById() {}

  function getList(pageOrParams, done) {
    loading.value = true
    let newPage = {
      currentPage: page.currentPage,
      pageSize: page.pageSize,
      sortField: page.sortField,
      sortDirection: page.sortDirection
    }
    userApi.getListByPageAndParam(Object.assign(newPage, params)).then(res => {
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
    v-model="form"
    v-model:page="page"
    :option="option"
    :data="data"
    :table-loading="loading"
    @row-save="save"
    @row-del="simpleOrBatchDelete"
    @row-update="updateById"
    @on-load="getList"
    @search-change="getList"
    @search-reset="getList"
    @refresh-change="getList"
  />
</template>

<style scoped></style>
