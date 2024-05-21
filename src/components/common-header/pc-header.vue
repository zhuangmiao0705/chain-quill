<template>
  <div class="header">
    <img class="header-logo" src="@/assets/logo.png" alt="" />
    <div class="header-tab">
      <div
        :class="{ active: activeName === 'home' }"
        @click="changeTab('home')"
      >
        Home
      </div>
      <div
        :class="{ active: activeName === 'contact' }"
        @click="changeTab('contact')"
      >
        Contact Us
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isMobileMode"]),
    activeName() {
      return this.$route.name;
    },
  },
  data() {
    return {};
  },
  methods: {
    changeTab(name) {
      if (name === this.activeName) {
        return;
      }
      this.$router.push({ name });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 80px;
  padding: 0 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1a1a1a;
  z-index: 99;

  &-logo {
    width: 240px;
  }
  &-tab {
    display: flex;
    height: 100%;
    align-items: center;
    > div {
      font-family: PingFangSC, PingFang SC;
      font-size: 26px;
      height: 30px;
      line-height: 30px;
      color: #fff;
      cursor: pointer;
      &:nth-child(2) {
        margin-left: 48px;
      }
      &.active {
        padding: 10px 20px;
        border-radius: 25px;
        @include gradientBtn();
      }
    }
  }
}
</style>
