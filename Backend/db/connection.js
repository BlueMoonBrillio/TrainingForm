const mongoose = require("mongoose");

const url='mongodb+srv://bluemoon:ZpVqLSidVgrp1Qly@cluster0.wdkv3.mongodb.net/brillio_training?retryWrites=true&w=majority'
const connection =  ()=>{mongoose.connect(url).then( () => {
    console.log('Connected to the database ')
})
.catch( (err) => {
    console.error(`Error connecting to the database. n${err}`);
})}
module.exports=connection