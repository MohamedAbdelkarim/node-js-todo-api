const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator:validator.isEmail,
            
            message: '{value} is not a valid email address'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }] 
});

userSchema.methods.toJSON = function() {
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['_id','email']);
};

userSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(),access},'abc123').toString();

    user.tokens.push({access, token});

    return user.save().then(() =>{
        return token;
    })
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