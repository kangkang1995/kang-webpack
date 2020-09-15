const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require('webpack');
module.exports = merge(common, {
  devtool: 'inline-source-map',//追踪到错误和警告在源代码中的原始位置
  module: {},
  // devServer: {
  //   contentBase: '../dist',
  //   host: '0.0.0.0',      // 默认是localhost
  //   port: 3000,             // 端口
  //   open: true,             // 自动打开浏览器
  //   compress: true,         //压缩
  //   hot: true,               // 开启热更新
  //   // proxy:{} //代理，解决跨域
  // }, 
  optimization: {
    // ...省略号
    minimizer: [
      // 压缩JS
      new UglifyJsPlugin({
        uglifyOptions:{
          cache: true, // 开启缓存
          parallel: true, // 平行压缩
          ie8: true,
          exclude: /node_modules/
        }
      }),
    ]
  },
  mode: 'development',
  plugins: [
    // 开启全局的模块热替换(HMR)
    new webpack.HotModuleReplacementPlugin(),
    // 插件的作用是在热加载时直接返回更新文件名，而不是文件的id
    new webpack.NamedModulesPlugin(),
  ],
  
});