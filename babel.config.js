module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  comments: false,
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
