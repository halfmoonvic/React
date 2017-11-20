const express = require('express')
const userRouter = require('./user.js')
// 新建app
const app = express()

app.use('/user', userRouter)

app.get('/', function (req, res) {
  res.send('<h1>Hello World</h1>')
})

app.listen(9093, function () {
  console.log('Node app start at port 9093')
})
