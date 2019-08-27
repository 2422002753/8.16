<template>
  <!-- components/Son2.vue -->
  <div>
    <br />
    -------------------
    这是二儿子
    父亲传递过来的属性 钱和姓氏

    <button>儿子组件点击事件</button>
    <br />
    -------------------
    <br />
    <GroundSon v-bind="$attrs"
               v-on="$listeners"></GroundSon>
    -------------------
    <br />
  </div>
</template>

<script>
import GroundSon from './GroundSon.vue';

export default {
  inheritAttrs: false, // 不显示元素上attrs属性
  components: {
    GroundSon,
  },
  mounted() {
    this.$nextTick(() => {
      // $nextTick dom更新加载全部完成
      this.$bus.$on('toS', () => {
        console.log(345);
      });
    });
  },
  methods: {},
};
</script>

<style>
</style>
