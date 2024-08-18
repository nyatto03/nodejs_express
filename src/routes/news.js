const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// Route cho các trang cụ thể dựa trên 'slug'
router.get('/:slug', newsController.show);

// Route cho trang chủ của 'news'
router.get('/', newsController.index);

module.exports = router;
