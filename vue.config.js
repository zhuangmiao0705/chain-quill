const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      ["/dev-api"]: {
        target: "http://120.46.62.110:8081",
        changeOrigin: true,
        pathRewrite: {
          ["^/dev-api"]: "/",
        },
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: { outputStyle: "expanded" },
        additionalData: '@import "@/scss/variable.scss";',
      },
    },
  },
});
