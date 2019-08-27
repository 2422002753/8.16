# axios 封装

axios.create() 会创建一个 axios 实例

# mockjs 的使用

1. src 文件目录下面建立 mock 文件夹，mock 下面创建 index.js 文件
2. main.js 引入 mock/index.js

```js
//根据环境变量决定是否使用mock进行数据模拟
if(process.env.NODE_ENV=='development')import('./mock')
import()  //es6 里面 懒加载
```

3. src 里面建立一个 api 文件夹  文件夹里面创建 index.js (放请求)
4. mockjs 可以拦截 ajax 请求 可以拦截匹配到的路径 可以一个页面  拆分出来一个 js 去做响应处理/或者一个功能模块拆分成一个 js
5. src 建立一个 lib 文件夹 工具类

作业 博客 写 axios 封装过程 vuex 使用



