<script setup lang="ts">
  import { reactive, watch } from 'vue'
  import MenuApi from '@/api/admin/system/menu'
  import crudOption from '@/option/admin/system/menu'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import { MenuType, Whether } from '@/enums'
  import { hasAnyAuthority, notHasAnyAuthority } from '@/utils'
  import { BaseConstant } from '@/constant'

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
    defaults: {},
    form: {},
    data: [],
    loading: false,
    selectionData: []
  })
  //获取api实例
  const menuApi = MenuApi.getInstance()
  //初始化option
  initCrudOption()
  //监听数据
  watch(
    () => [data.data, data.form.type],
    newValArr => {
      data.option.column[2]['dicData'] = newValArr[0]
      let type = newValArr[1]
      if (type === MenuType.DIRECTORY) {
        data.defaults['routeName'].display = false
        data.defaults['routePath'].display = false
        data.defaults['componentPath'].display = false
        data.defaults['permission'].display = false
      }
      if (type === MenuType.MENU) {
        data.defaults['routeName'].display = true
        data.defaults['routePath'].display = true
        data.defaults['componentPath'].display = true
        data.defaults['permission'].display = false
      }
      if (type === MenuType.BUTTON) {
        data.defaults['routeName'].display = false
        data.defaults['routePath'].display = false
        data.defaults['componentPath'].display = false
        data.defaults['permission'].display = true
      }
    }
  )

  function initCrudOption() {
    data.option.column[2]['change'] = chooseItem
  }

  function chooseItem(column) {
    if (column.item) {
      let type = column.item.type
      if (type === MenuType.MENU) {
        data.defaults.type['dicData'][0].disabled = true
        data.defaults.type['dicData'][1].disabled = true
        data.defaults.type['dicData'][2].disabled = false
        return
      }
      if (type === MenuType.BUTTON) {
        data.defaults.type['dicData'][0].disabled = true
        data.defaults.type['dicData'][1].disabled = true
        data.defaults.type['dicData'][2].disabled = true
        return
      }
    }
    data.defaults.type['dicData'][0].disabled = false
    data.defaults.type['dicData'][1].disabled = false
    data.defaults.type['dicData'][2].disabled = false
  }

  function beforeOpen(done, type) {
    data.form.parentId = data.form.parentId === BaseConstant.MENU_ROOT_ID ? '' : data.form.parentId
    if ((type === 'add' || type === 'edit') && data.selectionData.length === 1) {
      data.form = data.data.filter(item => data.selectionData[0].id === item.id)[0]
      if (type === 'add') {
        data.form.id = ''
      }
    }
    done()
  }

  function permission(key) {
    if ((key === 'addBtn' || key === 'copyBtn') && notHasAnyAuthority('admin:system:menus:save')) {
      return false
    }
    if (key === 'delBtn' && notHasAnyAuthority('admin:system:menus:delete')) {
      return false
    }
    if (key === 'editBtn' && notHasAnyAuthority('admin:system:menus:update')) {
      return false
    }
    if (
      (key === 'viewBtn' || key === 'refreshBtn') &&
      notHasAnyAuthority('admin:system:menus:getTree')
    ) {
      return false
    }
    if (key === 'excelBtn' && notHasAnyAuthority('admin:system:menus:excel')) {
      return false
    }
    if (key === 'printBtn' && notHasAnyAuthority('admin:system:menus:print')) {
      return false
    }
    return true
  }

  function save(row, done, loading) {
    loading()
    handleData()
    menuApi
      .save(data.form)
      .then(() => {
        done()
        ElMessage({
          message: '操作成功',
          type: 'success',
          duration: 1000,
          onClose: () => {
            getTree(null, null)
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
        menuApi.deleteByIds(ids).then(() => {
          ElMessage({
            message: '删除/批量删除成功',
            type: 'success',
            duration: 1000,
            onClose: () => {
              getTree(null, null)
            }
          })
        })
      })
      .catch(() => {})
  }

  function updateById(row, index, done, loading) {
    console.log(data.form)
    loading()
    handleData()
    menuApi
      .updateById(data.form.id, data.form)
      .then(() => {
        done()
        ElMessage({
          message: '修改成功',
          type: 'success',
          duration: 1000,
          onClose: () => {
            getTree(null, null)
          }
        })
      })
      .catch(() => {
        ElMessage.info('修改失败')
      })
  }

  function getTree(pageOrParams, done) {
    data.loading = true
    menuApi.getTree().then(res => {
      data.data = res.data.data
      data.loading = false
      if (done) {
        done()
      }
    })
  }

  function handleData() {
    if (data.form.type === MenuType.DIRECTORY) {
      data.form.routeName = ''
      data.form.routePath = ''
      data.form.componentPath = ''
      data.form.permission = ''
    }
    if (data.form.type === MenuType.MENU) {
      data.form.permission = ''
    }
    if (data.form.type === MenuType.BUTTON) {
      data.form.routeName = ''
      data.form.routePath = ''
      data.form.componentPath = ''
    }
  }
</script>
<template>
  <avue-crud
    ref="crud"
    v-model:page="data.page"
    v-model:search="data.search"
    v-model:defaults="data.defaults"
    v-model="data.form"
    :data="data.data"
    :table-loading="data.loading"
    :option="data.option"
    :before-open="beforeOpen"
    :permission="permission"
    @row-save="save"
    @row-del="deleteByIds"
    @row-update="updateById"
    @on-load="getTree"
    @search-change="getTree"
    @search-reset="getTree"
    @refresh-change="getTree"
    @selection-change="selection => (data.selectionData = selection)"
  >
    <template #type="scope">
      <el-tag v-if="scope.row.type === MenuType.DIRECTORY" type="success" effect="dark" round>
        目录
      </el-tag>
      <el-tag v-else-if="scope.row.type === MenuType.MENU" type="info" effect="dark" round>
        菜单
      </el-tag>
      <el-tag v-else-if="scope.row.type === MenuType.BUTTON" type="warning" effect="dark" round>
        按钮
      </el-tag>
      <el-tag v-else type="danger" effect="dark" round>未知</el-tag>
    </template>
    <template #icon="scope">
      <el-icon size="20">
        <component :is="scope.row.icon"></component>
      </el-icon>
    </template>
    <template #isEnable="scope">
      <el-tag v-if="scope.row.isEnable === Whether.Y" type="success" effect="dark" round>是</el-tag>
      <el-tag v-else-if="scope.row.isEnable === Whether.N" type="info" effect="dark" round>
        否
      </el-tag>
      <el-tag v-else type="danger" effect="dark" round>未知</el-tag>
    </template>
    <template #menu-left="{}">
      <el-button
        v-if="hasAnyAuthority('admin:system:menus:getTree')"
        :disabled="data.selectionData.length !== 1"
        type="info"
        icon="el-icon-view"
        @click="$refs.crud.rowView()"
      >
        查看
      </el-button>
      <el-button
        v-if="hasAnyAuthority('admin:system:menus:save')"
        :disabled="data.selectionData.length !== 1"
        type="success"
        icon="el-icon-copy-document"
        @click="$refs.crud.rowAdd()"
      >
        复制
      </el-button>
      <el-button
        v-if="hasAnyAuthority('admin:system:menus:update')"
        :disabled="data.selectionData.length !== 1"
        type="warning"
        icon="el-icon-edit"
        @click="$refs.crud.rowEdit()"
      >
        修改
      </el-button>
      <el-button
        v-if="hasAnyAuthority('admin:system:menus:delete')"
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
