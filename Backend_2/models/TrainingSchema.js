const mongoose = require('mongoose');
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
        type:String,
        required:true,
        trim:true
    }

});

module.exports  = Training;