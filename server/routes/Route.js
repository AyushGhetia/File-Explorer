const express = require('express');
const router = express.Router();
const fileController = require('../controllers/FileController');

router.get('/', fileController.getFiles);
router.post('/create', fileController.createFile);
router.put('/rename', fileController.renameFile);
router.delete('/delete', fileController.deleteFile);

module.exports = router;
