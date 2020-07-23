<template>
    <div class="menu-bar-container">
        <!-- logo -->
        <div class="logo" :style="{'background-color':themeColor}" :class="collapse?'menu-bar-collapse-width':'menu-bar-width'">
            <img :src="this.logo" /> <div>{{collapse?'':appName}}</div>
        </div>
        <!-- 导航菜单 -->
        <el-menu default-active="1" :class="collapse?'menu-bar-collapse-width':'menu-bar-width'" @open="handleopen" @close="handleclose" @select="handleselect" :collapse="collapse">
           <!--导航菜单树组件，动态加载菜单-->
            <menu-tree v-for="item in menuTree" :key="item.id" :menu="item"></menu-tree>
        </el-menu>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import MenuTree from 'components/menuTree/MenuTree'

    export default {
        name: "MenuBar",
        data() {
            return {
                isCollapse: false,
                logo: "",
            };
        },
        components:{
            MenuTree
        },
        methods: {
            handleopen() {
                console.log('handleopen');
            },
            handleclose() {
                console.log('handleclose');
            },
            handleselect(a, b) {
                console.log('handleselect');
            },
        },
        mounted() {
            this.logo = require("assets/logo.png");
        },
        computed:{
            ...mapState({
                appName:state=>state.app.appName,
                collapse:state=>state.app.collapse,
                themeColor: state=>state.app.themeColor,
                menuTree: state=>state.menu.menuTree,
            })
        }
    }
</script>

<style scoped lang="scss">
    .menu-bar-container {
        .el-menu {
            position:absolute;
            top:60px;
            bottom: 0px;
            text-align: left;
        }
        .logo {
            position:absolute;
            top: 0px;
            height: 60px;
            line-height: 60px;
            background: #4b5f6e;
            img {
                width: 40px;
                height: 40px;
                border-radius: 0px;
                margin: 10px 10px 10px 10px;
                float: left;
            }
            div {
                font-size: 22px;
                color: white;
                text-align: left;
            }
        }
        .menu-bar-width {
            width: 200px;

        }
        .menu-bar-collapse-width {
            width: 65px;
        }
    }
</style>