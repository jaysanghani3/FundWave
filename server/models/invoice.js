const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  gstNo: {
    type: String,
    required: true,
  },

  invoiceNo: {
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
  companyName: {
    type: String,
    required: true,
  },
  cashCredit: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },

  items: [
    {
      product: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      qty: Number,
      rate: Number,
      discount: Number,
      taxableValue: Number,
      taxCode: Number,
      total: Number,
    },
  ],
  subTotal: Number,
  discount: Number,
  taxableValue: Number,
  cgst: Number,
  sgst: Number,
  total: Number,
  terms: String,
  remarks: String,
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
