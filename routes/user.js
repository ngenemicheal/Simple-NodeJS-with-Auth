const express = require('express');
const router = express.Router();
const { getDashboard } = require('../controllers/userController');
const { isAuthenticated } = require('../middleware/auth');

// User Dashboard
router.get('/dashboard', isAuthenticated, getDashboard);

module.exports = router;