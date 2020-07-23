import axios from 'axios'
import config from './config'
import Cookies from "js-cookie";
import router from 'router'
export function request(options) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: config.baseURL,
    timeout: config.timeout,
    headers: config.headers
  });
  //2.axios的拦截器
  //2.1请求拦截的作用
  instance.interceptors.request.use(
      config => {
        //console.log(config);
        //1.比如config中的一些信息不符合服务器的要求

        //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标

        //3.某些网络请求（比如登录()）,必须携带一些特殊的信息
        let token = Cookies.get('token')
        if (token) {
            config.headers.token = token
        } else {
          // 重定向到登录页面
          router.push('/login')
        }
        return config;
      },
      err => {
        // 1. 判断请求超时
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
          console.log('timeout请求超时')
          // return service.request(originalRequest);// 再重复请求一次
        }
        // 2. 需要重定向到错误页面
        const errorInfo = error.response
        console.log(errorInfo)
        if (errorInfo) {
          error = errorInfo.data  // 页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
          const errorStatus = errorInfo.status; // 404 403 500 ...
          router.push({
            path: `/error/${errorStatus}`
          })
        }
        return Promise.reject(error);
      });
  //2.2响应拦截
  instance.interceptors.response.use(
      res => {
        let data;
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        if (res.data == undefined) {
          data = JSON.parse(res.request.responseText)
        } else {
          data = res.data
        }
        // 根据返回的code值来做不同的处理
        // switch (data.rc) {
        //   case 1:
        //     console.log(data.desc)
        //     break;
        //   case 0:
        //     store.commit('changeState')
        //     // console.log('登录成功')
        //   default:
        // }
        // 若不是正确的返回code，且已经登录，就抛出错误
        // const err = new Error(data.desc)
        // err.data = data
        // err.response = response
        // throw err

        return data;
      },
      err => {
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误'
              break
            case 401:
              err.message = '未授权，请登录'
              break
            case 403:
              err.message = '拒绝访问'
              break
            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`
              break
            case 408:
              err.message = '请求超时'
              break
            case 500:
              err.message = '服务器内部错误'
              break
            case 501:
              err.message = '服务未实现'
              break
            case 502:
              err.message = '网关错误'
              break
            case 503:
              err.message = '服务不可用'
              break
            case 504:
              err.message = '网关超时'
              break
            case 505:
              err.message = 'HTTP版本不受支持'
              break
            default:
          }
        }
        return Promise.reject(err) // 返回接口返回的错误信息
      });
  //3.发送真正的网络请求
  return instance(options)
}