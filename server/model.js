const mongoose = require('mongoose')
// 链接mongo 并且使用 imooc 这个集合
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
