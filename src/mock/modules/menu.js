// 获取菜单树
const menuTreeData = {
    "code": 200,
    "msg": null,
    "data": [
        {
            "menuId": 1,
            "parentId": 0,
            "name": "系统管理",
            "url": null,
            "perms": null,
            "type": 0,
            "icon": "el-icon-setting",
            "orderNum": 0,
            "createBy": null,
            "createTime": null,
            "lastUpdateBy": null,
            "lastUpdateTime": null,
            "delFlag": 0,
            "children": [
                {
                    "menuId": 2,
                    "parentId": 1,
                    "name": "用户管理",
                    "url": "/sys/user",
                    "perms": null,
                    "type": 1,
                    "icon": "el-icon-service",
                    "orderNum": 1,
                    "createBy": null,
                    "createTime": null,
                    "lastUpdateBy": null,
                    "lastUpdateTime": null,
                    "delFlag": 0,
                    "children": []
                },
                {
                    "menuId": 3,
                    "parentId": 1,
                    "name": "机构管理",
                    "url": "/sys/dept",
                    "perms": null,
                    "type": 1,
                    "icon": "el-icon-news",
                    "orderNum": 2,
                    "createBy": null,
                    "createTime": null,
                    "lastUpdateBy": null,
                    "lastUpdateTime": null,
                    "delFlag": 0,
                    "children": []
                },
                {
                    "menuId": 4,
                    "parentId": 1,
                    "name": "角色管理",
                    "url": "/sys/role",
                    "perms": null,
                    "type": 1,
                    "icon": "el-icon-view",
                    "orderNum": 4,
                    "createBy": null,
                    "createTime": null,
                    "lastUpdateBy": null,
                    "lastUpdateTime": null,
                    "delFlag": 0,
                    "children": []
                },
                {
                    "menuId": 5,
                    "parentId": 1,
                    "name": "菜单管理",
                    "url": "/sys/menu",
                    "perms": null,
                    "type": 1,
                    "icon": "el-icon-menu",
                    "orderNum": 5,
                    "createBy": null,
                    "createTime": null,
                    "lastUpdateBy": null,
                    "lastUpdateTime": null,
                    "delFlag": 0,
                    "children": []
                },
                {
                    "menuId": 6,
                    "parentId": 1,
                    "name": "SQL监控",
                    "url": "/druid/sql",
                    "perms": null,
                    "type": 1,
                    "icon": "el-icon-info",
                    "orderNum": 6,
                    "createBy": null,
                    "createTime": null,
                    "lastUpdateBy": null,
                    "lastUpdateTime": null,
                    "delFlag": 0,
                    "children": []
                },
                {
                    "menuId": 8,
                    "parentId": 1,
                    "name": "系统日志",
                    "url": "/sys/log",
                    "perms": "sys:log:list",
                    "type": 1,
                    "icon": "el-icon-info",
                    "orderNum": 7,
                    "createBy": null,
                    "createTime": null,
                    "lastUpdateBy": null,
                    "lastUpdateTime": null,
                    "delFlag": 0,
                    "children": []
                }
            ]
        },
        {
            "menuId": 25,
            "parentId": 0,
            "name": "内容管理",
            "url": null,
            "perms": null,
            "type": 0,
            "icon": "el-icon-document",
            "orderNum": 0,
            "createBy": null,
            "createTime": null,
            "lastUpdateBy": null,
            "lastUpdateTime": null,
            "delFlag": 0,
            "children": [
                {
                    "menuId": 26,
                    "parentId": 25,
                    "name": "栏目管理",
                    "url": "/content/category",
                    "perms": null,
                    "type": 1,
                    "icon": "el-icon-tickets",
                    "orderNum": 1,
                    "createBy": null,
                    "createTime": null,
                    "lastUpdateBy": null,
                    "lastUpdateTime": null,
                    "delFlag": 0,
                    "children": []
                },
                {
                    "menuId": 27,
                    "parentId": 25,
                    "name": "文章管理",
                    "url": "/content/artical",
                    "perms": null,
                    "type": 1,
                    "icon": "el-icon-tickets",
                    "orderNum": 2,
                    "createBy": null,
                    "createTime": null,
                    "lastUpdateBy": null,
                    "lastUpdateTime": null,
                    "delFlag": 0,
                    "children": []
                }
            ]
        },
        {
            "menuId": 28,
            "parentId": 0,
            "name": "使用案例",
            "url": null,
            "perms": null,
            "type": 0,
            "icon": "el-icon-picture-outline",
            "orderNum": 0,
            "createBy": null,
            "createTime": null,
            "lastUpdateBy": null,
            "lastUpdateTime": null,
            "delFlag": 0,
            "children": [
                {
                    "menuId": 29,
                    "parentId": 28,
                    "name": "国际化",
                    "url": "/demo/i18n",
                    "perms": null,
                    "type": 1,
                    "icon": "el-icon-edit",
                    "orderNum": 1,
                    "createBy": null,
                    "createTime": null,
                    "lastUpdateBy": null,
                    "lastUpdateTime": null,
                    "delFlag": 0,
                    "children": []
                },
                {
                    "menuId": 30,
                    "parentId": 28,
                    "name": "换皮肤",
                    "url": "/demo/theme",
                    "perms": null,
                    "type": 1,
                    "icon": "el-icon-picture",
                    "orderNum": 2,
                    "createBy": null,
                    "createTime": null,
                    "lastUpdateBy": null,
                    "lastUpdateTime": null,
                    "delFlag": 0,
                    "children": []
                }
            ]
        }
    ]
}


export function findTree() {
    return {
        url: 'http://localhost:8002/api/menu/findTree',
        type: 'get',
        data: menuTreeData
    }
}
