const mongoose = require("mongoose");

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
const url='mongodb+srv://bluemoon:ZpVqLSidVgrp1Qly@cluster0.wdkv3.mongodb.net/brillio_training?retryWrites=true&w=majority'
const connection =  mongoose.connect(url,connectionParams)
.then( () => {
    console.log('Connected to the database ')
})
.catch( (err) => {
    console.error(`Error connecting to the database. n${err}`);
})
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// const trainingData = new Schema({
//   _id: ObjectId,
//   trainingId: String,
//   trainerId: String,
//   trainingStartDate: Date,
//   trainingEndDate: Date
// });

const training = mongoose.model('training', trainingData);



// training.insertOne([{ trainingId: 'E12',  trainerId: '1',  trainingStartDate: new Date(), trainingEndDate: new Date()}], function(err) {});
