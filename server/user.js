const express = require('express')
const utils = require('utility')
const Router = express.Router()
const models = require('./model')
const User = models.getModel('user')

const _filter = { 'pwd': 0, '__v': 0 }

Router.get('/list', function(req, res) {
  // User.remove({}, function (err, doc) {})
  const { type } = req.query
  User.find({ type }, function(err, doc) {
    return res.json({
      status: 200,
      data: {
        code: 0,
        data: doc
      }
    })
  })
})

Router.post('/register', function(req, res) {
  const { user, pwd, type } = req.body
  User.findOne({ user }, function(err, doc) {
    if (doc) {
      return res.json({
        status: 202,
        data: {
          code: 1,
          msg: '用户名重复'
        }
      })
    }

    const userModel = new User({ user, type, pwd: md5pwd(pwd) })
    userModel.save(function(err, doc) {
      if (err) {
        return res.json({
          status: 500,
          data: {
            code: 1,
            msg: '后台出错'
          }
        })
      }

      const { _id } = doc
      res.cookie('userid', _id)
      return res.json({
        status: 200,
        data: {
          code: 0,
        }
      })
    })
  })
})

Router.post('/login', function(req, res) {
  const { user, pwd } = req.body
  User.findOne({ user, pwd: md5pwd(pwd) }, _filter, function(err, doc) {
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
      res.cookie('userid', doc._id)
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

Router.post('/update', function(req, res) {
  const userid = req.cookies.userid
  if (!userid) {
    return res.json({
      status: 501,
      data: {
        msg: '会话过期',
        code: 1
      }
    })
  }
  const body = req.body
  User.findByIdAndUpdate(userid, body, function(err, doc) {
    if (err) {
      return {
        status: 500,
        data: {
          msg: '后台服务器错误',
          code: 1
        }
      }
    }
    const data = Object.assign({}, {
      user: doc.user,
      type: doc.type
    }, body)

    return res.json({
      status: 200,
      data: {
        code: 0,
        data
      }
    })
  })
})

Router.get('/info', function(req, res) {
  const { userid } = req.cookies
  if (!userid) {
    return res.json({
      status: 200,
      data: {
        code: 1
      }
    })
  }
  User.findOne({ _id: userid }, _filter, function(err, doc) {
    if (err) {
      return res.json({
        status: 500,
        data: {
          code: 1,
          msg: '后端出错了'
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

function md5pwd(pwd) {
  const salt = 'imooc_feioa438992&(*$@Q@j~~'
  return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router
