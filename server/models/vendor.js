const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  contactPerson: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
    length: 10,
  },
  email: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  type: {
    type: String,
  },
  gst: {
    type: String,
    required: true,
  },
  pan: {
    type: String,
    required: true,
  },
  billingAddress: {
    type: String,
    required: true,
  },
  shippingAddress: {
    type: String,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  createdOnDate: {
    type: Date,
  },
  updatedOnDate: {
    type: Date,
  },
  notes: {
    type: String,
  },
  totalPurchasesAmount: {
    type: Number,
    default: 0,
  },
  totalPayableAmount: {
    type: Number,
    default: 0,
  },
  purchasesList:[
    {
      purchaseNo: String,
      purchaseDate: Date,
      dueDate: Date,
      totalAmount: Number,
      totalPayableAmount: Number,
      status:String,
      paymentType:String,
    },
  ],
  bankName: {
    type: String,
  },
  accountNumber: {
    type: Number,
  },
  ifsc: {
    type: String,
  },
  branch: {
    type: String,
  },
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;