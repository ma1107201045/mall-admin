<script setup lang="ts">
  import { LogApi } from '@/api/admin/system/log'
  import { reactive, ref } from 'vue'
  import crudOption from '@/option/admin/system/log'
  import { ElMessageBox, ElMessage } from 'element-plus'

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
  let logApi = LogApi.getInstance()

  function simpleOrBatchDelete(data) {
    ElMessageBox.confirm('确认删除/批量删除吗？', '警告', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        let body = data ? [data.id] : selectionData.value.map(item => item.id)
        logApi.deleteByIds(body).then(() => {
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

  function getList(pageOrParams, done) {
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
    v-model="form"
    v-model:page="page"
    v-model:search="params"
    :option="option"
    :data="data"
    :table-loading="loading"
    @row-del="simpleOrBatchDelete"
    @on-load="getList"
    @refresh-change="getList"
    @search-change="getList"
    @search-reset="getList"
    @selection-change="selection => (selectionData = selection)"
  >
    <template #menu-left="{}">
      <el-button
        :disabled="!selectionData.length > 0"
        type="danger"
        icon="el-icon-delete"
        @click="simpleOrBatchDelete(null)"
      >
        批量删除
      </el-button>
    </template>
  </avue-crud>
</template>

<style scoped></style>
