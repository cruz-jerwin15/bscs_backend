const express = require('express');
const router = express.Router();

const {
    getAllUsers,
    addUser,
    getUserById,
    getUserByName,
    updateUser,
    deleteUser
} = require('../controllers/userController');

router.get('/', getAllUsers);
router.post('/', addUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/search/:name', getUserByName);

// /api/users/

module.exports =router;