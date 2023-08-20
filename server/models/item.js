const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  category:{
    type: String,
    required: true,
  },
  code:{
    type: String,
    required: true,
  },
  type:{
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  stockUnit:{
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  reorderLevel: {
    type: Number,
    default: 0,
  },
  expiryDate: Date,
  gst: {
    type: Number,
    default: 0,
  },
  purchasePrice: {
    type: Number,
    default: 0,
  },
  purchaseRateFactor: {
    type: Number,
    default: 0,
  },
  mrp: {
    type: Number,
    default: 0,
  },
  minimumSalePrice: {
    type: Number,
    default: 0,
  },
  salePrice: {
    type: Number,
    default: 0,
  },
  wholeSalePrice: {
    type: Number,
    default: 0,
  },
  dealerPrice: {
    type: Number,
    default: 0,
  },
  saleRateFactor: {
    type: Number,
    default: 0,
  },
  discount: {
    type: Number,
    default: 0,
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
