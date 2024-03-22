const define = require('@tokopedia/skipper/cli/config/define-config');

module.exports = define({
  transpilePackages: ['@nest-ui/core'],
  babel: {
    client: {
      plugins: [['@emotion/babel-plugin']],
      skipperPresetOptions: {
        importSource: '@emotion/react',
      },
    },
    server: {
      plugins: [['@emotion/babel-plugin']],
      skipperPresetOptions: {
        importSource: '@emotion/react',
      },
    },
  },
});
