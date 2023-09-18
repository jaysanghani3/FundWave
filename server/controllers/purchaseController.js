const Purchase = require("../models/purchase");
const Vendor = require("../models/vendor");
const mongoose = require("mongoose");

exports.createPurchase = async (req, res) => {
  try {
    const purchase = new Purchase(req.body);
    const totalPurchaseAmount = purchase.total;
    await purchase.save();
    // Update vendor's totalPurchaseAmount
    await Vendor.findOneAndUpdate(
      { companyName: purchase.companyName },
      {
        $push: {
          purchasesList: {
            purchaseNo: purchase.purchaseNo,
            purchaseDate: purchase.createdDate,
            dueDate: purchase.dueDate,
            totalAmount: purchase.total,
            paymentType: purchase.cashCredit,
          },
        },
        $inc: {
          totalPurchasesAmount: purchase.total,
        },
      }
    );
    console.log(totalPurchaseAmount);
    res.status(201).json({ message: "Purchase created successfully", purchase });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.find();
    res.json(purchases);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPurchaseById = async (req, res) => {
  try {
    const purchase = await Purchase.findById(req.params.id);
    if (!purchase) {
      return res.status(404).json({ error: "Purchase not found" });
    }
    res.json(purchase);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePurchaseById = async (req, res) => {
  try {
    const purchase = await Purchase.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!purchase) {
      return res.status(404).json({ error: "Purchase not found" });
    }
    res.json({ message: "Purchase updated successfully", purchase });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.deletePurchaseById = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const purchase = await Purchase.findById(req.params.id);
    if (!purchase) {
      return res.status(404).json({ error: "Purchase not found" });
    }

    // Retrieve vendor data based on the purchase's companyName
    const vendor = await Vendor.findOne({ companyName: purchase.companyName });

    if (!vendor) {
      return res.status(404).json({ error: "Vendor not found for this purchase" });
    }
    console.log(vendor);
    // Update vendor's purchasesList and totalPurchasesAmount
    vendor.purchasesList = vendor.purchasesList.filter(
      (inv) => inv.purchaseNo.toString() !== purchase.purchaseNo.toString()
    );
    console.log(vendor.purchasesList);
    vendor.totalPurchasesAmount -= purchase.total;
    await vendor.save();

    // Delete the purchase
    await Purchase.findByIdAndRemove(req.params.id);

    await session.commitTransaction();
    session.endSession();

    res.json({ message: "Purchase deleted successfully", purchase });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    res.status(500).json({ error: error.message });
  }
};
