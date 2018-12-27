const express = require('express')
const webpack = require('webpack')
const bodyParser = require('body-parser')
const path = require('path')
const port = 3000



const app = express()
// set the template engine ejs
app.set('view engine', 'ejs');

//require routes file
const userRoutes = require('../../app/routes/user_routes.js')


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

// add `bodyParser` middleware which will parse JSON requests into
// JS objects before they reach the route files.
// The method `.use` sets up middleware for the Express application
app.use(bodyParser.json())
// this parses requests sent by `$.ajax`, which use a different content type
app.use(bodyParser.urlencoded({ extended: true }))

// app.use(userRoutes)


//server
server = app.listen(port, function(){
  console.log(`you have entered the twilight zone ${port}`)
  console.log('press crtl-c to exit the twilight zone')
})


const io = require('socket.io')(server)

io.on('connection', function(socket){
  console.log("“Well, if droids could think, there’d be none of us here, would there?” — Obi-Wan Kenobi")

  //listen to send-message emmited from the client
  socket.on('send-message', function(data){
    socket.username = "me"
    io.sockets.emit('send-message', { message: data.message, username: socket.username})
  })



})
