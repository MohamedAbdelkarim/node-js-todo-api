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

    // db.collection('Todos').findOneAndUpdate(
    //     {_id: new ObjectID('5a9fcb23a0f0bf0c881b8ab3')},
    //     {
    //         $set:{
    //             completed: true
    //         }
    //     },
    //     {
    //         retunOriginal: false
    //     })
    //     .then((res) => {
    //          console.log(res);
            
    //     });


        db.collection('Users').findOneAndUpdate(
            {_id: new ObjectID('5a9f24f4ee842d0ed879e924')},
            {
                $inc:{
                    age: -20
                }
            },
            {
                retunOriginal: false
            })
            .then((res) => {
                 console.log(res);
                
            });

     client.close();
});