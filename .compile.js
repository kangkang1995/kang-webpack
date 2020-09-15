const path = require('path');
module.exports = {
  htmlChunk: {
    "$all": {
      title: "kangkang",
      headChunk: [`<meta charset="utf-8">`,
        `<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>`,
        `<meta name="format-detection" content="email=no">`,
        `<meta name="format-detection" content="telephone=no">`],
    }
  },
  server: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
      "env": path.resolve(__dirname, 'env/beta.js'),
    }
  },
  build: {
    beta: {
      alias: {
        "@": path.resolve(__dirname, 'src'),
        "env": path.resolve(__dirname, 'env/beta.js')
      }
    },
    image: {
      alias: {
        "@": path.resolve(__dirname, 'src'),
        env: path.resolve(__dirname, 'env/image.js')
      }
    },
    prod: {
      alias: {
        "@": path.resolve(__dirname, 'src'),
        env: path.resolve(__dirname, 'env/prod.js')
      }
    }
  }
};