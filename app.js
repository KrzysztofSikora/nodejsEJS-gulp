var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


//
// adds
// var mongoose = require('mongoose')
//
// require('./models/post');
//
// mongoose.connect('mongodb://localhost:27017/test', function () {
//     console.log('Nawiązano połaczenie z mongodb.')
//
// });
// module.exports = mongoose
// end adds





var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//add
app.use(require('/home/krzysztof/IdeaProjects/nodejsEJS-gulp/auth.js'))
app.use('/api/sessions', require('/home/krzysztof/IdeaProjects/nodejsEJS-gulp/controllers/api/sessions.js'))
app.use('/api/users', require('/home/krzysztof/IdeaProjects/nodejsEJS-gulp/controllers/api/users.js'))




app.use('/', routes); // zmieniam z app.use('/', routes)
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



module.exports = app;
