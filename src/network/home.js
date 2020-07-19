import {request} from "./request";

export function getUser(){
  return request({
    url:"/home/user",
    method:'get'
  })
}

export function getMenu(){
  return request({
    url:"/home/menu",
    method:'get',
  })
}