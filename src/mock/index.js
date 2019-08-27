// mock/index.js
import Mock from 'mockjs';
import { senList, loginApi } from './home';
import { authlist } from './routerauth';
// 配置ajax请求延时时间
Mock.setup({
  timeout: 500,
});
// 正则

Mock.mock(/\/list/, senList);
Mock.mock(/\/login/, loginApi);
Mock.mock(/\/auth/, authlist);
