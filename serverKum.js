const express = require('express');
const app = express();
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/kumont');
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('opem', () => console.log('Connected to Database'));

app.use(express.json());


const peopleRouter = require('./routes/people')
app.use('/kumont', peopleRouter)

app.listen(3000, () => console.log('server listening on port 3000'));