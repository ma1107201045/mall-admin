<script setup lang="ts">
  import { reactive } from 'vue'
  import router from '@/router'
  import IndexApi from '@/api/index/index.ts'
  import AsideMenuBarTree from '@/views/index/components/aside-menu-bar-tree.vue'
  import { MenuType, Path } from '@/enums'

  let data = reactive({
    menuBarDynamicStyle: {
      height: ''
    },
    isCollapse: false,
    defaultActive: '',
    menus: []
  })
  let indexApi: IndexApi = IndexApi.getInstance()

  function onCreated() {
    //动态调整左侧菜单栏高度
    let docHeight = document.documentElement.clientHeight
    data.menuBarDynamicStyle.height = docHeight - 60 + 'px'
  }

  async function getMenuPermissions() {
    let menuPermissions = localStorage.getItem('menuPermissions')
    if (!menuPermissions) {
      let res = await indexApi.getMenuPermissions()
      // 将菜单权限标识集合存入本地缓存
      localStorage.setItem('menuPermissions', res.data.data)
    }
    await getMenuTree()
  }

  async function getMenuTree() {
    let res = await indexApi.getMenuTree()
    let menuTree = res.data.data
    data.menus = menuTree
    if (menuTree.length && menuTree[0].type === MenuType.MENU) {
      //默认选中第一个菜单
      data.defaultActive = Path.INDEX + menuTree[0].routePath
      //路由跳转
      await router.push(data.defaultActive)
    }
  }

  onCreated()
  getMenuPermissions()
</script>

<template>
  <div>
    <el-radio-group
      v-model="data.isCollapse"
      style="margin-bottom: 20px; position: absolute; left: 200px"
    >
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      :collapse="data.isCollapse"
      background-color="#304156"
      text-color="#ffffff"
      :default-active="data.defaultActive"
      :unique-opened="true"
      :router="true"
      class="el-menu-vertical-demo"
      :style="data.menuBarDynamicStyle"
    >
      <aside-menu-bar-tree :menuBarTreeData="data.menus" />
    </el-menu>
  </div>
</template>

<style scoped>
  .el-menu-vertical-demo {
    position: absolute;
    top: 60px;
    left: 0;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
