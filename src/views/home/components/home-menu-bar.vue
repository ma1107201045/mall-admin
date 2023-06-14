<script setup lang="ts">
  import { ref } from 'vue'
  import { Ref, UnwrapRef } from 'vue/dist/vue'
  import HomeApi from '@/api/home'
  import homeMenuBarTree from '@/views/home/components/home-menu-bar-tree.vue'

  let menuBarDynamicStyle = ref({
    position: 'absolute',
    top: '50px',
    height: ''
  })
  let isCollapse: Ref<UnwrapRef<boolean>> = ref(true)
  let menus: Ref<UnwrapRef<object>> = ref([])
  let homeApi: HomeApi = HomeApi.getInstance()
  let onCreated = () => {
    //动态调整左侧菜单栏高度
    let docHeight = document.documentElement.clientHeight
    menuBarDynamicStyle.value.height = docHeight - 50 + 'px'
  }
  onCreated()
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
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" :style="menuBarDynamicStyle">
      <home-menu-bar-tree :menuTreeData="menus" />
    </el-menu>
  </div>
</template>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>