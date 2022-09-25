const mongoose = require ('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/PROJET')
.then(
    ()=>{ console.log('connected TO DB :D');}
)
.catch(
    ()=> { console.log('error');}
)
module.exports=mongoose;