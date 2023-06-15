<script setup lang="ts">
  import { MenuType } from '@/utils/menuType.ts'

  defineProps({
    menuTreeData: {
      type: Array,
      default: []
    }
  })
</script>
<template>
  <template v-for="menu in menuTreeData">
    <el-sub-menu v-if="menu.children.length" :key="menu.id">
      <template #title>
        <el-icon>
          <component :is="menu.icon"></component>
        </el-icon>
        <span v-text="menu.name"></span>
      </template>
      <home-menu-bar-tree :menuTreeData="menu.children" />
    </el-sub-menu>
    <el-menu-item
      v-else
      :key="menu.id"
      :index="menu.path"
      :disabled="menu.type === MenuType.DIRECTORY"
    >
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
