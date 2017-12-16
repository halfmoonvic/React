const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')

// 新建app
const app = express()

// socket.io 与 express 相配合
const server = require('http').Server(app)
const io = require('socket.io')(server)

// io 为全局的，socket 当前链接的
io.on('connection', function (socket) {
  console.log('user login')
  // 接受自用户发送过来的信息
  socket.on('sendmsg', function (data) {
    // 将接受来的信息在发送（emit）出去
    io.emit('recvmsg', data)
  })
})

app.use(cookieParser())
app.use(bodyParser.json())

app.use('/user', userRouter)

app.get('/', function (req, res) {
  res.send('<h1>Hello World</h1>')
})

server.listen(9093, function () {
  console.log('Node app start at port 9093')
})
