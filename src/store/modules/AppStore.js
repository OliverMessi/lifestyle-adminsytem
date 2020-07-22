export default {
    state:{
        appName:"I Enjoy Living",  //应用名称
        collapse:false, //导航栏收缩状态
        themeColor: "#545c64",  // 主题颜色
        oldThemeColor: "#545c64",   // 上一次主题颜色
        menuRouteLoaded:false  // 菜单和路由是否已经加载
    },
    getters:{
        collapse(state){// 对应着上面state
            return state.collapse;
        }
    },
    mutations:{
        onCollapse(state){  // 改变收缩状态
            state.collapse = !state.collapse;
        },
        themeColor(state, themeColor){
            state.themeColor = themeColor;
        },
        oldThemeColor(state, oldThemeColor){
            state.oldThemeColor = oldThemeColor;
        },
        menuRouteLoaded(state, menuRouteLoaded){  // 改变菜单和路由的加载状态
            state.menuRouteLoaded = menuRouteLoaded;
        }
    },
    actions:{
        // 改变主题颜色
        onThemeChange ({ commit, state }, data) {
            commit('themeColor', data.themeColor)
            commit('oldThemeColor', data.oldThemeColor)
        }
    }
}