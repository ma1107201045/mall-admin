<script setup lang="ts">
  import { reactive } from 'vue'
  import UserApi from '@/api/admin/system/user'
  import crudOption from '@/option/admin/system/user'
  import { ElMessage, ElMessageBox } from 'element-plus'

  let data = reactive({
    page: {
      currentPage: 1,
      pageSize: 10,
      sortField: 'id',
      sortDirection: 'DESC',
      total: ''
    },
    search: {},
    form: {},
    data: [],
    loading: false,
    selectionData: [],
    roles: []
  })
  const userApi = UserApi.getInstance()
  //获取角色列表
  userApi
    .getRoleList()
    .then(res => {
      crudOption.column[10].dicData = res.data.data
    })
    .catch(() => {})

  function beforeOpen(done, type) {
    if (type === 'edit' && data.form === undefined) {
      userApi.getById(data.selectionData[0].id).then(res => {
        data.form = res.data.data
      })
    }
    done()
  }

  function save() {}

  function simpleOrBatchDelete(data) {
    ElMessageBox.confirm('确认删除/批量删除吗？', '警告', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        let body = data ? [data.id] : data.selectionData.value.map(item => item.id)
        userApi.deleteByIds(body).then(() => {
          getList(null, null)
          ElMessage({
            type: 'success',
            message: '删除/批量删除成功'
          })
        })
      })
      .catch(() => {})
  }

  function updateById(id: number) {}

  function getList(pageOrParams, done) {
    data.loading = true
    let newPage = {
      currentPage: data.page.currentPage,
      pageSize: data.page.pageSize,
      sortField: data.page.sortField,
      sortDirection: data.page.sortDirection
    }
    userApi.getListByPageAndParam(Object.assign(newPage, data.search)).then(res => {
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
    v-model="data.form"
    :data="data.data"
    :table-loading="data.loading"
    :option="crudOption"
    :before-open="beforeOpen"
    @row-save="save"
    @row-del="simpleOrBatchDelete"
    @row-update="updateById"
    @on-load="getList"
    @search-change="getList"
    @search-reset="getList"
    @refresh-change="getList"
    @selection-change="selection => (data.selectionData = selection)"
  >
    <template #menu-left="{ row, index, size }">
      <el-button
        :disabled="data.selectionData.length !== 1"
        type="warning"
        icon="el-icon-edit"
        @click="$refs.crud.rowEdit(row, index)"
      >
        编辑
      </el-button>
      <el-button
        :disabled="!data.selectionData.length > 0"
        type="danger"
        icon="el-icon-delete"
        @click="$refs.crud.rowDel(null)"
      >
        批量删除
      </el-button>
    </template>
  </avue-crud>
</template>

<style scoped></style>
