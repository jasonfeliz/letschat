const express = require('express')
var cookieParser = require('cookie-parser');
const passport = require('passport')
const crypto = require('crypto')
var session = require('express-session');
const webpack = require('webpack')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const port = 3000



const app = express()
// set the template engine ejs
app.set('view engine', 'ejs');

//require routes file
const userRoutes = require('../../app/routes/user_routes.js')
const chatRoutes = require('../../app/routes/chat_routes.js')
const indexRoutes = require('../../app/routes/index_routes.js')
const auth = require('../../config/auth.js')

//setup db connects
const db = require('../../config/db.js')

mongoose.Promise = global.Promise
mongoose.connect(db,{
  useNewUrlParser: true
})

//webpack config middlewaree  stuff
const config = require('../../config/webpack.dev.js')
const compiler = webpack(config)
const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  config.devServer
)
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler)
app.use(webpackDevMiddleware)
app.use(webpackHotMiddleware)


//allow static files in dist folder to be served.
//in this case, it would be main-bundle.js which bundles up css/html/js files
app.use(express.static("dist"))
app.use(cookieParser());
// add `bodyParser` middleware which will parse JSON requests into
// JS objects before they reach the route files.
// The method `.use` sets up middleware for the Express application
app.use(bodyParser.json())
// this parses requests sent by `$.ajax`, which use a different content type
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
  secret: crypto.randomBytes(16).toString('hex'),  //should always be a random generated string
  resave: false,
  saveUninitialized: false
  // cookie: { secure: true }
}))

app.use(auth)
app.use(passport.session())

app.use(userRoutes)
app.use(chatRoutes)
app.use(indexRoutes)

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
    io.sockets.emit('send-message', { message: data.message, username: data.username})
  })



})
