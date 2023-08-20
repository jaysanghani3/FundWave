// routes/invoiceRoutes.js

const express = require('express');
const invoiceController = require('../controllers/invoiceController');
// const { createInvoice, updateInvoice } = require('../validators/invoiceValidator');

const router = express.Router();

router.post('/store',  invoiceController.createInvoice);

router.get('/getall', invoiceController.getInvoices);
router.get('/:id', invoiceController.getInvoiceById);

router.put('/:id',  invoiceController.updateInvoiceById);

router.delete('/:id', invoiceController.deleteInvoiceById);

module.exports = router;
