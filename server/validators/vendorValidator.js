
const Joi = require('joi');

exports.createVendor = (req, res, next) => {
    const schema = Joi.object({
        // Id: Joi.string().required(),
        companyName: Joi.string().required(),
        contactPerson: Joi.string().required(),
        contactNumber: Joi.number().required(),
        email: Joi.string().email().required(),
        code: Joi.string().required(),
        status: Joi.string().required(),
        type: Joi.string().required(),
        gst: Joi.string().required(),
        pan: Joi.string().required(),
        billingAddress: Joi.string().required(),
        shippingAddress: Joi.string().required(),
        state: Joi.string().required(),
        city: Joi.string().required(),
        pincode: Joi.number().required(),
        country: Joi.string().required(),
        createdOnDate: Joi.date().iso().required(),
        updatedOnDate: Joi.date().iso().required(),
        notes: Joi.string(),
        purchasesData: Joi.object({
            totalPurchaseCount: Joi.number().integer().min(0).required(),
            totalPurchaseAmount: Joi.number().min(0).required(),
        }).required(),
        salesData: Joi.object({
            totalSaleCount: Joi.number().integer().min(0).required(),
            totalSaleAmount: Joi.number().min(0).required(),
        }).required(),
        returnsData: Joi.object({
            totalReturnCount: Joi.number().integer().min(0).required(),
            totalReturnAmount: Joi.number().min(0).required(),
        }).required(),
        paymentsData: Joi.object({
            totalPaymentCount: Joi.number().integer().min(0).required(),
            totalPaymentAmount: Joi.number().min(0).required(),
        }).required(),
        bankingInfo: Joi.object({
            bankName: Joi.string(),
            accountNumber: Joi.number(),
            ifsc: Joi.string(),
            branch: Joi.string(),
        }),
    });

    validateRequest(req, res, next, schema);
};

exports.updateVendor = (req, res, next) => {
    const schema = Joi.object({
        // Id: Joi.string().required(),
        companyName: Joi.string().required(),
        contactPerson: Joi.string().required(),
        contactNumber: Joi.number().required(),
        email: Joi.string().email().required(),
        code: Joi.string().required(),
        status: Joi.string().required(),
        type: Joi.string().required(),
        gst: Joi.string().required(),
        pan: Joi.string().required(),
        billingAddress: Joi.string().required(),
        shippingAddress: Joi.string().required(),
        state: Joi.string().required(),
        city: Joi.string().required(),
        pincode: Joi.number().required(),
        country: Joi.string().required(),
        createdOnDate: Joi.date().iso().required(),
        updatedOnDate: Joi.date().iso().required(),
        notes: Joi.string(),
        purchasesData: Joi.object({
            totalPurchaseCount: Joi.number().integer().min(0).required(),
            totalPurchaseAmount: Joi.number().min(0).required(),
        }).required(),
        salesData: Joi.object({
            totalSaleCount: Joi.number().integer().min(0).required(),
            totalSaleAmount: Joi.number().min(0).required(),
        }).required(),
        returnsData: Joi.object({
            totalReturnCount: Joi.number().integer().min(0).required(),
            totalReturnAmount: Joi.number().min(0).required(),
        }).required(),
        paymentsData: Joi.object({
            totalPaymentCount: Joi.number().integer().min(0).required(),
            totalPaymentAmount: Joi.number().min(0).required(),
        }).required(),
        bankingInfo: Joi.object({
            bankName: Joi.string(),
            accountNumber: Joi.number(),
            ifsc: Joi.string(),
            branch: Joi.string(),
        }),

    });

    validateRequest(req, res, next, schema);
};

function validateRequest(req, res, next, schema) {
    const { error, value } = schema.validate(req.body);
    if (error) {
        const errorMessage = error.details.map((detail) => detail.message).join(', ');
        return res.status(400).json({ error: errorMessage });
    }

    req.body = value;
    next();
}
