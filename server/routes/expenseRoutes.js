const express = require('express');
const expenseController = require('../controllers/expenseController');
// const { createExpense, updateExpense } = require('../validators/expenseValidator');

const router = express.Router();

//createExpense
router.post('/store', expenseController.createExpense);

router.get('/getall', expenseController.getExpenses);
router.get('/:id', expenseController.getExpenseById);
router.get('/code/:code', expenseController.getByExpenseCode);
router.get('/companyName/:companyName', expenseController.getByExpenseCompanyName);
//updateExpense
router.put('/:id',  expenseController.updateExpenseById);

router.delete('/:id', expenseController.deleteExpenseById);
router.delete('/companyName/:companyName', expenseController.deleteExpenseByCompanyName);
router.delete('/code/:code', expenseController.deleteExpenseByCode);
//router.post('/city', expenseController.getByCity)

module.exports = router;
