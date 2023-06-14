<script setup lang="ts">
  import { ref } from 'vue'
  import { Ref, UnwrapRef } from 'vue/dist/vue'
  import HomeApi from '@/api/home'
  import homeMenuTree from '@/views/home/components/home-menu-tree.vue'

  let isCollapse: Ref<UnwrapRef<boolean>> = ref(true)
  let menus: Ref<UnwrapRef<object>> = ref([])
  let homeApi: HomeApi = HomeApi.getInstance()
  let getMenu: any = (): any => {
    homeApi.getMenu().then(res => {
      menus.value = res.data.data
    })
  }
  getMenu()
</script>

<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
      <home-menu-tree :menuTreeData="menus" />
    </el-menu>
  </div>
</template>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>