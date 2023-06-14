<script setup lang="ts">
  import { ref } from 'vue'
  import MenuTree from '@/views/menu-tree.vue'

  let isCollapse = ref(false)
  let menuTreeData = ref([
    {
      id: 1,
      title: '111',
      childNode: [
        {
          id: 2,
          title: '222',
          childNode: []
        }
      ]
    },
    {
      id: 3,
      title: '333',
      childNode: [
        {
          id: 4,
          title: '444',
          childNode: []
        }
      ]
    },
    {
      id: 5,
      title: '555',
      childNode: []
    }
  ])
</script>

<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
      <menu-tree :menuTreeData="menuTreeData" />
    </el-menu>
  </div>
</template>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
