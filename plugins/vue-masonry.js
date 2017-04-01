import Vue from 'vue'
// import VueMasonry from 'vue-masonry'

// Vue.use(VueMasonry)

if (process.BROWSER_BUILD) {
  const VueMasonry = require('vue-masonry')
  Vue.use(VueMasonry)
}
