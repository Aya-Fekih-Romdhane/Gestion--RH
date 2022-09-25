const mongoose = require ('mongoose');

const Client = mongoose.model('Client' , {
    name:String,
    description: String,
    entreprise:String,
    titre_projet:String,
    image:String
})
module.exports = Client;