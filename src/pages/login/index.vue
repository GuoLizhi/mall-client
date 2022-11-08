<script setup lang="ts">
import { Toast } from 'vant';
import { ref } from 'vue';
import { login } from '@/service/user';

const username = ref('');
const password = ref('');

async function handleLogin() {
  if (!username.value) {
    Toast.fail('请输入用户名');
    return;
  }
  if (!password.value) {
    Toast.fail('请输入密码');
    return;
  }
  const resp = await login({ username: username.value, password: password.value });
  if (resp === null) return;
  localStorage.setItem('USER_TOKEN', resp?.token || '');
}
</script>
<template>
  <div class="login">
    <p class="title">用户登录</p>
    <van-cell-group>
      <van-field v-model="username" label="用户名" />
      <van-field v-model="password" type="password" label="密码" />
    </van-cell-group>
    <van-button round block type="primary" class="submit" @click="handleLogin">
      登陆
    </van-button>
    <router-link to="/regist" class="regist">没有账号？立即注册</router-link>
  </div>
</template>
<style lang="scss" scoped>
.login {
  background: #f7f8fa;
  min-height: 100vh;
  padding: 100px 20px 0;
}
.submit {
  margin-top: 24px;
}
.title {
  font-size: 40px;
  text-align: center;
  margin-bottom: 24px;
}
.regist {
  text-align: center;
  display: block;
  margin-top: 20px;
  font-size: 24px;
}
</style>
