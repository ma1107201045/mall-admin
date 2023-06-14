<script setup lang="ts">
  import { defineProps } from 'vue'
  const menuTreeDataProps = defineProps({
    menuTreeData: {
      type: Array,
      default: []
    }
  })
</script>

<template>
  <div v-for="item in menuTreeDataProps.menuTreeData">
    <el-sub-menu index="item.id" v-if="item.childNode">
      <template #title>
        <span>{{ item.title }}</span>
      </template>
      <menu-tree :menuTreeData="item.childNode" />
    </el-sub-menu>
    <el-menu-item index="item.id" v-else>
      {{ item.title }}
    </el-menu-item>
  </div>
</template>

<style scoped></style>
