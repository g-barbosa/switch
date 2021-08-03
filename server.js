require('dotenv').config()
const express = require('express')
const path = require('path')
const setupWebSocket = require('./websocket')
const app = express();
const server = require('http').createServer(app)
setupWebSocket(server)

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use('/', (req, res) => {
  res.render('index.html')
})

app.listen(process.env.PORT)