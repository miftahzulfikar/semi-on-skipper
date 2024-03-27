const define = require('@tokopedia/skipper/cli/config/define-config');
const SemiWebpackPlugin = require('@douyinfe/semi-webpack-plugin').default;

module.exports = define({
  webpack(config) {
    const options = config;

    options.plugins = config.plugins.concat(
      new SemiWebpackPlugin({
        theme: '@semi-bot/semi-theme-tuxsemi',
      }),
    );

    return options;
  },
});
