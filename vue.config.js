const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/variables.scss";`
      }
    }
  },
  chainWebpack: (config) => {
    config.module.rules.delete('svg');
    // правило: обрабатывать SVG через vue-svg-loader
    config.module
      .rule('svg-component')
      .test(/\.svg$/)
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .end();
  },
})
