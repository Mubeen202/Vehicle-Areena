var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var User = new Schema({
    username: String,
    email: String,
    password: { type: String, required: true },
    role: { type: Number, default: 0 },
    order:{ type:Array, default: [] },
}, 
{timestamps: true
    
})

module.exports = mongoose.model('User', User);