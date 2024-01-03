<script setup lang="ts">
  import { ref, defineProps, defineEmits } from 'vue'
  let props = defineProps({ title: String })
  let emits = defineEmits(['closeDialog'])
  let dialogVisible = ref(false)
  let active = ref(0)
  let open = () => {
    dialogVisible.value = true
  }
  let close = () => {
    dialogVisible.value = false
    emits('closeDialog')
  }
  let next = () => {
    if (active.value++ > 2) {
      active.value = 0
    }
  }

  open()
</script>

<template>
  <el-dialog :title="props.title" v-model="dialogVisible" :before-close="close">
    <el-steps :active="active" finish-status="success">
      <el-step title="Step 1" />
      <el-step title="Step 2" />
      <el-step title="Step 3" />
    </el-steps>

    <el-button @click="next">Next step</el-button>
  </el-dialog>
</template>

<style scoped></style>
