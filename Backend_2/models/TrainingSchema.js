const mongoose = require('mongoose');
const Joi = require('joi');

// Training Schema: 

const schema = new mongoose.Schema({
    _id:{
        type:Number,
        required:true,
        trim:true
    },
    trainingId:{
        type:Number,
        required:true,
        trim:true
    },
    trainerId:{
        type:Number,
        required:true,
        trim:true
    },
    traineeId:{
        type:Number,
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

function validateTraining(training){
    const schema = {
        _id: Joi.number().integer().positive().required(),
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
