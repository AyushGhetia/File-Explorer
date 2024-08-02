
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Routes = require('./routes/Route');

const app = express();
app.use(express.json);
app.use(cors);


mongoose.connect('mongodb://localhost:27017/fileStructure', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/files', Routes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});