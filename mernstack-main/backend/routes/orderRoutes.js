// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); // पक्का करें कि यह पाथ सही है

router.post('/place', async (req, res) => {
  try {
    console.log("Order Received:", req.body); // टर्मिनल में चेक करने के लिए
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    
    res.status(201).json({ 
      success: true, 
      order: savedOrder 
    });
  } catch (error) {
    console.error("DB Save Error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Database error: " + error.message 
    });
  }
});



// routes/orderRoutes.js
router.get('/user/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        console.log("Searching orders for ID:", userId); // 👈 टर्मिनल में चेक करें

        const orders = await Order.find({ userId: userId }).sort({ createdAt: -1 });
        
        console.log("Orders found from DB:", orders.length); // 👈 अगर यहाँ 0 आ रहा है तो DB में डेटा नहीं है
        res.status(200).json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
// ❌ गलत: await orderModel.findByIdAndUpdate...
// ✅ सही: await Order.findByIdAndUpdate...

router.post("/status", async (req, res) => {
  const { orderId, status } = req.body;
  try {
    // यहाँ Model का नाम वही रखें जो आपने ऊपर define किया है (Order)
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId, 
      { status: status }, 
      { new: true } // ताकि अपडेटेड डेटा वापस मिले
    );

    if (!updatedOrder) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.json({ success: true, message: "Status updated", order: updatedOrder });
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});
// सभी ऑर्डर्स देखने के लिए (For Admin)
router.get('/all', async (req, res) => {
    try {
        const orders = await Order.find({}).sort({ createdAt: -1 });
        res.status(200).json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;