<template>
  <div>
    <mobilePart v-if="isMobileMode" />
    <pcPart v-else />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import mobilePart from "./mobile-part-3.vue";
import pcPart from "./pc-part-3.vue";

export default {
  components: {
    pcPart,
    mobilePart,
  },
  computed: {
    ...mapGetters(["isMobileMode"]),
  },
};
</script>

<style lang="scss" scoped></style>
