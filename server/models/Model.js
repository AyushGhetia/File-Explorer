const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    children: [this],
});

module.exports = mongoose.model('File', FileSchema);