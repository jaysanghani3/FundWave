const Joi = require('joi');

exports.createInvoice = (req, res, next) => {
    const schema = Joi.object({
      invoiceNumber: Joi.string().required(),
      createdDate: Joi.date().required(),
      dueDate: Joi.date().required(),
      sender: Joi.object({
        companyName: Joi.string().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        country: Joi.string().required(),
        addressLine1: Joi.string().required(),
        addressLine2: Joi.string(),
        state: Joi.string().required(),
        city: Joi.string().required(),
        phone: Joi.number().required(),
        email: Joi.string().email().required(),
      }).required(),
      recipient: Joi.object({
        companyName: Joi.string().required(),
        firstName: Joi.string().required(),
        addressLine1: Joi.string().required(),
        addressLine2: Joi.string(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        country: Joi.string().required(),
        postalCode: Joi.number().required(),
        phone: Joi.number().required(),
        email: Joi.string().email().required(),
      }).required(),
      items: Joi.array()
        .items(
          Joi.object({
            name: Joi.string().required(),
            description: Joi.string().required(),
            quantity: Joi.number().min(0).required(),
            price: Joi.number().min(0).required(),
            discount: Joi.number().min(0).default(0),
            taxableValue: Joi.number().min(0).required(),
            cgst: Joi.number().min(0).default(0),
            sgst: Joi.number().min(0).default(0),
            igst: Joi.number().min(0).default(0),
            total: Joi.number().min(0).required(),
          })
        )
        .min(1)
        .required(),
      subTotal: Joi.number().min(0).required(),
      discount: Joi.number().min(0).default(0),
      taxableValue: Joi.number().min(0).required(),
      cgst: Joi.number().min(0).default(0),
      sgst: Joi.number().min(0).default(0),
      igst: Joi.number().min(0).default(0),
      total: Joi.number().min(0).required(),
      terms: Joi.string().required(),
      notes: Joi.string(),
    });

    validateRequest(req, res, next, schema);
};

exports.updateInvoice = (req, res, next) => {
    const schema = Joi.object({
      invoiceNumber: Joi.string().required(),
      createdDate: Joi.date().required(),
      dueDate: Joi.date().required(),
      sender: Joi.object({
        companyName: Joi.string().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        country: Joi.string().required(),
        addressLine1: Joi.string().required(),
        addressLine2: Joi.string(),
        state: Joi.string().required(),
        city: Joi.string().required(),
        phone: Joi.number().required(),
        email: Joi.string().email().required(),
      }).required(),
      recipient: Joi.object({
        companyName: Joi.string().required(),
        firstName: Joi.string().required(),
        addressLine1: Joi.string().required(),
        addressLine2: Joi.string(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        country: Joi.string().required(),
        postalCode: Joi.number().required(),
        phone: Joi.number().required(),
        email: Joi.string().email().required(),
      }).required(),
      items: Joi.array()
        .items(
          Joi.object({
            name: Joi.string().required(),
            description: Joi.string().required(),
            quantity: Joi.number().min(0).required(),
            price: Joi.number().min(0).required(),
            discount: Joi.number().min(0).default(0),
            taxableValue: Joi.number().min(0).required(),
            cgst: Joi.number().min(0).default(0),
            sgst: Joi.number().min(0).default(0),
            igst: Joi.number().min(0).default(0),
            total: Joi.number().min(0).required(),
          })
        )
        .min(1)
        .required(),
      subTotal: Joi.number().min(0).required(),
      discount: Joi.number().min(0).default(0),
      taxableValue: Joi.number().min(0).required(),
      cgst: Joi.number().min(0).default(0),
      sgst: Joi.number().min(0).default(0),
      igst: Joi.number().min(0).default(0),
      total: Joi.number().min(0).required(),
      terms: Joi.string().required(),
      notes: Joi.string(),
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


