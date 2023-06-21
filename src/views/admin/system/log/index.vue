<script setup lang="ts">
  import { LogApi } from '@/api/admin/system/log'
  import { reactive } from 'vue'
  import crudOption from '@/option/admin/system/log'
  import { ElMessageBox, ElMessage } from 'element-plus'

  let data = reactive({
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
  const logApi = LogApi.getInstance()

  function simpleOrBatchDelete(data) {
    ElMessageBox.confirm('确认删除/批量删除吗？', '警告', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        let body = data ? [data.id] : data.selectionData.map(item => item.id)
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
    data.loading = true
    let newPage = {
      currentPage: data.page.currentPage,
      pageSize: data.page.pageSize,
      sortField: data.page.sortField,
      sortDirection: data.page.sortDirection
    }
    logApi.getListByPageAndParam(Object.assign(newPage, data.search)).then(res => {
      data.page.total = res.data.total
      data.data = res.data.data
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
    :option="crudOption"
    @row-del="simpleOrBatchDelete"
    @on-load="getList"
    @refresh-change="getList"
    @search-change="getList"
    @search-reset="getList"
    @selection-change="selection => (data.selectionData = selection)"
  >
    <template #menu-left="{}">
      <el-button
        :disabled="!data.selectionData.length > 0"
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
