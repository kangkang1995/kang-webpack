> 自己试验配置的
支持一下配置
1. 图片/视频/字体
2. css/scss/less
3. excel/word
4. json
5. js/es6等语法
6. ts
7. vue
8. react
9. eslint
10. 热更新 （不支持class和hook同时存在的热更新）
11. 支持多入口和单入口

具体文档可以查看我的[有道云] （http://note.youdao.com/noteshare?id=64a7b588ba2d3b7d98ee837b66ac3ca7&sub=5B9440D25CCC4C609EDDB40DEFFE9C9C）

---
待完善中

### 常见错误

#### 1.image-webpack-loader

需要用 cnpm 装

```javascript
npm install -g cnpm --registry=https://registry.npm.taobao.org

cnpm i image-webpack-loader
```

#### .prettierrc 

> 暂不启用

### 自定义功能

> 目前 支持 .eslintrc，tsconfig，.babelrc的自定义

> 和.compile  重点介绍

1. customEntry 自定义入口

```javascript
// 例如
customEntry: path.resolve(__dirname, "./src/modules/*/index.tsx"),
```

2. customCopyPlugin 自定义 copy文件
```javascript
// 例如
customCopyPlugin: [
    {
      from: path.resolve(__dirname, "./public"),
      to: path.resolve(__dirname, "./dist"),
    },
],
```
3. favicon 图标
这个 只需要把 favicon.ico 放到static文件夹根目录或者public文件夹根目录就可以

4. htmlChunk  这个里面暴露的主要是html页面相关的

* title对应的是 浏览器的头
* headChunk  meta的信息
* scriptChunk 就是js的script,可以放一些cdn网址
* $all 代表全部页面都通用
* index 代表只是index这个页面的东西，不会影响其它页面，如何里面只适用h5，则不会影响pc的头部，  或者引入了jquery，则不会污染其它页面  ** 注意这个index名字随意，但是要和入口文件夹一一对应**

```javascript
// 例如
    $all: {
        title: "huaxiang",
        headChunk: [
            `<meta charset="utf-8">`,
            `<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>`,
            `<meta name="format-detection" content="email=no">`,
            `<meta name="format-detection" content="telephone=no">`,
        ],
        scriptChunk:[
            `http://code.jquery.com/jquery-migrate-1.2.1.min.js`,
        ]
    },  
    index:{
        title: "huaxiang",
        headChunk: [
            `<meta charset="utf-8">`,
        ],
        scriptChunk:[
        ]
    }
```

5. server 就是启动服务时会使用的


6. build 就是打包时会使用的

比如 npm run build beta


```javascript
// 例如
beta: {
    alias: {
        "@": path.resolve(__dirname, "src"),
        env: path.resolve(__dirname, "env/beta.js"),
    },
},
image: {
    alias: {
        "@": path.resolve(__dirname, "src"),
        env: path.resolve(__dirname, "env/image.js"),
    },
},
prod: {
    alias: {
        "@": path.resolve(__dirname, "src"),
        env: path.resolve(__dirname, "env/prod.js"),
    },
},
```

#### 待解决  alias


首先需要调整的地方是tsconfig.json, 因为可以解决掉vscode的报错。通过声明baseurl 和 path 来指出路径规则。

其次就是webpack.config.js , 需要能通过编译打包，就必须也在webpack 的 resolve.alias 中声明。

最后就是使用eslint。 通过eslint-import-resolver-webpack插件来读取webpack中的设置。这样就解决eslint 报错的问题。

本文只针对以上的条件，其他loader 或者 eslint 配置 需要另外考虑。网上已有很多教程。
