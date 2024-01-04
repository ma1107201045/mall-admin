<script setup lang="ts">
  import { ref, reactive, defineProps, defineEmits, watch, computed } from 'vue'
  import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'

  let dialogVisible = ref(false)
  let active = ref(0)
  let student = reactive({ name: '', age: 0 })
  let props = defineProps({ title: String })
  let emits = defineEmits(['closeDialog'])

  let res = watch(active, (newVal, oldVal) => {
    console.log(`active value change,newVal:${newVal},oldVal:${oldVal}`)
  })
  let activeNewVal = computed(() => {
    return active.value + 1
  })
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
  <el-dialog v-model="dialogVisible" :title="props.title" width="70%" :before-close="close">
    <el-span>{{ student }}</el-span>
    <el-steps :active="active" finish-status="success">
      <el-step title="Step 1" />
      <el-step title="Step 2" />
      <el-step title="Step 3" />
    </el-steps>
    <el-form></el-form>
    <el-button @click="next">Next step,value:{{ activeNewVal }}</el-button>
    <el-button>
      <el-icon class="el-icon--left">
        <ArrowLeft />
      </el-icon>
      上一步
    </el-button>
    <el-button type="primary">
      下一步
      <el-icon class="el-icon--right">
        <ArrowRight />
      </el-icon>
    </el-button>
  </el-dialog>
</template>

<style scoped></style>
