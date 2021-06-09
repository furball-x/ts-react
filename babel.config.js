/* eslint-disable @typescript-eslint/no-var-requires */
const { useTypeScript } = require('./scripts/configs/util')

module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV === 'development')

  const presets = [['@babel/preset-env'], '@babel/preset-react']
  if (useTypeScript) {
    presets.push('@babel/preset-typescript')
  }
  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
      },
    ],
    'react-hot-loader/babel',
  ]

  return { presets, plugins }
}
