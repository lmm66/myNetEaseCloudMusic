<template>
  <div>{{ res }}</div>
</template>

<script>
export default {
  data() {
    return {
      res: this.$route.query.q,
    };
  },
};
</script>

<style>
</style>