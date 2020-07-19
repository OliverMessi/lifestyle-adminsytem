module.exports = {
  devServer: {
    open: true, //配置自动启动浏览器
    port: 8002,// 项目运行时候的端口号
    hotOnly: true, // 热更新
    proxy: {
      '/api': {
        target: 'http://localhost:8002',
        changeOrigin: true,
        ws: true,
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    },
  },
  configureWebpack:{
    resolve:{
      alias:{
        'mock':'@/mock',
        'assets':'@/assets',
        'router':'@/router',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    },
    externals: {
        'AMap': 'AMap' // 高德地图配置
    }
  },
};