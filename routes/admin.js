const express = require('express');
const router = express.Router();
const { getLoginPage, getDashboard, login } = require('../controllers/adminController');
const { isAdmin } = require('../middleware/auth');

// Admin Login Page
router.get('/login', getLoginPage);

// Handle Admin Login
router.post('/login', login);

// Admin Dashboard
router.get('/dashboard', isAdmin, getDashboard);

module.exports = router;