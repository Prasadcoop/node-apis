const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/users/:id', userController.getUserById);
router.get('/users', userController.getAllUsers); 
router.post('/users',userController.createUser);
router.put('/users/:id', userController.getUserUpdate);

// Define routes and map them to controller functions
// router.post('/users', userController.createUser);       // Create a user
// router.get('/users', userController.getAllUsers);       // Read all users
// router.get('/users/:id', userController.getUserById);   // Read a user by ID
// router.put('/users/:id', userController.updateUser);    // Update a user by ID
// router.delete('/users/:id', userController.deleteUser); // Delete a user by ID

module.exports = router;
