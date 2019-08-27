<template>
  <!--components/GroundSon.vue -->
  <div>
    孙子组件{{$attrs}}
    <button @click="$listeners.fn">
      孙子进行谋朝串位
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
