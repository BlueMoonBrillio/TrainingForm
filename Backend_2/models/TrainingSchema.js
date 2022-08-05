const mongoose = require('mongoose');
const Joi = require('joi');

// Training Schema: 

const schema = new mongoose.Schema({
    trainingId:{
        type:String,
        required:true,
        trim:true
    },
    trainerId:{
        type:String,
        required:true,
        trim:true
    },
    traineeId:{
        type:String,
        required:true,
        trim:true

    },
    trainingStartDate:{
        type:Date,
        required:true,
        default: Date.now,
        trim:true,
    },
    trainingEndDate:{
        type:Date,
        default : Date.now,
        required:true,
        trim:true,
    }
});

const Training = mongoose.model ('training',schema);

// /Training.insertMany([{'trainingId':"Sd12", 'trainerId': "3",'traineeId': "2",'trainingStartDate': new Date(), 'trainingEndDate': new Date()}])
    

function validateTraining(training){
    const schema = {
        trainingId:  Joi.number().integer().positive().required(),
        trainerId : Joi.number().integer().positive().required(),
        traineeId: Joi.number().integer().positive().required(),
        trainingStartDate: Joi.date().required(),
        trainingEndDate: Joi.date().required()
    }
    return Joi.validate(training,schema);

}
exports.Training  = Training;
exports.validate = validateTraining
