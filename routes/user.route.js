const express = require('express');
const router = express.Router();

// Require the controllers
const user_controller = require('../controllers/user.controller');

// routes/user.route.js
router.post('/create', user_controller.user_create);


module.exports = router;
