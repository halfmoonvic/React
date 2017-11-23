const express = require('express')
const utils = require('utility')
const Router = express.Router()
const models = require('./model')
const User = models.getModel('user')


Router.get('/list', function (req, res) {
  // User.remove({}, function (err, doc) {})
  User.find({}, function (err, doc) {
    return res.json(doc)
  })
})

Router.post('/register', function (req, res) {
  const {user, pwd, type} = req.body
  User.findOne({user}, function (err, doc) {
    if (doc) {
      return res.json({
        status: 202,
        data: {
          code: 1,
          msg: '用户名重复'
        }
      })
    }
    User.create({user, pwd: md5pwd(pwd), type}, function (err, doc) {
      if (err) {
        return res.json({
          status: 500,
          data: {
            code: 1,
            msg: '后台出错'
          }
        })
      }
      return res.json({
        status: 200,
        data: {
          code: 0,
        }
      })
    })
  })
})

Router.post('/login', function (req, res) {
  const {user, pwd} = req.body
  User.findOne({user, pwd: md5pwd(pwd)}, {pwd: 0}, function (err, doc) {
    if (!doc) {
      return res.json({
        status: 501,
        data: {
          msg: '用户名密码不正确',
          code: 1
        }
      })
    }
    if (doc) {
     return res.json({
       status: 200,
       data: {
         code: 0,
         data: doc
       }
     })
    }
  })
})

Router.get('/info', function (req, res) {
  return res.json({
    status: 200,
    data: {
      code: 1
    }
  })
})

function md5pwd(pwd) {
  const salt = 'imooc_feioa438992&(*$@Q@j~~'
  return utils.md5(utils.md5(pwd+salt))
}

module.exports = Router
