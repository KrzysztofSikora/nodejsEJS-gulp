/**
 * Created by krzysztof on 19.05.16.
 */
var router = require('express').Router()
var User = require('/home/krzysztof/IdeaProjects/nodejsEJS-gulp/models/user')
var bcrypt = require('bcrypt')
var jwt = require('jwt-simple')
var config = require('/home/krzysztof/IdeaProjects/nodejsEJS-gulp/config')
router.post('/', function (req, res, next) {
    User.findOne({username: req.body.username})
        .select('password')
        .exec(function (err, user) {
            if (err) { return next(err)}
            if (!user) { return res.send(401) }
            bcrypt.compare(req.body.password, user.password, function (err, valid) {
                if (err) { return next(err)}
                if (!valid) { return res.send(401) }
                var token = jwt.encode({username: req.body.username}, config.secret)
                res.send(token)
            })

        })
})

module.exports = router