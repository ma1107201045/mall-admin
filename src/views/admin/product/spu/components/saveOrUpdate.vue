<script setup lang="ts">
  import { ref } from 'vue'

  let dialogVisible = ref(true)

  function mount() {
    console.log('1111')
  }

  function closeDialog() {
    dialogVisible.value = false
    //子组件Operate接收updateList事件 使用驼峰方式书写
    const emits = defineEmits(['close'])
    //子组件中调用方法
    emits('close')
  }
</script>

<template>
  <el-dialog v-model="dialogVisible" :before-close="closeDialog">
    <span>This is a message</span>
  </el-dialog>
</template>

<style scoped></style>
