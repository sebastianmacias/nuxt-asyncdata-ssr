module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Vapecity Colombia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vapecity Colombia' }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }, {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
    }]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/vuetify.min.css', {
    src: '~assets/css/main.scss',
    lang: 'scss'
  }],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    vendor: ['vuetify', 'vue-masonry', 'axios'],
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: ['~plugins/vuetify',
    // '~plugins/vue-awesome.js',
    '~plugins/vue-masonry.js'
    // '~plugins/cosmic.js'
  ],
  /*
   ** CosmicJs
   */
  cosmic: {
    bucket: {
      slug: process.env.COSMIC_BUCKET || 'vapecity',
      read_key: process.env.COSMIC_READ_KEY || 'BIoj4pKfa391IppJHVK70oHrtBTAok2oLYEYUH767HF7UvLEuu',
      write_key: process.env.COSMIC_WRITE_KEY || 'HadjLiw68VM1yByYg85vMJ93vPOlFvgbkiE41lexlbgi1NN5Bg'
    }
  }

}
