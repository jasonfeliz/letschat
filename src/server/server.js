const express = require('express')
const port = 3000


const app = express()
const webpack = require('webpack')
const config = require('../../config/webpack.dev.js')
const compiler = webpack(config)
const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  config.devServer
)
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler)


app.use(webpackDevMiddleware)
app.use(webpackHotMiddleware)
app.use(express.static("dist"))


app.listen(port, function(){
  console.log(`you have entered the twilight zone ${port}`)
  console.log('press crtl-c to exit the twilight zone')
})
