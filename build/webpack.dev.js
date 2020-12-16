const merge = require("webpack-merge");
const common = require("./webpack.base.js");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ForkTsCheckerNotifierWebpackPlugin = require("fork-ts-checker-notifier-webpack-plugin");

module.exports = merge(common, {
  devtool: "inline-source-map", //追踪到错误和警告在源代码中的原始位置
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              plugins: [require.resolve("react-refresh/babel")],
            },
          },
          // ...lazy
        ],
        exclude: /node_modules/,
      },
    ],
  },
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
    splitChunks: {
      chunks: "async", //async异步代码分割 initial同步代码分割 all同步异步分割都开启
      minSize: 20000, //字节 引入的文件大于30kb才进行分割
      // minRemainingSize: 0, webpack4.0运行报错，适用webpack5.0具体看官方
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
          cache: true, // 开启缓存
          parallel: true, // 平行压缩
          ie8: true,
          exclude: /node_modules/,
        },
      }),
    ],
  },
  mode: "development",
  plugins: [
    // 开启全局的模块热替换(HMR)
    new webpack.HotModuleReplacementPlugin(),
    // 插件的作用是在热加载时直接返回更新文件名，而不是文件的id
    new webpack.NamedModulesPlugin(),
    // 官方热更新
    new ReactRefreshPlugin(),
    new ForkTsCheckerWebpackPlugin({
      // 将async设为false，可以阻止Webpack的emit以等待类型检查器/linter，并向Webpack的编译添加错误。
      async: false,
      
    }),
    // 将TypeScript类型检查错误以弹框提示
    // 如果fork-ts-checker-webpack-plugin的async为false时可以不用
    // 否则建议使用，以方便发现错误
    // new ForkTsCheckerNotifierWebpackPlugin({
    //   title: "TypeScript",
    //   excludeWarnings: true,
    //   skipSuccessful: true,
    // }),
  ],
});
