<script setup lang="ts">
  import HomeLogo from "@/views/home/components/home-logo.vue";
  import homeMenuBar from '@/views/home/components/home-menu-bar.vue'
  import homeNavigationBar from '@/views/home/components/home-navigation-bar.vue'
  import homeContent from '@/views/home/components/home-content.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <!--侧边栏容器-->
      <el-aside>
        <home-logo/>
        <home-menu-bar />
      </el-aside>
      <el-container>
        <!--顶栏容器-->
        <el-header>
          <home-navigation-bar />
        </el-header>
        <!--主要区域容器-->
        <el-main>
          <home-content />
        </el-main>
        <!--底栏容器-->
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped></style>
