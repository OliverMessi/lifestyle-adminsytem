<template>
<div id="login">
  <div class="background">
    <img :src="imgSrc" width="100%" height="100%" alt="" />
  </div>
  <div class="loginForm">

    <el-form :model="loginForm" :rules="fieldRules" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <div class="title"><span>后台管理系统</span></div>
      <el-form-item prop="account">
        <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
      <slide-verify
              :l="42"
              :r="10"
              :w="280"
              :h="100"
              @success="onSuccess"
              @fail="onFail"
              :slider-text="text"
      ></slide-verify>
      <el-form-item style="width:100%;margin-top: 20px">
        <el-button type="primary" style="width:48%;" @click.native.prevent="reset">重 置</el-button>
        <el-button type="primary" style="width:48%;" @click.native.prevent="login" :loading="logining">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
  import Cookies from "js-cookie";
  import {login} from "network/modules/login";
  export default {
    name: "Login",
    data() {
      return {
        text:"向右滑动",
        imgSrc:require('assets/img/bg.jpg'),
        logining: false,
        loginForm: {
          account: 'admin',
          password: '123456'
        },
        fieldRules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        },
        checked: true
      };
    },
    methods: {
      //图片验证成功
      async onSuccess() {
        //成功后的逻辑代码
        alert("！成")
      },
     //验证失败
      onFail() {
        this.alertMsg("验证失败", "error");
        //失败后的逻辑代码
      },
      login() {
          let userInfo = {account:this.loginForm.account, password:this.loginForm.password}

        login(userInfo).then((res)=> {
        //   Cookies.set('token', res.data.token); // 放置token到Cookie
        //   sessionStorage.setItem('user', userInfo.account) // 保存用户到本地会话
        //   this.$router.push('/')  // 登录成功，跳转到主页
        // }).catch(function (res) {
        //   alert(res);
            if(res.msg != null) {
                this.$message({
                    message: res.msg,
                    type: 'error'
                })
            } else {
                Cookies.set('token', res.data.token) // 放置token到Cookie
                sessionStorage.setItem('user', userInfo.account) // 保存用户到本地会话
                this.$store.commit('menuRouteLoaded', false) // 要求重新加载导航菜单
                this.$router.push('/')  // 登录成功，跳转到主页
            }
        }).catch((res) => {
            this.$message({
                message: res.message,
                type: 'error'
            })
        });
      },
      reset() {
        this.$refs.loginForm.resetFields();
      }
      }
  }
</script>

<style lang="scss" scoped>
  .background{
    width:100%;
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:-1;
    position: absolute;
  }
  .title {
    margin-bottom: 20px;
    text-align: center;
    font-size: 24px;
    color: #fff;
  }
  .loginForm{
    z-index:1;
    position: absolute;
    margin-left: calc(calc(100vw - 400px)/2);//动态居中
  }
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background-color: rgba(200,200,200,0.3);
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  .remember {
    margin: 0px 0px 35px 0px;
  }
  }
</style>