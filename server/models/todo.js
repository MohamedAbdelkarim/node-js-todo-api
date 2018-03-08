var mongoose = require('mongoose');


var todoSchema = {
    text: {
        type: String,
        required: true,
        min: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
};
var Todo = mongoose.model('Todo', todoSchema);

/* var newTodo = new Todo({
    text: 'Cock dinner'
});

newTodo.save().then((doc) => {
    console.log('Saved Todo:',doc);
    
}, (err) => {
    console.log('Save failed: ',err);
    
});

var newTodo = new Todo({
    text: 'Cock breakfast',
    
    completedAt: new Date().getTime()
});

newTodo.save().then((doc) => {
    console.log('Saved Todo:',doc);
    
}, (err) => {
    console.log('Save failed: ',err);
    
}); */

module.exports = {Todo};