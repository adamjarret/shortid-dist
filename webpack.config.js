const HTMLPlugin = require('html-webpack-plugin')
const LicensePlugin = require('license-webpack-plugin').LicenseWebpackPlugin;
const pkg = require('./package.json');

// Determine if env is production
const prod = process.argv.indexOf('-p') !== -1;

// Get basename for generated file
const shortidVersion = depVersion('shortid');

// Configure webpack plugins
const plugins = !prod ? []: [
    new LicensePlugin({
          pattern: /.*/,
          outputFilename: 'LICENSE.[name].txt'
        }),
    new HTMLPlugin({
        template: 'src/index.html',
        filename: __dirname + '/index.html',
        inject: false,
        shortidVersion: shortidVersion,
        cdnPrefix: 'https://unpkg.com/shortid-dist@' + pkg.version + '/dist/' + shortidVersion
    })
];

// Return package name (with version concatenated if defined in package.json dependencies)
function depVersion(dep)
{
    var version = pkg.dependencies[dep];
    return dep + (!version ? '' : ('-' + version.replace(/[^\d\.]/g, '')));
}

module.exports = {
    entry: {
        // license-webpack-plugin configuration expects entry to have a name 
        'shortid': './index.js'
    },
    output: {
        filename: shortidVersion + (prod ? '.min' : '') + '.js'
    },
    plugins: plugins
};
