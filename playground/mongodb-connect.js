//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB Server');

    var db = client.db('TodoApp');



    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false

    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todos: ', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));

    // });

    db.collection('Users').insertOne({
        name: 'Abdelkarim, Mohamed',
        age: '42',
        location: 'Benghazi, Libya'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todos: ', err);
        }
        console.log(result.ops);
    });

    client.close();
});