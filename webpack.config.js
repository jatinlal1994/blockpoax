const path = require('path');
var JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
  entry: './raws/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/scripts'),
    filename: 'public.js'
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
    }]
},
  plugins: [
    new JavaScriptObfuscator ({
      rotateUnicodeArray: true
    })
  ]
};
