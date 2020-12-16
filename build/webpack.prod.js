const path = require("path");
// 合并配置文件
const merge = require("webpack-merge");
const common = require("./webpack.base.js");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// 分离CSS插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = merge(common, {
  module: {
    rules: [
      // {
      //   test: /\.(sa|sc|c)ss$/,
      //   use: [
      //     {
      //       loader:MiniCssExtractPlugin.loader,
      //       options:{
      //         publicPath:'../',
      //       }
      //     },
      //     'css-loader',
      //     'postcss-loader',
      //     'sass-loader',
      //   ],
      // },
      // {
      //   test: /\.less$/,
      //   use: [
      //     {
      //       loader:MiniCssExtractPlugin.loader,
      //       options:{
      //         publicPath:'../',
      //       }
      //     },
      //     'css-loader',
      //     'postcss-loader',
      //     'less-loader',
      //   ],
      // },
    ],
  },
  plugins: [],
  mode: "production",
  output: {
    filename: "./js/[name].[contenthash].js", //contenthash 若文件内容无变化，则contenthash 名称不变
    path: path.resolve(__dirname, "../dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "async", //async异步代码分割 initial同步代码分割 all同步异步分割都开启
      minSize: 20000, //字节 引入的文件大于30kb才进行分割
      maxSize: 0,
      minChunks: 1, //模块至少使用次数
      maxAsyncRequests: 30, //同时加载的模块数量最多是30个，只分割出同时引入的前30个文件
      maxInitialRequests: 30, //首页加载的时候引入的文件最多30个
      automaticNameDelimiter: "~", //缓存组和生成文件名称之间的连接符
      enforceSizeThreshold: 50000,
      cacheGroups: {
        //缓存组，将所有加载模块放在缓存里面一起分割打包
        defaultVendors: {
          //自定义打包模块
          test: /[\\/]node_modules[\\/]/,
          priority: -10, //优先级，先打包到哪个组里面，值越大，优先级越高
          reuseExistingChunk: true,
        },
        default: {
          //默认打包模块
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true, //模块嵌套引入时，判断是否复用已经被打包的模块
        },
      },
    },
    minimizer: [
      // 压缩JS
      new UglifyJsPlugin({
        uglifyOptions: {
          drop_console: true, // 去除console.log
          // compress: {
          //   warnings: false, // 去除警告
          //   drop_debugger: true, // 去除debugger
          //   drop_console: true // 去除console.log
          // },
          cache: true, // 开启缓存
          parallel: true, // 平行压缩
          ie8: true,
          exclude: /node_modules/,
        },
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/[name].[hash].css",
    }),
  ],
  resolve: {
    // alias:buildConfig.alias?buildConfig.alias:"",
  },
});
