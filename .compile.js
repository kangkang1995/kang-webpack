const path = require("path");
module.exports = {
    // 具体可以看README的 自定义功能

    // 自定义 入口文件
    customEntry: "",
    // 拷贝文件，已经有static和 public了
    customCopyPlugin: [
        {
            from: path.resolve(__dirname, "./public"),
            to: path.resolve(__dirname, "./dist"),
        },
    ],
    htmlChunk: {
        $all: {
            title: "huaxiang",
            headChunk: [
                `<meta charset="utf-8">`,
                `<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>`,
                `<meta name="format-detection" content="email=no">`,
                `<meta name="format-detection" content="telephone=no">`,
            ],
            scriptChunk: [],
        },
        index: {
            title: "huaxiang-index",
            headChunk: [],
        },
    },
    server: {
        // 只打包编译的目录
        workPage: [],
        alias: {
            "@": path.resolve(__dirname, "src"),
            "~": path.resolve(__dirname, "src"),
            env: path.resolve(__dirname, "env/beta.ts"),
        },
    },
    build: {
        beta: {
            alias: {
                "@": path.resolve(__dirname, "src"),
                "~": path.resolve(__dirname, "src"),
                env: path.resolve(__dirname, "env/beta.ts"),
            },
        },
        image: {
            alias: {
                "@": path.resolve(__dirname, "src"),
                env: path.resolve(__dirname, "env/image.ts"),
            },
        },
        prod: {
            alias: {
                "@": path.resolve(__dirname, "src"),
                env: path.resolve(__dirname, "env/prod.ts"),
            },
        },
    },
    //是否启动图片压缩
    isImageCompression:false,
    // 是否启动 start 性能调试
    isSpeedMeasurePlugin:false,
    // 是否启动 build 打包分析调试
    isBundleAnalyzerPlugin:false,
};
