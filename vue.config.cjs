const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  transpileDependencies: ['webpack-dev-server/client'],
  chainWebpack: config => {
   config.entry.app = ['babel-polyfill', './src/main.js'];
  },
  chainWebpack(config) {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://106.15.92.117:9510',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  // configureWebpack: {
  //   optimization: {
  //     minimizer: [
  //       new UglifyJsPlugin({
  //         uglifyOptions: {
  //           compress: {
  //             warnings: false,
  //             drop_console: true,//console
  //             drop_debugger: false,
  //             pure_funcs: ['console.log'] // 移除console
  //           }
  //         }
  //       })
  //     ]
  //   }
  // }
}