const router = [
  {
    name: 'cart',
    children: [
      {
        name: 'list',
      },
      {
        name: 'a',
      },
    ],
  },
  {
    name: 'ccc',
  },
];
const auth = ['list', 'a'];

function format(router) {
  return router.filter((item) => {
    if (auth.includes(item.name)) {
      // 过滤儿子
      if (item.children) {
        item.children = format(item.children);
      }
      return true;
    }
  });
}
const res = format(router);
console.log(res);
