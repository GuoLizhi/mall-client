<script setup lang="ts">
import { Toast } from 'vant';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { regist } from '@/service/user';

const username = ref('');
const nickname = ref('');
const password = ref('');
const router = useRouter();

async function handleRegist() {
  if (!username.value) {
    Toast.fail('请输入用户名');
    return;
  }
  if (!nickname.value) {
    Toast.fail('请输入昵称');
    return;
  }
  if (!password.value) {
    Toast.fail('请输入密码');
    return;
  }
  const resp = await regist({
    username: username.value,
    password: password.value,
    nickname: nickname.value,
  });
  if (resp === null) return;
  Toast({
    message: '注册成功',
    duration: 2000,
    onClose: () => {
      router.replace({
        path: '/login',
      });
    },
  });
}
</script>
<template>
  <div class="login">
    <p class="title">用户注册</p>
    <van-cell-group>
      <van-field v-model="username" label="用户名" />
      <van-field v-model="nickname" label="昵称" />
      <van-field v-model="password" type="password" label="密码" />
    </van-cell-group>
    <van-button round block type="primary" class="submit" @click="handleRegist">
      注册
    </van-button>
    <router-link to="/login" class="login-btn">已有账号？立即登录</router-link>
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
.login-btn {
  text-align: center;
  display: block;
  margin-top: 20px;
  font-size: 24px;
}
</style>
