<template>
  <div id="app">
    <commonHeader />
    <div class="app-content">
      <router-view />
    </div>
    <commonFooter />
  </div>
</template>
<script>
import commonHeader from "@/components/common-header/header-index.vue";
import commonFooter from "./components/common-footer/footer-index.vue";
export default {
  components: {
    commonHeader,
    commonFooter,
  },
  data() {
    return {};
  },
  mounted() {
    this.resizeFn();
    window.addEventListener("resize", this.resizeFn);
  },
  methods: {
    resizeFn() {
      const userAgent = window.navigator.userAgent;
      const isMobileUa =
        /Mobi|Android|webOS|iPhone|iPod|BlackBerry|iPad|Mobile|iemobile|opera mini|MiuiBrowser/i.test(
          userAgent
        );
      const clientWidth =
        window.document.documentElement.clientWidth ||
        window.document.body.clientWidth;
      const isMobileDevice = clientWidth < 768 || isMobileUa;
      this.$store.dispatch("toggleDeviceMode", isMobileDevice);
    },
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  background: #141414;
  padding-top: 80px;
  box-sizing: border-box;
  overflow: hidden;
  @include max768() {
    padding-top: 70px;
  }

  .app-content {
    min-height: calc(100vh - 160px);

    @include max768() {
      min-height: calc(100vh - 140px);
    }
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
