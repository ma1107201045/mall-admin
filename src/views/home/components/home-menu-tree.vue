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
    <el-sub-menu :index="menu.id" v-if="menu.menus.length">
      <template #title>
        <el-icon v-html="menu.icon"></el-icon>
        <span>{{ menu.name }}</span>
      </template>
      <home-menu-tree :menuTreeData="menu.menus" />
    </el-sub-menu>
    <el-menu-item :index="menu.id" v-else>
      <el-icon v-html="menu.icon"></el-icon>
      <el-span>{{ menu.name }}</el-span>
    </el-menu-item>
  </div>
</template>

<style scoped></style>
