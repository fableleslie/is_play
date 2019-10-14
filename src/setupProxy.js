const proxy = require('http-proxy-middleware')
module.exports = function(app){
    app.use(proxy('/playType',{
        target : 'http://localhost:3001',
        secure : true ,
        changeOrigin : true 
    }))
}