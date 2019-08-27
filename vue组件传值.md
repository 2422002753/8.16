# vue 组件传值

1. props 父传子 数字、对象、数组、布尔值、对象的属性 都需要 v-bind: 缩写成 :
2. $emit 和 $on 子传父

```js
//子组件 更新m的值到200 .sync是一种语法糖
this.$emit('update:m', 200);
//父组件 money 和子组件的m值同步
<Son :m.sync="money"></Son>
```

```js
//子组件 v-model 只能针对value
 this.$emit('input', 200);
// 父组件通过@value @input的事件进行修改
 <Son @value='money'
      @input="change"></Son>
 // 事件
change(value) {
     this.money = value;
}
 //可以简写成下面
 <Son v-model='money'></Son>

```

3. eventbus 简单项目可以用 eventbus 进行传值

- 把\$bus 变成一个 vue 的实例 同一个 vue 实例

```js
Vue.prototype.$bus = new Vue();
this.$bus.$emit('toS');
this.$bus.$on('toS', () => {
  console.log(345);
});
```

4. refs  组件和 dom 上
   ref 如果放在组件上 拿到的是挂到的组件上的实例
   ref 如果放在元素上 拿到是当前元素的 dom

5. $attrs 和 $listeners 从上到下传递
   $attrs 传递属性  继续往下传 用 v-bind 
   $listeners 传递的是事件 继续往下传 v-on
6. slot
7. vuex 所有组件都能共享状态
   //作业 辅助函数的的模块使用 mapActions mapMumations MapGetters
   rootState 和 rootGetters 可以拿到根 vuex 的 state 和 getters
   // commit 派发到全局 作业
