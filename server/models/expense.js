const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),  
  },
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
