const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true }, // Vegetables, Spices, Tubers વગેરે
    price: { type: Number, required: true },
    oldPrice: { type: Number }, // ડિસ્કાઉન્ટ બતાવવા માટે
    discount: { type: String }, // દા.ત. "-10%"
    image: { type: String, required: true }, // પ્રોડક્ટનો ફોટો
    stock: { type: Boolean, default: true }  // Sold out બતાવવા માટે
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);