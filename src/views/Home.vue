<template>
  <div ref="div">
    <son1 ref="son1"></son1>
    <son2 name='李'
          money='传家宝玉玺'
          @fn="fn"></son2>
  </div>
</template>

<script>
import Son1 from '../components/Son1.vue';
import Son2 from '../components/Son2.vue';

export default {
  mounted() {
    console.log(this.$refs.div);
    this.$refs.son1.emitA();
    // this.$refs.son1  = son1 的this
    this.$refs.son1.msg = '你好';
  },
  data() {
    return {
      money: 100,
    };
  },
  components: {
    Son1,
    Son2,
  },
  methods: {
    change(value) {
      this.money = value;
    },
    fn() {
      console.log('谋朝篡位');
    },
  },
};
</script>

<style>
</style>
