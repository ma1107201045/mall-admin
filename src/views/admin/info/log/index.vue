<script setup lang="ts">
  import { LogApi } from '@/api/admin/info/log'
  import { reactive } from 'vue'
  import crudOption from '@/option/admin/info/log'
  import { ElMessageBox, ElMessage } from 'element-plus'
  import { Whether } from '@/enums'
  import { hasAnyAuthority, notHasAnyAuthority } from '@/utils'

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
    selectionData: []
  })
  //获取api实例
  const logApi = LogApi.getInstance()
  //初始化option
  initCrudOption()

  function initCrudOption() {}

  function beforeOpen(done, type) {
    if (type === 'view' && data.selectionData.length === 1) {
      data.form = data.data.filter(item => data.selectionData[0].id === item.id)[0]
    }
    done()
  }

  function permission(key) {
    if (
      (key === 'viewBtn' || key === 'refreshBtn') &&
      notHasAnyAuthority('admin:sms:logs:getList')
    ) {
      return false
    }
    if (key === 'excelBtn' && notHasAnyAuthority('admin:sms:logs:excel')) {
      return false
    }
    if (key === 'printBtn' && notHasAnyAuthority('admin:sms:logs:print')) {
      return false
    }
    return true
  }

  function deleteByIds(row, index) {
    ElMessageBox.confirm('确认删除/批量删除吗？', '警告', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        let ids = row ? [row.id] : data.selectionData.map(item => item.id)
        logApi.deleteByIds(ids).then(() => {
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

  function getList(page, done) {
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
    v-model="data.form"
    :data="data.data"
    :table-loading="data.loading"
    :option="crudOption"
    :before-open="beforeOpen"
    :permission="permission"
    @row-del="deleteByIds"
    @on-load="getList"
    @refresh-change="getList"
    @search-change="getList"
    @search-reset="getList"
    @selection-change="selection => (data.selectionData = selection)"
  >
    <template #type="scope">
      <el-tag v-if="scope.row.type === 1" effect="plain">短信</el-tag>
      <el-tag v-else-if="scope.row.type === 2" effect="plain">验证码</el-tag>
      <el-tag v-else type="danger" effect="plain">未知</el-tag>
    </template>
    <template #isSuccess="scope">
      <el-tag v-if="scope.row.isSuccess === Whether.Y" type="success" effect="plain">成功</el-tag>
      <el-tag v-else-if="scope.row.isSuccess === Whether.N" type="danger" effect="plain">
        失败
      </el-tag>
      <el-tag v-else type="danger" effect="dark">未知</el-tag>
    </template>
    <template #menu-left="{}">
      <el-button
        v-if="hasAnyAuthority('admin:sms:logs:getList')"
        :disabled="data.selectionData.length !== 1"
        type="info"
        icon="el-icon-view"
        @click="$refs.crud.rowView()"
      >
        查看
      </el-button>
      <el-button
        :disabled="!data.selectionData.length > 0"
        type="danger"
        icon="el-icon-delete"
        @click="$refs.crud.rowDel(null, null)"
      >
        批量删除
      </el-button>
    </template>
  </avue-crud>
</template>

<style scoped></style>
