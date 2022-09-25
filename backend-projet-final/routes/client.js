
const express = require('express');
const router = express.Router();
const Client = require('../models/client');
const multer = require ('multer');





let filenameGlobal='';
const myStorage = multer.diskStorage({
    destination :'./uploads',
    filename:(req,file,redirect)=>{
       let date = Date.now();
       let fl = date + '.'+ file.mimetype.split('/')[1];
       filenameGlobal = fl;
       redirect(null , fl);


    }
})

const upload = multer ({storage : myStorage});

//request 
// http://127.0.0.1:3000/client
//request client

router.post('/ajout', upload.any('image'), (req, res)=>{
    let data = req.body;
    let c = new Client (data);
    c.image=filenameGlobal;
    c.save()
    .then(
        (newclt)=>{
            filenameGlobal='';
            res.send(newclt)
        }
    )
    .catch(
        (error)=>{
            res.send(error)
        }
    )
})



// get all clients

router.get('/all' , (req,res)=>{
   Client.find()
   .then(
    (clients)=>{res.send(clients)}
   )
   .catch(
    (error)=>{res.send(error)}
   )
})

//get client by id

router.get('/getbyid/:id', (req,res)=>{
    let myid= req.params.id
    Client.findOne({ _id :myid  })
        .then(
            (result)=>{
                res.send(result);
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )
})

// delete client 


router.delete('/delete/:id', (req,res)=>{
    let myId=req.params.id;
    Client.findByIdAndDelete({_id:myId})
    .then(
        (deleted)=>{
            res.send(deleted)
        }
    )
    .catch(
        (err)=>{
            res.send(err)
        }
    )
})

//update Client 

router.put('/update/:id',upload.any('image'),(req,res)=>{
    let id = req.params.id;
    let newData = req.body;

    if(filenameGlobal.length>0){
        newData.image=filenameGlobal;

    }

    Client.findByIdAndUpdate({_id:id},newData)
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