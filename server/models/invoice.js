const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  sender: {
    companyName: {
    type: String,
    required: true,
  },
    firstName: {
    type: String,
    required: true,
  },
    lastName: {
    type: String,
    required: true,
  },
    country: {
    type: String,
    required: true,
  },
    addressLine1: {
    type: String,
    required: true,
  },
    addressLine2: {
    type: String,
    required: true,
  },
    state: {
    type: String,
    required: true,
  },
    city: {
    type: String,
    required: true,
  },
    phone: {
    type: Number,
    required: true,
  },
    email: {
    type: String,
    required: true,
  },
  },
  recipient: {
    companyName: {
    type: String,
    required: true,
  },
    firstName: {
    type: String,
    required: true,
  },
    addressLine1: {
    type: String,
    required: true,
  },
    addressLine2: {
    type: String,
    required: true,
  },
    city: {
    type: String,
    required: true,
  },
    state: {
    type: String,
    required: true,
  },
    country: {
    type: String,
    required: true,
  },
    postalCode: {
    type: Number,
    required: true,
  },
    phone: {
    type: Number,
    required: true,
  },
    email: {
    type: String,
    required: true,
  },
  },
  items: [
    {
      name: {
    type: String,
    required: true,
  },
      description: {
    type: String,
    required: true,
  },
      quantity: Number,
      price: Number,
      discount: Number,
      taxableValue: Number,
      cgst: Number,
      sgst: Number,
      igst: Number,
      total: Number,
    }
  ],
  subTotal: Number,
  discount: Number,
  taxableValue: Number,
  cgst: Number,
  sgst: Number,
  igst: Number,
  total: Number,
  terms: String,
  notes: String,
    
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
