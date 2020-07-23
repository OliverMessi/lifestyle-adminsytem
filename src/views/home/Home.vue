<template>
  <div class="container">
    <!-- 导航菜单栏 -->
    <MenuBar></MenuBar>
    <!-- 头部区域 -->
    <HeadBar></HeadBar>
    <!-- 主内容区域 -->
    <main-content/>
  </div>
</template>

<script>
  import MenuBar from './childCnps/MenuBar'
  import HeadBar from './childCnps/HeadBar'
  import MainContent from './childCnps/MainContent'

  export default {
    name: "Home",
    components:{
        HeadBar,
        MenuBar,
        MainContent
    },
  }
</script>

<style scoped>
  .container {
    position:absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    /*background: #4b5f6e;*/
  }
</style>