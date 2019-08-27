// api/index.js
// eslint-disable-next-line import/no-cycle
import myAjax from '../lib/axios';

const getList = () => myAjax.request({
  url: '/list',
});
// 请求路由权限
const getAuth = () => myAjax.request({
  url: '/auth',
});
// eslint-disable-next-line import/prefer-default-export
export { getList, getAuth };
