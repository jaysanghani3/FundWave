const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  gst: {
    type: String,
    required: true,
  },
  purchaseNo: {
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
  billingAddress: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
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

const Purchase = mongoose.model("Purchase", purchaseSchema);

module.exports = Purchase;
