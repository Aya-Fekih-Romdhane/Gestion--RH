const mongoose = require ('mongoose');
const objectId = require ('mongodb').ObjectId
const Employee = mongoose.model('Employee' , {
    name:String,
    lastname: String,
    image:String,
    tel:String,
    email:String,
    adress:String,
    idDep:objectId
})
module.exports = Employee;