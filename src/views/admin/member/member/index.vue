<script setup lang="ts">
  import { reactive } from 'vue'
  import crudOption from '@/option/admin/member/member'
  import { notHasAnyAuthority } from '@/utils'
  import MemberApi from '@/api/admin/member/member'
  import { Sex, Whether } from '@/enums'

  let data = reactive({
    option: crudOption,
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
  const memberApi = MemberApi.getInstance()
  //初始化option
  initCrudOption()

  function initCrudOption() {}

  function beforeOpen(done, type) {
    if ((type === 'view' || type === 'add' || type === 'edit') && data.selectionData.length === 1) {
      data.form = data.data.filter(item => data.selectionData[0].id === item.id)[0]
      if (type === 'add') {
        data.form.id = ''
      }
    }
    done()
  }

  function permission(key) {
    if (
      (key === 'viewBtn' || key === 'refreshBtn') &&
      notHasAnyAuthority('admin:system:users:getList')
    ) {
      return false
    }
    if (key === 'excelBtn' && notHasAnyAuthority('admin:system:users:excel')) {
      return false
    }
    if (key === 'printBtn' && notHasAnyAuthority('admin:system:users:print')) {
      return false
    }
    return true
  }

  function getList(pageOrParams, done) {
    data.loading = true
    let newPage = {
      currentPage: data.page.currentPage,
      pageSize: data.page.pageSize,
      sortField: data.page.sortField,
      sortDirection: data.page.sortDirection
    }
    memberApi.getListByPageAndParam(Object.assign(newPage, data.search)).then(res => {
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
    :option="data.option"
    :before-open="beforeOpen"
    :permission="permission"
    @on-load="getList"
    @search-change="getList"
    @search-reset="getList"
    @refresh-change="getList"
    @selection-change="selection => (data.selectionData = selection)"
  >
    <template #sex="scope">
      <el-tag v-if="scope.row.sex === Sex.MALE" type="success" effect="dark" round>男</el-tag>
      <el-tag v-else-if="scope.row.sex === Sex.FEMALE" type="info" effect="dark" round>女</el-tag>
      <el-tag v-else type="danger" effect="dark" round>未知</el-tag>
    </template>
    <template #isEnable="scope">
      <el-tag v-if="scope.row.isEnable === Whether.Y" type="success" effect="dark" round>是</el-tag>
      <el-tag v-else-if="scope.row.isEnable === Whether.N" type="info" effect="dark" round>
        否
      </el-tag>
      <el-tag v-else type="danger" effect="dark">未知</el-tag>
    </template>
  </avue-crud>
</template>

<style scoped></style>
