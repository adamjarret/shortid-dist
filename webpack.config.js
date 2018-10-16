const LicensePlugin = require('license-webpack-plugin').LicenseWebpackPlugin;
const deps = require('./scripts/_deps');
const prod = process.argv.indexOf('-p') !== -1;

module.exports = {
    entry: {
        // license-webpack-plugin configuration expects entry to have a name
        'shortid': './index.js'
    },
    output: {
        filename: deps.shortid + (prod ? '.min' : '') + '.js'
    },
    plugins: !prod ? [] : [
        new LicensePlugin({pattern: /.*/, outputFilename: 'LICENSE.[name].txt'})
    ]
};
