// routes/userRoutes.js

const express = require('express');
const userController = require('../controllers/userController');
// const { createUser, updateUser } = require('../validators/userValidator');

const router = express.Router();

router.post('/store',  userController.createUser);

router.get('/getall', userController.getUsers);
router.get('/:id', userController.getUserById);

router.put('/:id',  userController.updateUserById);

router.delete('/:id', userController.deleteUserById);

// login routes
router.post('/login', userController.login);

module.exports = router;
