var express = require('express');
var router = express.Router();

// Adds
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())


// endAdds


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//dodaje
// router.get('/', function(req, res) {
//   res.sendfile('./layouts/posts.html');
// });

router.use( require('../controllers/static'))

// Adds
// router.get('/api/posts', function (req, res) {
//   res.json([
//     {
//       username: 'dickyxxx',
//       body: 'Node.js wymiata!'
//     }
//   ])
//
// });

// router.get('/api/posts', function (req, res) {
//   Post.find()
//       .sort('-date')
//       .exec(function(err, posts) {
//         if (err) { return next(err) }
//         res.json(posts)
//       })
//
// });

router.use(require('/home/krzysztof/IdeaProjects/nodejsEJS/controllers/api/posts.js'))

router.use(require('/home/krzysztof/IdeaProjects/nodejsEJS-gulp/controllers/api/sessions.js'))
router.use(require('/home/krzysztof/IdeaProjects/nodejsEJS-gulp/controllers/api/users.js'))

// router.post('/api/posts', function (req, res) {
//   console.log('Post został przyjęty!')
//   console.log(req.body.username)
//   console.log(req.body.body)
//   res.sendStatus(201)
//
// })

// var mongoose = require('mongoose');
// var Post = require('/home/krzysztof/IdeaProjects/nodejsEJS/models/post');
//
//
// router.post('/api/posts', function (req, res, next) {
//   var post = new Post({
//     username: req.body.username,
//     body: req.body.body
//   });
//   post.save(function (err, post) {
//     if (err) { return next(err) }
//     res.json(201,post)
//
//
//
//   })
// });




// endAdds

module.exports = router;
