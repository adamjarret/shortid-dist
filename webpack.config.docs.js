const HTMLPlugin = require('html-webpack-plugin')
const TouchPlugin = require('webpack-touch');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

var outpath = __dirname + "/docs";

module.exports = merge(common.cfg, {
  output: {
    path: outpath
  },
  plugins: [
    new HTMLPlugin({
        template: 'src/index.html',
        inject: 'head',
        cdnPrefix: 'https://unpkg.com/shortid-dist@' + common.version + '/dist/' + common.depVersion('shortid')
    }),
    new TouchPlugin({filename: outpath + '/.nojekyll', delay: 2000})
  ]
});