const Invoice = require("../models/invoice");
const Customer = require("../models/customer");

exports.createInvoice = async (req, res) => {
  try {
    const invoice = new Invoice(req.body);
    const totalInvoiceAmount = invoice.total;
    await invoice.save();
    // Update customer's totalInvoiceAmount
    await Customer.findOneAndUpdate({ companyName: invoice.companyName }, { $set: { totalInvoiceAmount: totalInvoiceAmount } });
    console.log(totalInvoiceAmount);
    res.status(201).json({ message: "Invoice created successfully", invoice });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getInvoiceById = async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }
    res.json(invoice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateInvoiceById = async (req, res) => {
  try {
    const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!invoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }
    res.json({ message: "Invoice updated successfully", invoice });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteInvoiceById = async (req, res) => {
  try {
    const invoice = await Invoice.findByIdAndRemove(req.params.id);
    if (!invoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }
    res.json({ message: "Invoice deleted successfully", invoice });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
