<template>
  <!-- components/Son1.vue -->
  <div>
    这是大儿子

    <button @click="emit">点击传值</button>
    <div>{{msg}}</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello',
    };
  },
  methods: {
    emitA() {
      this.msg = 'hello world';
    },
    emit() {
      // new Vue 的实例
      this.$bus.$emit('toS');
    },
  },
  mounted() {},
};
</script>

<style>
</style>
