import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import mock from 'mock/index'
import i18n from './i18n'
import './theme/theme-67da9a/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router,
  i18n
}).$mount('#app')
