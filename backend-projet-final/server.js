const cors = require('cors');
const express = require ('express');
require ('./config/connect')


const app = express();
app.use(express.json());
app.use(cors());

app.use('/getimage',express.static('./uploads'))


//http://127.0.0.1:3000
const adminRoute = require ('./routes/admin');
const clientRoute = require ('./routes/client');
const employeeRoute = require ('./routes/employee');
const departRoute = require ('./routes/departement');

 app.use ('/admin' ,adminRoute);
 app.use ('/client' ,clientRoute);
 app.use ('/employee' ,employeeRoute);
 app.use ('/departement' ,departRoute);
 
 app.listen( 3000 ,()=>{
    
    console.log('Hey server is working !');

});






