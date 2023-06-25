<script setup lang="ts">
  import { Path, MenuType } from '@/enums'

  defineProps({
    menuBarTreeData: {
      type: Array,
      default: []
    }
  })
</script>
<template>
  <template v-for="menu in menuBarTreeData">
    <el-sub-menu v-if="menu.children.length" :key="menu.id" :index="''">
      <template #title>
        <el-icon>
          <component :is="menu.icon"></component>
        </el-icon>
        <span v-text="menu.name"></span>
      </template>
      <aside-menu-bar-tree :menuBarTreeData="menu.children" />
    </el-sub-menu>
    <el-menu-item
      v-else
      :key="menu.id"
      :index="menu.type === MenuType.MENU ? Path.INDEX + menu.routePath : ''"
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
