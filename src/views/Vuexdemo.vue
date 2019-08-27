<template>
  <div>
    {{count}}
    <button @click="addc(3)">点击加1</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      count: state => state.user1.count,
    }),
  },
  methods: {
    ...mapActions(['addc']),
  },
};
</script>

<style>
</style>
