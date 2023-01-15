const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

// Create a new user
router.post('/', userController.createUser);

// Get all users
router.get('/', userController.getAllUsers);

// Get a specific user
router.get('/:userId', userController.getUser);

// Update a specific user
router.put('/:userId', userController.updateUser);

// Delete a specific user
router.delete('/:userId', userController.deleteUser);

module.exports = router;