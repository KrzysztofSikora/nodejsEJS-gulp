/**
 * Created by krzysztof on 25.04.16.
 */
// var router = require('express').Router()
var express = require('express')
var router = express.Router()

router.use(express.static(__dirname + '/../assets'))
router.use(express.static(__dirname + '/../templates'))


router.get('/stare', function (req, res) {
    res.sendfile('layouts/posts.html')
})

router.get('/', function (req, res) {
    res.sendfile('layouts/app.html')
})


module.exports = router