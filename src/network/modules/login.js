import {request} from "../request";

export function login(){
  return request({
    url: '/login',
    method: 'post',
    data:''
  })
}

export function logout(){
    return request({
        url: '/logout',
        method: 'get',
    })
}