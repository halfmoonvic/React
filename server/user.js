const express = require('express')
const utils = require('utility')
const Router = express.Router()

const model = require('./model')
const User = model.getModel('user')

Router.get('/list', function (req, res) {
  User.find({}, function (err, doc) {
    return res.json(doc)
  })
})

Router.post('/register', function (req, res) {
  const {user, pwd, type} = req.body
  User.findOne({user: user}, function (err, doc) {
    if (doc) {
      return res.json({code: 1, msg: '用户名重复'})
    }
    User.create({user, pwd: md5Pwd(pwd), type}, function (err, doc) {
      if (err) {
        return res.json({code: 1, msg: '后台出错了'})
      }
      return res.json({code: 0})
    })
  })
})

Router.get('/info', function (req, res) {
  // 用户有没有 cookie
  return res.json({code: 1})
})

// 加密加盐
function md5Pwd(pwd) {
  const salt = 'imoc_is_good_fejaw$951321!#('
  return utils.md5(utils.md5(pwd+salt))
}

module.exports = Router
