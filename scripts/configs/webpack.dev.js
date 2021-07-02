const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackBar = require('webpackbar')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const { SRC_PATH } = require('./path')
const config = require('./webpack.common')

// hot update
config.entry('index').prepend('react-hot-loader/patch')

// alias
config.resolve.alias
  .set('@', SRC_PATH)
  .set('react-dom', '@hot-loader/react-dom')

// mode
config.mode('development').devtool('eval-source-map')

// 美化进度条
config.plugin('WebpackBar').use(WebpackBar)

// 美化dashboard
config
  .plugin('FriendlyErrorsWebpackPlugin')
  .use(FriendlyErrorsWebpackPlugin)
  .end()

// css
config
  .plugin('miniCssExtractPlugin')
  .use(MiniCssExtractPlugin, [
    {
      filename: '[name].css',
    },
  ])
  .end()
  .plugin('CleanWebpackPlugin')
  .use(CleanWebpackPlugin)

module.exports = config.toConfig()
