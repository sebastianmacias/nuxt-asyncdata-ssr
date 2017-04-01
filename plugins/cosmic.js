import config from './../nuxt.config.js'
// let config = require('./nuxt.config.js')
import Cosmic from 'cosmicjs'

export default {
  getPage(slug) {
    const data = new Promise((resolve, reject) => {
      Cosmic.getObject(config.cosmic, {
        slug
      }, (err, res) => {
        if (err) return reject(err)
        resolve(res)
      })
    })
    return data
  }
}
