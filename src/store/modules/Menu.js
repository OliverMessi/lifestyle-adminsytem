export default {
    state: {
        navTree: [],  // 菜单树
    },
    getters: {

    },
    mutations: {
        setNavTree(state, menuTree){  // 设置菜单树
            state.navTree = menuTree;
        }
    },
    actions: {
    }
}