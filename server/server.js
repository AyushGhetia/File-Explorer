require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Routes = require('./routes/Route');

const app = express();
app.use(express.json);
app.use(cors);

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database Connected'))
  .catch(err => console.error('connection error:', err));



app.use('/api/files', Routes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});