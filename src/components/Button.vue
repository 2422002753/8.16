<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return ['btn', `btn-${this.type}`];
    },
  },
};
</script>

<style>
.btn {
  outline: none;
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 5px 15px 6px;
  font-size: 12px;
  border-radius: 4px;
  transition: color 0.2s linear, background-color 0.2s linear,
    border 0.2s linear, box-shadow 0.2s linear;
  color: #515a6e;
  background-color: #fff;
  border-color: #dcdee2;
}
.btn:hover {
  border-color: #2d8cf0;
}
.btn-primary {
  background-color: #2d8cf0;
  color: #fff;
}
</style>
