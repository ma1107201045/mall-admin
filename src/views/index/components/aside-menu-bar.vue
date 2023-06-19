<script setup lang="ts">
  import { ref } from 'vue'
  import { Ref, UnwrapRef } from 'vue'
  import IndexApi from '@/api/index/index.ts'
  import asideMenuBarTree from '@/views/index/components/aside-menu-bar-tree.vue'
  import router from '@/router'
  import { MenuType } from '@/enums/menuType.ts'
  import { Path } from '@/enums/path.ts'

  let menuBarDynamicStyle = ref({
    height: ''
  })
  let isCollapse: Ref<UnwrapRef<boolean>> = ref(false)
  let defaultActive: Ref<UnwrapRef<string>> = ref('')
  let menus: Ref<UnwrapRef<[]>> = ref([])
  let indexApi: IndexApi = IndexApi.getInstance()
  let onCreated = () => {
    //动态调整左侧菜单栏高度
    let docHeight = document.documentElement.clientHeight
    menuBarDynamicStyle.value.height = docHeight + 'px'
  }
  onCreated()

  let getMenuPermissions: any = (): any => {
    let menuPermissions = localStorage.getItem('menuPermissions')
    if (!menuPermissions) {
      indexApi.getMenuPermissions().then(res => {
        // 将菜单权限标识集合存入本地缓存
        localStorage.setItem('menuPermissions', res.data.data)
        getMenuTree()
      })
    } else {
      getMenuTree()
    }
  }
  let getMenuTree: any = (): any => {
    indexApi.getMenuTree().then(res => {
      let data = res.data.data
      menus.value = data
      if (data.length && data[0].type === MenuType.MENU) {
        //默认选中第一个菜单
        defaultActive.value = Path.INDEX + data[0].routePath
        //路由跳转
        router.push(defaultActive.value).then(value => console.log(value))
      }
    })
  }
  getMenuPermissions()
</script>

<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#ffffff"
      :default-active="defaultActive"
      :unique-opened="true"
      :router="true"
      class="el-menu-vertical-demo"
      :style="menuBarDynamicStyle"
    >
      <aside-menu-bar-tree :menuBarTreeData="menus" />
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
