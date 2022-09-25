const mongoose = require ('mongoose');

const Departement = mongoose.model('Departement' , {
    name:String,
    description: String,
    etage:Number,
    salle:Number
})
module.exports = Departement;