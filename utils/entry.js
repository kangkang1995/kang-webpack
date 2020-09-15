const path = require('path');
const glob = require('glob');

function getEntries(globPath) {
  const files = glob.sync(globPath),
    entries = {};
  files.forEach(function (filepath) {
    const split = filepath.split('/');
    const name = split[split.length - 2];
    entries[name] = [filepath];
  });
  return entries;
}

module.exports = getEntries(path.resolve(__dirname, '../src/modules/*/index.js'));