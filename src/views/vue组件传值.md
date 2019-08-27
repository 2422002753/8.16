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
