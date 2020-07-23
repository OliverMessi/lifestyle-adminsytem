import {request} from "../request";
/*
 * 菜单管理模块
 */
export const findNavTree = (params) => {
    return request({
        url: '/menu/findNavTree',
        method: 'get',
        params
    })
}