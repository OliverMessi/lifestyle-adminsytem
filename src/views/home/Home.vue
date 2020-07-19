<template>
  <div class="page">
    <h2>Home Page</h2>
    <el-button type="primary" @click="getUser()">获取用户信息</el-button>
    <el-button type="primary" @click="getMenu()">获取菜单信息</el-button>
  </div>
</template>

<script>
 import {getMenu,getUser} from 'network/home'

  export default {
    name: "Home",
    methods:{
      getUser(){
        getUser()
            .then(function (res) {
              alert(JSON.stringify(res.data));
            }).catch(function (res) {
            alert(res);
        })
      },
      getMenu(){
        getMenu()
            .then(function (res) {
              alert(JSON.stringify(res.data));
            }).catch(function (res) {
          alert(res);
        })
      }
    }
  }
</script>

<style scoped>

</style>