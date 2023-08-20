// controllers/itemController.js

const Item = require('../models/item');

exports.createItem = async (req, res) => {
    try {
        const item = new Item(req.body);
        await item.save();
        res.status(201).json({ message: 'Item created successfully', item });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getItems = async (req, res) => {
    try{
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getByItemCode = async (req, res) => {
    try {
        const items = await Item.find({ code: req.params.code }).exec();

        if (!items) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getByItemCompanyName = async (req, res) => {
    try {
        const items = await Item.find({ companyName: { $regex: req.params.companyName, $options: "i" }}).exec();

        console.log('Item not found');
        if (!items) {

            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(items);
    } catch (error) {
        console.log('Item not found');

        res.status(500).json({ error: error.message });
    }
};

exports.updateItemById = async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json({ message: 'Item updated successfully', item });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteItemById = async (req, res) => {
    try {
        const item = await Item.findByIdAndRemove(req.params.id);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json({ message: 'Item deleted successfully', item });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteItemByCompanyName = async (req, res) => {
    try {
        const item = await Item.deleteOne({ companyName: { $regex: req.params.companyName, $options: "i" }});
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json({ message: 'Item deleted successfully', item });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteItemByCode = async (req, res) => {
    try {
        const item = await Item.deleteOne({ code: req.params.code});
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json({ message: 'Item deleted successfully', item });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
