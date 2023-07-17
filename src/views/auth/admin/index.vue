<script setup lang="ts">
  import { reactive } from 'vue'
  import AdminApi from '@/api/auth/admin'
  import router from '@/router'

  let form = reactive({
    userName: '',
    password: '',
    imageCaptcha: '',
    isRememberMe: ''
  })
  let data = reactive({
    imageCaptchaBase64Data: '',
    icon: 'ElementPlus',
    loading: false
  })
  let adminApi = AdminApi.getInstance()
  let getBase64ImageCaptcha: any = (): any => {
    adminApi
      .getBase64ImageCaptcha()
      .then(res => {
        data.imageCaptchaBase64Data = res.data.data
      })
      .catch(() => {})
  }
  getBase64ImageCaptcha()
  let login: any = (): any => {
    data.loading = true
    adminApi
      .login(form)
      .then(res => {
        data.loading = false
        // 删除菜单权限标识集合本地缓存
        localStorage.removeItem('menuPermissions')
        router.push({ name: 'Index' })
      })
      .catch(() => {
        data.loading = false
      })
  }
</script>

<template>
  <div class="login-wrap">
    <el-form class="login-container">
      <h1 class="title">商城Admin端系统</h1>
      <el-form-item>
        <el-input
          type="text"
          v-model="form.userName"
          placeholder="用户账号"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="form.password"
          placeholder="用户密码"
          autocomplete="off"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-col :span="17">
          <el-input v-model="form.imageCaptcha" placeholder="验证码" autocomplete="off"></el-input>
        </el-col>
        <el-col :span="7">
          <el-image :src="data.imageCaptchaBase64Data" @click="getBase64ImageCaptcha" />
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="form.isRememberMe">记住密码</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          :loading-icon="data.icon"
          :loading="data.loading"
          style="width: 100%"
          @click="login"
        >
          登陆
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped></style>
