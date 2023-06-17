<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { ref } from 'vue'
  import Error401 from '@/views/error/components/401.vue'
  import Error403 from '@/views/error/components/403.vue'
  import Error404 from '@/views/error/components/404.vue'
  import Error500 from '@/views/error/components/500.vue'

  let route = useRoute()
  let id = ref(route.query)
</script>

<template>
  <error-401 v-if="id.value === '401'" />
  <error-403 v-if="id.value === '403'" />
  <error-404 v-if="id.value === '404'" />
  <error-500 v-if="id.value === '500'" />
</template>

<style scoped></style>
