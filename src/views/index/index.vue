<script setup lang="ts">
  import AsideLogo from '@/views/index/components/aside-logo.vue'
  import AsideMenuBar from '@/views/index/components/aside-menu-bar.vue'
  import HeaderNavigationBar from '@/views/index/components/header-navigation-bar.vue'
  import MainContent from '@/views/index/components/main-content.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <!--侧边栏容器-->
      <el-aside>
        <aside-logo />
        <aside-menu-bar />
      </el-aside>
      <el-container>
        <!--顶栏容器-->
        <el-header>
          <header-navigation-bar />
        </el-header>
        <!--主要区域容器-->
        <el-main>
          <main-content />
        </el-main>
        <!--底栏容器-->
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped></style>
