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
router.use(require('/home/krzysztof/IdeaProjects/nodejsEJS-gulp/auth.js'))
// Adds

router.use(require('/home/krzysztof/IdeaProjects/nodejsEJS/controllers/api/posts.js'))

router.use(require('/home/krzysztof/IdeaProjects/nodejsEJS-gulp/controllers/api/sessions.js'))
router.use(require('/home/krzysztof/IdeaProjects/nodejsEJS-gulp/controllers/api/users.js'))



// endAdds

module.exports = router;
