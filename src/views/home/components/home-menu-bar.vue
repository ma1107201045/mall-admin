<script setup lang="ts">
  import { ref } from 'vue'
  import { Ref, UnwrapRef } from 'vue'
  import HomeApi from '@/api/home'
  import homeMenuBarTree from '@/views/home/components/home-menu-bar-tree.vue'
  import router from '@/router'
  let menuBarDynamicStyle = ref({
    position: 'absolute',
    top: '50px',
    left: 0,
    height: ''
  })
  let isCollapse: Ref<UnwrapRef<boolean>> = ref(false)
  let defaultActive: Ref<UnwrapRef<string>> = ref('')
  let menus: Ref<UnwrapRef<[]>> = ref([])
  let homeApi: HomeApi = HomeApi.getInstance()
  let onCreated = () => {
    //动态调整左侧菜单栏高度
    let docHeight = document.documentElement.clientHeight
    menuBarDynamicStyle.value.height = docHeight - 50 + 'px'
  }
  onCreated()
  let getMenu: any = (): any => {
    homeApi.getMenu().then(res => {
      let data = res.data.data
      menus.value = data
      if (data.length) {
        defaultActive.value = String(data[0].id)
      }
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
