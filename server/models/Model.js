const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    name: String,
    type: String,
    required: true,
});

module.exports = mongoose.model('File', FileSchema);