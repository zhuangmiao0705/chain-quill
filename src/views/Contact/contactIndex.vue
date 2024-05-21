<template>
  <div>
    <mobileContact v-if="isMobileMode" />
    <pcContact v-else />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import pcContact from "./pc-contact.vue";
import mobileContact from "./mobile-contact.vue";

export default {
  components: {
    pcContact,
    mobileContact,
  },
  computed: {
    ...mapGetters(["isMobileMode"]),
  },
};
</script>

<style lang="scss" scoped></style>
