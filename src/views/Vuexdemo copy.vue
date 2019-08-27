<template>
  <!-- views/Vuexdemo.vue -->
  <div>
    Vuexdemo
    {{$store.state.user.name}}
    {{name}}
    <button @click="add">点击派发动作到action</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState } = createNamespacedHelpers('user');
// import { mapState } from 'vuex';

export default {
  methods: {
    add() {
      // 模块派发动作 模块名/事件名
      this.$store.dispatch('user/add');
    },
  },
  computed: {
    // ...mapState({
    //   name1: state => state.user.name,
    // }),
    ...mapState(['name']),
  },
};
</script>

<style>
</style>
