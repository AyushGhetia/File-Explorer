const File = require('../models/Model');

exports.getFiles = async(req,res) => {
    try{
    const files = await Files.find();
    res.json(files);
    } catch (error){
        res.status(500).json({message: error.message});
    }
};