import Vue from 'vue'
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
// 注册i18n实例
const  i18n = new VueI18n({
  locale:'zh_cn',
  messages:{
    'zh_cn':require('assets/language/zh_cn.json'),
    'en_us':require('assets/language/en_us.json'),
  }
});

export  default i18n