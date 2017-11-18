const express = require('express')
const mongoose = require('mongoose')
// 链接mongo 并且使用 imooc 这个集合
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
  console.log('mongo connect success')
})
// 类似于 mysql的表 mongo里有文档、字段的概念
const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type: Number, require: true}
}))

// 新增数据
User.create({
  user: 'cs',
  age: 27
}, function (err, doc) {
  if (!err) {
    console.log(doc)
  } else {
    console.log(err)
  }
})

// 删除数据
// User.remove({user: 'cs'}, function (err, doc) {
//   console.log(doc)
// })
// 更新数据
// User.update({'user': 'xiaohua'}, {'$set': {age: 26}}, function (err, doc) {
//   console.log(doc)
// })
// 新建app
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>Hello World</h1>')
})

app.get('/data', function (req, res) {
  // 查找到一条数据即返回（对象）
  // User.findOne({}, function (err, doc) {
    // res.json(doc)
  // })
  // 查找所有的数据
  User.find({}, function (err, doc) {
    res.json(doc)
  })
  // res.status(200).json({'key': '188', 'hehe': '厉害了，我的哥'})
})
// app.get('/delete', function () {

// })

app.listen(9093, function () {
  console.log('Node app start at port 9093')
})
