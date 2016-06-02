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
router.use(require('../auth.js'))
router.use( require('../controllers/static'))

// Adds

router.use(require('../controllers/api/posts.js'))

router.use(require('../controllers/api/sessions.js'))
router.use(require('../controllers/api/users.js'))



// endAdds

module.exports = router;
