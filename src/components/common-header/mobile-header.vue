<template>
  <div class="mobile-header">
    <img class="logo" src="@/assets/logo.png" alt="" />
    <img
      v-if="showMenu"
      class="menu-close"
      @click="showOrHideMenu"
      src="@/assets/close.png"
      alt=""
    />
    <img
      v-else
      class="menu-icon"
      @click="showOrHideMenu"
      src="@/assets/menu.png"
      alt=""
    />
    <div v-if="showMenu" class="menu-list">
      <div class="menu-item">
        <div
          v-for="(item, i) in menuList"
          :key="i"
          :class="{ 'menu-active': activeName === item.pathName }"
          @click="toPage(item.pathName)"
        >
          {{ item.label }}
          <i></i>
        </div>
      </div>
      <mobileFooterVue />
    </div>
  </div>
</template>

<script>
import mobileFooterVue from "../common-footer/mobile-footer.vue";

export default {
  components: {
    mobileFooterVue,
  },
  data() {
    return {
      showMenu: false,
      menuList: [
        { pathName: "home", label: "HOME" },
        { pathName: "contact", label: "CONTACT US" },
      ],
    };
  },
  computed: {
    activeName() {
      return this.$route.name;
    },
  },
  methods: {
    showOrHideMenu() {
      this.showMenu = !this.showMenu;
    },
    toPage(pathName) {
      if (pathName === this.$route.name) {
        return;
      }
      this.showMenu = false;
      this.$router.push({ name: pathName });
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1a1a1a;
  padding: 0 14px 0 20px;
  z-index: 999;
  .logo {
    width: 160px;
  }
  .menu-close {
    width: 18px;
  }
  .menu-icon {
    width: 18px;
  }
  .menu-list {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    .menu-item {
      position: relative;
      height: calc(100vh - 140px);
      background: #1a1a1a;
      z-index: 999;
      > div {
        padding: 0 20px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: PingFangSC, PingFang SC;
        font-weight: 600;
        font-size: 14px;
        color: #6f6f6f;
        line-height: 20px;
        text-transform: uppercase;

        > i {
          width: 8px;
          height: 8px;
          border-right: 2px solid #6f6f6f;
          border-bottom: 2px solid #6f6f6f;
          transform: rotate(-45deg);
        }
        &.menu-active {
          color: #fff;
          background: #000000;
          > i {
            border-color: #fff;
          }
        }
      }
    }
  }
}
</style>
