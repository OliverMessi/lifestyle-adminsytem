import Mock from 'mockjs'

Mock.mock('http://localhost:8002/user',{
  'name':'@name',//随机生成姓名
  'email':'@email',//随机生成邮箱
  'age|1-10':5
});
Mock.mock('http://localhost:8002/menu',{
  'id':'@increment',//
  'name':'menu',//
  'order|10-20':12
});
