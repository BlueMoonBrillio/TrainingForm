const http  = require('http');
const PORT  = process.env.PORT || 3002;
const Training  = require('./models/Training');
require('./db/server.js');
const url = require('url');
const express = require('express');
const cors = require('cors');
const app = express();

//middlewares 
app.use(cors());
app.use(express.json());

app.get('/trainings', async (req, res) => {
    Training.find({})
    .then((trainings) => res.status(200).send(trainings))
    .catch(err => res.status(404).send(err));
})

app.listen(PORT,()=>console.log('listening on port :'+PORT));
