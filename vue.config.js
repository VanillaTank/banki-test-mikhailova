const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@use "@/assets/styles/variables" as *;',
      },
    },
  },
  chainWebpack: (config) => {
    // увеличить рекомендуемый размер файла ассета до самого большого файла шрифта
    const maxFontWeight = 380_000
    config.performance.maxAssetSize(maxFontWeight)

    config.module.rules.delete('svg')
    // правило: обрабатывать SVG через vue-svg-loader
    config.module
      .rule('svg-component')
      .test(/\.svg$/)
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .end()
  },
})
