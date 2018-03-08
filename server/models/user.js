var mongoose = require('mongoose');

var userSchema = {
    email: {
        type: String,
        required: true,
        min: 1,
        trim: true
    }
};
var User = mongoose.model('User', userSchema);

/* var newUser = new User({
    email: '   mhwatti@sirteoil.com.ly         '
});

newUser.save().then((doc) => {
    console.log(JSON.stringify(doc,undefined,2));
    
}, (err) => {
    console.log('Unable to save User: ',err);
    
}); */

module.exports = {User};