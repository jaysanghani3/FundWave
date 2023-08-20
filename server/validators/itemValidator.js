
const Joi = require('joi');

exports.createItem = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        group: Joi.string().required(),
        category: Joi.string().required(),
        code: Joi.string().required(),
        type: Joi.string().required(),
        description: Joi.string().required(),
        stockUnit: Joi.string().required(),
        quantity: Joi.number().default(0),
        reorderLevel: Joi.number().default(0),
        expiryDate: Joi.date(),
        gst: Joi.number().default(0),
        purchasePrice: Joi.number().default(0),
        purchaseRateFactor: Joi.number().default(0),
        mrp: Joi.number().default(0),
        minimumSalePrice: Joi.number().default(0),
        salePrice: Joi.number().default(0),
        wholeSalePrice: Joi.number().default(0),
        dealerPrice: Joi.number().default(0),
        saleRateFactor: Joi.number().default(0),
        discount: Joi.number().default(0),
    });

    validateRequest(req, res, next, schema);
};

exports.updateItem = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required(),
  group: Joi.string().required(),
  category: Joi.string().required(),
  code: Joi.string().required(),
  type: Joi.string().required(),
  description: Joi.string().required(),
  stockUnit: Joi.string().required(),
  quantity: Joi.number().default(0),
  reorderLevel: Joi.number().default(0),
  expiryDate: Joi.date(),
  gst: Joi.number().default(0),
  purchasePrice: Joi.number().default(0),
  purchaseRateFactor: Joi.number().default(0),
  mrp: Joi.number().default(0),
  minimumSalePrice: Joi.number().default(0),
  salePrice: Joi.number().default(0),
  wholeSalePrice: Joi.number().default(0),
  dealerPrice: Joi.number().default(0),
  saleRateFactor: Joi.number().default(0),
  discount: Joi.number().default(0),

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
