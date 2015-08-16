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
      {test: /\.js$/, loader: 'babel-loader'},
      {test: /\.js.erb$/, loader: 'erb-loader'},
    ]
  },
  plugins: [
    railsHotPlugin()
  ],
  webpackrails: {
    root: __dirname
  }
}
