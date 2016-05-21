/**
 * Created by krzysztof on 21.05.16.
 */
var jwt = require('jwt-simple')
var config = require('/home/krzysztof/IdeaProjects/nodejsEJS-gulp/config.js')

module.exports = function (req, res, next) {
    if (req.headers['x-auth']) {
        req.auth = jwt.decode(req.headers['x-auth'], config.secret)
    }
    next()
}