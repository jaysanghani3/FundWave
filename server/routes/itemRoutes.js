// routes/itemRoutes.js

const express = require('express');
const itemController = require('../controllers/itemController');
// const { createItem, updateItem } = require('../validators/itemValidator');

const router = express.Router();

router.post('/store',  itemController.createItem);

router.get('/getall', itemController.getItems);
router.get('/:id', itemController.getItemById);
router.get('/code/:code', itemController.getByItemCode);
router.get('/companyName/:companyName', itemController.getByItemCompanyName);

router.put('/:id',  itemController.updateItemById);

router.delete('/:id', itemController.deleteItemById);
router.delete('/companyName/:companyName', itemController.deleteItemByCompanyName);
router.delete('/code/:code', itemController.deleteItemByCode);
//router.post('/city', itemController.getByCity)

module.exports = router;
