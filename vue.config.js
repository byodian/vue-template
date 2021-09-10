const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
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
    config.resolve.alias
      .set('@', resolve('src'))
      // .set('@src', resolve('src'))
      // .set('@components', resolve('src/components'))
      // .set('@layouts', resolve('src/layouts'))
      // .set('@utils', resolve('src/utils'))
      // .set('@views', resolve('src/views'))
      // .set('@assets', resolve('src/assets'))
      // .set('@styles', resolve('src/styles'))
      // .set('@plugins', resolve('src/plugins'))
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
