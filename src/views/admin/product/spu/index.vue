<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { hasAnyAuthority, notHasAnyAuthority } from '@/utils'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import rOption from '@/option/admin/product/spu'
  import SpuApi from '@/api/admin/product/spu'
  import SaveOrUpdate from '@/views/admin/product/spu/components/saveOrUpdate.vue'

  let saveOrUploadRef = ref()
  let data = reactive({
    option: rOption,
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
    selectionData: [],
    iShowDialog: false
  })
  //获取api实例
  const spuApi = SpuApi.getInstance()
  //初始化option
  initCrudOption()

  function initCrudOption() {}

  function permission(key) {
    if ((key === 'addBtn' || key === 'copyBtn') && notHasAnyAuthority('admin:product:spus:save')) {
      return false
    }
    if (key === 'delBtn' && notHasAnyAuthority('admin:product:spus:delete')) {
      return false
    }
    if (key === 'editBtn' && notHasAnyAuthority('admin:product:spus:update')) {
      return false
    }
    if (
      (key === 'viewBtn' || key === 'refreshBtn') &&
      notHasAnyAuthority('admin:product:spus:getTree')
    ) {
      return false
    }
    if (key === 'excelBtn' && notHasAnyAuthority('admin:product:spus:excel')) {
      return false
    }
    if (key === 'printBtn' && notHasAnyAuthority('admin:product:spus:print')) {
      return false
    }
    return true
  }

  function openDialog() {
    data.iShowDialog = true
  }

  function closeDialog() {
    data.iShowDialog = false
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
        await spuApi.deleteByIds(ids)
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

  async function getList(page, done) {
    try {
      data.loading = true
      let newPage = {
        currentPage: data.page.currentPage,
        pageSize: data.page.pageSize,
        sortField: data.page.sortField,
        sortDirection: data.page.sortDirection
      }
      let res = await spuApi.getListByPageAndParam(Object.assign(newPage, data.search))
      data.page.total = res.data.data.total
      data.data = res.data.data.data
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
    :data="data.data"
    :table-loading="data.loading"
    :option="data.option"
    :permission="permission"
    @on-load="getList"
    @search-change="getList"
    @search-reset="getList"
    @refresh-change="getList"
    @selection-change="selection => (data.selectionData = selection)"
  >
    <template #menu-left="{}">
      <el-button
        v-if="hasAnyAuthority('admin:product:spus:save')"
        type="primary"
        icon="el-icon-plus"
        @click="openDialog"
      >
        添加
      </el-button>
    </template>
    <template #menu="{ row, index, size }">
      <el-button
        v-if="hasAnyAuthority('admin:product:spus:update')"
        type="text"
        icon="el-icon-edit"
        @click=""
      >
        修改
      </el-button>
      <el-button
        v-if="hasAnyAuthority('admin:product:spus:delete')"
        type="text"
        icon="el-icon-delete"
        @click=""
      >
        删除
      </el-button>
    </template>
  </avue-crud>
  <save-or-update v-if="data.iShowDialog" @close="closeDialog" />
</template>

<style scoped></style>
