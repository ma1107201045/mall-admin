<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import Error401 from '@/views/error/components/401.vue'
  import Error403 from '@/views/error/components/403.vue'
  import Error404 from '@/views/error/components/404.vue'
  import Error500 from '@/views/error/components/500.vue'
  import { ref } from 'vue'

  let query = useRoute().query
  let id = ref(query.id ? query.id : '404')
</script>

<template>
  <error-401 v-if="id === '401'" />
  <error-403 v-if="id === '403'" />
  <error-404 v-if="id === '404'" />
  <error-500 v-if="id === '500'" />
</template>

<style scoped></style>
