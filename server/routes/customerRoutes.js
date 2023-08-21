const express = require('express');
const customerController = require('../controllers/customerController');
// const { createCustomer, updateCustomer } = require('../validators/customerValidator');

const router = express.Router();

//createCustomer
router.post('/store', customerController.createCustomer);

router.get('/getall', customerController.getCustomers);
router.get('/:id', customerController.getCustomerById);
router.get('/code/:code', customerController.getByCustomerCode);
router.get('/companyName/:companyName', customerController.getByCustomerCompanyName);
//updateCustomer
router.put('/:id',  customerController.updateCustomerById);

router.delete('/:id', customerController.deleteCustomerById);
router.delete('/companyName/:companyName', customerController.deleteCustomerByCompanyName);
router.delete('/code/:code', customerController.deleteCustomerByCode);
//router.post('/city', customerController.getByCity)

module.exports = router;
