const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

const defaultSettings = require('./src/settings')

// page title
const name = defaultSettings.title || 'Vue Template'

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  /**
   * 开启保存自动代码检测，设置true可配合derServer overlay浏览器上显示错误，强制进行代码检测
   * 也可设置error可直接阻断打包
   */
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  crossorigin: 'anonymous',
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },

  chainWebpack: config => {
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
    // config.resolve.alias
    //   .set('@', resolve('src'))
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true
  }
  // devServer: {
  //   hot: true,
  //   proxy: {
  //     '/subdist_qidu': {
  //       target: process.env.VUE_APP_API_ROOT,
  //       pathRewrite: {
  //         '^/subdist_qidu': '/subdist_qidu'
  //       },
  //       secure: false,
  //       changeOrigin: true // needed for virtual hosted sites
  //     }
  //   }
  // }
}
