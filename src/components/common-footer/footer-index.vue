<template>
  <div>
    <mobileFooter v-if="isMobileMode" />
    <pcHFooter v-else />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import pcHFooter from "./pc-footer.vue";
import mobileFooter from "./mobile-footer.vue";

export default {
  components: {
    pcHFooter,
    mobileFooter,
  },
  computed: {
    ...mapGetters(["isMobileMode"]),
  },
};
</script>

<style lang="scss" scoped></style>
