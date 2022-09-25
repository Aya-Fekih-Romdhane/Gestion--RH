const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const multer = require ('multer');




//request EMPLOYEE

//AJOUT EMPLOYEE

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
    let e = new Employee (data);
    e.image=filenameGlobal;
    e.save()
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


// get all employee

router.get('/all' , (req,res)=>{
  Employee.aggregate([

    {
        $lookup :{
            from :'departements',
            localField:'idDep',
            foreignField:'_id',
            as :'dep'
        },      
    }
  ])
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

//get employee by id

router.get('/getbyid/:id', (req,res)=>{
    let myid= req.params.id
    Employee.findOne({ _id :myid  })
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

// delete Employee 


router.delete('/delete/:id', (req,res)=>{
    let myId=req.params.id;
    Employee.findByIdAndDelete({_id:myId})
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

//update Employee

router.put('/update/:id',upload.any('image'),(req,res)=>{
    let id = req.params.id;
    let newData = req.body;

    if(filenameGlobal.length>0){
        newData.image=filenameGlobal;

    }
    
    Employee.findByIdAndUpdate({_id:id},newData)
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