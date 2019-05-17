module.export = {
  dev: {
    port: 8090,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/server': {
        target: 'http://127.0.0.1/local-server/',
        pathRewrite: {
          '^/server': '/server'
        },
        changeOrigin: true,
        secure: false
      }
    },
    cssSourceMap: false
  }
}
