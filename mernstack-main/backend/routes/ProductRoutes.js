const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// POST route to add product
router.post('/add', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET route to fetch all products
router.get('/all', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// router.js
// Update Product
router.put('/:id', async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updated);
    } catch (err) { res.status(500).json(err); }
});

// Delete Product
router.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted");
    } catch (err) { res.status(500).json(err); }
});

module.exports = router; // Yeh line bahut zaroori hai