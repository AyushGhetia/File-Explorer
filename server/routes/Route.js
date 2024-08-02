const express = require('express');
const router = express.Router();
const FileController = require('../controllers/FileController');

router.get('/',FileController.getFiles);

module.exports = router;