<template>
  <div id="register-content">
    <div id="title">
 <h3><span>注册lifestyle</span></h3>
    </div>
    <el-card class="box-card">
      <el-form status-icon :model="userInfo" :rules="rules" ref="userInfo" label-width="100px" class="demo-userInfo">
        <el-form-item label="账号" prop="account">
          <el-input v-model="userInfo.account" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户昵称" prop="name">
          <el-input v-model="userInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="userInfo.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="userInfo.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input  type="password" v-model="userInfo.passWord" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="userInfo.checkPass" autocomplete="off"></el-input>
        </el-form-item>


        <el-form-item>
          <el-button type="primary" @click="submitForm('userInfo')">立即注册</el-button>
          <el-button @click="resetForm('userInfo')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

  </div>
</template>

<script>
  export default {
    name: "Register",
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.userInfo.passWord) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var checkPhone = (rule, value, callback) => {
        const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/
        if (!value) {
          return callback(new Error('电话号码不能为空'))
        }
        setTimeout(() => {
          // Number.isInteger是es6验证数字是否为整数的方法,但是我实际用的时候输入的数字总是识别成字符串
          // 所以我就在前面加了一个+实现隐式转换

          if (!Number.isInteger(+value)) {
            callback(new Error('请输入数字值'))
          } else {
            if (phoneReg.test(value)) {
              callback()
            } else {
              callback(new Error('电话号码格式不正确'))
            }
          }
        }, 100)
      }
      return {
        userInfo: {
          account:'',
          passWord:'',
          name:'',
          phone:'',
          email:'',
        },
        rules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 3, max: 15, message: '至少3个字符', trigger: 'blur' }
          ],
          passWord: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入昵称', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入电话', trigger: 'blur' },
            { validator: checkPhone, trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ],
          checkPass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //发送注册请求
          this.$message({
              showClose: true,
              message: '恭喜你，注册成功！',
              duration:2000,
              type: 'success',
              offset:300,
              onClose:()=>{
                this.$router.push('/login')
              }
            });


          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  #title{
    margin: 0 auto 23px;
    text-align: center;
    font-size: 24px;
    width: 200px;
    padding: 4px 0 4px 35px;
    transition: none;
    color: #666;
    background: url("../../assets/logo.png") left no-repeat;
  }
 #register-content{
    padding: 10px;
   width: 60%;
   margin:50px auto;
   /*border: 1px solid #ebebeb;*/
   /*border-radius: 3px;*/
   /*transition:width 2s;*/
 }
</style>