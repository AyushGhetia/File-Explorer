const File = require('../models/Model');

exports.getFiles = async (req, res) => {
  try {
    const files = await File.find();
    res.json(files);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.createFile = async (req, res) => {
  const { name, type, parentId } = req.body;
  const newFile = new File({ name, type, children: [] });

  try {
    if (parentId) {
      const parent = await File.findById(parentId);
      parent.children.push(newFile);
      await parent.save();
    } else {
      await newFile.save();
    }
    res.status(201).json(newFile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.renameFile = async (req, res) => {
  const { id, newName } = req.body;

  try {
    const file = await File.findById(id);
    file.name = newName;
    await file.save();
    res.json(file);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.deleteFile = async (req, res) => {
  const { id } = req.body;
  try {
    await File.findByIdAndDelete(id);
    res.json({ message: 'File deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
