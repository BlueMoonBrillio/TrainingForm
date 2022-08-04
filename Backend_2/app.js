// PLEASE FIX this part , donot use boiler plate 


const express = require('express');
const app = express();
const trainings = require('./routes/trainings');

//mongodb database connection
require('./db/connection');

// middlewares 
app.use(cors());
app.use(express.json());


app.use('/trainings',trainings);

const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
console.log('listening on port '+PORT);
});
