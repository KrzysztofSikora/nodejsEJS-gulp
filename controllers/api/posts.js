/**
 * Created by krzysztof on 25.04.16.
 */

var Post = require('/home/krzysztof/IdeaProjects/nodejsEJS/models/post');
var router = require('express').Router()


router.get('/api/posts', function (req, res, next) {
    Post.find()
        .sort('-date')
        .exec(function (err, posts) {
            if (err) {
                return next(err)
            }
            res.json(posts)
        })
})

// router.post('/api/posts', function (req, res, next) {
//     var post = new Post({
//         username: req.body.username,
//         body: req.body.body
//     });
//     post.save(function (err, post) {
//         if (err) {
//             return next(err)
//         }
//         res.json(201, post)
//
//     })
// })

router.post('/api/posts', function (req, res, next) {
    var post = new Post({body: req.body.body})
    post.username = req.auth.username
    post.save(function (err,post) {
        if (err) { return next(err) }
        res.json(201, post)

    })
})

module.exports = router