import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

import AppStore from './modules/AppStore'

const store = new vuex.Store({
    modules:{
        app:AppStore
    }
});
export default store

