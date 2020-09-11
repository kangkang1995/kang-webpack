const path = require('path');
// 合并配置文件
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const {buildConfig,htmlChunk} = require('../.compile');
// 分离CSS插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = merge(common, {
  module: {
    rules:[
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader:MiniCssExtractPlugin.loader,
            options:{
              publicPath:'../',
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader:MiniCssExtractPlugin.loader,
            options:{
              publicPath:'../',
            }
          },
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
    ]
  },
  plugins: [],
  mode: 'production',
  output: {
    filename: './js/[name].[contenthash].js', //contenthash 若文件内容无变化，则contenthash 名称不变
    path: path.resolve(__dirname, '../dist')
  },
  optimization: {
    // ...省略号
    minimizer: [
      // 压缩JS
      new UglifyJsPlugin({
        uglifyOptions:{
          drop_console: true, // 去除console.log
          // compress: {
          //   warnings: false, // 去除警告
          //   drop_debugger: true, // 去除debugger
          //   drop_console: true // 去除console.log
          // },
          cache: true, // 开启缓存
          parallel: true, // 平行压缩
          ie8: true,
          exclude: /node_modules/
        }
      }),
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: "./css/[name].[hash].css",
    }),
  ],
  resolve: {
    // alias:buildConfig.alias?buildConfig.alias:"",
  },
});
