var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Middleware 1
app.use(
    function(req,res,next){
        console.log('The common middleware 1 is called');
        next();
    }
);

//GET
app.get('/example', function(req, res){
    res.send('I am example');
    console.log('I am example');
});

//Middleware 2
app.use(
    function(req,res,next){
        console.log('The common middleware 2 is called');
        next();
    }
);

app.get('/example/:name',
    function(request,response){
        response.send('Hello '+request.params.name);
    }
);
//Middleware 3
app.use(
    function(req,res,next){
        console.log('The common middleware 3 is called');
        next();
    }
);

app.get('/example2/:firstName/:lastName',
    function(request, response){
        response.send('Hello '+request.params.firstName+" "+request.params.lastName);
    }
);
//Middleware 4
app.use(
    function(req,res,next){
        console.log('The common middleware 4 is called');
        next();
    }
);
app.get('/example3/:firstName&:lastName',
    function(request, response){
       response.send('Hello '+request.params.firstName+" "+request.params.lastName);
    }
);

//POST
app.post('/',
    function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
