const pkg = require('../package.json');

// Return package name (with version concatenated if defined in package.json dependencies)
function depVersion(dep)
{
    var version = pkg.dependencies[dep];
    return dep + (!version ? '' : ('-' + version.replace(/[^\d\.]/g, '')));
}

module.exports = depVersion;
module.exports.version = pkg.version;
module.exports.shortid = depVersion('shortid');
