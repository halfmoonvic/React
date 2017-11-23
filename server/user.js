const express = require('express')
const Router = express.Router()
const models = require('./model')
const User = models.getModel('user')


Router.get('/list', function (req, res) {
  User.find({}, function (err, doc) {
    return res.json(doc)
  })
})

Router.post('/register', function (req, res) {
  const {user, pwd, type} = req.body
  console.log(req.body)
  User.findOne({user}, function (err, doc) {
    console.log(doc)
    if (doc) {
      return res.json({
        status: 202,
        data: {
          code: 1,
          msg: '用户名重复'
        }
      })
    }
    User.create({user, pwd, type}, function (err, doc) {
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

Router.get('/info', function (req, res) {
  return res.json({
    status: 200,
    data: {
      code: 1
    }
  })
})

module.exports = Router
