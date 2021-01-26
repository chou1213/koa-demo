const path = require('path');
const webpack = require('webpack');
const nodeExcternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const utils = require('./utils');
const { util } = require('webpack');

const webpackconfig = {
  target: 'node',
  mode: 'development',
  entry: {
    server: path.join(utils.APP_PATH, 'index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: utils.DIST_PATH
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [path.join(__dirname, '/node_modules')]
      }
    ]
  },
  externals: [nodeExcternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({  // webpack打包是定义全局常量
      'process.env': {
        NODE_ENV: (process.env.NODE_ENV === 'production' ? "'production'" : "'developmennt'")
      }
    })
  ],
  node: {
    global: true,
    __filename: true,
    __dirname: true
  }
};

module.exports = webpackconfig;

