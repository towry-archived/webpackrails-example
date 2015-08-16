var webpack = require('webpack');
var railsHotPlugin = require('railshot-webpack-plugin');

module.exports = {
  externals: {
    'jquery': {
      root: 'jQuery',
      commonjs2: 'jquery',
      commonjs: 'jquery',
      amd: 'jquery'
    }
  },
  module: {
    loaders: [
      {test: /\.js\.jsx$/, loader: 'babel-loader'},
    ],
    noParse: [
      /\.es6\.erb$/,
      /\.scss\.erb$/,
    ],
  },
  plugins: [
    railsHotPlugin()
  ]
}
