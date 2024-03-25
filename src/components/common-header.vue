<template>
  <div class="header">
    <img class="header-logo" src="@/assets/logo.png" alt="" />
    <div class="header-tab">
      <div :class="{ active: activeTab === 'home' }" @click="changeTab('home')">
        Home
      </div>
      <div
        :class="{ active: activeTab === 'contact' }"
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
  },
  data() {
    return {
      activeTab: this.$route.name,
    };
  },
  methods: {
    changeTab(name) {
      if (name === this.activeTab) {
        return;
      }
      this.activeTab = name;
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
  height: 100px;
  padding: 0 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1a1a1a;
  z-index: 99;

  &-logo {
    width: 262px;
    height: 56px;
  }
  &-tab {
    display: flex;
    height: 100%;
    align-items: center;
    > div {
      font-family: PingFangSC, PingFang SC;
      font-size: 30px;
      height: 40px;
      line-height: 40px;
      color: #fff;
      cursor: pointer;
      &:nth-child(2) {
        margin-left: 48px;
      }
      &.active {
        padding: 10px 20px;
        border-radius: 44px;
        @include gradientBtn();
      }
    }
  }
}
</style>
