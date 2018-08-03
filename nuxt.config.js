module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '百课',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'renderer', content: 'webkit' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '百课' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /**
   * 全局css
   */
  css: [
    '~/css/minireset.scss',
    '~/css/main.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** vue plugins
  */
  plugins: [
    { src: '~/plugins/vue-plugins.js', ssr: false }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // 添加loaders
    loaders: [
      {
        test: /\.sass$/,
        loader: 'sass-loader',
        include: ['style', 'css', 'sass']
      }
    ],
    // 公共库打包一次
    build: {
      vendor: ['axios']
    }
  },
  // 添加环境变量
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  }
}
