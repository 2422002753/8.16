<template>
  <!-- components/Son.vue -->
  <div>
    这是儿子组件
    <button @click="modify">修改</button>
    <button @click="modify1">input事件修改</button>
  </div>
</template>

<script>
export default {
  methods: {
    modify1() {
      this.$emit('input', 200);
    },
    modify() {
      this.$emit('update:m', 300);
      // 针对的是.sync
    },
  },
};
</script>

<style>
</style>
