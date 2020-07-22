import {request} from "../request";
/*
 * 菜单管理模块
 */
export function findMenuTree(){
    return request({
        url: '/menu/findTree',
        method: 'get',
    })
}