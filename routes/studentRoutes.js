const express = require('express');
const router = express.Router();

const {
    getAllStudents,
    addStudent
} = require('../controllers/studentController');

router.get('/', getAllStudents);
router.post('/', addStudent);
// /api/users/

module.exports =router;