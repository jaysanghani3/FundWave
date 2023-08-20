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
    required: true,
  },
  type: {
    type: String,
    required: true,
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
    required: true,
  },
  updatedOnDate: {
    type: Date,
    required: true,
  },
  notes: {
    type: String,
  },
  purchasesData: {
    totalPurchaseCount: {
      type: Number,
      default: 0,
    },
    totalPurchaseAmount: {
      type: Number,
      default: 0,
    },
  },
  salesData: {
    totalSaleCount: {
      type: Number,
      default: 0,
    },
    totalSaleAmount: {
      type: Number,
      default: 0,
    },
  },
  returnsData: {
    totalReturnCount: {
      type: Number,
      default: 0,
    },
    totalReturnAmount: {
      type: Number,
      default: 0,
    },
  },
  paymentsData: {
    totalPaymentCount: {
      type: Number,
      default: 0,
    },
    totalPaymentAmount: {
      type: Number,
      default: 0,
    },
  },
  bankingInfo: {
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
  },
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;