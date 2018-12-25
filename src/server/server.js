const express = require('express')
const webpack = require('webpack')
const path = require('path')
const port = 3000



const app = express()
// set the template engine ejs
app.set('view engine', 'ejs');

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

app.get('/',function(req,res){
  res.render('index')
})

app.get('/about',function(req,res){
  res.render('about')
})

app.get('*', function (req, res) {
  res.render('404')
})

server = app.listen(port, function(){
  console.log(`you have entered the twilight zone ${port}`)
  console.log('press crtl-c to exit the twilight zone')
})


const io = require('socket.io')(server)

io.on('connection', function(socket){
  console.log("“Well, if droids could think, there’d be none of us here, would there?” — Obi-Wan Kenobi")

  socket.on('something', function(data){
    io.sockets.emit('something', { message: 'something else'})
  })
})
