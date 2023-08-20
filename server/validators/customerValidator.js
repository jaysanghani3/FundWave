
const Joi = require('joi');

exports.createCustomer = (req, res, next) => {
    const schema = Joi.object({
        companyName: Joi.string().required(),
        contactPerson: Joi.string().required(),
        contactNumber: Joi.number().required(),
        email: Joi.string().email().required(),
        code: Joi.string().required(),
        status: Joi.string().optional(),
        type: Joi.string().optional(),
        gst: Joi.string().required(),
        pan: Joi.string().required(),
        billingAddress: Joi.string().required(),
        shippingAddress: Joi.string().optional(),
        state: Joi.string().required(),
        city: Joi.string().required(),
        pincode: Joi.number().required(),
        country: Joi.string().required(),
        createdOnDate: Joi.date().iso().optional(),
        updatedOnDate: Joi.date().iso().optional(),
        notes: Joi.string().optional(),
        purchasesData: Joi.object({
            totalPurchaseCount: Joi.number().integer().min(0).optional(),
            totalPurchaseAmount: Joi.number().min(0).optional(),
        }).optional(),
        salesData: Joi.object({
            totalSaleCount: Joi.number().integer().min(0).optional(),
            totalSaleAmount: Joi.number().min(0).optional(),
        }).optional(),
        returnsData: Joi.object({
            totalReturnCount: Joi.number().integer().min(0).optional(),
            totalReturnAmount: Joi.number().min(0).optional(),
        }).optional(),
        paymentsData: Joi.object({
            totalPaymentCount: Joi.number().integer().min(0).optional(),
            totalPaymentAmount: Joi.number().min(0).optional(),
        }).optional(),
        bankingInfo: Joi.object({
            bankName: Joi.string(),
            accountNumber: Joi.number(),
            ifsc: Joi.string(),
            branch: Joi.string(),
        }),

    });

    validateRequest(req, res, next, schema);
};

exports.updateCustomer = (req, res, next) => {
    const schema = Joi.object({
        companyName: Joi.string().required(),
        contactPerson: Joi.string().required(),
        contactNumber: Joi.number().required(),
        email: Joi.string().email().required(),
        code: Joi.string().required(),
        status: Joi.string().optional(),
        type: Joi.string().optional(),
        gst: Joi.string().required(),
        pan: Joi.string().required(),
        billingAddress: Joi.string().required(),
        shippingAddress: Joi.string().optional(),
        state: Joi.string().required(),
        city: Joi.string().required(),
        pincode: Joi.number().required(),
        country: Joi.string().required(),
        createdOnDate: Joi.date().iso().optional(),
        updatedOnDate: Joi.date().iso().optional(),
        notes: Joi.string().optional(),
        purchasesData: Joi.object({
            totalPurchaseCount: Joi.number().integer().min(0).optional(),
            totalPurchaseAmount: Joi.number().min(0).optional(),
        }).optional(),
        salesData: Joi.object({
            totalSaleCount: Joi.number().integer().min(0).optional(),
            totalSaleAmount: Joi.number().min(0).optional(),
        }).optional(),
        returnsData: Joi.object({
            totalReturnCount: Joi.number().integer().min(0).optional(),
            totalReturnAmount: Joi.number().min(0).optional(),
        }).optional(),
        paymentsData: Joi.object({
            totalPaymentCount: Joi.number().integer().min(0).optional(),
            totalPaymentAmount: Joi.number().min(0).optional(),
        }).optional(),
        bankingInfo: Joi.object({
            bankName: Joi.string().optional(),
            accountNumber: Joi.number().optional(),
            ifsc: Joi.string().optional(),
            branch: Joi.string().optional(),
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
