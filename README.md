# shortid-dist

[![Package Version](https://img.shields.io/npm/v/shortid-dist.svg)](https://npmjs.com/package/shortid-dist)

CDN friendly build of [shortid][shortid].
The `shortid` function is exposed as a global.

## CDN

### Bundled + Minified

    <script src="https://unpkg.com/shortid-dist@1.0.5/dist/shortid-2.2.13.min.js"></script>

3 KB

### Bundled

    <script src="https://unpkg.com/shortid-dist@1.0.5/dist/shortid-2.2.13.js"></script>

31 KB

## Example

    alert(shortid());

See the [Live Demo][demo].

## Development

Follow these instructions to get a local copy of the project source code for development.

The **index.html** file in the project root can be opened directly in a browser (`file://` URL).

The CWD of the `npm` commands is assumed to be the project root folder.


### Installing

    git clone https://github.com/adamjarret/shortid-dist.git
    cd shortid-dist
    npm install

### Building

Bundle shortid with webpack (minified and unminified):

    npm run build

### Cleaning

Delete all generated files:

    npm run clean
    
## Built With

* [shortid][shortid]
* [webpack][webpack]

## Contributing

Fork the repo and submit a pull request.

## Versioning

[SemVer][semVer] is used for versioning.
For the versions available, see the [tags on this repository][tags].

## Releasing

1. Examine what will be included in the npm bundle:

        npm run pack
        
    The `npm run pack` command requires npm version 6.4.1 or later (because it uses the `--dry-run` flag).
    For older versions of npm, run `tar -tvf "$(npm pack)"` to list the contents of the generated tarball.

2. Update the links in the **README.md** and **index.html** files (and commit the changes) _before_ running `npm version`:

        npm run links -- patch
        git add README.md index.html
        git commit -m "Updated links"

3. Bump the version number in __package.json__ and create a git tag:

        npm version patch

    The `npm version` and `npm run links` command each accepts a [SemVer][semVer] argument:
     `<newversion>|major|minor|patch` (where `<newversion>` is a standard version number, ex. 1.0.0).

4. Publish a new version:

        npm publish
        git push origin master --tags
        
## Author

[Adam Jarret](https://atj.me)

## License

This project is licensed under the _BSD Zero Clause License_.
See the [LICENSE.txt][license] file for details.

shortid is licensed under the _MIT +no-false-attribs License_.
See the [LICENSE.shortid.txt][shortidLicense] file for details.

[license]: https://github.com/adamjarret/shortid-dist/blob/master/LICENSE.txt

[shortidLicense]: https://github.com/adamjarret/shortid-dist/blob/master/dist/LICENSE.shortid.txt

[shortid]: https://www.npmjs.com/package/shortid

[semVer]: https://semver.org/

[tags]: https://github.com/adamjarret/shortid-dist/tags

[demo]: https://adamjarret.github.io/shortid-dist

[webpack]: http://webpack.js.org
