<script setup lang='ts'>
  import { reactive } from 'vue'
  import MenuApi from '@/api/admin/system/menu'
  import crudOption from '@/option/admin/system/menu'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import { MenuType } from '@/enums/menuType.ts'
  import { Whether } from '@/enums/whether.ts'

  let data = reactive({
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
    selectionData: []
  })
  //获取api实例
  const menuApi = MenuApi.getInstance()
  //初始化option
  initCrudOption()

  function initCrudOption() {
    //获取角色列表
  }


  function beforeOpen(done, type) {
    if ((type === 'add' || type === 'edit') && data.selectionData.length === 1) {
      data.form = data.data.filter(item => data.selectionData[0].id === item.id)[0]
    }
    if (type === 'add') {
      data.form.id = ''
    }
    done()
  }

  function save(row, done, loading) {
    loading()
    menuApi
      .save(data.form)
      .then(() => {
        done()
        ElMessage({
          message: '操作成功',
          type: 'success',
          duration: 1500,
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
            duration: 1500,
            onClose: () => {
              getTree(null, null)
            }
          })
        })
      })
      .catch(() => {
      })
  }

  function updateById(row, index, done, loading) {
    loading()
    menuApi
      .updateById(data.form.id, data.form)
      .then(() => {
        done()
        ElMessage({
          message: '修改成功',
          type: 'success',
          duration: 1500,
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
</script>
<template>
  <avue-crud
    ref='crud'
    v-model:page='data.page'
    v-model:search='data.search'
    v-model='data.form'
    :data='data.data'
    :table-loading='data.loading'
    :option='crudOption'
    :before-open='beforeOpen'
    @row-save='save'
    @row-del='deleteByIds'
    @row-update='updateById'
    @on-load='getTree'
    @search-change='getTree'
    @search-reset='getTree'
    @refresh-change='getTree'
    @selection-change='selection => (data.selectionData = selection)'
  >
    <template #type='scope'>
      <el-tag v-if='scope.row.type === MenuType.DIRECTORY' type='success' effect='dark'>目录</el-tag>
      <el-tag v-else-if='scope.row.type === MenuType.MENU' type='info' effect='dark'>菜单</el-tag>
      <el-tag v-else-if='scope.row.type === MenuType.BUTTON' type='warning' effect='dark'>按钮</el-tag>
      <el-tag v-else type='danger' effect='dark'>未知</el-tag>
    </template>
    <template #icon='scope'>
      <el-icon size='20'>
        <component :is='scope.row.icon'></component>
      </el-icon>
    </template>
    <template #isEnable='scope'>
      <el-tag v-if='scope.row.isEnable === Whether.Y' type='success' effect='dark'>是</el-tag>
      <el-tag v-else-if='scope.row.isEnable === Whether.N' type='info' effect='dark'>否</el-tag>
      <el-tag v-else type='danger' effect='dark'>未知</el-tag>
    </template>
    <template #menu-left='{}'>
      <el-button
        :disabled='data.selectionData.length !== 1'
        type='primary'
        icon='el-icon-copy-document'
        @click='$refs.crud.rowAdd()'
      >
        复制
      </el-button>
      <el-button
        :disabled='data.selectionData.length !== 1'
        type='warning'
        icon='el-icon-edit'
        @click='$refs.crud.rowEdit()'
      >
        编辑
      </el-button>
      <el-button
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
