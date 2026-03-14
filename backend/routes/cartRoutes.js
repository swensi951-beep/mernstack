const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// POST: /api/cart/add
router.post('/add', async (req, res) => {
    try {
        const { productId, name, price, quantity } = req.body;

        // Check karo ke product cart ma chhe?
        let item = await Cart.findOne({ productId });

        if (item) {
            // Jo hoy to quantity plus karo
            item.quantity += quantity;
            await item.save();
            return res.status(201).json(item);
        } else {
            // Navi product add karo
            const newItem = new Cart({ productId, name, price, quantity });
            await newItem.save();
            return res.status(201).json(newItem);
        }
    } catch (error) {
        console.error("Cart Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;