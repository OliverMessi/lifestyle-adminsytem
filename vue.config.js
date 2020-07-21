module.exports = {
  devServer: {
    open: true, //配置自动启动浏览器
    port: 8002,// 项目运行时候的端口号
    hotOnly: true, // 热更新
    proxy: {
    //本地请求的根路径为 http://localhost:8002，通过ajax请求登录的完整接口为http://localhost:8002/api/login
    //webpack-dev-server 通过代理方式将请求转发到http://localhost:8002
      '/api': {
        target: 'http://localhost:8002',
        changeOrigin: true,
        ws: true,
        //此时接口地址中多了个代理标志 /api, 通过配置参数 pathRewrite: {'^/api': ' '} 将 /api 去掉即可。
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    },
  },
  configureWebpack:{
    resolve:{
      alias:{
        'theme':'@/theme',
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