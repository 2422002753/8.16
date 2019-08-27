<template>
  <i :class="classes"
     :style="styles"></i>
</template>
<script>
import '../assets/font/iconfont.css';

export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#5c6b77',
    },
    size: {
      type: Number,
      default: 12,
    },
  },
  computed: {
    classes() {
      return ['iconfont', `icon-${this.type}`];
    },
    styles() {
      return {
        color: this.color,
        'font-size': `${this.size}px`,
      };
    },
  },
};
</script>

<style>
</style>
