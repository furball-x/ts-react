/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./configs/webpack.dev')

const compiler = webpack(webpackConfig)
const port = 8888
const host = '127.0.0.1'
const devServerOptions = {
  ...webpackConfig.devServer,
  index: 'index.html',
  open: true,
  stats: {
    colors: true,
  },
  historyApiFallback: true,
  hot: true, // use this instead of Webpack.HotModuleReplacementPlugin
  quiet: true, // lets WebpackDashboard do its thing
  overlay: true,
}
const server = new WebpackDevServer(compiler, devServerOptions)
server.listen(port, host, () => {
  console.log(`Starting server on http://${host}:${port}`)
})
