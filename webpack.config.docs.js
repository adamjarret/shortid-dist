const HTMLPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common.cfg, {
  output: {
    path: __dirname + "/docs"
  },
  plugins: [
    new HTMLPlugin({
        template: 'src/index.html',
        inject: 'head',
        cdnPrefix: 'https://unpkg.com/shortid-dist@' + common.version + '/dist/' + common.depVersion('shortid')
    })
  ]
});