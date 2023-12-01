<script setup lang="ts">
  import { reactive } from 'vue'
  import AdminApi from '@/api/auth/admin'
  import router from '@/router'
  import { ElMessage } from 'element-plus'

  let data = reactive({
    imageCaptchaBase64Data: '',
    icon: 'ElementPlus',
    loading: false
  })
  let form = reactive({
    userName: '',
    password: '',
    imageCaptcha: '',
    isRememberMe: ''
  })
  let adminApi = AdminApi.getInstance()

  async function getBase64ImageCaptcha(): Promise<any> {
    let res = await adminApi.getBase64ImageCaptcha()
    data.imageCaptchaBase64Data = res.data.data
  }

  getBase64ImageCaptcha()

  async function login(): Promise<any> {
    try {
      data.loading = true
      let res = await adminApi.login(form)
      data.loading = false
      localStorage.setItem('userInfo', JSON.stringify(res.data))
      localStorage.removeItem('menuPermissions')
      await router.push({ name: 'Index' })
    } catch (e) {
      data.loading = false
      ElMessage.error('登录失败')
    }
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
