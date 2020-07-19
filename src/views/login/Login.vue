<template>
  <div class="page">
    <h2>Login Page</h2>
    <el-button type="primary" @click="login()">登录</el-button>
  </div>
</template>

<script>
  import Cookies from "js-cookie";
  import {login} from "network/login";
  export default {
    name: "Login",
    methods: {
      login() {
        login().then((res)=> {
          alert(res.data.token);
          Cookies.set('token', res.data.token); // 放置token到Cookie
          this.$router.push('/')  // 登录成功，跳转到主页
        }).catch(function (res) {
          alert(res);
        });
      }
      }
  }
</script>

<style scoped>

</style>