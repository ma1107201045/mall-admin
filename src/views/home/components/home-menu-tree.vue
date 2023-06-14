<script setup lang="ts">
  import { defineProps } from 'vue'

  defineProps({
    menuTreeData: {
      type: Array,
      default: []
    }
  })
</script>

<template>
  <div v-for="menu in menuTreeData">
    <el-sub-menu :index="String(menu.id)" v-if="menu.menus.length">
      <template #title>
        <el-icon>
          <component :is="menu.icon"></component>
        </el-icon>
        <span v-text="menu.name"></span>
      </template>
      <home-menu-tree :menuTreeData="menu.menus" />
    </el-sub-menu>
    <el-menu-item :index="String(menu.id)" v-else>
      <el-icon>
        <component :is="menu.icon"></component>
      </el-icon>
      <span v-text="menu.name"></span>
    </el-menu-item>
  </div>
</template>

<style scoped></style>