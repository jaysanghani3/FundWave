// routes/registrationRoutes.js

const express = require('express');
const registrationController = require('../controllers/registrationController');
// const { createRegistration, updateRegistration } = require('../validators/registrationValidator');

const router = express.Router();

router.post('/store',  registrationController.createRegistration);

router.get('/getall', registrationController.getRegistrations);
router.get('/:id', registrationController.getRegistrationById);

router.put('/:id',  registrationController.updateRegistrationById);

router.delete('/:id', registrationController.deleteRegistrationById);


// login routes
router.post('/login', registrationController.login);

module.exports = router;
