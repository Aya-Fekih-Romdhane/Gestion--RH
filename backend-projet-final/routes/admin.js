
const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');

//request 
// http://127.0.0.1:3000/admin
//request admin

router.post('/register',  (req, res)=>{
    let data = req.body;
    let c = new Admin (data);

    //crypt
    let salt = bcrypt.genSaltSync(10);
    let cryptedPass = bcrypt.hashSync(data.password , salt);
   
    c.password=cryptedPass;
    c.save()
    .then(
        (newclt)=>{
            res.send(newclt)
        }
    )
    .catch(
        (error)=>{
            res.send(error)
        }
    )
})

router.post('/login',(req,res)=>{

    let data = req.body;
    Admin.findOne({email : data.email})

    .then(
        (adm)=>{
            let valide = bcrypt.compareSync(data.password , adm.password);
            if(!valide){
                res.status(401).send('email or password not matched !');
            }else{
                //create token
                let payload ={

                    name : adm.name,
                    _id : adm._id,
                    email :adm.email
                }

                let token = jwt.sign(payload , 'secret_key')
                res.status(200).send({myToken : token});

            }

        }

    )
    .catch(
        (err)=>{
            send.res(err)
        }

    )


})




//update Admin

router.put('/update/:id',(req,res)=>{
    let id = req.params.id;
    let newData = req.body;
    Admin.findByIdAndUpdate({_id:id},newData)
    .then(
        (updated)=>{
            res.send(updated)
        }
    )
    .catch(
        (err)=>{
            res.send(err)
        }
    )
})
module.exports=router;