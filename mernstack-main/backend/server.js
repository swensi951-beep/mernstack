const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/auth'); 
const orderRoutes = require('./routes/orderRoutes'); // ⭐ 1. ऑर्डर राउट्स को इम्पोर्ट करें

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); 

// Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/farmmart')
    .then(() => console.log("Connected to FarmMart Database! 🌿"))
    .catch(err => console.log("Connection Error:", err));

// --- Routes ---

// Products के लिए
app.use('/api/products', productRoutes);

// Auth के लिए
app.use('/api/auth', authRoutes); 

// ⭐ 2. Orders के लिए (नया राउट जोड़ें)
// अब आपकी Checkout वाली API (http://localhost:5000/api/orders/place) काम करने लगेगी
app.use('/api/orders', orderRoutes); 

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));