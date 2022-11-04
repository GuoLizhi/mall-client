<script setup lang="ts">
import { ref } from 'vue';

const username = ref('');
const password = ref('');
</script>
<template>
  <div class="login">
    <p class="title">商城登录</p>
    <van-cell-group>
      <van-field v-model="username" label="用户名" />
      <van-field v-model="password" type="password" label="密码" />
    </van-cell-group>
    <van-button round block type="primary" class="submit">
      登陆
    </van-button>
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
</style>
