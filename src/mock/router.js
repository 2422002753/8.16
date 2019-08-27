// routerautu.js
const authlist = () => [
    // pid -1 表示一级路由 pid的父请等于上级的id auth 有权限就会有auth
        {
            pid: -1,
            name: '购物车',
            id: 1,
            auth: 'cart',
        },
        {
            pid: 1,
            name: '购物车列表',
            id: 4,
            auth: 'cart-list',
        },
        {
            pid: 4,
            name: '彩票',
            id: 5,
            auth: 'lott',
        },
        {
            pid: 4,
            name: '商品',
            id: 6,
            auth: 'product',
        },
    ];
export { authlist };
export default {};
