import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import mock from 'mock/index'
import i18n from './i18n'
import './theme/theme-67da9a/index.css'
import store from './store'
import 'font-awesome/css/font-awesome.min.css'
import 'assets/iconfont/iconfont.css'
import SlideVerify from 'vue-monoplasty-slide-verify';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(SlideVerify);
new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')
