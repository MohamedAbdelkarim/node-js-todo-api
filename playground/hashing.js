const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!'

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log('Password: '+password+ '\r\n'+'Hashed Password: '+hash);
        
//     });
// });

var HashedPassword= '$2a$10$ONyuWPPPbbCuKEN4k3jN3.91ub.x/r.FuUgijDJ/yfwki9.nnNsK6' || '$2a$10$T/JDjGg5BCh1U9pY5A.2CuRoFM7eXjnXrmd2HBbynYWqyTpAldo7S';

bcrypt.compare(password, HashedPassword, (err, res) => {
    console.log(res);
    
});

// Example
// var data = {
//     id: 10
// };

// var token = jwt.sign(data,'123abc');

// console.log(token);

// var decoded = jwt.verify(token,'123abc');
// console.log('Decoded:',decoded);
