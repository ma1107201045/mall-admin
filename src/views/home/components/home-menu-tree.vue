<script setup lang="ts">
  defineProps({
    menuTreeData: {
      type: Array,
      default: []
    }
  })
</script>
<template>
  <template v-for="menu in menuTreeData">
    <el-sub-menu v-if="menu.menus.length" :key="menu.id" :index="String(menu.id)">
      <template #title>
        <el-icon>
          <component :is="menu.icon"></component>
        </el-icon>
        <span v-text="menu.name"></span>
      </template>
      <home-menu-tree :menuTreeData="menu.menus" />
    </el-sub-menu>
    <el-menu-item v-else :key="menu.id" :index="String(menu.id)">
      <el-icon>
        <component :is="menu.icon"></component>
      </el-icon>
      <template #title>
        <span v-text="menu.name"></span>
      </template>
    </el-menu-item>
  </template>
</template>

<style scoped></style>