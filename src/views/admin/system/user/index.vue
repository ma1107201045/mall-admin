<script setup lang='ts'>
  import { reactive } from 'vue'
  import UserApi from '@/api/admin/system/user'
  import crudOption from '@/option/admin/system/user'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import { Sex, Whether } from '@/enums'
  import { hasAnyAuthority, notHasAnyAuthority } from '@/utils'

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
  const userApi = UserApi.getInstance()
  //初始化option
  initCrudOption()

  function initCrudOption() {
    //获取角色列表
    getRoles()
  }

  function getRoles() {
    userApi
      .getRoleList()
      .then(res => {
        data.option.column[12]['dicData'] = res.data.data
      })
      .catch(() => {
      })
  }

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
    if ((key === 'addBtn' || key === 'copyBtn') && notHasAnyAuthority('admin:system:users:save')) {
      return false
    }
    if (key === 'delBtn' && notHasAnyAuthority('admin:system:users:delete')) {
      return false
    }
    if (key === 'editBtn' && notHasAnyAuthority('admin:system:users:update')) {
      return false
    }
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

  function save(row, done, loading) {
    loading()
    userApi
      .save(data.form)
      .then(() => {
        done()
        ElMessage({
          message: '操作成功',
          type: 'success',
          duration: 1000,
          onClose: () => {
            getList(null, null)
          }
        })
      })
      .catch(() => {
        ElMessage.info('保存失败')
      })
  }

  function deleteByIds(row, index) {
    ElMessageBox.confirm('确认删除/批量删除吗？', '警告', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        let ids = row ? [row.id] : data.selectionData.map(item => item.id)
        userApi.deleteByIds(ids).then(() => {
          ElMessage({
            message: '删除/批量删除成功',
            type: 'success',
            duration: 1000,
            onClose: () => {
              getList(null, null)
            }
          })
        })
      })
      .catch(() => {
      })
  }

  function updateById(row, index, done, loading) {
    loading()
    userApi
      .updateById(data.form.id, data.form)
      .then(() => {
        done()
        ElMessage({
          message: '修改成功',
          type: 'success',
          duration: 1000,
          onClose: () => {
            getList(null, null)
          }
        })
      })
      .catch(() => {
        ElMessage.info('修改失败')
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
    ref='crud'
    v-model:page='data.page'
    v-model:search='data.search'
    v-model='data.form'
    :data='data.data'
    :table-loading='data.loading'
    :option='data.option'
    :before-open='beforeOpen'
    :permission='permission'
    @row-save='save'
    @row-del='deleteByIds'
    @row-update='updateById'
    @on-load='getList'
    @search-change='getList'
    @search-reset='getList'
    @refresh-change='getList'
    @selection-change='selection => (data.selectionData = selection)'
  >
    <template #sex='scope'>
      <el-tag v-if='scope.row.sex === Sex.MALE' type='success' effect='dark' round>男</el-tag>
      <el-tag v-else-if='scope.row.sex === Sex.FEMALE' type='info' effect='dark' round>女</el-tag>
      <el-tag v-else type='danger' effect='dark' round>未知</el-tag>
    </template>
    <template #isEnable='scope'>
      <el-tag v-if='scope.row.isEnable === Whether.Y' type='success' effect='dark' round>是</el-tag>
      <el-tag v-else-if='scope.row.isEnable === Whether.N' type='info' effect='dark' round>否</el-tag>
      <el-tag v-else type='danger' effect='dark'>未知</el-tag>
    </template>
    <template #menu-left='{}'>
      <el-button
        v-if="hasAnyAuthority('admin:system:users:getList')"
        :disabled='data.selectionData.length !== 1'
        type='primary'
        icon='el-icon-view'
        @click='$refs.crud.rowView()'
      >
        查看
      </el-button>
      <el-button
        v-if="hasAnyAuthority('admin:system:users:save')"
        :disabled='data.selectionData.length !== 1'
        type='primary'
        icon='el-icon-copy-document'
        @click='$refs.crud.rowAdd()'
      >
        复制
      </el-button>
      <el-button
        v-if="hasAnyAuthority('admin:system:users:update')"
        :disabled='data.selectionData.length !== 1'
        type='warning'
        icon='el-icon-edit'
        @click='$refs.crud.rowEdit()'
      >
        修改
      </el-button>
      <el-button
        v-if="hasAnyAuthority('admin:system:users:delete')"
        :disabled='!data.selectionData.length > 0'
        type='danger'
        icon='el-icon-delete'
        @click='$refs.crud.rowDel()'
      >
        批量删除
      </el-button>
    </template>
    <template #menu='{ row, index, size }'>
      <el-button
        v-if="hasAnyAuthority('admin:system:users:update')"
        :disabled="row.userName === 'admin'"
        type='text'
        icon='el-icon-edit'
        @click='$refs.crud.rowEdit(row, index)'
      >
        修改
      </el-button>
      <el-button
        v-if="hasAnyAuthority('admin:system:users:delete')"
        :disabled="row.userName === 'admin'"
        type='text'
        icon='el-icon-delete'
        @click='$refs.crud.rowDel(row, index)'
      >
        删除
      </el-button>
    </template>
  </avue-crud>
</template>

<style scoped></style>
