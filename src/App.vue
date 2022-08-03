<template>
  <div id="app">
    <top></top>
    <index></index>
  </div>
</template>

<script>
import top from "./components/top.vue";
import index from "./components/index.vue";
export default {
  name: "App",
  components: {
    top,
    index,
  },
};
</script>

<style>
</style>
