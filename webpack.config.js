const path = require('path');
var JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
  entry: './raws/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/scripts'),
    filename: 'public.js'
  }/*,
  plugins: [
    new JavaScriptObfuscator ({
      rotateUnicodeArray: true
    })
  ]*/
};