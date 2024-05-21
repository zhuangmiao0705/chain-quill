<template>
  <div>
    <mobileHeader v-if="isMobileMode" />
    <pcHeader v-else />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import pcHeader from "./pc-header.vue";
import mobileHeader from "./mobile-header.vue";

export default {
  components: {
    pcHeader,
    mobileHeader,
  },
  computed: {
    ...mapGetters(["isMobileMode"]),
  },
};
</script>

<style lang="scss" scoped></style>
