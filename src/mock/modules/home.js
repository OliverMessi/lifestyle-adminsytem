// 获取用户信息
export function getUser () {
  return {
    // isOpen: false,
    url: 'http://localhost:8002/api/home/user',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'data': {
        'id': '@increment',
        'name': '@name', // 随机生成姓名
        'email': '@email', // 随机生成姓名
        'age|10-20': 12
        // 其他数据
      }
    }
  }
}

// 获取菜单信息
export function getMenu () {
  return {
    // isOpen: false,
    url: 'http://localhost:8002/api/home/menu',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'data': {
        'id': '@increment',
        'name': 'menu', // 随机生成姓名
        'order|10-20': 12
        // 其他数据
      }
    }
  }
}