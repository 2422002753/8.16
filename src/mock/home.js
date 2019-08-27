// mock/home.js  只处理首页的请求
// request 请求  response  响应
// url: "/list?id=1&name=lili"  {id:1,name:'lili'}
import Mock from 'mockjs';
// 返回路由权限数组
const data = Mock.mock({
  'list|3': [
    {
      name: '@cname',
      email: '@email',
      'age|10-20': 1,
    },
  ],
});
function senList() {
  return {
    code: 200,
    data,
  };
}
function loginApi(req) {
  const { user, pass } = JSON.parse(req.body);
  // 判断用户名和密码是否合法
  if (user === 'lili' && pass === '123456') {
    return { msg: '登录成功' };
  }
  return { msg: '登录失败' };
}

export { senList, loginApi };
