<script setup lang="ts">
  import { reactive } from 'vue'
  import RoleApi from '@/api/admin/system/role'
  import crudOption from '@/option/admin/system/role'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import { Whether } from '@/enums'
  import { hasAnyAuthority, notHasAnyAuthority } from '@/utils'

  let data = reactive({
    option: crudOption,
    page: {
      currentPage: 1,
      pageSize: 10,
      sortField: 'sort',
      sortDirection: 'ASC',
      total: ''
    },
    search: {},
    form: {},
    data: [],
    loading: false,
    selectionData: [],
    checkedKeys: []
  })
  //获取api实例
  const roleApi = RoleApi.getInstance()
  //初始化option
  initCrudOption()

  function initCrudOption() {
    //获取菜单树
    getMenuTree()
    //设置权限树选中回调函数
    setChecked()
  }

  function beforeOpen(done, type) {
    if ((type === 'add' || type === 'edit') && data.selectionData.length === 1) {
      data.form = data.data.filter(item => data.selectionData[0].id === item.id)[0]
      if (type === 'add') {
        data.form.id = ''
      }
    }
    done()
  }

  function permission(key) {
    if ((key === 'addBtn' || key === 'copyBtn') && notHasAnyAuthority('admin:system:roles:save')) {
      return false
    }
    if (key === 'delBtn' && notHasAnyAuthority('admin:system:roles:delete')) {
      return false
    }
    if (key === 'editBtn' && notHasAnyAuthority('admin:system:roles:update')) {
      return false
    }
    if (
      (key === 'viewBtn' || key === 'refreshBtn') &&
      notHasAnyAuthority('admin:system:roles:getList')
    ) {
      return false
    }
    if (key === 'excelBtn' && notHasAnyAuthority('admin:system:roles:excel')) {
      return false
    }
    if (key === 'printBtn' && notHasAnyAuthority('admin:system:roles:print')) {
      return false
    }
    return true
  }

  async function getMenuTree() {
    try {
      let res = await roleApi.getMenuTree()
      data.option.column[5]['dicData'] = res.data.data
    } catch (e) {}
  }

  function setChecked() {
    data.option.column[5]['checked'] = function (a, b) {
      data.checkedKeys = [...b.halfCheckedKeys, ...b.checkedKeys]
    }
  }

  async function save(row, done, loading) {
    try {
      loading()
      data.form.menuIds = data.checkedKeys
      await roleApi.save(data.form)
      done()
      ElMessage({
        message: '操作成功',
        type: 'success',
        duration: 1000,
        onClose: () => {
          getList(null, null)
        }
      })
    } catch (e) {
      done()
      ElMessage.info('保存失败')
    }
  }

  async function deleteByIds(row, index) {
    try {
      await ElMessageBox.confirm('确认删除/批量删除吗？', '警告', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      })
      try {
        let ids = row ? [row.id] : data.selectionData.map(item => item.id)
        await roleApi.deleteByIds(ids)
        ElMessage({
          message: '删除/批量删除成功',
          type: 'success',
          duration: 1000,
          onClose: () => {
            getList(null, null)
          }
        })
      } catch (e) {
        ElMessage.error('删除/批量删除失败')
      }
    } catch (e) {
      ElMessage.info('用户取消')
    }
  }

  async function updateById(row, index, done, loading) {
    try {
      loading()
      data.form.menuIds = data.checkedKeys
      await roleApi.updateById(data.form.id, data.form)
      done()
      ElMessage({
        message: '修改成功',
        type: 'success',
        duration: 1000,
        onClose: () => {
          getList(null, null)
        }
      })
    } catch (e) {
      done()
      ElMessage.error('修改失败')
    }
  }

  async function getList(page, done) {
    try {
      data.loading = true
      let newPage = {
        currentPage: data.page.currentPage,
        pageSize: data.page.pageSize,
        sortField: data.page.sortField,
        sortDirection: data.page.sortDirection
      }
      let res = await roleApi.getListByPageAndParam(Object.assign(newPage, data.search))
      data.page.total = res.data.total
      data.data = res.data.data
      data.loading = false
      if (done) {
        done()
      }
    } catch (e) {
      data.loading = false
      if (done) {
        done()
      }
    }
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
    @row-save="save"
    @row-del="deleteByIds"
    @row-update="updateById"
    @on-load="getList"
    @search-change="getList"
    @search-reset="getList"
    @refresh-change="getList"
    @selection-change="selection => (data.selectionData = selection)"
  >
    <template #isEnable="scope">
      <el-tag v-if="scope.row.isEnable === Whether.Y" type="success" effect="plain">是</el-tag>
      <el-tag v-else-if="scope.row.isEnable === Whether.N" type="info" effect="plain">否</el-tag>
      <el-tag v-else type="danger" effect="dark" round>未知</el-tag>
    </template>
    <template #menu-left="{}">
      <el-button
        v-if="hasAnyAuthority('admin:system:roles:getList')"
        :disabled="data.selectionData.length !== 1"
        type="info"
        icon="el-icon-view"
        @click="$refs.crud.rowView()"
      >
        查看
      </el-button>
      <el-button
        v-if="hasAnyAuthority('admin:system:roles:save')"
        :disabled="data.selectionData.length !== 1"
        type="success"
        icon="el-icon-copy-document"
        @click="$refs.crud.rowAdd()"
      >
        复制
      </el-button>
      <el-button
        v-if="hasAnyAuthority('admin:system:roles:update')"
        :disabled="data.selectionData.length !== 1"
        type="warning"
        icon="el-icon-edit"
        @click="$refs.crud.rowEdit()"
      >
        修改
      </el-button>
      <el-button
        v-if="hasAnyAuthority('admin:system:roles:delete')"
        :disabled="!data.selectionData.length > 0"
        type="danger"
        icon="el-icon-delete"
        @click="$refs.crud.rowDel()"
      >
        批量删除
      </el-button>
    </template>
  </avue-crud>
</template>

<style scoped></style>
