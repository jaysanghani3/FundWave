// routes/vendorRoutes.js

const express = require('express');
const vendorController = require('../controllers/vendorController');
// const { createVendor, updateVendor } = require('../validators/vendorValidator');

const router = express.Router();

router.post('/store',  vendorController.createVendor);

router.get('/getall', vendorController.getVendors);
router.get('/:id', vendorController.getVendorById);
router.get('/code/:code', vendorController.getByVendorCode);
router.get('/companyName/:companyName', vendorController.getByVendorCompanyName);

router.put('/:id',  vendorController.updateVendorById);

router.delete('/:id', vendorController.deleteVendorById);
router.delete('/companyName/:companyName', vendorController.deleteVendorByCompanyName);
router.delete('/code/:code', vendorController.deleteVendorByCode);
//router.post('/city', vendorController.getByCity)

module.exports = router;
