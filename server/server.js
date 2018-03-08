var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());
//Insert todo
app.post('/todos', (req, res) => { 
    console.log(req.body);

    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {

        res.status(201).send({
            status: 'ok',
            code: 201,
            savedObject :doc
        });


    }, (err) => {
        res.status(400).send({
            status: 'Bad request',
            code: 400,
            Error: err
           });
           console.log('Unable to save todo:',err);
           
    });
    
    
});

app.listen(3000, () => {
    console.log('Started on port 3000');
    });
