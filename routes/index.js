const express = require('express');
const router = express.Router();
const { getHomePage, getAboutPage } = require('../controllers/indexController');

// Home Page
router.get('/', getHomePage);

// About Page
router.get('/about', getAboutPage);

module.exports = router;