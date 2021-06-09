const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Config = require("webpack-chain");
const {
  SRC_INDEX_PATH,
  BUILD_PATH,
  SRC_PATH,
  moduleFileExtensions,
  HTML_PATH,
} = require("./path");
const { useTypeScript } = require("./util");

// config instance
const config = new Config();

config
  // 修改 entry 配置
  .entry("index")
  .add(SRC_INDEX_PATH)
  .end()

  // 修改 output 配置
  .output.path(BUILD_PATH)
  .filename("[name].[contenthash:8].js")
  .chunkFilename("[name].[contenthash:8].js")
  // webpack-dev-server 也会默认从 publicPath 为基准，使用它来决定在哪个目录下启用服务，来访问 webpack 输出的文件。
  .publicPath("/");

config.resolve.extensions
  .merge(
    moduleFileExtensions
      .map((ext) => `.${ext}`)
      .filter((ext) => useTypeScript || !ext.includes("ts"))
  )
  .end();

// 创建一个具名规则，以后用来修改规则
config.module
  .rule("compile")
  .test(/\.(js|jsx|ts|tsx)$/)
  .exclude.add(/node_modules/)
  .end()
  .use("babel")
  .loader("babel-loader");

config.module
  .rule("asset")
  .test(/\.(svg|png|jpe?g|gif|mp3|mp4)$/)
  .use("asset-loader")
  .loader("url-loader")
  .options({
    limit: 8192,
  });

// config.module
//   .rule("antdLess")
//   .test(/\.less$/)
//   .use("MiniCssExtractPlugin")
//   .loader(MiniCssExtractPlugin.loader)
//   .end()
//   .use("css")
//   .loader("css-loader")
//   .end()
//   .use("less")
//   .loader("less-loader")
//   .options({
//     lessOptions: {
//       modifyVars: getThemeVariables({
//         "primary-color": "#1DA57A",
//       }),
//       javascriptEnabled: true,
//     },
//   });

config.module
  .rule("style")
  .test(/\.(sa|sc|c)ss$/)
  .use("MiniCssExtractPlugin")
  .loader(MiniCssExtractPlugin.loader)
  .end()
  .use("css")
  .loader("css-loader")
  .end()
  .use("postcss")
  .loader("postcss-loader")
  .end()
  .use("sass")
  .loader("sass-loader");

config
  .plugin("DefinePlugin")
  .use(DefinePlugin, [
    {
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    },
  ])
  .end()
  .plugin("HtmlWebpackPlugin")
  .use(HtmlWebpackPlugin, [
    {
      filename: "index.html",
      template: HTML_PATH,
      inject: "body",
      minify: false,
    },
  ]);

module.exports = config;
