const express = require('express');
const router = express.Router();
const {login, register, logout, getRegisterPage, getLoginPage} = require('../controllers/authController');
const { isNotAuthenticated } = require('../middleware/auth');

// Login Page
router.get('/login', isNotAuthenticated, getLoginPage);

// Register Page
router.get('/register', isNotAuthenticated, getRegisterPage);

// Handle Login
router.post('/login', login);

// Handle Register
router.post('/register', register);

// Logout
router.get('/logout', logout);

module.exports = router;