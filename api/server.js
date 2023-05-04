const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

app.listen(3000, ()=>{
    console.log('listening...');
});















mongoose.connect('mongodb://localhost:27017/portfoliocrud')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});