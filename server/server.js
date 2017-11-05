const express = require('express')
// 新建app
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>Hello World</h1>')
})

app.get('/data', function (req, res) {
  // res.json({name: "cs", height: 187})
  res.status(404).json({'key': '188', 'hehe': '厉害了，我的哥'})
  // res.status(200).json(obj)
})

app.listen(9093, function () {
  console.log('Node app start at port 9093')
})
