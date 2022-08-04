const mongoose = require('mongoose');

const validator = require('validator');
mongoose.connect('mongodb://127.0.0.1:27017/Brillio');

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

// const newTraining = new Training({
//     _id:"23432",
//     trainingId:"3",
//     trainerId:"23432",
//     traineeId:"3",
//     trainingStartDate:"12-12-2015"
// });

// newTraining.save()
// .then(res=>console.log(res))
// .catch(err=>console.log(err));

module.exports  = Training;