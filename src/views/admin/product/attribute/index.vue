<script setup lang="ts">
  import { hasAnyAuthority, notHasAnyAuthority } from '@/utils'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import { reactive } from 'vue'
  import crudOption from '@/option/admin/product/attribute'
  import AttributeApi from '@/api/admin/product/attribute'

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
  const attributeApi = AttributeApi.getInstance()
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
      (key === 'addBtn' || key === 'copyBtn') &&
      notHasAnyAuthority('admin:product:brands:save')
    ) {
      return false
    }
    if (key === 'delBtn' && notHasAnyAuthority('admin:product:brands:delete')) {
      return false
    }
    if (key === 'editBtn' && notHasAnyAuthority('admin:product:brands:update')) {
      return false
    }
    if (
      (key === 'viewBtn' || key === 'refreshBtn') &&
      notHasAnyAuthority('admin:product:brands:getList')
    ) {
      return false
    }
    if (key === 'excelBtn' && notHasAnyAuthority('admin:product:brands:excel')) {
      return false
    }
    if (key === 'printBtn' && notHasAnyAuthority('admin:product:brands:print')) {
      return false
    }
    return true
  }

  function save(row, done, loading) {
    loading()
    attributeApi
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
        attributeApi.deleteByIds(ids).then(() => {
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
      .catch(() => {})
  }

  function updateById(row, index, done, loading) {
    loading()
    attributeApi
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
        done()
        ElMessage.info('修改失败')
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
    attributeApi
      .getListByPageAndParam(Object.assign(newPage, data.search))
      .then(res => {
        data.page.total = res.data.total
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
    <template #attributeValueNames="scope">
      <el-tag v-for="attributeValueName in scope.row.attributeValueNames">
        {{ attributeValueName }}
      </el-tag>
    </template>
    <template #menu-left="{}">
      <el-button
        v-if="hasAnyAuthority('admin:product:brands:getList')"
        :disabled="data.selectionData.length !== 1"
        type="info"
        icon="el-icon-view"
        @click="$refs.crud.rowView()"
      >
        查看
      </el-button>
      <el-button
        v-if="hasAnyAuthority('admin:product:brands:save')"
        :disabled="data.selectionData.length !== 1"
        type="success"
        icon="el-icon-copy-document"
        @click="$refs.crud.rowAdd()"
      >
        复制
      </el-button>
      <el-button
        v-if="hasAnyAuthority('admin:product:brands:update')"
        :disabled="data.selectionData.length !== 1"
        type="warning"
        icon="el-icon-edit"
        @click="$refs.crud.rowEdit()"
      >
        修改
      </el-button>
      <el-button
        v-if="hasAnyAuthority('admin:product:brands:delete')"
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
        v-if="hasAnyAuthority('admin:product:brands:update')"
        :disabled="row.userName === 'admin'"
        type="text"
        icon="el-icon-edit"
        @click="$refs.crud.rowEdit(row, index)"
      >
        修改
      </el-button>
      <el-button
        v-if="hasAnyAuthority('admin:product:brands:delete')"
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
