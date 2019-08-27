// routerautu.js
// pid -1 表示一级路由 pid的父请等于上级的id auth 有权限就会有auth 标志
const authlist = () => [
  {
    parentid: -1,
    name: '购物车',
    id: 1,
    auth: 'cart',
  },
  {
    parentid: 1,
    name: '购物车列表',
    id: 4,
    auth: 'cart-list',
  },
  {
    parentid: 4,
    name: '彩票',
    id: 5,
    auth: 'lott',
  },
  {
    parentid: 4,
    name: '商品',
    id: 6,
    auth: 'product',
  },
  {
    parentid: -1,
    name: 'my',
    id: 2,
    auth: 'cart',
  },
];

export { authlist };
export default {};
