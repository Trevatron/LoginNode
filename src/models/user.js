const moongose = require('../database');

const UserSchema = new moongose.Schema({
    name: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        unique:true,
        required:true,
        lowercase: true,
    },

    password: {
        type: String,
        required: true,
        select: false,
    },
    createAt: {
        type:Date,
        default: Date.now,
    },

});


const User = moongose.model('User',UserSchema);

module.exports = User;