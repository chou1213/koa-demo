const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
const TerserWebpackPlugin = require('terser-webpack-plugin'); // 压缩js代码

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  stats: {
    children: false,
    warnings: false
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            warnings: false,
            drop_console: false, // 是否注释掉console
            dead_code: true,
            drop_debugger: true
          },
          output: {
            comments: false,
            beautify: false
          },
          mangle: true
        },
        parallel: true
      })
    ],
    splitChunks: { // 提取重复的文件
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true
        }
      }
    }
  }
});

module.exports = webpackConfig;