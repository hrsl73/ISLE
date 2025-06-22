const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Register new user
router.post('/register', registerUser);

// Login existing user
router.post('/login', loginUser);

// More routes (e.g., Google login) will go here later

module.exports = router;
