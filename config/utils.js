const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

exports.resolve = resolve;
exports.APP_PATH = resolve('src');
exports.DIST_PATH = resolve('dist');