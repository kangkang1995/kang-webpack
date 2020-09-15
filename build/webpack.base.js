// 存放 dev 和 prod 通用配置
const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entry = require('../utils/entry');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  // entry: './src/modules/index', //入口
  entry,
  output: {
    path: path.resolve(__dirname, '../dist'), // 输出的路径
    filename: '[name].bundle.js'  // 打包后文件
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              "presets": [
                ["@babel/preset-env",{
                  "modules": false,
                  "targets": {
                    "browsers": ["> 1%", "last 2 versions", "ie >= 8"]
                  }
                }],
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              "plugins": [
                ["@babel/plugin-proposal-decorators",{legacy: true}],
                "@babel/plugin-transform-react-jsx",
                "@babel/plugin-proposal-class-properties",
                "react-hot-loader/babel",
                ["@babel/plugin-transform-runtime",{
                  "corejs": 3
                }]
              ],
            }
          },
          // ...lazy
        ],
        exclude: /node_modules/
      },
      { 
        test: /\.vue$/, 
        use: 'vue-loader' 
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // limit: 5000,
              // 分离图片至images文件夹
              esModule: false,
              name: "./images/[name].[ext]?[hash]",
              // publicPath:"./dist/assets/images"
            }
          },
        ]
      },
      {
        test: /\.(mp3|mp4|mov|ogg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './video/[name].[ext]?[hash]'
            }
          },
        ]
      },
      {
        test: /\.(xls[a-z]?|doc[a-z]?)$/,
        loader: 'file-loader',
        options: {
          name: './files/[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: './fonts/[name].[hash:7].[ext]'
        }
      },
    ]
  },
  plugins: [
    // 解决vender后面的hash每次都改变
    new webpack.HashedModuleIdsPlugin(),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, '../index.html'),
    // }),
    
  ],// 插件
  resolve: {
    // 省略后缀
    extensions: ['.js','.jsx','.vue','.tsx','.css','.scss'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};