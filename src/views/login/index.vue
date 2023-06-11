<script setup lang="ts">
  import { ref } from 'vue'

  let userName = ref('')
  let password = ref('')
  let captcha = ref('')
  let login = () => {
    alert('1111')
  }
  let register = () => {}
</script>

<template>
  <div class="login-wrap">
    <el-form class="login-container">
      <h1 class="title">商城Admin端系统</h1>
      <el-form-item>
        <el-input
          type="text"
          v-model="userName"
          placeholder="用户账号"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="password"
          placeholder="用户密码"
          autocomplete="off"
          :show-password="true"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="captcha" placeholder="验证码" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login" style="width: 100%">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped></style>