//  PRANAV
const {Training,Validate} = require('../models/TrainingSchema')
const express= require('express')
const app=express()
const router = express.Router()

router.get('/',async (req,res)=>{
    let results={}
    if(!req.query.id){
        try{
        results = await  Training.find({}).sort('trainingId')
        }
        catch(err){console.log(err);  } 
    }
    else{
        const id=req.query.id
        console.log(id)
        try{
        results = await Training.find({'trainingId':id})
        console.log(results)
        }
        catch(err){console.log(err);  } 
    }
    res.send(results)
})

router.post('/',async (req,res)=>{
    Training.insertMany([{'trainingId': req.body.trainingId, 'trainerId': req.body.trainerId,'traineeId': req.body.traineeId,'trainingStartDate': req.body.trainingStartDate, 'trainingEndDate': req.body.trainingEndDate}])
    .then(function(){
        console.log("Data inserted at time:"+new Date() )  // Success
        res.sendStatus(200)
    }).catch(function(error){
        console.log("Could not insert data"+error)      // Failure
        res.status(400).send('Bad Request')
    });
})

router.delete('/',async (req,res)=>{
    const id =req.query.id;
    console.log(id)
    await Training.deleteOne({ trainingId: id })
    .then(function(){
        console.log("Data deleted at time:"+new Date() )  // Success
        res.sendStatus(200)
    }).catch(function(error){
        console.log("Could not delete data"+error)      // Failure
        res.status(400).send('Bad Request')
    });
})

router.put('/',async (req,res)=>{
    const id =req.query.id;
    await Training.updateOne({'trainingId':id},
    {$set:{
        'trainingId': req.body.trainingId , 
        'trainerId':req.body.trainerId ,
        'traineeId': req.body.traineeId , 
        'trainingStartDate': req.body.trainingStartDate ,  
        'trainingEndDate': req.body.trainingEndDate, 
    }})
    .then(function(){
        console.log("Data updated at time:"+new Date() )  // Success
        res.sendStatus(200)
    }).catch(function(error){
        console.log("Could not insert data"+error)      // Failure
        res.status(400).send('Bad Request')
    });
})



module.exports=router




