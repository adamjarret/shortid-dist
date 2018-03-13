const LicensePlugin = require('license-webpack-plugin').LicenseWebpackPlugin;
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common.cfg, {
  plugins: [
    new LicensePlugin({
      pattern: /.*/,
      outputFilename: 'LICENSE.[name].txt'
    })
  ]
});