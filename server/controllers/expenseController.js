// controllers/expenseController.js

const Expense = require('../models/expense');

exports.createExpense = async (req, res) => {
    try {
        const expense = new Expense(req.body);
        await expense.save();
        res.status(201).json({ message: 'Expense created successfully', expense });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getExpenses = async (req, res) => {
    try{
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getExpenseById = async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);
        if (!expense) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        res.json(expense);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getByExpenseCode = async (req, res) => {
    try {
        const expenses = await Expense.find({ code: req.params.code }).exec();

        if (!expenses) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getByExpenseCompanyName = async (req, res) => {
    try {
        const expenses = await Expense.find({ companyName: { $regex: req.params.companyName, $options: "i" }}).exec();

        console.log('Expense not found');
        if (!expenses) {

            return res.status(404).json({ error: 'Expense not found' });
        }
        res.json(expenses);
    } catch (error) {
        console.log('Expense not found');

        res.status(500).json({ error: error.message });
    }
};

exports.updateExpenseById = async (req, res) => {
    try {
        const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!expense) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        res.json({ message: 'Expense updated successfully', expense });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteExpenseById = async (req, res) => {
    try {
        const expense = await Expense.findByIdAndRemove(req.params.id);
        if (!expense) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        res.json({ message: 'Expense deleted successfully', expense });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteExpenseByCompanyName = async (req, res) => {
    try {
        const expense = await Expense.deleteOne({ companyName: { $regex: req.params.companyName, $options: "i" }});
        if (!expense) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        res.json({ message: 'Expense deleted successfully', expense });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteExpenseByCode = async (req, res) => {
    try {
        const expense = await Expense.deleteOne({ code: req.params.code});
        if (!expense) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        res.json({ message: 'Expense deleted successfully', expense });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
