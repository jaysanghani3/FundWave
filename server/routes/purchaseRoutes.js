// routes/purchaseRoutes.js

const express = require('express');
const purchaseController = require('../controllers/purchaseController');
// const { createPurchase, updatePurchase } = require('../validators/purchaseValidator');

const router = express.Router();

router.post('/store',  purchaseController.createPurchase);

router.get('/getall', purchaseController.getPurchases);
router.get('/:id', purchaseController.getPurchaseById);

router.put('/:id',  purchaseController.updatePurchaseById);

router.delete('/:id', purchaseController.deletePurchaseById);

module.exports = router;
