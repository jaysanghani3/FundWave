// controllers/customerController.js

const Customer = require('../models/customer');

exports.createCustomer = async (req, res) => {
    try {
        const customer = new Customer(req.body);
        await customer.save();
        res.status(201).json({ message: 'Customer created successfully', customer });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCustomers = async (req, res) => {
    try{
        const customers = await Customer.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getByCustomerCode = async (req, res) => {
    try {
        const customers = await Customer.find({ code: req.params.code }).exec();

        if (!customers) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getByCustomerCompanyName = async (req, res) => {
    try {
        const customers = await Customer.find({ companyName: { $regex: req.params.companyName, $options: "i" }}).exec();

        console.log('Customer not found');
        if (!customers) {

            return res.status(404).json({ error: 'Customer not found' });
        }
        res.json(customers);
    } catch (error) {
        console.log('Customer not found');

        res.status(500).json({ error: error.message });
    }
};

exports.updateCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.json({ message: 'Customer updated successfully', customer });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findByIdAndRemove(req.params.id);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.json({ message: 'Customer deleted successfully', customer });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCustomerByCompanyName = async (req, res) => {
    try {
        const customer = await Customer.deleteOne({ companyName: { $regex: req.params.companyName, $options: "i" }});
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.json({ message: 'Customer deleted successfully', customer });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCustomerByCode = async (req, res) => {
    try {
        const customer = await Customer.deleteOne({ code: req.params.code});
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.json({ message: 'Customer deleted successfully', customer });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
