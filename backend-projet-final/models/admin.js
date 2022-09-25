const mongoose = require ('mongoose');
const Admin = mongoose.model('Admin' , {
    name: {
        type     : String,
        required : true
    },
    email: {
        type     : String,
        required : true,
        unique   : true
    },
    password: {
        type     : String,
        required : true
    }
})
module.exports = Admin;