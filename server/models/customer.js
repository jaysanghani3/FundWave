const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
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
    required: false,
  },
  type: {
    type: String,
    required: false,
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
    required: false,
  },
  state: {
    type: String,
    required: false,
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
    required: false,
  },
  updatedOnDate: {
    type: Date,
    required: false,
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

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;