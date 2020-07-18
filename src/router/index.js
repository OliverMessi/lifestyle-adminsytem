import Vue from 'vue'
import  VueRouter from 'vue-router'

const Home = () => import('../views/home/Home');
const NotFound = ()=>import('../views/404');
const Login = ()=>import('../views/Login');

//1.安装插件
Vue.use(VueRouter)

//2.创建router
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  ,{
    path: '/404',
    name: 'notFound',
    component: NotFound
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router