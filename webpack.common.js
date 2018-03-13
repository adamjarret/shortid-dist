const pkg = require('./package.json');
const prod = process.argv.indexOf('-p') !== -1;

function depVersion(dep)
{
    var version = pkg.dependencies[dep];
    return dep + (!version ? '' : ('-' + version.replace(/[^\d\.]/g, '')));
}

module.exports = {
    cfg: {
        entry: {
          shortid: './index.js'
        },
        output: {
            filename: function(ent) {
                return depVersion(ent.chunk.name) + (prod ? '.min' : '') + '.js'
            }
        }
    },
    prod: prod,
    version: pkg.version,
    depVersion: depVersion
};