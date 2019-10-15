const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use('/payment', proxy({
    target: 'http://127.0.0.1:3333',
    changeOrigin: true,
  }))
  app.use('/jssdk', proxy({
    target: 'https://xiedawen.club',
    changeOrigin: true,
  }))
}