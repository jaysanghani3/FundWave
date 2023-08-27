const Invoice = require("../models/invoice");
const Customer = require("../models/customer");
const mongoose = require("mongoose");
exports.createInvoice = async (req, res) => {
  try {
    const invoice = new Invoice(req.body);
    const totalInvoiceAmount = invoice.total;
    await invoice.save();
    // Update customer's totalInvoiceAmount
    await Customer.findOneAndUpdate(
      { companyName: invoice.companyName },
      {
        $push: {
          invoicesList: {
            invoiceNo: invoice.invoiceNo,
            invoiceDate: invoice.createdDate,
            dueDate: invoice.dueDate,
            totalAmount: invoice.total,
            paymentType: invoice.cashCredit,
          },
        },
        $inc: {
          totalInvoicesAmount: invoice.total,
        },
      }
    );
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
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }

    // Retrieve customer data based on the invoice's companyName
    const customer = await Customer.findOne({ companyName: invoice.companyName });

    if (!customer) {
      return res.status(404).json({ error: "Customer not found for this invoice" });
    }

    // Update customer's invoicesList and totalInvoicesAmount
    customer.invoicesList = customer.invoicesList.filter(
      (inv) => inv.invoiceNo.toString() !== invoice.invoiceNo.toString()
    );
    customer.totalInvoicesAmount -= invoice.total;
    await customer.save();

    // Delete the invoice
    await Invoice.findByIdAndRemove(req.params.id);

    await session.commitTransaction();
    session.endSession();

    res.json({ message: "Invoice deleted successfully", invoice });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    res.status(500).json({ error: error.message });
  }
};
