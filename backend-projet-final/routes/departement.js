const express = require('express');
const router = express.Router();
const Departement = require('../models/departement');



//request departement

//ajout departement

router.post('/ajout' , (req , res)=>{
    let data = req.body;
    let dep = new Departement (data);
    dep.save()
    .then(
        (saved)=>{
        res.send(saved) 
         }
    )
    .catch(
        (error)=>{
        res.send(error) 
        }
    )

})

// get all departement

router.get('/all' , (req,res)=>{
   Departement.find()
   .then(
    (departs)=>{res.send(departs)}
   )
   .catch(
    (error)=>{res.send(error)}
   )
})

//get depart by id

router.get('/getbyid/:id', (req,res)=>{
    let myid= req.params.id
    Departement.findOne({ _id :myid  })
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

// delete Depart


router.delete('/delete/:id', (req,res)=>{
    let myId=req.params.id;
    Departement.findByIdAndDelete({_id:myId})
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

//update Depart

router.put('/update/:id',(req,res)=>{
    let id = req.params.id;
    let newData = req.body;
    Departement.findByIdAndUpdate({_id:id},newData)
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