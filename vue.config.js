const { defineConfig } = require('@vue/cli-service');
const UnoCSS = require('@unocss/webpack').default;
const presetUno = require('@unocss/preset-uno').default;
const presetIcons = require('@unocss/preset-icons').default;
const transformerDirectives = require('@unocss/transformer-directives').default;

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      UnoCSS({
        presets: [presetUno(), presetIcons()],
        transformers: [transformerDirectives()],
      }),
    ],
    optimization: {
      realContentHash: true,
    },
  },
});
