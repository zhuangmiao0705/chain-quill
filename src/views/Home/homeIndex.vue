<template>
  <div class="home-view">
    <part-1 />
    <part-2 />
    <part-3 />
  </div>
</template>

<script>
import part1 from "./components/part-1/part-index.vue";
import part2 from "./components/part-2/part-index.vue";
import part3 from "./components/part-3/part-index.vue";

export default {
  components: {
    part1,
    part2,
    part3,
  },
};
</script>

<style lang="scss" scoped>
.home-view {
  padding-bottom: 100px;
  @include max768() {
    padding-bottom: 40px;
  }
}
</style>
