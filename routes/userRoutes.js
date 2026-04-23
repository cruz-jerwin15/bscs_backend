const express = require('express');
const router = express.Router();

const {
    getAllUsers
} = require('../controllers/userController');

router.get('/', getAllUsers);
// /api/users/

module.exports =router;