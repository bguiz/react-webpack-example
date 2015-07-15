var path = require('path');

var webpack = require('webpack');

module.exports = {

  devServer: {
    host: '0.0.0.0',
    port: 8033,
  },

  entry: [
    // 'webpack-dev-server/client?http://0.0.0.0:8033',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'app/app.js')
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/ ,
        exclude: /node_modules/ ,
        loaders: ['react-hot', 'babel'],
      },
      {
        test: /\.js$/ ,
        exclude: /node_modules/ ,
        loader: 'babel',
      },
      {
        test: /\.scss$/ ,
        loader: 'style!css!sass',
      }
    ],
  },
  plugins: [
    new webpack.NoErrorsPlugin()
    // new webpack.HotModuleReplacementPlugin(),
  ],
}
