import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

import AppStore from './modules/AppStore'
import Menu from './modules/Menu'

const store = new vuex.Store({
    modules:{
        app:AppStore,
        menu:Menu
    }
});
export default store

