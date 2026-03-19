const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' }, // 'user' or 'admin'
  cart: { type: Array, default: [] },      // बाद में सिंक करने के लिए
  wishlist: { type: Array, default: [] },  // बाद में सिंक करने के लिए
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);