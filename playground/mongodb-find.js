//const MongoClient = require('mongodb').MongoClient;

const {
    MongoClient,
    ObjectID
} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB Server');

    var db = client.db('TodoApp');

    // db.collection('Todos').find({_id: new ObjectID('5a9f160a4e96e126b86d587f')}).toArray()
    //     .then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));


    //     }, (err) => {
    //         console.log('Unable to fetch todos:', err);

    //     });

    db.collection('Users').find({name:'Lovelake'}).toArray()
        .then((docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));


        }, (err) => {
            console.log('Unable to fetch todos:', err);

        });

    // db.collection('Todos').find().count()
    //     .then((count) => {
    //         console.log(`Todos Count: ${count}`);
           


    //     }, (err) => {
    //         console.log('Unable to fetch todos:', err);

    //     });

     client.close();
});