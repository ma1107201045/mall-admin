<script setup lang="ts">
  import { reactive, watch } from 'vue'
  import { hasAnyAuthority, notHasAnyAuthority } from '@/utils'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import crudOption from '@/option/admin/product/category'
  import CategoryApi from '@/api/admin/product/category'
  import { MenuType, Whether } from '@/enums'

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
  const categoryApi = CategoryApi.getInstance()
  //初始化option
  initCrudOption()
  //监听数据
  watch(
    () => [data.data, data.form.parentId],
    newValArr => {
      data.option.column[2]['dicData'] = newValArr[0]
      if (newValArr[1]) {
        data.form.level = newValArr[1].length + 1
      }
    }
  )

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
      (key === 'addBtn' || key === 'copyBtn') &&
      notHasAnyAuthority('admin:product:categories:save')
    ) {
      return false
    }
    if (key === 'delBtn' && notHasAnyAuthority('admin:product:categories:delete')) {
      return false
    }
    if (key === 'editBtn' && notHasAnyAuthority('admin:product:categories:update')) {
      return false
    }
    if (
      (key === 'viewBtn' || key === 'refreshBtn') &&
      notHasAnyAuthority('admin:product:categories:getList')
    ) {
      return false
    }
    if (key === 'excelBtn' && notHasAnyAuthority('admin:product:categories:excel')) {
      return false
    }
    if (key === 'printBtn' && notHasAnyAuthority('admin:product:categories:print')) {
      return false
    }
    return true
  }

  function save(row, done, loading) {
    loading()
    console.log(row)
    data.form.parentId =
      data.form.parentId.length === 0 ? '' : data.form.parentId[data.form.parentId.length - 1]
    categoryApi
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
        done()
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
        categoryApi.deleteByIds(ids).then(() => {
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
    loading()
    data.form.parentId =
      data.form.parentId.length === 0 ? '' : data.form.parentId[data.form.parentId.length - 1]
    categoryApi
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
        done()
        ElMessage.info('修改失败')
      })
  }

  function getTree(page, done) {
    data.loading = true
    categoryApi
      .getTree()
      .then(res => {
        traverseTree([], res.data.data)
        data.data = res.data.data
        data.loading = false
        if (done) {
          done()
        }
      })
      .catch(() => {
        data.loading = false
        if (done) {
          done()
        }
      })
  }
  function traverseTree(parentIds, children) {
    children.forEach(item => {
      if (item.parentId === '0') {
        item.parentId = ''
        parentIds = []
      } else {
        parentIds.push(item.parentId)
        item.parentId = parentIds.map(item => item)
      }
      traverseTree(parentIds, item.children)
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
    @row-save="save"
    @row-del="deleteByIds"
    @row-update="updateById"
    @on-load="getTree"
    @search-change="getTree"
    @search-reset="getTree"
    @refresh-change="getTree"
    @selection-change="selection => (data.selectionData = selection)"
  >
    <template #icon="scope">
      <el-icon size="20">
        <component :is="scope.row.icon"></component>
      </el-icon>
    </template>
    <template #isShowNav="scope">
      <el-tag v-if="scope.row.isShowNav === Whether.Y" type="success" effect="plain">是</el-tag>
      <el-tag v-else-if="scope.row.isShowNav === Whether.N" type="info" effect="plain">否</el-tag>
      <el-tag v-else type="danger" effect="plain">未知</el-tag>
    </template>
    <template #isEnable="scope">
      <el-tag v-if="scope.row.isEnable === Whether.Y" type="success" effect="plain">是</el-tag>
      <el-tag v-else-if="scope.row.isEnable === Whether.N" type="info" effect="plain">否</el-tag>
      <el-tag v-else type="danger" effect="plain">未知</el-tag>
    </template>
    <template #menu-left="{}">
      <el-button
        v-if="hasAnyAuthority('admin:product:categories:getList')"
        :disabled="data.selectionData.length !== 1"
        type="info"
        icon="el-icon-view"
        @click="$refs.crud.rowView()"
      >
        查看
      </el-button>
      <el-button
        v-if="hasAnyAuthority('admin:product:categories:save')"
        :disabled="data.selectionData.length !== 1"
        type="success"
        icon="el-icon-copy-document"
        @click="$refs.crud.rowAdd()"
      >
        复制
      </el-button>
      <el-button
        v-if="hasAnyAuthority('admin:product:categories:update')"
        :disabled="data.selectionData.length !== 1"
        type="warning"
        icon="el-icon-edit"
        @click="$refs.crud.rowEdit()"
      >
        修改
      </el-button>
      <el-button
        v-if="hasAnyAuthority('admin:product:categories:delete')"
        :disabled="!data.selectionData.length > 0"
        type="danger"
        icon="el-icon-delete"
        @click="$refs.crud.rowDel()"
      >
        批量删除
      </el-button>
    </template>
    <template #menu="{ row, index, size }">
      <el-button
        v-if="hasAnyAuthority('admin:product:categories:update')"
        :disabled="row.userName === 'admin'"
        type="text"
        icon="el-icon-edit"
        @click="$refs.crud.rowEdit(row, index)"
      >
        修改
      </el-button>
      <el-button
        v-if="hasAnyAuthority('admin:product:categories:delete')"
        :disabled="row.userName === 'admin'"
        type="text"
        icon="el-icon-delete"
        @click="$refs.crud.rowDel(row, index)"
      >
        删除
      </el-button>
    </template>
  </avue-crud>
</template>

<style scoped></style>
