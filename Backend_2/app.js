// PLEASE FIX this part , donot use boiler plate 

require('./routes/server');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


// middlewares 
app.use(cors());
app.use(express.json());



app.listen(PORT,()=>{
console.log('listening on port '+PORT);
});