<script setup lang="ts">
  import { reactive, ref, Ref, UnwrapRef } from 'vue'
  import AdminApi from '@/api/auth/admin'
  import { UnwrapNestedRefs } from '@vue/reactivity'
  import router from '@/router'

  let adminApi: AdminApi = AdminApi.getInstance()
  let viewApiBaseUrl: string = import.meta.env.VITE_API_BASE_URL
  let getCaptchaUrl: string = viewApiBaseUrl + AdminApi.URL_PREFIX + '/get-image-captcha'
  let captchaUrl: Ref<UnwrapRef<string>> = ref(getCaptchaUrl)
  let loginInfo: UnwrapNestedRefs<object> = reactive({
    userName: '',
    password: '',
    imageCaptcha: '',
    isRememberMe: ''
  })
  let getCaptcha: any = (): any => {
    captchaUrl.value = getCaptchaUrl + `?random=${Math.random()}`
  }
  let login: any = (): any => {
    adminApi.login(loginInfo).then(res => {
      console.log(res.data)
      router.push('/home')
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
          <el-input
            v-model="loginInfo.imageCaptcha"
            placeholder="验证码"
            autocomplete="off"
          ></el-input>
        </el-col>
        <el-col :span="7">
          <el-image :src="captchaUrl" @click="getCaptcha" />
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
