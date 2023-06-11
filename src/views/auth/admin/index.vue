<script setup lang="ts">
  import { reactive } from 'vue'
  import AdminApi from '@/api/auth/admin'

  let viewApiBaseUrl = import.meta.env.VITE_API_BASE_URL
  let captchaUrl = viewApiBaseUrl + AdminApi.URL_PREFIX + `/get-captcha`
  let loginInfo = reactive({
    userName: '',
    password: '',
    captcha: '',
    captchaUrl: captchaUrl,
    isRememberMe: ''
  })
  let getCaptcha = () => {
    loginInfo.captchaUrl = captchaUrl + `?random=${Math.random()}`
  }
  let adminApi = AdminApi.getInstance()
  let login = () => {
    adminApi.login(loginInfo).then(() => {})
  }
</script>

<template>
  <div class="login-wrap">
    <el-form class="login-container">
      <h1 class="title">商城Admin端系统</h1>
      <el-form-item>
        <el-input
          type="text"
          v-model="loginInfo.userName"
          placeholder="用户账号"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="loginInfo.password"
          placeholder="用户密码"
          autocomplete="off"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-col :span="17">
          <el-input v-model="loginInfo.captcha" placeholder="验证码" autocomplete="off"></el-input>
        </el-col>
        <el-col :span="7">
          <el-image :src="loginInfo.captchaUrl" @click="getCaptcha" />
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="loginInfo.isRememberMe">记住密码</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login" style="width: 100%">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped></style>