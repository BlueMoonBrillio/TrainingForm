const mongoose = require('mongoose');
const validator  = require('validator');
// TASK Schema: 
const Training = mongoose.model ('training',{
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
        trim:true,
    },
    trainingEndDate:{
        type:Date,
        required:true,
        trim:true,
    }


});

module.exports  = Training;