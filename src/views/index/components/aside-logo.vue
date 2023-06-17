<script setup lang="ts">
  import { ShoppingCart } from '@element-plus/icons-vue'
</script>

<template>
  <div class="home-logo">
    <el-icon size="50" color="#00a680" class="home-logo-icon">
      <ShoppingCart />
    </el-icon>
    <span class="home-logo-text">商城后台系统</span>
  </div>
</template>

<style scoped>
  .home-logo {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    background-color: #304156;
  }

  .home-logo-icon {
    margin-top: 8px;
    margin-left: -50px;
  }

  .home-logo-text {
  }
</style>