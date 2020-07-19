import Vue from 'vue'
import  VueRouter from 'vue-router'

const Home = () => import('../views/home/Home');
const User = () => import('../views/home/childCnps/User');
const Menu = () => import('../views/home/childCnps/Menu');
const Introduce = () => import('../views/home/childCnps/Introduce');
const Dept = () => import('../views/home/childCnps/Dept');
const Role = () => import('../views/home/childCnps/Role');
const Log = () => import('../views/home/childCnps/Log');
const NotFound = ()=>import('../views/error/Error');
const Login = ()=>import('../views/login/Login');

//1.安装插件
Vue.use(VueRouter)

//2.创建router
const routes = [
  {
    path: '/',
    name: '首页',
    component: Home,
    children: [
      { path: '', component: Introduce, name: '系统介绍' },
      { path: '/main', component: Introduce, name: '系统介绍' },
      { path: '/user', component: User, name: '用户管理' },
      { path: '/menu', component: Menu, name: '菜单管理' },
      { path: '/dept', component: Dept, name: '机构管理' },
      { path: '/role', component: Role, name: '角色管理' },
      { path: '/log', component: Log, name: '日志管理' }
    ]
  },
  {
    path: '/login',
    name: '登录',
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

router.beforeEach((to, from, next) => {
  // 登录界面登录成功之后，会把用户信息保存在会话
  // 存在时间为会话生命周期，页面关闭即失效。
  let user = sessionStorage.getItem('user');
  if (to.path == '/login') {
    // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
    if(user) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    // 如果访问非登录界面，且户会话信息不存在，代表未登录，则跳转到登录界面
    if (!user) {
      next({ path: '/login' })
    } else {
      next()
    }
  }
})
export default router