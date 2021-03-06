import {request} from "../request";
/*
 * 用户管理模块
 */

// 保存
export const save= (data)=>{
    return request({
        url:"/user/save",
        method:'post',
        data
    })
}

// 删除
export const batchDelete= (data)=>{
    return request({
        url:"/user/delete",
        method:'post',
        data
    })
}
// 分页查询
export const findPage= (data)=>{
    return request({
        url:"/user/findPage",
        method:'post',
        data
    })
}
// 查找用户的菜单权限标识集合
export const findPermissions = (params) => {
    return request({
        url: '/user/findPermissions',
        method: 'get',
        params
    })
}
