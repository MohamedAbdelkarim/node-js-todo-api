var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp2')
.then((mon => {
    if (mon) {
        console.log('Connected to MongoDb successfully => '+ mon.version);
    }
}))
.catch ((err)=> {
    return console.log('Unable to connect to MongoDb => '+ err);
});

module.exports = { mongoose : mongoose };