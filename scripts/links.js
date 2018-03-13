'use strict';

const fs = require('fs');
const semver = require('semver');
const deps = require('./_deps');
const argv = process.argv.slice(2);
const newVersion = !argv.length ? deps.version : bump(deps.version, argv[0]);
const reDep = /shortid-[\d\.]+/g;
const reCDN = /(https:\/\/unpkg.com\/shortid-dist@)([\d\.]+)/g;

if(!newVersion) {
    error('Invalid semantic version');
    process.exit(1);
}

console.log('shortid version:', deps.shortid);
console.log('Package version:', deps.version);
console.log('.   New version:', newVersion);

// Run tasks in parallel
replace('README.md');
replace('index.html');

// Replace version patterns with current versions
function replace(filePath)
{
    fs.readFile(filePath, 'utf8', function(err, text) {
        if(err) {
            return error(err);
        }
        text = text.replace(reCDN, '$1' + newVersion).replace(reDep, deps.shortid + '.');
        fs.writeFile(filePath, text, 'utf8', function(err) {
            return err ? error(err) : console.log('>> %s', filePath);
        });
    });
}

// Adjust version number using same mechanism as `npm version`
function bump(oldVersion, newVersionOrLevel)
{
    //. If a valid version number was provided, return it. Otherwise, return the oldVersion bumped by the provided level.
    return semver.valid(newVersionOrLevel) || semver.inc(oldVersion, newVersionOrLevel);
}

// Display error message
function error(err)
{
    console.error('\x1b[31m!! %s\x1b[0m', err.message || err);
}
